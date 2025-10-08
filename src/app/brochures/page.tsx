'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Search, Filter, Eye, Star, Calendar, Download as DownloadIcon } from "lucide-react";
import { useToast } from '@/hooks/use-toast';

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
}

export default function BrochuresPage() {
  const { toast } = useToast();
  const [brochures, setBrochures] = useState<Brochure[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLanguage, setSelectedLanguage] = useState('All Languages');

  // Categories and languages
  const categories = [
    'All Categories',
    'Water Soluble NPK', 'Granular NPK', 'Liquid Items', 'Suspension Items',
    'Sulphur Based', 'Straights Items', 'Micro Elements', 'Sulphates Products',
    'Bio/Organic Items', 'General'
  ];

  const languages = [
    'All Languages',
    'English', 'Hindi', 'Arabic', 'Urdu', 'Bengali', 'Tamil', 'Telugu'
  ];

  // Fetch brochures
  const fetchBrochures = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/brochures?status=published');
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

  useEffect(() => {
    fetchBrochures();
  }, []);

  // Handle download
  const handleDownload = async (brochure: Brochure) => {
    try {
      // Track download
      await fetch(`/api/brochures/${brochure._id}`, {
        method: 'GET'
      });

      // Open PDF in new tab
      window.open(brochure.fileUrl, '_blank');
      
      toast({
        title: 'Download Started',
        description: 'Brochure opened in new tab'
      });
    } catch (error) {
      console.error('Error downloading brochure:', error);
      toast({
        title: 'Error',
        description: 'Failed to download brochure',
        variant: 'destructive'
      });
    }
  };

  // Filter brochures
  const filteredBrochures = brochures.filter(brochure => {
    const matchesSearch = brochure.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         brochure.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || !selectedCategory || brochure.category === selectedCategory;
    const matchesLanguage = selectedLanguage === 'All Languages' || !selectedLanguage || brochure.language === selectedLanguage;
    return matchesSearch && matchesCategory && matchesLanguage;
  });

  // Sort brochures (featured first, then by date)
  const sortedBrochures = filteredBrochures.sort((a, b) => {
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
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
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-2">Product Brochures</h1>
          <p className="text-center text-muted-foreground">
            Download detailed product information and application guides
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search brochures..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map(language => (
                  <SelectItem key={language} value={language}>{language}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {loading ? 'Loading...' : `${sortedBrochures.length} brochure${sortedBrochures.length !== 1 ? 's' : ''} found`}
          </p>
        </div>

        {/* Brochures Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading brochures...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedBrochures.map(brochure => (
              <Card key={brochure._id} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="font-headline text-xl line-clamp-2">
                          {brochure.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {brochure.category}
                          </Badge>
                          {brochure.isFeatured && (
                            <Badge variant="default" className="text-xs bg-yellow-500">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {brochure.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(brochure.createdAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <DownloadIcon className="h-3 w-3" />
                      {brochure.downloads}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      {formatFileSize(brochure.fileSize)}
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
                        size="sm"
                        onClick={() => handleDownload(brochure)}
                        className="group-hover:bg-primary/90"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        {!loading && sortedBrochures.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No brochures found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
