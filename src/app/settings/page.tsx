'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/use-auth';
import { Bell, Shield, Moon, Smartphone, Globe, LogOut, Package, UserCheck, LifeBuoy, FileText, Palette, Image as ImageIcon, UserCog, ShoppingBag, FileQuestion, MessageCircle } from 'lucide-react';
import { Capacitor } from '@capacitor/core';
import Link from 'next/link';

export default function SettingsPage() {
  const { toast } = useToast();
  const { user, logout, isAdmin } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isNativePlatform, setIsNativePlatform] = useState(false);
  const [settings, setSettings] = useState({
    notifications: {
      enabled: true,
      pushNotifications: true,
      emailNotifications: true,
      marketingNotifications: false
    },
    privacy: {
      profileVisibility: 'public',
      dataSharing: false,
      analytics: true
    },
    appearance: {
      theme: 'system',
      language: 'en'
    },
    security: {
      biometricAuth: false,
      twoFactorAuth: false
    }
  });

  useEffect(() => {
    setIsNativePlatform(Capacitor.isNativePlatform());
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      // Load settings from localStorage
      const savedSettings = localStorage.getItem('user_settings');
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings));
      }
    } catch (error) {
      console.error('Failed to load settings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveSettings = async () => {
    setIsSaving(true);
    try {
      // Save settings to localStorage
      localStorage.setItem('user_settings', JSON.stringify(settings));
      
      toast({
        title: 'Success',
        description: 'Settings saved successfully',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save settings. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleNotificationToggle = (key: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: value
      }
    }));
  };

  const handlePrivacyToggle = (key: string, value: string | boolean) => {
    setSettings(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [key]: value
      }
    }));
  };

  const handleAppearanceChange = (key: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      appearance: {
        ...prev.appearance,
        [key]: value
      }
    }));
  };

  const handleSecurityToggle = (key: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      security: {
        ...prev.security,
        [key]: value
      }
    }));
  };

  const handleSignOut = async () => {
    try {
      await logout();
      toast({
        title: 'Signed Out',
        description: 'You have been successfully signed out.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to sign out. Please try again.',
        variant: 'destructive',
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading settings...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground mt-2">
              Manage your account preferences and notifications
            </p>
          </div>

          {/* Admin Management System - Only show for admins */}
          {isAdmin && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCog className="h-5 w-5" />
                  Admin Management System
                </CardTitle>
                <CardDescription>
                  Manage all aspects of the application
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Product Management */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <ShoppingBag className="h-4 w-4" />
                        Product Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full">
                        <Link href="/admin/products">
                          Manage Products
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Brochure Management */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <FileText className="h-4 w-4" />
                        Brochure Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full">
                        <Link href="/admin/brochures">
                          Manage Brochures
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Quote Request Management */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Package className="h-4 w-4" />
                        Quote Requests
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full">
                        <Link href="/admin/quote-requests">
                          Manage Quotes
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Support Management */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <LifeBuoy className="h-4 w-4" />
                        Support Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button asChild className="w-full">
                        <Link href="/admin/support-tickets">
                          Support Tickets
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/admin/support-settings">
                          Contact Settings
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Expert Advice Management */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <UserCheck className="h-4 w-4" />
                        Expert Advice
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full">
                        <Link href="/admin/expert-advice">
                          Manage Expert Requests
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Notification Management */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <MessageCircle className="h-4 w-4" />
                        Notifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full">
                        <Link href="/admin/notifications">
                          Send Notifications
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* User Management */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <UserCog className="h-4 w-4" />
                        User Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full">
                        <Link href="/admin/users">
                          Manage Users
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Analytics/Dashboard */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <FileQuestion className="h-4 w-4" />
                        Analytics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full">
                        <Link href="/admin/analytics">
                          View Analytics
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Notifications Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
              <CardDescription>
                Control how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications from the app
                  </p>
                </div>
                <Switch
                  checked={settings.notifications.enabled}
                  onCheckedChange={(checked) => handleNotificationToggle('enabled', checked)}
                />
              </div>
              
              {settings.notifications.enabled && (
                <>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive push notifications on your device
                      </p>
                    </div>
                    <Switch
                      checked={settings.notifications.pushNotifications}
                      onCheckedChange={(checked) => handleNotificationToggle('pushNotifications', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications via email
                      </p>
                    </div>
                    <Switch
                      checked={settings.notifications.emailNotifications}
                      onCheckedChange={(checked) => handleNotificationToggle('emailNotifications', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Marketing Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive promotional and marketing updates
                      </p>
                    </div>
                    <Switch
                      checked={settings.notifications.marketingNotifications}
                      onCheckedChange={(checked) => handleNotificationToggle('marketingNotifications', checked)}
                    />
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Privacy & Data
              </CardTitle>
              <CardDescription>
                Control your privacy and data sharing preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="profileVisibility">Profile Visibility</Label>
                <Select
                  value={settings.privacy.profileVisibility}
                  onValueChange={(value) => handlePrivacyToggle('profileVisibility', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select visibility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                    <SelectItem value="friends">Friends Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Data Sharing</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow data sharing for improved services
                  </p>
                </div>
                <Switch
                  checked={settings.privacy.dataSharing}
                  onCheckedChange={(checked) => handlePrivacyToggle('dataSharing', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Analytics</Label>
                  <p className="text-sm text-muted-foreground">
                    Help improve the app with usage analytics
                  </p>
                </div>
                <Switch
                  checked={settings.privacy.analytics}
                  onCheckedChange={(checked) => handlePrivacyToggle('analytics', checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Appearance Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Moon className="h-5 w-5" />
                Appearance
              </CardTitle>
              <CardDescription>
                Customize the app appearance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="theme">Theme</Label>
                <Select
                  value={settings.appearance.theme}
                  onValueChange={(value) => handleAppearanceChange('theme', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select
                  value={settings.appearance.language}
                  onValueChange={(value) => handleAppearanceChange('language', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Security
              </CardTitle>
              <CardDescription>
                Manage your account security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isNativePlatform && (
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Biometric Authentication</Label>
                    <p className="text-sm text-muted-foreground">
                      Use fingerprint or face ID to sign in
                    </p>
                  </div>
                  <Switch
                    checked={settings.security.biometricAuth}
                    onCheckedChange={(checked) => handleSecurityToggle('biometricAuth', checked)}
                  />
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Switch
                  checked={settings.security.twoFactorAuth}
                  onCheckedChange={(checked) => handleSecurityToggle('twoFactorAuth', checked)}
                />
              </div>
              
              <div className="pt-4 border-t">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/settings/change-password">
                    <Shield className="mr-2 h-4 w-4" />
                    Change Password
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Account Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Manage your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" onClick={handleSignOut} className="w-full">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={saveSettings} disabled={isSaving}>
              {isSaving ? 'Saving...' : 'Save Settings'}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
