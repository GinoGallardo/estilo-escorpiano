import { useEffect, useState } from "react";
import KarinaBN from "/assets/karina-bn.png";

const HeroServiceImage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/services.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Servicios cargados:", data);
        setServices(data);
      })
      .catch((error) => {
        console.error("Error al cargar services.json:", error);
      });
  }, []);

  return (
    <article
      className="flex items-center justify-center  lg:h-[900px] bg-no-repeat bg-center bg-cover"
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
