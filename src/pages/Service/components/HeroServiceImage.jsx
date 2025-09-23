import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import KarinaBN from "/assets/karina-bn.png";

const HeroServiceImage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const servicesCol = collection(db, "services");
        const servicesSnapshot = await getDocs(servicesCol);
        const servicesList = servicesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("servicios cargados", servicesList);
        setServices(servicesList);
      } catch (error) {
        console.log("error al cargar servicios de firestore", error);
      }
    };
    fetchService();
  }, []);

  return (
    <article
      className="flex items-center justify-center  lg:h-[900px] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${KarinaBN})` }}
    >
      <ul role="list" className="w-10/12 divide-y divide-white/5">
        {services.slice(0, 4).map((service) => (
          <li
            key={service.title}
            className="flex flex-col text-white justify-between gap-y-6 py-5"
          >
            <div className="w-full text-2xl lg:text-4xl font-playfair flex justify-between items-baseline">
              <h3>{service.title}</h3>
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
