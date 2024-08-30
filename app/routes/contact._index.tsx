import flowerWall from "../assets/flower-wall.jpg";
import ContactForm from "./contact/contact-form";
import ContactStudio from "./contact/contact-studio";

export default function Contact() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div
        className="h-60 bg-cover"
        style={{ backgroundImage: `url(${flowerWall})` }}
      >
        <div className="w-full h-full bg-black bg-opacity-40 text-neutral text-4xl flex flex-col justify-center text-center">
          <h1 className="font-playfair_d font-semibold text-5xl">
            Book A Free Consultation Today!
          </h1>
          <h3 className=" font-extralight text-yellow-300">
            Now Booking {currentYear} + {currentYear + 1} Weddings
          </h3>
        </div>
      </div>
      <ContactForm />
      <ContactStudio />
    </div>
  );
}
