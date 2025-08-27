const people = [
  {
    name: "Leslie Alexander",
    feedback:
      "Increíble atención y profesionalismo, la estilista entendió exactamente lo que quería. Estoy feliz con mi nuevo look.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?...",
  },
  {
    name: "Michael Foster",
    feedback:
      "La estilista es muy talentosa, transformó mi cabello con dedicación y precisión. Me siento renovado y agradecido siempre.",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?...",
  },
  {
    name: "Dries Vincent",
    feedback:
      "Excelente experiencia, la estilista cuidó cada detalle con gran dedicación. Recomiendo su servicio totalmente, superó mis expectativas.",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?...",
  },
  {
    name: "Lindsay Walton",
    feedback:
      "Me encantó la dedicación de la estilista, realmente escuchó mis ideas y me ayudó a lucir increíblemente segura.",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?...",
  },
  {
    name: "Courtney Henry",
    feedback:
      "Estoy muy agradecida, la estilista hizo un trabajo maravilloso. Su creatividad y precisión me dejaron realmente satisfecha y feliz.",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?...",
  },
  {
    name: "Tom Cook",
    feedback:
      "Gran profesionalismo y talento, la estilista logró un estilo perfecto. Definitivamente volveré, su trabajo marca una gran diferencia.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?...",
  },
];

const CardClientFeedback = () => {
  return (
    <section className="py-16">
      <ul
        role="list"
        className="grid gap-x-20 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2"
      >
        {people.slice(0, 3).map((person) => (
          <li key={person.name}>
            <div className="flex flex-col items-center gap-y-6  flex-1 justify-between h-full">
              <div className="flex flex-col items-center rounded-full">
                <img
                  src={person.imageUrl}
                  alt={person.name}
                  className="size-28 rounded-full mb-4"
                />
                <p className="text-xl text-center text-parraf font-lora">
                  {person.feedback}
                </p>
              </div>
              <h3 className="text-xl font-semibold tracking-widest text-primary font-poppins">
                {person.name}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CardClientFeedback;
