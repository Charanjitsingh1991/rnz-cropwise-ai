import { getProduct, getAllProducts, getBrochures } from '@/lib/data';
import type { Product } from '@/lib/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { QuoteRequestForm } from '@/components/quote-request-form';
import ProductBrochureSection from '@/components/product-brochure-section';
import { Leaf, Droplets, Globe, Layers, BookOpen, Download, Package, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  // Get standalone brochures and filter by assigned products
  const brochures = await getBrochures();
  const productBrochures = brochures.filter(b => {
    // Handle both MongoDB objects and typed objects
    const brochureId = b.id || (b as any)._id?.toString();
    const productId = product.id || (product as any)._id?.toString();
    return (b as any).assignedProducts?.includes(productId) || (b as any).assignedProducts?.includes(brochureId);
  });

  // Extract product-specific brochures
  const productSpecificBrochures = (product as any).brochures || [];

  const TagSection = ({ title, tags, icon: Icon }: { title: string; tags?: string[]; icon: React.ElementType }) => (
    <div>
      <h3 className="text-md font-semibold mb-2 flex items-center"><Icon className="mr-2 h-5 w-5 text-primary" /> {title}</h3>
      {tags && tags.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
      ) : (
        <p className="text-muted-foreground text-sm">No {title.toLowerCase()} specified</p>
      )}
    </div>
  );

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                {(product as any).images && (product as any).images.length > 0 ? (
                  <div className="aspect-square w-full max-w-lg mx-auto">
                    <Image
                      src={(product as any).images[0]}
                      alt={(product as any).name}
                      width={600}
                      height={600}
                      className="rounded-lg w-full h-full object-cover shadow-lg"
                      data-ai-hint="agriculture product"
                    />
                  </div>
                ) : (
                  <div className="aspect-square w-full max-w-lg mx-auto bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground">No image available</span>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <h1 className="text-3xl lg:text-4xl font-bold font-headline mb-4">{(product as any).name || 'Unnamed Product'}</h1>
                <p className="text-lg text-muted-foreground mb-6">{(product as any).description || 'No description available'}</p>
                <div className="prose max-w-none text-foreground">
                  <p>{(product as any).longDescription || (product as any).description || 'No detailed description available'}</p>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TagSection title="Categories" tags={[(product as any).category]} icon={Package} />
                  <TagSection title="Suitable Crops" tags={(product as any).suitableCrops ? (product as any).suitableCrops.split('; ') : []} icon={Leaf} />
                  <TagSection title="Soil Types" tags={(product as any).suitableSoils ? (product as any).suitableSoils.split('; ') : []} icon={Layers} />
                  <TagSection title="Form" tags={[(product as any).form]} icon={Globe} />
                </div>

                {/* Additional Product Information */}
                <div className="mt-8 space-y-6">
                  {/* Growth Stage */}
                  {(product as any).growthStage && (
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Growth Stage</h3>
                      <p className="text-muted-foreground">{(product as any).growthStage}</p>
                    </div>
                  )}

                  {/* Specifications */}
                  {(product as any).specifications && (product as any).specifications.solubility && (
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Specifications</h3>
                      <p className="text-sm text-muted-foreground">Solubility: {(product as any).specifications.solubility}</p>
                    </div>
                  )}

                  {/* Application */}
                  {(product as any).application && (
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Application</h3>
                      <div className="space-y-2">
                        {(product as any).application.method && (
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Method:</span> {(product as any).application.method.join(', ')}
                          </p>
                        )}
                        {(product as any).application.rate && (
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Rate:</span> {(product as any).application.rate.min}-{(product as any).application.rate.max} {(product as any).application.rate.unit}
                          </p>
                        )}
                        {(product as any).application.frequency && (
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Frequency:</span> {(product as any).application.frequency}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Availability */}
                  {(product as any).availability && (
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Availability</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-sm text-muted-foreground">Yes</span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            {productBrochures.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl flex items-center">
                    <BookOpen className="mr-3 h-6 w-6 text-primary" />
                    Related Brochures
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {productBrochures.map(brochure => (
                      <div key={brochure.id} className="border rounded-lg overflow-hidden">
                        <div className="flex items-center justify-between p-3 bg-muted">
                          <span className="font-medium">{(brochure as any).title}</span>
                          <div className="flex gap-2">
                            <Button asChild variant="outline" size="sm">
                              <a href={(brochure as any).fileUrl} download>
                                <Download className="mr-2 h-4 w-4" /> Download
                              </a>
                            </Button>
                          </div>
                        </div>
                        {/* In-app PDF Viewer */}
                        <div className="w-full h-96">
                          <iframe 
                            src={(brochure as any).fileUrl} 
                            className="w-full h-full border-0" 
                            title={(brochure as any).title}
                            style={{ minHeight: '400px' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Product Brochures Section */}
            <ProductBrochureSection 
              productId={product.id || (product as any)._id?.toString() || ''} 
              productName={(product as any).name || 'Product'} 
            />
          </div>
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Request a Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <QuoteRequestForm product={product as any} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map(product => ({
    id: product._id || product.id,
  }));
}
