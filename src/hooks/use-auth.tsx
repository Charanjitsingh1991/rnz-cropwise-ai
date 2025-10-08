
'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useToast } from './use-toast';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Extend the NextAuth user type to include isAdmin
interface ExtendedUser {
  id?: string;
  name?: string | null;
  email?: string | null;
  isAdmin?: boolean;
  displayName?: string | null;
  fullName?: string | null;
  country?: string | null;
  phoneNumber?: string | null;
  fcmToken?: string | null;
}

export const useAuth = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { toast } = useToast();

  // Debug only in development
  if (process.env.NODE_ENV === 'development') {
    console.log('useAuth Debug:', { 
      status, 
      hasSession: !!session, 
      hasUser: !!session?.user
    });
  }

  const loginWithEmail = async (email: string, password: string) => {
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      
      if (result?.error) {
        throw new Error(result.error);
      }
      
      // Wait a bit for the session to update
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if session was established
      if (result?.ok) {
        toast({ title: 'Success', description: 'Logged in successfully!' });
        // Force a page reload to ensure session is properly loaded
        window.location.href = '/';
      } else {
        throw new Error('Login failed - no session established');
      }
    } catch (error: any) {
      toast({ title: 'Login Failed', description: error.message, variant: 'destructive' });
    }
  };

  const signupWithEmail = async (email: string, password: string, fullName: string, country: string, phoneNumber: string) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          fullName,
          country,
          phoneNumber
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Signup failed');
      }

      const result = await response.json();
      toast({ title: 'Account created successfully!' });
      
      // Redirect to login page after successful signup
      router.push('/login');
    } catch (error: any) {
      toast({ title: 'Signup Failed', description: error.message, variant: 'destructive' });
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signIn('google');
    } catch (error: any) {
      toast({ title: 'Google Sign-in Failed', description: error.message, variant: 'destructive' });
    }
  };

  const logout = async () => {
    try {
      await signOut({ redirect: false });
      router.push('/login');
      toast({ title: 'Logged out successfully.' });
    } catch (error: any) {
      toast({ title: 'Logout Failed', description: error.message, variant: 'destructive' });
    }
  };

  const updateUser = async (data: any) => {
    try {
      const response = await fetch('/api/users/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const result = await response.json();
      
      // Update the session with new user data
      toast({ title: 'Success', description: 'Profile updated successfully!' });
      
      // Force a session refresh by calling the NextAuth update endpoint
      await fetch('/api/auth/session', { method: 'GET' });
      
      // Small delay to ensure session is updated, then reload
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error: any) {
      toast({ title: 'Update Failed', description: error.message, variant: 'destructive' });
    }
  };

  return {
    user: (session?.user as ExtendedUser) || null,
    userProfile: (session?.user as ExtendedUser) || null,
    isAdmin: (session?.user as ExtendedUser)?.isAdmin || false,
    loading: status === 'loading',
    loginWithEmail,
    signupWithEmail,
    loginWithGoogle,
    logout,
    updateUser,
  };
};
