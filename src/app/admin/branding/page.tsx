
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { CheckCircle, Image as ImageIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useBranding } from '@/hooks/use-branding';
import Image from 'next/image';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  heading: z.string().min(5, { message: 'Heading must be at least 5 characters.' }),
  subheading: z.string().min(10, { message: 'Subheading must be at least 10 characters.' }),
});

export default function BrandingPage() {
  const { toast } = useToast();
  const router = useRouter();
  const { branding, setBranding } = useBranding();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
        heading: branding.heading,
        subheading: branding.subheading
    },
  });
  
  // Effect to update form when branding data is loaded from localStorage
  useEffect(() => {
    form.reset({
        heading: branding.heading,
        subheading: branding.subheading
    });
  }, [branding, form]);


  function onSubmit(values: z.infer<typeof formSchema>) {
    setBranding(values);
    toast({
      title: 'Branding Updated',
      description: 'Your application text has been successfully updated.',
    });
    router.push('/admin');
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <div className="flex items-center gap-4">
                <ImageIcon className="h-8 w-8 text-primary" />
                <div>
                    <CardTitle className="font-headline text-2xl">Customize Branding</CardTitle>
                    <CardDescription>Change the text displayed on the homepage. The logo can be changed by replacing the `logo.png` file in the `public` folder.</CardDescription>
                </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className='mb-6'>
                <Label>Application Logo Preview</Label>
                <div className='mt-2 p-4 border rounded-md bg-muted/50 flex items-center justify-center'>
                    <Image src="/logo.png" alt="App Logo" width={128} height={82} className="h-16 w-auto object-contain" />
                </div>
                <p className='text-sm text-muted-foreground mt-2'>To change the logo, replace the `logo.png` file in your project's `/public` directory.</p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                 <FormField
                  control={form.control}
                  name="heading"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Main Heading</FormLabel>
                      <FormControl><Input placeholder="e.g., Welcome to RNZ CropWise" {...field} /></FormControl>
                      <FormDescription>The main title on the homepage.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                 <FormField
                  control={form.control}
                  name="subheading"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subheading</FormLabel>
                      <FormControl><Textarea placeholder="A brief, catchy description..." {...field} /></FormControl>
                      <FormDescription>The descriptive text below the main title on the homepage.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-4">
                    <Button type="submit" size="lg">
                        <CheckCircle className="mr-2" />
                        Save Branding
                    </Button>
                    <Button variant="outline" size="lg" type="button" onClick={() => router.push('/admin')}>Cancel</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
