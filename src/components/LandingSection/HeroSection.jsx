import ImageHero from "../../assets/img-hero.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-x-10 max-w-screen-2xl lg:h-[1014px] m-auto">
      <div className="flex flex-col gap-y-4 p-10">
        <h2 className="text-4xl text-center lg:text-6xl text-title font-poppins font-bold tracking-wider">
          Cortes y Colorimetría Profesional a Domicilio
        </h2>
        <p className="text-xl text-center text-parraf font-lora">
          Transformá tu estilo con cortes de precisión y tratamientos
          personalizados realizados por una experta que llega hasta tu hogar.
        </p>
        <p className="text-xl text-center text-parraf font-lora">
          Disfrutá de un servicio exclusivo, cómodo y adaptado a tus necesidades
          para lucir un cabello saludable, vibrante y con un color que resalte
          tu personalidad.
        </p>
      </div>
      <img
        className="w-[640px] rounded-3xl"
        src={ImageHero}
        alt="Avatar de la estilista secando el cabello a su clienta"
      />
    </section>
  );
};

export default HeroSection;
