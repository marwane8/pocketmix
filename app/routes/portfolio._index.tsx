import PortfolioCard from "~/components/portfolio-card";

export default function Portfolio() {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 mx-5 gap-10 my-10">
      <PortfolioCard/>
      <PortfolioCard/>
      <PortfolioCard/>
      <PortfolioCard/>
      <PortfolioCard/>
      <PortfolioCard/>
    </div>
  );
}
