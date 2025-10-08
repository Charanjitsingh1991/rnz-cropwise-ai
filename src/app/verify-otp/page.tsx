'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Shield, ArrowLeft, Clock, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const otpSchema = z.object({
  otp: z.string().length(6, 'OTP must be 6 digits').regex(/^\d+$/, 'OTP must contain only numbers'),
});

const newPasswordSchema = z.object({
  newPassword: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

function VerifyOTPContent() {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const purpose = searchParams.get('purpose') || 'password_reset';

  const [isVerifying, setIsVerifying] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 120 seconds
  const [canResend, setCanResend] = useState(false);
  const [verifiedOtp, setVerifiedOtp] = useState('');

  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: '',
    },
  });

  const passwordForm = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  });

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0 && !isOtpVerified) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setCanResend(true);
    }
  }, [timeLeft, isOtpVerified]);

  // Format time display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const onVerifyOTP = async (values: z.infer<typeof otpSchema>) => {
    if (!email) {
      toast({
        title: 'Error',
        description: 'Email not found. Please start the process again.',
        variant: 'destructive',
      });
      return;
    }

    setIsVerifying(true);
    try {
      // For signup, verify and create user
      if (purpose === 'signup') {
        const response = await fetch('/api/auth/verify-signup-otp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            otp: values.otp,
          }),
        });

        const data = await response.json();

        if (data.success && data.token) {
          toast({
            title: 'Success!',
            description: 'Your account has been created successfully!',
          });
          // Store token if using JWT
          if (data.token) {
            localStorage.setItem('token', data.token);
          }
          // Redirect to dashboard or home
          router.push('/admin');
          return;
        } else {
          toast({
            title: 'Verification Failed',
            description: data.error || 'Invalid OTP. Please try again.',
            variant: 'destructive',
          });
        }
      } else {
        // For password reset, just store OTP and show password form
        // Don't verify OTP yet - will verify when resetting password
        setIsOtpVerified(true);
        setVerifiedOtp(values.otp);
        toast({
          title: 'OTP Accepted',
          description: 'Now enter your new password.',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to verify OTP. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const onResetPassword = async (values: z.infer<typeof newPasswordSchema>) => {
    if (!email || !verifiedOtp) {
      toast({
        title: 'Error',
        description: 'Please verify OTP first.',
        variant: 'destructive',
      });
      return;
    }

    setIsResetting(true);
    try {
      const response = await fetch('/api/auth/reset-password-with-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          otp: verifiedOtp,
          newPassword: values.newPassword,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Success',
          description: 'Password reset successfully! Redirecting to login...',
        });
        setTimeout(() => router.push('/login'), 2000);
      } else {
        toast({
          title: 'Error',
          description: data.error || 'Failed to reset password',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to reset password. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsResetting(false);
    }
  };

  const handleResendOTP = async () => {
    if (!email) return;

    setIsResending(true);
    try {
      const response = await fetch('/api/auth/resend-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, purpose }),
      });

      const data = await response.json();

      if (data.success) {
        setTimeLeft(120);
        setCanResend(false);
        toast({
          title: 'Code Resent',
          description: 'A new verification code has been sent to your email.',
        });
      } else {
        toast({
          title: 'Error',
          description: data.error || 'Failed to resend code',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to resend code. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsResending(false);
    }
  };

  if (!email) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">Invalid request. Please start the password reset process again.</p>
            <div className="mt-4 text-center">
              <Link href="/forgot-password">
                <Button>Start Password Reset</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full">
        <CardHeader>
          <div className="mx-auto h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-center mt-4 text-2xl">
            {isOtpVerified 
              ? 'Reset Your Password' 
              : purpose === 'signup' 
                ? 'Verify Your Email'
                : 'Enter Verification Code'
            }
          </CardTitle>
          <CardDescription className="text-center">
            {isOtpVerified 
              ? 'Create a new strong password for your account'
              : purpose === 'signup'
                ? `We sent a 6-digit verification code to ${email}. Enter it below to complete your registration.`
                : `We sent a 6-digit code to ${email}`
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isOtpVerified ? (
            <>
              <Form {...otpForm}>
                <form onSubmit={otpForm.handleSubmit(onVerifyOTP)} className="space-y-6">
                  <FormField
                    control={otpForm.control}
                    name="otp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Verification Code</FormLabel>
                        <FormControl>
                          <Input 
                            type="text" 
                            placeholder="Enter 6-digit code" 
                            maxLength={6}
                            className="text-center text-2xl tracking-widest"
                            {...field} 
                            autoComplete="one-time-code"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Timer Display */}
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Clock className="h-4 w-4" />
                    <span className={timeLeft < 30 ? 'text-destructive font-semibold' : 'text-muted-foreground'}>
                      Time remaining: {formatTime(timeLeft)}
                    </span>
                  </div>

                  <Button type="submit" className="w-full" disabled={isVerifying || timeLeft === 0}>
                    {isVerifying ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      'Verify Code'
                    )}
                  </Button>
                </form>
              </Form>

              {/* Resend OTP */}
              <div className="mt-6 text-center">
                {canResend || timeLeft === 0 ? (
                  <Button 
                    variant="outline" 
                    onClick={handleResendOTP}
                    disabled={isResending}
                    className="w-full"
                  >
                    {isResending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Resending...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Resend Code
                      </>
                    )}
                  </Button>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Didn't receive the code? You can resend in {formatTime(timeLeft)}
                  </p>
                )}
              </div>
            </>
          ) : (
            <Form {...passwordForm}>
              <form onSubmit={passwordForm.handleSubmit(onResetPassword)} className="space-y-6">
                <FormField
                  control={passwordForm.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="Enter new password" 
                          {...field}
                          autoComplete="new-password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={passwordForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="Confirm new password" 
                          {...field}
                          autoComplete="new-password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isResetting}>
                  {isResetting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Resetting Password...
                    </>
                  ) : (
                    'Reset Password'
                  )}
                </Button>
              </form>
            </Form>
          )}

          <div className="mt-6 text-center">
            <Link 
              href="/login" 
              className="text-sm text-muted-foreground hover:text-primary flex items-center justify-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function VerifyOTPPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <VerifyOTPContent />
    </Suspense>
  );
}



