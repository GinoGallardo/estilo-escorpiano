import KarinaBN from "../../../../public/assets/karina-bn.png";
import services from "../../../../public/data/services.json";

const HeroServiceImage = () => {
  return (
    <article
      className="flex items-center justify-center lg:w-1/2 lg:h-[700px] bg-center bg-cover"
      style={{ backgroundImage: `url(${KarinaBN})` }}
    >
      <ul role="list" className="w-10/12 divide-y divide-white/5">
        {services.slice(0, 4).map((service) => (
          <li
            key={service.name}
            className="flex flex-col text-white justify-between gap-y-6 py-5"
          >
            <div className="w-full text-2xl lg:text-4xl font-playfair flex justify-between items-baseline">
              <h3>{service.name}</h3>
              <h5>{service.price}</h5>
            </div>
            <p className="font-poppins text-sm lg:text-base font-extralight tracking-widest">
              {service.description}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default HeroServiceImage;
