import { ShoppingCart, Package } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Products {
    id: string;
    name: string;
    category: string;
    compatibility: string;
    price: number;
    stock: number;
    description: string;
    link: string;
  }

  const SparePartCard = ({ products }: { products: Products[] }) => {
    if (!products || products.length === 0) {
        return <p>No products available.</p>;
    }

    return (
        <div>
            {products.map((product: Products) => (
                <Card key={product.id}>
                    <CardHeader>
                        <CardTitle>{product.name}</CardTitle>
                        <CardDescription>{product.category}</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <Badge variant="secondary" className="mb-2">
                            {product.compatibility}
                        </Badge>
                        <p className="text-sm mb-4">{product.description}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                            <span className="text-sm text-gray-500">
                                <Package className="inline mr-1 h-4 w-4" />
                                {product.stock} in stock
                            </span>
                        </div>
                    </CardContent>

                    <CardFooter className="flex justify-between">
                        <Button variant="outline">
                            {/* <Tool className="mr-2 h-4 w-4" /> */}
                            Details
                        </Button>
                        <Link href="maintenance">
                            <Button>
                                <ShoppingCart className="mr-2 h-4 w-4" />
                                Add to Cart
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}

export default SparePartCard;