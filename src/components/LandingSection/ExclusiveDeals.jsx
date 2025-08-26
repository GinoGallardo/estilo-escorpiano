import ShadowButton from "../ui/ShadowButton"
import lavadoExclusivo from "../../../public/assets/lavado-exclusivo.png"

export const ExclusiveDeals = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:gap-y-6 lg:gap-x-10 max-w-7xl my-10 mx-4 lg:mx-auto bg-[#F8F3F0]">
      <div className="flex flex-col items-center lg:items-start gap-y-6 lg:pl-24">
        <h2 className="text-2xl md:text-4xl text-center lg:text-start lg:text-6xl text-title font-poppins font-bold tracking-wider">
        "¡Super Promo! Corte de cabello + Lavado incluido"
        </h2>
        <p className="text-xl text-center lg:text-start text-parraf font-lora">
          "Disfruta de un lavado de cabello gratuito con nuestros productos profesionales al reservar tu corte, dejando tu cabello limpio, suave y radiante."
        </p>
        <ShadowButton
          children="AGENDA TU CITA"
          className="text-black bg-[#ECE8E3] border-2 border-black hover:bg-black hover:text-white"
        />
      </div>
      <img
        className="w-52 lg:w-full"
        src={lavadoExclusivo}
        alt="lavado de cabello a su clienta"
      />
    </section>
  )
}
