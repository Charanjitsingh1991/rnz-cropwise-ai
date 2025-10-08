
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Loader2, LogIn, Fingerprint } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { BiometricAuth } from '@aparajita/capacitor-biometric-auth';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

const GoogleIcon = () => (
    <svg className="mr-2 h-4 w-4" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.021,35.591,44,30.138,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
  );

export default function LoginPage() {
  const { toast } = useToast();
  const { loginWithEmail, loginWithGoogle } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [biometricAvailable, setBiometricAvailable] = useState(false);
  const [biometricLoading, setBiometricLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Check if biometric authentication is available
  useEffect(() => {
    const checkBiometric = async () => {
      try {
        const result = await BiometricAuth.checkBiometry();
        setBiometricAvailable(result.isAvailable);
      } catch (error) {
        console.log('Biometric not available:', error);
        setBiometricAvailable(false);
      }
    };
    checkBiometric();
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      await loginWithEmail(values.email, values.password);
      
      // Save credentials for biometric authentication (only if biometric is available)
      if (biometricAvailable) {
        localStorage.setItem('rnz-saved-email', values.email);
        localStorage.setItem('rnz-saved-password', values.password);
      }
      
      // Don't redirect here - let the auth hook handle it
      // The auth hook will redirect after session is established
    } catch (error: any) {
      console.error(error);
      toast({ title: 'Login failed', description: error.message, variant: 'destructive' });
    } finally {
        setLoading(false);
    }
  }

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    await loginWithGoogle();
    setGoogleLoading(false);
  }

  const handleBiometricAuth = async () => {
    setBiometricLoading(true);
    try {
      const result = await BiometricAuth.authenticate({
        reason: 'Please authenticate to access RNZ CropWise',
        subtitle: 'Use your fingerprint or face to sign in',
        fallbackTitle: 'Use PIN'
      });
      
      if (result.isAuthenticated) {
        // Check if user credentials are saved in local storage
        const savedEmail = localStorage.getItem('rnz-saved-email');
        const savedPassword = localStorage.getItem('rnz-saved-password');
        
        if (savedEmail && savedPassword) {
          await loginWithEmail(savedEmail, savedPassword);
          toast({ title: 'Biometric login successful!' });
          router.push('/');
        } else {
          toast({ 
            title: 'No saved credentials', 
            description: 'Please login with email/password first to enable biometric authentication.',
            variant: 'destructive' 
          });
        }
      }
    } catch (error: any) {
      console.error('Biometric auth failed:', error);
      toast({ 
        title: 'Biometric authentication failed', 
        description: error.message || 'Please try again',
        variant: 'destructive' 
      });
    } finally {
      setBiometricLoading(false);
    }
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-full">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <Image src="/logo.png" alt="App Logo" width={80} height={50} className="mx-auto h-12 w-auto object-contain" />
            <CardTitle className="font-headline text-2xl pt-4">Welcome Back</CardTitle>
            <CardDescription>Sign in to access your account.</CardDescription>
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl><Input type="password" placeholder="••••••••" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={loading || googleLoading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Log In
                </Button>
                
                <div className="text-center">
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot your password?
                  </Link>
                </div>
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
              Sign in with Google
            </Button>
            
            {biometricAvailable && (
              <Button 
                variant="outline" 
                className="w-full mt-3" 
                onClick={handleBiometricAuth} 
                disabled={loading || googleLoading || biometricLoading}
              >
                {biometricLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Fingerprint className="mr-2 h-4 w-4" />
                )}
                Sign in with Biometric
              </Button>
            )}
             <p className="mt-6 text-center text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link href="/signup" className="font-semibold text-primary hover:underline">
                  Sign up
                </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
