import NavLink from "../Header/NavLink.jsx";
import SocialNetwork from "../Header/SocialNetwork.jsx";

const Footer = () => {
  return (
    <section className="flex flex-col items-center pb-16">
      <div className="w-8/12 border-b-[0.5px] border-[#000] bg-title opacity-20 mt-20 mb-4 lg:mb-0"></div>
      <div className="hidden lg:flex">
        <NavLink />
      </div>
      <SocialNetwork />
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Buenos Aires, Argentina - Estilo Escorpiano
      </div>
    </section>
  );
};

export default Footer;
