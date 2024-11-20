import { fetcher } from '@/lib/utils';
import { useQuery } from 'react-query';

interface Products {
    id: string;
    name: string;
    category: string;
    compatibility: string;
    price: number;
    stock: string;
    description: string;
    link: string;
  }

export const useUserQuery = () => {
  return useQuery<Products[]>('products', () => fetcher('/api/products'));
};
