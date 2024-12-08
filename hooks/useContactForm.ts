import { useState } from "react";
import type { EmailData } from "@/types/contact";

export const useContactForm = () => {
  const [formData, setFormData] = useState<EmailData>({
    to: "",
    subject: "",
    text: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("email berhasil terkirim!");
      console.log("Email sent successfully!");
      // Reset form
      setFormData({ to: "", subject: "", text: "" });
    } else {
      alert("email gagal terkirim");
      console.error("Error sending email.");
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}; 