'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@/lib/types";
import { useFavorites } from "@/hooks/use-favorites";
import { Heart, Loader2, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phoneNumber: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  location: z.string().min(2, { message: "Location is required." }),
  quantity: z.coerce.number().min(1, { message: "Quantity must be at least 1." }),
});

export function QuoteRequestForm({ product }: { product: Product }) {
  const { toast } = useToast();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { user } = useAuth();
  const favorite = isFavorite(product.id);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGettingLocation, setIsGettingLocation] = useState(false);

  const getCurrentLocation = async () => {
    if (!navigator.geolocation) {
      toast({
        title: "Location not supported",
        description: "Geolocation is not supported by this browser.",
        variant: "destructive"
      });
      return;
    }

    setIsGettingLocation(true);
    
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000
        });
      });

      // Use a reverse geocoding service (you can use Google Maps API or OpenStreetMap)
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
      );
      
      if (response.ok) {
        const data = await response.json();
        const address = `${data.city || ''}, ${data.principalSubdivision || ''}, ${data.countryName || ''}`;
        const cleanAddress = address.replace(/,\s*,/g, ',').replace(/^,\s*|,\s*$/g, '');
        
        form.setValue('location', cleanAddress);
        
        toast({
          title: "Location detected",
          description: "Your location has been automatically filled.",
        });
      } else {
        throw new Error('Failed to get address');
      }
    } catch (error: any) {
      console.error('Location error:', error);
      toast({
        title: "Location failed",
        description: error.message || "Failed to get your location. Please enter manually.",
        variant: "destructive"
      });
    } finally {
      setIsGettingLocation(false);
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.displayName || user?.fullName || "",
      email: user?.email || "",
      phoneNumber: user?.phoneNumber || "",
      location: "",
      quantity: 1,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!user) {
        toast({
            title: "Authentication Required",
            description: "You must be logged in to request a quote.",
            variant: "destructive"
        });
        return;
    }

    setIsSubmitting(true);
    try {
        const response = await fetch('/api/quotes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: user.id || user.email,
                userName: values.name,
                userEmail: values.email,
                userPhoneNumber: values.phoneNumber,
                location: values.location,
                quantity: values.quantity,
                productId: product.id,
                productName: product.name,
                productImageUrl: product.imageUrl,
                status: 'Pending'
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to submit quote request');
        }

        const result = await response.json();
        
        toast({
            title: "Quote Requested!",
            description: `Your request for ${product.name} has been sent. We will contact you shortly.`,
        });
        form.reset({
            ...form.getValues(),
            location: '',
            quantity: 1,
        });
    } catch (error) {
        console.error("Error submitting quote request:", error);
        toast({
            title: "Submission Failed",
            description: "There was an error sending your request. Please try again.",
            variant: "destructive"
        });
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl><Input placeholder="you@example.com" {...field} /></FormControl>
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
              <FormControl><Input placeholder="+1 234 567 8900" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location / Farm Address</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input placeholder="City, Country" {...field} />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                    onClick={getCurrentLocation}
                    disabled={isGettingLocation}
                  >
                    {isGettingLocation ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <MapPin className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity (in units)</FormLabel>
              <FormControl><Input type="number" placeholder="1" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-2 pt-2">
            <Button type="submit" className="flex-1" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="animate-spin mr-2" />}
                Submit Request
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className={cn(favorite && "bg-red-500/10 border-red-500 text-red-500 hover:bg-red-500/20 hover:text-red-600")}
              onClick={() => toggleFavorite(product.id)}
              aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
              disabled={isSubmitting}
            >
              <Heart className={cn("h-5 w-5", favorite && "fill-current")} />
            </Button>
        </div>
      </form>
    </Form>
  );
}
