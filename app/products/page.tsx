"use client";

import Header from "@/components/ui/header";
import MedicalSparePartsPreview from "@/components/ui/medicalpreview";
import { QueryClientProvider, QueryClient} from "@tanstack/react-query";

const queryClient = new QueryClient();

const halaman = () => {
  return (
    <div>
      <Header />
      <QueryClientProvider client={queryClient}>
          <MedicalSparePartsPreview />
      </QueryClientProvider>
    </div>
  );
};

export default halaman;

