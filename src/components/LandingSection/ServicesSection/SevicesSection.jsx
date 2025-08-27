import { Link } from "react-router-dom";
import ShadowButton from "../../ui/ShadowButton";
import ServicesCard from "./ServicesCard";

const SevicesSection = () => {
  return (
    <section className="flex flex-col text-[#FFFFFF] justify-center lg:mx-auto py-10 items-center gap-x-10 lg:h-[1014px] bg-title">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:justify-between  max-w-7xl mx-4 lg:mx-auto gap-y-6">
        <font className="text-center lg:text-start text-4xl font-poppins font-bold tracking-wide">
          Nuestros Servicios
        </font>
        <Link to="/services">
          <ShadowButton
            children="EPLORAR MÁS"
            className="w-48 border-2 border-[#484B4D] shadow-[#484B4D] text-[#ffffff] hover:bg-[#000000]"
          />
        </Link>
      </div>
      <ServicesCard limit={3} />
      <div className="w-8/12 border-b-[0.5px] border-[#FFFFFF] bg-title opacity-10 mt-20"></div>
    </section>
  );
};

export default SevicesSection;
