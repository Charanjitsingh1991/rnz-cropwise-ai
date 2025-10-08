import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Bot, ArrowRight, LifeBuoy } from 'lucide-react';
// Import static data instead of defining locally
import { products } from '@/lib/data';
import { HomeClient } from './home-client';

export default async function Home() {
  // Use static data from the new file
  const featuredProducts = products.slice(0, 3);

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <section className="text-center bg-card shadow-lg rounded-xl p-6 md:p-12 mb-12">
          <div className="flex flex-col items-center justify-center">
            <Image src="/logo.png" alt="App Logo" width={128} height={82} className="mx-auto h-16 md:h-20 w-auto object-contain mb-4" />
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary font-headline text-center">
              RNZ CropWise
            </h1>
          </div>
          <p className="mt-4 text-base md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Your trusted partner for agricultural solutions. Discover our comprehensive range of fertilizers and get expert advice for optimal crop performance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/products">
                Explore Products <Search className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
              <Link href="/ai-crop-advisor">
                Get AI Advice <Bot className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 font-headline">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                    data-ai-hint="agriculture product"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
                  <CardDescription className="mt-2 h-20 overflow-hidden text-ellipsis">
                    {product.description}
                  </CardDescription>
                  <Button asChild variant="link" className="px-0 mt-4">
                    <Link href={`/products/${product.id}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-8 font-headline">Explore Our Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:border-primary transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <LifeBuoy className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-2xl">Help & Support</CardTitle>
                    <CardDescription>Get answers to your questions</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Have a question? Browse our FAQs or submit a support ticket to get help from our team of experts.
                </p>
                <Button asChild>
                  <Link href="/support">
                    Visit Support Center <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:border-primary transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Bot className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-2xl">AI Advisor</CardTitle>
                    <CardDescription>Instant, intelligent recommendations</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our AI Advisor analyzes your specific farm conditions to recommend the perfect RNZ products for optimal results.
                </p>
                <Button asChild>
                  <Link href="/ai-crop-advisor">
                    Get AI Advice <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
