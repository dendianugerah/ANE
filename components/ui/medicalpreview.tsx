"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, Package, Contact } from "lucide-react"
import Link from "next/link"

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

const MedicalSparePartsPreview = ({products}: {products: Products[]}) => {
  if (!products || !Array.isArray(products)) {
    return <p>No products available</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Medical Equipment Spare Parts</h1>
      <p className="text-lg mb-8">
      Telusuri pilihan suku cadang berkualitas tinggi kami untuk berbagai peralatan medis. 
      Semua suku cadang adalah komponen OEM asli atau setara yang disetujui, pastikan kompatibilitas dan kinerja dengan <span> &quot;</span> 
      <Link 
      className="text-blue-600 hover:text-purple-600 h-[2px] w-0 group-hover:w-full transition-all relative cursor-pointer ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-black before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-black after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]" 
      href="#">
        Contact Us
      </Link>
      <span>&quot;.</span>
      </p>

      <Tabs defaultValue="all" className="mb-6">
        <div className="flex">
          <TabsList>
            <TabsTrigger value="all">All Parts</TabsTrigger>
            <TabsTrigger value="imaging">Imaging</TabsTrigger>
            <TabsTrigger value="emergency">Emergency</TabsTrigger>
            <TabsTrigger value="respiratory">Respiratory</TabsTrigger>
            <TabsTrigger value="life support">life support</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="all">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products?.length > 0 ? (
              products.map((product:Products) => (
                <SparePartCard key={product.id} product={product} />
              ))
            ) : (
              <p>no products detect</p>
            )}
            
          </div>
        </TabsContent>

        <TabsContent value="imaging">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.filter(product => product.category === "Imaging Equipment").map((product) => (
              <SparePartCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="emergency">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.filter(product => product.category === "Emergency Equipment").map((product) => (
              <SparePartCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="respiratory">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.filter(product => product.category === "Respiratory Equipment").map((product) => (
              <SparePartCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="life support">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.filter(product => product.category === "Life Support").map((product) => (
              <SparePartCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

      </Tabs>
    </div>
  )
}

const SparePartCard = ({ product }:{ product: Products}) => {
  return (
    <Card>
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
          <span className="text-2xl font-bold">Rp {product.price.toFixed(2)}</span>
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
        <Link href={product.link}>
          <Button>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Buy in Shopee
          </Button>
        </Link>
        
      </CardFooter>
    </Card>
  )
}

export default MedicalSparePartsPreview;