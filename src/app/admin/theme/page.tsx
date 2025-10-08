
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Palette, CheckCircle } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

export default function ThemePage() {
  const router = useRouter();
  const { toast } = useToast();
  const { theme, setTheme, hexToHSL, hslToHex } = useTheme();
  const [primaryColor, setPrimaryColor] = useState('#29ABE2');
  
  useEffect(() => {
    if(theme.primary) {
      const [h, s, l] = theme.primary.split(' ').map(v => parseInt(v.replace('%', '')));
      if (!isNaN(h) && !isNaN(s) && !isNaN(l)) {
          setPrimaryColor(hslToHex(h, s, l));
      }
    }
  }, [theme, hslToHex]);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrimaryColor(e.target.value);
  };
  
  const applyTheme = () => {
    const hsl = hexToHSL(primaryColor);
    if (hsl) {
        setTheme({ primary: `${hsl.h} ${hsl.s}% ${hsl.l}%` });
        router.push('/admin?themeUpdated=true', { scroll: false });
    } else {
        toast({
            title: "Invalid Color",
            description: "Please select a valid hex color.",
            variant: "destructive"
        })
    }
  };

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center gap-4">
               <Palette className="h-8 w-8 text-primary" />
              <div>
                <CardTitle className="font-headline text-2xl">Customize Application Theme</CardTitle>
                <CardDescription>
                  Select a new primary color for the application. The change will be applied instantly.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="primary-color">Primary Color</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="primary-color"
                  type="color"
                  value={primaryColor}
                  onChange={handleColorChange}
                  className="p-1 h-12 w-24"
                />
                <Input
                  type="text"
                  value={primaryColor}
                  onChange={handleColorChange}
                  className="max-w-xs"
                  placeholder="#3498db"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="font-medium">Color Preview</h3>
                <div className="p-4 rounded-lg border flex items-center justify-between" style={{ backgroundColor: primaryColor }}>
                    <span className="font-bold text-white">This is the new primary color.</span>
                    <Button style={{ backgroundColor: primaryColor, color: 'white', borderColor: 'white' }} variant="outline">
                        Sample Button
                    </Button>
                </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={applyTheme} size="lg">
                <CheckCircle className="mr-2" />
                Apply and Save Theme
              </Button>
              <Button variant="outline" size="lg" onClick={() => router.back()}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
