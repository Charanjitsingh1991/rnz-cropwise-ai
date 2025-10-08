'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { filterOptions } from '@/lib/static-data';
import { useToast } from '@/hooks/use-toast';
import { Brain, MapPin, ExternalLink } from 'lucide-react';
import { worldCountries, getStatesByCountryCode } from '@/lib/datasets/world-countries-complete';
import { pilotCountriesData, getStatesByCountry, getCitiesByState } from '@/lib/datasets/pilot-countries-locations';
import { PilotNotice } from '@/components/ui/pilot-notice';

export default function AICropAdvisorPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Basic Info
    crop: '',
    soil: '',
    moisture: '',
    growthStage: '',
    
    // Location Info
    location: {
    country: '',
    state: '',
    district: '',
      coordinates: {
        latitude: 0,
        longitude: 0
      }
    }
  });
  
  const [availableStates, setAvailableStates] = useState<any[]>([]);
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<any>(null);

  // Location handlers
  const handleCountryChange = (countryCode: string) => {
    setFormData(prev => ({
      ...prev,
      location: {
        ...prev.location,
        country: countryCode,
        state: '',
        district: ''
      }
    }));
    const states = getStatesByCountry(countryCode);
    setAvailableStates(states);
    setAvailableCities([]);
  };

  const handleStateChange = (stateCode: string) => {
    setFormData(prev => ({
      ...prev,
      location: {
        ...prev.location,
        state: stateCode,
        district: ''
      }
    }));
    
    // Get cities for the selected state
    const cities = getCitiesByState(formData.location.country, stateCode);
    setAvailableCities(cities);
  };

  

  const handleSubmit = async () => {
    // Validate form
    if (!formData.crop || !formData.soil || !formData.moisture || !formData.growthStage || !formData.location.country) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive'
      });
      return;
    }

    setLoading(true);
    try {
      // Prepare data in the format expected by the AI advisor
      const requestData = {
        crop: formData.crop,
        soil: formData.soil,
        moisture: formData.moisture,
        growthStage: formData.growthStage,
        region: formData.location.state || formData.location.country,
        country: formData.location.country,
        state: formData.location.state,
        district: formData.location.district
      };

      console.log('Sending request with data:', requestData);

      const response = await fetch('/api/ai-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
      });

      if (!response.ok) throw new Error('Failed to get recommendations');

      const data = await response.json();
      setRecommendations(data);
      
      toast({
        title: 'Success',
        description: 'Recommendations generated successfully!',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to get recommendations. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">AI Crop Advisor 🌱</h1>
        <p className="text-center text-muted-foreground">
          Get intelligent recommendations for your crops using RNZ products in our expanded pilot countries including India, Pakistan, Sri Lanka, Bangladesh, GCC countries, Malaysia, South Africa, Kenya, Brazil, New Zealand, Canada, Egypt, Cambodia, and China
        </p>
        </div>

        <PilotNotice className="mb-6" />

            {/* Location Selection */}
      <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
                Location Information
              </CardTitle>
            </CardHeader>
                <CardContent>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="country">Country *</Label>
              <Select
                value={formData.location.country}
                onValueChange={handleCountryChange}
              >
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                  {pilotCountriesData
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.name} 🌱
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {availableStates.length > 0 && (
                  <div>
                    <Label htmlFor="state">State/Province</Label>
                <Select
                  value={formData.location.state}
                  onValueChange={handleStateChange}
                >
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableStates.map((state) => (
                          <SelectItem key={state.code} value={state.code}>
                            {state.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {availableCities.length > 0 && (
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Select
                      value={formData.location.district}
                      onValueChange={(city) => setFormData(prev => ({
                        ...prev,
                        location: { ...prev.location, district: city }
                      }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableCities.map((city, index) => (
                          <SelectItem key={`${city}-${index}`} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {availableCities.length === 0 && (
                <div>
                  <Label htmlFor="district">District/City</Label>
                  <Input
                    id="district"
                    placeholder="Enter district or city"
                      value={formData.location.district}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        location: { ...prev.location, district: e.target.value }
                      }))}
                  />
                </div>
                )}
              </div>
        </CardContent>
      </Card>

      {/* Input Form */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Crop Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
              <Label htmlFor="crop">Crop Type *</Label>
              <Select 
                value={formData.crop}
                onValueChange={(value) => setFormData(prev => ({ ...prev, crop: value }))}
              >
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                  {filterOptions.crops.map(crop => (
                    <SelectItem key={crop} value={crop.toLowerCase()}>
                      {crop}
                    </SelectItem>
                  ))}
                  </SelectContent>
                </Select>
              </div>
                        
                        <div>
              <Label htmlFor="soil">Soil Type *</Label>
              <Select 
                value={formData.soil}
                onValueChange={(value) => setFormData(prev => ({ ...prev, soil: value }))}
              >
                    <SelectTrigger>
                  <SelectValue placeholder="Select soil type" />
                    </SelectTrigger>
                    <SelectContent>
                  {filterOptions.soilTypes.map(soil => (
                    <SelectItem key={soil} value={soil.toLowerCase()}>
                      {soil}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                        </div>

                        <div>
              <Label htmlFor="moisture">Moisture Level *</Label>
              <Select 
                value={formData.moisture}
                onValueChange={(value) => setFormData(prev => ({ ...prev, moisture: value }))}
              >
                      <SelectTrigger>
                  <SelectValue placeholder="Select moisture level" />
                      </SelectTrigger>
                      <SelectContent>
                  {filterOptions.moistureLevels.map(level => (
                    <SelectItem key={level} value={level.toLowerCase()}>
                      {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                        </div>

                        <div>
              <Label htmlFor="growthStage">Growth Stage *</Label>
              <Select 
                value={formData.growthStage}
                onValueChange={(value) => setFormData(prev => ({ ...prev, growthStage: value }))}
              >
                  <SelectTrigger>
                  <SelectValue placeholder="Select growth stage" />
                  </SelectTrigger>
                  <SelectContent>
                  {filterOptions.growthStages.map(stage => (
                    <SelectItem key={stage} value={stage.toLowerCase()}>
                      {stage}
                    </SelectItem>
                  ))}
                  </SelectContent>
                </Select>
                        </div>
                      </div>

                <Button 
            onClick={handleSubmit} 
                  disabled={loading}
                  className="w-full"
                >
            {loading ? 'Analyzing...' : 'Get Recommendations'}
                </Button>
              </CardContent>
            </Card>

      {/* Results */}
      {recommendations && (
            <Card>
              <CardHeader>
            <CardTitle>Recommendations</CardTitle>
              </CardHeader>
          <CardContent className="space-y-4">
            {recommendations.explanation && (
              <p className="text-muted-foreground">{recommendations.explanation}</p>
            )}

            {recommendations.recommendedProducts?.map((product: any, index: number) => (
                      <Card key={index} className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  {product.productId && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(`/products/${product.productId}`, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Product
                    </Button>
                  )}
                          </div>
                <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                <div className="space-y-1 text-sm">
                  <p><strong>Application:</strong> {product.applicationMethod}</p>
                  <p><strong>Dosage:</strong> {product.dosage}</p>
                  <p><strong>Timing:</strong> {product.timing}</p>
                  <p><strong>Expected Benefit:</strong> {product.expectedBenefit}</p>
                  {product.category && (
                    <p><strong>Category:</strong> {product.category}</p>
                  )}
                  {product.regionalAdaptation && (
                    <p><strong>Regional Notes:</strong> {product.regionalAdaptation}</p>
                        )}
                          </div>
                      </Card>
                    ))}
                    
            {recommendations.regionalInsights && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">Regional Insights</h3>
                <p className="text-sm text-blue-700">{recommendations.regionalInsights}</p>
                  </div>
                )}
              </CardContent>
            </Card>
      )}
      </div>
  );
}