import HeroService from "./components/HeroService";
import Baner from "/assets/baner-servicios.jpg";
import ServicesCard from "../../components/LandingSection/ServicesSection/ServicesCard";
import ClientFeedback from "../../components/LandingSection/ClientFeedback/ClientFeedback";

const Services = () => {
  return (
    <>
      <section
        className="w-full h-16 lg:h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Baner})` }}
      >
        <h2 className="text-4xl text-center lg:text-7xl text-white font-poppins font-bold tracking-wider">
          Servicios
        </h2>
      </section>
      <HeroService />
      <section className="flex flex-col text-[#FFFFFF] justify-center lg:mx-auto py-10 items-center gap-x-10 bg-title">
        <ServicesCard />
        <div className="w-8/12 border-b-[0.5px] border-[#FFFFFF] bg-title opacity-10 mt-20"></div>
      </section>
      <ClientFeedback />
    </>
  );
};

export default Services;
