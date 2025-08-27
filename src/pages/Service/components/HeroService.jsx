import HeroServiceImage from "./HeroServiceImage";
import HeroServiceContent from "./HeroServiceContent";

const HeroService = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-y-6 lg:gap-x-10 max-w-7xl my-10 lg:mt-32 mx-4 lg:mx-auto bg-[#FFFFFF]">
      <HeroServiceImage />
      <HeroServiceContent />
    </section>
  );
};

export default HeroService;
