import { Link } from "@remix-run/react";
import shoe1 from "~/assets/shoe1.jpg";

export default function PortfolioCard() {
  return (
    <div className="text-lg text-center w-fit cursor-default">
      <Link to={"/portfolio/graces-wedding"}>
        <div className="relative overflow-hidden">
          <img
            src={shoe1}
            className="object-contain transform transition-transform duration-500 ease-out  hover:scale-110 overflow-hidden"
            alt="shoe"
          />
        </div>
      </Link>
      <h2 className="font-semibold"> Grace&apos;s Wedding </h2>
      <h3 className=" font-thin text-stone-500 text-base"> WEDDINGS </h3>
    </div>
  );
}
