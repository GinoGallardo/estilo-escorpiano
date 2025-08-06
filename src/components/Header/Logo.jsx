import LogoEE from "../../assets/logo-EE.png";

const Logo = () => {
  return (
    <div className="flex flex-row items-center gap-x-1">
      <img className="w-16 lg:w-36 lg:h-28" src={LogoEE} alt="" />
      <div className="">
        <h1 className="text-lg lg:text-2xl font-lora font-semibold">Karina Santander</h1>
        <p className="text-base lg:text-lg text-center font-bebas tracking-widest">
          Estilista profesional
        </p>
      </div>
    </div>
  );
};

export default Logo;
