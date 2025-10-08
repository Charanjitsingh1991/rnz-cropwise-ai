
'use client';

import { useState, useEffect } from 'react';
import { faqs as allFaqs, supportTickets as allSupportTickets } from '@/lib/client-data';
import type { SupportTicket, FAQ } from '@/lib/types';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, ArrowRight, LifeBuoy, BookOpen, ChevronDown, ChevronUp, Phone, Mail, MessageCircle, Video, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';

// Group FAQs by category
const faqCategories = allFaqs.reduce((acc, faq) => {
    const category = faq.category || 'General';
    if (!acc[category]) {
        acc[category] = [];
    }
    acc[category].push(faq);
    return acc;
}, {} as Record<string, FAQ[]>);

const categoryOrder = [
    'Product Categories & General Use',
    'Crop-Specific Recommendations',
    'Soil Condition & Environment',
    'Nutrient Deficiency Solutions',
    'Special & Value-Added Products',
    'Application & Safety',
    'General',
];

export default function SupportPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  
  // State for dynamic support settings from database
  const [supportSettings, setSupportSettings] = useState({
    phone: '+1 (555) 123-4567',
    email: 'support@rnzcropwise.com',
    address: '123 Agriculture St, Farm City, FC 12345',
    businessHours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-3PM',
    liveChatEnabled: true,
    videoCallEnabled: true,
    videoCallPlatform: 'Zoom'
  });
  const [isLoadingSettings, setIsLoadingSettings] = useState(true);
  
  // For demonstration purposes, we'll use sample tickets
  // In a real app, you'd fetch tickets for the current user
  const myTickets: SupportTicket[] = allSupportTickets.filter(ticket => 
    ticket.userId === (user?.id || 'user-123')
  );
  
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const getStatusVariant = (status: SupportTicket['status']) => {
    switch (status) {
      case 'Open': return 'bg-blue-500';
      case 'Answered': return 'bg-green-500';
      case 'Closed': return 'bg-gray-500';
    }
  };

  const fetchSupportSettings = async () => {
    try {
      setIsLoadingSettings(true);
      const response = await fetch('/api/support-settings');
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.settings) {
          setSupportSettings(data.settings);
          toast({
            title: 'Settings Updated',
            description: 'Support settings refreshed successfully',
          });
        }
      } else {
        throw new Error('Failed to fetch support settings');
      }
    } catch (error) {
      console.error('Failed to load support settings:', error);
      toast({
        title: 'Error',
        description: 'Failed to refresh support settings. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoadingSettings(false);
    }
  };

  const handleSupportContact = async (type: 'phone' | 'live_chat' | 'video_call' | 'email') => {
    try {
      const response = await fetch('/api/support-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          message: `${type} support request from web app`,
          userEmail: user?.email || 'user@example.com',
          userName: user?.displayName || 'User'
        }),
      });

      if (response.ok) {
        const data = await response.json();
        toast({
          title: 'Support Request Sent',
          description: data.message,
        });
      } else {
        throw new Error('Failed to send support request');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send support request. Please try again.',
        variant: 'destructive',
      });
    }
  };
  
  // Fetch support settings from database on component mount
  useEffect(() => {
    fetchSupportSettings();
    
    // Set up periodic refresh every 5 minutes to sync with admin updates
    const interval = setInterval(fetchSupportSettings, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
            {/* Quick Actions Section */}
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-2">
                        <LifeBuoy className="h-6 w-6" />
                        Quick Actions
                    </CardTitle>
                    <CardDescription>Get immediate help through various channels</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Button 
                            variant="outline" 
                            className="h-24 flex flex-col gap-2"
                            onClick={() => handleSupportContact('phone')}
                        >
                            <Phone className="h-6 w-6" />
                            <span className="text-sm">Call Support</span>
                        </Button>
                        <Button 
                            variant="outline" 
                            className="h-24 flex flex-col gap-2"
                            onClick={() => handleSupportContact('email')}
                        >
                            <Mail className="h-6 w-6" />
                            <span className="text-sm">Email Support</span>
                        </Button>
                        <Button 
                            variant="outline" 
                            className="h-24 flex flex-col gap-2"
                            onClick={() => handleSupportContact('live_chat')}
                            disabled={!supportSettings.liveChatEnabled}
                        >
                            <MessageCircle className="h-6 w-6" />
                            <span className="text-sm">Live Chat</span>
                            {!supportSettings.liveChatEnabled && (
                              <span className="text-xs text-muted-foreground">(Disabled)</span>
                            )}
                        </Button>
                        <Button 
                            variant="outline" 
                            className="h-24 flex flex-col gap-2"
                            onClick={() => handleSupportContact('video_call')}
                            disabled={!supportSettings.videoCallEnabled}
                        >
                            <Video className="h-6 w-6" />
                            <span className="text-sm">Video Call</span>
                            {!supportSettings.videoCallEnabled && (
                              <span className="text-xs text-muted-foreground">(Disabled)</span>
                            )}
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Contact Information Section */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
                            <CardDescription>Reach out to our support team</CardDescription>
                        </div>
                        <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={fetchSupportSettings}
                            disabled={isLoadingSettings}
                        >
                            {isLoadingSettings ? 'Loading...' : 'Refresh'}
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    {isLoadingSettings ? (
                        <div className="flex items-center justify-center py-8">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                            <span className="ml-2 text-muted-foreground">Loading contact information...</span>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 rounded-lg border">
                                <Phone className="h-5 w-5 text-primary" />
                                <div>
                                    <p className="font-medium">Phone Support</p>
                                    <p className="text-sm text-muted-foreground">{supportSettings.phone}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-lg border">
                                <Mail className="h-5 w-5 text-primary" />
                                <div>
                                    <p className="font-medium">Email Support</p>
                                    <p className="text-sm text-muted-foreground">{supportSettings.email}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-lg border">
                                <MapPin className="h-5 w-5 text-primary" />
                                <div>
                                    <p className="font-medium">Address</p>
                                    <p className="text-sm text-muted-foreground">{supportSettings.address}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-lg border">
                                <Clock className="h-5 w-5 text-primary" />
                                <div>
                                    <p className="font-medium">Business Hours</p>
                                    <p className="text-sm text-muted-foreground">{supportSettings.businessHours}</p>
                                </div>
                            </div>
                            {supportSettings.videoCallEnabled && (
                              <div className="flex items-center gap-3 p-3 rounded-lg border">
                                <Video className="h-5 w-5 text-primary" />
                                <div>
                                    <p className="font-medium">Video Call Platform</p>
                                    <p className="text-sm text-muted-foreground">{supportSettings.videoCallPlatform}</p>
                                </div>
                              </div>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <BookOpen className="h-8 w-8 text-primary" />
                        <div>
                            <CardTitle className="font-headline text-2xl">Frequently Asked Questions</CardTitle>
                            <CardDescription>Find quick answers to common questions.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        {showAllFaqs ? (
                            // Show all FAQs organized by category
                            categoryOrder.map(category => 
                                faqCategories[category] && (
                                    <div key={category}>
                                        <h3 className="text-lg font-semibold mt-6 mb-2 text-primary">{category}</h3>
                                        {faqCategories[category].map(faq => (
                                            <AccordionItem value={faq.id} key={faq.id}>
                                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                                <AccordionContent>
                                                    <p className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, '<br />') }} />
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </div>
                                )
                            )
                        ) : (
                            // Show preview of FAQs (first 3 from each category)
                            categoryOrder.map(category => 
                                faqCategories[category] && (
                                    <div key={category}>
                                        <h3 className="text-lg font-semibold mt-6 mb-2 text-primary">{category}</h3>
                                        {faqCategories[category].slice(0, 3).map(faq => (
                                            <AccordionItem value={faq.id} key={faq.id}>
                                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                                <AccordionContent>
                                                    <p className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, '<br />') }} />
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                        {faqCategories[category].length > 3 && (
                                            <div className="text-center py-2 text-sm text-muted-foreground">
                                                +{faqCategories[category].length - 3} more FAQs in this category
                                            </div>
                                        )}
                                    </div>
                                )
                            )
                        )}
                    </Accordion>
                    <div className="mt-6 text-center">
                        {showAllFaqs ? (
                            <Button variant="outline" onClick={() => setShowAllFaqs(false)}>
                                Show Less <ChevronUp className="ml-2 h-4 w-4" />
                            </Button>
                        ) : (
                            <Button variant="outline" onClick={() => setShowAllFaqs(true)}>
                                Show All {allFaqs.length} FAQs <ChevronDown className="ml-2 h-4 w-4" />
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>

            <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="font-headline text-2xl">My Support Tickets</CardTitle>
                        <CardDescription>View your past and current support requests.</CardDescription>
                    </div>
                <Button asChild>
                    <Link href="/support/new">
                    <PlusCircle className="mr-2 h-4 w-4" /> New Ticket
                    </Link>
                </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {myTickets.length > 0 ? (
                        myTickets.map(ticket => (
                            <Link href={`/support/${ticket.id}`} key={ticket.id} className="block hover:bg-muted/50 transition-colors rounded-lg border p-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <p className="font-semibold text-primary">{ticket.subject}</p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Last updated: {format(new Date(ticket.updatedAt), "PPP p")}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-end gap-2 ml-4">
                                        <Badge className={cn("text-white", getStatusVariant(ticket.status))}>{ticket.status}</Badge>
                                        <ArrowRight className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">You have no support tickets yet.</p>
                        </div>
                    )}
                </div>
            </CardContent>
            </Card>
        </div>
      </div>
    </main>
  );
}
