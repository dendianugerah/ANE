import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, Package } from "lucide-react"
import Link from "next/link"

export default function MedicalSparePartsPreview() {
  const spareParts = [
    {
      name: "X-Ray Tube Assembly",
      category: "Imaging Equipment",
      compatibility: "Compatible with GE Lightspeed CT Scanner",
      price: 4999.99,
      stock: 5,
      description: "High-performance X-ray tube assembly for GE Lightspeed CT scanners. Ensures clear and precise imaging results.",
    },
    {
      name: "Defibrillator Battery Pack",
      category: "Emergency Equipment",
      compatibility: "Fits Philips HeartStart XL+ Defibrillator",
      price: 299.99,
      stock: 20,
      description: "Long-lasting lithium-ion battery pack. Provides reliable power for up to 100 shocks or 5 hours of monitoring.",
    },
    {
      name: "Ventilator Flow Sensor",
      category: "Respiratory Equipment",
      compatibility: "For Dräger Evita V500 Ventilator",
      price: 149.99,
      stock: 15,
      description: "High-precision flow sensor for accurate measurement of patient breath volume and flow rates.",
    },
    {
      name: "Infusion Pump Motor",
      category: "Infusion Systems",
      compatibility: "Suitable for B. Braun Infusomat Space Pump",
      price: 399.99,
      stock: 8,
      description: "Replacement motor for B. Braun infusion pumps. Ensures accurate and consistent fluid delivery rates.",
    },
    {
      name: "Ultrasound Transducer Cable",
      category: "Imaging Equipment",
      compatibility: "For Philips EPIQ and Affiniti Ultrasound Systems",
      price: 249.99,
      stock: 12,
      description: "High-quality replacement cable for ultrasound transducers. Provides clear signal transmission for optimal image quality.",
    },
    {
      name: "Anesthesia Machine O2 Sensor",
      category: "Anesthesia Equipment",
      compatibility: "Compatible with GE Datex-Ohmeda Anesthesia Workstations",
      price: 179.99,
      stock: 10,
      description: "Oxygen sensor for precise monitoring of O2 levels in anesthesia gas mixtures. Crucial for patient safety during procedures.",
    }
  ]

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
            {spareParts.map((part, index) => (
              <SparePartCard key={index} part={part} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="imaging">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {spareParts.filter(part => part.category === "Imaging Equipment").map((part, index) => (
              <SparePartCard key={index} part={part} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="emergency">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {spareParts.filter(part => part.category === "Emergency Equipment").map((part, index) => (
              <SparePartCard key={index} part={part} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="respiratory">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {spareParts.filter(part => part.category === "Respiratory Equipment").map((part, index) => (
              <SparePartCard key={index} part={part} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function SparePartCard({ part }:{ part: any}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{part.name}</CardTitle>
        <CardDescription>{part.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <Badge variant="secondary" className="mb-2">
          {part.compatibility}
        </Badge>
        <p className="text-sm mb-4">{part.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">${part.price.toFixed(2)}</span>
          <span className="text-sm text-gray-500">
            <Package className="inline mr-1 h-4 w-4" />
            {part.stock} in stock
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
  )
}