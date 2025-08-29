import Baner from "/assets/baner-servicios.jpg";
import ClientFeedback from "../../components/LandingSection/ClientFeedback/ClientFeedback";

const Products = () => {
  return (
    <>
      <section
        className="w-full h-16 lg:h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Baner})` }}
      >
        <h2 className="text-4xl text-center lg:text-7xl text-white font-poppins font-bold tracking-wider">
          Productos
        </h2>
      </section>
      <section className="flex flex-col text-[#FFFFFF] justify-center lg:mx-auto py-10 items-center gap-x-10 bg-title">
        <div className="w-8/12 border-b-[0.5px] border-[#FFFFFF] bg-title opacity-10 mt-20"></div>
      </section>
      <ClientFeedback />
    </>
  );
};

export default Products;
