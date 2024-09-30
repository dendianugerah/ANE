import SparePartCard from "@/components/ui/sparepartcard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
  
  export default function MedicalSparePartsPreview({products}: {products: Products[]}){
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Medical Equipment Spare Parts</h1>
        <p className="text-lg mb-8">
          Browse our selection of high-quality spare parts for various medical equipment. 
          All parts are genuine OEM components or approved equivalents, ensuring compatibility and performance.
        </p>
  
        <Tabs defaultValue="all" className="mb-6">
          <TabsList>
            <TabsTrigger value="all">All Parts</TabsTrigger>
            <TabsTrigger value="imaging">Imaging</TabsTrigger>
            <TabsTrigger value="emergency">Emergency</TabsTrigger>
            <TabsTrigger value="respiratory">Respiratory</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product: Products ) => (
                <SparePartCard key={product.id} products={product} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="imaging">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.filter(product => product.category === "Imaging Equipment").map((product) => (
                <SparePartCard key={product.id} products={product} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="emergency">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.filter(product => product.category === "Emergency Equipment").map((products) => (
                <SparePartCard key={products.id} products={products} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="respiratory">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.filter(product => product.category === "Respiratory Equipment").map((product) => (
                <SparePartCard key={product.id} products={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    )
  }