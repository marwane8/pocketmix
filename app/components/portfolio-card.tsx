import { Link } from "@remix-run/react";

type PortfolioCardProps = {
  title: string;
  subTitle: string;
  link: string;
  image: string;
  className?: string;
};

export default function PortfolioCard({
  title,
  subTitle,
  link,
  image,
  className,
}: PortfolioCardProps) {
  return (
    <div className={`text-lg text-center w-fit cursor-default ${className}`}>
      <Link to={`/portfolio/${link}`}>
        <div className="relative overflow-hidden">
          <img
            src={image}
            className="object-contain transform transition-transform duration-500 ease-out  hover:scale-110 overflow-hidden"
            alt={title}
          />
        </div>
      </Link>
      <h2 className="font-semibold font-playfair_d"> {title} </h2>
      <h3 className=" font-thin text-stone-500 text-base"> {subTitle} </h3>
    </div>
  );
}
