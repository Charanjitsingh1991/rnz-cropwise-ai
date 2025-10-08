// World Countries Database for Location Selection
export interface Country {
  code: string;
  name: string;
  states?: State[];
  regions: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
  currency: string;
  timezone: string[];
}

export interface State {
  code: string;
  name: string;
  districts?: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export const worldCountries: Country[] = [
  {
    code: 'IN',
    name: 'India',
    states: [
      {
        code: 'PB',
        name: 'Punjab',
        districts: ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda'],
        coordinates: { latitude: 30.9010, longitude: 75.8573 }
      },
      {
        code: 'MH',
        name: 'Maharashtra',
        districts: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad'],
        coordinates: { latitude: 19.7515, longitude: 75.7139 }
      },
      {
        code: 'UP',
        name: 'Uttar Pradesh',
        districts: ['Lucknow', 'Kanpur', 'Ghaziabad', 'Agra', 'Meerut'],
        coordinates: { latitude: 26.8467, longitude: 80.9462 }
      },
      {
        code: 'GJ',
        name: 'Gujarat',
        districts: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'],
        coordinates: { latitude: 22.2587, longitude: 71.1924 }
      },
      {
        code: 'TN',
        name: 'Tamil Nadu',
        districts: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli'],
        coordinates: { latitude: 11.1271, longitude: 78.6569 }
      }
    ],
    regions: ['Northern Plains', 'Western India', 'Southern India', 'Eastern India', 'Central India'],
    coordinates: { latitude: 20.5937, longitude: 78.9629 },
    currency: 'INR',
    timezone: ['Asia/Kolkata']
  },
  {
    code: 'US',
    name: 'United States',
    states: [
      {
        code: 'CA',
        name: 'California',
        districts: ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento', 'Fresno'],
        coordinates: { latitude: 36.7783, longitude: -119.4179 }
      },
      {
        code: 'TX',
        name: 'Texas',
        districts: ['Houston', 'Dallas', 'San Antonio', 'Austin', 'Fort Worth'],
        coordinates: { latitude: 31.9686, longitude: -99.9018 }
      },
      {
        code: 'FL',
        name: 'Florida',
        districts: ['Miami', 'Tampa', 'Orlando', 'Jacksonville', 'Tallahassee'],
        coordinates: { latitude: 27.7663, longitude: -81.6868 }
      },
      {
        code: 'IL',
        name: 'Illinois',
        districts: ['Chicago', 'Aurora', 'Rockford', 'Joliet', 'Naperville'],
        coordinates: { latitude: 40.6331, longitude: -89.3985 }
      }
    ],
    regions: ['Midwest', 'Southeast', 'Southwest', 'West Coast', 'Northeast'],
    coordinates: { latitude: 39.8283, longitude: -98.5795 },
    currency: 'USD',
    timezone: ['America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles']
  },
  {
    code: 'BR',
    name: 'Brazil',
    states: [
      {
        code: 'SP',
        name: 'São Paulo',
        districts: ['São Paulo', 'Guarulhos', 'Campinas', 'São Bernardo do Campo'],
        coordinates: { latitude: -23.5505, longitude: -46.6333 }
      },
      {
        code: 'RJ',
        name: 'Rio de Janeiro',
        districts: ['Rio de Janeiro', 'Nova Iguaçu', 'Niterói', 'Duque de Caxias'],
        coordinates: { latitude: -22.9068, longitude: -43.1729 }
      },
      {
        code: 'MG',
        name: 'Minas Gerais',
        districts: ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora'],
        coordinates: { latitude: -19.9167, longitude: -43.9345 }
      }
    ],
    regions: ['Southeast', 'South', 'Northeast', 'North', 'Central-West'],
    coordinates: { latitude: -14.2350, longitude: -51.9253 },
    currency: 'BRL',
    timezone: ['America/Sao_Paulo']
  },
  {
    code: 'CN',
    name: 'China',
    states: [
      {
        code: 'GD',
        name: 'Guangdong',
        districts: ['Guangzhou', 'Shenzhen', 'Dongguan', 'Foshan'],
        coordinates: { latitude: 23.3790, longitude: 113.7633 }
      },
      {
        code: 'SD',
        name: 'Shandong',
        districts: ['Jinan', 'Qingdao', 'Yantai', 'Weifang'],
        coordinates: { latitude: 36.3427, longitude: 118.1498 }
      },
      {
        code: 'HN',
        name: 'Henan',
        districts: ['Zhengzhou', 'Luoyang', 'Kaifeng', 'Anyang'],
        coordinates: { latitude: 33.8820, longitude: 113.6140 }
      }
    ],
    regions: ['North China', 'South China', 'East China', 'West China', 'Central China'],
    coordinates: { latitude: 35.8617, longitude: 104.1954 },
    currency: 'CNY',
    timezone: ['Asia/Shanghai']
  },
  {
    code: 'AU',
    name: 'Australia',
    states: [
      {
        code: 'NSW',
        name: 'New South Wales',
        districts: ['Sydney', 'Newcastle', 'Wollongong', 'Central Coast'],
        coordinates: { latitude: -31.2532, longitude: 146.9211 }
      },
      {
        code: 'VIC',
        name: 'Victoria',
        districts: ['Melbourne', 'Geelong', 'Ballarat', 'Bendigo'],
        coordinates: { latitude: -37.0201, longitude: 144.9646 }
      },
      {
        code: 'QLD',
        name: 'Queensland',
        districts: ['Brisbane', 'Gold Coast', 'Townsville', 'Cairns'],
        coordinates: { latitude: -20.9176, longitude: 142.7028 }
      }
    ],
    regions: ['Eastern Australia', 'Western Australia', 'Northern Australia', 'Southern Australia'],
    coordinates: { latitude: -25.2744, longitude: 133.7751 },
    currency: 'AUD',
    timezone: ['Australia/Sydney', 'Australia/Adelaide', 'Australia/Perth']
  },
  {
    code: 'CA',
    name: 'Canada',
    states: [
      {
        code: 'ON',
        name: 'Ontario',
        districts: ['Toronto', 'Ottawa', 'Hamilton', 'London'],
        coordinates: { latitude: 51.2538, longitude: -85.3232 }
      },
      {
        code: 'QC',
        name: 'Quebec',
        districts: ['Montreal', 'Quebec City', 'Laval', 'Gatineau'],
        coordinates: { latitude: 53.9333, longitude: -73.8667 }
      },
      {
        code: 'BC',
        name: 'British Columbia',
        districts: ['Vancouver', 'Victoria', 'Surrey', 'Burnaby'],
        coordinates: { latitude: 53.7267, longitude: -127.6476 }
      }
    ],
    regions: ['Western Canada', 'Central Canada', 'Eastern Canada', 'Northern Canada'],
    coordinates: { latitude: 56.1304, longitude: -106.3468 },
    currency: 'CAD',
    timezone: ['America/Toronto', 'America/Vancouver', 'America/Edmonton']
  },
  {
    code: 'AR',
    name: 'Argentina',
    states: [
      {
        code: 'BA',
        name: 'Buenos Aires',
        districts: ['Buenos Aires', 'La Plata', 'Mar del Plata', 'Bahía Blanca'],
        coordinates: { latitude: -36.6769, longitude: -60.5588 }
      },
      {
        code: 'CO',
        name: 'Córdoba',
        districts: ['Córdoba', 'Villa María', 'Río Cuarto', 'San Francisco'],
        coordinates: { latitude: -31.7333, longitude: -63.2500 }
      }
    ],
    regions: ['Pampas', 'Patagonia', 'Northwest', 'Northeast', 'Cuyo'],
    coordinates: { latitude: -38.4161, longitude: -63.6167 },
    currency: 'ARS',
    timezone: ['America/Argentina/Buenos_Aires']
  },
  {
    code: 'ZA',
    name: 'South Africa',
    states: [
      {
        code: 'GP',
        name: 'Gauteng',
        districts: ['Johannesburg', 'Pretoria', 'Soweto', 'Germiston'],
        coordinates: { latitude: -26.2041, longitude: 28.0473 }
      },
      {
        code: 'WC',
        name: 'Western Cape',
        districts: ['Cape Town', 'George', 'Worcester', 'Stellenbosch'],
        coordinates: { latitude: -33.2277, longitude: 21.8569 }
      }
    ],
    regions: ['Highveld', 'Coastal', 'Karoo', 'Bushveld'],
    coordinates: { latitude: -30.5595, longitude: 22.9375 },
    currency: 'ZAR',
    timezone: ['Africa/Johannesburg']
  },
  {
    code: 'MX',
    name: 'Mexico',
    states: [
      {
        code: 'CDMX',
        name: 'Mexico City',
        districts: ['Mexico City', 'Ecatepec', 'Guadalajara', 'Puebla'],
        coordinates: { latitude: 19.4326, longitude: -99.1332 }
      },
      {
        code: 'JAL',
        name: 'Jalisco',
        districts: ['Guadalajara', 'Zapopan', 'Tlaquepaque', 'Tonalá'],
        coordinates: { latitude: 20.6767, longitude: -103.3475 }
      }
    ],
    regions: ['North', 'Central', 'South', 'Pacific Coast', 'Gulf Coast'],
    coordinates: { latitude: 23.6345, longitude: -102.5528 },
    currency: 'MXN',
    timezone: ['America/Mexico_City']
  },
  {
    code: 'ID',
    name: 'Indonesia',
    states: [
      {
        code: 'JK',
        name: 'Jakarta',
        districts: ['Jakarta', 'Bekasi', 'Depok', 'Tangerang'],
        coordinates: { latitude: -6.2088, longitude: 106.8456 }
      },
      {
        code: 'JB',
        name: 'West Java',
        districts: ['Bandung', 'Bogor', 'Sukabumi', 'Cirebon'],
        coordinates: { latitude: -6.9175, longitude: 107.6191 }
      }
    ],
    regions: ['Java', 'Sumatra', 'Kalimantan', 'Sulawesi', 'Papua'],
    coordinates: { latitude: -0.7893, longitude: 113.9213 },
    currency: 'IDR',
    timezone: ['Asia/Jakarta']
  }
];

export const getCountryByCode = (code: string): Country | undefined => {
  return worldCountries.find(country => country.code === code);
};

export const getStatesByCountryCode = (countryCode: string): State[] => {
  const country = getCountryByCode(countryCode);
  return country?.states || [];
};

export const searchCountries = (searchTerm: string): Country[] => {
  return worldCountries.filter(country => 
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
