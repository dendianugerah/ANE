"use client";

import { Button } from "@/components/ui/button"
import { Heart, Shield, Zap, Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ANEJOS from "@/img/ANEJOS.jpg"
import Header from "@/components/ui/header"
import Contact from "@/components/contact/contact"
import dashboard from "@/img/dashboard.png"
import oxygenoom202 from "@/img/oxygenoom202.jpg"
import ecgcable from "@/img/ecgcable.jpg"
import spo2sensor from "@/img/spo2sensor.jpg"
import { motion } from "framer-motion"

export default function MedicalDeviceLanding1080p() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      {/*bg-gradient-to-r from-blue-50 to-indigo-50*/}
      <main className="flex-1">
        <section className="w-full py-24 lg:py-32 xl:py-48 bg-gray-100">
          <div className="container px-6 md:px-8 lg:px-16 mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter">
                    Penyedia Sparepart Segala Jenis Alat Kesehatan
                  </h1>
                  <p className="max-w-[600px] text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                    Pertama di Indonesia, jika anda bingung harus kemana mencari sparepart alat kesehatan, Maka &quot;ANE&quot; adalah solusi
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="products">
                    <Button size="lg" className="text-lg px-8 py-4 sm:px-8 sm:py-6">
                      Explore Produk Kami
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button size="lg" variant="outline" className="text-lg px-8 py-4 sm:px-8 sm:py-6">
                        Request a Demo
                      </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto">
                <Image
                  alt="Advanced Medical Device"
                  className="rounded-xl object-cover object-center"
                  height="600"
                  src={ANEJOS}
                  width="800"
                />
              </div>
            </div>
          </div>
        </section>

        <section 
        id="products" 
        className="w-full py-24 lg:py-32" 
        >
          <div className="container px-8 lg:px-16 mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16">
              Beberapa Jasa dan Product
            </h2>
            <div 
            className="grid gap-12 lg:grid-cols-3 text-center"
            
            >
              {[
                {
                  title: "Oxygen Sensor",
                  description: "Oxygen sensor OOM 202 cocok digunakan untuk berbagai macam ventilator",
                  source: oxygenoom202,
                },
                {
                  title: "ECG for Pasien Monitor",
                  description: "Kalau kalian mencari kabel ECG untuk pasien monitor, disini tempatnya",
                  source: ecgcable
                },
                {
                  title: "Spo2 Pasien Monitor",
                  description: "Jangankan kabel ECG, Spo2 juga ada teman. Pokoknya langsung dituku ae",
                  source: spo2sensor
                },
              ].map((product, index) => (
                <motion.div 
                key={index} 
                className="flex flex-col items-center space-y-4 border p-8 rounded-xl"
                initial={{
                  // opacity: 0.6,
                  // scale:0.6,
                  y:200
                }}
                whileInView={{
                  // opacity: 1,
                  // scale: 1,
                  y:50,
                  transition:{
                    type: "spring",
                    // bounce: 0.4,
                    duration: 0.55
                  }
                }}
                viewport={{
                  once: true
                }}
                >
                  <Image
                    alt={product.title}
                    className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                    height="300"
                    src={product.source}
                    width="300"
                  />
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 text-center">{product.description}</p>
                  <Link href="products">
                    <Button variant="outline" size="lg" className="mt-4">
                      Cek Produk
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </ section>
        
        <section className="w-full py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-8 lg:px-16 mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16">
              Kenapa harus Abadi Nusantara Entitas?
            </h2>
            <div className="grid gap-12 sm:grid-cols-3 text-center">
              {[
                {
                  icon: Shield,
                  title: "Terpercaya",
                  description: "Didasarkan atas kepercayan kepada client, sparepart pasti mantab-mantab.",
                },
                {
                  icon: Zap,
                  title: "Cepat",
                  description: "Dalam melayani client, cepat tanggap atau respon atau apapun itu jadi salah satu ciri ANE.",
                },
                {
                  icon: Heart,
                  title: "Selalu ada",
                  description: "Apapun yang kalian cari di ANE, selalu ada solusinya.",
                },
              ].map((feature, index) => (
                <motion.div 
                key={index} 
                className="flex flex-col items-center space-y-4 p-8 rounded-xl bg-white dark:bg-gray-700"
                initial={{
                  // opacity: 0.6,
                  // scale:0.6,
                  y:200
                }}
                whileInView={{
                  // opacity: 1,
                  // scale: 1,
                  y:50,
                  transition:{
                    type: "spring",
                    // bounce: 0.4,
                    duration: 0.55
                  }
                }}
                viewport={{
                  once: true
                }}
                >
                  <div className="p-3 bg-primary bg-opacity-15 rounded-full">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-24 lg:py-32">
          <div className="container px-8 lg:px-16 mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16">
              Trusted by Leading Healthcare Providers
            </h2>
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  quote: "Sparepart yang diberikan berkualitas tinggi dan harganya juga masuk akal. Saya selalu merekomendasikan ANE sebagai tempat pencarian sparepart alkes",
                  name: "Naufal hijri Magriby",
                  title: "Director",
                  hospital: "Fania Ersa",
                },
                {
                  quote: "Salah satu tempat terbaik untuk membeli sparepart adalah ANE. Saya sangat menyukai pelayanannya dan kecepatan pengiriman barang dari ANE.",
                  name: "Edi Susanto",
                  title: "Director",
                  hospital: "LabKesDa",
                },
                {
                  quote: "Mungkin bukan jadi rahasia lagi bahwa ANE adalah tempat pencarian sparepart yang baik. Dengan harga BPJS dan kualitas orisinil, ANE selalu menjadi rekomendasi.",
                  name: "R. Afif Nur Pramudito",
                  title: "CEO",
                  hospital: "Siemens Healthinners",
                },
              ].map((testimonial, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 border p-8 rounded-xl">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-primary" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-400 text-center">&quot;{testimonial.quote}&quot;</p>
                  <p className="font-semibold text-xl">{testimonial.name}</p>
                  <p className="text-lg text-gray-600">{testimonial.title}</p>
                  <p className="text-lg text-gray-600">{testimonial.hospital}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-8 lg:px-16 mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16">
              Fitur &quot;Hopital Manage&quot;
            </h2>
            <motion.div 
            className="text-xl text-gray-600 dark:text-gray-400"
            initial={{
              opacity: 0,
              
            }}
            whileInView={{
              opacity: 1,
              
              transition:{
                type: "spring",
               
                duration: 1
              }
            }}
            >
              <p >
                Selain menjual sparepart peralatan kesehatan, ANE juga mempunyai fitur &quot;Hospital Manage&quot; dimana fitur tersebut sangat berguna untuk seorang elektromedis dalam melakukan preventif maintenance di Rumah Sakit.
              <br/><br/>
              </p>
              <p className="text-sm text-black">
                *fitur masih dalam tahap development
              </p>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-24 lg:py-32">
          <div className="container px-8 lg:px-16 mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16">
              Jasa Pembuatan Web Untuk Perusahaan Peralatan Kesehatan
            </h2>
            <div className="text-xl text-gray-600 dark:text-gray-400">
              <motion.p
              initial={{
                opacity: 0,
                
              }}
              whileInView={{
                opacity: 1,
                
                transition:{
                  type: "spring",
                 
                  duration: 1
                }
              }}
              >
                Selain menjual sparepart peralatan kesehatan, ANE juga mempunyai fitur &quot;Hospital Manage&quot; dimana fitur tersebut sangat berguna untuk seorang elektromedis dalam melakukan preventif maintenance di Rumah Sakit.
                <br/><br/>
              </motion.p>
              <div>
                <motion.div
                initial={{
                  // opacity: 0.6,
                  // scale:0.6,
                  y:200
                }}
                whileInView={{
                  // opacity: 1,
                  // scale: 1,
                  y:50,
                  transition:{
                    type: "spring",
                    // bounce: 0.4,
                    duration: 0.55
                  }
                }}
                viewport={{
                  once: true
                }}
                >
                  <Image
                    alt="Advanced Medical Device"
                    className="mx-auto rounded-xl object-cover object-center "
                    height="1100"
                    src={dashboard}
                    width="13000"
                  />
                </motion.div>
                <br />
                <p className="text-center text-sm">
                  *<span className="underline">Diatas merupakan contoh pembuatan sistem inventaris maintenance peralatan medis</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Contact/>
      </main>
      <footer className="py-8 w-full shrink-0 border-t">
        <div className="container px-8 lg:px-16 mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 CV Abadi Nusantara Entitas.
            </p>
            <nav className="sm:ml-auto flex gap-6">
              <Link className="text-sm hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm hover:underline underline-offset-4" href="#">
                Privacy Policy
              </Link>
              <Link className="text-sm hover:underline underline-offset-4" href="#">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}