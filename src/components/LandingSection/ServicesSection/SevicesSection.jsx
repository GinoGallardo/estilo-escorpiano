import ServicesCard from "./ServicesCard";

const SevicesSection = () => {
  return (
    <section className="flex flex-col text-[#FFFFFF] justify-center items-center gap-x-10 lg:h-[1014px] m-auto bg-title">
      <div className="w-full flex justify-around">
        <font className="text-start text-4xl font-poppins font-bold tracking-wide">
          Nuestros Servicios
        </font>
        <button className="border text-secondary px-4 py-2">Ver más</button>
      </div>
      <ServicesCard />
      <div className="w-8/12 border-b-[0.5px] border-[#FFFFFF] opacity-10 mt-20"></div>
    </section>
  );
};

export default SevicesSection;
