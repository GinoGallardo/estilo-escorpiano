import ShadowButton from "../../../components/ui/ShadowButton";

const HeroServiceContent = () => {
  return (
    <article className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-y-6">
      <h2 className="text-lg md:text-2xl text-center lg:text-start font-semibold tracking-widest text-primary font-poppins">
        Transformamos tu estilo, potenciamos tu confianza
      </h2>
      <h3 className="text-2xl md:text-4xl text-center lg:text-start lg:text-6xl text-title font-poppins font-bold tracking-wider">
        Cada corte, un reflejo de tu personalidad
      </h3>
      <p className="text-xl text-center lg:text-start text-parraf font-lora">
        Nuestro compromiso es que salgas sintiéndote única. Desde cortes
        precisos hasta tratamientos que cuidan tu cabello, cada servicio está
        diseñado para resaltar tu belleza y confianza, creando experiencias
        memorables en cada visita.
      </p>
      <ShadowButton
        children="AGENDA TU CITA"
        className="text-black bg-[#ECE8E3] border-2 border-black hover:bg-black hover:text-white"
      />
    </article>
  );
};

export default HeroServiceContent;
