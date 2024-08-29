type ServiceCardProps = {
  title: string;
  price: number;
  featureList?: string[];
  image?: string; // Add this prop to handle the gallery images
  imageIndex?: number;
};

export default function ServiceCard({
  title,
  price,
  featureList,
  image,
}: ServiceCardProps) {
  return (
    <div className="border bg-accent h-full border-secondary p-5 gap-8 items-center sm:w-[500px] m-auto">
      <div className="h-1/6 flex items-center">
        <h3 className="text-3xl font-semibold tracking-wide">
          {title.toUpperCase()}
        </h3>
      </div>

      <div className="flex h-5/6">
        <div className="flex flex-col justify-evenly">
          <h3 className="text-3xl font-bold">$ {price}</h3>
          {featureList && (
            <ul className="list-disc text-lg translate-x-5">
              {featureList.map((feature, index) => (
                <li key={index} className="pr-5">
                  {feature}
                </li>
              ))}
            </ul>
          )}
          <div className="my-3 flex">
            <button className="cta-btn">BOOK TODAY</button>
          </div>
        </div>
        {image && (
          <img
            src={image}
            className="max-h-64 object-contain hidden lg:block"
            alt={title}
          />
        )}
      </div>
    </div>
  );
}
