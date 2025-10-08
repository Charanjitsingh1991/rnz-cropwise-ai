
'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Image as ImageIcon, UserCog, ShoppingBag, LifeBuoy, FileQuestion, Bell, MessageCircle, FileText, Package, UserCheck } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import BrochureRequestsBadge from "@/components/admin/brochure-requests-badge";

function AdminPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const themeUpdated = searchParams.get('themeUpdated');
    if (themeUpdated === 'true') {
      toast({
        title: 'Theme Updated',
        description: 'The application color scheme has been updated.',
      });
      // Remove the query param from the URL
      router.replace('/admin', { scroll: false });
    }
  }, [searchParams, router, toast]);

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
            <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center">
                <UserCog className="mr-3 h-6 w-6 text-primary" />
                Manage Profile
              </CardTitle>
              <CardDescription>
                Update your administrator profile information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/profile">
                  Go to Profile Settings <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          
           <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center">
                <ImageIcon className="mr-3 h-6 w-6 text-primary" />
                Customize Branding
              </CardTitle>
              <CardDescription>
                Update the application logo and homepage text.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/admin/branding">
                  Go to Branding Settings <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

           <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center">
                <Palette className="mr-3 h-6 w-6 text-primary" />
                Customize Theme
              </CardTitle>
              <CardDescription>
                Change the application's color scheme.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/admin/theme">
                  Go to Theme Settings <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center">
                <LifeBuoy className="mr-3 h-6 w-6 text-primary" />
                Support Management System
              </CardTitle>
              <CardDescription>
                Manage support tickets and configure support contact settings (call, video, live chat, email).
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button asChild className="w-full">
                <Link href="/admin/support">
                  Manage Support Tickets <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/admin/support-settings">
                  Support Contact Settings <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center">
                <UserCheck className="mr-3 h-6 w-6 text-primary" />
                Expert Advice Management
              </CardTitle>
              <CardDescription>
                Manage expert consultation requests from users (both disease detection and general advice).
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button asChild className="w-full">
                <Link href="/admin/expert-advice">
                  General Expert Advice <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/admin/expert-requests">
                  Disease Detection Requests <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center">
                <Package className="mr-3 h-6 w-6 text-primary" />
                Quote Request Management
              </CardTitle>
              <CardDescription>
                Manage user quote requests and respond to inquiries.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/admin/quote-requests">
                  View Quote Requests <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>



          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center">
                <ShoppingBag className="mr-3 h-6 w-6 text-primary" />
                Manage Products
              </CardTitle>
              <CardDescription>
                Add, edit, or remove products from the catalog.
              </CardDescription>
            </CardHeader>
            <CardContent>
               <Button asChild>
                <Link href="/admin/products">
                  Go to Product Management <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center">
                <FileText className="mr-3 h-6 w-6 text-primary" />
                Manage Brochures & Requests
              </CardTitle>
              <CardDescription>
                Upload, edit, and manage product brochures and handle user requests.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="flex-1">
                  <Link href="/admin/brochures">
                    Manage Brochures <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1 relative">
                  <Link href="/admin/brochure-requests">
                    View Requests <Package className="ml-2 h-4 w-4" />
                    <BrochureRequestsBadge />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center">
                <Bell className="mr-3 h-6 w-6 text-primary" />
                Push Notifications
              </CardTitle>
              <CardDescription>
                Send push notifications to all users or specific segments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/admin/notifications">
                  Manage Notifications <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </main>
  );
}


import React, { Suspense } from 'react';

export default function AdminPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AdminPageContent />
        </Suspense>
    )
}
