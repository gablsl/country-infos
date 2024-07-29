export type CountryType = {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    png: string;
  };
};

export type CountryResponse = CountryType[];
