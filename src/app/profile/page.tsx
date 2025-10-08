
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
import { Loader2, User, LogOut, Mail, Fingerprint, LifeBuoy } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { BiometricAuth, BiometryError, BiometryErrorType, CheckBiometryResult, BiometryType } from '@aparajita/capacitor-biometric-auth';
import { authenticateWithBiometrics, checkBiometricAvailability } from '@/lib/biometric-auth';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { countries, getCountryByName, validatePhoneNumber, formatPhoneNumber } from '@/lib/countries';
import { useSession } from 'next-auth/react';

const formSchema = z.object({
  displayName: z.string().min(2, { message: 'Username must be at least 2 characters.' }),
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  country: z.string().min(1, { message: 'Please select a country.' }),
  phoneNumber: z.string().min(1, { message: 'Phone number is required.' }),
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

const getBiometricKey = (userId: string) => `biometric_enabled_${userId}`;

export default function ProfilePage() {
  const { user, userProfile, loading, logout, updateUser } = useAuth();
  const { status } = useSession();
  const { toast } = useToast();
  const router = useRouter();

  const [biometryInfo, setBiometryInfo] = useState<CheckBiometryResult | null>(null);
  const [isBiometricEnabled, setIsBiometricEnabled] = useState(false);

  useEffect(() => {
    const checkBiometrics = async () => {
      try {
        console.log('Checking biometric availability...');
        const result = await BiometricAuth.checkBiometry();
        console.log('Biometric check result:', result);
        console.log('Is available:', result?.isAvailable);
        console.log('Biometry type:', result?.biometryType);
        console.log('Device supports:', result?.strongBiometryIsAvailable);
        
        setBiometryInfo(result);
        const storedPreference = localStorage.getItem(getBiometricKey(user?.uid || ''));
        console.log('Stored preference:', storedPreference);
        
        if (result.isAvailable && storedPreference === 'true') {
            setIsBiometricEnabled(true);
        }
      } catch (error) {
        console.error("Biometric check failed", error);
      }
    };
    checkBiometrics();
  }, []);


  const handleBiometricToggle = async (checked: boolean) => {
    if (checked) {
        console.log('Attempting to enable biometric authentication...');
        console.log('Biometry info:', biometryInfo);
        
        // Check if biometrics is available first
        if (!biometryInfo?.isAvailable) {
            toast({
                title: 'Biometric Authentication Not Available',
                description: 'Biometric authentication is not available on this device.',
                variant: 'destructive',
            });
            return;
        }

        // Attempt to enable biometrics - try direct approach first
        try {
            console.log('Calling BiometricAuth.authenticate directly...');
            const directResult = await BiometricAuth.authenticate({
                reason: 'Please authenticate to enable biometric login for RNZ CropWise.',
                subtitle: 'Use your biometric authentication',
                fallbackTitle: 'Use PIN'
            });
            
            console.log('Direct biometric result:', directResult);
            console.log('Direct result type:', typeof directResult);
            console.log('Direct result keys:', directResult ? Object.keys(directResult) : 'null/undefined');
            
            // Check for success in direct result
            let isSuccess = false;
            if (directResult) {
                if (directResult.isAuthenticated === true) {
                    isSuccess = true;
                    console.log('Success: isAuthenticated = true');
                } else if (directResult === true) {
                    isSuccess = true;
                    console.log('Success: result = true');
                } else if (typeof directResult === 'object' && !directResult.error && !directResult.cancelled) {
                    // Assume success if no error indicators
                    isSuccess = true;
                    console.log('Success: object with no error indicators');
                }
            } else if (directResult === undefined) {
                // WORKAROUND: Some versions of the plugin return undefined on success
                // If we reach this point without an exception, and the AuthActivity was shown,
                // we can assume the user successfully authenticated
                console.log('Result is undefined - checking if this means success...');
                
                // The fact that we got here without an exception and the AuthActivity appeared
                // suggests the user completed authentication successfully
                isSuccess = true;
                console.log('Assuming success due to undefined result after AuthActivity');
            }
            
            console.log('Determined success:', isSuccess);
            
            if (isSuccess) {
                localStorage.setItem(getBiometricKey(user?.uid || ''), 'true');
                setIsBiometricEnabled(true);
                toast({
                    title: 'Biometric Login Enabled',
                    description: 'You can now use biometrics to log in.',
                });
            } else {
                // Authentication failed
                console.error('Biometric authentication failed - no success indicators found');
                toast({
                    title: 'Authentication Failed',
                    description: 'Biometric authentication was cancelled or failed.',
                    variant: 'destructive',
                });
            }
        } catch (error: any) {
            console.error('Biometric authentication error:', error);
            console.error('Error type:', typeof error);
            console.error('Error message:', error.message);
            console.error('Error code:', error.code);
            
            // Check if it was user cancellation
            if (error instanceof BiometryError && error.code === BiometryErrorType.userCancel) {
                toast({
                    title: 'Authentication Cancelled',
                    description: 'You cancelled the biometric authentication.',
                    variant: 'default',
                });
            } else {
                toast({
                    title: 'Authentication Error',
                    description: error.message || 'An error occurred during biometric authentication.',
                    variant: 'destructive',
                });
            }
        }
    } else {
        // Disable biometrics
        localStorage.removeItem(getBiometricKey(user?.uid || ''));
        setIsBiometricEnabled(false);
        toast({
            title: 'Biometric Login Disabled',
            description: 'You will need to use your password to log in.',
        });
    }
  };

  const getBiometryTypeString = () => {
    if (!biometryInfo?.biometryType) return "Biometric";
    switch (biometryInfo.biometryType) {
        case BiometryType.faceId: return "Face ID";
        case BiometryType.touchId: return "Touch ID";
        case BiometryType.fingerprintAuthentication: return "Fingerprint";
        default: return "Biometric";
    }
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      displayName: '',
      fullName: '',
      country: '',
      phoneNumber: '',
    },
  });

  // Debug form values only in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const subscription = form.watch((value, { name, type }) => {
        console.log('Form value changed:', { name, type, value });
      });
      return () => subscription.unsubscribe();
    }
  }, [form]);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('useEffect triggered with user:', user);
      console.log('Debug Info:');
      console.log('User Country:', user?.country);
      console.log('User Phone:', user?.phoneNumber);
      console.log('Form Country:', form.getValues('country') || 'Not set');
      console.log('Form Phone:', form.getValues('phoneNumber') || 'Not set');
    }
    
    if (user) {
      // Extract phone number without country code for the input field
      let phoneNumberValue = user.phoneNumber || '';
      let countryValue = user.country || '';
      
      // If phone number has country code, extract just the number part
      if (phoneNumberValue && phoneNumberValue.startsWith('+')) {
        const spaceIndex = phoneNumberValue.indexOf(' ');
        if (spaceIndex > 0) {
          // Format: "+971 557714245" -> extract "557714245"
          phoneNumberValue = phoneNumberValue.substring(spaceIndex + 1);
        } else {
          // Format: "+971557714245" -> extract "557714245"
          const country = getCountryByName(countryValue);
          if (country) {
            const countryCodeLength = country.phoneCode.length;
            phoneNumberValue = phoneNumberValue.substring(countryCodeLength);
          }
        }
      }
      
      const formData = {
        displayName: user.displayName || user.name || '',
        fullName: user.fullName || '',
        country: countryValue,
        phoneNumber: phoneNumberValue,
      };
      
      // Debug: Log user data to see what's available
      console.log('🔍 PROFILE DEBUG - User data for form:', {
        user: user,
        userKeys: Object.keys(user || {}),
        fullName: user?.fullName,
        displayName: user?.displayName,
        name: user?.name,
        email: user?.email
      });
      console.log('🔍 PROFILE DEBUG - Setting form data:', formData);
      
      // Use a slight delay to ensure Select component is ready
      setTimeout(() => {
        form.reset(formData);
      }, 100);
    } else if (process.env.NODE_ENV === 'development') {
      console.log('No user data available');
    }
  }, [user]); // Remove form from deps to prevent re-runs



  if (loading) {
    return <div className="flex justify-center items-center h-full"><Loader2 className="h-8 w-8 animate-spin" /></div>;
  }

  if (!user) {
    router.push('/login');
    return null;
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Validate that we have the required data
    if (!values.displayName) {
      toast({ title: 'Error', description: 'Username is required', variant: 'destructive' });
      return;
    }
    
    if (!values.fullName) {
      toast({ title: 'Error', description: 'Full name is required', variant: 'destructive' });
      return;
    }

    // Format phone number with country code
    let formattedPhoneNumber = values.phoneNumber;
    if (values.country && values.phoneNumber) {
      const country = getCountryByName(values.country);
      if (country) {
        formattedPhoneNumber = formatPhoneNumber(values.phoneNumber, country);
      }
    }
    
    await updateUser({
      ...values,
      phoneNumber: formattedPhoneNumber,
    });
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4 border-4 border-primary">
              <AvatarFallback className="text-3xl">
                {(user?.fullName || user?.displayName || user?.name || 'U').charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <CardTitle className="font-headline text-2xl">{user?.fullName || user?.displayName || user?.name || 'User'}</CardTitle>
            <CardDescription>{user?.email}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <Separator />
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Update Information</h3>
              

              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="displayName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl><Input placeholder="Your username" {...field} /></FormControl>
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
                        <FormControl><Input placeholder="Your full name" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => {
                      console.log('Country field render - value:', field.value);
                      console.log('Available countries:', countries.map(c => c.name));
                      console.log('Does country exist in list?', countries.some(c => c.name === field.value));
                      return (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            value={field.value || ''}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your country" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {countries.map(country => (
                                <SelectItem key={country.name} value={country.name}>
                                  {country.flag} {country.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => {
                      const countryValue = form.watch('country');
                      const selectedCountry = countryValue ? getCountryByName(countryValue) : null;
                      const phoneCode = selectedCountry?.phoneCode || '';
                      const phoneLengths = selectedCountry?.phoneLength || [];
                      const maxLength = phoneLengths.length > 0 ? Math.max(...phoneLengths) : 15;
                      
                      return (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <div className="flex">
                            <div className="flex-shrink-0 px-3 py-2 bg-muted border border-r-0 rounded-l-md text-sm text-muted-foreground min-w-[80px] text-center">
                              {phoneCode || 'Select country first'}
                            </div>
                            <FormControl>
                              <Input 
                                type="tel" 
                                placeholder={selectedCountry ? `e.g., ${phoneLengths[0] || 'X'} digits` : 'Select country first'} 
                                className="rounded-l-none"
                                maxLength={maxLength}
                                {...field} 
                                onChange={(e) => {
                                  const { value } = e.target;
                                  // Allow only numbers and limit to max length
                                  const cleanValue = value.replace(/\D/g, '');
                                  if (cleanValue.length <= maxLength) {
                                    field.onChange(cleanValue);
                                  }
                                }}
                              />
                            </FormControl>
                          </div>
                          {selectedCountry && (
                            <div className="text-xs text-muted-foreground">
                              Valid lengths: {phoneLengths.join(', ')} digits (max: {maxLength})
                            </div>
                          )}
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Save Changes
                  </Button>
                </form>
              </Form>
            </div>
            
            <Separator />

            <div>
                 <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
                 <div className="space-y-4">
                    {biometryInfo?.isAvailable ? (
                       <div className="flex items-center justify-between p-4 border rounded-lg">
                           <div className="flex items-center">
                             <Fingerprint className="mr-3 text-primary" />
                             <div>
                               <Label htmlFor="biometric-switch" className="font-medium">Enable {getBiometryTypeString()} Login</Label>
                               <p className="text-xs text-muted-foreground">Log in quickly and securely.</p>
                             </div>
                           </div>
                           <Switch
                             id="biometric-switch"
                             checked={isBiometricEnabled}
                             onCheckedChange={handleBiometricToggle}
                           />
                       </div>
                    ) : (
                        <Button variant="outline" className="w-full justify-start" disabled>
                            <Fingerprint className="mr-2" /> Biometric Login Not Available
                        </Button>
                    )}
                    <Button variant="outline" className="w-full justify-start" asChild>
                        <a href="mailto:support@rnz.com">
                            <LifeBuoy className="mr-2" /> Contact Support
                        </a>
                    </Button>
                    <Button variant="destructive" className="w-full justify-start" onClick={logout}>
                        <LogOut className="mr-2" /> Logout
                    </Button>
                 </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </main>
  );
}
