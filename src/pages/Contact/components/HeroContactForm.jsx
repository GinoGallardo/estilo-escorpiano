import ShadowButton from "../../../components/ui/ShadowButton";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const HeroContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.YOUR_SERVICE_ID,
        import.meta.env.YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.YOUR_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="w-full lg:w-1/2 isolate px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        {" "}
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />{" "}
      </div>{" "}
      <div className="mx-auto flex flex-col items-center gap-y-4">
        {" "}
        <h2 className="text-2xl md:text-4xl text-center lg:text-5xl text-white font-poppins font-bold tracking-wider">
          {" "}
          ¡Reserva tu cita!{" "}
        </h2>{" "}
        <p className="text-xl text-center text-white/50 font-lora">
          {" "}
          ¿Lista para transformar tu estilo? Contáctame para reservar tu cita.
          Juntas crearemos el look perfecto que te hará sentir única y radiante.
          ¡Espero verte pronto!{" "}
        </p>{" "}
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="user_name"
              className="block text-sm/6 font-semibold text-white"
            >
              Nombre completo
            </label>
            <div className="mt-2.5">
              <input
                id="user_name"
                name="user_name"
                type="text"
                placeholder="Nombre y apellido"
                required
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="user_email"
              className="block text-sm/6 font-semibold text-white"
            >
              Correo electrónico
            </label>
            <div className="mt-2.5">
              <input
                id="user_email"
                name="user_email"
                type="email"
                placeholder="email@email.com"
                required
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="user_phone"
              className="block text-sm/6 font-semibold text-white"
            >
              Número de contacto
            </label>
            <div className="mt-2.5">
              <input
                id="user_phone"
                name="user_phone"
                type="text"
                placeholder="123-456-7890"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-white"
            >
              Mensaje
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                placeholder="Dejanos un mensaje aquí."
                rows={4}
                required
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <ShadowButton
            type="submit"
            className="bg-[#000] shadow-primary text-white uppercase"
          >
            Enviar
          </ShadowButton>
        </div>
      </form>
    </div>
  );
};

export default HeroContactForm;
