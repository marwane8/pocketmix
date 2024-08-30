import redshirt from "../../assets/redshirt.jpg";
import seating from "../../assets/seating.jpg";
import studio from "../../assets/studio.jpg";

export default function ContactStudio() {
  return (
    <>
      <div className="w-screen flex gap-5 h-60">
        <img
          className="h-full w-full  object-cover object-bottom"
          src={redshirt}
          alt="man sitting down"
        />
        <img
          src={seating}
          alt="man sitting down"
          className="h-full w-full  object-cover"
        />
        <img
          src={studio}
          alt="studio"
          className="h-full w-full  object-cover"
        />
      </div>
      <div className="border bg-accent h-full border-secondary max-w-screen-lg mx-5 md:mx-auto text-center p-3 my-10">
        <h1 className="text-2xl font-playfair_d">Vist our Studio</h1>
        <h1 className="text-2xl font-extrabold">30-10 34th St, Astoria, NYC</h1>
        <p className=" md:text-lg m-auto max-w-4xl font-thin py-3">
          We welcome you to our cozy Astoria studio, conveniently located near
          the N/W trains. With nearby street parking, your visit will be as
          effortless as it is inspiring, all within the heart of this vibrant,
          culturally rich neighborhood.
        </p>
      </div>
      <div className="map-responsive">
        <iframe
          title="Responsive Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8428189841966!2d-73.9192292!3d40.765481699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f38a6854c51%3A0x89c2670367c5bc9!2sMiloud%20Photography!5e0!3m2!1sen!2sus!4v1724978009148!5m2!1sen!2sus"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
