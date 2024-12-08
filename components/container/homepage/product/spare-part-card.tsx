import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Package } from "lucide-react";
import Link from "next/link";

interface SparePartCardProps {
  product: Product;
}

export const SparePartCard = ({ product }: SparePartCardProps) => {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardDescription className="text-sm text-gray-500">{product.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <Badge variant="secondary" className="mb-2">
          {product.compatibility}
        </Badge>
        <p className="text-sm mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">Rp {product.price.toFixed(2)}</span>
          <span className="text-xs text-gray-500">
            <Package className="inline mr-1 h-4 w-4" />
            {product.stock} in stock
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="text-sm">
          Details
        </Button>
        <Link href={`https://wa.me/+6282256692390?text=Halo salam kenal, saya ingin membeli product ${product.name}. Tolong beri tahu saya mengenai kelengkapan produk tersebut`}>
          <Button>
            <ShoppingCart className="mr-2 h-4 w-4"/>
            Buy by WA
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}; 