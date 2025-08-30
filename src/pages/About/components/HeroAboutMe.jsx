const HeroAboutMe = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-10 max-w-7xl my-10 lg:mt-32 mx-4 lg:mx-auto bg-[#FFFFFF]">
      <article className="lg:w-1/2 flex flex-col gap-y-6">
        <h2 className="text-lg md:text-2xl text-center lg:text-start font-semibold tracking-widest text-primary font-poppins">
          Mi historia
        </h2>
        <h3 className="text-2xl md:text-4xl text-center lg:text-start lg:text-6xl text-title font-poppins font-bold tracking-wider">
          Desde una pasión por la belleza, hasta la creación de mi propio camino
        </h3>
        <p className="text-xl text-center lg:text-start text-parraf font-lora">
          Desde muy joven supe que el mundo de la belleza era mi vocación. Mi
          pasión por el estilismo me llevó a prepararme en el prestigioso
          Instituto Argentino de Peluqueros, donde obtuve el título de Estilista
          Profesional. Durante mi formación, me especialicé en diversas áreas
          para ofrecer un servicio completo y de alta calidad a mis clientas.
        </p>
      </article>
      <article className="lg:w-1/2 flex flex-col gap-y-6">
        <p className="text-xl text-center lg:text-start text-parraf font-lora">
          Realicé cursos intensivos en corte de cabello, peinado, alisado,
          tratamientos capilares y colorimetría, dominando las técnicas más
          modernas y vanguardistas. Mi búsqueda de la excelencia me impulsó a ir
          más allá, y también me certifiqué como Técnica Capilar. Toda esta
          preparación me brindó los conocimientos y la confianza para dar el
          siguiente paso: llevar mi arte directamente a la comodidad del hogar
          de cada persona.
        </p>
        <p className="text-xl text-center lg:text-start text-parraf font-lora">
          Con el tiempo, logré convertirme en una estilista profesional
          freelance, y hoy, mi mayor satisfacción es poder transformar la
          belleza de mis clientas de una manera única y personalizada, creando
          estilos que reflejan su esencia y personalidad. Cada servicio a
          domicilio no es solo un trabajo, sino una experiencia dedicada a
          realzar la belleza que ya existe en ti.
        </p>
      </article>
    </section>
  );
};

export default HeroAboutMe;
