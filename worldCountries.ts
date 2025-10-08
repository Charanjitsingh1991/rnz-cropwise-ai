// GENERATED FILE - worldCountries.ts
// Built by generate-world-countries-with-states.mjs
// Includes: all countries (RestCountries) + first-level subdivisions (ISO-3166-2)
// Districts are intentionally left empty.

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
    "code": "AF",
    "name": "Afghanistan",
    "regions": [
      "Asia",
      "Southern Asia"
    ],
    "coordinates": {
      "latitude": 33,
      "longitude": 65
    },
    "currency": "AFN",
    "timezone": [
      "UTC+04:30"
    ],
    "states": [
      {
        "code": "AF-BDS",
        "name": "AF-BDS",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-BDG",
        "name": "AF-BDG",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-BGL",
        "name": "AF-BGL",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-BAL",
        "name": "AF-BAL",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-BAM",
        "name": "AF-BAM",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-FRA",
        "name": "AF-FRA",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-FYB",
        "name": "AF-FYB",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-GHA",
        "name": "AF-GHA",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-GHO",
        "name": "AF-GHO",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-HEL",
        "name": "AF-HEL",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-HER",
        "name": "AF-HER",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-JOW",
        "name": "AF-JOW",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-KAB",
        "name": "AF-KAB",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-KAN",
        "name": "AF-KAN",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-KAP",
        "name": "AF-KAP",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-KNR",
        "name": "AF-KNR",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-KDZ",
        "name": "AF-KDZ",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-LAG",
        "name": "AF-LAG",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-LOW",
        "name": "AF-LOW",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-NAN",
        "name": "AF-NAN",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-NIM",
        "name": "AF-NIM",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-ORU",
        "name": "AF-ORU",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-PIA",
        "name": "AF-PIA",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-PKA",
        "name": "AF-PKA",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-PAR",
        "name": "AF-PAR",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-SAM",
        "name": "AF-SAM",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-SAR",
        "name": "AF-SAR",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-TAK",
        "name": "AF-TAK",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-WAR",
        "name": "AF-WAR",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      },
      {
        "code": "AF-ZAB",
        "name": "AF-ZAB",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 65
        }
      }
    ]
  },
  {
    "code": "AX",
    "name": "Åland Islands",
    "regions": [
      "Europe",
      "Northern Europe"
    ],
    "coordinates": {
      "latitude": 60.116667,
      "longitude": 19.9
    },
    "currency": "EUR",
    "timezone": [
      "UTC+02:00"
    ],
    "states": []
  },
  {
    "code": "AL",
    "name": "Albania",
    "regions": [
      "Europe",
      "Southeast Europe"
    ],
    "coordinates": {
      "latitude": 41,
      "longitude": 20
    },
    "currency": "ALL",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "AL-BR",
        "name": "AL-BR",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-BU",
        "name": "AL-BU",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-DL",
        "name": "AL-DL",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-DV",
        "name": "AL-DV",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-DI",
        "name": "AL-DI",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-DR",
        "name": "AL-DR",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-EL",
        "name": "AL-EL",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-FR",
        "name": "AL-FR",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-GR",
        "name": "AL-GR",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-GJ",
        "name": "AL-GJ",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-HA",
        "name": "AL-HA",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-KA",
        "name": "AL-KA",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-ER",
        "name": "AL-ER",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-KO",
        "name": "AL-KO",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-KR",
        "name": "AL-KR",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-KC",
        "name": "AL-KC",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-KU",
        "name": "AL-KU",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-LA",
        "name": "AL-LA",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-LE",
        "name": "AL-LE",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-LB",
        "name": "AL-LB",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-LU",
        "name": "AL-LU",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-MM",
        "name": "AL-MM",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-MK",
        "name": "AL-MK",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-MT",
        "name": "AL-MT",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-MR",
        "name": "AL-MR",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-PQ",
        "name": "AL-PQ",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-PR",
        "name": "AL-PR",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-PG",
        "name": "AL-PG",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-PU",
        "name": "AL-PU",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-SR",
        "name": "AL-SR",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-SK",
        "name": "AL-SK",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-SH",
        "name": "AL-SH",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-TE",
        "name": "AL-TE",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-TR",
        "name": "AL-TR",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-TP",
        "name": "AL-TP",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      },
      {
        "code": "AL-VL",
        "name": "AL-VL",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 20
        }
      }
    ]
  },
  {
    "code": "DZ",
    "name": "Algeria",
    "regions": [
      "Africa",
      "Northern Africa"
    ],
    "coordinates": {
      "latitude": 28,
      "longitude": 3
    },
    "currency": "DZD",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "DZ-01",
        "name": "DZ-01",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-44",
        "name": "DZ-44",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-46",
        "name": "DZ-46",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-16",
        "name": "DZ-16",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-05",
        "name": "DZ-05",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-08",
        "name": "DZ-08",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-06",
        "name": "DZ-06",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-07",
        "name": "DZ-07",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-09",
        "name": "DZ-09",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-34",
        "name": "DZ-34",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-10",
        "name": "DZ-10",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-35",
        "name": "DZ-35",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-02",
        "name": "DZ-02",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-25",
        "name": "DZ-25",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-17",
        "name": "DZ-17",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-32",
        "name": "DZ-32",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-39",
        "name": "DZ-39",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-36",
        "name": "DZ-36",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-47",
        "name": "DZ-47",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-24",
        "name": "DZ-24",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-33",
        "name": "DZ-33",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-18",
        "name": "DZ-18",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-40",
        "name": "DZ-40",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-03",
        "name": "DZ-03",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-29",
        "name": "DZ-29",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-26",
        "name": "DZ-26",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-43",
        "name": "DZ-43",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-27",
        "name": "DZ-27",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-28",
        "name": "DZ-28",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-45",
        "name": "DZ-45",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-31",
        "name": "DZ-31",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-30",
        "name": "DZ-30",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-04",
        "name": "DZ-04",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-48",
        "name": "DZ-48",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-20",
        "name": "DZ-20",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-19",
        "name": "DZ-19",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-22",
        "name": "DZ-22",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-21",
        "name": "DZ-21",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-41",
        "name": "DZ-41",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-11",
        "name": "DZ-11",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-12",
        "name": "DZ-12",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-14",
        "name": "DZ-14",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-37",
        "name": "DZ-37",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-42",
        "name": "DZ-42",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-38",
        "name": "DZ-38",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-15",
        "name": "DZ-15",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      },
      {
        "code": "DZ-13",
        "name": "DZ-13",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 3
        }
      }
    ]
  },
  {
    "code": "AS",
    "name": "American Samoa",
    "regions": [
      "Oceania",
      "Polynesia"
    ],
    "coordinates": {
      "latitude": -14.33333333,
      "longitude": -170
    },
    "currency": "USD",
    "timezone": [
      "UTC-11:00"
    ],
    "states": [
      {
        "code": "AS-AS",
        "name": "AS-AS",
        "districts": [],
        "coordinates": {
          "latitude": -14.33333333,
          "longitude": -170
        }
      }
    ]
  },
  {
    "code": "AD",
    "name": "Andorra",
    "regions": [
      "Europe",
      "Southern Europe"
    ],
    "coordinates": {
      "latitude": 42.5,
      "longitude": 1.5
    },
    "currency": "EUR",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "AD-AD",
        "name": "AD-AD",
        "districts": [],
        "coordinates": {
          "latitude": 42.5,
          "longitude": 1.5
        }
      }
    ]
  },
  {
    "code": "AO",
    "name": "Angola",
    "regions": [
      "Africa",
      "Middle Africa"
    ],
    "coordinates": {
      "latitude": -12.5,
      "longitude": 18.5
    },
    "currency": "AOA",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "AO-BGO",
        "name": "AO-BGO",
        "districts": [],
        "coordinates": {
          "latitude": -12.5,
          "longitude": 18.5
        }
      },
      {
        "code": "AO-BGU",
        "name": "AO-BGU",
        "districts": [],
        "coordinates": {
          "latitude": -12.5,
          "longitude": 18.5
        }
      },
      {
        "code": "AO-BIE",
        "name": "AO-BIE",
        "districts": [],
        "coordinates": {
          "latitude": -12.5,
          "longitude": 18.5
        }
      },
      {
        "code": "AO-CAB",
        "name": "AO-CAB",
        "districts": [],
        "coordinates": {
          "latitude": -12.5,
          "longitude": 18.5
        }
      },
      {
        "code": "AO-CCU",
        "name": "AO-CCU",
        "districts": [],
        "coordinates": {
          "latitude": -12.5,
          "longitude": 18.5
        }
      },
      {
        "code": "AO-CNO",
        "name": "AO-CNO",
        "districts": [],
        "coordinates": {
          "latitude": -12.5,
          "longitude": 18.5
        }
      },
      {
        "code": "AO-CUS",
        "name": "AO-CUS",
        "districts": [],
        "coordinates": {
          "latitude": -12.5,
          "longitude": 18.5
        }
      },
      {
        "code": "AO-CNN",
        "name": "AO-CNN",
        "districts": [],
        "coordinates": {
          "latitude": -12.5,
          "longitude": 18.5
        }
      },
      {
        "code": "AO-HUA",
        "name": "AO-HUA",
        "districts": [],
        "coordinates": {
          "latitude": -12.5,
          "longitude": 18.5
        }
      },
      {
        "code": "AO-HUI",
        "name": "AO-HUI",
        "districts": [],
        "coordinates": {
          "latitude": -12.5,
          "longitude": 18.5
        }
      },
      {
        "code": "AO-LUA",
        "name": "AO-LUA",
        "districts": [],
        "coordinates": {
          "latitude": -12.5,
          "longitude": 18.5
        }
      },
      {
        "code": "AO-LNO",
        "name": "AO-LNO",
        "districts": [],
        "coordinates": {
          "latitude": -12.5,
          "longitude": 18.5
        }
      },
      {
        "code": "AO-LSU",
        "name": "AO-LSU",
        "districts": [],
        "coordinates": {
          "latitude": -12.5,
          "longitude": 18.5
        }
      },
      {
        "code": "AO-MAL",
        "name": "AO-MAL",
        "districts": [],
        "coordinates": {
          "latitude": -12.5,
          "longitude": 18.5
        }
      },
      {
        "code": "AO-MOX",
        "name": "AO-MOX",
        "districts": [],
        "coordinates": {
          "latitude": -12.5,
          "longitude": 18.5
        }
      },
      {
        "code": "AO-NAM",
        "name": "AO-NAM",
        "districts": [],
        "coordinates": {
          "latitude": -12.5,
          "longitude": 18.5
        }
      },
      {
        "code": "AO-UIG",
        "name": "AO-UIG",
        "districts": [],
        "coordinates": {
          "latitude": -12.5,
          "longitude": 18.5
        }
      },
      {
        "code": "AO-ZAI",
        "name": "AO-ZAI",
        "districts": [],
        "coordinates": {
          "latitude": -12.5,
          "longitude": 18.5
        }
      }
    ]
  },
  {
    "code": "AI",
    "name": "Anguilla",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 18.25,
      "longitude": -63.16666666
    },
    "currency": "XCD",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "AI-AI",
        "name": "AI-AI",
        "districts": [],
        "coordinates": {
          "latitude": 18.25,
          "longitude": -63.16666666
        }
      }
    ]
  },
  {
    "code": "AQ",
    "name": "Antarctica",
    "regions": [
      "Antarctic"
    ],
    "coordinates": {
      "latitude": -90,
      "longitude": 0
    },
    "currency": "",
    "timezone": [
      "UTC-03:00",
      "UTC+03:00",
      "UTC+05:00",
      "UTC+06:00",
      "UTC+07:00",
      "UTC+08:00",
      "UTC+10:00",
      "UTC+12:00"
    ],
    "states": [
      {
        "code": "AQ-AQ",
        "name": "AQ-AQ",
        "districts": [],
        "coordinates": {
          "latitude": -90,
          "longitude": 0
        }
      }
    ]
  },
  {
    "code": "AG",
    "name": "Antigua and Barbuda",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 17.05,
      "longitude": -61.8
    },
    "currency": "XCD",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "AG-AG",
        "name": "AG-AG",
        "districts": [],
        "coordinates": {
          "latitude": 17.05,
          "longitude": -61.8
        }
      }
    ]
  },
  {
    "code": "AR",
    "name": "Argentina",
    "regions": [
      "Americas",
      "South America"
    ],
    "coordinates": {
      "latitude": -34,
      "longitude": -64
    },
    "currency": "ARS",
    "timezone": [
      "UTC-03:00"
    ],
    "states": [
      {
        "code": "AR-C",
        "name": "AR-C",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-B",
        "name": "AR-B",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-K",
        "name": "AR-K",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-X",
        "name": "AR-X",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-W",
        "name": "AR-W",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-H",
        "name": "AR-H",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-U",
        "name": "AR-U",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-E",
        "name": "AR-E",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-P",
        "name": "AR-P",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-Y",
        "name": "AR-Y",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-L",
        "name": "AR-L",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-F",
        "name": "AR-F",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-M",
        "name": "AR-M",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-N",
        "name": "AR-N",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-Q",
        "name": "AR-Q",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-R",
        "name": "AR-R",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-A",
        "name": "AR-A",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-J",
        "name": "AR-J",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-D",
        "name": "AR-D",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-Z",
        "name": "AR-Z",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-S",
        "name": "AR-S",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-G",
        "name": "AR-G",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-V",
        "name": "AR-V",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      },
      {
        "code": "AR-T",
        "name": "AR-T",
        "districts": [],
        "coordinates": {
          "latitude": -34,
          "longitude": -64
        }
      }
    ]
  },
  {
    "code": "AM",
    "name": "Armenia",
    "regions": [
      "Asia",
      "Western Asia"
    ],
    "coordinates": {
      "latitude": 40,
      "longitude": 45
    },
    "currency": "AMD",
    "timezone": [
      "UTC+04:00"
    ],
    "states": [
      {
        "code": "AM-ER",
        "name": "AM-ER",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 45
        }
      },
      {
        "code": "AM-AG",
        "name": "AM-AG",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 45
        }
      },
      {
        "code": "AM-AR",
        "name": "AM-AR",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 45
        }
      },
      {
        "code": "AM-AV",
        "name": "AM-AV",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 45
        }
      },
      {
        "code": "AM-GR",
        "name": "AM-GR",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 45
        }
      },
      {
        "code": "AM-KT",
        "name": "AM-KT",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 45
        }
      },
      {
        "code": "AM-LO",
        "name": "AM-LO",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 45
        }
      },
      {
        "code": "AM-SH",
        "name": "AM-SH",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 45
        }
      },
      {
        "code": "AM-SU",
        "name": "AM-SU",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 45
        }
      },
      {
        "code": "AM-TV",
        "name": "AM-TV",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 45
        }
      },
      {
        "code": "AM-VD",
        "name": "AM-VD",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 45
        }
      }
    ]
  },
  {
    "code": "AW",
    "name": "Aruba",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 12.5,
      "longitude": -69.96666666
    },
    "currency": "AWG",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "AW-AW",
        "name": "AW-AW",
        "districts": [],
        "coordinates": {
          "latitude": 12.5,
          "longitude": -69.96666666
        }
      }
    ]
  },
  {
    "code": "AU",
    "name": "Australia",
    "regions": [
      "Oceania",
      "Australia and New Zealand"
    ],
    "coordinates": {
      "latitude": -27,
      "longitude": 133
    },
    "currency": "AUD",
    "timezone": [
      "UTC+05:00",
      "UTC+06:30",
      "UTC+07:00",
      "UTC+08:00",
      "UTC+09:30",
      "UTC+10:00",
      "UTC+10:30",
      "UTC+11:30"
    ],
    "states": [
      {
        "code": "AU-NSW",
        "name": "AU-NSW",
        "districts": [],
        "coordinates": {
          "latitude": -31.2532,
          "longitude": 146.9211
        }
      },
      {
        "code": "AU-QLD",
        "name": "AU-QLD",
        "districts": [],
        "coordinates": {
          "latitude": -27,
          "longitude": 133
        }
      },
      {
        "code": "AU-SA",
        "name": "AU-SA",
        "districts": [],
        "coordinates": {
          "latitude": -27,
          "longitude": 133
        }
      },
      {
        "code": "AU-TAS",
        "name": "AU-TAS",
        "districts": [],
        "coordinates": {
          "latitude": -27,
          "longitude": 133
        }
      },
      {
        "code": "AU-VIC",
        "name": "AU-VIC",
        "districts": [],
        "coordinates": {
          "latitude": -36.9848,
          "longitude": 143.3906
        }
      },
      {
        "code": "AU-WA",
        "name": "AU-WA",
        "districts": [],
        "coordinates": {
          "latitude": -27,
          "longitude": 133
        }
      },
      {
        "code": "AU-ACT",
        "name": "AU-ACT",
        "districts": [],
        "coordinates": {
          "latitude": -27,
          "longitude": 133
        }
      },
      {
        "code": "AU-NT",
        "name": "AU-NT",
        "districts": [],
        "coordinates": {
          "latitude": -27,
          "longitude": 133
        }
      }
    ]
  },
  {
    "code": "AT",
    "name": "Austria",
    "regions": [
      "Europe",
      "Central Europe"
    ],
    "coordinates": {
      "latitude": 47.33333333,
      "longitude": 13.33333333
    },
    "currency": "EUR",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "AT-1",
        "name": "AT-1",
        "districts": [],
        "coordinates": {
          "latitude": 47.33333333,
          "longitude": 13.33333333
        }
      },
      {
        "code": "AT-2",
        "name": "AT-2",
        "districts": [],
        "coordinates": {
          "latitude": 47.33333333,
          "longitude": 13.33333333
        }
      },
      {
        "code": "AT-3",
        "name": "AT-3",
        "districts": [],
        "coordinates": {
          "latitude": 47.33333333,
          "longitude": 13.33333333
        }
      },
      {
        "code": "AT-4",
        "name": "AT-4",
        "districts": [],
        "coordinates": {
          "latitude": 47.33333333,
          "longitude": 13.33333333
        }
      },
      {
        "code": "AT-5",
        "name": "AT-5",
        "districts": [],
        "coordinates": {
          "latitude": 47.33333333,
          "longitude": 13.33333333
        }
      },
      {
        "code": "AT-6",
        "name": "AT-6",
        "districts": [],
        "coordinates": {
          "latitude": 47.33333333,
          "longitude": 13.33333333
        }
      },
      {
        "code": "AT-7",
        "name": "AT-7",
        "districts": [],
        "coordinates": {
          "latitude": 47.33333333,
          "longitude": 13.33333333
        }
      },
      {
        "code": "AT-8",
        "name": "AT-8",
        "districts": [],
        "coordinates": {
          "latitude": 47.33333333,
          "longitude": 13.33333333
        }
      },
      {
        "code": "AT-9",
        "name": "AT-9",
        "districts": [],
        "coordinates": {
          "latitude": 47.33333333,
          "longitude": 13.33333333
        }
      }
    ]
  },
  {
    "code": "AZ",
    "name": "Azerbaijan",
    "regions": [
      "Asia",
      "Western Asia"
    ],
    "coordinates": {
      "latitude": 40.5,
      "longitude": 47.5
    },
    "currency": "AZN",
    "timezone": [
      "UTC+04:00"
    ],
    "states": [
      {
        "code": "AZ-MM",
        "name": "AZ-MM",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-AB",
        "name": "AZ-AB",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-BA",
        "name": "AZ-BA",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-GA",
        "name": "AZ-GA",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-LA",
        "name": "AZ-LA",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-MI",
        "name": "AZ-MI",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-NA",
        "name": "AZ-NA",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-SA",
        "name": "AZ-SA",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-SM",
        "name": "AZ-SM",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-SS",
        "name": "AZ-SS",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-XA",
        "name": "AZ-XA",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-YE",
        "name": "AZ-YE",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-ABS",
        "name": "AZ-ABS",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-AGC",
        "name": "AZ-AGC",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-AGM",
        "name": "AZ-AGM",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-AGS",
        "name": "AZ-AGS",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-AGA",
        "name": "AZ-AGA",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-AGU",
        "name": "AZ-AGU",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-AST",
        "name": "AZ-AST",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-BAB",
        "name": "AZ-BAB",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-BAL",
        "name": "AZ-BAL",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-BAR",
        "name": "AZ-BAR",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-BEY",
        "name": "AZ-BEY",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-BIL",
        "name": "AZ-BIL",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-CAB",
        "name": "AZ-CAB",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-CAL",
        "name": "AZ-CAL",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-CUL",
        "name": "AZ-CUL",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-DAS",
        "name": "AZ-DAS",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-DAV",
        "name": "AZ-DAV",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-FUZ",
        "name": "AZ-FUZ",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-GAD",
        "name": "AZ-GAD",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-GOR",
        "name": "AZ-GOR",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-GOY",
        "name": "AZ-GOY",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-HAC",
        "name": "AZ-HAC",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-IMI",
        "name": "AZ-IMI",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-ISM",
        "name": "AZ-ISM",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-KAL",
        "name": "AZ-KAL",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-KUR",
        "name": "AZ-KUR",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-LAC",
        "name": "AZ-LAC",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-LAN",
        "name": "AZ-LAN",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-LER",
        "name": "AZ-LER",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-MAS",
        "name": "AZ-MAS",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-NEF",
        "name": "AZ-NEF",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-OGU",
        "name": "AZ-OGU",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-ORD",
        "name": "AZ-ORD",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-QAB",
        "name": "AZ-QAB",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-QAX",
        "name": "AZ-QAX",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-QAZ",
        "name": "AZ-QAZ",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-QOB",
        "name": "AZ-QOB",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-QBA",
        "name": "AZ-QBA",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-QBI",
        "name": "AZ-QBI",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-QUS",
        "name": "AZ-QUS",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-SAT",
        "name": "AZ-SAT",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-SAB",
        "name": "AZ-SAB",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-SAD",
        "name": "AZ-SAD",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-SAH",
        "name": "AZ-SAH",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-SAK",
        "name": "AZ-SAK",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-SAL",
        "name": "AZ-SAL",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-SMI",
        "name": "AZ-SMI",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-SKR",
        "name": "AZ-SKR",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-SMX",
        "name": "AZ-SMX",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-SAR",
        "name": "AZ-SAR",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-SIY",
        "name": "AZ-SIY",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-SUS",
        "name": "AZ-SUS",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-TAR",
        "name": "AZ-TAR",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-TOV",
        "name": "AZ-TOV",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-UCA",
        "name": "AZ-UCA",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-XAC",
        "name": "AZ-XAC",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-XAN",
        "name": "AZ-XAN",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-XIZ",
        "name": "AZ-XIZ",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-XCI",
        "name": "AZ-XCI",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-XVD",
        "name": "AZ-XVD",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-YAR",
        "name": "AZ-YAR",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-YEV",
        "name": "AZ-YEV",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-ZAN",
        "name": "AZ-ZAN",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-ZAQ",
        "name": "AZ-ZAQ",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      },
      {
        "code": "AZ-ZAR",
        "name": "AZ-ZAR",
        "districts": [],
        "coordinates": {
          "latitude": 40.5,
          "longitude": 47.5
        }
      }
    ]
  },
  {
    "code": "BS",
    "name": "Bahamas",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 25.0343,
      "longitude": -77.3963
    },
    "currency": "BSD",
    "timezone": [
      "UTC-05:00"
    ],
    "states": [
      {
        "code": "BS-AC",
        "name": "BS-AC",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-BI",
        "name": "BS-BI",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-CI",
        "name": "BS-CI",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-EX",
        "name": "BS-EX",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-FP",
        "name": "BS-FP",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-FC",
        "name": "BS-FC",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-GH",
        "name": "BS-GH",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-GT",
        "name": "BS-GT",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-HI",
        "name": "BS-HI",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-HR",
        "name": "BS-HR",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-IN",
        "name": "BS-IN",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-KB",
        "name": "BS-KB",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-LI",
        "name": "BS-LI",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-MH",
        "name": "BS-MH",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-MG",
        "name": "BS-MG",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-NP",
        "name": "BS-NP",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-NB",
        "name": "BS-NB",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-RI",
        "name": "BS-RI",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-RS",
        "name": "BS-RS",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-SP",
        "name": "BS-SP",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      },
      {
        "code": "BS-SR",
        "name": "BS-SR",
        "districts": [],
        "coordinates": {
          "latitude": 25.0343,
          "longitude": -77.3963
        }
      }
    ]
  },
  {
    "code": "BH",
    "name": "Bahrain",
    "regions": [
      "Asia",
      "Western Asia"
    ],
    "coordinates": {
      "latitude": 26,
      "longitude": 50.55
    },
    "currency": "BHD",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "BH-01",
        "name": "BH-01",
        "districts": [],
        "coordinates": {
          "latitude": 26,
          "longitude": 50.55
        }
      },
      {
        "code": "BH-03",
        "name": "BH-03",
        "districts": [],
        "coordinates": {
          "latitude": 26,
          "longitude": 50.55
        }
      },
      {
        "code": "BH-10",
        "name": "BH-10",
        "districts": [],
        "coordinates": {
          "latitude": 26,
          "longitude": 50.55
        }
      },
      {
        "code": "BH-07",
        "name": "BH-07",
        "districts": [],
        "coordinates": {
          "latitude": 26,
          "longitude": 50.55
        }
      },
      {
        "code": "BH-05",
        "name": "BH-05",
        "districts": [],
        "coordinates": {
          "latitude": 26,
          "longitude": 50.55
        }
      },
      {
        "code": "BH-02",
        "name": "BH-02",
        "districts": [],
        "coordinates": {
          "latitude": 26,
          "longitude": 50.55
        }
      },
      {
        "code": "BH-09",
        "name": "BH-09",
        "districts": [],
        "coordinates": {
          "latitude": 26,
          "longitude": 50.55
        }
      },
      {
        "code": "BH-04",
        "name": "BH-04",
        "districts": [],
        "coordinates": {
          "latitude": 26,
          "longitude": 50.55
        }
      },
      {
        "code": "BH-12",
        "name": "BH-12",
        "districts": [],
        "coordinates": {
          "latitude": 26,
          "longitude": 50.55
        }
      },
      {
        "code": "BH-08",
        "name": "BH-08",
        "districts": [],
        "coordinates": {
          "latitude": 26,
          "longitude": 50.55
        }
      },
      {
        "code": "BH-11",
        "name": "BH-11",
        "districts": [],
        "coordinates": {
          "latitude": 26,
          "longitude": 50.55
        }
      },
      {
        "code": "BH-06",
        "name": "BH-06",
        "districts": [],
        "coordinates": {
          "latitude": 26,
          "longitude": 50.55
        }
      }
    ]
  },
  {
    "code": "BD",
    "name": "Bangladesh",
    "regions": [
      "Asia",
      "Southern Asia"
    ],
    "coordinates": {
      "latitude": 24,
      "longitude": 90
    },
    "currency": "BDT",
    "timezone": [
      "UTC+06:00"
    ],
    "states": [
      {
        "code": "BD-1",
        "name": "BD-1",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-1B",
        "name": "BD-1B",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-1Q",
        "name": "BD-1Q",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-2",
        "name": "BD-2",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-2A",
        "name": "BD-2A",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-2D",
        "name": "BD-2D",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-2E",
        "name": "BD-2E",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-2F",
        "name": "BD-2F",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-2O",
        "name": "BD-2O",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-2T",
        "name": "BD-2T",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-3",
        "name": "BD-3",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-3G",
        "name": "BD-3G",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-3I",
        "name": "BD-3I",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-3J",
        "name": "BD-3J",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-3N",
        "name": "BD-3N",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-3U",
        "name": "BD-3U",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-4",
        "name": "BD-4",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-4K",
        "name": "BD-4K",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-4L",
        "name": "BD-4L",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-4M",
        "name": "BD-4M",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-5",
        "name": "BD-5",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-5C",
        "name": "BD-5C",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-5H",
        "name": "BD-5H",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-5P",
        "name": "BD-5P",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-5R",
        "name": "BD-5R",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      },
      {
        "code": "BD-5S",
        "name": "BD-5S",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 90
        }
      }
    ]
  },
  {
    "code": "BB",
    "name": "Barbados",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 13.16666666,
      "longitude": -59.53333333
    },
    "currency": "BBD",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "BB-BB",
        "name": "BB-BB",
        "districts": [],
        "coordinates": {
          "latitude": 13.16666666,
          "longitude": -59.53333333
        }
      }
    ]
  },
  {
    "code": "BY",
    "name": "Belarus",
    "regions": [
      "Europe",
      "Eastern Europe"
    ],
    "coordinates": {
      "latitude": 53,
      "longitude": 28
    },
    "currency": "BYN",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "BY-BR",
        "name": "BY-BR",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": 28
        }
      },
      {
        "code": "BY-HO",
        "name": "BY-HO",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": 28
        }
      },
      {
        "code": "BY-HR",
        "name": "BY-HR",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": 28
        }
      },
      {
        "code": "BY-MA",
        "name": "BY-MA",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": 28
        }
      },
      {
        "code": "BY-MI",
        "name": "BY-MI",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": 28
        }
      },
      {
        "code": "BY-VI",
        "name": "BY-VI",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": 28
        }
      }
    ]
  },
  {
    "code": "BE",
    "name": "Belgium",
    "regions": [
      "Europe",
      "Western Europe"
    ],
    "coordinates": {
      "latitude": 50.83333333,
      "longitude": 4
    },
    "currency": "EUR",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "BE-BRU",
        "name": "BE-BRU",
        "districts": [],
        "coordinates": {
          "latitude": 50.83333333,
          "longitude": 4
        }
      },
      {
        "code": "BE-VLG",
        "name": "BE-VLG",
        "districts": [],
        "coordinates": {
          "latitude": 50.83333333,
          "longitude": 4
        }
      },
      {
        "code": "BE-VAN",
        "name": "BE-VAN",
        "districts": [],
        "coordinates": {
          "latitude": 50.83333333,
          "longitude": 4
        }
      },
      {
        "code": "BE-VLI",
        "name": "BE-VLI",
        "districts": [],
        "coordinates": {
          "latitude": 50.83333333,
          "longitude": 4
        }
      },
      {
        "code": "BE-VOV",
        "name": "BE-VOV",
        "districts": [],
        "coordinates": {
          "latitude": 50.83333333,
          "longitude": 4
        }
      },
      {
        "code": "BE-VBR",
        "name": "BE-VBR",
        "districts": [],
        "coordinates": {
          "latitude": 50.83333333,
          "longitude": 4
        }
      },
      {
        "code": "BE-VWV",
        "name": "BE-VWV",
        "districts": [],
        "coordinates": {
          "latitude": 50.83333333,
          "longitude": 4
        }
      },
      {
        "code": "BE-WAL",
        "name": "BE-WAL",
        "districts": [],
        "coordinates": {
          "latitude": 50.83333333,
          "longitude": 4
        }
      },
      {
        "code": "BE-WBR",
        "name": "BE-WBR",
        "districts": [],
        "coordinates": {
          "latitude": 50.83333333,
          "longitude": 4
        }
      },
      {
        "code": "BE-WHT",
        "name": "BE-WHT",
        "districts": [],
        "coordinates": {
          "latitude": 50.83333333,
          "longitude": 4
        }
      },
      {
        "code": "BE-WLG",
        "name": "BE-WLG",
        "districts": [],
        "coordinates": {
          "latitude": 50.83333333,
          "longitude": 4
        }
      },
      {
        "code": "BE-WLX",
        "name": "BE-WLX",
        "districts": [],
        "coordinates": {
          "latitude": 50.83333333,
          "longitude": 4
        }
      },
      {
        "code": "BE-WNA",
        "name": "BE-WNA",
        "districts": [],
        "coordinates": {
          "latitude": 50.83333333,
          "longitude": 4
        }
      }
    ]
  },
  {
    "code": "BZ",
    "name": "Belize",
    "regions": [
      "Americas",
      "Central America"
    ],
    "coordinates": {
      "latitude": 17.25,
      "longitude": -88.75
    },
    "currency": "BZD",
    "timezone": [
      "UTC-06:00"
    ],
    "states": [
      {
        "code": "BZ-BZ",
        "name": "BZ-BZ",
        "districts": [],
        "coordinates": {
          "latitude": 17.25,
          "longitude": -88.75
        }
      },
      {
        "code": "BZ-CY",
        "name": "BZ-CY",
        "districts": [],
        "coordinates": {
          "latitude": 17.25,
          "longitude": -88.75
        }
      },
      {
        "code": "BZ-CZL",
        "name": "BZ-CZL",
        "districts": [],
        "coordinates": {
          "latitude": 17.25,
          "longitude": -88.75
        }
      },
      {
        "code": "BZ-OW",
        "name": "BZ-OW",
        "districts": [],
        "coordinates": {
          "latitude": 17.25,
          "longitude": -88.75
        }
      },
      {
        "code": "BZ-SC",
        "name": "BZ-SC",
        "districts": [],
        "coordinates": {
          "latitude": 17.25,
          "longitude": -88.75
        }
      },
      {
        "code": "BZ-TOL",
        "name": "BZ-TOL",
        "districts": [],
        "coordinates": {
          "latitude": 17.25,
          "longitude": -88.75
        }
      }
    ]
  },
  {
    "code": "BJ",
    "name": "Benin",
    "regions": [
      "Africa",
      "Western Africa"
    ],
    "coordinates": {
      "latitude": 9.5,
      "longitude": 2.25
    },
    "currency": "XOF",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "BJ-AK",
        "name": "BJ-AK",
        "districts": [],
        "coordinates": {
          "latitude": 9.5,
          "longitude": 2.25
        }
      },
      {
        "code": "BJ-AQ",
        "name": "BJ-AQ",
        "districts": [],
        "coordinates": {
          "latitude": 9.5,
          "longitude": 2.25
        }
      },
      {
        "code": "BJ-BO",
        "name": "BJ-BO",
        "districts": [],
        "coordinates": {
          "latitude": 9.5,
          "longitude": 2.25
        }
      },
      {
        "code": "BJ-MO",
        "name": "BJ-MO",
        "districts": [],
        "coordinates": {
          "latitude": 9.5,
          "longitude": 2.25
        }
      },
      {
        "code": "BJ-OU",
        "name": "BJ-OU",
        "districts": [],
        "coordinates": {
          "latitude": 9.5,
          "longitude": 2.25
        }
      },
      {
        "code": "BJ-ZO",
        "name": "BJ-ZO",
        "districts": [],
        "coordinates": {
          "latitude": 9.5,
          "longitude": 2.25
        }
      }
    ]
  },
  {
    "code": "BM",
    "name": "Bermuda",
    "regions": [
      "Americas",
      "North America"
    ],
    "coordinates": {
      "latitude": 32.33333333,
      "longitude": -64.75
    },
    "currency": "BMD",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "BM-BM",
        "name": "BM-BM",
        "districts": [],
        "coordinates": {
          "latitude": 32.33333333,
          "longitude": -64.75
        }
      }
    ]
  },
  {
    "code": "BT",
    "name": "Bhutan",
    "regions": [
      "Asia",
      "Southern Asia"
    ],
    "coordinates": {
      "latitude": 27.5,
      "longitude": 90.5
    },
    "currency": "BTN",
    "timezone": [
      "UTC+06:00"
    ],
    "states": [
      {
        "code": "BT-33",
        "name": "BT-33",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      },
      {
        "code": "BT-12",
        "name": "BT-12",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      },
      {
        "code": "BT-22",
        "name": "BT-22",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      },
      {
        "code": "BT-GA",
        "name": "BT-GA",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      },
      {
        "code": "BT-13",
        "name": "BT-13",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      },
      {
        "code": "BT-44",
        "name": "BT-44",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      },
      {
        "code": "BT-42",
        "name": "BT-42",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      },
      {
        "code": "BT-11",
        "name": "BT-11",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      },
      {
        "code": "BT-43",
        "name": "BT-43",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      },
      {
        "code": "BT-23",
        "name": "BT-23",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      },
      {
        "code": "BT-45",
        "name": "BT-45",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      },
      {
        "code": "BT-14",
        "name": "BT-14",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      },
      {
        "code": "BT-31",
        "name": "BT-31",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      },
      {
        "code": "BT-15",
        "name": "BT-15",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      },
      {
        "code": "BT-41",
        "name": "BT-41",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      },
      {
        "code": "BT-TY",
        "name": "BT-TY",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      },
      {
        "code": "BT-32",
        "name": "BT-32",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      },
      {
        "code": "BT-21",
        "name": "BT-21",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      },
      {
        "code": "BT-24",
        "name": "BT-24",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      },
      {
        "code": "BT-34",
        "name": "BT-34",
        "districts": [],
        "coordinates": {
          "latitude": 27.5,
          "longitude": 90.5
        }
      }
    ]
  },
  {
    "code": "BO",
    "name": "Bolivia",
    "regions": [
      "Americas",
      "South America"
    ],
    "coordinates": {
      "latitude": -17,
      "longitude": -65
    },
    "currency": "BOB",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "BO-C",
        "name": "BO-C",
        "districts": [],
        "coordinates": {
          "latitude": -17,
          "longitude": -65
        }
      },
      {
        "code": "BO-H",
        "name": "BO-H",
        "districts": [],
        "coordinates": {
          "latitude": -17,
          "longitude": -65
        }
      },
      {
        "code": "BO-B",
        "name": "BO-B",
        "districts": [],
        "coordinates": {
          "latitude": -17,
          "longitude": -65
        }
      },
      {
        "code": "BO-L",
        "name": "BO-L",
        "districts": [],
        "coordinates": {
          "latitude": -17,
          "longitude": -65
        }
      },
      {
        "code": "BO-O",
        "name": "BO-O",
        "districts": [],
        "coordinates": {
          "latitude": -17,
          "longitude": -65
        }
      },
      {
        "code": "BO-N",
        "name": "BO-N",
        "districts": [],
        "coordinates": {
          "latitude": -17,
          "longitude": -65
        }
      },
      {
        "code": "BO-P",
        "name": "BO-P",
        "districts": [],
        "coordinates": {
          "latitude": -17,
          "longitude": -65
        }
      },
      {
        "code": "BO-S",
        "name": "BO-S",
        "districts": [],
        "coordinates": {
          "latitude": -17,
          "longitude": -65
        }
      },
      {
        "code": "BO-T",
        "name": "BO-T",
        "districts": [],
        "coordinates": {
          "latitude": -17,
          "longitude": -65
        }
      }
    ]
  },
  {
    "code": "BA",
    "name": "Bosnia and Herzegovina",
    "regions": [
      "Europe",
      "Southeast Europe"
    ],
    "coordinates": {
      "latitude": 44,
      "longitude": 18
    },
    "currency": "BAM",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "BA-BIH",
        "name": "BA-BIH",
        "districts": [],
        "coordinates": {
          "latitude": 44,
          "longitude": 18
        }
      },
      {
        "code": "BA-SRP",
        "name": "BA-SRP",
        "districts": [],
        "coordinates": {
          "latitude": 44,
          "longitude": 18
        }
      }
    ]
  },
  {
    "code": "BW",
    "name": "Botswana",
    "regions": [
      "Africa",
      "Southern Africa"
    ],
    "coordinates": {
      "latitude": -22,
      "longitude": 24
    },
    "currency": "BWP",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "BW-CE",
        "name": "BW-CE",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 24
        }
      },
      {
        "code": "BW-CH",
        "name": "BW-CH",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 24
        }
      },
      {
        "code": "BW-GH",
        "name": "BW-GH",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 24
        }
      },
      {
        "code": "BW-KG",
        "name": "BW-KG",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 24
        }
      },
      {
        "code": "BW-KL",
        "name": "BW-KL",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 24
        }
      },
      {
        "code": "BW-KW",
        "name": "BW-KW",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 24
        }
      },
      {
        "code": "BW-NG",
        "name": "BW-NG",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 24
        }
      },
      {
        "code": "BW-NE",
        "name": "BW-NE",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 24
        }
      },
      {
        "code": "BW-SE",
        "name": "BW-SE",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 24
        }
      },
      {
        "code": "BW-SO",
        "name": "BW-SO",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 24
        }
      }
    ]
  },
  {
    "code": "BV",
    "name": "Bouvet Island",
    "regions": [
      "Antarctic"
    ],
    "coordinates": {
      "latitude": 54.4208,
      "longitude": 3.3464
    },
    "currency": "",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "BV-BV",
        "name": "BV-BV",
        "districts": [],
        "coordinates": {
          "latitude": 54.4208,
          "longitude": 3.3464
        }
      }
    ]
  },
  {
    "code": "BR",
    "name": "Brazil",
    "regions": [
      "Americas",
      "South America"
    ],
    "coordinates": {
      "latitude": -10,
      "longitude": -55
    },
    "currency": "BRL",
    "timezone": [
      "UTC-05:00",
      "UTC-04:00",
      "UTC-03:00",
      "UTC-02:00"
    ],
    "states": [
      {
        "code": "BR-DF",
        "name": "BR-DF",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-AC",
        "name": "BR-AC",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-AL",
        "name": "BR-AL",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-AP",
        "name": "BR-AP",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-AM",
        "name": "BR-AM",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-BA",
        "name": "BR-BA",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-CE",
        "name": "BR-CE",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-ES",
        "name": "BR-ES",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-GO",
        "name": "BR-GO",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-MA",
        "name": "BR-MA",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-MT",
        "name": "BR-MT",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-MS",
        "name": "BR-MS",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-MG",
        "name": "BR-MG",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-PA",
        "name": "BR-PA",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-PB",
        "name": "BR-PB",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-PR",
        "name": "BR-PR",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-PE",
        "name": "BR-PE",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-PI",
        "name": "BR-PI",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-RJ",
        "name": "BR-RJ",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-RN",
        "name": "BR-RN",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-RS",
        "name": "BR-RS",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-R0",
        "name": "BR-R0",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-RR",
        "name": "BR-RR",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-SC",
        "name": "BR-SC",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-SP",
        "name": "BR-SP",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": -49
        }
      },
      {
        "code": "BR-SE",
        "name": "BR-SE",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      },
      {
        "code": "BR-TO",
        "name": "BR-TO",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -55
        }
      }
    ]
  },
  {
    "code": "IO",
    "name": "British Indian Ocean Territory",
    "regions": [
      "Africa",
      "Eastern Africa"
    ],
    "coordinates": {
      "latitude": -6,
      "longitude": 71.5
    },
    "currency": "USD",
    "timezone": [
      "UTC+06:00"
    ],
    "states": [
      {
        "code": "IO-IO",
        "name": "IO-IO",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 71.5
        }
      }
    ]
  },
  {
    "code": "VG",
    "name": "British Virgin Islands",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 18.431383,
      "longitude": -64.62305
    },
    "currency": "USD",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "VG-VG",
        "name": "VG-VG",
        "districts": [],
        "coordinates": {
          "latitude": 18.431383,
          "longitude": -64.62305
        }
      }
    ]
  },
  {
    "code": "BN",
    "name": "Brunei",
    "regions": [
      "Asia",
      "South-Eastern Asia"
    ],
    "coordinates": {
      "latitude": 4.5,
      "longitude": 114.66666666
    },
    "currency": "BND",
    "timezone": [
      "UTC+08:00"
    ],
    "states": [
      {
        "code": "BN-BE",
        "name": "BN-BE",
        "districts": [],
        "coordinates": {
          "latitude": 4.5,
          "longitude": 114.66666666
        }
      },
      {
        "code": "BN-BM",
        "name": "BN-BM",
        "districts": [],
        "coordinates": {
          "latitude": 4.5,
          "longitude": 114.66666666
        }
      },
      {
        "code": "BN-TE",
        "name": "BN-TE",
        "districts": [],
        "coordinates": {
          "latitude": 4.5,
          "longitude": 114.66666666
        }
      },
      {
        "code": "BN-TU",
        "name": "BN-TU",
        "districts": [],
        "coordinates": {
          "latitude": 4.5,
          "longitude": 114.66666666
        }
      }
    ]
  },
  {
    "code": "BG",
    "name": "Bulgaria",
    "regions": [
      "Europe",
      "Southeast Europe"
    ],
    "coordinates": {
      "latitude": 43,
      "longitude": 25
    },
    "currency": "BGN",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "BG-02",
        "name": "BG-02",
        "districts": [],
        "coordinates": {
          "latitude": 43,
          "longitude": 25
        }
      },
      {
        "code": "BG-09",
        "name": "BG-09",
        "districts": [],
        "coordinates": {
          "latitude": 43,
          "longitude": 25
        }
      },
      {
        "code": "BG-04",
        "name": "BG-04",
        "districts": [],
        "coordinates": {
          "latitude": 43,
          "longitude": 25
        }
      },
      {
        "code": "BG-05",
        "name": "BG-05",
        "districts": [],
        "coordinates": {
          "latitude": 43,
          "longitude": 25
        }
      },
      {
        "code": "BG-06",
        "name": "BG-06",
        "districts": [],
        "coordinates": {
          "latitude": 43,
          "longitude": 25
        }
      },
      {
        "code": "BG-07",
        "name": "BG-07",
        "districts": [],
        "coordinates": {
          "latitude": 43,
          "longitude": 25
        }
      },
      {
        "code": "BG-08",
        "name": "BG-08",
        "districts": [],
        "coordinates": {
          "latitude": 43,
          "longitude": 25
        }
      },
      {
        "code": "BG-01",
        "name": "BG-01",
        "districts": [],
        "coordinates": {
          "latitude": 43,
          "longitude": 25
        }
      },
      {
        "code": "BG-03",
        "name": "BG-03",
        "districts": [],
        "coordinates": {
          "latitude": 43,
          "longitude": 25
        }
      }
    ]
  },
  {
    "code": "BF",
    "name": "Burkina Faso",
    "regions": [
      "Africa",
      "Western Africa"
    ],
    "coordinates": {
      "latitude": 13,
      "longitude": -2
    },
    "currency": "XOF",
    "timezone": [
      "UTC"
    ],
    "states": [
      {
        "code": "BF-BAL",
        "name": "BF-BAL",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-BAM",
        "name": "BF-BAM",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-BAN",
        "name": "BF-BAN",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-BAZ",
        "name": "BF-BAZ",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-BGR",
        "name": "BF-BGR",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-BLG",
        "name": "BF-BLG",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-BLK",
        "name": "BF-BLK",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-COM",
        "name": "BF-COM",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-GAN",
        "name": "BF-GAN",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-GNA",
        "name": "BF-GNA",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-GOU",
        "name": "BF-GOU",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-HOU",
        "name": "BF-HOU",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-IOB",
        "name": "BF-IOB",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-KAD",
        "name": "BF-KAD",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-KEN",
        "name": "BF-KEN",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-KMD",
        "name": "BF-KMD",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-KMP",
        "name": "BF-KMP",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-KOS",
        "name": "BF-KOS",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-KOP",
        "name": "BF-KOP",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-KOT",
        "name": "BF-KOT",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-KOW",
        "name": "BF-KOW",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-LER",
        "name": "BF-LER",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-LOR",
        "name": "BF-LOR",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-MOU",
        "name": "BF-MOU",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-NAO",
        "name": "BF-NAO",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-NAM",
        "name": "BF-NAM",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-NAY",
        "name": "BF-NAY",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-NOU",
        "name": "BF-NOU",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-OUB",
        "name": "BF-OUB",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-OUD",
        "name": "BF-OUD",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-PAS",
        "name": "BF-PAS",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-PON",
        "name": "BF-PON",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-SNG",
        "name": "BF-SNG",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-SMT",
        "name": "BF-SMT",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-SEN",
        "name": "BF-SEN",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-SIS",
        "name": "BF-SIS",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-SOM",
        "name": "BF-SOM",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-SOR",
        "name": "BF-SOR",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-TAP",
        "name": "BF-TAP",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-TUI",
        "name": "BF-TUI",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-YAG",
        "name": "BF-YAG",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-YAT",
        "name": "BF-YAT",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-ZIR",
        "name": "BF-ZIR",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-ZON",
        "name": "BF-ZON",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      },
      {
        "code": "BF-ZOU",
        "name": "BF-ZOU",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -2
        }
      }
    ]
  },
  {
    "code": "BI",
    "name": "Burundi",
    "regions": [
      "Africa",
      "Eastern Africa"
    ],
    "coordinates": {
      "latitude": -3.5,
      "longitude": 30
    },
    "currency": "BIF",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "BI-BB",
        "name": "BI-BB",
        "districts": [],
        "coordinates": {
          "latitude": -3.5,
          "longitude": 30
        }
      },
      {
        "code": "BI-BJ",
        "name": "BI-BJ",
        "districts": [],
        "coordinates": {
          "latitude": -3.5,
          "longitude": 30
        }
      },
      {
        "code": "BI-BR",
        "name": "BI-BR",
        "districts": [],
        "coordinates": {
          "latitude": -3.5,
          "longitude": 30
        }
      },
      {
        "code": "BI-CA",
        "name": "BI-CA",
        "districts": [],
        "coordinates": {
          "latitude": -3.5,
          "longitude": 30
        }
      },
      {
        "code": "BI-CI",
        "name": "BI-CI",
        "districts": [],
        "coordinates": {
          "latitude": -3.5,
          "longitude": 30
        }
      },
      {
        "code": "BI-GI",
        "name": "BI-GI",
        "districts": [],
        "coordinates": {
          "latitude": -3.5,
          "longitude": 30
        }
      },
      {
        "code": "BI-KR",
        "name": "BI-KR",
        "districts": [],
        "coordinates": {
          "latitude": -3.5,
          "longitude": 30
        }
      },
      {
        "code": "BI-KY",
        "name": "BI-KY",
        "districts": [],
        "coordinates": {
          "latitude": -3.5,
          "longitude": 30
        }
      },
      {
        "code": "BI-KI",
        "name": "BI-KI",
        "districts": [],
        "coordinates": {
          "latitude": -3.5,
          "longitude": 30
        }
      },
      {
        "code": "BI-MA",
        "name": "BI-MA",
        "districts": [],
        "coordinates": {
          "latitude": -3.5,
          "longitude": 30
        }
      },
      {
        "code": "BI-MU",
        "name": "BI-MU",
        "districts": [],
        "coordinates": {
          "latitude": -3.5,
          "longitude": 30
        }
      },
      {
        "code": "BI-MY",
        "name": "BI-MY",
        "districts": [],
        "coordinates": {
          "latitude": -3.5,
          "longitude": 30
        }
      },
      {
        "code": "BI-NG",
        "name": "BI-NG",
        "districts": [],
        "coordinates": {
          "latitude": -3.5,
          "longitude": 30
        }
      },
      {
        "code": "BI-RT",
        "name": "BI-RT",
        "districts": [],
        "coordinates": {
          "latitude": -3.5,
          "longitude": 30
        }
      },
      {
        "code": "BI-RY",
        "name": "BI-RY",
        "districts": [],
        "coordinates": {
          "latitude": -3.5,
          "longitude": 30
        }
      }
    ]
  },
  {
    "code": "KH",
    "name": "Cambodia",
    "regions": [
      "Asia",
      "South-Eastern Asia"
    ],
    "coordinates": {
      "latitude": 13,
      "longitude": 105
    },
    "currency": "KHR",
    "timezone": [
      "UTC+07:00"
    ],
    "states": [
      {
        "code": "KH-23",
        "name": "KH-23",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-18",
        "name": "KH-18",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-12",
        "name": "KH-12",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-2",
        "name": "KH-2",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-1",
        "name": "KH-1",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-3",
        "name": "KH-3",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-4",
        "name": "KH-4",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-5",
        "name": "KH-5",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-6",
        "name": "KH-6",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-7",
        "name": "KH-7",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-8",
        "name": "KH-8",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-10",
        "name": "KH-10",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-11",
        "name": "KH-11",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-22",
        "name": "KH-22",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-15",
        "name": "KH-15",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-13",
        "name": "KH-13",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-14",
        "name": "KH-14",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-16",
        "name": "KH-16",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-17",
        "name": "KH-17",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-19",
        "name": "KH-19",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-20",
        "name": "KH-20",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      },
      {
        "code": "KH-21",
        "name": "KH-21",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 105
        }
      }
    ]
  },
  {
    "code": "CM",
    "name": "Cameroon",
    "regions": [
      "Africa",
      "Middle Africa"
    ],
    "coordinates": {
      "latitude": 6,
      "longitude": 12
    },
    "currency": "XAF",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "CM-AD",
        "name": "CM-AD",
        "districts": [],
        "coordinates": {
          "latitude": 6,
          "longitude": 12
        }
      },
      {
        "code": "CM-CE",
        "name": "CM-CE",
        "districts": [],
        "coordinates": {
          "latitude": 6,
          "longitude": 12
        }
      },
      {
        "code": "CM-ES",
        "name": "CM-ES",
        "districts": [],
        "coordinates": {
          "latitude": 6,
          "longitude": 12
        }
      },
      {
        "code": "CM-EN",
        "name": "CM-EN",
        "districts": [],
        "coordinates": {
          "latitude": 6,
          "longitude": 12
        }
      },
      {
        "code": "CM-LT",
        "name": "CM-LT",
        "districts": [],
        "coordinates": {
          "latitude": 6,
          "longitude": 12
        }
      },
      {
        "code": "CM-NO",
        "name": "CM-NO",
        "districts": [],
        "coordinates": {
          "latitude": 6,
          "longitude": 12
        }
      },
      {
        "code": "CM-NW",
        "name": "CM-NW",
        "districts": [],
        "coordinates": {
          "latitude": 6,
          "longitude": 12
        }
      },
      {
        "code": "CM-SU",
        "name": "CM-SU",
        "districts": [],
        "coordinates": {
          "latitude": 6,
          "longitude": 12
        }
      },
      {
        "code": "CM-SW",
        "name": "CM-SW",
        "districts": [],
        "coordinates": {
          "latitude": 6,
          "longitude": 12
        }
      },
      {
        "code": "CM-OU",
        "name": "CM-OU",
        "districts": [],
        "coordinates": {
          "latitude": 6,
          "longitude": 12
        }
      }
    ]
  },
  {
    "code": "CA",
    "name": "Canada",
    "regions": [
      "Americas",
      "North America"
    ],
    "coordinates": {
      "latitude": 60,
      "longitude": -95
    },
    "currency": "CAD",
    "timezone": [
      "UTC-08:00",
      "UTC-07:00",
      "UTC-06:00",
      "UTC-05:00",
      "UTC-04:00",
      "UTC-03:30"
    ],
    "states": [
      {
        "code": "CA-AB",
        "name": "CA-AB",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": -95
        }
      },
      {
        "code": "CA-BC",
        "name": "CA-BC",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": -95
        }
      },
      {
        "code": "CA-MB",
        "name": "CA-MB",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": -95
        }
      },
      {
        "code": "CA-NB",
        "name": "CA-NB",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": -95
        }
      },
      {
        "code": "CA-NL",
        "name": "CA-NL",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": -95
        }
      },
      {
        "code": "CA-NS",
        "name": "CA-NS",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": -95
        }
      },
      {
        "code": "CA-ON",
        "name": "CA-ON",
        "districts": [],
        "coordinates": {
          "latitude": 50,
          "longitude": -85
        }
      },
      {
        "code": "CA-PE",
        "name": "CA-PE",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": -95
        }
      },
      {
        "code": "CA-QC",
        "name": "CA-QC",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": -71
        }
      },
      {
        "code": "CA-SK",
        "name": "CA-SK",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": -95
        }
      },
      {
        "code": "CA-NT",
        "name": "CA-NT",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": -95
        }
      },
      {
        "code": "CA-NU",
        "name": "CA-NU",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": -95
        }
      },
      {
        "code": "CA-YT",
        "name": "CA-YT",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": -95
        }
      }
    ]
  },
  {
    "code": "CV",
    "name": "Cape Verde",
    "regions": [
      "Africa",
      "Western Africa"
    ],
    "coordinates": {
      "latitude": 16.5388,
      "longitude": -23.0418
    },
    "currency": "CVE",
    "timezone": [
      "UTC-01:00"
    ],
    "states": [
      {
        "code": "CV-B",
        "name": "CV-B",
        "districts": [],
        "coordinates": {
          "latitude": 16.5388,
          "longitude": -23.0418
        }
      },
      {
        "code": "CV-BV",
        "name": "CV-BV",
        "districts": [],
        "coordinates": {
          "latitude": 16.5388,
          "longitude": -23.0418
        }
      },
      {
        "code": "CV-PA",
        "name": "CV-PA",
        "districts": [],
        "coordinates": {
          "latitude": 16.5388,
          "longitude": -23.0418
        }
      },
      {
        "code": "CV-PN",
        "name": "CV-PN",
        "districts": [],
        "coordinates": {
          "latitude": 16.5388,
          "longitude": -23.0418
        }
      },
      {
        "code": "CV-RG",
        "name": "CV-RG",
        "districts": [],
        "coordinates": {
          "latitude": 16.5388,
          "longitude": -23.0418
        }
      },
      {
        "code": "CV-SL",
        "name": "CV-SL",
        "districts": [],
        "coordinates": {
          "latitude": 16.5388,
          "longitude": -23.0418
        }
      },
      {
        "code": "CV-SN",
        "name": "CV-SN",
        "districts": [],
        "coordinates": {
          "latitude": 16.5388,
          "longitude": -23.0418
        }
      },
      {
        "code": "CV-SV",
        "name": "CV-SV",
        "districts": [],
        "coordinates": {
          "latitude": 16.5388,
          "longitude": -23.0418
        }
      },
      {
        "code": "CV-S",
        "name": "CV-S",
        "districts": [],
        "coordinates": {
          "latitude": 16.5388,
          "longitude": -23.0418
        }
      },
      {
        "code": "CV-BR",
        "name": "CV-BR",
        "districts": [],
        "coordinates": {
          "latitude": 16.5388,
          "longitude": -23.0418
        }
      },
      {
        "code": "CV-FO",
        "name": "CV-FO",
        "districts": [],
        "coordinates": {
          "latitude": 16.5388,
          "longitude": -23.0418
        }
      },
      {
        "code": "CV-MA",
        "name": "CV-MA",
        "districts": [],
        "coordinates": {
          "latitude": 16.5388,
          "longitude": -23.0418
        }
      },
      {
        "code": "CV-PR",
        "name": "CV-PR",
        "districts": [],
        "coordinates": {
          "latitude": 16.5388,
          "longitude": -23.0418
        }
      },
      {
        "code": "CV-CA",
        "name": "CV-CA",
        "districts": [],
        "coordinates": {
          "latitude": 16.5388,
          "longitude": -23.0418
        }
      },
      {
        "code": "CV-CR",
        "name": "CV-CR",
        "districts": [],
        "coordinates": {
          "latitude": 16.5388,
          "longitude": -23.0418
        }
      },
      {
        "code": "CV-TA",
        "name": "CV-TA",
        "districts": [],
        "coordinates": {
          "latitude": 16.5388,
          "longitude": -23.0418
        }
      }
    ]
  },
  {
    "code": "BQ",
    "name": "Caribbean Netherlands",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 12.18,
      "longitude": -68.25
    },
    "currency": "USD",
    "timezone": [
      "UTC-04:00"
    ],
    "states": []
  },
  {
    "code": "KY",
    "name": "Cayman Islands",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 19.3133,
      "longitude": -81.2546
    },
    "currency": "KYD",
    "timezone": [
      "UTC-05:00"
    ],
    "states": [
      {
        "code": "KY-KY",
        "name": "KY-KY",
        "districts": [],
        "coordinates": {
          "latitude": 19.3133,
          "longitude": -81.2546
        }
      }
    ]
  },
  {
    "code": "CF",
    "name": "Central African Republic",
    "regions": [
      "Africa",
      "Middle Africa"
    ],
    "coordinates": {
      "latitude": 7,
      "longitude": 21
    },
    "currency": "XAF",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "CF-BGF",
        "name": "CF-BGF",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 21
        }
      },
      {
        "code": "CF-BB",
        "name": "CF-BB",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 21
        }
      },
      {
        "code": "CF-BK",
        "name": "CF-BK",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 21
        }
      },
      {
        "code": "CF-HK",
        "name": "CF-HK",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 21
        }
      },
      {
        "code": "CF-HM",
        "name": "CF-HM",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 21
        }
      },
      {
        "code": "CF-KG",
        "name": "CF-KG",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 21
        }
      },
      {
        "code": "CF-LB",
        "name": "CF-LB",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 21
        }
      },
      {
        "code": "CF-HS",
        "name": "CF-HS",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 21
        }
      },
      {
        "code": "CF-MB",
        "name": "CF-MB",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 21
        }
      },
      {
        "code": "CF-KB",
        "name": "CF-KB",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 21
        }
      },
      {
        "code": "CF-NM",
        "name": "CF-NM",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 21
        }
      },
      {
        "code": "CF-MP",
        "name": "CF-MP",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 21
        }
      },
      {
        "code": "CF-UK",
        "name": "CF-UK",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 21
        }
      },
      {
        "code": "CF-AC",
        "name": "CF-AC",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 21
        }
      },
      {
        "code": "CF-OP",
        "name": "CF-OP",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 21
        }
      },
      {
        "code": "CF-SE",
        "name": "CF-SE",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 21
        }
      },
      {
        "code": "CF-VK",
        "name": "CF-VK",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 21
        }
      }
    ]
  },
  {
    "code": "TD",
    "name": "Chad",
    "regions": [
      "Africa",
      "Middle Africa"
    ],
    "coordinates": {
      "latitude": 15,
      "longitude": 19
    },
    "currency": "XAF",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "TD-BA",
        "name": "TD-BA",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 19
        }
      },
      {
        "code": "TD-BI",
        "name": "TD-BI",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 19
        }
      },
      {
        "code": "TD-BET",
        "name": "TD-BET",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 19
        }
      },
      {
        "code": "TD-CB",
        "name": "TD-CB",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 19
        }
      },
      {
        "code": "TD-GR",
        "name": "TD-GR",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 19
        }
      },
      {
        "code": "TD-KA",
        "name": "TD-KA",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 19
        }
      },
      {
        "code": "TD-LC",
        "name": "TD-LC",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 19
        }
      },
      {
        "code": "TD-LO",
        "name": "TD-LO",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 19
        }
      },
      {
        "code": "TD-LR",
        "name": "TD-LR",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 19
        }
      },
      {
        "code": "TD-MK",
        "name": "TD-MK",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 19
        }
      },
      {
        "code": "TD-MC",
        "name": "TD-MC",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 19
        }
      },
      {
        "code": "TD-OD",
        "name": "TD-OD",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 19
        }
      },
      {
        "code": "TD-SA",
        "name": "TD-SA",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 19
        }
      },
      {
        "code": "TD-TA",
        "name": "TD-TA",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 19
        }
      }
    ]
  },
  {
    "code": "CL",
    "name": "Chile",
    "regions": [
      "Americas",
      "South America"
    ],
    "coordinates": {
      "latitude": -30,
      "longitude": -71
    },
    "currency": "CLP",
    "timezone": [
      "UTC-06:00",
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "CL-AI",
        "name": "CL-AI",
        "districts": [],
        "coordinates": {
          "latitude": -30,
          "longitude": -71
        }
      },
      {
        "code": "CL-AN",
        "name": "CL-AN",
        "districts": [],
        "coordinates": {
          "latitude": -30,
          "longitude": -71
        }
      },
      {
        "code": "CL-AR",
        "name": "CL-AR",
        "districts": [],
        "coordinates": {
          "latitude": -30,
          "longitude": -71
        }
      },
      {
        "code": "CL-AT",
        "name": "CL-AT",
        "districts": [],
        "coordinates": {
          "latitude": -30,
          "longitude": -71
        }
      },
      {
        "code": "CL-BI",
        "name": "CL-BI",
        "districts": [],
        "coordinates": {
          "latitude": -30,
          "longitude": -71
        }
      },
      {
        "code": "CL-CO",
        "name": "CL-CO",
        "districts": [],
        "coordinates": {
          "latitude": -30,
          "longitude": -71
        }
      },
      {
        "code": "CL-LI",
        "name": "CL-LI",
        "districts": [],
        "coordinates": {
          "latitude": -30,
          "longitude": -71
        }
      },
      {
        "code": "CL-LL",
        "name": "CL-LL",
        "districts": [],
        "coordinates": {
          "latitude": -30,
          "longitude": -71
        }
      },
      {
        "code": "CL-MA",
        "name": "CL-MA",
        "districts": [],
        "coordinates": {
          "latitude": -30,
          "longitude": -71
        }
      },
      {
        "code": "CL-ML",
        "name": "CL-ML",
        "districts": [],
        "coordinates": {
          "latitude": -30,
          "longitude": -71
        }
      },
      {
        "code": "CL-RM",
        "name": "CL-RM",
        "districts": [],
        "coordinates": {
          "latitude": -30,
          "longitude": -71
        }
      },
      {
        "code": "CL-TA",
        "name": "CL-TA",
        "districts": [],
        "coordinates": {
          "latitude": -30,
          "longitude": -71
        }
      },
      {
        "code": "CL-VS",
        "name": "CL-VS",
        "districts": [],
        "coordinates": {
          "latitude": -30,
          "longitude": -71
        }
      }
    ]
  },
  {
    "code": "CN",
    "name": "China",
    "regions": [
      "Asia",
      "Eastern Asia"
    ],
    "coordinates": {
      "latitude": 35,
      "longitude": 105
    },
    "currency": "CNY",
    "timezone": [
      "UTC+08:00"
    ],
    "states": [
      {
        "code": "CN-11",
        "name": "CN-11",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-50",
        "name": "CN-50",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-31",
        "name": "CN-31",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-12",
        "name": "CN-12",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-34",
        "name": "CN-34",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-35",
        "name": "CN-35",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-62",
        "name": "CN-62",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-44",
        "name": "CN-44",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-52",
        "name": "CN-52",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-46",
        "name": "CN-46",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-13",
        "name": "CN-13",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-23",
        "name": "CN-23",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-41",
        "name": "CN-41",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-42",
        "name": "CN-42",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-43",
        "name": "CN-43",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-32",
        "name": "CN-32",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-36",
        "name": "CN-36",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-22",
        "name": "CN-22",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-21",
        "name": "CN-21",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-63",
        "name": "CN-63",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-61",
        "name": "CN-61",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-37",
        "name": "CN-37",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-14",
        "name": "CN-14",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-51",
        "name": "CN-51",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-71",
        "name": "CN-71",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-53",
        "name": "CN-53",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-33",
        "name": "CN-33",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-45",
        "name": "CN-45",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-15",
        "name": "CN-15",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-64",
        "name": "CN-64",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-65",
        "name": "CN-65",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-54",
        "name": "CN-54",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      },
      {
        "code": "CN-91",
        "name": "CN-91",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 105
        }
      }
    ]
  },
  {
    "code": "CX",
    "name": "Christmas Island",
    "regions": [
      "Oceania",
      "Australia and New Zealand"
    ],
    "coordinates": {
      "latitude": -10.5,
      "longitude": 105.66666666
    },
    "currency": "AUD",
    "timezone": [
      "UTC+07:00"
    ],
    "states": [
      {
        "code": "CX-CX",
        "name": "CX-CX",
        "districts": [],
        "coordinates": {
          "latitude": -10.5,
          "longitude": 105.66666666
        }
      }
    ]
  },
  {
    "code": "CC",
    "name": "Cocos (Keeling) Islands",
    "regions": [
      "Oceania",
      "Australia and New Zealand"
    ],
    "coordinates": {
      "latitude": -12.1642,
      "longitude": 96.871
    },
    "currency": "AUD",
    "timezone": [
      "UTC+06:30"
    ],
    "states": [
      {
        "code": "CC-CC",
        "name": "CC-CC",
        "districts": [],
        "coordinates": {
          "latitude": -12.1642,
          "longitude": 96.871
        }
      }
    ]
  },
  {
    "code": "CO",
    "name": "Colombia",
    "regions": [
      "Americas",
      "South America"
    ],
    "coordinates": {
      "latitude": 4,
      "longitude": -72
    },
    "currency": "COP",
    "timezone": [
      "UTC-05:00"
    ],
    "states": [
      {
        "code": "CO-DC",
        "name": "CO-DC",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-AMA",
        "name": "CO-AMA",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-ANT",
        "name": "CO-ANT",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-ARA",
        "name": "CO-ARA",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-ATL",
        "name": "CO-ATL",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-BOL",
        "name": "CO-BOL",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-BOY",
        "name": "CO-BOY",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-CAL",
        "name": "CO-CAL",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-CAQ",
        "name": "CO-CAQ",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-CAS",
        "name": "CO-CAS",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-CAU",
        "name": "CO-CAU",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-CES",
        "name": "CO-CES",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-COR",
        "name": "CO-COR",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-CUN",
        "name": "CO-CUN",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-CHO",
        "name": "CO-CHO",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-GUA",
        "name": "CO-GUA",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-GUV",
        "name": "CO-GUV",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-HUI",
        "name": "CO-HUI",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-LAG",
        "name": "CO-LAG",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-MAG",
        "name": "CO-MAG",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-MET",
        "name": "CO-MET",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-NAR",
        "name": "CO-NAR",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-NSA",
        "name": "CO-NSA",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-PUT",
        "name": "CO-PUT",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-QUI",
        "name": "CO-QUI",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-RIS",
        "name": "CO-RIS",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-SAP",
        "name": "CO-SAP",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-SAN",
        "name": "CO-SAN",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-SUC",
        "name": "CO-SUC",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-TOL",
        "name": "CO-TOL",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-VAC",
        "name": "CO-VAC",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-VAU",
        "name": "CO-VAU",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      },
      {
        "code": "CO-VID",
        "name": "CO-VID",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -72
        }
      }
    ]
  },
  {
    "code": "KM",
    "name": "Comoros",
    "regions": [
      "Africa",
      "Eastern Africa"
    ],
    "coordinates": {
      "latitude": -12.16666666,
      "longitude": 44.25
    },
    "currency": "KMF",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "KM-A",
        "name": "KM-A",
        "districts": [],
        "coordinates": {
          "latitude": -12.16666666,
          "longitude": 44.25
        }
      },
      {
        "code": "KM-G",
        "name": "KM-G",
        "districts": [],
        "coordinates": {
          "latitude": -12.16666666,
          "longitude": 44.25
        }
      },
      {
        "code": "KM-M",
        "name": "KM-M",
        "districts": [],
        "coordinates": {
          "latitude": -12.16666666,
          "longitude": 44.25
        }
      }
    ]
  },
  {
    "code": "CK",
    "name": "Cook Islands",
    "regions": [
      "Oceania",
      "Polynesia"
    ],
    "coordinates": {
      "latitude": -21.23333333,
      "longitude": -159.76666666
    },
    "currency": "CKD",
    "timezone": [
      "UTC-10:00"
    ],
    "states": [
      {
        "code": "CK-CK",
        "name": "CK-CK",
        "districts": [],
        "coordinates": {
          "latitude": -21.23333333,
          "longitude": -159.76666666
        }
      }
    ]
  },
  {
    "code": "CR",
    "name": "Costa Rica",
    "regions": [
      "Americas",
      "Central America"
    ],
    "coordinates": {
      "latitude": 10,
      "longitude": -84
    },
    "currency": "CRC",
    "timezone": [
      "UTC-06:00"
    ],
    "states": [
      {
        "code": "CR-A",
        "name": "CR-A",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": -84
        }
      },
      {
        "code": "CR-C",
        "name": "CR-C",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": -84
        }
      },
      {
        "code": "CR-G",
        "name": "CR-G",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": -84
        }
      },
      {
        "code": "CR-H",
        "name": "CR-H",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": -84
        }
      },
      {
        "code": "CR-L",
        "name": "CR-L",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": -84
        }
      },
      {
        "code": "CR-P",
        "name": "CR-P",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": -84
        }
      },
      {
        "code": "CR-SJ",
        "name": "CR-SJ",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": -84
        }
      }
    ]
  },
  {
    "code": "HR",
    "name": "Croatia",
    "regions": [
      "Europe",
      "Southeast Europe"
    ],
    "coordinates": {
      "latitude": 45.16666666,
      "longitude": 15.5
    },
    "currency": "EUR",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "HR-07",
        "name": "HR-07",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      },
      {
        "code": "HR-12",
        "name": "HR-12",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      },
      {
        "code": "HR-19",
        "name": "HR-19",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      },
      {
        "code": "HR-18",
        "name": "HR-18",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      },
      {
        "code": "HR-04",
        "name": "HR-04",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      },
      {
        "code": "HR-06",
        "name": "HR-06",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      },
      {
        "code": "HR-02",
        "name": "HR-02",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      },
      {
        "code": "HR-09",
        "name": "HR-09",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      },
      {
        "code": "HR-20",
        "name": "HR-20",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      },
      {
        "code": "HR-14",
        "name": "HR-14",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      },
      {
        "code": "HR-11",
        "name": "HR-11",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      },
      {
        "code": "HR-08",
        "name": "HR-08",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      },
      {
        "code": "HR-03",
        "name": "HR-03",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      },
      {
        "code": "HR-17",
        "name": "HR-17",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      },
      {
        "code": "HR-15",
        "name": "HR-15",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      },
      {
        "code": "HR-05",
        "name": "HR-05",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      },
      {
        "code": "HR-10",
        "name": "HR-10",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      },
      {
        "code": "HR-16",
        "name": "HR-16",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      },
      {
        "code": "HR-13",
        "name": "HR-13",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      },
      {
        "code": "HR-01",
        "name": "HR-01",
        "districts": [],
        "coordinates": {
          "latitude": 45.16666666,
          "longitude": 15.5
        }
      }
    ]
  },
  {
    "code": "CU",
    "name": "Cuba",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 21.5,
      "longitude": -80
    },
    "currency": "CUC",
    "timezone": [
      "UTC-05:00"
    ],
    "states": [
      {
        "code": "CU-09",
        "name": "CU-09",
        "districts": [],
        "coordinates": {
          "latitude": 21.5,
          "longitude": -80
        }
      },
      {
        "code": "CU-03",
        "name": "CU-03",
        "districts": [],
        "coordinates": {
          "latitude": 21.5,
          "longitude": -80
        }
      },
      {
        "code": "CU-12",
        "name": "CU-12",
        "districts": [],
        "coordinates": {
          "latitude": 21.5,
          "longitude": -80
        }
      },
      {
        "code": "CU-14",
        "name": "CU-14",
        "districts": [],
        "coordinates": {
          "latitude": 21.5,
          "longitude": -80
        }
      },
      {
        "code": "CU-11",
        "name": "CU-11",
        "districts": [],
        "coordinates": {
          "latitude": 21.5,
          "longitude": -80
        }
      },
      {
        "code": "CU-02",
        "name": "CU-02",
        "districts": [],
        "coordinates": {
          "latitude": 21.5,
          "longitude": -80
        }
      },
      {
        "code": "CU-10",
        "name": "CU-10",
        "districts": [],
        "coordinates": {
          "latitude": 21.5,
          "longitude": -80
        }
      },
      {
        "code": "CU-04",
        "name": "CU-04",
        "districts": [],
        "coordinates": {
          "latitude": 21.5,
          "longitude": -80
        }
      },
      {
        "code": "CU-01",
        "name": "CU-01",
        "districts": [],
        "coordinates": {
          "latitude": 21.5,
          "longitude": -80
        }
      },
      {
        "code": "CU-07",
        "name": "CU-07",
        "districts": [],
        "coordinates": {
          "latitude": 21.5,
          "longitude": -80
        }
      },
      {
        "code": "CU-13",
        "name": "CU-13",
        "districts": [],
        "coordinates": {
          "latitude": 21.5,
          "longitude": -80
        }
      },
      {
        "code": "CU-05",
        "name": "CU-05",
        "districts": [],
        "coordinates": {
          "latitude": 21.5,
          "longitude": -80
        }
      },
      {
        "code": "CU-99",
        "name": "CU-99",
        "districts": [],
        "coordinates": {
          "latitude": 21.5,
          "longitude": -80
        }
      }
    ]
  },
  {
    "code": "CW",
    "name": "Curaçao",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 12.116667,
      "longitude": -68.933333
    },
    "currency": "ANG",
    "timezone": [
      "UTC-04:00"
    ],
    "states": []
  },
  {
    "code": "CY",
    "name": "Cyprus",
    "regions": [
      "Europe",
      "Southern Europe"
    ],
    "coordinates": {
      "latitude": 35,
      "longitude": 33
    },
    "currency": "EUR",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "CY-04",
        "name": "CY-04",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 33
        }
      },
      {
        "code": "CY-06",
        "name": "CY-06",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 33
        }
      },
      {
        "code": "CY-03",
        "name": "CY-03",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 33
        }
      },
      {
        "code": "CY-01",
        "name": "CY-01",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 33
        }
      },
      {
        "code": "CY-02",
        "name": "CY-02",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 33
        }
      },
      {
        "code": "CY-05",
        "name": "CY-05",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 33
        }
      }
    ]
  },
  {
    "code": "CZ",
    "name": "Czechia",
    "regions": [
      "Europe",
      "Central Europe"
    ],
    "coordinates": {
      "latitude": 49.75,
      "longitude": 15.5
    },
    "currency": "CZK",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "CZ-PRG",
        "name": "CZ-PRG",
        "districts": [],
        "coordinates": {
          "latitude": 49.75,
          "longitude": 15.5
        }
      },
      {
        "code": "CZ-CJC",
        "name": "CZ-CJC",
        "districts": [],
        "coordinates": {
          "latitude": 49.75,
          "longitude": 15.5
        }
      },
      {
        "code": "CZ-CJM",
        "name": "CZ-CJM",
        "districts": [],
        "coordinates": {
          "latitude": 49.75,
          "longitude": 15.5
        }
      },
      {
        "code": "CZ-CSC",
        "name": "CZ-CSC",
        "districts": [],
        "coordinates": {
          "latitude": 49.75,
          "longitude": 15.5
        }
      },
      {
        "code": "CZ-CSM",
        "name": "CZ-CSM",
        "districts": [],
        "coordinates": {
          "latitude": 49.75,
          "longitude": 15.5
        }
      },
      {
        "code": "CZ-CST",
        "name": "CZ-CST",
        "districts": [],
        "coordinates": {
          "latitude": 49.75,
          "longitude": 15.5
        }
      },
      {
        "code": "CZ-CVC",
        "name": "CZ-CVC",
        "districts": [],
        "coordinates": {
          "latitude": 49.75,
          "longitude": 15.5
        }
      },
      {
        "code": "CZ-CZC",
        "name": "CZ-CZC",
        "districts": [],
        "coordinates": {
          "latitude": 49.75,
          "longitude": 15.5
        }
      }
    ]
  },
  {
    "code": "DK",
    "name": "Denmark",
    "regions": [
      "Europe",
      "Northern Europe"
    ],
    "coordinates": {
      "latitude": 56,
      "longitude": 10
    },
    "currency": "DKK",
    "timezone": [
      "UTC-04:00",
      "UTC-03:00",
      "UTC-01:00",
      "UTC",
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "DK-147",
        "name": "DK-147",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 10
        }
      },
      {
        "code": "DK-101",
        "name": "DK-101",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 10
        }
      },
      {
        "code": "DK-040",
        "name": "DK-040",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 10
        }
      },
      {
        "code": "DK-020",
        "name": "DK-020",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 10
        }
      },
      {
        "code": "DK-042",
        "name": "DK-042",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 10
        }
      },
      {
        "code": "DK-015",
        "name": "DK-015",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 10
        }
      },
      {
        "code": "DK-080",
        "name": "DK-080",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 10
        }
      },
      {
        "code": "DK-055",
        "name": "DK-055",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 10
        }
      },
      {
        "code": "DK-065",
        "name": "DK-065",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 10
        }
      },
      {
        "code": "DK-025",
        "name": "DK-025",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 10
        }
      },
      {
        "code": "DK-035",
        "name": "DK-035",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 10
        }
      },
      {
        "code": "DK-050",
        "name": "DK-050",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 10
        }
      },
      {
        "code": "DK-060",
        "name": "DK-060",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 10
        }
      },
      {
        "code": "DK-030",
        "name": "DK-030",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 10
        }
      },
      {
        "code": "DK-076",
        "name": "DK-076",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 10
        }
      },
      {
        "code": "DK-070",
        "name": "DK-070",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 10
        }
      }
    ]
  },
  {
    "code": "DJ",
    "name": "Djibouti",
    "regions": [
      "Africa",
      "Eastern Africa"
    ],
    "coordinates": {
      "latitude": 11.5,
      "longitude": 43
    },
    "currency": "DJF",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "DJ-AS",
        "name": "DJ-AS",
        "districts": [],
        "coordinates": {
          "latitude": 11.5,
          "longitude": 43
        }
      },
      {
        "code": "DJ-DI",
        "name": "DJ-DI",
        "districts": [],
        "coordinates": {
          "latitude": 11.5,
          "longitude": 43
        }
      },
      {
        "code": "DJ-DJ",
        "name": "DJ-DJ",
        "districts": [],
        "coordinates": {
          "latitude": 11.5,
          "longitude": 43
        }
      },
      {
        "code": "DJ-OB",
        "name": "DJ-OB",
        "districts": [],
        "coordinates": {
          "latitude": 11.5,
          "longitude": 43
        }
      },
      {
        "code": "DJ-TA",
        "name": "DJ-TA",
        "districts": [],
        "coordinates": {
          "latitude": 11.5,
          "longitude": 43
        }
      }
    ]
  },
  {
    "code": "DM",
    "name": "Dominica",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 15.41666666,
      "longitude": -61.33333333
    },
    "currency": "XCD",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "DM-DM",
        "name": "DM-DM",
        "districts": [],
        "coordinates": {
          "latitude": 15.41666666,
          "longitude": -61.33333333
        }
      }
    ]
  },
  {
    "code": "DO",
    "name": "Dominican Republic",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 19,
      "longitude": -70.66666666
    },
    "currency": "DOP",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "DO-DN",
        "name": "DO-DN",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-AZ",
        "name": "DO-AZ",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-BR",
        "name": "DO-BR",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-BH",
        "name": "DO-BH",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-DA",
        "name": "DO-DA",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-DU",
        "name": "DO-DU",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-SE",
        "name": "DO-SE",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-EP",
        "name": "DO-EP",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-HM",
        "name": "DO-HM",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-IN",
        "name": "DO-IN",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-AL",
        "name": "DO-AL",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-RO",
        "name": "DO-RO",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-VE",
        "name": "DO-VE",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-MT",
        "name": "DO-MT",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-MN",
        "name": "DO-MN",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-MC",
        "name": "DO-MC",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-MP",
        "name": "DO-MP",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-PN",
        "name": "DO-PN",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-PR",
        "name": "DO-PR",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-PP",
        "name": "DO-PP",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-SC",
        "name": "DO-SC",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-SM",
        "name": "DO-SM",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-SZ",
        "name": "DO-SZ",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-CR",
        "name": "DO-CR",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-JU",
        "name": "DO-JU",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-PM",
        "name": "DO-PM",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-ST",
        "name": "DO-ST",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-SR",
        "name": "DO-SR",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      },
      {
        "code": "DO-VA",
        "name": "DO-VA",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -70.66666666
        }
      }
    ]
  },
  {
    "code": "CD",
    "name": "DR Congo",
    "regions": [
      "Africa",
      "Middle Africa"
    ],
    "coordinates": {
      "latitude": 0,
      "longitude": 25
    },
    "currency": "CDF",
    "timezone": [
      "UTC+01:00",
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "CD-KN",
        "name": "CD-KN",
        "districts": [],
        "coordinates": {
          "latitude": 0,
          "longitude": 25
        }
      },
      {
        "code": "CD-BN",
        "name": "CD-BN",
        "districts": [],
        "coordinates": {
          "latitude": 0,
          "longitude": 25
        }
      },
      {
        "code": "CD-BC",
        "name": "CD-BC",
        "districts": [],
        "coordinates": {
          "latitude": 0,
          "longitude": 25
        }
      },
      {
        "code": "CD-EQ",
        "name": "CD-EQ",
        "districts": [],
        "coordinates": {
          "latitude": 0,
          "longitude": 25
        }
      },
      {
        "code": "CD-HC",
        "name": "CD-HC",
        "districts": [],
        "coordinates": {
          "latitude": 0,
          "longitude": 25
        }
      },
      {
        "code": "CD-KW",
        "name": "CD-KW",
        "districts": [],
        "coordinates": {
          "latitude": 0,
          "longitude": 25
        }
      },
      {
        "code": "CD-KE",
        "name": "CD-KE",
        "districts": [],
        "coordinates": {
          "latitude": 0,
          "longitude": 25
        }
      },
      {
        "code": "CD-KA",
        "name": "CD-KA",
        "districts": [],
        "coordinates": {
          "latitude": 0,
          "longitude": 25
        }
      },
      {
        "code": "CD-MA",
        "name": "CD-MA",
        "districts": [],
        "coordinates": {
          "latitude": 0,
          "longitude": 25
        }
      },
      {
        "code": "CD-NK",
        "name": "CD-NK",
        "districts": [],
        "coordinates": {
          "latitude": 0,
          "longitude": 25
        }
      },
      {
        "code": "CD-SK",
        "name": "CD-SK",
        "districts": [],
        "coordinates": {
          "latitude": 0,
          "longitude": 25
        }
      }
    ]
  },
  {
    "code": "EC",
    "name": "Ecuador",
    "regions": [
      "Americas",
      "South America"
    ],
    "coordinates": {
      "latitude": -2,
      "longitude": -77.5
    },
    "currency": "USD",
    "timezone": [
      "UTC-06:00",
      "UTC-05:00"
    ],
    "states": [
      {
        "code": "EC-A",
        "name": "EC-A",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-B",
        "name": "EC-B",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-F",
        "name": "EC-F",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-C",
        "name": "EC-C",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-X",
        "name": "EC-X",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-H",
        "name": "EC-H",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-O",
        "name": "EC-O",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-E",
        "name": "EC-E",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-W",
        "name": "EC-W",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-G",
        "name": "EC-G",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-I",
        "name": "EC-I",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-L",
        "name": "EC-L",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-R",
        "name": "EC-R",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-M",
        "name": "EC-M",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-S",
        "name": "EC-S",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-N",
        "name": "EC-N",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-Y",
        "name": "EC-Y",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-P",
        "name": "EC-P",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-U",
        "name": "EC-U",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-T",
        "name": "EC-T",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      },
      {
        "code": "EC-Z",
        "name": "EC-Z",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": -77.5
        }
      }
    ]
  },
  {
    "code": "EG",
    "name": "Egypt",
    "regions": [
      "Africa",
      "Northern Africa"
    ],
    "coordinates": {
      "latitude": 27,
      "longitude": 30
    },
    "currency": "EGP",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "EG-DK",
        "name": "EG-DK",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-BA",
        "name": "EG-BA",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-BH",
        "name": "EG-BH",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-FYM",
        "name": "EG-FYM",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-GH",
        "name": "EG-GH",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-ALX",
        "name": "EG-ALX",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-IS",
        "name": "EG-IS",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-GZ",
        "name": "EG-GZ",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-MNF",
        "name": "EG-MNF",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-MN",
        "name": "EG-MN",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-C",
        "name": "EG-C",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-KB",
        "name": "EG-KB",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-WAD",
        "name": "EG-WAD",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-SHR",
        "name": "EG-SHR",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-SUZ",
        "name": "EG-SUZ",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-ASN",
        "name": "EG-ASN",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-AST",
        "name": "EG-AST",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-BNS",
        "name": "EG-BNS",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-PTS",
        "name": "EG-PTS",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-DT",
        "name": "EG-DT",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-JS",
        "name": "EG-JS",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-KFS",
        "name": "EG-KFS",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-MT",
        "name": "EG-MT",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-KN",
        "name": "EG-KN",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-SIN",
        "name": "EG-SIN",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      },
      {
        "code": "EG-SHG",
        "name": "EG-SHG",
        "districts": [],
        "coordinates": {
          "latitude": 27,
          "longitude": 30
        }
      }
    ]
  },
  {
    "code": "SV",
    "name": "El Salvador",
    "regions": [
      "Americas",
      "Central America"
    ],
    "coordinates": {
      "latitude": 13.83333333,
      "longitude": -88.91666666
    },
    "currency": "USD",
    "timezone": [
      "UTC-06:00"
    ],
    "states": [
      {
        "code": "SV-AH",
        "name": "SV-AH",
        "districts": [],
        "coordinates": {
          "latitude": 13.83333333,
          "longitude": -88.91666666
        }
      },
      {
        "code": "SV-CA",
        "name": "SV-CA",
        "districts": [],
        "coordinates": {
          "latitude": 13.83333333,
          "longitude": -88.91666666
        }
      },
      {
        "code": "SV-CU",
        "name": "SV-CU",
        "districts": [],
        "coordinates": {
          "latitude": 13.83333333,
          "longitude": -88.91666666
        }
      },
      {
        "code": "SV-CH",
        "name": "SV-CH",
        "districts": [],
        "coordinates": {
          "latitude": 13.83333333,
          "longitude": -88.91666666
        }
      },
      {
        "code": "SV-LI",
        "name": "SV-LI",
        "districts": [],
        "coordinates": {
          "latitude": 13.83333333,
          "longitude": -88.91666666
        }
      },
      {
        "code": "SV-PA",
        "name": "SV-PA",
        "districts": [],
        "coordinates": {
          "latitude": 13.83333333,
          "longitude": -88.91666666
        }
      },
      {
        "code": "SV-UN",
        "name": "SV-UN",
        "districts": [],
        "coordinates": {
          "latitude": 13.83333333,
          "longitude": -88.91666666
        }
      },
      {
        "code": "SV-MO",
        "name": "SV-MO",
        "districts": [],
        "coordinates": {
          "latitude": 13.83333333,
          "longitude": -88.91666666
        }
      },
      {
        "code": "SV-SM",
        "name": "SV-SM",
        "districts": [],
        "coordinates": {
          "latitude": 13.83333333,
          "longitude": -88.91666666
        }
      },
      {
        "code": "SV-SS",
        "name": "SV-SS",
        "districts": [],
        "coordinates": {
          "latitude": 13.83333333,
          "longitude": -88.91666666
        }
      },
      {
        "code": "SV-SA",
        "name": "SV-SA",
        "districts": [],
        "coordinates": {
          "latitude": 13.83333333,
          "longitude": -88.91666666
        }
      },
      {
        "code": "SV-SV",
        "name": "SV-SV",
        "districts": [],
        "coordinates": {
          "latitude": 13.83333333,
          "longitude": -88.91666666
        }
      },
      {
        "code": "SV-SO",
        "name": "SV-SO",
        "districts": [],
        "coordinates": {
          "latitude": 13.83333333,
          "longitude": -88.91666666
        }
      },
      {
        "code": "SV-SU",
        "name": "SV-SU",
        "districts": [],
        "coordinates": {
          "latitude": 13.83333333,
          "longitude": -88.91666666
        }
      }
    ]
  },
  {
    "code": "GQ",
    "name": "Equatorial Guinea",
    "regions": [
      "Africa",
      "Middle Africa"
    ],
    "coordinates": {
      "latitude": 2,
      "longitude": 10
    },
    "currency": "XAF",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "GQ-C",
        "name": "GQ-C",
        "districts": [],
        "coordinates": {
          "latitude": 2,
          "longitude": 10
        }
      },
      {
        "code": "GQ-CS",
        "name": "GQ-CS",
        "districts": [],
        "coordinates": {
          "latitude": 2,
          "longitude": 10
        }
      },
      {
        "code": "GQ-KN",
        "name": "GQ-KN",
        "districts": [],
        "coordinates": {
          "latitude": 2,
          "longitude": 10
        }
      },
      {
        "code": "GQ-LI",
        "name": "GQ-LI",
        "districts": [],
        "coordinates": {
          "latitude": 2,
          "longitude": 10
        }
      },
      {
        "code": "GQ-WN",
        "name": "GQ-WN",
        "districts": [],
        "coordinates": {
          "latitude": 2,
          "longitude": 10
        }
      },
      {
        "code": "GQ-I",
        "name": "GQ-I",
        "districts": [],
        "coordinates": {
          "latitude": 2,
          "longitude": 10
        }
      },
      {
        "code": "GQ-AN",
        "name": "GQ-AN",
        "districts": [],
        "coordinates": {
          "latitude": 2,
          "longitude": 10
        }
      },
      {
        "code": "GQ-BN",
        "name": "GQ-BN",
        "districts": [],
        "coordinates": {
          "latitude": 2,
          "longitude": 10
        }
      },
      {
        "code": "GQ-BS",
        "name": "GQ-BS",
        "districts": [],
        "coordinates": {
          "latitude": 2,
          "longitude": 10
        }
      }
    ]
  },
  {
    "code": "ER",
    "name": "Eritrea",
    "regions": [
      "Africa",
      "Eastern Africa"
    ],
    "coordinates": {
      "latitude": 15,
      "longitude": 39
    },
    "currency": "ERN",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "ER-AG",
        "name": "ER-AG",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 39
        }
      },
      {
        "code": "ER-AS",
        "name": "ER-AS",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 39
        }
      },
      {
        "code": "ER-BA",
        "name": "ER-BA",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 39
        }
      },
      {
        "code": "ER-DE",
        "name": "ER-DE",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 39
        }
      },
      {
        "code": "ER-GS",
        "name": "ER-GS",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 39
        }
      },
      {
        "code": "ER-HA",
        "name": "ER-HA",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 39
        }
      },
      {
        "code": "ER-SA",
        "name": "ER-SA",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 39
        }
      },
      {
        "code": "ER-SM",
        "name": "ER-SM",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 39
        }
      },
      {
        "code": "ER-SN",
        "name": "ER-SN",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 39
        }
      },
      {
        "code": "ER-SR",
        "name": "ER-SR",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 39
        }
      }
    ]
  },
  {
    "code": "EE",
    "name": "Estonia",
    "regions": [
      "Europe",
      "Northern Europe"
    ],
    "coordinates": {
      "latitude": 59,
      "longitude": 26
    },
    "currency": "EUR",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "EE-37",
        "name": "EE-37",
        "districts": [],
        "coordinates": {
          "latitude": 59,
          "longitude": 26
        }
      },
      {
        "code": "EE-39",
        "name": "EE-39",
        "districts": [],
        "coordinates": {
          "latitude": 59,
          "longitude": 26
        }
      },
      {
        "code": "EE-44",
        "name": "EE-44",
        "districts": [],
        "coordinates": {
          "latitude": 59,
          "longitude": 26
        }
      },
      {
        "code": "EE-49",
        "name": "EE-49",
        "districts": [],
        "coordinates": {
          "latitude": 59,
          "longitude": 26
        }
      },
      {
        "code": "EE-51",
        "name": "EE-51",
        "districts": [],
        "coordinates": {
          "latitude": 59,
          "longitude": 26
        }
      },
      {
        "code": "EE-57",
        "name": "EE-57",
        "districts": [],
        "coordinates": {
          "latitude": 59,
          "longitude": 26
        }
      },
      {
        "code": "EE-59",
        "name": "EE-59",
        "districts": [],
        "coordinates": {
          "latitude": 59,
          "longitude": 26
        }
      },
      {
        "code": "EE-65",
        "name": "EE-65",
        "districts": [],
        "coordinates": {
          "latitude": 59,
          "longitude": 26
        }
      },
      {
        "code": "EE-67",
        "name": "EE-67",
        "districts": [],
        "coordinates": {
          "latitude": 59,
          "longitude": 26
        }
      },
      {
        "code": "EE-70",
        "name": "EE-70",
        "districts": [],
        "coordinates": {
          "latitude": 59,
          "longitude": 26
        }
      },
      {
        "code": "EE-74",
        "name": "EE-74",
        "districts": [],
        "coordinates": {
          "latitude": 59,
          "longitude": 26
        }
      },
      {
        "code": "EE-78",
        "name": "EE-78",
        "districts": [],
        "coordinates": {
          "latitude": 59,
          "longitude": 26
        }
      },
      {
        "code": "EE-82",
        "name": "EE-82",
        "districts": [],
        "coordinates": {
          "latitude": 59,
          "longitude": 26
        }
      },
      {
        "code": "EE-84",
        "name": "EE-84",
        "districts": [],
        "coordinates": {
          "latitude": 59,
          "longitude": 26
        }
      },
      {
        "code": "EE-86",
        "name": "EE-86",
        "districts": [],
        "coordinates": {
          "latitude": 59,
          "longitude": 26
        }
      }
    ]
  },
  {
    "code": "SZ",
    "name": "Eswatini",
    "regions": [
      "Africa",
      "Southern Africa"
    ],
    "coordinates": {
      "latitude": -26.5,
      "longitude": 31.5
    },
    "currency": "SZL",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "SZ-HH",
        "name": "SZ-HH",
        "districts": [],
        "coordinates": {
          "latitude": -26.5,
          "longitude": 31.5
        }
      },
      {
        "code": "SZ-LU",
        "name": "SZ-LU",
        "districts": [],
        "coordinates": {
          "latitude": -26.5,
          "longitude": 31.5
        }
      },
      {
        "code": "SZ-MA",
        "name": "SZ-MA",
        "districts": [],
        "coordinates": {
          "latitude": -26.5,
          "longitude": 31.5
        }
      },
      {
        "code": "SZ-SH",
        "name": "SZ-SH",
        "districts": [],
        "coordinates": {
          "latitude": -26.5,
          "longitude": 31.5
        }
      }
    ]
  },
  {
    "code": "ET",
    "name": "Ethiopia",
    "regions": [
      "Africa",
      "Eastern Africa"
    ],
    "coordinates": {
      "latitude": 8,
      "longitude": 38
    },
    "currency": "ETB",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "ET-AA",
        "name": "ET-AA",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": 38
        }
      },
      {
        "code": "ET-AF",
        "name": "ET-AF",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": 38
        }
      },
      {
        "code": "ET-AM",
        "name": "ET-AM",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": 38
        }
      },
      {
        "code": "ET-BE",
        "name": "ET-BE",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": 38
        }
      },
      {
        "code": "ET-GA",
        "name": "ET-GA",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": 38
        }
      },
      {
        "code": "ET-HA",
        "name": "ET-HA",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": 38
        }
      },
      {
        "code": "ET-OR",
        "name": "ET-OR",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": 38
        }
      },
      {
        "code": "ET-SO",
        "name": "ET-SO",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": 38
        }
      },
      {
        "code": "ET-SN",
        "name": "ET-SN",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": 38
        }
      },
      {
        "code": "ET-TI",
        "name": "ET-TI",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": 38
        }
      }
    ]
  },
  {
    "code": "FK",
    "name": "Falkland Islands",
    "regions": [
      "Americas",
      "South America"
    ],
    "coordinates": {
      "latitude": -51.75,
      "longitude": -59
    },
    "currency": "FKP",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "FK-FK",
        "name": "FK-FK",
        "districts": [],
        "coordinates": {
          "latitude": -51.75,
          "longitude": -59
        }
      }
    ]
  },
  {
    "code": "FO",
    "name": "Faroe Islands",
    "regions": [
      "Europe",
      "Northern Europe"
    ],
    "coordinates": {
      "latitude": 62,
      "longitude": -7
    },
    "currency": "DKK",
    "timezone": [
      "UTC+00:00"
    ],
    "states": [
      {
        "code": "FO-FO",
        "name": "FO-FO",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": -7
        }
      }
    ]
  },
  {
    "code": "FJ",
    "name": "Fiji",
    "regions": [
      "Oceania",
      "Melanesia"
    ],
    "coordinates": {
      "latitude": -17.7134,
      "longitude": 178.065
    },
    "currency": "FJD",
    "timezone": [
      "UTC+12:00"
    ],
    "states": [
      {
        "code": "FJ-C",
        "name": "FJ-C",
        "districts": [],
        "coordinates": {
          "latitude": -17.7134,
          "longitude": 178.065
        }
      },
      {
        "code": "FJ-E",
        "name": "FJ-E",
        "districts": [],
        "coordinates": {
          "latitude": -17.7134,
          "longitude": 178.065
        }
      },
      {
        "code": "FJ-N",
        "name": "FJ-N",
        "districts": [],
        "coordinates": {
          "latitude": -17.7134,
          "longitude": 178.065
        }
      },
      {
        "code": "FJ-W",
        "name": "FJ-W",
        "districts": [],
        "coordinates": {
          "latitude": -17.7134,
          "longitude": 178.065
        }
      },
      {
        "code": "FJ-R",
        "name": "FJ-R",
        "districts": [],
        "coordinates": {
          "latitude": -17.7134,
          "longitude": 178.065
        }
      }
    ]
  },
  {
    "code": "FI",
    "name": "Finland",
    "regions": [
      "Europe",
      "Northern Europe"
    ],
    "coordinates": {
      "latitude": 64,
      "longitude": 26
    },
    "currency": "EUR",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "FI-AL",
        "name": "FI-AL",
        "districts": [],
        "coordinates": {
          "latitude": 64,
          "longitude": 26
        }
      },
      {
        "code": "FI-ES",
        "name": "FI-ES",
        "districts": [],
        "coordinates": {
          "latitude": 64,
          "longitude": 26
        }
      },
      {
        "code": "FI-IS",
        "name": "FI-IS",
        "districts": [],
        "coordinates": {
          "latitude": 64,
          "longitude": 26
        }
      },
      {
        "code": "FI-LL",
        "name": "FI-LL",
        "districts": [],
        "coordinates": {
          "latitude": 64,
          "longitude": 26
        }
      },
      {
        "code": "FI-LS",
        "name": "FI-LS",
        "districts": [],
        "coordinates": {
          "latitude": 64,
          "longitude": 26
        }
      },
      {
        "code": "FI-OL",
        "name": "FI-OL",
        "districts": [],
        "coordinates": {
          "latitude": 64,
          "longitude": 26
        }
      }
    ]
  },
  {
    "code": "FR",
    "name": "France",
    "regions": [
      "Europe",
      "Western Europe"
    ],
    "coordinates": {
      "latitude": 46,
      "longitude": 2
    },
    "currency": "EUR",
    "timezone": [
      "UTC-10:00",
      "UTC-09:30",
      "UTC-09:00",
      "UTC-08:00",
      "UTC-04:00",
      "UTC-03:00",
      "UTC+01:00",
      "UTC+02:00",
      "UTC+03:00",
      "UTC+04:00",
      "UTC+05:00",
      "UTC+10:00",
      "UTC+11:00",
      "UTC+12:00"
    ],
    "states": [
      {
        "code": "FR-A",
        "name": "FR-A",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-67",
        "name": "FR-67",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-68",
        "name": "FR-68",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-B",
        "name": "FR-B",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-79",
        "name": "FR-79",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-24",
        "name": "FR-24",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-33",
        "name": "FR-33",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-40",
        "name": "FR-40",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-47",
        "name": "FR-47",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-64",
        "name": "FR-64",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-C",
        "name": "FR-C",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-03",
        "name": "FR-03",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-15",
        "name": "FR-15",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-43",
        "name": "FR-43",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-63",
        "name": "FR-63",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-P",
        "name": "FR-P",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-14",
        "name": "FR-14",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-50",
        "name": "FR-50",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-61",
        "name": "FR-61",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-D",
        "name": "FR-D",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-21",
        "name": "FR-21",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-58",
        "name": "FR-58",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-71",
        "name": "FR-71",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-89",
        "name": "FR-89",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-E",
        "name": "FR-E",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-22",
        "name": "FR-22",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-29",
        "name": "FR-29",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-35",
        "name": "FR-35",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-56",
        "name": "FR-56",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-F",
        "name": "FR-F",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-18",
        "name": "FR-18",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-28",
        "name": "FR-28",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-36",
        "name": "FR-36",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-37",
        "name": "FR-37",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-41",
        "name": "FR-41",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-45",
        "name": "FR-45",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-G",
        "name": "FR-G",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-08",
        "name": "FR-08",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-10",
        "name": "FR-10",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-52",
        "name": "FR-52",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-51",
        "name": "FR-51",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-H",
        "name": "FR-H",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-2A",
        "name": "FR-2A",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-2B",
        "name": "FR-2B",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-I",
        "name": "FR-I",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-25",
        "name": "FR-25",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-70",
        "name": "FR-70",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-39",
        "name": "FR-39",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-90",
        "name": "FR-90",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-Q",
        "name": "FR-Q",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-27",
        "name": "FR-27",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-76",
        "name": "FR-76",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-J",
        "name": "FR-J",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-91",
        "name": "FR-91",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-92",
        "name": "FR-92",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-75",
        "name": "FR-75",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-77",
        "name": "FR-77",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-93",
        "name": "FR-93",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-94",
        "name": "FR-94",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-95",
        "name": "FR-95",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-78",
        "name": "FR-78",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-K",
        "name": "FR-K",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-11",
        "name": "FR-11",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-30",
        "name": "FR-30",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-34",
        "name": "FR-34",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-48",
        "name": "FR-48",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-66",
        "name": "FR-66",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-L",
        "name": "FR-L",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-19",
        "name": "FR-19",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-23",
        "name": "FR-23",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-87",
        "name": "FR-87",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-M",
        "name": "FR-M",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-54",
        "name": "FR-54",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-55",
        "name": "FR-55",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-57",
        "name": "FR-57",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-88",
        "name": "FR-88",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-N",
        "name": "FR-N",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-09",
        "name": "FR-09",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-12",
        "name": "FR-12",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-32",
        "name": "FR-32",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-31",
        "name": "FR-31",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-65",
        "name": "FR-65",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-46",
        "name": "FR-46",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-81",
        "name": "FR-81",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-82",
        "name": "FR-82",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-O",
        "name": "FR-O",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-59",
        "name": "FR-59",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-62",
        "name": "FR-62",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-R",
        "name": "FR-R",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-44",
        "name": "FR-44",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-49",
        "name": "FR-49",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-53",
        "name": "FR-53",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-72",
        "name": "FR-72",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-85",
        "name": "FR-85",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-S",
        "name": "FR-S",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-02",
        "name": "FR-02",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-60",
        "name": "FR-60",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-80",
        "name": "FR-80",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-T",
        "name": "FR-T",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-16",
        "name": "FR-16",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-17",
        "name": "FR-17",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-86",
        "name": "FR-86",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-U",
        "name": "FR-U",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-04",
        "name": "FR-04",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-06",
        "name": "FR-06",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-13",
        "name": "FR-13",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-05",
        "name": "FR-05",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-83",
        "name": "FR-83",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-84",
        "name": "FR-84",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-V",
        "name": "FR-V",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-01",
        "name": "FR-01",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-07",
        "name": "FR-07",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-26",
        "name": "FR-26",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-74",
        "name": "FR-74",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-38",
        "name": "FR-38",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-42",
        "name": "FR-42",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-69",
        "name": "FR-69",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-73",
        "name": "FR-73",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-GP",
        "name": "FR-GP",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-GF",
        "name": "FR-GF",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-MQ",
        "name": "FR-MQ",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-RE",
        "name": "FR-RE",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-YT",
        "name": "FR-YT",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-PM",
        "name": "FR-PM",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-NC",
        "name": "FR-NC",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-PF",
        "name": "FR-PF",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-TF",
        "name": "FR-TF",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      },
      {
        "code": "FR-WF",
        "name": "FR-WF",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 2
        }
      }
    ]
  },
  {
    "code": "GF",
    "name": "French Guiana",
    "regions": [
      "Americas",
      "South America"
    ],
    "coordinates": {
      "latitude": 4,
      "longitude": -53
    },
    "currency": "EUR",
    "timezone": [
      "UTC-03:00"
    ],
    "states": [
      {
        "code": "GF-GF",
        "name": "GF-GF",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -53
        }
      }
    ]
  },
  {
    "code": "PF",
    "name": "French Polynesia",
    "regions": [
      "Oceania",
      "Polynesia"
    ],
    "coordinates": {
      "latitude": -17.6797,
      "longitude": -149.4068
    },
    "currency": "XPF",
    "timezone": [
      "UTC-10:00",
      "UTC-09:30",
      "UTC-09:00"
    ],
    "states": [
      {
        "code": "PF-PF",
        "name": "PF-PF",
        "districts": [],
        "coordinates": {
          "latitude": -17.6797,
          "longitude": -149.4068
        }
      }
    ]
  },
  {
    "code": "TF",
    "name": "French Southern and Antarctic Lands",
    "regions": [
      "Antarctic"
    ],
    "coordinates": {
      "latitude": -49.25,
      "longitude": 69.167
    },
    "currency": "EUR",
    "timezone": [
      "UTC+05:00"
    ],
    "states": [
      {
        "code": "TF-TF",
        "name": "TF-TF",
        "districts": [],
        "coordinates": {
          "latitude": -49.25,
          "longitude": 69.167
        }
      }
    ]
  },
  {
    "code": "GA",
    "name": "Gabon",
    "regions": [
      "Africa",
      "Middle Africa"
    ],
    "coordinates": {
      "latitude": -1,
      "longitude": 11.75
    },
    "currency": "XAF",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "GA-1",
        "name": "GA-1",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 11.75
        }
      },
      {
        "code": "GA-2",
        "name": "GA-2",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 11.75
        }
      },
      {
        "code": "GA-3",
        "name": "GA-3",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 11.75
        }
      },
      {
        "code": "GA-4",
        "name": "GA-4",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 11.75
        }
      },
      {
        "code": "GA-5",
        "name": "GA-5",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 11.75
        }
      },
      {
        "code": "GA-6",
        "name": "GA-6",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 11.75
        }
      },
      {
        "code": "GA-7",
        "name": "GA-7",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 11.75
        }
      },
      {
        "code": "GA-8",
        "name": "GA-8",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 11.75
        }
      },
      {
        "code": "GA-9",
        "name": "GA-9",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 11.75
        }
      }
    ]
  },
  {
    "code": "GM",
    "name": "Gambia",
    "regions": [
      "Africa",
      "Western Africa"
    ],
    "coordinates": {
      "latitude": 13.46666666,
      "longitude": -16.56666666
    },
    "currency": "GMD",
    "timezone": [
      "UTC+00:00"
    ],
    "states": [
      {
        "code": "GM-B",
        "name": "GM-B",
        "districts": [],
        "coordinates": {
          "latitude": 13.46666666,
          "longitude": -16.56666666
        }
      },
      {
        "code": "GM-L",
        "name": "GM-L",
        "districts": [],
        "coordinates": {
          "latitude": 13.46666666,
          "longitude": -16.56666666
        }
      },
      {
        "code": "GM-M",
        "name": "GM-M",
        "districts": [],
        "coordinates": {
          "latitude": 13.46666666,
          "longitude": -16.56666666
        }
      },
      {
        "code": "GM-N",
        "name": "GM-N",
        "districts": [],
        "coordinates": {
          "latitude": 13.46666666,
          "longitude": -16.56666666
        }
      },
      {
        "code": "GM-U",
        "name": "GM-U",
        "districts": [],
        "coordinates": {
          "latitude": 13.46666666,
          "longitude": -16.56666666
        }
      },
      {
        "code": "GM-W",
        "name": "GM-W",
        "districts": [],
        "coordinates": {
          "latitude": 13.46666666,
          "longitude": -16.56666666
        }
      }
    ]
  },
  {
    "code": "GE",
    "name": "Georgia",
    "regions": [
      "Asia",
      "Western Asia"
    ],
    "coordinates": {
      "latitude": 42,
      "longitude": 43.5
    },
    "currency": "GEL",
    "timezone": [
      "UTC+04:00"
    ],
    "states": [
      {
        "code": "GE-AB",
        "name": "GE-AB",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-AJ",
        "name": "GE-AJ",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-BUS",
        "name": "GE-BUS",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-CHI",
        "name": "GE-CHI",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-GAG",
        "name": "GE-GAG",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-GOR",
        "name": "GE-GOR",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-KUT",
        "name": "GE-KUT",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-PTI",
        "name": "GE-PTI",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-RUS",
        "name": "GE-RUS",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-SUI",
        "name": "GE-SUI",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-TBS",
        "name": "GE-TBS",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-TQI",
        "name": "GE-TQI",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-TQV",
        "name": "GE-TQV",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-TSQ",
        "name": "GE-TSQ",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-ZUG",
        "name": "GE-ZUG",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-01",
        "name": "GE-01",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-02",
        "name": "GE-02",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-03",
        "name": "GE-03",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-04",
        "name": "GE-04",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-05",
        "name": "GE-05",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-06",
        "name": "GE-06",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-07",
        "name": "GE-07",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-08",
        "name": "GE-08",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-09",
        "name": "GE-09",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-10",
        "name": "GE-10",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-11",
        "name": "GE-11",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-12",
        "name": "GE-12",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-13",
        "name": "GE-13",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-14",
        "name": "GE-14",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-15",
        "name": "GE-15",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-16",
        "name": "GE-16",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-17",
        "name": "GE-17",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-18",
        "name": "GE-18",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-19",
        "name": "GE-19",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-20",
        "name": "GE-20",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-21",
        "name": "GE-21",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-22",
        "name": "GE-22",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-23",
        "name": "GE-23",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-24",
        "name": "GE-24",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-25",
        "name": "GE-25",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-26",
        "name": "GE-26",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-27",
        "name": "GE-27",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-28",
        "name": "GE-28",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-29",
        "name": "GE-29",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-30",
        "name": "GE-30",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-31",
        "name": "GE-31",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-32",
        "name": "GE-32",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-33",
        "name": "GE-33",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-34",
        "name": "GE-34",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-35",
        "name": "GE-35",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-36",
        "name": "GE-36",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-37",
        "name": "GE-37",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-38",
        "name": "GE-38",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-39",
        "name": "GE-39",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-40",
        "name": "GE-40",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-41",
        "name": "GE-41",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-42",
        "name": "GE-42",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-43",
        "name": "GE-43",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-44",
        "name": "GE-44",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-45",
        "name": "GE-45",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-46",
        "name": "GE-46",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-47",
        "name": "GE-47",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-48",
        "name": "GE-48",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-49",
        "name": "GE-49",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-50",
        "name": "GE-50",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-51",
        "name": "GE-51",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-52",
        "name": "GE-52",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-53",
        "name": "GE-53",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-54",
        "name": "GE-54",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-55",
        "name": "GE-55",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-56",
        "name": "GE-56",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-57",
        "name": "GE-57",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-58",
        "name": "GE-58",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-59",
        "name": "GE-59",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-60",
        "name": "GE-60",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-61",
        "name": "GE-61",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-62",
        "name": "GE-62",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      },
      {
        "code": "GE-63",
        "name": "GE-63",
        "districts": [],
        "coordinates": {
          "latitude": 42,
          "longitude": 43.5
        }
      }
    ]
  },
  {
    "code": "DE",
    "name": "Germany",
    "regions": [
      "Europe",
      "Western Europe"
    ],
    "coordinates": {
      "latitude": 51,
      "longitude": 9
    },
    "currency": "EUR",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "DE-BW",
        "name": "DE-BW",
        "districts": [],
        "coordinates": {
          "latitude": 51,
          "longitude": 9
        }
      },
      {
        "code": "DE-BY",
        "name": "DE-BY",
        "districts": [],
        "coordinates": {
          "latitude": 51,
          "longitude": 9
        }
      },
      {
        "code": "DE-BE",
        "name": "DE-BE",
        "districts": [],
        "coordinates": {
          "latitude": 51,
          "longitude": 9
        }
      },
      {
        "code": "DE-BB",
        "name": "DE-BB",
        "districts": [],
        "coordinates": {
          "latitude": 51,
          "longitude": 9
        }
      },
      {
        "code": "DE-HB",
        "name": "DE-HB",
        "districts": [],
        "coordinates": {
          "latitude": 51,
          "longitude": 9
        }
      },
      {
        "code": "DE-HH",
        "name": "DE-HH",
        "districts": [],
        "coordinates": {
          "latitude": 51,
          "longitude": 9
        }
      },
      {
        "code": "DE-HE",
        "name": "DE-HE",
        "districts": [],
        "coordinates": {
          "latitude": 51,
          "longitude": 9
        }
      },
      {
        "code": "DE-MV",
        "name": "DE-MV",
        "districts": [],
        "coordinates": {
          "latitude": 51,
          "longitude": 9
        }
      },
      {
        "code": "DE-NI",
        "name": "DE-NI",
        "districts": [],
        "coordinates": {
          "latitude": 51,
          "longitude": 9
        }
      },
      {
        "code": "DE-NW",
        "name": "DE-NW",
        "districts": [],
        "coordinates": {
          "latitude": 51,
          "longitude": 9
        }
      },
      {
        "code": "DE-RP",
        "name": "DE-RP",
        "districts": [],
        "coordinates": {
          "latitude": 51,
          "longitude": 9
        }
      },
      {
        "code": "DE-SL",
        "name": "DE-SL",
        "districts": [],
        "coordinates": {
          "latitude": 51,
          "longitude": 9
        }
      },
      {
        "code": "DE-SN",
        "name": "DE-SN",
        "districts": [],
        "coordinates": {
          "latitude": 51,
          "longitude": 9
        }
      },
      {
        "code": "DE-ST",
        "name": "DE-ST",
        "districts": [],
        "coordinates": {
          "latitude": 51,
          "longitude": 9
        }
      },
      {
        "code": "DE-SH",
        "name": "DE-SH",
        "districts": [],
        "coordinates": {
          "latitude": 51,
          "longitude": 9
        }
      },
      {
        "code": "DE-TH",
        "name": "DE-TH",
        "districts": [],
        "coordinates": {
          "latitude": 51,
          "longitude": 9
        }
      }
    ]
  },
  {
    "code": "GH",
    "name": "Ghana",
    "regions": [
      "Africa",
      "Western Africa"
    ],
    "coordinates": {
      "latitude": 8,
      "longitude": -2
    },
    "currency": "GHS",
    "timezone": [
      "UTC"
    ],
    "states": [
      {
        "code": "GH-AH",
        "name": "GH-AH",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -2
        }
      },
      {
        "code": "GH-BA",
        "name": "GH-BA",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -2
        }
      },
      {
        "code": "GH-CP",
        "name": "GH-CP",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -2
        }
      },
      {
        "code": "GH-EP",
        "name": "GH-EP",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -2
        }
      },
      {
        "code": "GH-AA",
        "name": "GH-AA",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -2
        }
      },
      {
        "code": "GH-NP",
        "name": "GH-NP",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -2
        }
      },
      {
        "code": "GH-UE",
        "name": "GH-UE",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -2
        }
      },
      {
        "code": "GH-UW",
        "name": "GH-UW",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -2
        }
      },
      {
        "code": "GH-TV",
        "name": "GH-TV",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -2
        }
      },
      {
        "code": "GH-WP",
        "name": "GH-WP",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -2
        }
      }
    ]
  },
  {
    "code": "GI",
    "name": "Gibraltar",
    "regions": [
      "Europe",
      "Southern Europe"
    ],
    "coordinates": {
      "latitude": 36.13333333,
      "longitude": -5.35
    },
    "currency": "GIP",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "GI-GI",
        "name": "GI-GI",
        "districts": [],
        "coordinates": {
          "latitude": 36.13333333,
          "longitude": -5.35
        }
      }
    ]
  },
  {
    "code": "GR",
    "name": "Greece",
    "regions": [
      "Europe",
      "Southern Europe"
    ],
    "coordinates": {
      "latitude": 39,
      "longitude": 22
    },
    "currency": "EUR",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "GR-I",
        "name": "GR-I",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-52",
        "name": "GR-52",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-71",
        "name": "GR-71",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-55",
        "name": "GR-55",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-73",
        "name": "GR-73",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-72",
        "name": "GR-72",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-IX",
        "name": "GR-IX",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-A1",
        "name": "GR-A1",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-VII",
        "name": "GR-VII",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-13",
        "name": "GR-13",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-01",
        "name": "GR-01",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-14",
        "name": "GR-14",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-III",
        "name": "GR-III",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-63",
        "name": "GR-63",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-51",
        "name": "GR-51",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-56",
        "name": "GR-56",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-58",
        "name": "GR-58",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-VI",
        "name": "GR-VI",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-23",
        "name": "GR-23",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-22",
        "name": "GR-22",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-24",
        "name": "GR-24",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-21",
        "name": "GR-21",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-IV",
        "name": "GR-IV",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-31",
        "name": "GR-31",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-33",
        "name": "GR-33",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-34",
        "name": "GR-34",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-32",
        "name": "GR-32",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-II",
        "name": "GR-II",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-64",
        "name": "GR-64",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-53",
        "name": "GR-53",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-57",
        "name": "GR-57",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-59",
        "name": "GR-59",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-61",
        "name": "GR-61",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-62",
        "name": "GR-62",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-54",
        "name": "GR-54",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-XIII",
        "name": "GR-XIII",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-94",
        "name": "GR-94",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-91",
        "name": "GR-91",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-92",
        "name": "GR-92",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-93",
        "name": "GR-93",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-XII",
        "name": "GR-XII",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-81",
        "name": "GR-81",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-82",
        "name": "GR-82",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-X",
        "name": "GR-X",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-11",
        "name": "GR-11",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-12",
        "name": "GR-12",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-15",
        "name": "GR-15",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-16",
        "name": "GR-16",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-17",
        "name": "GR-17",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-VIII",
        "name": "GR-VIII",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-05",
        "name": "GR-05",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-04",
        "name": "GR-04",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-07",
        "name": "GR-07",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-06",
        "name": "GR-06",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-03",
        "name": "GR-03",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-V",
        "name": "GR-V",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-41",
        "name": "GR-41",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-42",
        "name": "GR-42",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-43",
        "name": "GR-43",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-44",
        "name": "GR-44",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-XI",
        "name": "GR-XI",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-85",
        "name": "GR-85",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-83",
        "name": "GR-83",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      },
      {
        "code": "GR-84",
        "name": "GR-84",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 22
        }
      }
    ]
  },
  {
    "code": "GL",
    "name": "Greenland",
    "regions": [
      "Americas",
      "North America"
    ],
    "coordinates": {
      "latitude": 72,
      "longitude": -40
    },
    "currency": "DKK",
    "timezone": [
      "UTC-04:00",
      "UTC-03:00",
      "UTC-01:00",
      "UTC+00:00"
    ],
    "states": [
      {
        "code": "GL-GL",
        "name": "GL-GL",
        "districts": [],
        "coordinates": {
          "latitude": 72,
          "longitude": -40
        }
      }
    ]
  },
  {
    "code": "GD",
    "name": "Grenada",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 12.11666666,
      "longitude": -61.66666666
    },
    "currency": "XCD",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "GD-GD",
        "name": "GD-GD",
        "districts": [],
        "coordinates": {
          "latitude": 12.11666666,
          "longitude": -61.66666666
        }
      }
    ]
  },
  {
    "code": "GP",
    "name": "Guadeloupe",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 16.25,
      "longitude": -61.583333
    },
    "currency": "EUR",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "GP-GP",
        "name": "GP-GP",
        "districts": [],
        "coordinates": {
          "latitude": 16.25,
          "longitude": -61.583333
        }
      }
    ]
  },
  {
    "code": "GU",
    "name": "Guam",
    "regions": [
      "Oceania",
      "Micronesia"
    ],
    "coordinates": {
      "latitude": 13.46666666,
      "longitude": 144.78333333
    },
    "currency": "USD",
    "timezone": [
      "UTC+10:00"
    ],
    "states": [
      {
        "code": "GU-GU",
        "name": "GU-GU",
        "districts": [],
        "coordinates": {
          "latitude": 13.46666666,
          "longitude": 144.78333333
        }
      }
    ]
  },
  {
    "code": "GT",
    "name": "Guatemala",
    "regions": [
      "Americas",
      "Central America"
    ],
    "coordinates": {
      "latitude": 15.5,
      "longitude": -90.25
    },
    "currency": "GTQ",
    "timezone": [
      "UTC-06:00"
    ],
    "states": [
      {
        "code": "GT-AV",
        "name": "GT-AV",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-BV",
        "name": "GT-BV",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-CM",
        "name": "GT-CM",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-CQ",
        "name": "GT-CQ",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-PR",
        "name": "GT-PR",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-ES",
        "name": "GT-ES",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-GU",
        "name": "GT-GU",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-HU",
        "name": "GT-HU",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-IZ",
        "name": "GT-IZ",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-JA",
        "name": "GT-JA",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-JU",
        "name": "GT-JU",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-PE",
        "name": "GT-PE",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-QZ",
        "name": "GT-QZ",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-QC",
        "name": "GT-QC",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-RE",
        "name": "GT-RE",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-SA",
        "name": "GT-SA",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-SM",
        "name": "GT-SM",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-SR",
        "name": "GT-SR",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-SO",
        "name": "GT-SO",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-SU",
        "name": "GT-SU",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-TO",
        "name": "GT-TO",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      },
      {
        "code": "GT-ZA",
        "name": "GT-ZA",
        "districts": [],
        "coordinates": {
          "latitude": 15.5,
          "longitude": -90.25
        }
      }
    ]
  },
  {
    "code": "GG",
    "name": "Guernsey",
    "regions": [
      "Europe",
      "Northern Europe"
    ],
    "coordinates": {
      "latitude": 49.46666666,
      "longitude": -2.58333333
    },
    "currency": "GBP",
    "timezone": [
      "UTC+00:00"
    ],
    "states": []
  },
  {
    "code": "GN",
    "name": "Guinea",
    "regions": [
      "Africa",
      "Western Africa"
    ],
    "coordinates": {
      "latitude": 11,
      "longitude": -10
    },
    "currency": "GNF",
    "timezone": [
      "UTC"
    ],
    "states": [
      {
        "code": "GN-B",
        "name": "GN-B",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-BF",
        "name": "GN-BF",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-BK",
        "name": "GN-BK",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-FR",
        "name": "GN-FR",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-GA",
        "name": "GN-GA",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-KD",
        "name": "GN-KD",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-C",
        "name": "GN-C",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-F",
        "name": "GN-F",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-DB",
        "name": "GN-DB",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-DI",
        "name": "GN-DI",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-FA",
        "name": "GN-FA",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-KS",
        "name": "GN-KS",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-K",
        "name": "GN-K",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-KA",
        "name": "GN-KA",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-KE",
        "name": "GN-KE",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-KO",
        "name": "GN-KO",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-MD",
        "name": "GN-MD",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-SI",
        "name": "GN-SI",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-D",
        "name": "GN-D",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-CO",
        "name": "GN-CO",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-DU",
        "name": "GN-DU",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-FO",
        "name": "GN-FO",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-TE",
        "name": "GN-TE",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-L",
        "name": "GN-L",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-KB",
        "name": "GN-KB",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-LA",
        "name": "GN-LA",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-LE",
        "name": "GN-LE",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-ML",
        "name": "GN-ML",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-TO",
        "name": "GN-TO",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-M",
        "name": "GN-M",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-DL",
        "name": "GN-DL",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-MM",
        "name": "GN-MM",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-PI",
        "name": "GN-PI",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-N",
        "name": "GN-N",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-BE",
        "name": "GN-BE",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-GU",
        "name": "GN-GU",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-LO",
        "name": "GN-LO",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-MC",
        "name": "GN-MC",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-NZ",
        "name": "GN-NZ",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      },
      {
        "code": "GN-YO",
        "name": "GN-YO",
        "districts": [],
        "coordinates": {
          "latitude": 11,
          "longitude": -10
        }
      }
    ]
  },
  {
    "code": "GW",
    "name": "Guinea-Bissau",
    "regions": [
      "Africa",
      "Western Africa"
    ],
    "coordinates": {
      "latitude": 12,
      "longitude": -15
    },
    "currency": "XOF",
    "timezone": [
      "UTC"
    ],
    "states": [
      {
        "code": "GW-BS",
        "name": "GW-BS",
        "districts": [],
        "coordinates": {
          "latitude": 12,
          "longitude": -15
        }
      },
      {
        "code": "GW-BA",
        "name": "GW-BA",
        "districts": [],
        "coordinates": {
          "latitude": 12,
          "longitude": -15
        }
      },
      {
        "code": "GW-BM",
        "name": "GW-BM",
        "districts": [],
        "coordinates": {
          "latitude": 12,
          "longitude": -15
        }
      },
      {
        "code": "GW-BL",
        "name": "GW-BL",
        "districts": [],
        "coordinates": {
          "latitude": 12,
          "longitude": -15
        }
      },
      {
        "code": "GW-CA",
        "name": "GW-CA",
        "districts": [],
        "coordinates": {
          "latitude": 12,
          "longitude": -15
        }
      },
      {
        "code": "GW-GA",
        "name": "GW-GA",
        "districts": [],
        "coordinates": {
          "latitude": 12,
          "longitude": -15
        }
      },
      {
        "code": "GW-OI",
        "name": "GW-OI",
        "districts": [],
        "coordinates": {
          "latitude": 12,
          "longitude": -15
        }
      },
      {
        "code": "GW-QU",
        "name": "GW-QU",
        "districts": [],
        "coordinates": {
          "latitude": 12,
          "longitude": -15
        }
      }
    ]
  },
  {
    "code": "GY",
    "name": "Guyana",
    "regions": [
      "Americas",
      "South America"
    ],
    "coordinates": {
      "latitude": 5,
      "longitude": -59
    },
    "currency": "GYD",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "GY-BA",
        "name": "GY-BA",
        "districts": [],
        "coordinates": {
          "latitude": 5,
          "longitude": -59
        }
      },
      {
        "code": "GY-CU",
        "name": "GY-CU",
        "districts": [],
        "coordinates": {
          "latitude": 5,
          "longitude": -59
        }
      },
      {
        "code": "GY-DE",
        "name": "GY-DE",
        "districts": [],
        "coordinates": {
          "latitude": 5,
          "longitude": -59
        }
      },
      {
        "code": "GY-EB",
        "name": "GY-EB",
        "districts": [],
        "coordinates": {
          "latitude": 5,
          "longitude": -59
        }
      },
      {
        "code": "GY-ES",
        "name": "GY-ES",
        "districts": [],
        "coordinates": {
          "latitude": 5,
          "longitude": -59
        }
      },
      {
        "code": "GY-MA",
        "name": "GY-MA",
        "districts": [],
        "coordinates": {
          "latitude": 5,
          "longitude": -59
        }
      },
      {
        "code": "GY-PM",
        "name": "GY-PM",
        "districts": [],
        "coordinates": {
          "latitude": 5,
          "longitude": -59
        }
      },
      {
        "code": "GY-PT",
        "name": "GY-PT",
        "districts": [],
        "coordinates": {
          "latitude": 5,
          "longitude": -59
        }
      },
      {
        "code": "GY-UD",
        "name": "GY-UD",
        "districts": [],
        "coordinates": {
          "latitude": 5,
          "longitude": -59
        }
      },
      {
        "code": "GY-UT",
        "name": "GY-UT",
        "districts": [],
        "coordinates": {
          "latitude": 5,
          "longitude": -59
        }
      }
    ]
  },
  {
    "code": "HT",
    "name": "Haiti",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 19,
      "longitude": -72.41666666
    },
    "currency": "HTG",
    "timezone": [
      "UTC-05:00"
    ],
    "states": [
      {
        "code": "HT-AR",
        "name": "HT-AR",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -72.41666666
        }
      },
      {
        "code": "HT-CE",
        "name": "HT-CE",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -72.41666666
        }
      },
      {
        "code": "HT-GA",
        "name": "HT-GA",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -72.41666666
        }
      },
      {
        "code": "HT-ND",
        "name": "HT-ND",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -72.41666666
        }
      },
      {
        "code": "HT-NE",
        "name": "HT-NE",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -72.41666666
        }
      },
      {
        "code": "HT-NO",
        "name": "HT-NO",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -72.41666666
        }
      },
      {
        "code": "HT-OU",
        "name": "HT-OU",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -72.41666666
        }
      },
      {
        "code": "HT-SD",
        "name": "HT-SD",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -72.41666666
        }
      },
      {
        "code": "HT-SE",
        "name": "HT-SE",
        "districts": [],
        "coordinates": {
          "latitude": 19,
          "longitude": -72.41666666
        }
      }
    ]
  },
  {
    "code": "HM",
    "name": "Heard Island and McDonald Islands",
    "regions": [
      "Antarctic"
    ],
    "coordinates": {
      "latitude": -53.0818,
      "longitude": 73.5042
    },
    "currency": "",
    "timezone": [
      "UTC+05:00"
    ],
    "states": [
      {
        "code": "HM-HM",
        "name": "HM-HM",
        "districts": [],
        "coordinates": {
          "latitude": -53.0818,
          "longitude": 73.5042
        }
      }
    ]
  },
  {
    "code": "HN",
    "name": "Honduras",
    "regions": [
      "Americas",
      "Central America"
    ],
    "coordinates": {
      "latitude": 15,
      "longitude": -86.5
    },
    "currency": "HNL",
    "timezone": [
      "UTC-06:00"
    ],
    "states": [
      {
        "code": "HN-AT",
        "name": "HN-AT",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": -86.5
        }
      },
      {
        "code": "HN-CL",
        "name": "HN-CL",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": -86.5
        }
      },
      {
        "code": "HN-CM",
        "name": "HN-CM",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": -86.5
        }
      },
      {
        "code": "HN-CP",
        "name": "HN-CP",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": -86.5
        }
      },
      {
        "code": "HN-CR",
        "name": "HN-CR",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": -86.5
        }
      },
      {
        "code": "HN-CH",
        "name": "HN-CH",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": -86.5
        }
      },
      {
        "code": "HN-EP",
        "name": "HN-EP",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": -86.5
        }
      },
      {
        "code": "HN-FM",
        "name": "HN-FM",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": -86.5
        }
      },
      {
        "code": "HN-GD",
        "name": "HN-GD",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": -86.5
        }
      },
      {
        "code": "HN-IN",
        "name": "HN-IN",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": -86.5
        }
      },
      {
        "code": "HN-IB",
        "name": "HN-IB",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": -86.5
        }
      },
      {
        "code": "HN-LP",
        "name": "HN-LP",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": -86.5
        }
      },
      {
        "code": "HN-LE",
        "name": "HN-LE",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": -86.5
        }
      },
      {
        "code": "HN-OC",
        "name": "HN-OC",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": -86.5
        }
      },
      {
        "code": "HN-OL",
        "name": "HN-OL",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": -86.5
        }
      },
      {
        "code": "HN-SB",
        "name": "HN-SB",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": -86.5
        }
      },
      {
        "code": "HN-VA",
        "name": "HN-VA",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": -86.5
        }
      },
      {
        "code": "HN-YO",
        "name": "HN-YO",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": -86.5
        }
      }
    ]
  },
  {
    "code": "HK",
    "name": "Hong Kong",
    "regions": [
      "Asia",
      "Eastern Asia"
    ],
    "coordinates": {
      "latitude": 22.267,
      "longitude": 114.188
    },
    "currency": "HKD",
    "timezone": [
      "UTC+08:00"
    ],
    "states": [
      {
        "code": "HK-HK",
        "name": "HK-HK",
        "districts": [],
        "coordinates": {
          "latitude": 22.267,
          "longitude": 114.188
        }
      }
    ]
  },
  {
    "code": "HU",
    "name": "Hungary",
    "regions": [
      "Europe",
      "Central Europe"
    ],
    "coordinates": {
      "latitude": 47,
      "longitude": 20
    },
    "currency": "HUF",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "HU-BU",
        "name": "HU-BU",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-BK",
        "name": "HU-BK",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-BA",
        "name": "HU-BA",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-BE",
        "name": "HU-BE",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-BZ",
        "name": "HU-BZ",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-CS",
        "name": "HU-CS",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-FE",
        "name": "HU-FE",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-GS",
        "name": "HU-GS",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-HB",
        "name": "HU-HB",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-HE",
        "name": "HU-HE",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-JN",
        "name": "HU-JN",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-KE",
        "name": "HU-KE",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-NO",
        "name": "HU-NO",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-PE",
        "name": "HU-PE",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-SO",
        "name": "HU-SO",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-SZ",
        "name": "HU-SZ",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-TO",
        "name": "HU-TO",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-VA",
        "name": "HU-VA",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-VE",
        "name": "HU-VE",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-ZA",
        "name": "HU-ZA",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-BC",
        "name": "HU-BC",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-DE",
        "name": "HU-DE",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-DU",
        "name": "HU-DU",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-EG",
        "name": "HU-EG",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-GY",
        "name": "HU-GY",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-HV",
        "name": "HU-HV",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-KV",
        "name": "HU-KV",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-KM",
        "name": "HU-KM",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-MI",
        "name": "HU-MI",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-NK",
        "name": "HU-NK",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-NY",
        "name": "HU-NY",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-PS",
        "name": "HU-PS",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-ST",
        "name": "HU-ST",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-SN",
        "name": "HU-SN",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-SD",
        "name": "HU-SD",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-SF",
        "name": "HU-SF",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-SS",
        "name": "HU-SS",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-SK",
        "name": "HU-SK",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-SH",
        "name": "HU-SH",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-TB",
        "name": "HU-TB",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-VM",
        "name": "HU-VM",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      },
      {
        "code": "HU-ZE",
        "name": "HU-ZE",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 20
        }
      }
    ]
  },
  {
    "code": "IS",
    "name": "Iceland",
    "regions": [
      "Europe",
      "Northern Europe"
    ],
    "coordinates": {
      "latitude": 65,
      "longitude": -18
    },
    "currency": "ISK",
    "timezone": [
      "UTC"
    ],
    "states": [
      {
        "code": "IS-7",
        "name": "IS-7",
        "districts": [],
        "coordinates": {
          "latitude": 65,
          "longitude": -18
        }
      },
      {
        "code": "IS-1",
        "name": "IS-1",
        "districts": [],
        "coordinates": {
          "latitude": 65,
          "longitude": -18
        }
      },
      {
        "code": "IS-6",
        "name": "IS-6",
        "districts": [],
        "coordinates": {
          "latitude": 65,
          "longitude": -18
        }
      },
      {
        "code": "IS-5",
        "name": "IS-5",
        "districts": [],
        "coordinates": {
          "latitude": 65,
          "longitude": -18
        }
      },
      {
        "code": "IS-0",
        "name": "IS-0",
        "districts": [],
        "coordinates": {
          "latitude": 65,
          "longitude": -18
        }
      },
      {
        "code": "IS-8",
        "name": "IS-8",
        "districts": [],
        "coordinates": {
          "latitude": 65,
          "longitude": -18
        }
      },
      {
        "code": "IS-2",
        "name": "IS-2",
        "districts": [],
        "coordinates": {
          "latitude": 65,
          "longitude": -18
        }
      },
      {
        "code": "IS-4",
        "name": "IS-4",
        "districts": [],
        "coordinates": {
          "latitude": 65,
          "longitude": -18
        }
      },
      {
        "code": "IS-3",
        "name": "IS-3",
        "districts": [],
        "coordinates": {
          "latitude": 65,
          "longitude": -18
        }
      }
    ]
  },
  {
    "code": "IN",
    "name": "India",
    "regions": [
      "Asia",
      "Southern Asia"
    ],
    "coordinates": {
      "latitude": 20,
      "longitude": 77
    },
    "currency": "INR",
    "timezone": [
      "UTC+05:30"
    ],
    "states": [
      {
        "code": "IN-AP",
        "name": "IN-AP",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-AR",
        "name": "IN-AR",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-AS",
        "name": "IN-AS",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-BR",
        "name": "IN-BR",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-GA",
        "name": "IN-GA",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-GJ",
        "name": "IN-GJ",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-HR",
        "name": "IN-HR",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-HP",
        "name": "IN-HP",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-JK",
        "name": "IN-JK",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-KA",
        "name": "IN-KA",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-KL",
        "name": "IN-KL",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-MP",
        "name": "IN-MP",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-MH",
        "name": "IN-MH",
        "districts": [],
        "coordinates": {
          "latitude": 19.7515,
          "longitude": 75.7139
        }
      },
      {
        "code": "IN-MN",
        "name": "IN-MN",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-ML",
        "name": "IN-ML",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-MZ",
        "name": "IN-MZ",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-NL",
        "name": "IN-NL",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-OR",
        "name": "IN-OR",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-PB",
        "name": "IN-PB",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-RJ",
        "name": "IN-RJ",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-SK",
        "name": "IN-SK",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-TN",
        "name": "IN-TN",
        "districts": [],
        "coordinates": {
          "latitude": 11.1271,
          "longitude": 78.6569
        }
      },
      {
        "code": "IN-TR",
        "name": "IN-TR",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-UP",
        "name": "IN-UP",
        "districts": [],
        "coordinates": {
          "latitude": 26.8467,
          "longitude": 80.9462
        }
      },
      {
        "code": "IN-WB",
        "name": "IN-WB",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-AN",
        "name": "IN-AN",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-CH",
        "name": "IN-CH",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-DN",
        "name": "IN-DN",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-DD",
        "name": "IN-DD",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-DL",
        "name": "IN-DL",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-LD",
        "name": "IN-LD",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      },
      {
        "code": "IN-PY",
        "name": "IN-PY",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": 77
        }
      }
    ]
  },
  {
    "code": "ID",
    "name": "Indonesia",
    "regions": [
      "Asia",
      "South-Eastern Asia"
    ],
    "coordinates": {
      "latitude": -5,
      "longitude": 120
    },
    "currency": "IDR",
    "timezone": [
      "UTC+07:00",
      "UTC+08:00",
      "UTC+09:00"
    ],
    "states": [
      {
        "code": "ID-IJU",
        "name": "ID-IJU",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-IJ",
        "name": "ID-IJ",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-JWU",
        "name": "ID-JWU",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-JB",
        "name": "ID-JB",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-JT",
        "name": "ID-JT",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-JI",
        "name": "ID-JI",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-JK",
        "name": "ID-JK",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-YO",
        "name": "ID-YO",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-KAU",
        "name": "ID-KAU",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-KB",
        "name": "ID-KB",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-KS",
        "name": "ID-KS",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-KT",
        "name": "ID-KT",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-KI",
        "name": "ID-KI",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-MAU",
        "name": "ID-MAU",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-MA",
        "name": "ID-MA",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-NUU",
        "name": "ID-NUU",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-BA",
        "name": "ID-BA",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-NB",
        "name": "ID-NB",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-NT",
        "name": "ID-NT",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-TT",
        "name": "ID-TT",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-SLU",
        "name": "ID-SLU",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-SN",
        "name": "ID-SN",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-ST",
        "name": "ID-ST",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-SG",
        "name": "ID-SG",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-SA",
        "name": "ID-SA",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-SMU",
        "name": "ID-SMU",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-BE",
        "name": "ID-BE",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-JA",
        "name": "ID-JA",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-LA",
        "name": "ID-LA",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-RI",
        "name": "ID-RI",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-SB",
        "name": "ID-SB",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-SS",
        "name": "ID-SS",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-SU",
        "name": "ID-SU",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      },
      {
        "code": "ID-AC",
        "name": "ID-AC",
        "districts": [],
        "coordinates": {
          "latitude": -5,
          "longitude": 120
        }
      }
    ]
  },
  {
    "code": "IR",
    "name": "Iran",
    "regions": [
      "Asia",
      "Southern Asia"
    ],
    "coordinates": {
      "latitude": 32,
      "longitude": 53
    },
    "currency": "IRR",
    "timezone": [
      "UTC+03:30"
    ],
    "states": [
      {
        "code": "IR-03",
        "name": "IR-03",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-02",
        "name": "IR-02",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-01",
        "name": "IR-01",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-06",
        "name": "IR-06",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-08",
        "name": "IR-08",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-04",
        "name": "IR-04",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-14",
        "name": "IR-14",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-19",
        "name": "IR-19",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-24",
        "name": "IR-24",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-23",
        "name": "IR-23",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-05",
        "name": "IR-05",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-15",
        "name": "IR-15",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-17",
        "name": "IR-17",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-09",
        "name": "IR-09",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-10",
        "name": "IR-10",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-18",
        "name": "IR-18",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-16",
        "name": "IR-16",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-20",
        "name": "IR-20",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-22",
        "name": "IR-22",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-21",
        "name": "IR-21",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-26",
        "name": "IR-26",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-12",
        "name": "IR-12",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-13",
        "name": "IR-13",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-07",
        "name": "IR-07",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-25",
        "name": "IR-25",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      },
      {
        "code": "IR-11",
        "name": "IR-11",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": 53
        }
      }
    ]
  },
  {
    "code": "IQ",
    "name": "Iraq",
    "regions": [
      "Asia",
      "Western Asia"
    ],
    "coordinates": {
      "latitude": 33,
      "longitude": 44
    },
    "currency": "IQD",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "IQ-AN",
        "name": "IQ-AN",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 44
        }
      },
      {
        "code": "IQ-BA",
        "name": "IQ-BA",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 44
        }
      },
      {
        "code": "IQ-MU",
        "name": "IQ-MU",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 44
        }
      },
      {
        "code": "IQ-QA",
        "name": "IQ-QA",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 44
        }
      },
      {
        "code": "IQ-NA",
        "name": "IQ-NA",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 44
        }
      },
      {
        "code": "IQ-AR",
        "name": "IQ-AR",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 44
        }
      },
      {
        "code": "IQ-SU",
        "name": "IQ-SU",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 44
        }
      },
      {
        "code": "IQ-TS",
        "name": "IQ-TS",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 44
        }
      },
      {
        "code": "IQ-BB",
        "name": "IQ-BB",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 44
        }
      },
      {
        "code": "IQ-BG",
        "name": "IQ-BG",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 44
        }
      },
      {
        "code": "IQ-DA",
        "name": "IQ-DA",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 44
        }
      },
      {
        "code": "IQ-DQ",
        "name": "IQ-DQ",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 44
        }
      },
      {
        "code": "IQ-DI",
        "name": "IQ-DI",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 44
        }
      },
      {
        "code": "IQ-KA",
        "name": "IQ-KA",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 44
        }
      },
      {
        "code": "IQ-MA",
        "name": "IQ-MA",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 44
        }
      },
      {
        "code": "IQ-NI",
        "name": "IQ-NI",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 44
        }
      },
      {
        "code": "IQ-SD",
        "name": "IQ-SD",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 44
        }
      },
      {
        "code": "IQ-WA",
        "name": "IQ-WA",
        "districts": [],
        "coordinates": {
          "latitude": 33,
          "longitude": 44
        }
      }
    ]
  },
  {
    "code": "IE",
    "name": "Ireland",
    "regions": [
      "Europe",
      "Northern Europe"
    ],
    "coordinates": {
      "latitude": 53,
      "longitude": -8
    },
    "currency": "EUR",
    "timezone": [
      "UTC"
    ],
    "states": [
      {
        "code": "IE-CP",
        "name": "IE-CP",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-G",
        "name": "IE-G",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-LM",
        "name": "IE-LM",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-MO",
        "name": "IE-MO",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-RN",
        "name": "IE-RN",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-SO",
        "name": "IE-SO",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-LP",
        "name": "IE-LP",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-CW",
        "name": "IE-CW",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-D",
        "name": "IE-D",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-KE",
        "name": "IE-KE",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-KK",
        "name": "IE-KK",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-LS",
        "name": "IE-LS",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-LD",
        "name": "IE-LD",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-LH",
        "name": "IE-LH",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-MH",
        "name": "IE-MH",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-OY",
        "name": "IE-OY",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-WH",
        "name": "IE-WH",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-WX",
        "name": "IE-WX",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-WW",
        "name": "IE-WW",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-M",
        "name": "IE-M",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-UP",
        "name": "IE-UP",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-CN",
        "name": "IE-CN",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-DL",
        "name": "IE-DL",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      },
      {
        "code": "IE-MN",
        "name": "IE-MN",
        "districts": [],
        "coordinates": {
          "latitude": 53,
          "longitude": -8
        }
      }
    ]
  },
  {
    "code": "IM",
    "name": "Isle of Man",
    "regions": [
      "Europe",
      "Northern Europe"
    ],
    "coordinates": {
      "latitude": 54.25,
      "longitude": -4.5
    },
    "currency": "GBP",
    "timezone": [
      "UTC+00:00"
    ],
    "states": []
  },
  {
    "code": "IL",
    "name": "Israel",
    "regions": [
      "Asia",
      "Western Asia"
    ],
    "coordinates": {
      "latitude": 31.47,
      "longitude": 35.13
    },
    "currency": "ILS",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "IL-D",
        "name": "IL-D",
        "districts": [],
        "coordinates": {
          "latitude": 31.47,
          "longitude": 35.13
        }
      },
      {
        "code": "IL-M",
        "name": "IL-M",
        "districts": [],
        "coordinates": {
          "latitude": 31.47,
          "longitude": 35.13
        }
      },
      {
        "code": "IL-2",
        "name": "IL-2",
        "districts": [],
        "coordinates": {
          "latitude": 31.47,
          "longitude": 35.13
        }
      },
      {
        "code": "IL-HA",
        "name": "IL-HA",
        "districts": [],
        "coordinates": {
          "latitude": 31.47,
          "longitude": 35.13
        }
      },
      {
        "code": "IL-TA",
        "name": "IL-TA",
        "districts": [],
        "coordinates": {
          "latitude": 31.47,
          "longitude": 35.13
        }
      },
      {
        "code": "IL-JM",
        "name": "IL-JM",
        "districts": [],
        "coordinates": {
          "latitude": 31.47,
          "longitude": 35.13
        }
      }
    ]
  },
  {
    "code": "IT",
    "name": "Italy",
    "regions": [
      "Europe",
      "Southern Europe"
    ],
    "coordinates": {
      "latitude": 42.83333333,
      "longitude": 12.83333333
    },
    "currency": "EUR",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "IT-65",
        "name": "IT-65",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-CH",
        "name": "IT-CH",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-AQ",
        "name": "IT-AQ",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-PE",
        "name": "IT-PE",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-TE",
        "name": "IT-TE",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-77",
        "name": "IT-77",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-MT",
        "name": "IT-MT",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-PZ",
        "name": "IT-PZ",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-78",
        "name": "IT-78",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-CZ",
        "name": "IT-CZ",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-CS",
        "name": "IT-CS",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-KR",
        "name": "IT-KR",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-RC",
        "name": "IT-RC",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-W",
        "name": "IT-W",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-72",
        "name": "IT-72",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-AV",
        "name": "IT-AV",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-BN",
        "name": "IT-BN",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-CE",
        "name": "IT-CE",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-NA",
        "name": "IT-NA",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-SA",
        "name": "IT-SA",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-45",
        "name": "IT-45",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-BO",
        "name": "IT-BO",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-FE",
        "name": "IT-FE",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-FO",
        "name": "IT-FO",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-MO",
        "name": "IT-MO",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-PR",
        "name": "IT-PR",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-PC",
        "name": "IT-PC",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-RA",
        "name": "IT-RA",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-RE",
        "name": "IT-RE",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-RN",
        "name": "IT-RN",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-36",
        "name": "IT-36",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-GO",
        "name": "IT-GO",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-PN",
        "name": "IT-PN",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-TS",
        "name": "IT-TS",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-UD",
        "name": "IT-UD",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-62",
        "name": "IT-62",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-FR",
        "name": "IT-FR",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-LT",
        "name": "IT-LT",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-RI",
        "name": "IT-RI",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-RM",
        "name": "IT-RM",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-VT",
        "name": "IT-VT",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-42",
        "name": "IT-42",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-GE",
        "name": "IT-GE",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-IM",
        "name": "IT-IM",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-SP",
        "name": "IT-SP",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-SV",
        "name": "IT-SV",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-25",
        "name": "IT-25",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-BG",
        "name": "IT-BG",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-BS",
        "name": "IT-BS",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-CO",
        "name": "IT-CO",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-CR",
        "name": "IT-CR",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-LC",
        "name": "IT-LC",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-LO",
        "name": "IT-LO",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-MN",
        "name": "IT-MN",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-MI",
        "name": "IT-MI",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-PV",
        "name": "IT-PV",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-SO",
        "name": "IT-SO",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-VA",
        "name": "IT-VA",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-57",
        "name": "IT-57",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-AN",
        "name": "IT-AN",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-AP",
        "name": "IT-AP",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-MC",
        "name": "IT-MC",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-PS",
        "name": "IT-PS",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-67",
        "name": "IT-67",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-CB",
        "name": "IT-CB",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-IS",
        "name": "IT-IS",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-21",
        "name": "IT-21",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-AL",
        "name": "IT-AL",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-AT",
        "name": "IT-AT",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-BI",
        "name": "IT-BI",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-CN",
        "name": "IT-CN",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-NO",
        "name": "IT-NO",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-TO",
        "name": "IT-TO",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-VB",
        "name": "IT-VB",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-VC",
        "name": "IT-VC",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-75",
        "name": "IT-75",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-BA",
        "name": "IT-BA",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-BR",
        "name": "IT-BR",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-FG",
        "name": "IT-FG",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-LE",
        "name": "IT-LE",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-TA",
        "name": "IT-TA",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-88",
        "name": "IT-88",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-CA",
        "name": "IT-CA",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-NU",
        "name": "IT-NU",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-OR",
        "name": "IT-OR",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-SS",
        "name": "IT-SS",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-82",
        "name": "IT-82",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-AG",
        "name": "IT-AG",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-CL",
        "name": "IT-CL",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-CT",
        "name": "IT-CT",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-EN",
        "name": "IT-EN",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-ME",
        "name": "IT-ME",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-PA",
        "name": "IT-PA",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-RG",
        "name": "IT-RG",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-SR",
        "name": "IT-SR",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-TP",
        "name": "IT-TP",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-52",
        "name": "IT-52",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-AR",
        "name": "IT-AR",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-FI",
        "name": "IT-FI",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-GR",
        "name": "IT-GR",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-LI",
        "name": "IT-LI",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-LU",
        "name": "IT-LU",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-MS",
        "name": "IT-MS",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-PI",
        "name": "IT-PI",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-PT",
        "name": "IT-PT",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-PO",
        "name": "IT-PO",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-SI",
        "name": "IT-SI",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-32",
        "name": "IT-32",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-BZ",
        "name": "IT-BZ",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-TN",
        "name": "IT-TN",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-55",
        "name": "IT-55",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-PG",
        "name": "IT-PG",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-TR",
        "name": "IT-TR",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-23",
        "name": "IT-23",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-AO",
        "name": "IT-AO",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-34",
        "name": "IT-34",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-BL",
        "name": "IT-BL",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-PD",
        "name": "IT-PD",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-RO",
        "name": "IT-RO",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-TV",
        "name": "IT-TV",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-VE",
        "name": "IT-VE",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-VR",
        "name": "IT-VR",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      },
      {
        "code": "IT-VI",
        "name": "IT-VI",
        "districts": [],
        "coordinates": {
          "latitude": 42.83333333,
          "longitude": 12.83333333
        }
      }
    ]
  },
  {
    "code": "CI",
    "name": "Ivory Coast",
    "regions": [
      "Africa",
      "Western Africa"
    ],
    "coordinates": {
      "latitude": 8,
      "longitude": -5
    },
    "currency": "XOF",
    "timezone": [
      "UTC"
    ],
    "states": [
      {
        "code": "CI-06",
        "name": "CI-06",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -5
        }
      },
      {
        "code": "CI-16",
        "name": "CI-16",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -5
        }
      },
      {
        "code": "CI-09",
        "name": "CI-09",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -5
        }
      },
      {
        "code": "CI-10",
        "name": "CI-10",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -5
        }
      },
      {
        "code": "CI-02",
        "name": "CI-02",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -5
        }
      },
      {
        "code": "CI-07",
        "name": "CI-07",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -5
        }
      },
      {
        "code": "CI-01",
        "name": "CI-01",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -5
        }
      },
      {
        "code": "CI-12",
        "name": "CI-12",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -5
        }
      },
      {
        "code": "CI-05",
        "name": "CI-05",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -5
        }
      },
      {
        "code": "CI-11",
        "name": "CI-11",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -5
        }
      },
      {
        "code": "CI-03",
        "name": "CI-03",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -5
        }
      },
      {
        "code": "CI-15",
        "name": "CI-15",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -5
        }
      },
      {
        "code": "CI-13",
        "name": "CI-13",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -5
        }
      },
      {
        "code": "CI-04",
        "name": "CI-04",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -5
        }
      },
      {
        "code": "CI-14",
        "name": "CI-14",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -5
        }
      },
      {
        "code": "CI-08",
        "name": "CI-08",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -5
        }
      }
    ]
  },
  {
    "code": "JM",
    "name": "Jamaica",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 18.25,
      "longitude": -77.5
    },
    "currency": "JMD",
    "timezone": [
      "UTC-05:00"
    ],
    "states": [
      {
        "code": "JM-13",
        "name": "JM-13",
        "districts": [],
        "coordinates": {
          "latitude": 18.25,
          "longitude": -77.5
        }
      },
      {
        "code": "JM-09",
        "name": "JM-09",
        "districts": [],
        "coordinates": {
          "latitude": 18.25,
          "longitude": -77.5
        }
      },
      {
        "code": "JM-01",
        "name": "JM-01",
        "districts": [],
        "coordinates": {
          "latitude": 18.25,
          "longitude": -77.5
        }
      },
      {
        "code": "JM-12",
        "name": "JM-12",
        "districts": [],
        "coordinates": {
          "latitude": 18.25,
          "longitude": -77.5
        }
      },
      {
        "code": "JM-04",
        "name": "JM-04",
        "districts": [],
        "coordinates": {
          "latitude": 18.25,
          "longitude": -77.5
        }
      },
      {
        "code": "JM-02",
        "name": "JM-02",
        "districts": [],
        "coordinates": {
          "latitude": 18.25,
          "longitude": -77.5
        }
      },
      {
        "code": "JM-06",
        "name": "JM-06",
        "districts": [],
        "coordinates": {
          "latitude": 18.25,
          "longitude": -77.5
        }
      },
      {
        "code": "JM-14",
        "name": "JM-14",
        "districts": [],
        "coordinates": {
          "latitude": 18.25,
          "longitude": -77.5
        }
      },
      {
        "code": "JM-11",
        "name": "JM-11",
        "districts": [],
        "coordinates": {
          "latitude": 18.25,
          "longitude": -77.5
        }
      },
      {
        "code": "JM-08",
        "name": "JM-08",
        "districts": [],
        "coordinates": {
          "latitude": 18.25,
          "longitude": -77.5
        }
      },
      {
        "code": "JM-05",
        "name": "JM-05",
        "districts": [],
        "coordinates": {
          "latitude": 18.25,
          "longitude": -77.5
        }
      },
      {
        "code": "JM-03",
        "name": "JM-03",
        "districts": [],
        "coordinates": {
          "latitude": 18.25,
          "longitude": -77.5
        }
      },
      {
        "code": "JM-07",
        "name": "JM-07",
        "districts": [],
        "coordinates": {
          "latitude": 18.25,
          "longitude": -77.5
        }
      },
      {
        "code": "JM-10",
        "name": "JM-10",
        "districts": [],
        "coordinates": {
          "latitude": 18.25,
          "longitude": -77.5
        }
      }
    ]
  },
  {
    "code": "JP",
    "name": "Japan",
    "regions": [
      "Asia",
      "Eastern Asia"
    ],
    "coordinates": {
      "latitude": 36,
      "longitude": 138
    },
    "currency": "JPY",
    "timezone": [
      "UTC+09:00"
    ],
    "states": [
      {
        "code": "JP-23",
        "name": "JP-23",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-05",
        "name": "JP-05",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-02",
        "name": "JP-02",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-38",
        "name": "JP-38",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-21",
        "name": "JP-21",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-10",
        "name": "JP-10",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-34",
        "name": "JP-34",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-01",
        "name": "JP-01",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-18",
        "name": "JP-18",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-40",
        "name": "JP-40",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-07",
        "name": "JP-07",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-28",
        "name": "JP-28",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-08",
        "name": "JP-08",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-17",
        "name": "JP-17",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-03",
        "name": "JP-03",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-37",
        "name": "JP-37",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-46",
        "name": "JP-46",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-14",
        "name": "JP-14",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-39",
        "name": "JP-39",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-43",
        "name": "JP-43",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-26",
        "name": "JP-26",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-24",
        "name": "JP-24",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-04",
        "name": "JP-04",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-45",
        "name": "JP-45",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-20",
        "name": "JP-20",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-42",
        "name": "JP-42",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-29",
        "name": "JP-29",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-15",
        "name": "JP-15",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-44",
        "name": "JP-44",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-33",
        "name": "JP-33",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-47",
        "name": "JP-47",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-27",
        "name": "JP-27",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-41",
        "name": "JP-41",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-11",
        "name": "JP-11",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-25",
        "name": "JP-25",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-22",
        "name": "JP-22",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-12",
        "name": "JP-12",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-09",
        "name": "JP-09",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-36",
        "name": "JP-36",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-13",
        "name": "JP-13",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-31",
        "name": "JP-31",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-16",
        "name": "JP-16",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-30",
        "name": "JP-30",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-06",
        "name": "JP-06",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-35",
        "name": "JP-35",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      },
      {
        "code": "JP-19",
        "name": "JP-19",
        "districts": [],
        "coordinates": {
          "latitude": 36,
          "longitude": 138
        }
      }
    ]
  },
  {
    "code": "JE",
    "name": "Jersey",
    "regions": [
      "Europe",
      "Northern Europe"
    ],
    "coordinates": {
      "latitude": 49.25,
      "longitude": -2.16666666
    },
    "currency": "GBP",
    "timezone": [
      "UTC+01:00"
    ],
    "states": []
  },
  {
    "code": "JO",
    "name": "Jordan",
    "regions": [
      "Asia",
      "Western Asia"
    ],
    "coordinates": {
      "latitude": 31,
      "longitude": 36
    },
    "currency": "JOD",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "JO-AJ",
        "name": "JO-AJ",
        "districts": [],
        "coordinates": {
          "latitude": 31,
          "longitude": 36
        }
      },
      {
        "code": "JO-AQ",
        "name": "JO-AQ",
        "districts": [],
        "coordinates": {
          "latitude": 31,
          "longitude": 36
        }
      },
      {
        "code": "JO-BA",
        "name": "JO-BA",
        "districts": [],
        "coordinates": {
          "latitude": 31,
          "longitude": 36
        }
      },
      {
        "code": "JO-KA",
        "name": "JO-KA",
        "districts": [],
        "coordinates": {
          "latitude": 31,
          "longitude": 36
        }
      },
      {
        "code": "JO-MA",
        "name": "JO-MA",
        "districts": [],
        "coordinates": {
          "latitude": 31,
          "longitude": 36
        }
      },
      {
        "code": "JO-AM",
        "name": "JO-AM",
        "districts": [],
        "coordinates": {
          "latitude": 31,
          "longitude": 36
        }
      },
      {
        "code": "JO-AT",
        "name": "JO-AT",
        "districts": [],
        "coordinates": {
          "latitude": 31,
          "longitude": 36
        }
      },
      {
        "code": "JO-AZ",
        "name": "JO-AZ",
        "districts": [],
        "coordinates": {
          "latitude": 31,
          "longitude": 36
        }
      },
      {
        "code": "JO-IR",
        "name": "JO-IR",
        "districts": [],
        "coordinates": {
          "latitude": 31,
          "longitude": 36
        }
      },
      {
        "code": "JO-JA",
        "name": "JO-JA",
        "districts": [],
        "coordinates": {
          "latitude": 31,
          "longitude": 36
        }
      },
      {
        "code": "JO-MN",
        "name": "JO-MN",
        "districts": [],
        "coordinates": {
          "latitude": 31,
          "longitude": 36
        }
      },
      {
        "code": "JO-MD",
        "name": "JO-MD",
        "districts": [],
        "coordinates": {
          "latitude": 31,
          "longitude": 36
        }
      }
    ]
  },
  {
    "code": "KZ",
    "name": "Kazakhstan",
    "regions": [
      "Asia",
      "Central Asia"
    ],
    "coordinates": {
      "latitude": 48.0196,
      "longitude": 66.9237
    },
    "currency": "KZT",
    "timezone": [
      "UTC+05:00",
      "UTC+06:00"
    ],
    "states": [
      {
        "code": "KZ-ALA",
        "name": "KZ-ALA",
        "districts": [],
        "coordinates": {
          "latitude": 48.0196,
          "longitude": 66.9237
        }
      },
      {
        "code": "KZ-BAY",
        "name": "KZ-BAY",
        "districts": [],
        "coordinates": {
          "latitude": 48.0196,
          "longitude": 66.9237
        }
      },
      {
        "code": "KZ-ALM",
        "name": "KZ-ALM",
        "districts": [],
        "coordinates": {
          "latitude": 48.0196,
          "longitude": 66.9237
        }
      },
      {
        "code": "KZ-AKM",
        "name": "KZ-AKM",
        "districts": [],
        "coordinates": {
          "latitude": 48.0196,
          "longitude": 66.9237
        }
      },
      {
        "code": "KZ-AKT",
        "name": "KZ-AKT",
        "districts": [],
        "coordinates": {
          "latitude": 48.0196,
          "longitude": 66.9237
        }
      },
      {
        "code": "KZ-ATY",
        "name": "KZ-ATY",
        "districts": [],
        "coordinates": {
          "latitude": 48.0196,
          "longitude": 66.9237
        }
      },
      {
        "code": "KZ-ZAP",
        "name": "KZ-ZAP",
        "districts": [],
        "coordinates": {
          "latitude": 48.0196,
          "longitude": 66.9237
        }
      },
      {
        "code": "KZ-MAN",
        "name": "KZ-MAN",
        "districts": [],
        "coordinates": {
          "latitude": 48.0196,
          "longitude": 66.9237
        }
      },
      {
        "code": "KZ-YUZ",
        "name": "KZ-YUZ",
        "districts": [],
        "coordinates": {
          "latitude": 48.0196,
          "longitude": 66.9237
        }
      },
      {
        "code": "KZ-PAV",
        "name": "KZ-PAV",
        "districts": [],
        "coordinates": {
          "latitude": 48.0196,
          "longitude": 66.9237
        }
      },
      {
        "code": "KZ-KAR",
        "name": "KZ-KAR",
        "districts": [],
        "coordinates": {
          "latitude": 48.0196,
          "longitude": 66.9237
        }
      },
      {
        "code": "KZ-KUS",
        "name": "KZ-KUS",
        "districts": [],
        "coordinates": {
          "latitude": 48.0196,
          "longitude": 66.9237
        }
      },
      {
        "code": "KZ-KZY",
        "name": "KZ-KZY",
        "districts": [],
        "coordinates": {
          "latitude": 48.0196,
          "longitude": 66.9237
        }
      },
      {
        "code": "KZ-VOS",
        "name": "KZ-VOS",
        "districts": [],
        "coordinates": {
          "latitude": 48.0196,
          "longitude": 66.9237
        }
      },
      {
        "code": "KZ-SEV",
        "name": "KZ-SEV",
        "districts": [],
        "coordinates": {
          "latitude": 48.0196,
          "longitude": 66.9237
        }
      },
      {
        "code": "KZ-ZHA",
        "name": "KZ-ZHA",
        "districts": [],
        "coordinates": {
          "latitude": 48.0196,
          "longitude": 66.9237
        }
      }
    ]
  },
  {
    "code": "KE",
    "name": "Kenya",
    "regions": [
      "Africa",
      "Eastern Africa"
    ],
    "coordinates": {
      "latitude": 1,
      "longitude": 38
    },
    "currency": "KES",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "KE-110",
        "name": "KE-110",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 38
        }
      },
      {
        "code": "KE-200",
        "name": "KE-200",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 38
        }
      },
      {
        "code": "KE-300",
        "name": "KE-300",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 38
        }
      },
      {
        "code": "KE-400",
        "name": "KE-400",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 38
        }
      },
      {
        "code": "KE-500",
        "name": "KE-500",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 38
        }
      },
      {
        "code": "KE-600",
        "name": "KE-600",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 38
        }
      },
      {
        "code": "KE-700",
        "name": "KE-700",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 38
        }
      },
      {
        "code": "KE-900",
        "name": "KE-900",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 38
        }
      }
    ]
  },
  {
    "code": "KI",
    "name": "Kiribati",
    "regions": [
      "Oceania",
      "Micronesia"
    ],
    "coordinates": {
      "latitude": 1.41666666,
      "longitude": 173
    },
    "currency": "AUD",
    "timezone": [
      "UTC+12:00",
      "UTC+13:00",
      "UTC+14:00"
    ],
    "states": [
      {
        "code": "KI-G",
        "name": "KI-G",
        "districts": [],
        "coordinates": {
          "latitude": 1.41666666,
          "longitude": 173
        }
      },
      {
        "code": "KI-L",
        "name": "KI-L",
        "districts": [],
        "coordinates": {
          "latitude": 1.41666666,
          "longitude": 173
        }
      },
      {
        "code": "KI-P",
        "name": "KI-P",
        "districts": [],
        "coordinates": {
          "latitude": 1.41666666,
          "longitude": 173
        }
      }
    ]
  },
  {
    "code": "XK",
    "name": "Kosovo",
    "regions": [
      "Europe",
      "Southeast Europe"
    ],
    "coordinates": {
      "latitude": 42.666667,
      "longitude": 21.166667
    },
    "currency": "EUR",
    "timezone": [
      "UTC+01:00"
    ],
    "states": []
  },
  {
    "code": "KW",
    "name": "Kuwait",
    "regions": [
      "Asia",
      "Western Asia"
    ],
    "coordinates": {
      "latitude": 29.5,
      "longitude": 45.75
    },
    "currency": "KWD",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "KW-AH",
        "name": "KW-AH",
        "districts": [],
        "coordinates": {
          "latitude": 29.5,
          "longitude": 45.75
        }
      },
      {
        "code": "KW-FA",
        "name": "KW-FA",
        "districts": [],
        "coordinates": {
          "latitude": 29.5,
          "longitude": 45.75
        }
      },
      {
        "code": "KW-JA",
        "name": "KW-JA",
        "districts": [],
        "coordinates": {
          "latitude": 29.5,
          "longitude": 45.75
        }
      },
      {
        "code": "KW-KU",
        "name": "KW-KU",
        "districts": [],
        "coordinates": {
          "latitude": 29.5,
          "longitude": 45.75
        }
      },
      {
        "code": "KW-HA",
        "name": "KW-HA",
        "districts": [],
        "coordinates": {
          "latitude": 29.5,
          "longitude": 45.75
        }
      }
    ]
  },
  {
    "code": "KG",
    "name": "Kyrgyzstan",
    "regions": [
      "Asia",
      "Central Asia"
    ],
    "coordinates": {
      "latitude": 41,
      "longitude": 75
    },
    "currency": "KGS",
    "timezone": [
      "UTC+06:00"
    ],
    "states": [
      {
        "code": "KG-C",
        "name": "KG-C",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 75
        }
      },
      {
        "code": "KG-J",
        "name": "KG-J",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 75
        }
      },
      {
        "code": "KG-N",
        "name": "KG-N",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 75
        }
      },
      {
        "code": "KG-O",
        "name": "KG-O",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 75
        }
      },
      {
        "code": "KG-T",
        "name": "KG-T",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 75
        }
      },
      {
        "code": "KG-Y",
        "name": "KG-Y",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 75
        }
      }
    ]
  },
  {
    "code": "LA",
    "name": "Laos",
    "regions": [
      "Asia",
      "South-Eastern Asia"
    ],
    "coordinates": {
      "latitude": 18,
      "longitude": 105
    },
    "currency": "LAK",
    "timezone": [
      "UTC+07:00"
    ],
    "states": [
      {
        "code": "LA-VT",
        "name": "LA-VT",
        "districts": [],
        "coordinates": {
          "latitude": 18,
          "longitude": 105
        }
      },
      {
        "code": "LA-AT",
        "name": "LA-AT",
        "districts": [],
        "coordinates": {
          "latitude": 18,
          "longitude": 105
        }
      },
      {
        "code": "LA-BK",
        "name": "LA-BK",
        "districts": [],
        "coordinates": {
          "latitude": 18,
          "longitude": 105
        }
      },
      {
        "code": "LA-BL",
        "name": "LA-BL",
        "districts": [],
        "coordinates": {
          "latitude": 18,
          "longitude": 105
        }
      },
      {
        "code": "LA-CH",
        "name": "LA-CH",
        "districts": [],
        "coordinates": {
          "latitude": 18,
          "longitude": 105
        }
      },
      {
        "code": "LA-HO",
        "name": "LA-HO",
        "districts": [],
        "coordinates": {
          "latitude": 18,
          "longitude": 105
        }
      },
      {
        "code": "LA-KH",
        "name": "LA-KH",
        "districts": [],
        "coordinates": {
          "latitude": 18,
          "longitude": 105
        }
      },
      {
        "code": "LA-LM",
        "name": "LA-LM",
        "districts": [],
        "coordinates": {
          "latitude": 18,
          "longitude": 105
        }
      },
      {
        "code": "LA-LP",
        "name": "LA-LP",
        "districts": [],
        "coordinates": {
          "latitude": 18,
          "longitude": 105
        }
      },
      {
        "code": "LA-OU",
        "name": "LA-OU",
        "districts": [],
        "coordinates": {
          "latitude": 18,
          "longitude": 105
        }
      },
      {
        "code": "LA-PH",
        "name": "LA-PH",
        "districts": [],
        "coordinates": {
          "latitude": 18,
          "longitude": 105
        }
      },
      {
        "code": "LA-SL",
        "name": "LA-SL",
        "districts": [],
        "coordinates": {
          "latitude": 18,
          "longitude": 105
        }
      },
      {
        "code": "LA-SV",
        "name": "LA-SV",
        "districts": [],
        "coordinates": {
          "latitude": 18,
          "longitude": 105
        }
      },
      {
        "code": "LA-VI",
        "name": "LA-VI",
        "districts": [],
        "coordinates": {
          "latitude": 18,
          "longitude": 105
        }
      },
      {
        "code": "LA-XA",
        "name": "LA-XA",
        "districts": [],
        "coordinates": {
          "latitude": 18,
          "longitude": 105
        }
      },
      {
        "code": "LA-XE",
        "name": "LA-XE",
        "districts": [],
        "coordinates": {
          "latitude": 18,
          "longitude": 105
        }
      },
      {
        "code": "LA-XI",
        "name": "LA-XI",
        "districts": [],
        "coordinates": {
          "latitude": 18,
          "longitude": 105
        }
      }
    ]
  },
  {
    "code": "LV",
    "name": "Latvia",
    "regions": [
      "Europe",
      "Northern Europe"
    ],
    "coordinates": {
      "latitude": 57,
      "longitude": 25
    },
    "currency": "EUR",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "LV-AI",
        "name": "LV-AI",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-AL",
        "name": "LV-AL",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-BL",
        "name": "LV-BL",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-BU",
        "name": "LV-BU",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-CE",
        "name": "LV-CE",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-DA",
        "name": "LV-DA",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-DO",
        "name": "LV-DO",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-GU",
        "name": "LV-GU",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-JL",
        "name": "LV-JL",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-JK",
        "name": "LV-JK",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-KR",
        "name": "LV-KR",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-KU",
        "name": "LV-KU",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-LM",
        "name": "LV-LM",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-LE",
        "name": "LV-LE",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-LU",
        "name": "LV-LU",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-MA",
        "name": "LV-MA",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-OG",
        "name": "LV-OG",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-PR",
        "name": "LV-PR",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-RE",
        "name": "LV-RE",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-RI",
        "name": "LV-RI",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-SA",
        "name": "LV-SA",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-TA",
        "name": "LV-TA",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-TU",
        "name": "LV-TU",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-VK",
        "name": "LV-VK",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-VM",
        "name": "LV-VM",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-VE",
        "name": "LV-VE",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-DGV",
        "name": "LV-DGV",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-JEL",
        "name": "LV-JEL",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-JUR",
        "name": "LV-JUR",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-LPX",
        "name": "LV-LPX",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-REZ",
        "name": "LV-REZ",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-RIX",
        "name": "LV-RIX",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      },
      {
        "code": "LV-VEN",
        "name": "LV-VEN",
        "districts": [],
        "coordinates": {
          "latitude": 57,
          "longitude": 25
        }
      }
    ]
  },
  {
    "code": "LB",
    "name": "Lebanon",
    "regions": [
      "Asia",
      "Western Asia"
    ],
    "coordinates": {
      "latitude": 33.83333333,
      "longitude": 35.83333333
    },
    "currency": "LBP",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "LB-BA",
        "name": "LB-BA",
        "districts": [],
        "coordinates": {
          "latitude": 33.83333333,
          "longitude": 35.83333333
        }
      },
      {
        "code": "LB-BI",
        "name": "LB-BI",
        "districts": [],
        "coordinates": {
          "latitude": 33.83333333,
          "longitude": 35.83333333
        }
      },
      {
        "code": "LB-JL",
        "name": "LB-JL",
        "districts": [],
        "coordinates": {
          "latitude": 33.83333333,
          "longitude": 35.83333333
        }
      },
      {
        "code": "LB-AS",
        "name": "LB-AS",
        "districts": [],
        "coordinates": {
          "latitude": 33.83333333,
          "longitude": 35.83333333
        }
      },
      {
        "code": "LB-JA",
        "name": "LB-JA",
        "districts": [],
        "coordinates": {
          "latitude": 33.83333333,
          "longitude": 35.83333333
        }
      },
      {
        "code": "LB-NA",
        "name": "LB-NA",
        "districts": [],
        "coordinates": {
          "latitude": 33.83333333,
          "longitude": 35.83333333
        }
      }
    ]
  },
  {
    "code": "LS",
    "name": "Lesotho",
    "regions": [
      "Africa",
      "Southern Africa"
    ],
    "coordinates": {
      "latitude": -29.5,
      "longitude": 28.5
    },
    "currency": "LSL",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "LS-D",
        "name": "LS-D",
        "districts": [],
        "coordinates": {
          "latitude": -29.5,
          "longitude": 28.5
        }
      },
      {
        "code": "LS-B",
        "name": "LS-B",
        "districts": [],
        "coordinates": {
          "latitude": -29.5,
          "longitude": 28.5
        }
      },
      {
        "code": "LS-C",
        "name": "LS-C",
        "districts": [],
        "coordinates": {
          "latitude": -29.5,
          "longitude": 28.5
        }
      },
      {
        "code": "LS-E",
        "name": "LS-E",
        "districts": [],
        "coordinates": {
          "latitude": -29.5,
          "longitude": 28.5
        }
      },
      {
        "code": "LS-A",
        "name": "LS-A",
        "districts": [],
        "coordinates": {
          "latitude": -29.5,
          "longitude": 28.5
        }
      },
      {
        "code": "LS-F",
        "name": "LS-F",
        "districts": [],
        "coordinates": {
          "latitude": -29.5,
          "longitude": 28.5
        }
      },
      {
        "code": "LS-J",
        "name": "LS-J",
        "districts": [],
        "coordinates": {
          "latitude": -29.5,
          "longitude": 28.5
        }
      },
      {
        "code": "LS-H",
        "name": "LS-H",
        "districts": [],
        "coordinates": {
          "latitude": -29.5,
          "longitude": 28.5
        }
      },
      {
        "code": "LS-G",
        "name": "LS-G",
        "districts": [],
        "coordinates": {
          "latitude": -29.5,
          "longitude": 28.5
        }
      },
      {
        "code": "LS-K",
        "name": "LS-K",
        "districts": [],
        "coordinates": {
          "latitude": -29.5,
          "longitude": 28.5
        }
      }
    ]
  },
  {
    "code": "LR",
    "name": "Liberia",
    "regions": [
      "Africa",
      "Western Africa"
    ],
    "coordinates": {
      "latitude": 6.5,
      "longitude": -9.5
    },
    "currency": "LRD",
    "timezone": [
      "UTC"
    ],
    "states": [
      {
        "code": "LR-BM",
        "name": "LR-BM",
        "districts": [],
        "coordinates": {
          "latitude": 6.5,
          "longitude": -9.5
        }
      },
      {
        "code": "LR-BG",
        "name": "LR-BG",
        "districts": [],
        "coordinates": {
          "latitude": 6.5,
          "longitude": -9.5
        }
      },
      {
        "code": "LR-GB",
        "name": "LR-GB",
        "districts": [],
        "coordinates": {
          "latitude": 6.5,
          "longitude": -9.5
        }
      },
      {
        "code": "LR-CM",
        "name": "LR-CM",
        "districts": [],
        "coordinates": {
          "latitude": 6.5,
          "longitude": -9.5
        }
      },
      {
        "code": "LR-GG",
        "name": "LR-GG",
        "districts": [],
        "coordinates": {
          "latitude": 6.5,
          "longitude": -9.5
        }
      },
      {
        "code": "LR-GK",
        "name": "LR-GK",
        "districts": [],
        "coordinates": {
          "latitude": 6.5,
          "longitude": -9.5
        }
      },
      {
        "code": "LR-LO",
        "name": "LR-LO",
        "districts": [],
        "coordinates": {
          "latitude": 6.5,
          "longitude": -9.5
        }
      },
      {
        "code": "LR-MG",
        "name": "LR-MG",
        "districts": [],
        "coordinates": {
          "latitude": 6.5,
          "longitude": -9.5
        }
      },
      {
        "code": "LR-MY",
        "name": "LR-MY",
        "districts": [],
        "coordinates": {
          "latitude": 6.5,
          "longitude": -9.5
        }
      },
      {
        "code": "LR-MO",
        "name": "LR-MO",
        "districts": [],
        "coordinates": {
          "latitude": 6.5,
          "longitude": -9.5
        }
      },
      {
        "code": "LR-NI",
        "name": "LR-NI",
        "districts": [],
        "coordinates": {
          "latitude": 6.5,
          "longitude": -9.5
        }
      },
      {
        "code": "LR-RI",
        "name": "LR-RI",
        "districts": [],
        "coordinates": {
          "latitude": 6.5,
          "longitude": -9.5
        }
      },
      {
        "code": "LR-SI",
        "name": "LR-SI",
        "districts": [],
        "coordinates": {
          "latitude": 6.5,
          "longitude": -9.5
        }
      }
    ]
  },
  {
    "code": "LY",
    "name": "Libya",
    "regions": [
      "Africa",
      "Northern Africa"
    ],
    "coordinates": {
      "latitude": 25,
      "longitude": 17
    },
    "currency": "LYD",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "LY-BU",
        "name": "LY-BU",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 17
        }
      },
      {
        "code": "LY-JA",
        "name": "LY-JA",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 17
        }
      },
      {
        "code": "LY-JG",
        "name": "LY-JG",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 17
        }
      },
      {
        "code": "LY-Ju",
        "name": "LY-Ju",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 17
        }
      },
      {
        "code": "LY-WA",
        "name": "LY-WA",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 17
        }
      },
      {
        "code": "LY-Wu",
        "name": "LY-Wu",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 17
        }
      },
      {
        "code": "LY-ZA",
        "name": "LY-ZA",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 17
        }
      },
      {
        "code": "LY-BA",
        "name": "LY-BA",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 17
        }
      },
      {
        "code": "LY-FA",
        "name": "LY-FA",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 17
        }
      },
      {
        "code": "LY-MI",
        "name": "LY-MI",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 17
        }
      },
      {
        "code": "LY-NA",
        "name": "LY-NA",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 17
        }
      },
      {
        "code": "LY-SF",
        "name": "LY-SF",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 17
        }
      },
      {
        "code": "LY-TB",
        "name": "LY-TB",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 17
        }
      }
    ]
  },
  {
    "code": "LI",
    "name": "Liechtenstein",
    "regions": [
      "Europe",
      "Western Europe"
    ],
    "coordinates": {
      "latitude": 47.26666666,
      "longitude": 9.53333333
    },
    "currency": "CHF",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "LI-LI",
        "name": "LI-LI",
        "districts": [],
        "coordinates": {
          "latitude": 47.26666666,
          "longitude": 9.53333333
        }
      }
    ]
  },
  {
    "code": "LT",
    "name": "Lithuania",
    "regions": [
      "Europe",
      "Northern Europe"
    ],
    "coordinates": {
      "latitude": 56,
      "longitude": 24
    },
    "currency": "EUR",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "LT-AL",
        "name": "LT-AL",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 24
        }
      },
      {
        "code": "LT-KU",
        "name": "LT-KU",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 24
        }
      },
      {
        "code": "LT-KL",
        "name": "LT-KL",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 24
        }
      },
      {
        "code": "LT-MR",
        "name": "LT-MR",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 24
        }
      },
      {
        "code": "LT-PN",
        "name": "LT-PN",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 24
        }
      },
      {
        "code": "LT-SA",
        "name": "LT-SA",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 24
        }
      },
      {
        "code": "LT-TA",
        "name": "LT-TA",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 24
        }
      },
      {
        "code": "LT-TE",
        "name": "LT-TE",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 24
        }
      },
      {
        "code": "LT-UT",
        "name": "LT-UT",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 24
        }
      },
      {
        "code": "LT-VL",
        "name": "LT-VL",
        "districts": [],
        "coordinates": {
          "latitude": 56,
          "longitude": 24
        }
      }
    ]
  },
  {
    "code": "LU",
    "name": "Luxembourg",
    "regions": [
      "Europe",
      "Western Europe"
    ],
    "coordinates": {
      "latitude": 49.75,
      "longitude": 6.16666666
    },
    "currency": "EUR",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "LU-D",
        "name": "LU-D",
        "districts": [],
        "coordinates": {
          "latitude": 49.75,
          "longitude": 6.16666666
        }
      },
      {
        "code": "LU-G",
        "name": "LU-G",
        "districts": [],
        "coordinates": {
          "latitude": 49.75,
          "longitude": 6.16666666
        }
      },
      {
        "code": "LU-L",
        "name": "LU-L",
        "districts": [],
        "coordinates": {
          "latitude": 49.75,
          "longitude": 6.16666666
        }
      }
    ]
  },
  {
    "code": "MO",
    "name": "Macau",
    "regions": [
      "Asia",
      "Eastern Asia"
    ],
    "coordinates": {
      "latitude": 22.16666666,
      "longitude": 113.55
    },
    "currency": "MOP",
    "timezone": [
      "UTC+08:00"
    ],
    "states": [
      {
        "code": "MO-MO",
        "name": "MO-MO",
        "districts": [],
        "coordinates": {
          "latitude": 22.16666666,
          "longitude": 113.55
        }
      }
    ]
  },
  {
    "code": "MG",
    "name": "Madagascar",
    "regions": [
      "Africa",
      "Eastern Africa"
    ],
    "coordinates": {
      "latitude": -20,
      "longitude": 47
    },
    "currency": "MGA",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "MG-T",
        "name": "MG-T",
        "districts": [],
        "coordinates": {
          "latitude": -20,
          "longitude": 47
        }
      },
      {
        "code": "MG-D",
        "name": "MG-D",
        "districts": [],
        "coordinates": {
          "latitude": -20,
          "longitude": 47
        }
      },
      {
        "code": "MG-F",
        "name": "MG-F",
        "districts": [],
        "coordinates": {
          "latitude": -20,
          "longitude": 47
        }
      },
      {
        "code": "MG-M",
        "name": "MG-M",
        "districts": [],
        "coordinates": {
          "latitude": -20,
          "longitude": 47
        }
      },
      {
        "code": "MG-A",
        "name": "MG-A",
        "districts": [],
        "coordinates": {
          "latitude": -20,
          "longitude": 47
        }
      },
      {
        "code": "MG-U",
        "name": "MG-U",
        "districts": [],
        "coordinates": {
          "latitude": -20,
          "longitude": 47
        }
      }
    ]
  },
  {
    "code": "MW",
    "name": "Malawi",
    "regions": [
      "Africa",
      "Eastern Africa"
    ],
    "coordinates": {
      "latitude": -13.5,
      "longitude": 34
    },
    "currency": "MWK",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "MW-C",
        "name": "MW-C",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-DE",
        "name": "MW-DE",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-DO",
        "name": "MW-DO",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-KS",
        "name": "MW-KS",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-LI",
        "name": "MW-LI",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-MC",
        "name": "MW-MC",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-NK",
        "name": "MW-NK",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-NU",
        "name": "MW-NU",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-NI",
        "name": "MW-NI",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-SA",
        "name": "MW-SA",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-N",
        "name": "MW-N",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-CT",
        "name": "MW-CT",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-KR",
        "name": "MW-KR",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-MZ",
        "name": "MW-MZ",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-NB",
        "name": "MW-NB",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-RU",
        "name": "MW-RU",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-S",
        "name": "MW-S",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-BL",
        "name": "MW-BL",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-CK",
        "name": "MW-CK",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-CR",
        "name": "MW-CR",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-MH",
        "name": "MW-MH",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-MG",
        "name": "MW-MG",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-MU",
        "name": "MW-MU",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-MW",
        "name": "MW-MW",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-NS",
        "name": "MW-NS",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-TH",
        "name": "MW-TH",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      },
      {
        "code": "MW-ZO",
        "name": "MW-ZO",
        "districts": [],
        "coordinates": {
          "latitude": -13.5,
          "longitude": 34
        }
      }
    ]
  },
  {
    "code": "MY",
    "name": "Malaysia",
    "regions": [
      "Asia",
      "South-Eastern Asia"
    ],
    "coordinates": {
      "latitude": 2.5,
      "longitude": 112.5
    },
    "currency": "MYR",
    "timezone": [
      "UTC+08:00"
    ],
    "states": [
      {
        "code": "MY-W",
        "name": "MY-W",
        "districts": [],
        "coordinates": {
          "latitude": 2.5,
          "longitude": 112.5
        }
      },
      {
        "code": "MY-L",
        "name": "MY-L",
        "districts": [],
        "coordinates": {
          "latitude": 2.5,
          "longitude": 112.5
        }
      },
      {
        "code": "MY-J",
        "name": "MY-J",
        "districts": [],
        "coordinates": {
          "latitude": 2.5,
          "longitude": 112.5
        }
      },
      {
        "code": "MY-K",
        "name": "MY-K",
        "districts": [],
        "coordinates": {
          "latitude": 2.5,
          "longitude": 112.5
        }
      },
      {
        "code": "MY-D",
        "name": "MY-D",
        "districts": [],
        "coordinates": {
          "latitude": 2.5,
          "longitude": 112.5
        }
      },
      {
        "code": "MY-M",
        "name": "MY-M",
        "districts": [],
        "coordinates": {
          "latitude": 2.5,
          "longitude": 112.5
        }
      },
      {
        "code": "MY-N",
        "name": "MY-N",
        "districts": [],
        "coordinates": {
          "latitude": 2.5,
          "longitude": 112.5
        }
      },
      {
        "code": "MY-C",
        "name": "MY-C",
        "districts": [],
        "coordinates": {
          "latitude": 2.5,
          "longitude": 112.5
        }
      },
      {
        "code": "MY-A",
        "name": "MY-A",
        "districts": [],
        "coordinates": {
          "latitude": 2.5,
          "longitude": 112.5
        }
      },
      {
        "code": "MY-R",
        "name": "MY-R",
        "districts": [],
        "coordinates": {
          "latitude": 2.5,
          "longitude": 112.5
        }
      },
      {
        "code": "MY-P",
        "name": "MY-P",
        "districts": [],
        "coordinates": {
          "latitude": 2.5,
          "longitude": 112.5
        }
      },
      {
        "code": "MY-SA",
        "name": "MY-SA",
        "districts": [],
        "coordinates": {
          "latitude": 2.5,
          "longitude": 112.5
        }
      },
      {
        "code": "MY-SK",
        "name": "MY-SK",
        "districts": [],
        "coordinates": {
          "latitude": 2.5,
          "longitude": 112.5
        }
      },
      {
        "code": "MY-B",
        "name": "MY-B",
        "districts": [],
        "coordinates": {
          "latitude": 2.5,
          "longitude": 112.5
        }
      },
      {
        "code": "MY-T",
        "name": "MY-T",
        "districts": [],
        "coordinates": {
          "latitude": 2.5,
          "longitude": 112.5
        }
      }
    ]
  },
  {
    "code": "MV",
    "name": "Maldives",
    "regions": [
      "Asia",
      "Southern Asia"
    ],
    "coordinates": {
      "latitude": 3.25,
      "longitude": 73
    },
    "currency": "MVR",
    "timezone": [
      "UTC+05:00"
    ],
    "states": [
      {
        "code": "MV-MLE",
        "name": "MV-MLE",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      },
      {
        "code": "MV-02",
        "name": "MV-02",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      },
      {
        "code": "MV-20",
        "name": "MV-20",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      },
      {
        "code": "MV-17",
        "name": "MV-17",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      },
      {
        "code": "MV-14",
        "name": "MV-14",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      },
      {
        "code": "MV-27",
        "name": "MV-27",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      },
      {
        "code": "MV-28",
        "name": "MV-28",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      },
      {
        "code": "MV-29",
        "name": "MV-29",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      },
      {
        "code": "MV-07",
        "name": "MV-07",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      },
      {
        "code": "MV-23",
        "name": "MV-23",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      },
      {
        "code": "MV-26",
        "name": "MV-26",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      },
      {
        "code": "MV-05",
        "name": "MV-05",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      },
      {
        "code": "MV-03",
        "name": "MV-03",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      },
      {
        "code": "MV-12",
        "name": "MV-12",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      },
      {
        "code": "MV-25",
        "name": "MV-25",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      },
      {
        "code": "MV-13",
        "name": "MV-13",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      },
      {
        "code": "MV-01",
        "name": "MV-01",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      },
      {
        "code": "MV-24",
        "name": "MV-24",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      },
      {
        "code": "MV-08",
        "name": "MV-08",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      },
      {
        "code": "MV-04",
        "name": "MV-04",
        "districts": [],
        "coordinates": {
          "latitude": 3.25,
          "longitude": 73
        }
      }
    ]
  },
  {
    "code": "ML",
    "name": "Mali",
    "regions": [
      "Africa",
      "Western Africa"
    ],
    "coordinates": {
      "latitude": 17,
      "longitude": -4
    },
    "currency": "XOF",
    "timezone": [
      "UTC"
    ],
    "states": [
      {
        "code": "ML-BKO",
        "name": "ML-BKO",
        "districts": [],
        "coordinates": {
          "latitude": 17,
          "longitude": -4
        }
      },
      {
        "code": "ML-7",
        "name": "ML-7",
        "districts": [],
        "coordinates": {
          "latitude": 17,
          "longitude": -4
        }
      },
      {
        "code": "ML-1",
        "name": "ML-1",
        "districts": [],
        "coordinates": {
          "latitude": 17,
          "longitude": -4
        }
      },
      {
        "code": "ML-8",
        "name": "ML-8",
        "districts": [],
        "coordinates": {
          "latitude": 17,
          "longitude": -4
        }
      },
      {
        "code": "ML-2",
        "name": "ML-2",
        "districts": [],
        "coordinates": {
          "latitude": 17,
          "longitude": -4
        }
      },
      {
        "code": "ML-5",
        "name": "ML-5",
        "districts": [],
        "coordinates": {
          "latitude": 17,
          "longitude": -4
        }
      },
      {
        "code": "ML-4",
        "name": "ML-4",
        "districts": [],
        "coordinates": {
          "latitude": 17,
          "longitude": -4
        }
      },
      {
        "code": "ML-3",
        "name": "ML-3",
        "districts": [],
        "coordinates": {
          "latitude": 17,
          "longitude": -4
        }
      },
      {
        "code": "ML-6",
        "name": "ML-6",
        "districts": [],
        "coordinates": {
          "latitude": 17,
          "longitude": -4
        }
      }
    ]
  },
  {
    "code": "MT",
    "name": "Malta",
    "regions": [
      "Europe",
      "Southern Europe"
    ],
    "coordinates": {
      "latitude": 35.9375,
      "longitude": 14.3754
    },
    "currency": "EUR",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "MT-MT",
        "name": "MT-MT",
        "districts": [],
        "coordinates": {
          "latitude": 35.9375,
          "longitude": 14.3754
        }
      }
    ]
  },
  {
    "code": "MH",
    "name": "Marshall Islands",
    "regions": [
      "Oceania",
      "Micronesia"
    ],
    "coordinates": {
      "latitude": 9,
      "longitude": 168
    },
    "currency": "USD",
    "timezone": [
      "UTC+12:00"
    ],
    "states": [
      {
        "code": "MH-L",
        "name": "MH-L",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-ALL",
        "name": "MH-ALL",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-EBO",
        "name": "MH-EBO",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-ENI",
        "name": "MH-ENI",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-JAL",
        "name": "MH-JAL",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-KIL",
        "name": "MH-KIL",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-KWA",
        "name": "MH-KWA",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-LAE",
        "name": "MH-LAE",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-LIB",
        "name": "MH-LIB",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-NMK",
        "name": "MH-NMK",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-NMU",
        "name": "MH-NMU",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-RON",
        "name": "MH-RON",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-UJA",
        "name": "MH-UJA",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-UJL",
        "name": "MH-UJL",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-WTH",
        "name": "MH-WTH",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-T",
        "name": "MH-T",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-ALK",
        "name": "MH-ALK",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-ARN",
        "name": "MH-ARN",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-AUR",
        "name": "MH-AUR",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-LIK",
        "name": "MH-LIK",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-MAJ",
        "name": "MH-MAJ",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-MAL",
        "name": "MH-MAL",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-MEJ",
        "name": "MH-MEJ",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-MIL",
        "name": "MH-MIL",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-UTI",
        "name": "MH-UTI",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      },
      {
        "code": "MH-WTJ",
        "name": "MH-WTJ",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": 168
        }
      }
    ]
  },
  {
    "code": "MQ",
    "name": "Martinique",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 14.666667,
      "longitude": -61
    },
    "currency": "EUR",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "MQ-MQ",
        "name": "MQ-MQ",
        "districts": [],
        "coordinates": {
          "latitude": 14.666667,
          "longitude": -61
        }
      }
    ]
  },
  {
    "code": "MR",
    "name": "Mauritania",
    "regions": [
      "Africa",
      "Western Africa"
    ],
    "coordinates": {
      "latitude": 20,
      "longitude": -12
    },
    "currency": "MRU",
    "timezone": [
      "UTC"
    ],
    "states": [
      {
        "code": "MR-NKC",
        "name": "MR-NKC",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": -12
        }
      },
      {
        "code": "MR-07",
        "name": "MR-07",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": -12
        }
      },
      {
        "code": "MR-03",
        "name": "MR-03",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": -12
        }
      },
      {
        "code": "MR-05",
        "name": "MR-05",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": -12
        }
      },
      {
        "code": "MR-08",
        "name": "MR-08",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": -12
        }
      },
      {
        "code": "MR-04",
        "name": "MR-04",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": -12
        }
      },
      {
        "code": "MR-10",
        "name": "MR-10",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": -12
        }
      },
      {
        "code": "MR-01",
        "name": "MR-01",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": -12
        }
      },
      {
        "code": "MR-02",
        "name": "MR-02",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": -12
        }
      },
      {
        "code": "MR-12",
        "name": "MR-12",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": -12
        }
      },
      {
        "code": "MR-09",
        "name": "MR-09",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": -12
        }
      },
      {
        "code": "MR-11",
        "name": "MR-11",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": -12
        }
      },
      {
        "code": "MR-06",
        "name": "MR-06",
        "districts": [],
        "coordinates": {
          "latitude": 20,
          "longitude": -12
        }
      }
    ]
  },
  {
    "code": "MU",
    "name": "Mauritius",
    "regions": [
      "Africa",
      "Eastern Africa"
    ],
    "coordinates": {
      "latitude": -20.28333333,
      "longitude": 57.55
    },
    "currency": "MUR",
    "timezone": [
      "UTC+04:00"
    ],
    "states": [
      {
        "code": "MU-BR",
        "name": "MU-BR",
        "districts": [],
        "coordinates": {
          "latitude": -20.28333333,
          "longitude": 57.55
        }
      },
      {
        "code": "MU-CU",
        "name": "MU-CU",
        "districts": [],
        "coordinates": {
          "latitude": -20.28333333,
          "longitude": 57.55
        }
      },
      {
        "code": "MU-PL",
        "name": "MU-PL",
        "districts": [],
        "coordinates": {
          "latitude": -20.28333333,
          "longitude": 57.55
        }
      },
      {
        "code": "MU-QB",
        "name": "MU-QB",
        "districts": [],
        "coordinates": {
          "latitude": -20.28333333,
          "longitude": 57.55
        }
      },
      {
        "code": "MU-VP",
        "name": "MU-VP",
        "districts": [],
        "coordinates": {
          "latitude": -20.28333333,
          "longitude": 57.55
        }
      },
      {
        "code": "MU-BL",
        "name": "MU-BL",
        "districts": [],
        "coordinates": {
          "latitude": -20.28333333,
          "longitude": 57.55
        }
      },
      {
        "code": "MU-FL",
        "name": "MU-FL",
        "districts": [],
        "coordinates": {
          "latitude": -20.28333333,
          "longitude": 57.55
        }
      },
      {
        "code": "MU-GP",
        "name": "MU-GP",
        "districts": [],
        "coordinates": {
          "latitude": -20.28333333,
          "longitude": 57.55
        }
      },
      {
        "code": "MU-MO",
        "name": "MU-MO",
        "districts": [],
        "coordinates": {
          "latitude": -20.28333333,
          "longitude": 57.55
        }
      },
      {
        "code": "MU-PA",
        "name": "MU-PA",
        "districts": [],
        "coordinates": {
          "latitude": -20.28333333,
          "longitude": 57.55
        }
      },
      {
        "code": "MU-PW",
        "name": "MU-PW",
        "districts": [],
        "coordinates": {
          "latitude": -20.28333333,
          "longitude": 57.55
        }
      },
      {
        "code": "MU-RR",
        "name": "MU-RR",
        "districts": [],
        "coordinates": {
          "latitude": -20.28333333,
          "longitude": 57.55
        }
      },
      {
        "code": "MU-SA",
        "name": "MU-SA",
        "districts": [],
        "coordinates": {
          "latitude": -20.28333333,
          "longitude": 57.55
        }
      },
      {
        "code": "MU-AG",
        "name": "MU-AG",
        "districts": [],
        "coordinates": {
          "latitude": -20.28333333,
          "longitude": 57.55
        }
      },
      {
        "code": "MU-CC",
        "name": "MU-CC",
        "districts": [],
        "coordinates": {
          "latitude": -20.28333333,
          "longitude": 57.55
        }
      },
      {
        "code": "MU-RO",
        "name": "MU-RO",
        "districts": [],
        "coordinates": {
          "latitude": -20.28333333,
          "longitude": 57.55
        }
      }
    ]
  },
  {
    "code": "YT",
    "name": "Mayotte",
    "regions": [
      "Africa",
      "Eastern Africa"
    ],
    "coordinates": {
      "latitude": -12.83333333,
      "longitude": 45.16666666
    },
    "currency": "EUR",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "YT-YT",
        "name": "YT-YT",
        "districts": [],
        "coordinates": {
          "latitude": -12.83333333,
          "longitude": 45.16666666
        }
      }
    ]
  },
  {
    "code": "MX",
    "name": "Mexico",
    "regions": [
      "Americas",
      "North America"
    ],
    "coordinates": {
      "latitude": 23,
      "longitude": -102
    },
    "currency": "MXN",
    "timezone": [
      "UTC-08:00",
      "UTC-07:00",
      "UTC-06:00"
    ],
    "states": [
      {
        "code": "MX-DIF",
        "name": "MX-DIF",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-AGU",
        "name": "MX-AGU",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-BCN",
        "name": "MX-BCN",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-BCS",
        "name": "MX-BCS",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-CAM",
        "name": "MX-CAM",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-COA",
        "name": "MX-COA",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-COL",
        "name": "MX-COL",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-CHP",
        "name": "MX-CHP",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-CHH",
        "name": "MX-CHH",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-DUR",
        "name": "MX-DUR",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-GRO",
        "name": "MX-GRO",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-GUA",
        "name": "MX-GUA",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-HID",
        "name": "MX-HID",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-JAL",
        "name": "MX-JAL",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-MEX",
        "name": "MX-MEX",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-MIC",
        "name": "MX-MIC",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-MOR",
        "name": "MX-MOR",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-NAY",
        "name": "MX-NAY",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-NLE",
        "name": "MX-NLE",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-OAX",
        "name": "MX-OAX",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-PUE",
        "name": "MX-PUE",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-QUE",
        "name": "MX-QUE",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-ROO",
        "name": "MX-ROO",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-SLP",
        "name": "MX-SLP",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-SIN",
        "name": "MX-SIN",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-SON",
        "name": "MX-SON",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-TAB",
        "name": "MX-TAB",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-TAM",
        "name": "MX-TAM",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-TLA",
        "name": "MX-TLA",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-VER",
        "name": "MX-VER",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-YUC",
        "name": "MX-YUC",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      },
      {
        "code": "MX-ZAC",
        "name": "MX-ZAC",
        "districts": [],
        "coordinates": {
          "latitude": 23,
          "longitude": -102
        }
      }
    ]
  },
  {
    "code": "FM",
    "name": "Micronesia",
    "regions": [
      "Oceania",
      "Micronesia"
    ],
    "coordinates": {
      "latitude": 6.91666666,
      "longitude": 158.25
    },
    "currency": "USD",
    "timezone": [
      "UTC+10:00",
      "UTC+11:00"
    ],
    "states": [
      {
        "code": "FM-TRK",
        "name": "FM-TRK",
        "districts": [],
        "coordinates": {
          "latitude": 6.91666666,
          "longitude": 158.25
        }
      },
      {
        "code": "FM-KSA",
        "name": "FM-KSA",
        "districts": [],
        "coordinates": {
          "latitude": 6.91666666,
          "longitude": 158.25
        }
      },
      {
        "code": "FM-PNI",
        "name": "FM-PNI",
        "districts": [],
        "coordinates": {
          "latitude": 6.91666666,
          "longitude": 158.25
        }
      },
      {
        "code": "FM-YAP",
        "name": "FM-YAP",
        "districts": [],
        "coordinates": {
          "latitude": 6.91666666,
          "longitude": 158.25
        }
      }
    ]
  },
  {
    "code": "MD",
    "name": "Moldova",
    "regions": [
      "Europe",
      "Eastern Europe"
    ],
    "coordinates": {
      "latitude": 47,
      "longitude": 29
    },
    "currency": "MDL",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "MD-BAL",
        "name": "MD-BAL",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-CAH",
        "name": "MD-CAH",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-CHI",
        "name": "MD-CHI",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-DUB",
        "name": "MD-DUB",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-ORH",
        "name": "MD-ORH",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-RIB",
        "name": "MD-RIB",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-SOC",
        "name": "MD-SOC",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-TIG",
        "name": "MD-TIG",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-TIR",
        "name": "MD-TIR",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-UNG",
        "name": "MD-UNG",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-ANE",
        "name": "MD-ANE",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-BAS",
        "name": "MD-BAS",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-BRI",
        "name": "MD-BRI",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-CHL",
        "name": "MD-CHL",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-CAM",
        "name": "MD-CAM",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-CAN",
        "name": "MD-CAN",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-CAI",
        "name": "MD-CAI",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-CAL",
        "name": "MD-CAL",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-CAS",
        "name": "MD-CAS",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-CIA",
        "name": "MD-CIA",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-CIM",
        "name": "MD-CIM",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-COM",
        "name": "MD-COM",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-CRI",
        "name": "MD-CRI",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-DON",
        "name": "MD-DON",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-DRO",
        "name": "MD-DRO",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-DBI",
        "name": "MD-DBI",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-EDI",
        "name": "MD-EDI",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-FAL",
        "name": "MD-FAL",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-FLO",
        "name": "MD-FLO",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-GLO",
        "name": "MD-GLO",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-GRI",
        "name": "MD-GRI",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-HIN",
        "name": "MD-HIN",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-IAL",
        "name": "MD-IAL",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-LEO",
        "name": "MD-LEO",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-NIS",
        "name": "MD-NIS",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-OCN",
        "name": "MD-OCN",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-OHI",
        "name": "MD-OHI",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-REZ",
        "name": "MD-REZ",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-RIT",
        "name": "MD-RIT",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-RIS",
        "name": "MD-RIS",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-SIN",
        "name": "MD-SIN",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-SLO",
        "name": "MD-SLO",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-SOA",
        "name": "MD-SOA",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-STR",
        "name": "MD-STR",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-SOL",
        "name": "MD-SOL",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-STE",
        "name": "MD-STE",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-TAR",
        "name": "MD-TAR",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-TEL",
        "name": "MD-TEL",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-UGI",
        "name": "MD-UGI",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      },
      {
        "code": "MD-VUL",
        "name": "MD-VUL",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 29
        }
      }
    ]
  },
  {
    "code": "MC",
    "name": "Monaco",
    "regions": [
      "Europe",
      "Western Europe"
    ],
    "coordinates": {
      "latitude": 43.73333333,
      "longitude": 7.4
    },
    "currency": "EUR",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "MC-MC",
        "name": "MC-MC",
        "districts": [],
        "coordinates": {
          "latitude": 43.73333333,
          "longitude": 7.4
        }
      }
    ]
  },
  {
    "code": "MN",
    "name": "Mongolia",
    "regions": [
      "Asia",
      "Eastern Asia"
    ],
    "coordinates": {
      "latitude": 46,
      "longitude": 105
    },
    "currency": "MNT",
    "timezone": [
      "UTC+07:00",
      "UTC+08:00"
    ],
    "states": [
      {
        "code": "MN-1",
        "name": "MN-1",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-073",
        "name": "MN-073",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-069",
        "name": "MN-069",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-071",
        "name": "MN-071",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-067",
        "name": "MN-067",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-037",
        "name": "MN-037",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-061",
        "name": "MN-061",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-063",
        "name": "MN-063",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-059",
        "name": "MN-059",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-057",
        "name": "MN-057",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-065",
        "name": "MN-065",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-064",
        "name": "MN-064",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-039",
        "name": "MN-039",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-043",
        "name": "MN-043",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-041",
        "name": "MN-041",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-053",
        "name": "MN-053",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-035",
        "name": "MN-035",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-055",
        "name": "MN-055",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-049",
        "name": "MN-049",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-051",
        "name": "MN-051",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-047",
        "name": "MN-047",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      },
      {
        "code": "MN-046",
        "name": "MN-046",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 105
        }
      }
    ]
  },
  {
    "code": "ME",
    "name": "Montenegro",
    "regions": [
      "Europe",
      "Southeast Europe"
    ],
    "coordinates": {
      "latitude": 42.5,
      "longitude": 19.3
    },
    "currency": "EUR",
    "timezone": [
      "UTC+01:00"
    ],
    "states": []
  },
  {
    "code": "MS",
    "name": "Montserrat",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 16.75,
      "longitude": -62.2
    },
    "currency": "XCD",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "MS-MS",
        "name": "MS-MS",
        "districts": [],
        "coordinates": {
          "latitude": 16.75,
          "longitude": -62.2
        }
      }
    ]
  },
  {
    "code": "MA",
    "name": "Morocco",
    "regions": [
      "Africa",
      "Northern Africa"
    ],
    "coordinates": {
      "latitude": 32,
      "longitude": -5
    },
    "currency": "MAD",
    "timezone": [
      "UTC"
    ],
    "states": [
      {
        "code": "MA-CE",
        "name": "MA-CE",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-AZI",
        "name": "MA-AZI",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-BEM",
        "name": "MA-BEM",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-BES",
        "name": "MA-BES",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-BOM",
        "name": "MA-BOM",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-CAS",
        "name": "MA-CAS",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-JDI",
        "name": "MA-JDI",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-KHO",
        "name": "MA-KHO",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-SET",
        "name": "MA-SET",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-CN",
        "name": "MA-CN",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-HOC",
        "name": "MA-HOC",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-FES",
        "name": "MA-FES",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-SEF",
        "name": "MA-SEF",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-TAO",
        "name": "MA-TAO",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-TAZ",
        "name": "MA-TAZ",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-CS",
        "name": "MA-CS",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-HAJ",
        "name": "MA-HAJ",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-ERR",
        "name": "MA-ERR",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-IFR",
        "name": "MA-IFR",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-KHN",
        "name": "MA-KHN",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-MEK",
        "name": "MA-MEK",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-ES",
        "name": "MA-ES",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-BER",
        "name": "MA-BER",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-FIG",
        "name": "MA-FIG",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-IRA",
        "name": "MA-IRA",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-NAD",
        "name": "MA-NAD",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-OUJ",
        "name": "MA-OUJ",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-NO",
        "name": "MA-NO",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-CHE",
        "name": "MA-CHE",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-KEN",
        "name": "MA-KEN",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-KHE",
        "name": "MA-KHE",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-LAR",
        "name": "MA-LAR",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-RBA",
        "name": "MA-RBA",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-SIK",
        "name": "MA-SIK",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-TNG",
        "name": "MA-TNG",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-TET",
        "name": "MA-TET",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-SU",
        "name": "MA-SU",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-AGD",
        "name": "MA-AGD",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-BAH",
        "name": "MA-BAH",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-MEL",
        "name": "MA-MEL",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-ASZ",
        "name": "MA-ASZ",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-BOD",
        "name": "MA-BOD",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-ESM",
        "name": "MA-ESM",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-GUE",
        "name": "MA-GUE",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-LAA",
        "name": "MA-LAA",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-OUA",
        "name": "MA-OUA",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-OUD",
        "name": "MA-OUD",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-TNT",
        "name": "MA-TNT",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-TAR",
        "name": "MA-TAR",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-TAT",
        "name": "MA-TAT",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-TIZ",
        "name": "MA-TIZ",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-TS",
        "name": "MA-TS",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-HAO",
        "name": "MA-HAO",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-CHI",
        "name": "MA-CHI",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-ESI",
        "name": "MA-ESI",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-KES",
        "name": "MA-KES",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-MAR",
        "name": "MA-MAR",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      },
      {
        "code": "MA-SAF",
        "name": "MA-SAF",
        "districts": [],
        "coordinates": {
          "latitude": 32,
          "longitude": -5
        }
      }
    ]
  },
  {
    "code": "MZ",
    "name": "Mozambique",
    "regions": [
      "Africa",
      "Eastern Africa"
    ],
    "coordinates": {
      "latitude": -18.25,
      "longitude": 35
    },
    "currency": "MZN",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "MZ-MPM",
        "name": "MZ-MPM",
        "districts": [],
        "coordinates": {
          "latitude": -18.25,
          "longitude": 35
        }
      },
      {
        "code": "MZ-P",
        "name": "MZ-P",
        "districts": [],
        "coordinates": {
          "latitude": -18.25,
          "longitude": 35
        }
      },
      {
        "code": "MZ-G",
        "name": "MZ-G",
        "districts": [],
        "coordinates": {
          "latitude": -18.25,
          "longitude": 35
        }
      },
      {
        "code": "MZ-I",
        "name": "MZ-I",
        "districts": [],
        "coordinates": {
          "latitude": -18.25,
          "longitude": 35
        }
      },
      {
        "code": "MZ-B",
        "name": "MZ-B",
        "districts": [],
        "coordinates": {
          "latitude": -18.25,
          "longitude": 35
        }
      },
      {
        "code": "MZ-L",
        "name": "MZ-L",
        "districts": [],
        "coordinates": {
          "latitude": -18.25,
          "longitude": 35
        }
      },
      {
        "code": "MZ-N",
        "name": "MZ-N",
        "districts": [],
        "coordinates": {
          "latitude": -18.25,
          "longitude": 35
        }
      },
      {
        "code": "MZ-A",
        "name": "MZ-A",
        "districts": [],
        "coordinates": {
          "latitude": -18.25,
          "longitude": 35
        }
      },
      {
        "code": "MZ-S",
        "name": "MZ-S",
        "districts": [],
        "coordinates": {
          "latitude": -18.25,
          "longitude": 35
        }
      },
      {
        "code": "MZ-T",
        "name": "MZ-T",
        "districts": [],
        "coordinates": {
          "latitude": -18.25,
          "longitude": 35
        }
      },
      {
        "code": "MZ-Q",
        "name": "MZ-Q",
        "districts": [],
        "coordinates": {
          "latitude": -18.25,
          "longitude": 35
        }
      }
    ]
  },
  {
    "code": "MM",
    "name": "Myanmar",
    "regions": [
      "Asia",
      "South-Eastern Asia"
    ],
    "coordinates": {
      "latitude": 22,
      "longitude": 98
    },
    "currency": "MMK",
    "timezone": [
      "UTC+06:30"
    ],
    "states": [
      {
        "code": "MM-07",
        "name": "MM-07",
        "districts": [],
        "coordinates": {
          "latitude": 22,
          "longitude": 98
        }
      },
      {
        "code": "MM-02",
        "name": "MM-02",
        "districts": [],
        "coordinates": {
          "latitude": 22,
          "longitude": 98
        }
      },
      {
        "code": "MM-03",
        "name": "MM-03",
        "districts": [],
        "coordinates": {
          "latitude": 22,
          "longitude": 98
        }
      },
      {
        "code": "MM-04",
        "name": "MM-04",
        "districts": [],
        "coordinates": {
          "latitude": 22,
          "longitude": 98
        }
      },
      {
        "code": "MM-01",
        "name": "MM-01",
        "districts": [],
        "coordinates": {
          "latitude": 22,
          "longitude": 98
        }
      },
      {
        "code": "MM-05",
        "name": "MM-05",
        "districts": [],
        "coordinates": {
          "latitude": 22,
          "longitude": 98
        }
      },
      {
        "code": "MM-06",
        "name": "MM-06",
        "districts": [],
        "coordinates": {
          "latitude": 22,
          "longitude": 98
        }
      },
      {
        "code": "MM-14",
        "name": "MM-14",
        "districts": [],
        "coordinates": {
          "latitude": 22,
          "longitude": 98
        }
      },
      {
        "code": "MM-11",
        "name": "MM-11",
        "districts": [],
        "coordinates": {
          "latitude": 22,
          "longitude": 98
        }
      },
      {
        "code": "MM-12",
        "name": "MM-12",
        "districts": [],
        "coordinates": {
          "latitude": 22,
          "longitude": 98
        }
      },
      {
        "code": "MM-13",
        "name": "MM-13",
        "districts": [],
        "coordinates": {
          "latitude": 22,
          "longitude": 98
        }
      },
      {
        "code": "MM-15",
        "name": "MM-15",
        "districts": [],
        "coordinates": {
          "latitude": 22,
          "longitude": 98
        }
      },
      {
        "code": "MM-16",
        "name": "MM-16",
        "districts": [],
        "coordinates": {
          "latitude": 22,
          "longitude": 98
        }
      },
      {
        "code": "MM-17",
        "name": "MM-17",
        "districts": [],
        "coordinates": {
          "latitude": 22,
          "longitude": 98
        }
      }
    ]
  },
  {
    "code": "NA",
    "name": "Namibia",
    "regions": [
      "Africa",
      "Southern Africa"
    ],
    "coordinates": {
      "latitude": -22,
      "longitude": 17
    },
    "currency": "NAD",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "NA-CA",
        "name": "NA-CA",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 17
        }
      },
      {
        "code": "NA-ER",
        "name": "NA-ER",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 17
        }
      },
      {
        "code": "NA-HA",
        "name": "NA-HA",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 17
        }
      },
      {
        "code": "NA-KA",
        "name": "NA-KA",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 17
        }
      },
      {
        "code": "NA-KH",
        "name": "NA-KH",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 17
        }
      },
      {
        "code": "NA-KU",
        "name": "NA-KU",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 17
        }
      },
      {
        "code": "NA-OW",
        "name": "NA-OW",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 17
        }
      },
      {
        "code": "NA-OK",
        "name": "NA-OK",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 17
        }
      },
      {
        "code": "NA-OH",
        "name": "NA-OH",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 17
        }
      },
      {
        "code": "NA-OS",
        "name": "NA-OS",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 17
        }
      },
      {
        "code": "NA-ON",
        "name": "NA-ON",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 17
        }
      },
      {
        "code": "NA-OT",
        "name": "NA-OT",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 17
        }
      },
      {
        "code": "NA-OD",
        "name": "NA-OD",
        "districts": [],
        "coordinates": {
          "latitude": -22,
          "longitude": 17
        }
      }
    ]
  },
  {
    "code": "NR",
    "name": "Nauru",
    "regions": [
      "Oceania",
      "Micronesia"
    ],
    "coordinates": {
      "latitude": -0.53333333,
      "longitude": 166.91666666
    },
    "currency": "AUD",
    "timezone": [
      "UTC+12:00"
    ],
    "states": [
      {
        "code": "NR-NR",
        "name": "NR-NR",
        "districts": [],
        "coordinates": {
          "latitude": -0.53333333,
          "longitude": 166.91666666
        }
      }
    ]
  },
  {
    "code": "NP",
    "name": "Nepal",
    "regions": [
      "Asia",
      "Southern Asia"
    ],
    "coordinates": {
      "latitude": 28,
      "longitude": 84
    },
    "currency": "NPR",
    "timezone": [
      "UTC+05:45"
    ],
    "states": [
      {
        "code": "NP-1",
        "name": "NP-1",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 84
        }
      },
      {
        "code": "NP-BA",
        "name": "NP-BA",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 84
        }
      },
      {
        "code": "NP-JA",
        "name": "NP-JA",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 84
        }
      },
      {
        "code": "NP-NA",
        "name": "NP-NA",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 84
        }
      },
      {
        "code": "NP-2",
        "name": "NP-2",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 84
        }
      },
      {
        "code": "NP-BH",
        "name": "NP-BH",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 84
        }
      },
      {
        "code": "NP-KA",
        "name": "NP-KA",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 84
        }
      },
      {
        "code": "NP-RA",
        "name": "NP-RA",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 84
        }
      },
      {
        "code": "NP-3",
        "name": "NP-3",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 84
        }
      },
      {
        "code": "NP-DH",
        "name": "NP-DH",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 84
        }
      },
      {
        "code": "NP-GA",
        "name": "NP-GA",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 84
        }
      },
      {
        "code": "NP-LU",
        "name": "NP-LU",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 84
        }
      },
      {
        "code": "NP-4",
        "name": "NP-4",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 84
        }
      },
      {
        "code": "NP-KO",
        "name": "NP-KO",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 84
        }
      },
      {
        "code": "NP-ME",
        "name": "NP-ME",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 84
        }
      },
      {
        "code": "NP-SA",
        "name": "NP-SA",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 84
        }
      },
      {
        "code": "NP-5",
        "name": "NP-5",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 84
        }
      },
      {
        "code": "NP-MA",
        "name": "NP-MA",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 84
        }
      },
      {
        "code": "NP-SE",
        "name": "NP-SE",
        "districts": [],
        "coordinates": {
          "latitude": 28,
          "longitude": 84
        }
      }
    ]
  },
  {
    "code": "NL",
    "name": "Netherlands",
    "regions": [
      "Europe",
      "Western Europe"
    ],
    "coordinates": {
      "latitude": 52.5,
      "longitude": 5.75
    },
    "currency": "EUR",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "NL-DR",
        "name": "NL-DR",
        "districts": [],
        "coordinates": {
          "latitude": 52.5,
          "longitude": 5.75
        }
      },
      {
        "code": "NL-FL",
        "name": "NL-FL",
        "districts": [],
        "coordinates": {
          "latitude": 52.5,
          "longitude": 5.75
        }
      },
      {
        "code": "NL-FR",
        "name": "NL-FR",
        "districts": [],
        "coordinates": {
          "latitude": 52.5,
          "longitude": 5.75
        }
      },
      {
        "code": "NL-GE",
        "name": "NL-GE",
        "districts": [],
        "coordinates": {
          "latitude": 52.5,
          "longitude": 5.75
        }
      },
      {
        "code": "NL-GR",
        "name": "NL-GR",
        "districts": [],
        "coordinates": {
          "latitude": 52.5,
          "longitude": 5.75
        }
      },
      {
        "code": "NL-LI",
        "name": "NL-LI",
        "districts": [],
        "coordinates": {
          "latitude": 52.5,
          "longitude": 5.75
        }
      },
      {
        "code": "NL-NB",
        "name": "NL-NB",
        "districts": [],
        "coordinates": {
          "latitude": 52.5,
          "longitude": 5.75
        }
      },
      {
        "code": "NL-NH",
        "name": "NL-NH",
        "districts": [],
        "coordinates": {
          "latitude": 52.5,
          "longitude": 5.75
        }
      },
      {
        "code": "NL-OV",
        "name": "NL-OV",
        "districts": [],
        "coordinates": {
          "latitude": 52.5,
          "longitude": 5.75
        }
      },
      {
        "code": "NL-UT",
        "name": "NL-UT",
        "districts": [],
        "coordinates": {
          "latitude": 52.5,
          "longitude": 5.75
        }
      },
      {
        "code": "NL-ZE",
        "name": "NL-ZE",
        "districts": [],
        "coordinates": {
          "latitude": 52.5,
          "longitude": 5.75
        }
      },
      {
        "code": "NL-ZH",
        "name": "NL-ZH",
        "districts": [],
        "coordinates": {
          "latitude": 52.5,
          "longitude": 5.75
        }
      }
    ]
  },
  {
    "code": "NC",
    "name": "New Caledonia",
    "regions": [
      "Oceania",
      "Melanesia"
    ],
    "coordinates": {
      "latitude": -21.5,
      "longitude": 165.5
    },
    "currency": "XPF",
    "timezone": [
      "UTC+11:00"
    ],
    "states": [
      {
        "code": "NC-NC",
        "name": "NC-NC",
        "districts": [],
        "coordinates": {
          "latitude": -21.5,
          "longitude": 165.5
        }
      }
    ]
  },
  {
    "code": "NZ",
    "name": "New Zealand",
    "regions": [
      "Oceania",
      "Australia and New Zealand"
    ],
    "coordinates": {
      "latitude": -41,
      "longitude": 174
    },
    "currency": "NZD",
    "timezone": [
      "UTC-11:00",
      "UTC-10:00",
      "UTC+12:00",
      "UTC+12:45",
      "UTC+13:00"
    ],
    "states": [
      {
        "code": "NZ-N",
        "name": "NZ-N",
        "districts": [],
        "coordinates": {
          "latitude": -41,
          "longitude": 174
        }
      },
      {
        "code": "NZ-AUK",
        "name": "NZ-AUK",
        "districts": [],
        "coordinates": {
          "latitude": -41,
          "longitude": 174
        }
      },
      {
        "code": "NZ-BOP",
        "name": "NZ-BOP",
        "districts": [],
        "coordinates": {
          "latitude": -41,
          "longitude": 174
        }
      },
      {
        "code": "NZ-GIS",
        "name": "NZ-GIS",
        "districts": [],
        "coordinates": {
          "latitude": -41,
          "longitude": 174
        }
      },
      {
        "code": "NZ-HKB",
        "name": "NZ-HKB",
        "districts": [],
        "coordinates": {
          "latitude": -41,
          "longitude": 174
        }
      },
      {
        "code": "NZ-MWT",
        "name": "NZ-MWT",
        "districts": [],
        "coordinates": {
          "latitude": -41,
          "longitude": 174
        }
      },
      {
        "code": "NZ-NTL",
        "name": "NZ-NTL",
        "districts": [],
        "coordinates": {
          "latitude": -41,
          "longitude": 174
        }
      },
      {
        "code": "NZ-TKI",
        "name": "NZ-TKI",
        "districts": [],
        "coordinates": {
          "latitude": -41,
          "longitude": 174
        }
      },
      {
        "code": "NZ-WKO",
        "name": "NZ-WKO",
        "districts": [],
        "coordinates": {
          "latitude": -41,
          "longitude": 174
        }
      },
      {
        "code": "NZ-WGN",
        "name": "NZ-WGN",
        "districts": [],
        "coordinates": {
          "latitude": -41,
          "longitude": 174
        }
      },
      {
        "code": "NZ-S",
        "name": "NZ-S",
        "districts": [],
        "coordinates": {
          "latitude": -41,
          "longitude": 174
        }
      },
      {
        "code": "NZ-CAN",
        "name": "NZ-CAN",
        "districts": [],
        "coordinates": {
          "latitude": -41,
          "longitude": 174
        }
      },
      {
        "code": "NZ-MBH",
        "name": "NZ-MBH",
        "districts": [],
        "coordinates": {
          "latitude": -41,
          "longitude": 174
        }
      },
      {
        "code": "NZ-NSN",
        "name": "NZ-NSN",
        "districts": [],
        "coordinates": {
          "latitude": -41,
          "longitude": 174
        }
      },
      {
        "code": "NZ-OTA",
        "name": "NZ-OTA",
        "districts": [],
        "coordinates": {
          "latitude": -41,
          "longitude": 174
        }
      },
      {
        "code": "NZ-STL",
        "name": "NZ-STL",
        "districts": [],
        "coordinates": {
          "latitude": -41,
          "longitude": 174
        }
      },
      {
        "code": "NZ-TAS",
        "name": "NZ-TAS",
        "districts": [],
        "coordinates": {
          "latitude": -41,
          "longitude": 174
        }
      },
      {
        "code": "NZ-WTC",
        "name": "NZ-WTC",
        "districts": [],
        "coordinates": {
          "latitude": -41,
          "longitude": 174
        }
      }
    ]
  },
  {
    "code": "NI",
    "name": "Nicaragua",
    "regions": [
      "Americas",
      "Central America"
    ],
    "coordinates": {
      "latitude": 13,
      "longitude": -85
    },
    "currency": "NIO",
    "timezone": [
      "UTC-06:00"
    ],
    "states": [
      {
        "code": "NI-BO",
        "name": "NI-BO",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -85
        }
      },
      {
        "code": "NI-CA",
        "name": "NI-CA",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -85
        }
      },
      {
        "code": "NI-CI",
        "name": "NI-CI",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -85
        }
      },
      {
        "code": "NI-CO",
        "name": "NI-CO",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -85
        }
      },
      {
        "code": "NI-ES",
        "name": "NI-ES",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -85
        }
      },
      {
        "code": "NI-GR",
        "name": "NI-GR",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -85
        }
      },
      {
        "code": "NI-JI",
        "name": "NI-JI",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -85
        }
      },
      {
        "code": "NI-LE",
        "name": "NI-LE",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -85
        }
      },
      {
        "code": "NI-MD",
        "name": "NI-MD",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -85
        }
      },
      {
        "code": "NI-MN",
        "name": "NI-MN",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -85
        }
      },
      {
        "code": "NI-MS",
        "name": "NI-MS",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -85
        }
      },
      {
        "code": "NI-MT",
        "name": "NI-MT",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -85
        }
      },
      {
        "code": "NI-NS",
        "name": "NI-NS",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -85
        }
      },
      {
        "code": "NI-SJ",
        "name": "NI-SJ",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -85
        }
      },
      {
        "code": "NI-RI",
        "name": "NI-RI",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -85
        }
      },
      {
        "code": "NI-ZE",
        "name": "NI-ZE",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": -85
        }
      }
    ]
  },
  {
    "code": "NE",
    "name": "Niger",
    "regions": [
      "Africa",
      "Western Africa"
    ],
    "coordinates": {
      "latitude": 16,
      "longitude": 8
    },
    "currency": "XOF",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "NE-8",
        "name": "NE-8",
        "districts": [],
        "coordinates": {
          "latitude": 16,
          "longitude": 8
        }
      },
      {
        "code": "NE-1",
        "name": "NE-1",
        "districts": [],
        "coordinates": {
          "latitude": 16,
          "longitude": 8
        }
      },
      {
        "code": "NE-2",
        "name": "NE-2",
        "districts": [],
        "coordinates": {
          "latitude": 16,
          "longitude": 8
        }
      },
      {
        "code": "NE-3",
        "name": "NE-3",
        "districts": [],
        "coordinates": {
          "latitude": 16,
          "longitude": 8
        }
      },
      {
        "code": "NE-4",
        "name": "NE-4",
        "districts": [],
        "coordinates": {
          "latitude": 16,
          "longitude": 8
        }
      },
      {
        "code": "NE-5",
        "name": "NE-5",
        "districts": [],
        "coordinates": {
          "latitude": 16,
          "longitude": 8
        }
      },
      {
        "code": "NE-6",
        "name": "NE-6",
        "districts": [],
        "coordinates": {
          "latitude": 16,
          "longitude": 8
        }
      },
      {
        "code": "NE-7",
        "name": "NE-7",
        "districts": [],
        "coordinates": {
          "latitude": 16,
          "longitude": 8
        }
      }
    ]
  },
  {
    "code": "NG",
    "name": "Nigeria",
    "regions": [
      "Africa",
      "Western Africa"
    ],
    "coordinates": {
      "latitude": 10,
      "longitude": 8
    },
    "currency": "NGN",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "NG-FC",
        "name": "NG-FC",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-AB",
        "name": "NG-AB",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-AD",
        "name": "NG-AD",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-AK",
        "name": "NG-AK",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-AN",
        "name": "NG-AN",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-BA",
        "name": "NG-BA",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-BE",
        "name": "NG-BE",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-BO",
        "name": "NG-BO",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-CR",
        "name": "NG-CR",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-DE",
        "name": "NG-DE",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-ED",
        "name": "NG-ED",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-EN",
        "name": "NG-EN",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-IM",
        "name": "NG-IM",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-JI",
        "name": "NG-JI",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-KD",
        "name": "NG-KD",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-KN",
        "name": "NG-KN",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-KT",
        "name": "NG-KT",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-KE",
        "name": "NG-KE",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-KO",
        "name": "NG-KO",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-KW",
        "name": "NG-KW",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-LA",
        "name": "NG-LA",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-NI",
        "name": "NG-NI",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-OG",
        "name": "NG-OG",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-ON",
        "name": "NG-ON",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-OS",
        "name": "NG-OS",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-OY",
        "name": "NG-OY",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-PL",
        "name": "NG-PL",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-RI",
        "name": "NG-RI",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-SO",
        "name": "NG-SO",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-TA",
        "name": "NG-TA",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      },
      {
        "code": "NG-YO",
        "name": "NG-YO",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 8
        }
      }
    ]
  },
  {
    "code": "NU",
    "name": "Niue",
    "regions": [
      "Oceania",
      "Polynesia"
    ],
    "coordinates": {
      "latitude": -19.03333333,
      "longitude": -169.86666666
    },
    "currency": "NZD",
    "timezone": [
      "UTC-11:00"
    ],
    "states": [
      {
        "code": "NU-NU",
        "name": "NU-NU",
        "districts": [],
        "coordinates": {
          "latitude": -19.03333333,
          "longitude": -169.86666666
        }
      }
    ]
  },
  {
    "code": "NF",
    "name": "Norfolk Island",
    "regions": [
      "Oceania",
      "Australia and New Zealand"
    ],
    "coordinates": {
      "latitude": -29.03333333,
      "longitude": 167.95
    },
    "currency": "AUD",
    "timezone": [
      "UTC+11:30"
    ],
    "states": [
      {
        "code": "NF-NF",
        "name": "NF-NF",
        "districts": [],
        "coordinates": {
          "latitude": -29.03333333,
          "longitude": 167.95
        }
      }
    ]
  },
  {
    "code": "KP",
    "name": "North Korea",
    "regions": [
      "Asia",
      "Eastern Asia"
    ],
    "coordinates": {
      "latitude": 40,
      "longitude": 127
    },
    "currency": "KPW",
    "timezone": [
      "UTC+09:00"
    ],
    "states": [
      {
        "code": "KP-KAE",
        "name": "KP-KAE",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 127
        }
      },
      {
        "code": "KP-NAM",
        "name": "KP-NAM",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 127
        }
      },
      {
        "code": "KP-PYO",
        "name": "KP-PYO",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 127
        }
      },
      {
        "code": "KP-CHA",
        "name": "KP-CHA",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 127
        }
      },
      {
        "code": "KP-HAB",
        "name": "KP-HAB",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 127
        }
      },
      {
        "code": "KP-HAN",
        "name": "KP-HAN",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 127
        }
      },
      {
        "code": "KP-HWB",
        "name": "KP-HWB",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 127
        }
      },
      {
        "code": "KP-HWN",
        "name": "KP-HWN",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 127
        }
      },
      {
        "code": "KP-KAN",
        "name": "KP-KAN",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 127
        }
      },
      {
        "code": "KP-PYB",
        "name": "KP-PYB",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 127
        }
      },
      {
        "code": "KP-PYN",
        "name": "KP-PYN",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 127
        }
      },
      {
        "code": "KP-YAN",
        "name": "KP-YAN",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 127
        }
      }
    ]
  },
  {
    "code": "MK",
    "name": "North Macedonia",
    "regions": [
      "Europe",
      "Southeast Europe"
    ],
    "coordinates": {
      "latitude": 41.83333333,
      "longitude": 22
    },
    "currency": "MKD",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "MK-MK",
        "name": "MK-MK",
        "districts": [],
        "coordinates": {
          "latitude": 41.83333333,
          "longitude": 22
        }
      }
    ]
  },
  {
    "code": "MP",
    "name": "Northern Mariana Islands",
    "regions": [
      "Oceania",
      "Micronesia"
    ],
    "coordinates": {
      "latitude": 15.2,
      "longitude": 145.75
    },
    "currency": "USD",
    "timezone": [
      "UTC+10:00"
    ],
    "states": [
      {
        "code": "MP-MP",
        "name": "MP-MP",
        "districts": [],
        "coordinates": {
          "latitude": 15.2,
          "longitude": 145.75
        }
      }
    ]
  },
  {
    "code": "NO",
    "name": "Norway",
    "regions": [
      "Europe",
      "Northern Europe"
    ],
    "coordinates": {
      "latitude": 62,
      "longitude": 10
    },
    "currency": "NOK",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "NO-02",
        "name": "NO-02",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-09",
        "name": "NO-09",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-06",
        "name": "NO-06",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-20",
        "name": "NO-20",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-04",
        "name": "NO-04",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-12",
        "name": "NO-12",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-15",
        "name": "NO-15",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-18",
        "name": "NO-18",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-17",
        "name": "NO-17",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-05",
        "name": "NO-05",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-03",
        "name": "NO-03",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-11",
        "name": "NO-11",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-14",
        "name": "NO-14",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-16",
        "name": "NO-16",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-08",
        "name": "NO-08",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-19",
        "name": "NO-19",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-10",
        "name": "NO-10",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-07",
        "name": "NO-07",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-01",
        "name": "NO-01",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-22",
        "name": "NO-22",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      },
      {
        "code": "NO-21",
        "name": "NO-21",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 10
        }
      }
    ]
  },
  {
    "code": "OM",
    "name": "Oman",
    "regions": [
      "Asia",
      "Western Asia"
    ],
    "coordinates": {
      "latitude": 21,
      "longitude": 57
    },
    "currency": "OMR",
    "timezone": [
      "UTC+04:00"
    ],
    "states": [
      {
        "code": "OM-DA",
        "name": "OM-DA",
        "districts": [],
        "coordinates": {
          "latitude": 21,
          "longitude": 57
        }
      },
      {
        "code": "OM-BA",
        "name": "OM-BA",
        "districts": [],
        "coordinates": {
          "latitude": 21,
          "longitude": 57
        }
      },
      {
        "code": "OM-JA",
        "name": "OM-JA",
        "districts": [],
        "coordinates": {
          "latitude": 21,
          "longitude": 57
        }
      },
      {
        "code": "OM-WU",
        "name": "OM-WU",
        "districts": [],
        "coordinates": {
          "latitude": 21,
          "longitude": 57
        }
      },
      {
        "code": "OM-SH",
        "name": "OM-SH",
        "districts": [],
        "coordinates": {
          "latitude": 21,
          "longitude": 57
        }
      },
      {
        "code": "OM-ZA",
        "name": "OM-ZA",
        "districts": [],
        "coordinates": {
          "latitude": 21,
          "longitude": 57
        }
      },
      {
        "code": "OM-MA",
        "name": "OM-MA",
        "districts": [],
        "coordinates": {
          "latitude": 21,
          "longitude": 57
        }
      },
      {
        "code": "OM-MU",
        "name": "OM-MU",
        "districts": [],
        "coordinates": {
          "latitude": 21,
          "longitude": 57
        }
      }
    ]
  },
  {
    "code": "PK",
    "name": "Pakistan",
    "regions": [
      "Asia",
      "Southern Asia"
    ],
    "coordinates": {
      "latitude": 30,
      "longitude": 70
    },
    "currency": "PKR",
    "timezone": [
      "UTC+05:00"
    ],
    "states": [
      {
        "code": "PK-IS",
        "name": "PK-IS",
        "districts": [],
        "coordinates": {
          "latitude": 30,
          "longitude": 70
        }
      },
      {
        "code": "PK-BA",
        "name": "PK-BA",
        "districts": [],
        "coordinates": {
          "latitude": 30,
          "longitude": 70
        }
      },
      {
        "code": "PK-NW",
        "name": "PK-NW",
        "districts": [],
        "coordinates": {
          "latitude": 30,
          "longitude": 70
        }
      },
      {
        "code": "PK-PB",
        "name": "PK-PB",
        "districts": [],
        "coordinates": {
          "latitude": 30,
          "longitude": 70
        }
      },
      {
        "code": "PK-SD",
        "name": "PK-SD",
        "districts": [],
        "coordinates": {
          "latitude": 30,
          "longitude": 70
        }
      },
      {
        "code": "PK-TA",
        "name": "PK-TA",
        "districts": [],
        "coordinates": {
          "latitude": 30,
          "longitude": 70
        }
      },
      {
        "code": "PK-JK",
        "name": "PK-JK",
        "districts": [],
        "coordinates": {
          "latitude": 30,
          "longitude": 70
        }
      },
      {
        "code": "PK-NA",
        "name": "PK-NA",
        "districts": [],
        "coordinates": {
          "latitude": 30,
          "longitude": 70
        }
      }
    ]
  },
  {
    "code": "PW",
    "name": "Palau",
    "regions": [
      "Oceania",
      "Micronesia"
    ],
    "coordinates": {
      "latitude": 7.5,
      "longitude": 134.5
    },
    "currency": "USD",
    "timezone": [
      "UTC+09:00"
    ],
    "states": [
      {
        "code": "PW-PW",
        "name": "PW-PW",
        "districts": [],
        "coordinates": {
          "latitude": 7.5,
          "longitude": 134.5
        }
      }
    ]
  },
  {
    "code": "PS",
    "name": "Palestine",
    "regions": [
      "Asia",
      "Western Asia"
    ],
    "coordinates": {
      "latitude": 31.9,
      "longitude": 35.2
    },
    "currency": "EGP",
    "timezone": [
      "UTC+02:00"
    ],
    "states": []
  },
  {
    "code": "PA",
    "name": "Panama",
    "regions": [
      "Americas",
      "Central America"
    ],
    "coordinates": {
      "latitude": 9,
      "longitude": -80
    },
    "currency": "PAB",
    "timezone": [
      "UTC-05:00"
    ],
    "states": [
      {
        "code": "PA-1",
        "name": "PA-1",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": -80
        }
      },
      {
        "code": "PA-2",
        "name": "PA-2",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": -80
        }
      },
      {
        "code": "PA-3",
        "name": "PA-3",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": -80
        }
      },
      {
        "code": "PA-4",
        "name": "PA-4",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": -80
        }
      },
      {
        "code": "PA-5",
        "name": "PA-5",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": -80
        }
      },
      {
        "code": "PA-6",
        "name": "PA-6",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": -80
        }
      },
      {
        "code": "PA-7",
        "name": "PA-7",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": -80
        }
      },
      {
        "code": "PA-8",
        "name": "PA-8",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": -80
        }
      },
      {
        "code": "PA-9",
        "name": "PA-9",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": -80
        }
      },
      {
        "code": "PA-0",
        "name": "PA-0",
        "districts": [],
        "coordinates": {
          "latitude": 9,
          "longitude": -80
        }
      }
    ]
  },
  {
    "code": "PG",
    "name": "Papua New Guinea",
    "regions": [
      "Oceania",
      "Melanesia"
    ],
    "coordinates": {
      "latitude": -6,
      "longitude": 147
    },
    "currency": "PGK",
    "timezone": [
      "UTC+10:00"
    ],
    "states": [
      {
        "code": "PG-NCD",
        "name": "PG-NCD",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      },
      {
        "code": "PG-CPM",
        "name": "PG-CPM",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      },
      {
        "code": "PG-CPK",
        "name": "PG-CPK",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      },
      {
        "code": "PG-EHG",
        "name": "PG-EHG",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      },
      {
        "code": "PG-EBR",
        "name": "PG-EBR",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      },
      {
        "code": "PG-ESW",
        "name": "PG-ESW",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      },
      {
        "code": "PG-EPW",
        "name": "PG-EPW",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      },
      {
        "code": "PG-GPK",
        "name": "PG-GPK",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      },
      {
        "code": "PG-MPM",
        "name": "PG-MPM",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      },
      {
        "code": "PG-MRL",
        "name": "PG-MRL",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      },
      {
        "code": "PG-MBA",
        "name": "PG-MBA",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      },
      {
        "code": "PG-MPL",
        "name": "PG-MPL",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      },
      {
        "code": "PG-NIK",
        "name": "PG-NIK",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      },
      {
        "code": "PG-NPP",
        "name": "PG-NPP",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      },
      {
        "code": "PG-NSA",
        "name": "PG-NSA",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      },
      {
        "code": "PG-SAN",
        "name": "PG-SAN",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      },
      {
        "code": "PG-SHM",
        "name": "PG-SHM",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      },
      {
        "code": "PG-WPD",
        "name": "PG-WPD",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      },
      {
        "code": "PG-WHM",
        "name": "PG-WHM",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      },
      {
        "code": "PG-WBK",
        "name": "PG-WBK",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 147
        }
      }
    ]
  },
  {
    "code": "PY",
    "name": "Paraguay",
    "regions": [
      "Americas",
      "South America"
    ],
    "coordinates": {
      "latitude": -23,
      "longitude": -58
    },
    "currency": "PYG",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "PY-ASU",
        "name": "PY-ASU",
        "districts": [],
        "coordinates": {
          "latitude": -23,
          "longitude": -58
        }
      },
      {
        "code": "PY-16",
        "name": "PY-16",
        "districts": [],
        "coordinates": {
          "latitude": -23,
          "longitude": -58
        }
      },
      {
        "code": "PY-10",
        "name": "PY-10",
        "districts": [],
        "coordinates": {
          "latitude": -23,
          "longitude": -58
        }
      },
      {
        "code": "PY-13",
        "name": "PY-13",
        "districts": [],
        "coordinates": {
          "latitude": -23,
          "longitude": -58
        }
      },
      {
        "code": "PY-19",
        "name": "PY-19",
        "districts": [],
        "coordinates": {
          "latitude": -23,
          "longitude": -58
        }
      },
      {
        "code": "PY-5",
        "name": "PY-5",
        "districts": [],
        "coordinates": {
          "latitude": -23,
          "longitude": -58
        }
      },
      {
        "code": "PY-6",
        "name": "PY-6",
        "districts": [],
        "coordinates": {
          "latitude": -23,
          "longitude": -58
        }
      },
      {
        "code": "PY-14",
        "name": "PY-14",
        "districts": [],
        "coordinates": {
          "latitude": -23,
          "longitude": -58
        }
      },
      {
        "code": "PY-11",
        "name": "PY-11",
        "districts": [],
        "coordinates": {
          "latitude": -23,
          "longitude": -58
        }
      },
      {
        "code": "PY-1",
        "name": "PY-1",
        "districts": [],
        "coordinates": {
          "latitude": -23,
          "longitude": -58
        }
      },
      {
        "code": "PY-3",
        "name": "PY-3",
        "districts": [],
        "coordinates": {
          "latitude": -23,
          "longitude": -58
        }
      },
      {
        "code": "PY-4",
        "name": "PY-4",
        "districts": [],
        "coordinates": {
          "latitude": -23,
          "longitude": -58
        }
      },
      {
        "code": "PY-7",
        "name": "PY-7",
        "districts": [],
        "coordinates": {
          "latitude": -23,
          "longitude": -58
        }
      },
      {
        "code": "PY-8",
        "name": "PY-8",
        "districts": [],
        "coordinates": {
          "latitude": -23,
          "longitude": -58
        }
      },
      {
        "code": "PY-12",
        "name": "PY-12",
        "districts": [],
        "coordinates": {
          "latitude": -23,
          "longitude": -58
        }
      },
      {
        "code": "PY-9",
        "name": "PY-9",
        "districts": [],
        "coordinates": {
          "latitude": -23,
          "longitude": -58
        }
      },
      {
        "code": "PY-15",
        "name": "PY-15",
        "districts": [],
        "coordinates": {
          "latitude": -23,
          "longitude": -58
        }
      },
      {
        "code": "PY-2",
        "name": "PY-2",
        "districts": [],
        "coordinates": {
          "latitude": -23,
          "longitude": -58
        }
      }
    ]
  },
  {
    "code": "PE",
    "name": "Peru",
    "regions": [
      "Americas",
      "South America"
    ],
    "coordinates": {
      "latitude": -10,
      "longitude": -76
    },
    "currency": "PEN",
    "timezone": [
      "UTC-05:00"
    ],
    "states": [
      {
        "code": "PE-CAL",
        "name": "PE-CAL",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-AMA",
        "name": "PE-AMA",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-ANC",
        "name": "PE-ANC",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-APU",
        "name": "PE-APU",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-ARE",
        "name": "PE-ARE",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-AYA",
        "name": "PE-AYA",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-CAJ",
        "name": "PE-CAJ",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-CUS",
        "name": "PE-CUS",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-HUV",
        "name": "PE-HUV",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-HUC",
        "name": "PE-HUC",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-ICA",
        "name": "PE-ICA",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-JUN",
        "name": "PE-JUN",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-LAL",
        "name": "PE-LAL",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-LAM",
        "name": "PE-LAM",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-LIM",
        "name": "PE-LIM",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-LOR",
        "name": "PE-LOR",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-MDD",
        "name": "PE-MDD",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-MOQ",
        "name": "PE-MOQ",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-PAS",
        "name": "PE-PAS",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-PIU",
        "name": "PE-PIU",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-PUN",
        "name": "PE-PUN",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-SAM",
        "name": "PE-SAM",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-TAC",
        "name": "PE-TAC",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-TUM",
        "name": "PE-TUM",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      },
      {
        "code": "PE-UCA",
        "name": "PE-UCA",
        "districts": [],
        "coordinates": {
          "latitude": -10,
          "longitude": -76
        }
      }
    ]
  },
  {
    "code": "PH",
    "name": "Philippines",
    "regions": [
      "Asia",
      "South-Eastern Asia"
    ],
    "coordinates": {
      "latitude": 13,
      "longitude": 122
    },
    "currency": "PHP",
    "timezone": [
      "UTC+08:00"
    ],
    "states": [
      {
        "code": "PH-PH",
        "name": "PH-PH",
        "districts": [],
        "coordinates": {
          "latitude": 13,
          "longitude": 122
        }
      }
    ]
  },
  {
    "code": "PN",
    "name": "Pitcairn Islands",
    "regions": [
      "Oceania",
      "Polynesia"
    ],
    "coordinates": {
      "latitude": -25.06666666,
      "longitude": -130.1
    },
    "currency": "NZD",
    "timezone": [
      "UTC-08:00"
    ],
    "states": [
      {
        "code": "PN-PN",
        "name": "PN-PN",
        "districts": [],
        "coordinates": {
          "latitude": -25.06666666,
          "longitude": -130.1
        }
      }
    ]
  },
  {
    "code": "PL",
    "name": "Poland",
    "regions": [
      "Europe",
      "Central Europe"
    ],
    "coordinates": {
      "latitude": 52,
      "longitude": 20
    },
    "currency": "PLN",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "PL-BP",
        "name": "PL-BP",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-BK",
        "name": "PL-BK",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-BB",
        "name": "PL-BB",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-BY",
        "name": "PL-BY",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-CH",
        "name": "PL-CH",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-CI",
        "name": "PL-CI",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-CZ",
        "name": "PL-CZ",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-EL",
        "name": "PL-EL",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-GD",
        "name": "PL-GD",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-GO",
        "name": "PL-GO",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-JG",
        "name": "PL-JG",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-KL",
        "name": "PL-KL",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-KA",
        "name": "PL-KA",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-KI",
        "name": "PL-KI",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-KN",
        "name": "PL-KN",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-KO",
        "name": "PL-KO",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-KR",
        "name": "PL-KR",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-KS",
        "name": "PL-KS",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-LG",
        "name": "PL-LG",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-LE",
        "name": "PL-LE",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-LU",
        "name": "PL-LU",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-LO",
        "name": "PL-LO",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-LD",
        "name": "PL-LD",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-NS",
        "name": "PL-NS",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-OL",
        "name": "PL-OL",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-OP",
        "name": "PL-OP",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-OS",
        "name": "PL-OS",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-PI",
        "name": "PL-PI",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-PT",
        "name": "PL-PT",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-PL",
        "name": "PL-PL",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-PO",
        "name": "PL-PO",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-PR",
        "name": "PL-PR",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-RA",
        "name": "PL-RA",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-RZ",
        "name": "PL-RZ",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-SE",
        "name": "PL-SE",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-SI",
        "name": "PL-SI",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-SK",
        "name": "PL-SK",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-SL",
        "name": "PL-SL",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-SU",
        "name": "PL-SU",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-SZ",
        "name": "PL-SZ",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-TG",
        "name": "PL-TG",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-TA",
        "name": "PL-TA",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-TO",
        "name": "PL-TO",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-WB",
        "name": "PL-WB",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-WA",
        "name": "PL-WA",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-WL",
        "name": "PL-WL",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-WR",
        "name": "PL-WR",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-ZA",
        "name": "PL-ZA",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      },
      {
        "code": "PL-ZG",
        "name": "PL-ZG",
        "districts": [],
        "coordinates": {
          "latitude": 52,
          "longitude": 20
        }
      }
    ]
  },
  {
    "code": "PT",
    "name": "Portugal",
    "regions": [
      "Europe",
      "Southern Europe"
    ],
    "coordinates": {
      "latitude": 39.5,
      "longitude": -8
    },
    "currency": "EUR",
    "timezone": [
      "UTC-01:00",
      "UTC"
    ],
    "states": [
      {
        "code": "PT-01",
        "name": "PT-01",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      },
      {
        "code": "PT-02",
        "name": "PT-02",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      },
      {
        "code": "PT-03",
        "name": "PT-03",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      },
      {
        "code": "PT-04",
        "name": "PT-04",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      },
      {
        "code": "PT-05",
        "name": "PT-05",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      },
      {
        "code": "PT-06",
        "name": "PT-06",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      },
      {
        "code": "PT-07",
        "name": "PT-07",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      },
      {
        "code": "PT-08",
        "name": "PT-08",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      },
      {
        "code": "PT-09",
        "name": "PT-09",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      },
      {
        "code": "PT-10",
        "name": "PT-10",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      },
      {
        "code": "PT-11",
        "name": "PT-11",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      },
      {
        "code": "PT-12",
        "name": "PT-12",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      },
      {
        "code": "PT-13",
        "name": "PT-13",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      },
      {
        "code": "PT-14",
        "name": "PT-14",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      },
      {
        "code": "PT-15",
        "name": "PT-15",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      },
      {
        "code": "PT-16",
        "name": "PT-16",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      },
      {
        "code": "PT-17",
        "name": "PT-17",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      },
      {
        "code": "PT-18",
        "name": "PT-18",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      },
      {
        "code": "PT-20",
        "name": "PT-20",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      },
      {
        "code": "PT-30",
        "name": "PT-30",
        "districts": [],
        "coordinates": {
          "latitude": 39.5,
          "longitude": -8
        }
      }
    ]
  },
  {
    "code": "PR",
    "name": "Puerto Rico",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 18.25,
      "longitude": -66.5
    },
    "currency": "USD",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "PR-PR",
        "name": "PR-PR",
        "districts": [],
        "coordinates": {
          "latitude": 18.25,
          "longitude": -66.5
        }
      }
    ]
  },
  {
    "code": "QA",
    "name": "Qatar",
    "regions": [
      "Asia",
      "Western Asia"
    ],
    "coordinates": {
      "latitude": 25.5,
      "longitude": 51.25
    },
    "currency": "QAR",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "QA-DA",
        "name": "QA-DA",
        "districts": [],
        "coordinates": {
          "latitude": 25.5,
          "longitude": 51.25
        }
      },
      {
        "code": "QA-GH",
        "name": "QA-GH",
        "districts": [],
        "coordinates": {
          "latitude": 25.5,
          "longitude": 51.25
        }
      },
      {
        "code": "QA-JU",
        "name": "QA-JU",
        "districts": [],
        "coordinates": {
          "latitude": 25.5,
          "longitude": 51.25
        }
      },
      {
        "code": "QA-KH",
        "name": "QA-KH",
        "districts": [],
        "coordinates": {
          "latitude": 25.5,
          "longitude": 51.25
        }
      },
      {
        "code": "QA-WA",
        "name": "QA-WA",
        "districts": [],
        "coordinates": {
          "latitude": 25.5,
          "longitude": 51.25
        }
      },
      {
        "code": "QA-RA",
        "name": "QA-RA",
        "districts": [],
        "coordinates": {
          "latitude": 25.5,
          "longitude": 51.25
        }
      },
      {
        "code": "QA-JB",
        "name": "QA-JB",
        "districts": [],
        "coordinates": {
          "latitude": 25.5,
          "longitude": 51.25
        }
      },
      {
        "code": "QA-MS",
        "name": "QA-MS",
        "districts": [],
        "coordinates": {
          "latitude": 25.5,
          "longitude": 51.25
        }
      },
      {
        "code": "QA-US",
        "name": "QA-US",
        "districts": [],
        "coordinates": {
          "latitude": 25.5,
          "longitude": 51.25
        }
      }
    ]
  },
  {
    "code": "CG",
    "name": "Republic of the Congo",
    "regions": [
      "Africa",
      "Middle Africa"
    ],
    "coordinates": {
      "latitude": -1,
      "longitude": 15
    },
    "currency": "XAF",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "CG-BZV",
        "name": "CG-BZV",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 15
        }
      },
      {
        "code": "CG-11",
        "name": "CG-11",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 15
        }
      },
      {
        "code": "CG-8",
        "name": "CG-8",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 15
        }
      },
      {
        "code": "CG-15",
        "name": "CG-15",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 15
        }
      },
      {
        "code": "CG-5",
        "name": "CG-5",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 15
        }
      },
      {
        "code": "CG-2",
        "name": "CG-2",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 15
        }
      },
      {
        "code": "CG-7",
        "name": "CG-7",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 15
        }
      },
      {
        "code": "CG-9",
        "name": "CG-9",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 15
        }
      },
      {
        "code": "CG-14",
        "name": "CG-14",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 15
        }
      },
      {
        "code": "CG-12",
        "name": "CG-12",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 15
        }
      },
      {
        "code": "CG-13",
        "name": "CG-13",
        "districts": [],
        "coordinates": {
          "latitude": -1,
          "longitude": 15
        }
      }
    ]
  },
  {
    "code": "RE",
    "name": "Réunion",
    "regions": [
      "Africa",
      "Eastern Africa"
    ],
    "coordinates": {
      "latitude": -21.15,
      "longitude": 55.5
    },
    "currency": "EUR",
    "timezone": [
      "UTC+04:00"
    ],
    "states": [
      {
        "code": "RE-RE",
        "name": "RE-RE",
        "districts": [],
        "coordinates": {
          "latitude": -21.15,
          "longitude": 55.5
        }
      }
    ]
  },
  {
    "code": "RO",
    "name": "Romania",
    "regions": [
      "Europe",
      "Southeast Europe"
    ],
    "coordinates": {
      "latitude": 46,
      "longitude": 25
    },
    "currency": "RON",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "RO-B",
        "name": "RO-B",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-AB",
        "name": "RO-AB",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-AR",
        "name": "RO-AR",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-AG",
        "name": "RO-AG",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-BC",
        "name": "RO-BC",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-BH",
        "name": "RO-BH",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-BN",
        "name": "RO-BN",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-BT",
        "name": "RO-BT",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-BV",
        "name": "RO-BV",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-BR",
        "name": "RO-BR",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-BZ",
        "name": "RO-BZ",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-CS",
        "name": "RO-CS",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-CL",
        "name": "RO-CL",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-CJ",
        "name": "RO-CJ",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-CT",
        "name": "RO-CT",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-CV",
        "name": "RO-CV",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-DB",
        "name": "RO-DB",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-DJ",
        "name": "RO-DJ",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-GL",
        "name": "RO-GL",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-GR",
        "name": "RO-GR",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-GJ",
        "name": "RO-GJ",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-HR",
        "name": "RO-HR",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-HD",
        "name": "RO-HD",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-IL",
        "name": "RO-IL",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-IS",
        "name": "RO-IS",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-MM",
        "name": "RO-MM",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-MH",
        "name": "RO-MH",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-MS",
        "name": "RO-MS",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-NT",
        "name": "RO-NT",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-OT",
        "name": "RO-OT",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-PH",
        "name": "RO-PH",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-SM",
        "name": "RO-SM",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-SJ",
        "name": "RO-SJ",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-SB",
        "name": "RO-SB",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-SV",
        "name": "RO-SV",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-TR",
        "name": "RO-TR",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-TM",
        "name": "RO-TM",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-TL",
        "name": "RO-TL",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-VS",
        "name": "RO-VS",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-VL",
        "name": "RO-VL",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      },
      {
        "code": "RO-VN",
        "name": "RO-VN",
        "districts": [],
        "coordinates": {
          "latitude": 46,
          "longitude": 25
        }
      }
    ]
  },
  {
    "code": "RU",
    "name": "Russia",
    "regions": [
      "Europe",
      "Eastern Europe"
    ],
    "coordinates": {
      "latitude": 60,
      "longitude": 100
    },
    "currency": "RUB",
    "timezone": [
      "UTC+03:00",
      "UTC+04:00",
      "UTC+06:00",
      "UTC+07:00",
      "UTC+08:00",
      "UTC+09:00",
      "UTC+10:00",
      "UTC+11:00",
      "UTC+12:00"
    ],
    "states": [
      {
        "code": "RU-AD",
        "name": "RU-AD",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-AL",
        "name": "RU-AL",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-BA",
        "name": "RU-BA",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-BU",
        "name": "RU-BU",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-CE",
        "name": "RU-CE",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-CU",
        "name": "RU-CU",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-DA",
        "name": "RU-DA",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-IN",
        "name": "RU-IN",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KB",
        "name": "RU-KB",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KL",
        "name": "RU-KL",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KC",
        "name": "RU-KC",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KR",
        "name": "RU-KR",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KK",
        "name": "RU-KK",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KO",
        "name": "RU-KO",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-ME",
        "name": "RU-ME",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-MO",
        "name": "RU-MO",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-SA",
        "name": "RU-SA",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-SE",
        "name": "RU-SE",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-TA",
        "name": "RU-TA",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-TY",
        "name": "RU-TY",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-UD",
        "name": "RU-UD",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-ALT",
        "name": "RU-ALT",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KHA",
        "name": "RU-KHA",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KDA",
        "name": "RU-KDA",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KYA",
        "name": "RU-KYA",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-PRI",
        "name": "RU-PRI",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-STA",
        "name": "RU-STA",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-AMU",
        "name": "RU-AMU",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-ARK",
        "name": "RU-ARK",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-AST",
        "name": "RU-AST",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-BEL",
        "name": "RU-BEL",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-BRY",
        "name": "RU-BRY",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-CHE",
        "name": "RU-CHE",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-CHI",
        "name": "RU-CHI",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-IRK",
        "name": "RU-IRK",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-IVA",
        "name": "RU-IVA",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KGD",
        "name": "RU-KGD",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KLU",
        "name": "RU-KLU",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KAM",
        "name": "RU-KAM",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KEM",
        "name": "RU-KEM",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KIR",
        "name": "RU-KIR",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KOS",
        "name": "RU-KOS",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KGN",
        "name": "RU-KGN",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KRS",
        "name": "RU-KRS",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-LEN",
        "name": "RU-LEN",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-LIP",
        "name": "RU-LIP",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-MAG",
        "name": "RU-MAG",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-MOS",
        "name": "RU-MOS",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-MUR",
        "name": "RU-MUR",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-NIZ",
        "name": "RU-NIZ",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-NGR",
        "name": "RU-NGR",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-NVS",
        "name": "RU-NVS",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-OMS",
        "name": "RU-OMS",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-ORE",
        "name": "RU-ORE",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-ORL",
        "name": "RU-ORL",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-PNZ",
        "name": "RU-PNZ",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-PER",
        "name": "RU-PER",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-PSK",
        "name": "RU-PSK",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-ROS",
        "name": "RU-ROS",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-RYA",
        "name": "RU-RYA",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-SAK",
        "name": "RU-SAK",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-SAM",
        "name": "RU-SAM",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-SAR",
        "name": "RU-SAR",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-SMO",
        "name": "RU-SMO",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-SVE",
        "name": "RU-SVE",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-TAM",
        "name": "RU-TAM",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-TOM",
        "name": "RU-TOM",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-TUL",
        "name": "RU-TUL",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-TVE",
        "name": "RU-TVE",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-TYU",
        "name": "RU-TYU",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-ULY",
        "name": "RU-ULY",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-VLA",
        "name": "RU-VLA",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-VGG",
        "name": "RU-VGG",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-VLG",
        "name": "RU-VLG",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-VOR",
        "name": "RU-VOR",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-YAR",
        "name": "RU-YAR",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-MOW",
        "name": "RU-MOW",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-SPE",
        "name": "RU-SPE",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-YEV",
        "name": "RU-YEV",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-AGB",
        "name": "RU-AGB",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-CHU",
        "name": "RU-CHU",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-EVE",
        "name": "RU-EVE",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KHM",
        "name": "RU-KHM",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KOP",
        "name": "RU-KOP",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-KOR",
        "name": "RU-KOR",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-NEN",
        "name": "RU-NEN",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-TAY",
        "name": "RU-TAY",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-UOB",
        "name": "RU-UOB",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      },
      {
        "code": "RU-YAN",
        "name": "RU-YAN",
        "districts": [],
        "coordinates": {
          "latitude": 60,
          "longitude": 100
        }
      }
    ]
  },
  {
    "code": "RW",
    "name": "Rwanda",
    "regions": [
      "Africa",
      "Eastern Africa"
    ],
    "coordinates": {
      "latitude": -2,
      "longitude": 30
    },
    "currency": "RWF",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "RW-C",
        "name": "RW-C",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": 30
        }
      },
      {
        "code": "RW-I",
        "name": "RW-I",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": 30
        }
      },
      {
        "code": "RW-E",
        "name": "RW-E",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": 30
        }
      },
      {
        "code": "RW-D",
        "name": "RW-D",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": 30
        }
      },
      {
        "code": "RW-G",
        "name": "RW-G",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": 30
        }
      },
      {
        "code": "RW-B",
        "name": "RW-B",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": 30
        }
      },
      {
        "code": "RW-J",
        "name": "RW-J",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": 30
        }
      },
      {
        "code": "RW-F",
        "name": "RW-F",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": 30
        }
      },
      {
        "code": "RW-K",
        "name": "RW-K",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": 30
        }
      },
      {
        "code": "RW-L",
        "name": "RW-L",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": 30
        }
      },
      {
        "code": "RW-M",
        "name": "RW-M",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": 30
        }
      },
      {
        "code": "RW-H",
        "name": "RW-H",
        "districts": [],
        "coordinates": {
          "latitude": -2,
          "longitude": 30
        }
      }
    ]
  },
  {
    "code": "BL",
    "name": "Saint Barthélemy",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 18.5,
      "longitude": -63.41666666
    },
    "currency": "EUR",
    "timezone": [
      "UTC-04:00"
    ],
    "states": []
  },
  {
    "code": "SH",
    "name": "Saint Helena, Ascension and Tristan da Cunha",
    "regions": [
      "Africa",
      "Western Africa"
    ],
    "coordinates": {
      "latitude": -15.95,
      "longitude": -5.72
    },
    "currency": "GBP",
    "timezone": [
      "UTC+00:00"
    ],
    "states": [
      {
        "code": "SH-SH",
        "name": "SH-SH",
        "districts": [],
        "coordinates": {
          "latitude": -15.95,
          "longitude": -5.72
        }
      },
      {
        "code": "SH-AC",
        "name": "SH-AC",
        "districts": [],
        "coordinates": {
          "latitude": -15.95,
          "longitude": -5.72
        }
      },
      {
        "code": "SH-TA",
        "name": "SH-TA",
        "districts": [],
        "coordinates": {
          "latitude": -15.95,
          "longitude": -5.72
        }
      }
    ]
  },
  {
    "code": "KN",
    "name": "Saint Kitts and Nevis",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 17.33333333,
      "longitude": -62.75
    },
    "currency": "XCD",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "KN-KN",
        "name": "KN-KN",
        "districts": [],
        "coordinates": {
          "latitude": 17.33333333,
          "longitude": -62.75
        }
      }
    ]
  },
  {
    "code": "LC",
    "name": "Saint Lucia",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 13.88333333,
      "longitude": -60.96666666
    },
    "currency": "XCD",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "LC-LC",
        "name": "LC-LC",
        "districts": [],
        "coordinates": {
          "latitude": 13.88333333,
          "longitude": -60.96666666
        }
      }
    ]
  },
  {
    "code": "MF",
    "name": "Saint Martin",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 18.0708,
      "longitude": -63.0501
    },
    "currency": "EUR",
    "timezone": [
      "UTC-04:00"
    ],
    "states": []
  },
  {
    "code": "PM",
    "name": "Saint Pierre and Miquelon",
    "regions": [
      "Americas",
      "North America"
    ],
    "coordinates": {
      "latitude": 46.83333333,
      "longitude": -56.33333333
    },
    "currency": "EUR",
    "timezone": [
      "UTC-03:00"
    ],
    "states": [
      {
        "code": "PM-PM",
        "name": "PM-PM",
        "districts": [],
        "coordinates": {
          "latitude": 46.83333333,
          "longitude": -56.33333333
        }
      }
    ]
  },
  {
    "code": "VC",
    "name": "Saint Vincent and the Grenadines",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 13.25,
      "longitude": -61.2
    },
    "currency": "XCD",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "VC-VC",
        "name": "VC-VC",
        "districts": [],
        "coordinates": {
          "latitude": 13.25,
          "longitude": -61.2
        }
      }
    ]
  },
  {
    "code": "WS",
    "name": "Samoa",
    "regions": [
      "Oceania",
      "Polynesia"
    ],
    "coordinates": {
      "latitude": -13.58333333,
      "longitude": -172.33333333
    },
    "currency": "WST",
    "timezone": [
      "UTC+13:00"
    ],
    "states": [
      {
        "code": "WS-AA",
        "name": "WS-AA",
        "districts": [],
        "coordinates": {
          "latitude": -13.58333333,
          "longitude": -172.33333333
        }
      },
      {
        "code": "WS-AL",
        "name": "WS-AL",
        "districts": [],
        "coordinates": {
          "latitude": -13.58333333,
          "longitude": -172.33333333
        }
      },
      {
        "code": "WS-AT",
        "name": "WS-AT",
        "districts": [],
        "coordinates": {
          "latitude": -13.58333333,
          "longitude": -172.33333333
        }
      },
      {
        "code": "WS-FA",
        "name": "WS-FA",
        "districts": [],
        "coordinates": {
          "latitude": -13.58333333,
          "longitude": -172.33333333
        }
      },
      {
        "code": "WS-GE",
        "name": "WS-GE",
        "districts": [],
        "coordinates": {
          "latitude": -13.58333333,
          "longitude": -172.33333333
        }
      },
      {
        "code": "WS-GI",
        "name": "WS-GI",
        "districts": [],
        "coordinates": {
          "latitude": -13.58333333,
          "longitude": -172.33333333
        }
      },
      {
        "code": "WS-PA",
        "name": "WS-PA",
        "districts": [],
        "coordinates": {
          "latitude": -13.58333333,
          "longitude": -172.33333333
        }
      },
      {
        "code": "WS-SA",
        "name": "WS-SA",
        "districts": [],
        "coordinates": {
          "latitude": -13.58333333,
          "longitude": -172.33333333
        }
      },
      {
        "code": "WS-TU",
        "name": "WS-TU",
        "districts": [],
        "coordinates": {
          "latitude": -13.58333333,
          "longitude": -172.33333333
        }
      },
      {
        "code": "WS-VF",
        "name": "WS-VF",
        "districts": [],
        "coordinates": {
          "latitude": -13.58333333,
          "longitude": -172.33333333
        }
      },
      {
        "code": "WS-VS",
        "name": "WS-VS",
        "districts": [],
        "coordinates": {
          "latitude": -13.58333333,
          "longitude": -172.33333333
        }
      }
    ]
  },
  {
    "code": "SM",
    "name": "San Marino",
    "regions": [
      "Europe",
      "Southern Europe"
    ],
    "coordinates": {
      "latitude": 43.76666666,
      "longitude": 12.41666666
    },
    "currency": "EUR",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "SM-SM",
        "name": "SM-SM",
        "districts": [],
        "coordinates": {
          "latitude": 43.76666666,
          "longitude": 12.41666666
        }
      }
    ]
  },
  {
    "code": "ST",
    "name": "São Tomé and Príncipe",
    "regions": [
      "Africa",
      "Middle Africa"
    ],
    "coordinates": {
      "latitude": 1,
      "longitude": 7
    },
    "currency": "STN",
    "timezone": [
      "UTC"
    ],
    "states": [
      {
        "code": "ST-P",
        "name": "ST-P",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 7
        }
      },
      {
        "code": "ST-S",
        "name": "ST-S",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 7
        }
      }
    ]
  },
  {
    "code": "SA",
    "name": "Saudi Arabia",
    "regions": [
      "Asia",
      "Western Asia"
    ],
    "coordinates": {
      "latitude": 25,
      "longitude": 45
    },
    "currency": "SAR",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "SA-11",
        "name": "SA-11",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 45
        }
      },
      {
        "code": "SA-08",
        "name": "SA-08",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 45
        }
      },
      {
        "code": "SA-12",
        "name": "SA-12",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 45
        }
      },
      {
        "code": "SA-03",
        "name": "SA-03",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 45
        }
      },
      {
        "code": "SA-05",
        "name": "SA-05",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 45
        }
      },
      {
        "code": "SA-O1",
        "name": "SA-O1",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 45
        }
      },
      {
        "code": "SA-04",
        "name": "SA-04",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 45
        }
      },
      {
        "code": "SA-14",
        "name": "SA-14",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 45
        }
      },
      {
        "code": "SA-06",
        "name": "SA-06",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 45
        }
      },
      {
        "code": "SA-09",
        "name": "SA-09",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 45
        }
      },
      {
        "code": "SA-02",
        "name": "SA-02",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 45
        }
      },
      {
        "code": "SA-10",
        "name": "SA-10",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 45
        }
      },
      {
        "code": "SA-07",
        "name": "SA-07",
        "districts": [],
        "coordinates": {
          "latitude": 25,
          "longitude": 45
        }
      }
    ]
  },
  {
    "code": "SN",
    "name": "Senegal",
    "regions": [
      "Africa",
      "Western Africa"
    ],
    "coordinates": {
      "latitude": 14,
      "longitude": -14
    },
    "currency": "XOF",
    "timezone": [
      "UTC"
    ],
    "states": [
      {
        "code": "SN-DK",
        "name": "SN-DK",
        "districts": [],
        "coordinates": {
          "latitude": 14,
          "longitude": -14
        }
      },
      {
        "code": "SN-DB",
        "name": "SN-DB",
        "districts": [],
        "coordinates": {
          "latitude": 14,
          "longitude": -14
        }
      },
      {
        "code": "SN-FK",
        "name": "SN-FK",
        "districts": [],
        "coordinates": {
          "latitude": 14,
          "longitude": -14
        }
      },
      {
        "code": "SN-KL",
        "name": "SN-KL",
        "districts": [],
        "coordinates": {
          "latitude": 14,
          "longitude": -14
        }
      },
      {
        "code": "SN-KD",
        "name": "SN-KD",
        "districts": [],
        "coordinates": {
          "latitude": 14,
          "longitude": -14
        }
      },
      {
        "code": "SN-LG",
        "name": "SN-LG",
        "districts": [],
        "coordinates": {
          "latitude": 14,
          "longitude": -14
        }
      },
      {
        "code": "SN-SL",
        "name": "SN-SL",
        "districts": [],
        "coordinates": {
          "latitude": 14,
          "longitude": -14
        }
      },
      {
        "code": "SN-TC",
        "name": "SN-TC",
        "districts": [],
        "coordinates": {
          "latitude": 14,
          "longitude": -14
        }
      },
      {
        "code": "SN-TH",
        "name": "SN-TH",
        "districts": [],
        "coordinates": {
          "latitude": 14,
          "longitude": -14
        }
      },
      {
        "code": "SN-ZG",
        "name": "SN-ZG",
        "districts": [],
        "coordinates": {
          "latitude": 14,
          "longitude": -14
        }
      }
    ]
  },
  {
    "code": "RS",
    "name": "Serbia",
    "regions": [
      "Europe",
      "Southeast Europe"
    ],
    "coordinates": {
      "latitude": 44,
      "longitude": 21
    },
    "currency": "RSD",
    "timezone": [
      "UTC+01:00"
    ],
    "states": []
  },
  {
    "code": "SC",
    "name": "Seychelles",
    "regions": [
      "Africa",
      "Eastern Africa"
    ],
    "coordinates": {
      "latitude": -4.58333333,
      "longitude": 55.66666666
    },
    "currency": "SCR",
    "timezone": [
      "UTC+04:00"
    ],
    "states": [
      {
        "code": "SC-SC",
        "name": "SC-SC",
        "districts": [],
        "coordinates": {
          "latitude": -4.58333333,
          "longitude": 55.66666666
        }
      }
    ]
  },
  {
    "code": "SL",
    "name": "Sierra Leone",
    "regions": [
      "Africa",
      "Western Africa"
    ],
    "coordinates": {
      "latitude": 8.5,
      "longitude": -11.5
    },
    "currency": "SLE",
    "timezone": [
      "UTC"
    ],
    "states": [
      {
        "code": "SL-W",
        "name": "SL-W",
        "districts": [],
        "coordinates": {
          "latitude": 8.5,
          "longitude": -11.5
        }
      },
      {
        "code": "SL-E",
        "name": "SL-E",
        "districts": [],
        "coordinates": {
          "latitude": 8.5,
          "longitude": -11.5
        }
      },
      {
        "code": "SL-N",
        "name": "SL-N",
        "districts": [],
        "coordinates": {
          "latitude": 8.5,
          "longitude": -11.5
        }
      },
      {
        "code": "SL-S",
        "name": "SL-S",
        "districts": [],
        "coordinates": {
          "latitude": 8.5,
          "longitude": -11.5
        }
      }
    ]
  },
  {
    "code": "SG",
    "name": "Singapore",
    "regions": [
      "Asia",
      "South-Eastern Asia"
    ],
    "coordinates": {
      "latitude": 1.36666666,
      "longitude": 103.8
    },
    "currency": "SGD",
    "timezone": [
      "UTC+08:00"
    ],
    "states": [
      {
        "code": "SG-SG",
        "name": "SG-SG",
        "districts": [],
        "coordinates": {
          "latitude": 1.36666666,
          "longitude": 103.8
        }
      }
    ]
  },
  {
    "code": "SX",
    "name": "Sint Maarten",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 18.033333,
      "longitude": -63.05
    },
    "currency": "ANG",
    "timezone": [
      "UTC-04:00"
    ],
    "states": []
  },
  {
    "code": "SK",
    "name": "Slovakia",
    "regions": [
      "Europe",
      "Central Europe"
    ],
    "coordinates": {
      "latitude": 48.66666666,
      "longitude": 19.5
    },
    "currency": "EUR",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "SK-BC",
        "name": "SK-BC",
        "districts": [],
        "coordinates": {
          "latitude": 48.66666666,
          "longitude": 19.5
        }
      },
      {
        "code": "SK-BL",
        "name": "SK-BL",
        "districts": [],
        "coordinates": {
          "latitude": 48.66666666,
          "longitude": 19.5
        }
      },
      {
        "code": "SK-KI",
        "name": "SK-KI",
        "districts": [],
        "coordinates": {
          "latitude": 48.66666666,
          "longitude": 19.5
        }
      },
      {
        "code": "SK-NI",
        "name": "SK-NI",
        "districts": [],
        "coordinates": {
          "latitude": 48.66666666,
          "longitude": 19.5
        }
      },
      {
        "code": "SK-PV",
        "name": "SK-PV",
        "districts": [],
        "coordinates": {
          "latitude": 48.66666666,
          "longitude": 19.5
        }
      },
      {
        "code": "SK-TC",
        "name": "SK-TC",
        "districts": [],
        "coordinates": {
          "latitude": 48.66666666,
          "longitude": 19.5
        }
      },
      {
        "code": "SK-TA",
        "name": "SK-TA",
        "districts": [],
        "coordinates": {
          "latitude": 48.66666666,
          "longitude": 19.5
        }
      },
      {
        "code": "SK-ZI",
        "name": "SK-ZI",
        "districts": [],
        "coordinates": {
          "latitude": 48.66666666,
          "longitude": 19.5
        }
      }
    ]
  },
  {
    "code": "SI",
    "name": "Slovenia",
    "regions": [
      "Europe",
      "Central Europe"
    ],
    "coordinates": {
      "latitude": 46.11666666,
      "longitude": 14.81666666
    },
    "currency": "EUR",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "SI-07",
        "name": "SI-07",
        "districts": [],
        "coordinates": {
          "latitude": 46.11666666,
          "longitude": 14.81666666
        }
      },
      {
        "code": "SI-09",
        "name": "SI-09",
        "districts": [],
        "coordinates": {
          "latitude": 46.11666666,
          "longitude": 14.81666666
        }
      },
      {
        "code": "SI-11",
        "name": "SI-11",
        "districts": [],
        "coordinates": {
          "latitude": 46.11666666,
          "longitude": 14.81666666
        }
      },
      {
        "code": "SI-03",
        "name": "SI-03",
        "districts": [],
        "coordinates": {
          "latitude": 46.11666666,
          "longitude": 14.81666666
        }
      },
      {
        "code": "SI-10",
        "name": "SI-10",
        "districts": [],
        "coordinates": {
          "latitude": 46.11666666,
          "longitude": 14.81666666
        }
      },
      {
        "code": "SI-12",
        "name": "SI-12",
        "districts": [],
        "coordinates": {
          "latitude": 46.11666666,
          "longitude": 14.81666666
        }
      },
      {
        "code": "SI-08",
        "name": "SI-08",
        "districts": [],
        "coordinates": {
          "latitude": 46.11666666,
          "longitude": 14.81666666
        }
      },
      {
        "code": "SI-02",
        "name": "SI-02",
        "districts": [],
        "coordinates": {
          "latitude": 46.11666666,
          "longitude": 14.81666666
        }
      },
      {
        "code": "SI-01",
        "name": "SI-01",
        "districts": [],
        "coordinates": {
          "latitude": 46.11666666,
          "longitude": 14.81666666
        }
      },
      {
        "code": "SI-04",
        "name": "SI-04",
        "districts": [],
        "coordinates": {
          "latitude": 46.11666666,
          "longitude": 14.81666666
        }
      },
      {
        "code": "SI-06",
        "name": "SI-06",
        "districts": [],
        "coordinates": {
          "latitude": 46.11666666,
          "longitude": 14.81666666
        }
      },
      {
        "code": "SI-05",
        "name": "SI-05",
        "districts": [],
        "coordinates": {
          "latitude": 46.11666666,
          "longitude": 14.81666666
        }
      }
    ]
  },
  {
    "code": "SB",
    "name": "Solomon Islands",
    "regions": [
      "Oceania",
      "Melanesia"
    ],
    "coordinates": {
      "latitude": -8,
      "longitude": 159
    },
    "currency": "SBD",
    "timezone": [
      "UTC+11:00"
    ],
    "states": [
      {
        "code": "SB-CT",
        "name": "SB-CT",
        "districts": [],
        "coordinates": {
          "latitude": -8,
          "longitude": 159
        }
      },
      {
        "code": "SB-CE",
        "name": "SB-CE",
        "districts": [],
        "coordinates": {
          "latitude": -8,
          "longitude": 159
        }
      },
      {
        "code": "SB-GU",
        "name": "SB-GU",
        "districts": [],
        "coordinates": {
          "latitude": -8,
          "longitude": 159
        }
      },
      {
        "code": "SB-IS",
        "name": "SB-IS",
        "districts": [],
        "coordinates": {
          "latitude": -8,
          "longitude": 159
        }
      },
      {
        "code": "SB-MK",
        "name": "SB-MK",
        "districts": [],
        "coordinates": {
          "latitude": -8,
          "longitude": 159
        }
      },
      {
        "code": "SB-ML",
        "name": "SB-ML",
        "districts": [],
        "coordinates": {
          "latitude": -8,
          "longitude": 159
        }
      },
      {
        "code": "SB-TE",
        "name": "SB-TE",
        "districts": [],
        "coordinates": {
          "latitude": -8,
          "longitude": 159
        }
      },
      {
        "code": "SB-WE",
        "name": "SB-WE",
        "districts": [],
        "coordinates": {
          "latitude": -8,
          "longitude": 159
        }
      }
    ]
  },
  {
    "code": "SO",
    "name": "Somalia",
    "regions": [
      "Africa",
      "Eastern Africa"
    ],
    "coordinates": {
      "latitude": 10,
      "longitude": 49
    },
    "currency": "SOS",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "SO-AW",
        "name": "SO-AW",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 49
        }
      },
      {
        "code": "SO-BK",
        "name": "SO-BK",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 49
        }
      },
      {
        "code": "SO-BN",
        "name": "SO-BN",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 49
        }
      },
      {
        "code": "SO-BR",
        "name": "SO-BR",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 49
        }
      },
      {
        "code": "SO-BY",
        "name": "SO-BY",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 49
        }
      },
      {
        "code": "SO-GA",
        "name": "SO-GA",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 49
        }
      },
      {
        "code": "SO-GE",
        "name": "SO-GE",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 49
        }
      },
      {
        "code": "SO-HI",
        "name": "SO-HI",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 49
        }
      },
      {
        "code": "SO-JD",
        "name": "SO-JD",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 49
        }
      },
      {
        "code": "SO-JH",
        "name": "SO-JH",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 49
        }
      },
      {
        "code": "SO-MU",
        "name": "SO-MU",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 49
        }
      },
      {
        "code": "SO-NU",
        "name": "SO-NU",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 49
        }
      },
      {
        "code": "SO-SA",
        "name": "SO-SA",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 49
        }
      },
      {
        "code": "SO-SD",
        "name": "SO-SD",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 49
        }
      },
      {
        "code": "SO-SH",
        "name": "SO-SH",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 49
        }
      },
      {
        "code": "SO-SO",
        "name": "SO-SO",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 49
        }
      },
      {
        "code": "SO-TO",
        "name": "SO-TO",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 49
        }
      },
      {
        "code": "SO-WO",
        "name": "SO-WO",
        "districts": [],
        "coordinates": {
          "latitude": 10,
          "longitude": 49
        }
      }
    ]
  },
  {
    "code": "ZA",
    "name": "South Africa",
    "regions": [
      "Africa",
      "Southern Africa"
    ],
    "coordinates": {
      "latitude": -29,
      "longitude": 24
    },
    "currency": "ZAR",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "ZA-EC",
        "name": "ZA-EC",
        "districts": [],
        "coordinates": {
          "latitude": -29,
          "longitude": 24
        }
      },
      {
        "code": "ZA-FS",
        "name": "ZA-FS",
        "districts": [],
        "coordinates": {
          "latitude": -29,
          "longitude": 24
        }
      },
      {
        "code": "ZA-GT",
        "name": "ZA-GT",
        "districts": [],
        "coordinates": {
          "latitude": -29,
          "longitude": 24
        }
      },
      {
        "code": "ZA-NL",
        "name": "ZA-NL",
        "districts": [],
        "coordinates": {
          "latitude": -29,
          "longitude": 24
        }
      },
      {
        "code": "ZA-MP",
        "name": "ZA-MP",
        "districts": [],
        "coordinates": {
          "latitude": -29,
          "longitude": 24
        }
      },
      {
        "code": "ZA-NC",
        "name": "ZA-NC",
        "districts": [],
        "coordinates": {
          "latitude": -29,
          "longitude": 24
        }
      },
      {
        "code": "ZA-NP",
        "name": "ZA-NP",
        "districts": [],
        "coordinates": {
          "latitude": -29,
          "longitude": 24
        }
      },
      {
        "code": "ZA-NW",
        "name": "ZA-NW",
        "districts": [],
        "coordinates": {
          "latitude": -29,
          "longitude": 24
        }
      },
      {
        "code": "ZA-WC",
        "name": "ZA-WC",
        "districts": [],
        "coordinates": {
          "latitude": -29,
          "longitude": 24
        }
      }
    ]
  },
  {
    "code": "GS",
    "name": "South Georgia",
    "regions": [
      "Antarctic"
    ],
    "coordinates": {
      "latitude": -54.5,
      "longitude": -37
    },
    "currency": "GBP",
    "timezone": [
      "UTC-02:00"
    ],
    "states": [
      {
        "code": "GS-GS",
        "name": "GS-GS",
        "districts": [],
        "coordinates": {
          "latitude": -54.5,
          "longitude": -37
        }
      }
    ]
  },
  {
    "code": "KR",
    "name": "South Korea",
    "regions": [
      "Asia",
      "Eastern Asia"
    ],
    "coordinates": {
      "latitude": 37,
      "longitude": 127.5
    },
    "currency": "KRW",
    "timezone": [
      "UTC+09:00"
    ],
    "states": [
      {
        "code": "KR-11",
        "name": "KR-11",
        "districts": [],
        "coordinates": {
          "latitude": 37,
          "longitude": 127.5
        }
      },
      {
        "code": "KR-26",
        "name": "KR-26",
        "districts": [],
        "coordinates": {
          "latitude": 37,
          "longitude": 127.5
        }
      },
      {
        "code": "KR-27",
        "name": "KR-27",
        "districts": [],
        "coordinates": {
          "latitude": 37,
          "longitude": 127.5
        }
      },
      {
        "code": "KR-30",
        "name": "KR-30",
        "districts": [],
        "coordinates": {
          "latitude": 37,
          "longitude": 127.5
        }
      },
      {
        "code": "KR-29",
        "name": "KR-29",
        "districts": [],
        "coordinates": {
          "latitude": 37,
          "longitude": 127.5
        }
      },
      {
        "code": "KR-28",
        "name": "KR-28",
        "districts": [],
        "coordinates": {
          "latitude": 37,
          "longitude": 127.5
        }
      },
      {
        "code": "KR-31",
        "name": "KR-31",
        "districts": [],
        "coordinates": {
          "latitude": 37,
          "longitude": 127.5
        }
      },
      {
        "code": "KR-43",
        "name": "KR-43",
        "districts": [],
        "coordinates": {
          "latitude": 37,
          "longitude": 127.5
        }
      },
      {
        "code": "KR-44",
        "name": "KR-44",
        "districts": [],
        "coordinates": {
          "latitude": 37,
          "longitude": 127.5
        }
      },
      {
        "code": "KR-42",
        "name": "KR-42",
        "districts": [],
        "coordinates": {
          "latitude": 37,
          "longitude": 127.5
        }
      },
      {
        "code": "KR-41",
        "name": "KR-41",
        "districts": [],
        "coordinates": {
          "latitude": 37,
          "longitude": 127.5
        }
      },
      {
        "code": "KR-47",
        "name": "KR-47",
        "districts": [],
        "coordinates": {
          "latitude": 37,
          "longitude": 127.5
        }
      },
      {
        "code": "KR-48",
        "name": "KR-48",
        "districts": [],
        "coordinates": {
          "latitude": 37,
          "longitude": 127.5
        }
      },
      {
        "code": "KR-49",
        "name": "KR-49",
        "districts": [],
        "coordinates": {
          "latitude": 37,
          "longitude": 127.5
        }
      },
      {
        "code": "KR-45",
        "name": "KR-45",
        "districts": [],
        "coordinates": {
          "latitude": 37,
          "longitude": 127.5
        }
      },
      {
        "code": "KR-46",
        "name": "KR-46",
        "districts": [],
        "coordinates": {
          "latitude": 37,
          "longitude": 127.5
        }
      }
    ]
  },
  {
    "code": "SS",
    "name": "South Sudan",
    "regions": [
      "Africa",
      "Middle Africa"
    ],
    "coordinates": {
      "latitude": 7,
      "longitude": 30
    },
    "currency": "SSP",
    "timezone": [
      "UTC+03:00"
    ],
    "states": []
  },
  {
    "code": "ES",
    "name": "Spain",
    "regions": [
      "Europe",
      "Southern Europe"
    ],
    "coordinates": {
      "latitude": 40,
      "longitude": -4
    },
    "currency": "EUR",
    "timezone": [
      "UTC",
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "ES-AN",
        "name": "ES-AN",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-AL",
        "name": "ES-AL",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-CA",
        "name": "ES-CA",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-CO",
        "name": "ES-CO",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-GR",
        "name": "ES-GR",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-H",
        "name": "ES-H",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-J",
        "name": "ES-J",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-MA",
        "name": "ES-MA",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-SE",
        "name": "ES-SE",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-AR",
        "name": "ES-AR",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-HU",
        "name": "ES-HU",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-TE",
        "name": "ES-TE",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-Z",
        "name": "ES-Z",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-O",
        "name": "ES-O",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-CN",
        "name": "ES-CN",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-GC",
        "name": "ES-GC",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-TF",
        "name": "ES-TF",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-S",
        "name": "ES-S",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-CM",
        "name": "ES-CM",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-AB",
        "name": "ES-AB",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-CR",
        "name": "ES-CR",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-CU",
        "name": "ES-CU",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-GU",
        "name": "ES-GU",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-TO",
        "name": "ES-TO",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-CL",
        "name": "ES-CL",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-AV",
        "name": "ES-AV",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-BU",
        "name": "ES-BU",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-LE",
        "name": "ES-LE",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-P",
        "name": "ES-P",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-SA",
        "name": "ES-SA",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-SG",
        "name": "ES-SG",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-SO",
        "name": "ES-SO",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-VA",
        "name": "ES-VA",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-ZA",
        "name": "ES-ZA",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-CT",
        "name": "ES-CT",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-B",
        "name": "ES-B",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-GE",
        "name": "ES-GE",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-L",
        "name": "ES-L",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-T",
        "name": "ES-T",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-EX",
        "name": "ES-EX",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-BA",
        "name": "ES-BA",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-CC",
        "name": "ES-CC",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-GA",
        "name": "ES-GA",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-C",
        "name": "ES-C",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-LU",
        "name": "ES-LU",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-OR",
        "name": "ES-OR",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-PO",
        "name": "ES-PO",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-PM",
        "name": "ES-PM",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-LO",
        "name": "ES-LO",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-M",
        "name": "ES-M",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-MU",
        "name": "ES-MU",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-NA",
        "name": "ES-NA",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-PV",
        "name": "ES-PV",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-VI",
        "name": "ES-VI",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-SS",
        "name": "ES-SS",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-BI",
        "name": "ES-BI",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-VC",
        "name": "ES-VC",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-A",
        "name": "ES-A",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-CS",
        "name": "ES-CS",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      },
      {
        "code": "ES-V",
        "name": "ES-V",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": -4
        }
      }
    ]
  },
  {
    "code": "LK",
    "name": "Sri Lanka",
    "regions": [
      "Asia",
      "Southern Asia"
    ],
    "coordinates": {
      "latitude": 7,
      "longitude": 81
    },
    "currency": "LKR",
    "timezone": [
      "UTC+05:30"
    ],
    "states": [
      {
        "code": "LK-1",
        "name": "LK-1",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-11",
        "name": "LK-11",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-12",
        "name": "LK-12",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-13",
        "name": "LK-13",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-3",
        "name": "LK-3",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-31",
        "name": "LK-31",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-33",
        "name": "LK-33",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-32",
        "name": "LK-32",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-2",
        "name": "LK-2",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-21",
        "name": "LK-21",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-22",
        "name": "LK-22",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-23",
        "name": "LK-23",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-5",
        "name": "LK-5",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-52",
        "name": "LK-52",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-51",
        "name": "LK-51",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-53",
        "name": "LK-53",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-9",
        "name": "LK-9",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-92",
        "name": "LK-92",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-91",
        "name": "LK-91",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-7",
        "name": "LK-7",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-71",
        "name": "LK-71",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-72",
        "name": "LK-72",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-4",
        "name": "LK-4",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-41",
        "name": "LK-41",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-42",
        "name": "LK-42",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-43",
        "name": "LK-43",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-45",
        "name": "LK-45",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-44",
        "name": "LK-44",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-8",
        "name": "LK-8",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-81",
        "name": "LK-81",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-82",
        "name": "LK-82",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-6",
        "name": "LK-6",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-61",
        "name": "LK-61",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      },
      {
        "code": "LK-62",
        "name": "LK-62",
        "districts": [],
        "coordinates": {
          "latitude": 7,
          "longitude": 81
        }
      }
    ]
  },
  {
    "code": "SD",
    "name": "Sudan",
    "regions": [
      "Africa",
      "Northern Africa"
    ],
    "coordinates": {
      "latitude": 15,
      "longitude": 30
    },
    "currency": "SDG",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "SD-23",
        "name": "SD-23",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-26",
        "name": "SD-26",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-18",
        "name": "SD-18",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-07",
        "name": "SD-07",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-03",
        "name": "SD-03",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-06",
        "name": "SD-06",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-22",
        "name": "SD-22",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-04",
        "name": "SD-04",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-08",
        "name": "SD-08",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-24",
        "name": "SD-24",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-01",
        "name": "SD-01",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-17",
        "name": "SD-17",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-16",
        "name": "SD-16",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-14",
        "name": "SD-14",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-12",
        "name": "SD-12",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-10",
        "name": "SD-10",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-11",
        "name": "SD-11",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-13",
        "name": "SD-13",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-20",
        "name": "SD-20",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-05",
        "name": "SD-05",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-15",
        "name": "SD-15",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-02",
        "name": "SD-02",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-09",
        "name": "SD-09",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-19",
        "name": "SD-19",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-25",
        "name": "SD-25",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      },
      {
        "code": "SD-21",
        "name": "SD-21",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 30
        }
      }
    ]
  },
  {
    "code": "SR",
    "name": "Suriname",
    "regions": [
      "Americas",
      "South America"
    ],
    "coordinates": {
      "latitude": 4,
      "longitude": -56
    },
    "currency": "SRD",
    "timezone": [
      "UTC-03:00"
    ],
    "states": [
      {
        "code": "SR-BR",
        "name": "SR-BR",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -56
        }
      },
      {
        "code": "SR-CM",
        "name": "SR-CM",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -56
        }
      },
      {
        "code": "SR-CR",
        "name": "SR-CR",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -56
        }
      },
      {
        "code": "SR-MA",
        "name": "SR-MA",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -56
        }
      },
      {
        "code": "SR-NI",
        "name": "SR-NI",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -56
        }
      },
      {
        "code": "SR-PR",
        "name": "SR-PR",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -56
        }
      },
      {
        "code": "SR-PM",
        "name": "SR-PM",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -56
        }
      },
      {
        "code": "SR-SA",
        "name": "SR-SA",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -56
        }
      },
      {
        "code": "SR-SI",
        "name": "SR-SI",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -56
        }
      },
      {
        "code": "SR-WA",
        "name": "SR-WA",
        "districts": [],
        "coordinates": {
          "latitude": 4,
          "longitude": -56
        }
      }
    ]
  },
  {
    "code": "SJ",
    "name": "Svalbard and Jan Mayen",
    "regions": [
      "Europe",
      "Northern Europe"
    ],
    "coordinates": {
      "latitude": 78,
      "longitude": 20
    },
    "currency": "NOK",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "SJ-SJ",
        "name": "SJ-SJ",
        "districts": [],
        "coordinates": {
          "latitude": 78,
          "longitude": 20
        }
      }
    ]
  },
  {
    "code": "SE",
    "name": "Sweden",
    "regions": [
      "Europe",
      "Northern Europe"
    ],
    "coordinates": {
      "latitude": 62,
      "longitude": 15
    },
    "currency": "SEK",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "SE-K",
        "name": "SE-K",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-W",
        "name": "SE-W",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-I",
        "name": "SE-I",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-X",
        "name": "SE-X",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-N",
        "name": "SE-N",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-Z",
        "name": "SE-Z",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-F",
        "name": "SE-F",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-H",
        "name": "SE-H",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-G",
        "name": "SE-G",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-BD",
        "name": "SE-BD",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-M",
        "name": "SE-M",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-AB",
        "name": "SE-AB",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-D",
        "name": "SE-D",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-C",
        "name": "SE-C",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-S",
        "name": "SE-S",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-AC",
        "name": "SE-AC",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-Y",
        "name": "SE-Y",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-U",
        "name": "SE-U",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-O",
        "name": "SE-O",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-T",
        "name": "SE-T",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      },
      {
        "code": "SE-E",
        "name": "SE-E",
        "districts": [],
        "coordinates": {
          "latitude": 62,
          "longitude": 15
        }
      }
    ]
  },
  {
    "code": "CH",
    "name": "Switzerland",
    "regions": [
      "Europe",
      "Western Europe"
    ],
    "coordinates": {
      "latitude": 47,
      "longitude": 8
    },
    "currency": "CHF",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "CH-AG",
        "name": "CH-AG",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-AR",
        "name": "CH-AR",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-AI",
        "name": "CH-AI",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-BL",
        "name": "CH-BL",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-BS",
        "name": "CH-BS",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-BE",
        "name": "CH-BE",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-FR",
        "name": "CH-FR",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-GE",
        "name": "CH-GE",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-GL",
        "name": "CH-GL",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-GR",
        "name": "CH-GR",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-JU",
        "name": "CH-JU",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-LU",
        "name": "CH-LU",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-NE",
        "name": "CH-NE",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-NW",
        "name": "CH-NW",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-OW",
        "name": "CH-OW",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-SG",
        "name": "CH-SG",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-SH",
        "name": "CH-SH",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-SZ",
        "name": "CH-SZ",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-SO",
        "name": "CH-SO",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-TG",
        "name": "CH-TG",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-TI",
        "name": "CH-TI",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-UR",
        "name": "CH-UR",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-VS",
        "name": "CH-VS",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-VD",
        "name": "CH-VD",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-ZG",
        "name": "CH-ZG",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      },
      {
        "code": "CH-ZH",
        "name": "CH-ZH",
        "districts": [],
        "coordinates": {
          "latitude": 47,
          "longitude": 8
        }
      }
    ]
  },
  {
    "code": "SY",
    "name": "Syria",
    "regions": [
      "Asia",
      "Western Asia"
    ],
    "coordinates": {
      "latitude": 35,
      "longitude": 38
    },
    "currency": "SYP",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "SY-HA",
        "name": "SY-HA",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 38
        }
      },
      {
        "code": "SY-LA",
        "name": "SY-LA",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 38
        }
      },
      {
        "code": "SY-QU",
        "name": "SY-QU",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 38
        }
      },
      {
        "code": "SY-RA",
        "name": "SY-RA",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 38
        }
      },
      {
        "code": "SY-SU",
        "name": "SY-SU",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 38
        }
      },
      {
        "code": "SY-DR",
        "name": "SY-DR",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 38
        }
      },
      {
        "code": "SY-DY",
        "name": "SY-DY",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 38
        }
      },
      {
        "code": "SY-DI",
        "name": "SY-DI",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 38
        }
      },
      {
        "code": "SY-HL",
        "name": "SY-HL",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 38
        }
      },
      {
        "code": "SY-HM",
        "name": "SY-HM",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 38
        }
      },
      {
        "code": "SY-HI",
        "name": "SY-HI",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 38
        }
      },
      {
        "code": "SY-ID",
        "name": "SY-ID",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 38
        }
      },
      {
        "code": "SY-RD",
        "name": "SY-RD",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 38
        }
      },
      {
        "code": "SY-TA",
        "name": "SY-TA",
        "districts": [],
        "coordinates": {
          "latitude": 35,
          "longitude": 38
        }
      }
    ]
  },
  {
    "code": "TW",
    "name": "Taiwan",
    "regions": [
      "Asia",
      "Eastern Asia"
    ],
    "coordinates": {
      "latitude": 23.5,
      "longitude": 121
    },
    "currency": "TWD",
    "timezone": [
      "UTC+08:00"
    ],
    "states": [
      {
        "code": "TW-KHH",
        "name": "TW-KHH",
        "districts": [],
        "coordinates": {
          "latitude": 23.5,
          "longitude": 121
        }
      },
      {
        "code": "TW-TPE",
        "name": "TW-TPE",
        "districts": [],
        "coordinates": {
          "latitude": 23.5,
          "longitude": 121
        }
      },
      {
        "code": "TW-CYI",
        "name": "TW-CYI",
        "districts": [],
        "coordinates": {
          "latitude": 23.5,
          "longitude": 121
        }
      },
      {
        "code": "TW-HSZ",
        "name": "TW-HSZ",
        "districts": [],
        "coordinates": {
          "latitude": 23.5,
          "longitude": 121
        }
      },
      {
        "code": "TW-KEE",
        "name": "TW-KEE",
        "districts": [],
        "coordinates": {
          "latitude": 23.5,
          "longitude": 121
        }
      },
      {
        "code": "TW-TXG",
        "name": "TW-TXG",
        "districts": [],
        "coordinates": {
          "latitude": 23.5,
          "longitude": 121
        }
      },
      {
        "code": "TW-TNN",
        "name": "TW-TNN",
        "districts": [],
        "coordinates": {
          "latitude": 23.5,
          "longitude": 121
        }
      },
      {
        "code": "TW-CHA",
        "name": "TW-CHA",
        "districts": [],
        "coordinates": {
          "latitude": 23.5,
          "longitude": 121
        }
      },
      {
        "code": "TW-HUA",
        "name": "TW-HUA",
        "districts": [],
        "coordinates": {
          "latitude": 23.5,
          "longitude": 121
        }
      },
      {
        "code": "TW-ILA",
        "name": "TW-ILA",
        "districts": [],
        "coordinates": {
          "latitude": 23.5,
          "longitude": 121
        }
      },
      {
        "code": "TW-MIA",
        "name": "TW-MIA",
        "districts": [],
        "coordinates": {
          "latitude": 23.5,
          "longitude": 121
        }
      },
      {
        "code": "TW-NAN",
        "name": "TW-NAN",
        "districts": [],
        "coordinates": {
          "latitude": 23.5,
          "longitude": 121
        }
      },
      {
        "code": "TW-PEN",
        "name": "TW-PEN",
        "districts": [],
        "coordinates": {
          "latitude": 23.5,
          "longitude": 121
        }
      },
      {
        "code": "TW-PIF",
        "name": "TW-PIF",
        "districts": [],
        "coordinates": {
          "latitude": 23.5,
          "longitude": 121
        }
      },
      {
        "code": "TW-TTT",
        "name": "TW-TTT",
        "districts": [],
        "coordinates": {
          "latitude": 23.5,
          "longitude": 121
        }
      },
      {
        "code": "TW-TAO",
        "name": "TW-TAO",
        "districts": [],
        "coordinates": {
          "latitude": 23.5,
          "longitude": 121
        }
      },
      {
        "code": "TW-YUN",
        "name": "TW-YUN",
        "districts": [],
        "coordinates": {
          "latitude": 23.5,
          "longitude": 121
        }
      }
    ]
  },
  {
    "code": "TJ",
    "name": "Tajikistan",
    "regions": [
      "Asia",
      "Central Asia"
    ],
    "coordinates": {
      "latitude": 39,
      "longitude": 71
    },
    "currency": "TJS",
    "timezone": [
      "UTC+05:00"
    ],
    "states": [
      {
        "code": "TJ-KR",
        "name": "TJ-KR",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 71
        }
      },
      {
        "code": "TJ-KT",
        "name": "TJ-KT",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 71
        }
      },
      {
        "code": "TJ-LN",
        "name": "TJ-LN",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 71
        }
      },
      {
        "code": "TJ-GB",
        "name": "TJ-GB",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 71
        }
      }
    ]
  },
  {
    "code": "TZ",
    "name": "Tanzania",
    "regions": [
      "Africa",
      "Eastern Africa"
    ],
    "coordinates": {
      "latitude": -6,
      "longitude": 35
    },
    "currency": "TZS",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "TZ-01",
        "name": "TZ-01",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-02",
        "name": "TZ-02",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-03",
        "name": "TZ-03",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-04",
        "name": "TZ-04",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-05",
        "name": "TZ-05",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-06",
        "name": "TZ-06",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-07",
        "name": "TZ-07",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-08",
        "name": "TZ-08",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-09",
        "name": "TZ-09",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-10",
        "name": "TZ-10",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-11",
        "name": "TZ-11",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-12",
        "name": "TZ-12",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-13",
        "name": "TZ-13",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-14",
        "name": "TZ-14",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-15",
        "name": "TZ-15",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-16",
        "name": "TZ-16",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-17",
        "name": "TZ-17",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-18",
        "name": "TZ-18",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-19",
        "name": "TZ-19",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-20",
        "name": "TZ-20",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-21",
        "name": "TZ-21",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-22",
        "name": "TZ-22",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-23",
        "name": "TZ-23",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-24",
        "name": "TZ-24",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      },
      {
        "code": "TZ-25",
        "name": "TZ-25",
        "districts": [],
        "coordinates": {
          "latitude": -6,
          "longitude": 35
        }
      }
    ]
  },
  {
    "code": "TH",
    "name": "Thailand",
    "regions": [
      "Asia",
      "South-Eastern Asia"
    ],
    "coordinates": {
      "latitude": 15,
      "longitude": 100
    },
    "currency": "THB",
    "timezone": [
      "UTC+07:00"
    ],
    "states": [
      {
        "code": "TH-10",
        "name": "TH-10",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-S",
        "name": "TH-S",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-37",
        "name": "TH-37",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-15",
        "name": "TH-15",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-31",
        "name": "TH-31",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-24",
        "name": "TH-24",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-18",
        "name": "TH-18",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-36",
        "name": "TH-36",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-22",
        "name": "TH-22",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-50",
        "name": "TH-50",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-57",
        "name": "TH-57",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-20",
        "name": "TH-20",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-86",
        "name": "TH-86",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-46",
        "name": "TH-46",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-62",
        "name": "TH-62",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-71",
        "name": "TH-71",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-40",
        "name": "TH-40",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-81",
        "name": "TH-81",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-52",
        "name": "TH-52",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-51",
        "name": "TH-51",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-42",
        "name": "TH-42",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-16",
        "name": "TH-16",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-58",
        "name": "TH-58",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-44",
        "name": "TH-44",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-49",
        "name": "TH-49",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-26",
        "name": "TH-26",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-73",
        "name": "TH-73",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-48",
        "name": "TH-48",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-30",
        "name": "TH-30",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-60",
        "name": "TH-60",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-80",
        "name": "TH-80",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-55",
        "name": "TH-55",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-96",
        "name": "TH-96",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-39",
        "name": "TH-39",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-43",
        "name": "TH-43",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-12",
        "name": "TH-12",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-13",
        "name": "TH-13",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-94",
        "name": "TH-94",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-82",
        "name": "TH-82",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-93",
        "name": "TH-93",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-56",
        "name": "TH-56",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-67",
        "name": "TH-67",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-76",
        "name": "TH-76",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-66",
        "name": "TH-66",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-65",
        "name": "TH-65",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-54",
        "name": "TH-54",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-14",
        "name": "TH-14",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-83",
        "name": "TH-83",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-25",
        "name": "TH-25",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-77",
        "name": "TH-77",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-85",
        "name": "TH-85",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-70",
        "name": "TH-70",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-21",
        "name": "TH-21",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-45",
        "name": "TH-45",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-27",
        "name": "TH-27",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-47",
        "name": "TH-47",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-11",
        "name": "TH-11",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-74",
        "name": "TH-74",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-75",
        "name": "TH-75",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-19",
        "name": "TH-19",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-91",
        "name": "TH-91",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-17",
        "name": "TH-17",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-33",
        "name": "TH-33",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-90",
        "name": "TH-90",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-64",
        "name": "TH-64",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-72",
        "name": "TH-72",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-84",
        "name": "TH-84",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-32",
        "name": "TH-32",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-63",
        "name": "TH-63",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-92",
        "name": "TH-92",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-23",
        "name": "TH-23",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-34",
        "name": "TH-34",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-41",
        "name": "TH-41",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-61",
        "name": "TH-61",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-53",
        "name": "TH-53",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-95",
        "name": "TH-95",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      },
      {
        "code": "TH-35",
        "name": "TH-35",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 100
        }
      }
    ]
  },
  {
    "code": "TL",
    "name": "Timor-Leste",
    "regions": [
      "Asia",
      "South-Eastern Asia"
    ],
    "coordinates": {
      "latitude": -8.83333333,
      "longitude": 125.91666666
    },
    "currency": "USD",
    "timezone": [
      "UTC+09:00"
    ],
    "states": []
  },
  {
    "code": "TG",
    "name": "Togo",
    "regions": [
      "Africa",
      "Western Africa"
    ],
    "coordinates": {
      "latitude": 8,
      "longitude": 1.16666666
    },
    "currency": "XOF",
    "timezone": [
      "UTC"
    ],
    "states": [
      {
        "code": "TG-C",
        "name": "TG-C",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": 1.16666666
        }
      },
      {
        "code": "TG-K",
        "name": "TG-K",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": 1.16666666
        }
      },
      {
        "code": "TG-M",
        "name": "TG-M",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": 1.16666666
        }
      },
      {
        "code": "TG-P",
        "name": "TG-P",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": 1.16666666
        }
      },
      {
        "code": "TG-S",
        "name": "TG-S",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": 1.16666666
        }
      }
    ]
  },
  {
    "code": "TK",
    "name": "Tokelau",
    "regions": [
      "Oceania",
      "Polynesia"
    ],
    "coordinates": {
      "latitude": -9,
      "longitude": -172
    },
    "currency": "NZD",
    "timezone": [
      "UTC+13:00"
    ],
    "states": [
      {
        "code": "TK-TK",
        "name": "TK-TK",
        "districts": [],
        "coordinates": {
          "latitude": -9,
          "longitude": -172
        }
      }
    ]
  },
  {
    "code": "TO",
    "name": "Tonga",
    "regions": [
      "Oceania",
      "Polynesia"
    ],
    "coordinates": {
      "latitude": -20,
      "longitude": -175
    },
    "currency": "TOP",
    "timezone": [
      "UTC+13:00"
    ],
    "states": [
      {
        "code": "TO-TO",
        "name": "TO-TO",
        "districts": [],
        "coordinates": {
          "latitude": -20,
          "longitude": -175
        }
      }
    ]
  },
  {
    "code": "TT",
    "name": "Trinidad and Tobago",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 10.6918,
      "longitude": -61.2225
    },
    "currency": "TTD",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "TT-CTT",
        "name": "TT-CTT",
        "districts": [],
        "coordinates": {
          "latitude": 10.6918,
          "longitude": -61.2225
        }
      },
      {
        "code": "TT-DMN",
        "name": "TT-DMN",
        "districts": [],
        "coordinates": {
          "latitude": 10.6918,
          "longitude": -61.2225
        }
      },
      {
        "code": "TT-ETO",
        "name": "TT-ETO",
        "districts": [],
        "coordinates": {
          "latitude": 10.6918,
          "longitude": -61.2225
        }
      },
      {
        "code": "TT-PED",
        "name": "TT-PED",
        "districts": [],
        "coordinates": {
          "latitude": 10.6918,
          "longitude": -61.2225
        }
      },
      {
        "code": "TT-PRT",
        "name": "TT-PRT",
        "districts": [],
        "coordinates": {
          "latitude": 10.6918,
          "longitude": -61.2225
        }
      },
      {
        "code": "TT-RCM",
        "name": "TT-RCM",
        "districts": [],
        "coordinates": {
          "latitude": 10.6918,
          "longitude": -61.2225
        }
      },
      {
        "code": "TT-SGE",
        "name": "TT-SGE",
        "districts": [],
        "coordinates": {
          "latitude": 10.6918,
          "longitude": -61.2225
        }
      },
      {
        "code": "TT-SJL",
        "name": "TT-SJL",
        "districts": [],
        "coordinates": {
          "latitude": 10.6918,
          "longitude": -61.2225
        }
      },
      {
        "code": "TT-SIP",
        "name": "TT-SIP",
        "districts": [],
        "coordinates": {
          "latitude": 10.6918,
          "longitude": -61.2225
        }
      },
      {
        "code": "TT-TUP",
        "name": "TT-TUP",
        "districts": [],
        "coordinates": {
          "latitude": 10.6918,
          "longitude": -61.2225
        }
      },
      {
        "code": "TT-WTO",
        "name": "TT-WTO",
        "districts": [],
        "coordinates": {
          "latitude": 10.6918,
          "longitude": -61.2225
        }
      },
      {
        "code": "TT-ARI",
        "name": "TT-ARI",
        "districts": [],
        "coordinates": {
          "latitude": 10.6918,
          "longitude": -61.2225
        }
      },
      {
        "code": "TT-CHA",
        "name": "TT-CHA",
        "districts": [],
        "coordinates": {
          "latitude": 10.6918,
          "longitude": -61.2225
        }
      },
      {
        "code": "TT-PTF",
        "name": "TT-PTF",
        "districts": [],
        "coordinates": {
          "latitude": 10.6918,
          "longitude": -61.2225
        }
      },
      {
        "code": "TT-POS",
        "name": "TT-POS",
        "districts": [],
        "coordinates": {
          "latitude": 10.6918,
          "longitude": -61.2225
        }
      },
      {
        "code": "TT-SFO",
        "name": "TT-SFO",
        "districts": [],
        "coordinates": {
          "latitude": 10.6918,
          "longitude": -61.2225
        }
      }
    ]
  },
  {
    "code": "TN",
    "name": "Tunisia",
    "regions": [
      "Africa",
      "Northern Africa"
    ],
    "coordinates": {
      "latitude": 34,
      "longitude": 9
    },
    "currency": "TND",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "TN-31",
        "name": "TN-31",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-13",
        "name": "TN-13",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-23",
        "name": "TN-23",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-81",
        "name": "TN-81",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-71",
        "name": "TN-71",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-32",
        "name": "TN-32",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-41",
        "name": "TN-41",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-42",
        "name": "TN-42",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-73",
        "name": "TN-73",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-12",
        "name": "TN-12",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-33",
        "name": "TN-33",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-53",
        "name": "TN-53",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-82",
        "name": "TN-82",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-52",
        "name": "TN-52",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-21",
        "name": "TN-21",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-61",
        "name": "TN-61",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-43",
        "name": "TN-43",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-34",
        "name": "TN-34",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-51",
        "name": "TN-51",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-83",
        "name": "TN-83",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-72",
        "name": "TN-72",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-11",
        "name": "TN-11",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      },
      {
        "code": "TN-22",
        "name": "TN-22",
        "districts": [],
        "coordinates": {
          "latitude": 34,
          "longitude": 9
        }
      }
    ]
  },
  {
    "code": "TR",
    "name": "Turkey",
    "regions": [
      "Asia",
      "Western Asia"
    ],
    "coordinates": {
      "latitude": 39,
      "longitude": 35
    },
    "currency": "TRY",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "TR-01",
        "name": "TR-01",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-02",
        "name": "TR-02",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-03",
        "name": "TR-03",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-04",
        "name": "TR-04",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-68",
        "name": "TR-68",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-05",
        "name": "TR-05",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-06",
        "name": "TR-06",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-07",
        "name": "TR-07",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-75",
        "name": "TR-75",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-08",
        "name": "TR-08",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-09",
        "name": "TR-09",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-10",
        "name": "TR-10",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-74",
        "name": "TR-74",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-72",
        "name": "TR-72",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-69",
        "name": "TR-69",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-11",
        "name": "TR-11",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-12",
        "name": "TR-12",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-13",
        "name": "TR-13",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-14",
        "name": "TR-14",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-15",
        "name": "TR-15",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-16",
        "name": "TR-16",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-17",
        "name": "TR-17",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-18",
        "name": "TR-18",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-19",
        "name": "TR-19",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-20",
        "name": "TR-20",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-21",
        "name": "TR-21",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-22",
        "name": "TR-22",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-23",
        "name": "TR-23",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-24",
        "name": "TR-24",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-25",
        "name": "TR-25",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-26",
        "name": "TR-26",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-27",
        "name": "TR-27",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-28",
        "name": "TR-28",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-29",
        "name": "TR-29",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-30",
        "name": "TR-30",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-31",
        "name": "TR-31",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-76",
        "name": "TR-76",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-32",
        "name": "TR-32",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-33",
        "name": "TR-33",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-34",
        "name": "TR-34",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-35",
        "name": "TR-35",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-46",
        "name": "TR-46",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-78",
        "name": "TR-78",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-70",
        "name": "TR-70",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-36",
        "name": "TR-36",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-37",
        "name": "TR-37",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-38",
        "name": "TR-38",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-71",
        "name": "TR-71",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-39",
        "name": "TR-39",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-40",
        "name": "TR-40",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-79",
        "name": "TR-79",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-41",
        "name": "TR-41",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-42",
        "name": "TR-42",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-43",
        "name": "TR-43",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-44",
        "name": "TR-44",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-4S",
        "name": "TR-4S",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-47",
        "name": "TR-47",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-48",
        "name": "TR-48",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-49",
        "name": "TR-49",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-SO",
        "name": "TR-SO",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-51",
        "name": "TR-51",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-52",
        "name": "TR-52",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-53",
        "name": "TR-53",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-54",
        "name": "TR-54",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-SS",
        "name": "TR-SS",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-56",
        "name": "TR-56",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-57",
        "name": "TR-57",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-S8",
        "name": "TR-S8",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-63",
        "name": "TR-63",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-73",
        "name": "TR-73",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-59",
        "name": "TR-59",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-60",
        "name": "TR-60",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-61",
        "name": "TR-61",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-62",
        "name": "TR-62",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-64",
        "name": "TR-64",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-65",
        "name": "TR-65",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-77",
        "name": "TR-77",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-66",
        "name": "TR-66",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      },
      {
        "code": "TR-67",
        "name": "TR-67",
        "districts": [],
        "coordinates": {
          "latitude": 39,
          "longitude": 35
        }
      }
    ]
  },
  {
    "code": "TM",
    "name": "Turkmenistan",
    "regions": [
      "Asia",
      "Central Asia"
    ],
    "coordinates": {
      "latitude": 40,
      "longitude": 60
    },
    "currency": "TMT",
    "timezone": [
      "UTC+05:00"
    ],
    "states": [
      {
        "code": "TM-A",
        "name": "TM-A",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 60
        }
      },
      {
        "code": "TM-B",
        "name": "TM-B",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 60
        }
      },
      {
        "code": "TM-D",
        "name": "TM-D",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 60
        }
      },
      {
        "code": "TM-L",
        "name": "TM-L",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 60
        }
      },
      {
        "code": "TM-M",
        "name": "TM-M",
        "districts": [],
        "coordinates": {
          "latitude": 40,
          "longitude": 60
        }
      }
    ]
  },
  {
    "code": "TC",
    "name": "Turks and Caicos Islands",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 21.75,
      "longitude": -71.58333333
    },
    "currency": "USD",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "TC-TC",
        "name": "TC-TC",
        "districts": [],
        "coordinates": {
          "latitude": 21.75,
          "longitude": -71.58333333
        }
      }
    ]
  },
  {
    "code": "TV",
    "name": "Tuvalu",
    "regions": [
      "Oceania",
      "Polynesia"
    ],
    "coordinates": {
      "latitude": -8,
      "longitude": 178
    },
    "currency": "AUD",
    "timezone": [
      "UTC+12:00"
    ],
    "states": [
      {
        "code": "TV-TV",
        "name": "TV-TV",
        "districts": [],
        "coordinates": {
          "latitude": -8,
          "longitude": 178
        }
      }
    ]
  },
  {
    "code": "UG",
    "name": "Uganda",
    "regions": [
      "Africa",
      "Eastern Africa"
    ],
    "coordinates": {
      "latitude": 1,
      "longitude": 32
    },
    "currency": "UGX",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "UG-APA",
        "name": "UG-APA",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-ARU",
        "name": "UG-ARU",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-BUN",
        "name": "UG-BUN",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-BUS",
        "name": "UG-BUS",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-GUL",
        "name": "UG-GUL",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-HOI",
        "name": "UG-HOI",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-IGA",
        "name": "UG-IGA",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-JIN",
        "name": "UG-JIN",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-KBL",
        "name": "UG-KBL",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-KBR",
        "name": "UG-KBR",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-KLG",
        "name": "UG-KLG",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-KLA",
        "name": "UG-KLA",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-KLI",
        "name": "UG-KLI",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-KAP",
        "name": "UG-KAP",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-KAS",
        "name": "UG-KAS",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-KLE",
        "name": "UG-KLE",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-KIB",
        "name": "UG-KIB",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-KIS",
        "name": "UG-KIS",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-KIT",
        "name": "UG-KIT",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-KOT",
        "name": "UG-KOT",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-KUM",
        "name": "UG-KUM",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-LIR",
        "name": "UG-LIR",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-LUW",
        "name": "UG-LUW",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-MSK",
        "name": "UG-MSK",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-MSI",
        "name": "UG-MSI",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-MBL",
        "name": "UG-MBL",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-MBR",
        "name": "UG-MBR",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-MOR",
        "name": "UG-MOR",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-MOY",
        "name": "UG-MOY",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-MPI",
        "name": "UG-MPI",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-MUB",
        "name": "UG-MUB",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-MUK",
        "name": "UG-MUK",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-NEB",
        "name": "UG-NEB",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-NTU",
        "name": "UG-NTU",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-PAL",
        "name": "UG-PAL",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-RAK",
        "name": "UG-RAK",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-RUK",
        "name": "UG-RUK",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-SOR",
        "name": "UG-SOR",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      },
      {
        "code": "UG-TOR",
        "name": "UG-TOR",
        "districts": [],
        "coordinates": {
          "latitude": 1,
          "longitude": 32
        }
      }
    ]
  },
  {
    "code": "UA",
    "name": "Ukraine",
    "regions": [
      "Europe",
      "Eastern Europe"
    ],
    "coordinates": {
      "latitude": 49,
      "longitude": 32
    },
    "currency": "UAH",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "UA-71",
        "name": "UA-71",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-74",
        "name": "UA-74",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-77",
        "name": "UA-77",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-12",
        "name": "UA-12",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-14",
        "name": "UA-14",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-26",
        "name": "UA-26",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-63",
        "name": "UA-63",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-65",
        "name": "UA-65",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-68",
        "name": "UA-68",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-35",
        "name": "UA-35",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-32",
        "name": "UA-32",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-09",
        "name": "UA-09",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-46",
        "name": "UA-46",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-48",
        "name": "UA-48",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-51",
        "name": "UA-51",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-53",
        "name": "UA-53",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-56",
        "name": "UA-56",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-59",
        "name": "UA-59",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-61",
        "name": "UA-61",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-05",
        "name": "UA-05",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-07",
        "name": "UA-07",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-21",
        "name": "UA-21",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-23",
        "name": "UA-23",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-18",
        "name": "UA-18",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-43",
        "name": "UA-43",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-30",
        "name": "UA-30",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      },
      {
        "code": "UA-40",
        "name": "UA-40",
        "districts": [],
        "coordinates": {
          "latitude": 49,
          "longitude": 32
        }
      }
    ]
  },
  {
    "code": "AE",
    "name": "United Arab Emirates",
    "regions": [
      "Asia",
      "Western Asia"
    ],
    "coordinates": {
      "latitude": 24,
      "longitude": 54
    },
    "currency": "AED",
    "timezone": [
      "UTC+04:00"
    ],
    "states": [
      {
        "code": "AE-AZ",
        "name": "AE-AZ",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 54
        }
      },
      {
        "code": "AE-AJ",
        "name": "AE-AJ",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 54
        }
      },
      {
        "code": "AE-FU",
        "name": "AE-FU",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 54
        }
      },
      {
        "code": "AE-SH",
        "name": "AE-SH",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 54
        }
      },
      {
        "code": "AE-DU",
        "name": "AE-DU",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 54
        }
      },
      {
        "code": "AE-RK",
        "name": "AE-RK",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 54
        }
      },
      {
        "code": "AE-UQ",
        "name": "AE-UQ",
        "districts": [],
        "coordinates": {
          "latitude": 24,
          "longitude": 54
        }
      }
    ]
  },
  {
    "code": "GB",
    "name": "United Kingdom",
    "regions": [
      "Europe",
      "Northern Europe"
    ],
    "coordinates": {
      "latitude": 54,
      "longitude": -2
    },
    "currency": "GBP",
    "timezone": [
      "UTC-08:00",
      "UTC-05:00",
      "UTC-04:00",
      "UTC-03:00",
      "UTC-02:00",
      "UTC",
      "UTC+01:00",
      "UTC+02:00",
      "UTC+06:00"
    ],
    "states": [
      {
        "code": "GB-CHA",
        "name": "GB-CHA",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-GSY",
        "name": "GB-GSY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-JSY",
        "name": "GB-JSY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-ENG",
        "name": "GB-ENG",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BDG",
        "name": "GB-BDG",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BNE",
        "name": "GB-BNE",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BNS",
        "name": "GB-BNS",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BAS",
        "name": "GB-BAS",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BDF",
        "name": "GB-BDF",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BEX",
        "name": "GB-BEX",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BIR",
        "name": "GB-BIR",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BBD",
        "name": "GB-BBD",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BPL",
        "name": "GB-BPL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BOL",
        "name": "GB-BOL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BMH",
        "name": "GB-BMH",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BRC",
        "name": "GB-BRC",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BRD",
        "name": "GB-BRD",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BEN",
        "name": "GB-BEN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BNH",
        "name": "GB-BNH",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BST",
        "name": "GB-BST",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BRY",
        "name": "GB-BRY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BKM",
        "name": "GB-BKM",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BUR",
        "name": "GB-BUR",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-CLD",
        "name": "GB-CLD",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-CAM",
        "name": "GB-CAM",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-CMD",
        "name": "GB-CMD",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-CHS",
        "name": "GB-CHS",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-CON",
        "name": "GB-CON",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-COV",
        "name": "GB-COV",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-CRY",
        "name": "GB-CRY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-CMA",
        "name": "GB-CMA",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-DAL",
        "name": "GB-DAL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-DER",
        "name": "GB-DER",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-DBY",
        "name": "GB-DBY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-DEV",
        "name": "GB-DEV",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-DNC",
        "name": "GB-DNC",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-DOR",
        "name": "GB-DOR",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-DUD",
        "name": "GB-DUD",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-DUR",
        "name": "GB-DUR",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-EAL",
        "name": "GB-EAL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-ERY",
        "name": "GB-ERY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-ESX",
        "name": "GB-ESX",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-ENF",
        "name": "GB-ENF",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-ESS",
        "name": "GB-ESS",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-GAT",
        "name": "GB-GAT",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-GLS",
        "name": "GB-GLS",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-GRE",
        "name": "GB-GRE",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-HCK",
        "name": "GB-HCK",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-HAL",
        "name": "GB-HAL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-HMF",
        "name": "GB-HMF",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-HAM",
        "name": "GB-HAM",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-HRY",
        "name": "GB-HRY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-HRW",
        "name": "GB-HRW",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-HPL",
        "name": "GB-HPL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-HAV",
        "name": "GB-HAV",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-HEF",
        "name": "GB-HEF",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-HRT",
        "name": "GB-HRT",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-HIL",
        "name": "GB-HIL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-HNS",
        "name": "GB-HNS",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-IOW",
        "name": "GB-IOW",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-IOS",
        "name": "GB-IOS",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-ISL",
        "name": "GB-ISL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-KEC",
        "name": "GB-KEC",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-KEN",
        "name": "GB-KEN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-KHL",
        "name": "GB-KHL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-KTT",
        "name": "GB-KTT",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-KIR",
        "name": "GB-KIR",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-KWL",
        "name": "GB-KWL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-LBH",
        "name": "GB-LBH",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-LAN",
        "name": "GB-LAN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-LDS",
        "name": "GB-LDS",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-LCE",
        "name": "GB-LCE",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-LEC",
        "name": "GB-LEC",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-LEW",
        "name": "GB-LEW",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-LIN",
        "name": "GB-LIN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-LIV",
        "name": "GB-LIV",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-LND",
        "name": "GB-LND",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-LUT",
        "name": "GB-LUT",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-MAN",
        "name": "GB-MAN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-MDW",
        "name": "GB-MDW",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-MRT",
        "name": "GB-MRT",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-MDB",
        "name": "GB-MDB",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-MIK",
        "name": "GB-MIK",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NET",
        "name": "GB-NET",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NWM",
        "name": "GB-NWM",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NFK",
        "name": "GB-NFK",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NEL",
        "name": "GB-NEL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NLN",
        "name": "GB-NLN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NSM",
        "name": "GB-NSM",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NTY",
        "name": "GB-NTY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NYK",
        "name": "GB-NYK",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NTH",
        "name": "GB-NTH",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NBL",
        "name": "GB-NBL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NGM",
        "name": "GB-NGM",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NTT",
        "name": "GB-NTT",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-OLD",
        "name": "GB-OLD",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-OXF",
        "name": "GB-OXF",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-PTE",
        "name": "GB-PTE",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-PLY",
        "name": "GB-PLY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-POL",
        "name": "GB-POL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-POR",
        "name": "GB-POR",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-RDG",
        "name": "GB-RDG",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-RDB",
        "name": "GB-RDB",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-RCC",
        "name": "GB-RCC",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-RIC",
        "name": "GB-RIC",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-RCH",
        "name": "GB-RCH",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-ROT",
        "name": "GB-ROT",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-RUT",
        "name": "GB-RUT",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SHN",
        "name": "GB-SHN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SLF",
        "name": "GB-SLF",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SAW",
        "name": "GB-SAW",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SFT",
        "name": "GB-SFT",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SHF",
        "name": "GB-SHF",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SHR",
        "name": "GB-SHR",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SLG",
        "name": "GB-SLG",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SOL",
        "name": "GB-SOL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SOM",
        "name": "GB-SOM",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SGC",
        "name": "GB-SGC",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-STY",
        "name": "GB-STY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-STH",
        "name": "GB-STH",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SOS",
        "name": "GB-SOS",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SWK",
        "name": "GB-SWK",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-STS",
        "name": "GB-STS",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SKP",
        "name": "GB-SKP",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-STT",
        "name": "GB-STT",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-STE",
        "name": "GB-STE",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SFK",
        "name": "GB-SFK",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SND",
        "name": "GB-SND",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SRY",
        "name": "GB-SRY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-STN",
        "name": "GB-STN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SWD",
        "name": "GB-SWD",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-TAM",
        "name": "GB-TAM",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-TFW",
        "name": "GB-TFW",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-THR",
        "name": "GB-THR",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-TOB",
        "name": "GB-TOB",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-TWH",
        "name": "GB-TWH",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-TRF",
        "name": "GB-TRF",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WKF",
        "name": "GB-WKF",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WLL",
        "name": "GB-WLL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WFT",
        "name": "GB-WFT",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WND",
        "name": "GB-WND",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WRT",
        "name": "GB-WRT",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WAR",
        "name": "GB-WAR",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WBK",
        "name": "GB-WBK",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WSX",
        "name": "GB-WSX",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WSM",
        "name": "GB-WSM",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WGN",
        "name": "GB-WGN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WIL",
        "name": "GB-WIL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WNM",
        "name": "GB-WNM",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WRL",
        "name": "GB-WRL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WOK",
        "name": "GB-WOK",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WLV",
        "name": "GB-WLV",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WOR",
        "name": "GB-WOR",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-YOR",
        "name": "GB-YOR",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-IOM",
        "name": "GB-IOM",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NIR",
        "name": "GB-NIR",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-ANT",
        "name": "GB-ANT",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-ARD",
        "name": "GB-ARD",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-ARM",
        "name": "GB-ARM",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BLA",
        "name": "GB-BLA",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BLY",
        "name": "GB-BLY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BNB",
        "name": "GB-BNB",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BFS",
        "name": "GB-BFS",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-CKF",
        "name": "GB-CKF",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-CSR",
        "name": "GB-CSR",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-CLR",
        "name": "GB-CLR",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-CKT",
        "name": "GB-CKT",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-CGV",
        "name": "GB-CGV",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-DRY",
        "name": "GB-DRY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-DOW",
        "name": "GB-DOW",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-DGN",
        "name": "GB-DGN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-FER",
        "name": "GB-FER",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-LRN",
        "name": "GB-LRN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-LMV",
        "name": "GB-LMV",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-LSB",
        "name": "GB-LSB",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-MFT",
        "name": "GB-MFT",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-MYL",
        "name": "GB-MYL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NYM",
        "name": "GB-NYM",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NTA",
        "name": "GB-NTA",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NDN",
        "name": "GB-NDN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-OMH",
        "name": "GB-OMH",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-STB",
        "name": "GB-STB",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SCT",
        "name": "GB-SCT",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-ABE",
        "name": "GB-ABE",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-ABD",
        "name": "GB-ABD",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-ANS",
        "name": "GB-ANS",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-AGB",
        "name": "GB-AGB",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-CLK",
        "name": "GB-CLK",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-DGY",
        "name": "GB-DGY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-DND",
        "name": "GB-DND",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-EAY",
        "name": "GB-EAY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-EDU",
        "name": "GB-EDU",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-ELN",
        "name": "GB-ELN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-ERW",
        "name": "GB-ERW",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-EDH",
        "name": "GB-EDH",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-ELS",
        "name": "GB-ELS",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-FAL",
        "name": "GB-FAL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-FIF",
        "name": "GB-FIF",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-GLG",
        "name": "GB-GLG",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-HLD",
        "name": "GB-HLD",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-IVC",
        "name": "GB-IVC",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-MLN",
        "name": "GB-MLN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-MRY",
        "name": "GB-MRY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NAY",
        "name": "GB-NAY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NLK",
        "name": "GB-NLK",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-ORK",
        "name": "GB-ORK",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-PKN",
        "name": "GB-PKN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-RFW",
        "name": "GB-RFW",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SCB",
        "name": "GB-SCB",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-ZET",
        "name": "GB-ZET",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SAY",
        "name": "GB-SAY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SLK",
        "name": "GB-SLK",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-STG",
        "name": "GB-STG",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WDU",
        "name": "GB-WDU",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WLN",
        "name": "GB-WLN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WLS",
        "name": "GB-WLS",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BGW",
        "name": "GB-BGW",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-BGE",
        "name": "GB-BGE",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-CAY",
        "name": "GB-CAY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-CRF",
        "name": "GB-CRF",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-CMN",
        "name": "GB-CMN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-CGN",
        "name": "GB-CGN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-CWY",
        "name": "GB-CWY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-DEN",
        "name": "GB-DEN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-FLN",
        "name": "GB-FLN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-GWN",
        "name": "GB-GWN",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-AGY",
        "name": "GB-AGY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-MTY",
        "name": "GB-MTY",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-MON",
        "name": "GB-MON",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NTL",
        "name": "GB-NTL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-NWP",
        "name": "GB-NWP",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-PEM",
        "name": "GB-PEM",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-POW",
        "name": "GB-POW",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-RCT",
        "name": "GB-RCT",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-SWA",
        "name": "GB-SWA",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-TOF",
        "name": "GB-TOF",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-VGL",
        "name": "GB-VGL",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      },
      {
        "code": "GB-WRX",
        "name": "GB-WRX",
        "districts": [],
        "coordinates": {
          "latitude": 54,
          "longitude": -2
        }
      }
    ]
  },
  {
    "code": "US",
    "name": "United States",
    "regions": [
      "Americas",
      "North America"
    ],
    "coordinates": {
      "latitude": 38,
      "longitude": -97
    },
    "currency": "USD",
    "timezone": [
      "UTC-12:00",
      "UTC-11:00",
      "UTC-10:00",
      "UTC-09:00",
      "UTC-08:00",
      "UTC-07:00",
      "UTC-06:00",
      "UTC-05:00",
      "UTC-04:00",
      "UTC+10:00",
      "UTC+12:00"
    ],
    "states": [
      {
        "code": "US-AL",
        "name": "US-AL",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-AK",
        "name": "US-AK",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-AZ",
        "name": "US-AZ",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-AR",
        "name": "US-AR",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-CA",
        "name": "US-CA",
        "districts": [],
        "coordinates": {
          "latitude": 36.7783,
          "longitude": -119.4179
        }
      },
      {
        "code": "US-CO",
        "name": "US-CO",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-CT",
        "name": "US-CT",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-DE",
        "name": "US-DE",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-FL",
        "name": "US-FL",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-GA",
        "name": "US-GA",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-HI",
        "name": "US-HI",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-ID",
        "name": "US-ID",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-IL",
        "name": "US-IL",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-IN",
        "name": "US-IN",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-IA",
        "name": "US-IA",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-KS",
        "name": "US-KS",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-KY",
        "name": "US-KY",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-LA",
        "name": "US-LA",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-ME",
        "name": "US-ME",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-MD",
        "name": "US-MD",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-MA",
        "name": "US-MA",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-MI",
        "name": "US-MI",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-MN",
        "name": "US-MN",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-MS",
        "name": "US-MS",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-MO",
        "name": "US-MO",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-MT",
        "name": "US-MT",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-NE",
        "name": "US-NE",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-NV",
        "name": "US-NV",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-NH",
        "name": "US-NH",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-NJ",
        "name": "US-NJ",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-NM",
        "name": "US-NM",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-NY",
        "name": "US-NY",
        "districts": [],
        "coordinates": {
          "latitude": 43,
          "longitude": -75
        }
      },
      {
        "code": "US-NC",
        "name": "US-NC",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-ND",
        "name": "US-ND",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-OH",
        "name": "US-OH",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-OK",
        "name": "US-OK",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-OR",
        "name": "US-OR",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-PA",
        "name": "US-PA",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-RI",
        "name": "US-RI",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-SC",
        "name": "US-SC",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-SD",
        "name": "US-SD",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-TN",
        "name": "US-TN",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-TX",
        "name": "US-TX",
        "districts": [],
        "coordinates": {
          "latitude": 31,
          "longitude": -100
        }
      },
      {
        "code": "US-UT",
        "name": "US-UT",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-VT",
        "name": "US-VT",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-VA",
        "name": "US-VA",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-WA",
        "name": "US-WA",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-WV",
        "name": "US-WV",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-WI",
        "name": "US-WI",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-WY",
        "name": "US-WY",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-DC",
        "name": "US-DC",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-AS",
        "name": "US-AS",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-GU",
        "name": "US-GU",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-MP",
        "name": "US-MP",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-PR",
        "name": "US-PR",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-UM",
        "name": "US-UM",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      },
      {
        "code": "US-VI",
        "name": "US-VI",
        "districts": [],
        "coordinates": {
          "latitude": 38,
          "longitude": -97
        }
      }
    ]
  },
  {
    "code": "UM",
    "name": "United States Minor Outlying Islands",
    "regions": [
      "Americas",
      "North America"
    ],
    "coordinates": {
      "latitude": 19.3,
      "longitude": 166.633333
    },
    "currency": "USD",
    "timezone": [
      "UTC-11:00",
      "UTC-10:00",
      "UTC+12:00"
    ],
    "states": []
  },
  {
    "code": "VI",
    "name": "United States Virgin Islands",
    "regions": [
      "Americas",
      "Caribbean"
    ],
    "coordinates": {
      "latitude": 18.35,
      "longitude": -64.933333
    },
    "currency": "USD",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "VI-VI",
        "name": "VI-VI",
        "districts": [],
        "coordinates": {
          "latitude": 18.35,
          "longitude": -64.933333
        }
      }
    ]
  },
  {
    "code": "UY",
    "name": "Uruguay",
    "regions": [
      "Americas",
      "South America"
    ],
    "coordinates": {
      "latitude": -33,
      "longitude": -56
    },
    "currency": "UYU",
    "timezone": [
      "UTC-03:00"
    ],
    "states": [
      {
        "code": "UY-AR",
        "name": "UY-AR",
        "districts": [],
        "coordinates": {
          "latitude": -33,
          "longitude": -56
        }
      },
      {
        "code": "UY-CA",
        "name": "UY-CA",
        "districts": [],
        "coordinates": {
          "latitude": -33,
          "longitude": -56
        }
      },
      {
        "code": "UY-CL",
        "name": "UY-CL",
        "districts": [],
        "coordinates": {
          "latitude": -33,
          "longitude": -56
        }
      },
      {
        "code": "UY-CO",
        "name": "UY-CO",
        "districts": [],
        "coordinates": {
          "latitude": -33,
          "longitude": -56
        }
      },
      {
        "code": "UY-DU",
        "name": "UY-DU",
        "districts": [],
        "coordinates": {
          "latitude": -33,
          "longitude": -56
        }
      },
      {
        "code": "UY-FS",
        "name": "UY-FS",
        "districts": [],
        "coordinates": {
          "latitude": -33,
          "longitude": -56
        }
      },
      {
        "code": "UY-FD",
        "name": "UY-FD",
        "districts": [],
        "coordinates": {
          "latitude": -33,
          "longitude": -56
        }
      },
      {
        "code": "UY-LA",
        "name": "UY-LA",
        "districts": [],
        "coordinates": {
          "latitude": -33,
          "longitude": -56
        }
      },
      {
        "code": "UY-MA",
        "name": "UY-MA",
        "districts": [],
        "coordinates": {
          "latitude": -33,
          "longitude": -56
        }
      },
      {
        "code": "UY-MO",
        "name": "UY-MO",
        "districts": [],
        "coordinates": {
          "latitude": -33,
          "longitude": -56
        }
      },
      {
        "code": "UY-PA",
        "name": "UY-PA",
        "districts": [],
        "coordinates": {
          "latitude": -33,
          "longitude": -56
        }
      },
      {
        "code": "UY-RN",
        "name": "UY-RN",
        "districts": [],
        "coordinates": {
          "latitude": -33,
          "longitude": -56
        }
      },
      {
        "code": "UY-RV",
        "name": "UY-RV",
        "districts": [],
        "coordinates": {
          "latitude": -33,
          "longitude": -56
        }
      },
      {
        "code": "UY-RO",
        "name": "UY-RO",
        "districts": [],
        "coordinates": {
          "latitude": -33,
          "longitude": -56
        }
      },
      {
        "code": "UY-SA",
        "name": "UY-SA",
        "districts": [],
        "coordinates": {
          "latitude": -33,
          "longitude": -56
        }
      },
      {
        "code": "UY-SJ",
        "name": "UY-SJ",
        "districts": [],
        "coordinates": {
          "latitude": -33,
          "longitude": -56
        }
      },
      {
        "code": "UY-SO",
        "name": "UY-SO",
        "districts": [],
        "coordinates": {
          "latitude": -33,
          "longitude": -56
        }
      },
      {
        "code": "UY-TA",
        "name": "UY-TA",
        "districts": [],
        "coordinates": {
          "latitude": -33,
          "longitude": -56
        }
      },
      {
        "code": "UY-TT",
        "name": "UY-TT",
        "districts": [],
        "coordinates": {
          "latitude": -33,
          "longitude": -56
        }
      }
    ]
  },
  {
    "code": "UZ",
    "name": "Uzbekistan",
    "regions": [
      "Asia",
      "Central Asia"
    ],
    "coordinates": {
      "latitude": 41,
      "longitude": 64
    },
    "currency": "UZS",
    "timezone": [
      "UTC+05:00"
    ],
    "states": [
      {
        "code": "UZ-QR",
        "name": "UZ-QR",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 64
        }
      },
      {
        "code": "UZ-AN",
        "name": "UZ-AN",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 64
        }
      },
      {
        "code": "UZ-BU",
        "name": "UZ-BU",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 64
        }
      },
      {
        "code": "UZ-FA",
        "name": "UZ-FA",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 64
        }
      },
      {
        "code": "UZ-JI",
        "name": "UZ-JI",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 64
        }
      },
      {
        "code": "UZ-KH",
        "name": "UZ-KH",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 64
        }
      },
      {
        "code": "UZ-NG",
        "name": "UZ-NG",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 64
        }
      },
      {
        "code": "UZ-NW",
        "name": "UZ-NW",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 64
        }
      },
      {
        "code": "UZ-QA",
        "name": "UZ-QA",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 64
        }
      },
      {
        "code": "UZ-SA",
        "name": "UZ-SA",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 64
        }
      },
      {
        "code": "UZ-SI",
        "name": "UZ-SI",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 64
        }
      },
      {
        "code": "UZ-SU",
        "name": "UZ-SU",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 64
        }
      },
      {
        "code": "UZ-TO",
        "name": "UZ-TO",
        "districts": [],
        "coordinates": {
          "latitude": 41,
          "longitude": 64
        }
      }
    ]
  },
  {
    "code": "VU",
    "name": "Vanuatu",
    "regions": [
      "Oceania",
      "Melanesia"
    ],
    "coordinates": {
      "latitude": -16,
      "longitude": 167
    },
    "currency": "VUV",
    "timezone": [
      "UTC+11:00"
    ],
    "states": [
      {
        "code": "VU-MAP",
        "name": "VU-MAP",
        "districts": [],
        "coordinates": {
          "latitude": -16,
          "longitude": 167
        }
      },
      {
        "code": "VU-PAM",
        "name": "VU-PAM",
        "districts": [],
        "coordinates": {
          "latitude": -16,
          "longitude": 167
        }
      },
      {
        "code": "VU-SAM",
        "name": "VU-SAM",
        "districts": [],
        "coordinates": {
          "latitude": -16,
          "longitude": 167
        }
      },
      {
        "code": "VU-SEE",
        "name": "VU-SEE",
        "districts": [],
        "coordinates": {
          "latitude": -16,
          "longitude": 167
        }
      },
      {
        "code": "VU-TAE",
        "name": "VU-TAE",
        "districts": [],
        "coordinates": {
          "latitude": -16,
          "longitude": 167
        }
      },
      {
        "code": "VU-TOB",
        "name": "VU-TOB",
        "districts": [],
        "coordinates": {
          "latitude": -16,
          "longitude": 167
        }
      }
    ]
  },
  {
    "code": "VA",
    "name": "Vatican City",
    "regions": [
      "Europe",
      "Southern Europe"
    ],
    "coordinates": {
      "latitude": 41.9,
      "longitude": 12.45
    },
    "currency": "EUR",
    "timezone": [
      "UTC+01:00"
    ],
    "states": [
      {
        "code": "VA-VA",
        "name": "VA-VA",
        "districts": [],
        "coordinates": {
          "latitude": 41.9,
          "longitude": 12.45
        }
      }
    ]
  },
  {
    "code": "VE",
    "name": "Venezuela",
    "regions": [
      "Americas",
      "South America"
    ],
    "coordinates": {
      "latitude": 8,
      "longitude": -66
    },
    "currency": "VES",
    "timezone": [
      "UTC-04:00"
    ],
    "states": [
      {
        "code": "VE-A",
        "name": "VE-A",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-B",
        "name": "VE-B",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-C",
        "name": "VE-C",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-D",
        "name": "VE-D",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-E",
        "name": "VE-E",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-F",
        "name": "VE-F",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-G",
        "name": "VE-G",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-H",
        "name": "VE-H",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-I",
        "name": "VE-I",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-J",
        "name": "VE-J",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-K",
        "name": "VE-K",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-L",
        "name": "VE-L",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-M",
        "name": "VE-M",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-N",
        "name": "VE-N",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-O",
        "name": "VE-O",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-P",
        "name": "VE-P",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-R",
        "name": "VE-R",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-S",
        "name": "VE-S",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-T",
        "name": "VE-T",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-U",
        "name": "VE-U",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-V",
        "name": "VE-V",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-Z",
        "name": "VE-Z",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-Y",
        "name": "VE-Y",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      },
      {
        "code": "VE-W",
        "name": "VE-W",
        "districts": [],
        "coordinates": {
          "latitude": 8,
          "longitude": -66
        }
      }
    ]
  },
  {
    "code": "VN",
    "name": "Vietnam",
    "regions": [
      "Asia",
      "South-Eastern Asia"
    ],
    "coordinates": {
      "latitude": 16.16666666,
      "longitude": 107.83333333
    },
    "currency": "VND",
    "timezone": [
      "UTC+07:00"
    ],
    "states": [
      {
        "code": "VN-44",
        "name": "VN-44",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-53",
        "name": "VN-53",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-54",
        "name": "VN-54",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-55",
        "name": "VN-55",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-56",
        "name": "VN-56",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-43",
        "name": "VN-43",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-50",
        "name": "VN-50",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-31",
        "name": "VN-31",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-57",
        "name": "VN-57",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-58",
        "name": "VN-58",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-40",
        "name": "VN-40",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-59",
        "name": "VN-59",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-48",
        "name": "VN-48",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-04",
        "name": "VN-04",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-33",
        "name": "VN-33",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-60",
        "name": "VN-60",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-39",
        "name": "VN-39",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-45",
        "name": "VN-45",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-30",
        "name": "VN-30",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-03",
        "name": "VN-03",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-61",
        "name": "VN-61",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-62",
        "name": "VN-62",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-63",
        "name": "VN-63",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-64",
        "name": "VN-64",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-15",
        "name": "VN-15",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-23",
        "name": "VN-23",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-14",
        "name": "VN-14",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-65",
        "name": "VN-65",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-66",
        "name": "VN-66",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-34",
        "name": "VN-34",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-47",
        "name": "VN-47",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-28",
        "name": "VN-28",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-01",
        "name": "VN-01",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-35",
        "name": "VN-35",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-09",
        "name": "VN-09",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-02",
        "name": "VN-02",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-41",
        "name": "VN-41",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-67",
        "name": "VN-67",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-22",
        "name": "VN-22",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-18",
        "name": "VN-18",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-36",
        "name": "VN-36",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-68",
        "name": "VN-68",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-32",
        "name": "VN-32",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-24",
        "name": "VN-24",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-27",
        "name": "VN-27",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-29",
        "name": "VN-29",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-25",
        "name": "VN-25",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-52",
        "name": "VN-52",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-05",
        "name": "VN-05",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-37",
        "name": "VN-37",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-20",
        "name": "VN-20",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-69",
        "name": "VN-69",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-21",
        "name": "VN-21",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-26",
        "name": "VN-26",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-46",
        "name": "VN-46",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-51",
        "name": "VN-51",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-07",
        "name": "VN-07",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-49",
        "name": "VN-49",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-70",
        "name": "VN-70",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      },
      {
        "code": "VN-06",
        "name": "VN-06",
        "districts": [],
        "coordinates": {
          "latitude": 16.16666666,
          "longitude": 107.83333333
        }
      }
    ]
  },
  {
    "code": "WF",
    "name": "Wallis and Futuna",
    "regions": [
      "Oceania",
      "Polynesia"
    ],
    "coordinates": {
      "latitude": -13.3,
      "longitude": -176.2
    },
    "currency": "XPF",
    "timezone": [
      "UTC+12:00"
    ],
    "states": [
      {
        "code": "WF-WF",
        "name": "WF-WF",
        "districts": [],
        "coordinates": {
          "latitude": -13.3,
          "longitude": -176.2
        }
      }
    ]
  },
  {
    "code": "EH",
    "name": "Western Sahara",
    "regions": [
      "Africa",
      "Northern Africa"
    ],
    "coordinates": {
      "latitude": 24.5,
      "longitude": -13
    },
    "currency": "DZD",
    "timezone": [
      "UTC+00:00"
    ],
    "states": [
      {
        "code": "EH-EH",
        "name": "EH-EH",
        "districts": [],
        "coordinates": {
          "latitude": 24.5,
          "longitude": -13
        }
      }
    ]
  },
  {
    "code": "YE",
    "name": "Yemen",
    "regions": [
      "Asia",
      "Western Asia"
    ],
    "coordinates": {
      "latitude": 15,
      "longitude": 48
    },
    "currency": "YER",
    "timezone": [
      "UTC+03:00"
    ],
    "states": [
      {
        "code": "YE-AB",
        "name": "YE-AB",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 48
        }
      },
      {
        "code": "YE-AD",
        "name": "YE-AD",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 48
        }
      },
      {
        "code": "YE-BA",
        "name": "YE-BA",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 48
        }
      },
      {
        "code": "YE-HU",
        "name": "YE-HU",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 48
        }
      },
      {
        "code": "YE-JA",
        "name": "YE-JA",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 48
        }
      },
      {
        "code": "YE-MR",
        "name": "YE-MR",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 48
        }
      },
      {
        "code": "YE-MW",
        "name": "YE-MW",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 48
        }
      },
      {
        "code": "YE-DH",
        "name": "YE-DH",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 48
        }
      },
      {
        "code": "YE-HD",
        "name": "YE-HD",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 48
        }
      },
      {
        "code": "YE-HJ",
        "name": "YE-HJ",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 48
        }
      },
      {
        "code": "YE-IB",
        "name": "YE-IB",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 48
        }
      },
      {
        "code": "YE-LA",
        "name": "YE-LA",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 48
        }
      },
      {
        "code": "YE-MA",
        "name": "YE-MA",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 48
        }
      },
      {
        "code": "YE-SD",
        "name": "YE-SD",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 48
        }
      },
      {
        "code": "YE-SN",
        "name": "YE-SN",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 48
        }
      },
      {
        "code": "YE-SH",
        "name": "YE-SH",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 48
        }
      },
      {
        "code": "YE-TA",
        "name": "YE-TA",
        "districts": [],
        "coordinates": {
          "latitude": 15,
          "longitude": 48
        }
      }
    ]
  },
  {
    "code": "ZM",
    "name": "Zambia",
    "regions": [
      "Africa",
      "Eastern Africa"
    ],
    "coordinates": {
      "latitude": -15,
      "longitude": 30
    },
    "currency": "ZMW",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "ZM-02",
        "name": "ZM-02",
        "districts": [],
        "coordinates": {
          "latitude": -15,
          "longitude": 30
        }
      },
      {
        "code": "ZM-08",
        "name": "ZM-08",
        "districts": [],
        "coordinates": {
          "latitude": -15,
          "longitude": 30
        }
      },
      {
        "code": "ZM-03",
        "name": "ZM-03",
        "districts": [],
        "coordinates": {
          "latitude": -15,
          "longitude": 30
        }
      },
      {
        "code": "ZM-04",
        "name": "ZM-04",
        "districts": [],
        "coordinates": {
          "latitude": -15,
          "longitude": 30
        }
      },
      {
        "code": "ZM-09",
        "name": "ZM-09",
        "districts": [],
        "coordinates": {
          "latitude": -15,
          "longitude": 30
        }
      },
      {
        "code": "ZM-05",
        "name": "ZM-05",
        "districts": [],
        "coordinates": {
          "latitude": -15,
          "longitude": 30
        }
      },
      {
        "code": "ZM-06",
        "name": "ZM-06",
        "districts": [],
        "coordinates": {
          "latitude": -15,
          "longitude": 30
        }
      },
      {
        "code": "ZM-07",
        "name": "ZM-07",
        "districts": [],
        "coordinates": {
          "latitude": -15,
          "longitude": 30
        }
      },
      {
        "code": "ZM-01",
        "name": "ZM-01",
        "districts": [],
        "coordinates": {
          "latitude": -15,
          "longitude": 30
        }
      }
    ]
  },
  {
    "code": "ZW",
    "name": "Zimbabwe",
    "regions": [
      "Africa",
      "Southern Africa"
    ],
    "coordinates": {
      "latitude": -20,
      "longitude": 30
    },
    "currency": "ZWL",
    "timezone": [
      "UTC+02:00"
    ],
    "states": [
      {
        "code": "ZW-BU",
        "name": "ZW-BU",
        "districts": [],
        "coordinates": {
          "latitude": -20,
          "longitude": 30
        }
      },
      {
        "code": "ZW-HA",
        "name": "ZW-HA",
        "districts": [],
        "coordinates": {
          "latitude": -20,
          "longitude": 30
        }
      },
      {
        "code": "ZW-MA",
        "name": "ZW-MA",
        "districts": [],
        "coordinates": {
          "latitude": -20,
          "longitude": 30
        }
      },
      {
        "code": "ZW-MC",
        "name": "ZW-MC",
        "districts": [],
        "coordinates": {
          "latitude": -20,
          "longitude": 30
        }
      },
      {
        "code": "ZW-ME",
        "name": "ZW-ME",
        "districts": [],
        "coordinates": {
          "latitude": -20,
          "longitude": 30
        }
      },
      {
        "code": "ZW-MW",
        "name": "ZW-MW",
        "districts": [],
        "coordinates": {
          "latitude": -20,
          "longitude": 30
        }
      },
      {
        "code": "ZW-MV",
        "name": "ZW-MV",
        "districts": [],
        "coordinates": {
          "latitude": -20,
          "longitude": 30
        }
      },
      {
        "code": "ZW-MN",
        "name": "ZW-MN",
        "districts": [],
        "coordinates": {
          "latitude": -20,
          "longitude": 30
        }
      },
      {
        "code": "ZW-MS",
        "name": "ZW-MS",
        "districts": [],
        "coordinates": {
          "latitude": -20,
          "longitude": 30
        }
      },
      {
        "code": "ZW-MI",
        "name": "ZW-MI",
        "districts": [],
        "coordinates": {
          "latitude": -20,
          "longitude": 30
        }
      }
    ]
  }
] as const;

export const getCountryByCode = (code: string): Country | undefined =>
  worldCountries.find(c => c.code === code);

export const getStatesByCountryCode = (countryCode: string) =>
  getCountryByCode(countryCode)?.states ?? [];

export const searchCountries = (searchTerm: string): Country[] =>
  worldCountries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.toLowerCase().includes(searchTerm.toLowerCase())
  );
