"use client";

import Header from "@/components/ui/header";
import MedicalSparePartsPreview from "@/components/ui/medicalpreview";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

const halaman = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <MedicalSparePartsPreview />
      </div>
    </QueryClientProvider>
  )
}

export default halaman;

