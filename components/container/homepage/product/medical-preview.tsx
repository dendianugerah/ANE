"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import MedicalPreviewSkeleton from "@/components/skeleton/medical-preview-skeleton";
import { useProducts } from "@/hooks/useProducts";
import { SparePartCard } from "./spare-part-card";
import type { Product, ProductCategory } from "@/types/product";

const MedicalSparePartsPreview = () => {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) return <MedicalPreviewSkeleton />;
  if (isError) return <p>Terjadi kesalahan saat memuat data produk.</p>;
  if (!products || products.length === 0) return <p>Produk tidak tersedia.</p>;

  const filterByCategory = (products: Product[], category: ProductCategory) => {
    return products.filter(product => product.category === category);
  };

  return (
    <div className="container mx-auto px-4 py-6 ">
      <h1 className="text-2xl font-bold mb-4 text-center">Medical Equipment Spare Parts</h1>
      <p className="text-lg mb-6 text-justify">
        Telusuri pilihan suku cadang berkualitas tinggi kami untuk berbagai peralatan medis. 
        Semua suku cadang adalah komponen OEM asli atau setara yang disetujui, pastikan kompatibilitas dan kinerja dengan <span> &quot;</span> 
        <Link 
          className="text-blue-600 hover:text-purple-600 h-[2px] w-0 group-hover:w-full transition-all relative cursor-pointer ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-black before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-black after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]" 
          href="/#contact">
          Contact Us
        </Link>
        <span>&quot;.</span>
      </p>

      <Tabs defaultValue="all" className="mb-6">
        <div className="flex mb-4">
          <TabsList className="w-full sm:max-w-sm md:max-w-lg lg:max-w-lg px-2"/* overflow-auto */>
            <TabsTrigger value="all">All Parts </TabsTrigger>
            <TabsTrigger value="imaging">Imaging</TabsTrigger>
            <TabsTrigger value="emergency">Emergency</TabsTrigger>
            <TabsTrigger value="respiratory">Respiratory</TabsTrigger>
            <TabsTrigger value="life support">life support</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="all">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {products?.length > 0 ? (
              products.map((product: Product) => (
                <SparePartCard key={product.id} product={product} />
              ))
            ) : (
              <p>no products detect</p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="imaging">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filterByCategory(products, "Imaging Equipment").map((product) => (
              <SparePartCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="emergency">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filterByCategory(products, "Emergency Equipment").map((product) => (
              <SparePartCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="respiratory">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filterByCategory(products, "Respiratory Equipment").map((product) => (
              <SparePartCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="life support">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filterByCategory(products, "Life Support").map((product) => (
              <SparePartCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

      </Tabs>
    </div>
  );
};

export default MedicalSparePartsPreview;
