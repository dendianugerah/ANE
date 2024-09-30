import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SparePartCard from "@/components/ui/sparepartcard"
import { Heart, Shield, Zap, Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MedicalDeviceLanding1080p() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-8 lg:px-16 h-20 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <span className="ml-3 text-2xl font-bold">CV Abadi Nusantara Entitas</span>
        </Link>
        <nav className="ml-auto flex gap-8">
          <Link className="text-lg font-medium hover:underline underline-offset-4" href="products">
            Products
          </Link>
          <Link className="text-lg font-medium hover:underline underline-offset-4" href="maintenance">
            Hopital Manage
          </Link>
          <Link className="text-lg font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-8 lg:px-16 mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
                    Advancing Healthcare Through Innovation
                  </h1>
                  <p className="max-w-[600px] text-xl text-gray-600 dark:text-gray-400">
                    Discover our cutting-edge medical devices designed to improve patient outcomes and streamline
                    healthcare delivery.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button size="lg" className="text-lg px-8 py-6">
                    Explore Our Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                    Request a Demo
                  </Button>
                </div>
              </div>
              <Image
                alt="Advanced Medical Device"
                className="mx-auto rounded-xl object-cover object-center"
                height="600"
                src="/placeholder.svg"
                width="800"
              />
            </div>
          </div>
        </section>
        <section id="products" className="w-full py-24 lg:py-32">
          <div className="container px-8 lg:px-16 mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16">
              Beberapa Jasa dan Product
            </h2>
            <div className="grid gap-12 lg:grid-cols-3">
              {[
                {
                  title: "HealthMonitor Pro",
                  description: "Advanced patient monitoring system with real-time data analysis and alerts.",
                },
                {
                  title: "SurgAssist 3000",
                  description: "Robotic surgical assistance system for enhanced precision and reduced recovery times.",
                },
                {
                  title: "DiagnoScan Ultra",
                  description: "High-resolution diagnostic imaging device for accurate and fast results.",
                },
              ].map((product, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 border p-8 rounded-xl">
                  <Image
                    alt={product.title}
                    className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                    height="300"
                    src="/placeholder.svg"
                    width="300"
                  />
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 text-center">{product.description}</p>
                  <Button variant="outline" size="lg" className="mt-4">
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-8 lg:px-16 mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16">
              Why Choose MediTech Innovations?
            </h2>
            <div className="grid gap-12 sm:grid-cols-3">
              {[
                {
                  icon: Shield,
                  title: "FDA Approved",
                  description: "All our devices meet rigorous FDA standards for safety and efficacy.",
                },
                {
                  icon: Zap,
                  title: "Cutting-edge Technology",
                  description: "We leverage the latest advancements in medical technology for optimal performance.",
                },
                {
                  icon: Heart,
                  title: "Improved Patient Outcomes",
                  description: "Our devices are designed to enhance patient care and recovery.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 p-8 rounded-xl bg-white dark:bg-gray-700">
                  <div className="p-3 bg-primary bg-opacity-15 rounded-full">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 text-center">{feature.description}</p>
                </div>
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
                  quote: "The SurgAssist 3000 has revolutionized our surgical procedures. It's increased our precision and reduced recovery times for our patients.",
                  name: "Dr. Jane Smith",
                  title: "Chief of Surgery",
                  hospital: "Metro General Hospital",
                },
                {
                  quote: "The HealthMonitor Pro has significantly improved our patient care in the ICU. Its real-time alerts have helped us respond faster to critical situations.",
                  name: "Dr. Michael Johnson",
                  title: "ICU Director",
                  hospital: "City Medical Center",
                },
                {
                  quote: "The DiagnoScan Ultra has transformed our diagnostic capabilities. We're now able to provide faster and more accurate results to our patients.",
                  name: "Dr. Emily Chen",
                  title: "Head of Radiology",
                  hospital: "Westside Health Institute",
                },
              ].map((testimonial, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 border p-8 rounded-xl">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-primary" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-400 text-center">"{testimonial.quote}"</p>
                  <p className="font-semibold text-xl">{testimonial.name}</p>
                  <p className="text-lg text-gray-600">{testimonial.title}</p>
                  <p className="text-lg text-gray-600">{testimonial.hospital}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-8 lg:px-16 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Elevate Your Healthcare Delivery?
                </h2>
                <p className="mx-auto max-w-[800px] text-xl text-gray-600 dark:text-gray-400">
                  Contact us to learn more about our innovative medical devices and how they can benefit your
                  healthcare facility.
                </p>
              </div>
              <div className="w-full max-w-2xl space-y-4">
                <form className="flex flex-col space-y-4">
                  <Input className="text-lg p-6" placeholder="Your Name" type="text" />
                  <Input className="text-lg p-6" placeholder="Your Email" type="email" />
                  <Input className="text-lg p-6" placeholder="Your Healthcare Facility" type="text" />
                  <Button type="submit" size="lg" className="text-lg px-8 py-6">
                    Request Information
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  By submitting this form, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 w-full shrink-0 border-t">
        <div className="container px-8 lg:px-16 mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2023 MediTech Innovations. All rights reserved.
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