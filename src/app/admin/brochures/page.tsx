'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/use-auth';
import BrochureRequestsBadge from "@/components/admin/brochure-requests-badge";
import { 
  Plus, 
  Upload, 
  FileText, 
  Download, 
  Edit, 
  Trash2, 
  Search, 
  Filter,
  Eye,
  Star,
  Calendar,
  User,
  Package
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface Brochure {
  _id: string;
  title: string;
  description: string;
  fileUrl: string;
  fileSize: number;
  category: string;
  language: string;
  regions: string[];
  crops: string[];
  linkedProducts: any[];
  downloads: number;
  views: number;
  status: string;
  isFeatured: boolean;
  createdAt: string;
  createdBy: any;
  thumbnailUrl?: string;
  tags?: string[];
}

export default function AdminBrochuresPage() {
  const { toast } = useToast();
  const { user } = useAuth();
  const [brochures, setBrochures] = useState<Brochure[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBrochure, setEditingBrochure] = useState<Brochure | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    language: 'English',
    regions: [] as string[],
    crops: [] as string[],
    linkedProducts: [] as string[],
    tags: [] as string[],
    isFeatured: false,
    status: 'published'
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState<File | null>(null);

  // Categories and options
  const categories = [
    'Water Soluble NPK', 'Granular NPK', 'Liquid Items', 'Suspension Items',
    'Sulphur Based', 'Straights Items', 'Micro Elements', 'Sulphates Products',
    'Bio/Organic Items', 'General'
  ];

  const languages = ['English', 'Hindi', 'Arabic', 'Urdu', 'Bengali', 'Tamil', 'Telugu'];
  const regions = ['India', 'Pakistan', 'Sri Lanka', 'Bangladesh', 'UAE', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Bahrain', 'Oman', 'All'];
  const crops = ['All Crops', 'Corn', 'Wheat', 'Soybeans', 'Tomatoes', 'Potatoes', 'Cotton', 'Leafy Greens', 'Fruit Trees', 'Berries', 'Grapes', 'Peppers', 'Lettuce', 'Rice', 'Vegetables', 'Citrus', 'Ornamentals', 'Cereals', 'Legumes', 'Oilseeds', 'Hydroponics'];
  
  // Products state
  const [products, setProducts] = useState<any[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);

  // Fetch brochures
  const fetchBrochures = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/brochures');
      const data = await response.json();
      
      if (data.success) {
        setBrochures(data.data);
      } else {
        toast({
          title: 'Error',
          description: 'Failed to fetch brochures',
          variant: 'destructive'
        });
      }
    } catch (error) {
      console.error('Error fetching brochures:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch brochures',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch products
  const fetchProducts = async () => {
    try {
      setLoadingProducts(true);
      const response = await fetch('/api/products');
      const data = await response.json();
      
      console.log('Products API response:', data);
      
      if (data.success && data.data && data.data.length > 0) {
        setProducts(data.data);
        console.log('Fetched products from API:', data.data.length);
        console.log('Sample product:', data.data[0]);
      } else {
        console.log('No products from API, using static data');
        // Use static data as fallback
        const staticProducts = [
          {
            _id: 'prod-1',
            name: 'NPK 19-19-19',
            category: 'Water Soluble NPK',
            categories: ['Water Soluble NPK']
          },
          {
            _id: 'prod-2',
            name: 'NPK 13-40-13',
            category: 'Water Soluble NPK',
            categories: ['Water Soluble NPK']
          },
          {
            _id: 'prod-3',
            name: 'NPK 13-00-45',
            category: 'Water Soluble NPK',
            categories: ['Water Soluble NPK']
          },
          {
            _id: 'prod-4',
            name: 'NPK 06-12-36',
            category: 'Water Soluble NPK',
            categories: ['Water Soluble NPK']
          },
          {
            _id: 'prod-5',
            name: 'NPK 30-10-10',
            category: 'Water Soluble NPK',
            categories: ['Water Soluble NPK']
          },
          {
            _id: 'prod-6',
            name: 'Granular NPK 15-15-15',
            category: 'Granular NPK',
            categories: ['Granular NPK']
          },
          {
            _id: 'prod-7',
            name: 'Liquid Fertilizer A',
            category: 'Liquid Items',
            categories: ['Liquid Items']
          },
          {
            _id: 'prod-8',
            name: 'Suspension Fertilizer B',
            category: 'Suspension Items',
            categories: ['Suspension Items']
          }
        ];
        setProducts(staticProducts);
        console.log('Using static products:', staticProducts.length);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      // Use static data as fallback
      const staticProducts = [
        {
          _id: 'prod-1',
          name: 'NPK 19-19-19',
          category: 'Water Soluble NPK',
          categories: ['Water Soluble NPK']
        },
        {
          _id: 'prod-2',
          name: 'NPK 13-40-13',
          category: 'Water Soluble NPK',
          categories: ['Water Soluble NPK']
        }
      ];
      setProducts(staticProducts);
      console.log('Using static products due to error:', staticProducts.length);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    fetchBrochures();
    fetchProducts();
  }, []);

  // Handle file selection
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        toast({
          title: 'Invalid File Type',
          description: 'Please select a PDF file',
          variant: 'destructive'
        });
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: 'File Too Large',
          description: 'File size must be less than 10MB',
          variant: 'destructive'
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  // Handle thumbnail selection
  const handleThumbnailSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast({
          title: 'Invalid File Type',
          description: 'Please select an image file (JPG, PNG, etc.)',
          variant: 'destructive'
        });
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        toast({
          title: 'File Too Large',
          description: 'Thumbnail file size must be less than 2MB',
          variant: 'destructive'
        });
        return;
      }
      setSelectedThumbnail(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile && !editingBrochure) {
      toast({
        title: 'No File Selected',
        description: 'Please select a PDF file',
        variant: 'destructive'
      });
      return;
    }

    try {
      setUploading(true);
      
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('language', formData.language);
      formDataToSend.append('regions', JSON.stringify(formData.regions));
      formDataToSend.append('crops', JSON.stringify(formData.crops));
      formDataToSend.append('linkedProducts', JSON.stringify(formData.linkedProducts));
      formDataToSend.append('tags', JSON.stringify(formData.tags));
      formDataToSend.append('isFeatured', formData.isFeatured.toString());
      formDataToSend.append('status', formData.status);
      formDataToSend.append('createdBy', user?.id || '689ee8876ef7182ecfb19ba6'); // Use current user ID or fallback
      
      if (selectedFile) {
        formDataToSend.append('file', selectedFile);
      }
      
      if (selectedThumbnail) {
        formDataToSend.append('thumbnail', selectedThumbnail);
      }

      const url = editingBrochure 
        ? `/api/brochures/${editingBrochure._id}`
        : '/api/brochures';
      
      const method = editingBrochure ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Success',
          description: editingBrochure 
            ? 'Brochure updated successfully' 
            : 'Brochure uploaded successfully'
        });
        
        // Reset form and close dialog
        resetForm();
        setIsDialogOpen(false);
        fetchBrochures();
      } else {
        toast({
          title: 'Error',
          description: data.error || 'Failed to save brochure',
          variant: 'destructive'
        });
      }
    } catch (error) {
      console.error('Error saving brochure:', error);
      toast({
        title: 'Error',
        description: 'Failed to save brochure',
        variant: 'destructive'
      });
    } finally {
      setUploading(false);
    }
  };

  // Handle delete
  const handleDelete = async (brochureId: string) => {
    try {
      const response = await fetch(`/api/brochures/${brochureId}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Success',
          description: 'Brochure deleted successfully'
        });
        fetchBrochures();
      } else {
        toast({
          title: 'Error',
          description: data.error || 'Failed to delete brochure',
          variant: 'destructive'
        });
      }
    } catch (error) {
      console.error('Error deleting brochure:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete brochure',
        variant: 'destructive'
      });
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      category: '',
      language: 'English',
      regions: [],
      crops: [],
      linkedProducts: [],
      tags: [],
      isFeatured: false,
      status: 'published'
    });
    setSelectedFile(null);
    setSelectedThumbnail(null);
    setEditingBrochure(null);
  };

  // Open edit dialog
  const openEditDialog = (brochure: Brochure) => {
    setEditingBrochure(brochure);
    setFormData({
      title: brochure.title,
      description: brochure.description,
      category: brochure.category,
      language: brochure.language,
      regions: brochure.regions,
      crops: brochure.crops,
      linkedProducts: brochure.linkedProducts.map(p => p._id),
      tags: brochure.tags || [],
      isFeatured: brochure.isFeatured,
      status: brochure.status
    });
    setIsDialogOpen(true);
  };

  // Filter brochures
  const filteredBrochures = brochures.filter(brochure => {
    const matchesSearch = brochure.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         brochure.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || !selectedCategory || brochure.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Brochure Management</h1>
          <p className="text-muted-foreground">Upload and manage product brochures</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" asChild className="relative">
            <Link href="/admin/brochure-requests">
              <Package className="h-4 w-4 mr-2" />
              View Requests
              <BrochureRequestsBadge />
            </Link>
          </Button>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => resetForm()}>
                <Plus className="h-4 w-4 mr-2" />
                Upload Brochure
              </Button>
            </DialogTrigger>
          
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingBrochure ? 'Edit Brochure' : 'Upload New Brochure'}
                </DialogTitle>
                <DialogDescription>
                  {editingBrochure 
                    ? 'Update brochure information and optionally upload a new file'
                    : 'Upload a PDF brochure and add metadata'
                  }
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* File Upload */}
                <div>
                  <Label htmlFor="file">PDF File {!editingBrochure && '*'}</Label>
                  <Input
                    id="file"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileSelect}
                    disabled={uploading}
                  />
                  {selectedFile && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Selected: {selectedFile.name} ({formatFileSize(selectedFile.size)})
                    </p>
                  )}
                </div>

                {/* Thumbnail Upload */}
                <div>
                  <Label htmlFor="thumbnail">Thumbnail Image (Optional)</Label>
                  <Input
                    id="thumbnail"
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailSelect}
                    disabled={uploading}
                  />
                  {selectedThumbnail && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Selected: {selectedThumbnail.name} ({formatFileSize(selectedThumbnail.size)})
                    </p>
                  )}
                  {editingBrochure && editingBrochure.thumbnailUrl && !selectedThumbnail && (
                    <div className="mt-2">
                      <p className="text-sm text-muted-foreground mb-1">Current thumbnail:</p>
                      <img 
                        src={editingBrochure.thumbnailUrl} 
                        alt="Current thumbnail" 
                        className="w-16 h-20 object-cover rounded border"
                      />
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">
                    Recommended: 300x400px, max 2MB. Will be used to display the brochure preview.
                  </p>
                </div>

                {/* Title */}
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter brochure title"
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Enter brochure description"
                    required
                  />
                </div>

                {/* Category and Language */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="language">Language</Label>
                    <Select value={formData.language} onValueChange={(value) => setFormData({ ...formData, language: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map(language => (
                          <SelectItem key={language} value={language}>{language}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Linked Products */}
                <div>
                  <Label htmlFor="linkedProducts">Linked Products</Label>
                  <Select 
                    value="" 
                    onValueChange={(value) => {
                      if (value && !formData.linkedProducts.includes(value)) {
                        setFormData({ 
                          ...formData, 
                          linkedProducts: [...formData.linkedProducts, value] 
                        });
                      }
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={loadingProducts ? "Loading products..." : "Select products to link"} />
                    </SelectTrigger>
                    <SelectContent>
                      {loadingProducts ? (
                        <SelectItem value="loading-products" disabled>Loading products...</SelectItem>
                      ) : products.length === 0 ? (
                        <SelectItem value="no-products-available" disabled>No products found</SelectItem>
                      ) : (
                        <>
                          {formData.category && (
                            <SelectItem value={`header-${formData.category}`} disabled>
                              --- Products in {formData.category} ---
                            </SelectItem>
                          )}
                          {products
                            .filter(product => {
                              // Filter out already selected products
                              const notAlreadySelected = !formData.linkedProducts.includes(product._id);
                              // Filter by category if category is selected - handle both category and categories fields
                              const productCategory = product.category || (product.categories && product.categories[0]);
                              
                              // Map old category names to new ones for backward compatibility
                              let mappedCategory = productCategory;
                              if (productCategory === "Water Soluble NPK (100% Soluble Powders)") {
                                mappedCategory = "Water Soluble NPK";
                              } else if (productCategory === "Granular NPK Grades") {
                                mappedCategory = "Granular NPK";
                              }
                              
                              const matchesCategory = !formData.category || mappedCategory === formData.category;
                              console.log(`Product ${product.name}: category=${productCategory}, mapped=${mappedCategory}, selected=${formData.category}, matches=${matchesCategory}`);
                              return notAlreadySelected && matchesCategory;
                            })
                            .map(product => {
                              const productCategory = product.category || (product.categories && product.categories[0]);
                              
                              // Map old category names to new ones for display
                              let displayCategory = productCategory;
                              if (productCategory === "Water Soluble NPK (100% Soluble Powders)") {
                                displayCategory = "Water Soluble NPK";
                              } else if (productCategory === "Granular NPK Grades") {
                                displayCategory = "Granular NPK";
                              }
                              
                              return (
                                <SelectItem key={product._id} value={product._id}>
                                  {product.name} ({displayCategory})
                                </SelectItem>
                              );
                            })
                          }
                          {formData.category && products.filter(p => {
                            const productCategory = p.category || (p.categories && p.categories[0]);
                            
                            // Map old category names to new ones for filtering
                            let mappedCategory = productCategory;
                            if (productCategory === "Water Soluble NPK (100% Soluble Powders)") {
                              mappedCategory = "Water Soluble NPK";
                            } else if (productCategory === "Granular NPK Grades") {
                              mappedCategory = "Granular NPK";
                            }
                            
                            return mappedCategory === formData.category && !formData.linkedProducts.includes(p._id);
                          }).length === 0 && (
                            <SelectItem value={`no-products-${formData.category}`} disabled>
                              No products found in {formData.category}
                            </SelectItem>
                          )}
                        </>
                      )}
                    </SelectContent>
                  </Select>
                  
                  {/* Selected Products */}
                  {formData.linkedProducts.length > 0 && (
                    <div className="mt-2 space-y-2">
                      {formData.linkedProducts.map(productId => {
                        const product = products.find(p => p._id === productId);
                        return product ? (
                          <div key={productId} className="flex items-center justify-between p-2 bg-muted rounded">
                            <span className="text-sm">{product.name}</span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => setFormData({
                                ...formData,
                                linkedProducts: formData.linkedProducts.filter(id => id !== productId)
                              })}
                            >
                              ×
                            </Button>
                          </div>
                        ) : null;
                      })}
                    </div>
                  )}
                  
                  {/* Debug Info */}
                  {process.env.NODE_ENV === 'development' && (
                    <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
                      <p>Debug: {products.length} products loaded</p>
                      <p>Category: {formData.category || 'None'}</p>
                      <p>Selected: {formData.linkedProducts.length} products</p>
                      <p>Available: {products.filter(p => {
                        const productCategory = p.category || (p.categories && p.categories[0]);
                        
                        // Map old category names to new ones for filtering
                        let mappedCategory = productCategory;
                        if (productCategory === "Water Soluble NPK (100% Soluble Powders)") {
                          mappedCategory = "Water Soluble NPK";
                        } else if (productCategory === "Granular NPK Grades") {
                          mappedCategory = "Granular NPK";
                        }
                        
                        return !formData.linkedProducts.includes(p._id) && (!formData.category || mappedCategory === formData.category);
                      }).length} products</p>
                    </div>
                  )}
                </div>

                {/* Status and Featured */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="isFeatured"
                      checked={formData.isFeatured}
                      onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                    />
                    <Label htmlFor="isFeatured">Featured Brochure</Label>
                  </div>
                </div>

                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={uploading}>
                    {uploading ? 'Saving...' : (editingBrochure ? 'Update' : 'Upload')}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <Input
            placeholder="Search brochures..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Brochures List */}
      {loading ? (
        <div className="text-center py-8">
          <p>Loading brochures...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBrochures.map((brochure) => (
            <Card key={brochure._id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <img
                        src={brochure.thumbnailUrl || `data:image/svg+xml;base64,${btoa(`
                          <svg width="48" height="60" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="60" fill="#f8f9fa"/>
                            <rect x="3" y="3" width="42" height="54" fill="#dc3545" rx="3"/>
                            <rect x="6" y="6" width="36" height="48" fill="#ffffff" rx="2"/>
                            <text x="24" y="30" font-family="Arial, sans-serif" font-size="8" font-weight="bold" text-anchor="middle" fill="#dc3545">PDF</text>
                          </svg>
                        `)}`}
                        alt={brochure.title}
                        className="w-12 h-15 object-cover rounded border"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{brochure.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{brochure.category}</p>
                    </div>
                  </div>
                  {brochure.isFeatured && (
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  )}
                </div>
              </CardHeader>
             
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {brochure.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(brochure.createdAt).toLocaleDateString()}
                </div>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {brochure.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    {brochure.downloads}
                  </div>
                  <Badge variant={brochure.status === 'published' ? 'default' : 'secondary'}>
                    {brochure.status}
                  </Badge>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(brochure.fileUrl, '_blank')}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openEditDialog(brochure)}
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Brochure</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete "{brochure.title}"? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(brochure._id)}>
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      {!loading && filteredBrochures.length === 0 && (
        <div className="text-center py-8">
          <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">No brochures found</p>
        </div>
      )}
    </div>
  );
}
