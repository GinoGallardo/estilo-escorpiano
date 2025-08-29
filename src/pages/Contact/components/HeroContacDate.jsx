import React from "react";

const HeroContacDate = () => {
  return (
    <article className="w-full lg:w-1/2 p-8 flex flex-col lg:p-20 gap-y-12 bg-black">
      <div className="flex flex-col gap-y-8">
        <h3 className="text-xl lg:text-3xl tracking-widest font-normal font-bebas">
          Horario de apertura
        </h3>
        <div className="border-b pb-2 border-white/40">
          <h5 className="text-base lg:text-lg font-extralight text-white/40 font-lora">
            Lunes a viernes
          </h5>
          <span className="text-sm lg:text-base font-extralight text-white/30 font-lora">
            de 10 a.m. a 6 p.m
          </span>
        </div>
        <div className="border-b pb-2 border-white/40">
          <h5 className="text-base lg:text-lg font-extralight text-white/40 font-lora">
            Sábados
          </h5>
          <span className="text-sm lg:text-base font-extralight text-white/30 font-lora">
            de 10 a.m. a 4 p.m
          </span>
        </div>
        <div className="border-b pb-2 border-white/40">
          <h5 className="text-base lg:text-lg font-extralight text-white/40 font-lora">
            Feriados
          </h5>
          <span className="text-sm lg:text-base font-extralight text-white/30 font-lora">
            de 10 a.m. 2 p.m
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-y-8">
        <h3 className="text-xl lg:text-3xl tracking-widest font-normal font-bebas">
          Información útil
        </h3>
        <div className="border-b pb-2 border-white/40">
          <h5 className="text-base lg:text-lg font-extralight text-white/40 font-lora">
            Zona de trabajo
          </h5>
          <span className="text-sm lg:text-base font-extralight text-white/30 font-lora">
            CABA - AMBA (a convenir)
          </span>
        </div>
        <div className="border-b pb-2 border-white/40">
          <h5 className="text-base lg:text-lg font-extralight text-white/40 font-lora">
            WhatsApp:
          </h5>
          <span className="text-sm lg:text-base font-extralight text-white/30 font-lora">
            11-6271-5952
          </span>
        </div>
        <div className="border-b pb-2 border-white/40">
          <h5 className="text-base lg:text-lg font-extralight text-white/40 font-lora">
            Correo
          </h5>
          <span className="text-sm lg:text-base font-extralight text-white/30 font-lora">
            estilo.escorpiano@gmail.com
          </span>
        </div>
      </div>
    </article>
  );
};

export default HeroContacDate;
