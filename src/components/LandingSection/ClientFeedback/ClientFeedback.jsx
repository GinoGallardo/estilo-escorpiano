import CardClientFeedback from "./CardClientFeedback";

const ClientFeedback = () => {
  return (
    <section className="flex flex-col items-center gap-y-6 lg:gap-x-10 max-w-7xl my-10 lg:mt-32 mx-4 lg:mx-auto bg-[#FFFFFF]">
      <h2 className="text-2xl font-semibold tracking-widest text-primary font-poppins">
        Testimonios
      </h2>
      <h3 className="text-2xl text-center lg:text-start lg:text-4xl text-title font-poppins font-bold tracking-wider">
        Opiniones de nuestras clientas
      </h3>
      <CardClientFeedback />
    </section>
  );
};

export default ClientFeedback;
