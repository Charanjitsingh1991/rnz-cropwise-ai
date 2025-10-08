'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { MapPin, Loader2 } from 'lucide-react';
import { worldCountries, getStatesByCountryCode, type State } from '@/lib/datasets/world-countries-complete';
import { useMobile } from '@/hooks/use-mobile';

interface LocationData {
  country: string;
  state: string;
  district: string;
  latitude?: number;
  longitude?: number;
  address?: string;
}

interface LocationPickerProps {
  onLocationChange: (location: LocationData) => void;
  initialLocation?: LocationData;
}

export function LocationPicker({ onLocationChange, initialLocation }: LocationPickerProps) {
  const { isCapacitor } = useMobile();
  const [loading, setLoading] = useState(false);
  const [locationData, setLocationData] = useState<LocationData>(
    initialLocation || {
      country: '',
      state: '',
      district: '',
    }
  );
  const [availableStates, setAvailableStates] = useState<State[]>([]);

  useEffect(() => {
    if (locationData.country) {
      const states = getStatesByCountryCode(locationData.country);
      setAvailableStates(states);
    }
  }, [locationData.country]);

  const handleLocationChange = (newData: Partial<LocationData>) => {
    const updatedData = { ...locationData, ...newData };
    setLocationData(updatedData);
    onLocationChange(updatedData);
  };

  const getCurrentLocation = async () => {
    setLoading(true);
    try {
      if (isCapacitor) {
        // Use Capacitor Geolocation for mobile
        const { Geolocation } = await import('@capacitor/geolocation');
        const position = await Geolocation.getCurrentPosition();
        
        // Reverse geocode using Google Maps Geocoding API
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
        );
        
        const data = await response.json();
        if (data.results?.[0]) {
          const result = data.results[0];
          const addressComponents = result.address_components;
          
          // Extract location details
          const country = addressComponents.find((c: any) => c.types.includes('country'));
          const state = addressComponents.find((c: any) => c.types.includes('administrative_area_level_1'));
          const district = addressComponents.find((c: any) => c.types.includes('administrative_area_level_2'));
          
          handleLocationChange({
            country: country?.short_name || '',
            state: state?.short_name || '',
            district: district?.long_name || '',
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            address: result.formatted_address
          });
        }
      } else {
        // Use browser geolocation for web
        navigator.geolocation.getCurrentPosition(async (position) => {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
          );
          
          const data = await response.json();
          if (data.results?.[0]) {
            const result = data.results[0];
            const addressComponents = result.address_components;
            
            const country = addressComponents.find((c: any) => c.types.includes('country'));
            const state = addressComponents.find((c: any) => c.types.includes('administrative_area_level_1'));
            const district = addressComponents.find((c: any) => c.types.includes('administrative_area_level_2'));
            
            handleLocationChange({
              country: country?.short_name || '',
              state: state?.short_name || '',
              district: district?.long_name || '',
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              address: result.formatted_address
            });
          }
        }, (error) => {
          console.error('Geolocation error:', error);
          throw error;
        });
      }
    } catch (error) {
      console.error('Location error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <Label className="text-lg font-semibold">Location</Label>
          <Button
            variant="outline"
            size="sm"
            onClick={getCurrentLocation}
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <MapPin className="h-4 w-4" />
            )}
            <span className="ml-2">Get Current Location</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="country">Country *</Label>
            <Select
              value={locationData.country}
              onValueChange={(value) => handleLocationChange({ country: value, state: '', district: '' })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                {worldCountries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {availableStates.length > 0 && (
            <div>
              <Label htmlFor="state">State/Province</Label>
              <Select
                value={locationData.state}
                onValueChange={(value) => handleLocationChange({ state: value })}
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

          <div>
            <Label htmlFor="district">District/City</Label>
            <Input
              id="district"
              placeholder="Enter district or city"
              value={locationData.district}
              onChange={(e) => handleLocationChange({ district: e.target.value })}
            />
          </div>
        </div>

        {locationData.address && (
          <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-800">
              <span className="font-medium">Detected Location: </span>
              {locationData.address}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
