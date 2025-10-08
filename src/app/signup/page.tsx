
'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../../components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { useToast } from '../../hooks/use-toast';
import { useAuth } from '../../hooks/use-auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Loader2, UserPlus, Fingerprint, Shield, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { countries, getCountryByName, validatePhoneNumber, formatPhoneNumber } from '../../lib/countries';
import Image from 'next/image';

// Use full countries list for signup - users can register from any country
// Pilot countries restriction only applies to AI advisor functionality

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
  confirmPassword: z.string(),
  country: z.string({ required_error: 'Please select a country.'}),
  phoneNumber: z.string().min(1, { message: 'Phone number is required.' })
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
}).refine((data) => {
  if (data.country && data.phoneNumber) {
    const country = getCountryByName(data.country);
    if (country) {
      const cleanNumber = data.phoneNumber.replace(/\D/g, '');
      return country.phoneLength.some(length => cleanNumber.length === length);
    }
  }
  return true;
}, {
  message: "Phone number format is invalid for the selected country",
  path: ["phoneNumber"]
});


const GoogleIcon = () => (
    <svg className="mr-2 h-4 w-4" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.021,35.591,44,30.138,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
  );

export default function SignupPage() {
  const { toast } = useToast();
  const { signupWithEmail, loginWithGoogle } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<{name: string, phoneCode: string, phoneLength: number[]} | null>(null);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [otp, setOtp] = useState('');
  const [pendingSignupData, setPendingSignupData] = useState<any>(null);
  const [showBiometricGuidance, setShowBiometricGuidance] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
      country: '',
      phoneNumber: ''
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      // Send signup request with OTP
      const signupResponse = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          fullName: values.fullName,
          country: values.country,
          phoneNumber: `${selectedCountry?.phoneCode || ''}${values.phoneNumber}`,
        }),
      });

      const signupData = await signupResponse.json();

      if (signupData.success) {
        toast({ 
          title: 'Verification Code Sent', 
          description: 'Please check your email for the 6-digit verification code.' 
        });
        // Redirect to OTP verification page
        router.push(`/verify-otp?email=${encodeURIComponent(values.email)}&purpose=signup`);
      } else {
        toast({ title: 'Error', description: signupData.error || 'Failed to send verification code', variant: 'destructive' });
      }
    } catch (error: any) {
      console.error(error);
      toast({ title: 'Signup failed', description: error.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  }

  const verifyOtpAndSignup = async () => {
    if (!pendingSignupData || !otp) return;

    setVerifyingOtp(true);
    try {
      // Verify OTP
      const verifyResponse = await fetch('/api/auth/verify-email', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: pendingSignupData.email, otp }),
      });

      const verifyData = await verifyResponse.json();

      if (verifyResponse.ok) {
        // OTP verified, proceed with signup
        await signupWithEmail(
          pendingSignupData.email, 
          pendingSignupData.password, 
          pendingSignupData.fullName, 
          pendingSignupData.country, 
          pendingSignupData.fullPhoneNumber
        );
        toast({ title: 'Account created successfully!' });
        setShowBiometricGuidance(true);
      } else {
        toast({ title: 'Error', description: verifyData.error || 'Invalid OTP', variant: 'destructive' });
      }
    } catch (error: any) {
      console.error(error);
      toast({ title: 'Verification failed', description: error.message, variant: 'destructive' });
    } finally {
      setVerifyingOtp(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    await loginWithGoogle();
    setGoogleLoading(false);
  }

  const handleCountryChange = (value: string) => {
    const country = countries.find(c => c.name === value);
    setSelectedCountry(country || null);
    form.setValue('country', value);
    form.setValue('phoneNumber', ''); // Reset phone number on country change
  }

  const handleProceedToApp = () => {
    router.push('/');
  }

  // If showing biometric guidance, render that instead
  if (showBiometricGuidance) {
    return (
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-full">
          <Card className="max-w-md w-full">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="font-headline text-2xl">Welcome to CropWise!</CardTitle>
              <CardDescription>Your account has been created successfully.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Fingerprint className="h-5 w-5 text-blue-600 mt-0.5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Enable Biometric Login</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      For faster and more secure access, enable biometric authentication in your device settings.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Enhanced Security</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Biometric login provides an additional layer of security while making access more convenient.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-sm text-blue-900 mb-2">How to enable:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Go to your device Settings</li>
                  <li>• Navigate to Security & Privacy</li>
                  <li>• Enable Fingerprint/Face ID</li>
                  <li>• Return to CropWise and use biometric login</li>
                </ul>
              </div>

              <Button onClick={handleProceedToApp} className="w-full">
                Continue to App
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-full">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <Image src="/logo.png" alt="App Logo" width={80} height={50} className="mx-auto h-12 w-auto object-contain" />
            <CardTitle className="font-headline text-2xl pt-4">Create an Account</CardTitle>
            <CardDescription>Get started with your own RNZ account.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl><Input type="password" placeholder="••••••••" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl><Input type="password" placeholder="••••••••" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <Select onValueChange={handleCountryChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger><SelectValue placeholder="Select your country" /></SelectTrigger></FormControl>
                        <SelectContent>
                            {countries.map(c => <SelectItem key={c.name} value={c.name}>{c.flag} {c.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                       <div className="flex">
                        {selectedCountry && (
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-background text-sm text-muted-foreground">
                                {selectedCountry.phoneCode}
                            </span>
                        )}
                        <FormControl>
                            <Input 
                                type="tel" 
                                placeholder="Your phone number" 
                                {...field} 
                                className={selectedCountry ? "rounded-l-none" : ""}
                                disabled={!selectedCountry}
                                maxLength={selectedCountry?.phoneLength[0]}
                                onChange={(e) => {
                                  const { value } = e.target;
                                  // Allow only numbers and limit to max length
                                  const cleanValue = value.replace(/\D/g, '');
                                  const maxLength = selectedCountry?.phoneLength[0] || 15;
                                  if (cleanValue.length <= maxLength) {
                                    field.onChange(cleanValue);
                                  }
                                }}
                            />
                        </FormControl>
                       </div>
                       {selectedCountry && (
                         <div className="text-xs text-muted-foreground">
                           Valid lengths: {selectedCountry.phoneLength.join(', ')} digits
                         </div>
                       )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={loading || googleLoading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Create Account
                </Button>
              </form>
            </Form>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={loading || googleLoading}>
                {googleLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <GoogleIcon />}
              Sign up with Google
            </Button>
             <p className="mt-6 text-center text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link href="/login" className="font-semibold text-primary hover:underline">
                  Log in
                </Link>
            </p>
          </CardContent>
        </Card>

        {/* OTP Verification Form */}
        {showOtpForm && (
          <Card className="max-w-md w-full mt-4">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-xl">Verify Your Email</CardTitle>
              <CardDescription>
                Enter the 6-digit code sent to {pendingSignupData?.email}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Verification Code</label>
                  <Input
                    type="text"
                    placeholder="Enter 6-digit code"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="text-center text-lg tracking-widest"
                    maxLength={6}
                  />
                </div>
                <Button 
                  onClick={verifyOtpAndSignup} 
                  className="w-full" 
                  disabled={verifyingOtp || otp.length !== 6}
                >
                  {verifyingOtp ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    'Verify & Create Account'
                  )}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowOtpForm(false)} 
                  className="w-full"
                >
                  Back to Signup
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}
