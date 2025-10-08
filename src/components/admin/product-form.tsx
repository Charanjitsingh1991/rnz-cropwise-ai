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
import type { Product } from '@/lib/types';
import { useRouter } from 'next/navigation';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Loader2, Wand2, Upload, Plus, FileText, X } from 'lucide-react';


const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters.' }),
  longDescription: z.string().min(20, { message: 'Long description must be at least 20 characters.' }),
  imageUrl: z.string().optional(),
  category: z.string().min(1, { message: "You have to select a category." }),
  suitableCrops: z.string().min(1, { message: "You have to enter suitable crops." }),
  suitableSoils: z.string().min(1, { message: "You have to enter suitable soils." }),
  form: z.string().min(1, { message: "You have to enter the form." }),
  growthStage: z.string().min(1, { message: "You have to enter growth stage." }),
  brochures: z.array(z.string()).optional(),
  certifications: z.array(z.string()).optional(),
}).refine((data) => {
  // Either imageUrl must be a valid URL or we must have a selected image file
  if (data.imageUrl && data.imageUrl.trim() !== '') {
    try {
      new URL(data.imageUrl);
      return true;
    } catch {
      return false;
    }
  }
  return true; // Allow empty imageUrl if file is uploaded
}, {
  message: "Please enter a valid image URL or upload an image file.",
  path: ["imageUrl"],
});

interface ProductFormProps {
  initialData?: Product;
}

export function ProductForm({ initialData }: ProductFormProps) {
  console.log('ProductForm - initialData:', initialData);
  
  const { toast } = useToast();
  const router = useRouter();
  const [isAiDialogOpen, setAiDialogOpen] = useState(false);
  const [aiKeywords, setAiKeywords] = useState('');
  const [isAiLoading, setAiLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: File }>({});
  const [fileNames, setFileNames] = useState<{ [key: string]: string }>({});
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData ? {
      name: initialData.name || '',
      description: initialData.description || '',
      longDescription: initialData.longDescription || '',
      imageUrl: initialData.images?.[0] || initialData.imageUrl || '',
      category: initialData.category || '',
      suitableCrops: initialData.suitableCrops || '',
      suitableSoils: initialData.suitableSoils || '',
      form: initialData.form || '',
      growthStage: initialData.growthStage || '',
      brochures: initialData.brochures || [],
      certifications: initialData.certifications || [],
    } : {
      name: '',
      description: '',
      longDescription: '',
      imageUrl: '',
      category: '',
      suitableCrops: '',
      suitableSoils: '',
      form: '',
      growthStage: '',
      brochures: [],
      certifications: [],
    },
  });



  const handleGenerateDescription = async () => {
    if (!aiKeywords) {
        toast({ title: 'Please enter some keywords.', variant: 'destructive' });
        return;
    }
    setAiLoading(true);
    try {
        const response = await fetch('/api/generate-product-description', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ keywords: aiKeywords }),
        });

        if (!response.ok) throw new Error('Failed to generate descriptions');

        const result = await response.json();
        form.setValue('description', result.shortDescription);
        form.setValue('longDescription', result.longDescription);
        toast({ title: 'Descriptions generated successfully!' });
        setAiDialogOpen(false);
    } catch (error) {
        console.error('AI Description generation failed', error);
        toast({ title: 'Failed to generate descriptions', description: 'Please try again.', variant: 'destructive' });
    } finally {
        setAiLoading(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'brochure' | 'certification', index: number) => {
    const file = event.target.files?.[0];
    if (file) {
      const key = `${type}-${index}`;
      setUploadedFiles(prev => ({ ...prev, [key]: file }));
      setFileNames(prev => ({ ...prev, [key]: file.name }));
      
      // Update form value with file info
      const currentValues = form.watch(type === 'brochure' ? 'brochures' : 'certifications') || [];
      const newValues = [...currentValues];
      newValues[index] = `file:${file.name}`; // Mark as uploaded file
      form.setValue(type === 'brochure' ? 'brochures' : 'certifications', newValues);
    }
  };

  const handleRemoveFile = (type: 'brochure' | 'certification', index: number) => {
    const key = `${type}-${index}`;
    setUploadedFiles(prev => {
      const newFiles = { ...prev };
      delete newFiles[key];
      return newFiles;
    });
    setFileNames(prev => {
      const newNames = { ...prev };
      delete newNames[key];
      return newNames;
    });
    
    // Clear form value
    const currentValues = form.watch(type === 'brochure' ? 'brochures' : 'certifications') || [];
    const newValues = [...currentValues];
    newValues[index] = '';
    form.setValue(type === 'brochure' ? 'brochures' : 'certifications', newValues);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Check if we have either a file or a valid URL
    if (!selectedImageFile && (!values.imageUrl || values.imageUrl.trim() === '')) {
      toast({
        title: 'Image Required',
        description: 'Please either upload an image file or provide an image URL.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Handle file uploads first
      const formData = new FormData();
      
      // Add product data
      formData.append('productData', JSON.stringify({
        name: values.name,
        description: values.description,
        longDescription: values.longDescription,
        category: values.category,
        form: values.form,
        suitableCrops: values.suitableCrops,
        suitableSoils: values.suitableSoils,
        growthStage: values.growthStage,
        images: values.imageUrl ? [values.imageUrl] : [],
        tags: [values.category, values.form, values.growthStage],
        isActive: true,
        isFeatured: false,
        specifications: {
          solubility: 'Custom',
          ph: { min: 6.0, max: 7.0 }
        },
        application: {
          method: ['Custom'],
          rate: { min: 1, max: 5, unit: 'kg/ha' },
          frequency: 'As needed',
          timing: values.growthStage
        },
        availability: {
          inStock: true,
          quantity: 1000,
          unit: 'kg'
        },
        safety: {
          toxicity: 'Standard agricultural product',
          handling: 'Follow standard safety procedures',
          storage: 'Store in cool, dry place'
        }
      }));

      // Add uploaded files
      Object.entries(uploadedFiles).forEach(([key, file]) => {
        formData.append(key, file);
      });
      
      // Add image file if selected
      if (selectedImageFile) {
        formData.append('productImage', selectedImageFile);
      }

      // Add certification data (brochures are managed separately)
      const certifications = values.certifications?.filter(c => c.trim() !== '') || [];
      
      formData.append('brochures', JSON.stringify([])); // Empty array since brochures are managed separately
      formData.append('certifications', JSON.stringify(certifications));

      // Add product ID for updates
      if (initialData) {
        formData.append('productId', initialData._id || initialData.id);
      }

      const url = '/api/products/upload';
      const method = initialData ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        body: formData, // Send as FormData instead of JSON
      });

      if (response.ok) {
        toast({
          title: `Product ${initialData ? 'Updated' : 'Created'}`,
          description: `The product "${values.name}" has been successfully saved.`,
        });
        router.push('/admin/products');
      } else {
        const errorData = await response.json();
        toast({
          title: 'Error',
          description: errorData.error || 'Failed to save product',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error saving product:', error);
      toast({
        title: 'Error',
        description: 'Failed to save product',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const title = initialData ? 'Edit Product' : 'Add New Product';
  const description = initialData ? 'Update the details of this product.' : 'Fill out the form to add a new product.';
  const buttonText = initialData ? 'Save Changes' : 'Create Product';

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl><Input placeholder="e.g., NPK 19-19-19" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center">
                    <FormLabel>Short Description</FormLabel>
                    <Dialog open={isAiDialogOpen} onOpenChange={setAiDialogOpen}>
                      <DialogTrigger asChild>
                        <Button type="button" variant="outline" size="sm">
                          <Wand2 className="mr-2" /> AI Generate
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Generate with AI</DialogTitle>
                          <DialogDescription>
                            Enter some keywords about the product, and AI will write the descriptions for you.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-2">
                          <FormLabel htmlFor="keywords">Keywords</FormLabel>
                          <Input id="keywords" placeholder="e.g., high nitrogen, vegetative growth, leafy greens" value={aiKeywords} onChange={(e) => setAiKeywords(e.target.value)} />
                        </div>
                        <DialogFooter>
                          <Button variant="ghost" onClick={() => setAiDialogOpen(false)}>Cancel</Button>
                          <Button onClick={handleGenerateDescription} disabled={isAiLoading}>
                            {isAiLoading && <Loader2 className="animate-spin mr-2" />}
                            Generate
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <FormControl><Textarea placeholder="A brief summary of the product." {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="longDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Long Description</FormLabel>
                  <FormControl><Textarea rows={5} placeholder="A detailed description of the product." {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Image URL (Optional)</FormLabel>
                  <FormControl>
                    <div className="space-y-2">
                      <Input 
                        placeholder="https://placehold.co/600x600.png" 
                        {...field} 
                      />
                      <div className="text-sm text-muted-foreground">
                        Enter image URL (optional if uploading a file below)
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Water Soluble NPK, Granular NPK, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="suitableCrops"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Suitable Crops</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., All crops; strong for vegetables, fruits, hydroponics" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="suitableSoils"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Suitable Soils</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Loam, Sandy, Silt, Hydroponics" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="form"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Form</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., WSF Powder, Granular, Liquid" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="growthStage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Growth Stage</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Vegetative to flowering; fertigation/foliar" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Image Upload Section */}
            <div className="space-y-4">
              <FormLabel className="text-base">Upload Product Image</FormLabel>
              <div className="p-3 border border-green-200 bg-green-50 rounded-md">
                <p className="text-sm text-green-700">
                  <strong>Recommended:</strong> Upload a 600x600 pixel square image for best results across all devices.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Current Image Preview */}
                {(form.watch('imageUrl') || selectedImageFile) && (
                  <div className="relative">
                    <img 
                      src={selectedImageFile ? URL.createObjectURL(selectedImageFile) : form.watch('imageUrl')} 
                      alt="Product" 
                      className="w-full h-64 object-cover rounded-md border"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2 h-8 w-8 p-0"
                      onClick={() => {
                        form.setValue('imageUrl', '');
                        setSelectedImageFile(null);
                      }}
                    >
                      ×
                    </Button>
                  </div>
                )}
                
                {/* Upload Options */}
                <div className="space-y-4">
                  {/* File Upload */}
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-md p-4">
                    <div className="text-center">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">Upload Image File</p>
                      <input
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        id="image-upload"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setSelectedImageFile(file);
                            // Clear URL field when file is selected
                            form.setValue('imageUrl', '');
                          }
                        }}
                      />
                      <label htmlFor="image-upload">
                        <Button type="button" variant="outline" size="sm" asChild>
                          <span>
                            <Upload className="h-4 w-4 mr-2" />
                            Choose File
                          </span>
                        </Button>
                      </label>
                      {selectedImageFile && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Selected: {selectedImageFile.name}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* URL Input */}
                  <div className="border rounded-md p-4">
                    <p className="text-sm text-muted-foreground mb-2">Or enter image URL (alternative to file upload)</p>
                    <Input
                      placeholder="https://example.com/image.jpg"
                      value={form.watch('imageUrl') || ''}
                      onChange={(e) => {
                        form.setValue('imageUrl', e.target.value);
                        // Clear file when URL is entered
                        if (e.target.value) setSelectedImageFile(null);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Brochure Management Notice */}
            <div className="space-y-4">
              <FormLabel className="text-base">Product Brochures</FormLabel>
              <div className="p-4 border border-blue-200 bg-blue-50 rounded-md">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900">Brochure Management</h4>
                    <p className="text-sm text-blue-700 mt-1">
                      Brochures are managed through the dedicated Brochure Management system. 
                      This ensures proper categorization, linking to products, and centralized management.
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() => window.open('/admin/brochures', '_blank')}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Manage Brochures
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Certification Upload Section */}
            <div className="space-y-4">
              <FormLabel className="text-base">Product Certifications</FormLabel>
              <div className="p-3 border border-amber-200 bg-amber-50 rounded-md mb-4">
                <p className="text-sm text-amber-700">
                  <strong>Note:</strong> Add certifications like ISO, FCO, organic certifications, etc. 
                  You can upload documents or provide certification names/numbers.
                </p>
              </div>
              <div className="space-y-3">
                {form.watch('certifications')?.map((cert: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-md bg-gray-50">
                    {/* File Upload Area */}
                    <div className="flex-1">
                      {cert.startsWith('file:') ? (
                        <div className="flex items-center gap-2 p-2 border rounded-md bg-white">
                          <FileText className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium">{fileNames[`certification-${index}`] || 'Uploaded file'}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveFile('certification', index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <Input
                          value={cert}
                          onChange={(e) => {
                            const newCerts = [...(form.watch('certifications') || [])];
                            newCerts[index] = e.target.value;
                            form.setValue('certifications', newCerts);
                          }}
                          placeholder="e.g., ISO 9001:2015, FCO License, Organic Certification"
                          className="bg-white"
                        />
                      )}
                    </div>
                    
                    {/* Upload Button */}
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        className="sr-only"
                        id={`certification-upload-${index}`}
                        onChange={(e) => handleFileUpload(e, 'certification', index)}
                      />
                      <label htmlFor={`certification-upload-${index}`}>
                        <Button type="button" variant="outline" size="sm" asChild>
                          <span>
                            <Upload className="h-4 w-4 mr-1" />
                            Upload
                          </span>
                        </Button>
                      </label>
                    </div>
                    
                    {/* Remove Button */}
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        const newCerts = form.watch('certifications')?.filter((_, i) => i !== index) || [];
                        form.setValue('certifications', newCerts);
                        handleRemoveFile('certification', index);
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    const currentCerts = form.watch('certifications') || [];
                    form.setValue('certifications', [...currentCerts, '']);
                  }}
                  className="w-full"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Certification
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {buttonText}
                </Button>
                <Button variant="outline" type="button" onClick={() => router.push('/admin/products')}>Cancel</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
