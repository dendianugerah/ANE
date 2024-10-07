import Header from "@/components/ui/header";
import MedicalSparePartsPreview from "@/components/ui/medicalpreview";
import { getProducts } from "@/lib/data";


const halaman = async () => {
  const products = await getProducts();

  return (
    <div>
      <Header/>
      <MedicalSparePartsPreview products={products}/>
    </div>
  )
}

export default halaman;

