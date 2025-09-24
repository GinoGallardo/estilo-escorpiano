import { useEffect, useState } from "react";
import CardClientFeedback from "./CardClientFeedback";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../firebase";

const ClientFeedback = () => {
  const [feedback, setFeedback] = useState([]);
  
    useEffect(() => {
      const fetchServices = async () => {
        const servicesCollection = collection(db, "feedback");
        const data = await getDocs(servicesCollection);
        setFeedback(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      };
      fetchServices();
    }, []);
  return (
    <section className="flex flex-col items-center gap-y-6 lg:gap-x-10 max-w-7xl my-10 lg:mt-32 mx-4 lg:mx-auto bg-[#FFFFFF]">
      <h2 className="text-2xl font-semibold tracking-widest text-primary font-poppins">
        Testimonios
      </h2>
      <h3 className="text-2xl text-center lg:text-start lg:text-4xl text-title font-poppins font-bold tracking-wider">
        Opiniones de nuestras clientas
      </h3>
      <CardClientFeedback  limit={3} feedback={feedback}/>
    </section>
  );
};

export default ClientFeedback;
