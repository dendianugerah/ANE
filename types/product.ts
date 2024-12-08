export interface Product {
  id: string;
  name: string;
  category: string;
  compatibility: string;
  price: number;
  stock: string;
  description: string;
  link: string;
}

export type ProductCategory = 
  | "Imaging Equipment"
  | "Emergency Equipment"
  | "Respiratory Equipment"
  | "Life Support"; 