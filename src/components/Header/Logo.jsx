import LogoEE from "../../assets/logo-EE.png";

const Logo = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-y-3 lg:gap-y-0 md:gap-x-1">
      <img className="w-36 h-28" src={LogoEE} alt="" />
      <div className="">
        <h1 className="text-2xl font-lora font-semibold">Karina Santander</h1>
        <p className="text-lg text-center font-bebas tracking-widest">
          Estilista profesional
        </p>
      </div>
    </div>
  );
};

export default Logo;
