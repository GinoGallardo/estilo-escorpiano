import videoDeCorte from "/assets/services/servicio-de-corte.mp4";

const HaircutSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-y-6 lg:gap-x-10 max-w-7xl my-10 lg:mt-32 mx-4 lg:mx-auto bg-[#FFFFFF]">
      <video
        className="w-1/4 rounded-xl"
        autoPlay
        muted
        loop
        playsInline
        width={400}
      >
        <source src={videoDeCorte} type="video/mp4" />
      </video>
      <article className="flex flex-col gap-y-6">
        <h2 className="text-lg md:text-2xl text-center font-semibold tracking-widest text-primary font-poppins">CORTE DE PELO MODERNO</h2>
        <h3 className="text-2xl md:text-4xl text-center lg:text-start lg:text-6xl text-title font-poppins font-bold tracking-wider">
          "Transforma tu estilo con precisión y creatividad hoy"
        </h3>
        <p className="text-xl text-center lg:text-start text-parraf font-lora">
          "Cortes de pelo expertos, personalizados a tu personalidad, realzando
          tu estilo con precisión, cuidado y creatividad para una apariencia
          segura y deslumbrante cada día."
        </p>
      </article>
    </section>
  );
};

export default HaircutSection;
