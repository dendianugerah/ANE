"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import logowa2 from "@/img/logowa.jpg";

const Contact = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to, subject, text }),
    });

    if (response.ok) {
      alert("email berhasil terkirim!");
      console.log("Email sent successfully!");
    } else {
      alert("email gagal terkirim");
      console.error("Error sending email.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container px-8 lg:px-16 mx-auto max-w-7xl">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Siap untuk mendapatkan sparepart kesehatan terbaik?
            </h2>
            <p className="mx-auto max-w-[800px] text-xl text-gray-600 dark:text-gray-400">
              Kontak kami untuk mendapatkan lebih banyak inovasi dibidang alat
              kesehatan dan bagaimana kami bisa memberikan benefit/fasilitas
              terbaik untuk pelayanan kesehatan anda.
            </p>
          </div>
          <div className="w-full max-w-2xl space-y-4">
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <Input
                className="text-lg p-6"
                value={to}
                placeholder="Masukkan Email"
                type="email"
                onChange={(e) => setTo(e.target.value)}
              />
              <Input
                className="text-lg p-6"
                value={subject}
                placeholder="Subject Email"
                type="text"
                onChange={(e) => setSubject(e.target.value)}
              />
              <Input
                className="text-lg p-6"
                value={text}
                placeholder="Pesanan Sparepart"
                type="text"
                onChange={(e) => setText(e.target.value)}
              />
              <Button type="submit" size="lg" className="text-lg px-8 py-6">
                Kirim
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Dengan mengirim form ini, ada setuju dengan{" "}
              <Link className="underline underline-offset-2" href="#">
                Syarat dan Ketentuan
              </Link>
            </p>
          </div>
          <div className="pt-4 pb-1 text-xl text-gray-600 dark:text-gray-400">
            atau kontak kami via WhatsApp dengan klik tombol berikut:
          </div>
          <div>
            <Button
              type="submit"
              size="lg"
              className="
            text-lg bg-green-500 text-white px-8 py-6
            hover:bg-green-600 gap-2"
            >
              <Image
                alt="Advanced Medical Device"
                className="mx-auto rounded-xl object-cover object-center "
                height="30"
                src="/image/logowa2.png"
                width="30"
              />
              <div className="flex items-center">
                WhatsApp
                <ArrowRight className="ml-1 h-5 w-5" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
