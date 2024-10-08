import { MetaFunction } from "@remix-run/react";
import flowerWall from "../assets/stock/flower-blur.jpg";
import ContactForm from "./contact/contact-form";
import ContactStudio from "./contact/contact-studio";

export const meta: MetaFunction= () => {
  return [
    { title: "Contact | Miloud Photography" },
    {
      name: "Miloud Photography Contact Page",
      content:
        "Contact form for booking an appointment for Miloud Photography Services in Astoria New York."
    },
  ];
}

export default function Contact() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div
        className="h-36 md:h-60 bg-cover"
        style={{ backgroundImage: `url(${flowerWall})` }}
      >
        <div className="w-full h-full bg-black bg-opacity-40 text-neutral flex flex-col justify-center text-center">
          <h1 className="font-playfair_d  text-2xl md:font-semibold md:text-5xl">
            Book A Free Consultation Today!
          </h1>
          <h3 className="font-extralight text-yellow-300 text-2xl md:text-4xl">
            Now Booking {currentYear} & {currentYear + 1} Weddings
          </h3>
        </div>
      </div>
      <ContactForm />
      <ContactStudio />
    </div>
  );
}
