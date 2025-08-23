import ImageHero from "../../assets/img-hero.png";
import ShadowButton from "../../components/ui/ShadowButton";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-y-6 lg:gap-x-10 max-w-7xl lg:h-[514px] my-10 lg:mt-32 mx-4 lg:mx-auto bg-[#FFFFFF]">
      <div className="flex flex-col gap-y-6">
        <h2 className="text-4xl text-center lg:text-start lg:text-6xl text-title font-poppins font-bold tracking-wider">
          Estilo y precisión en cada detalle.
        </h2>
        <p className="text-xl text-center lg:text-start text-parraf font-lora">
          Transformá tu estilo con cortes de precisión y tratamientos
          personalizados realizados por una experta que llega hasta tu hogar.
        </p>
        <ShadowButton
          children="AGENDA TU CITA"
          className="text-black bg-[#ECE8E3] border-2 border-black hover:bg-black hover:text-white"
        />
      </div>
      <img
        className="lg:w-2/5 rounded-3xl mt-20"
        src={ImageHero}
        alt="Avatar de la estilista secando el cabello a su clienta"
      />
    </section>
  );
};

export default HeroSection;
