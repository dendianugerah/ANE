import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

const Contact = () => {
    const nodemailer = require("nodemailer")

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "radeafb@gmail.com",
            pass: "rvtr quqo vgji qwqk",
        },
    })

    const mailOptions = {
        from: "reitokun456@gmail.com",
        to: "dendianugrah40@gmail.com",
        subject: "Hello from Nodemailer",
        text: "This is a test email sent using Nodemailer.",
      };

    transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
        console.error("Error sending email: ", error);
    } else {
        console.log("Email sent: ", info.response);
    }
    });

    return (
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
    )
}

export default Contact;