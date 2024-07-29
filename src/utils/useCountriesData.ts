import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CountryResponse } from '../types/countryType';

const fetchCountries = async (): Promise<CountryResponse> => {
  const response = await axios.get<CountryResponse>(
    'https://restcountries.com/v3.1/all'
  );
  return response.data;
};

export function useCountriesData() {
  const query = useQuery({
    queryFn: fetchCountries,
    queryKey: ['countries'],
  });

  return query;
}
