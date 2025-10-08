'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { LifeBuoy, Send, Loader2, Lightbulb } from 'lucide-react';
import type { FaqSuggestion } from '@/ai/flows/faq-suggester';
import { useState, useTransition } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';

const formSchema = z.object({
  subject: z.string().min(10, { message: 'Subject must be at least 10 characters.' }),
  message: z.string().min(20, { message: 'Message must be at least 20 characters.' }),
});

export default function NewSupportTicketPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [isChecking, startTransition] = useTransition();
  const [suggestions, setSuggestions] = useState<FaqSuggestion[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: '',
      message: '',
    },
  });

  const handleSubjectBlur = () => {
    const subject = form.getValues('subject');
    if (subject.length > 15) {
      startTransition(async () => {
        try {
          const response = await fetch('/api/faq-suggester', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: subject }),
          });

          if (!response.ok) throw new Error('Failed to fetch suggestions');

          const result = await response.json();

          if (result && result.suggestions.length > 0) {
            setSuggestions(result.suggestions);
          } else {
            setSuggestions([]);
          }
        } catch (error) {
          console.error("FAQ Suggester failed", error);
          setSuggestions([]);
        }
      });
    }
  };


  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would make an API call to create the ticket
    console.log('New Ticket Submitted:', values);
    toast({
      title: 'Support Ticket Created',
      description: 'Your request has been sent. Our team will get back to you shortly.',
    });
    router.push('/support');
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <div className="flex items-center gap-4">
                <LifeBuoy className="h-8 w-8 text-primary" />
                <div>
                    <CardTitle className="font-headline text-2xl">Create a New Support Ticket</CardTitle>
                    <CardDescription>Describe your issue, and our team will assist you.</CardDescription>
                </div>
            </div>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                            placeholder="e.g., Question about NPK for tomatoes in sandy soil" 
                            {...field} 
                            onBlur={handleSubjectBlur}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {isChecking && (
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Checking for relevant FAQs...
                    </div>
                )}

                {suggestions.length > 0 && (
                    <Alert>
                        <Lightbulb className="h-4 w-4" />
                        <AlertTitle>Have you seen these FAQs?</AlertTitle>
                        <AlertDescription>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                {suggestions.map((s) => (
                                    <li key={s.id}>
                                        <Link href="/support" className="underline hover:text-primary">
                                            {s.question}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </AlertDescription>
                    </Alert>
                )}

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl><Textarea rows={8} placeholder="Please provide as much detail as possible..." {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-4">
                  <Button type="submit">
                    <Send className="mr-2" />
                    Submit Ticket
                  </Button>
                  <Button variant="outline" type="button" onClick={() => router.push('/support')}>
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
