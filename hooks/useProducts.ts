import { useQuery } from "@tanstack/react-query";
import type { Product } from "@/types/product";

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("/api/products", {
    method: "GET",
  });
  if (!res.ok) throw new Error("Gagal fetch data api products");
  return await res.json();
};

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
}; 