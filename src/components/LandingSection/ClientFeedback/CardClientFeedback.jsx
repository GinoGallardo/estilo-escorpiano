const CardClientFeedback = ({
  feedback = [],
  limit,
  isDashboard = false,
  onEdit,
  onDelete,
}) => {
  const displayedFeedback = limit ? feedback.slice(0, limit) : feedback;
  return (
    <section className="py-16">
      <ul
        role="list"
        className="grid gap-x-20 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2"
      >
        {displayedFeedback.map((person) => (
          <li key={person.name}>
            <div className="flex flex-col items-center gap-y-6  flex-1 justify-between h-full">
              <div className="flex flex-col items-center rounded-full">
                {isDashboard && (
                  <div className="flex justify-end z-50 p-4 gap-x-4 w-full">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={() => onEdit(person)}
                    >
                      Editar
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded"
                      onClick={() => onDelete(person.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                )}
                <img
                  src={
                    person.image ||
                    "https://res.cloudinary.com/du37cgojp/image/upload/v1758678435/avatar.ee_yzza7l.png"
                  }
                  alt={person.nameFeedback}
                  className="size-28 rounded-full mb-4"
                />
                <p
                  className="text-xl text-center text-white font-lora"
                  style={{ color: isDashboard ? "white" : "black" }}
                >
                  {person.messageFeedback}
                </p>
              </div>
              <h3 className="text-xl font-semibold tracking-widest text-primary font-poppins">
                {person.nameFeedback}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CardClientFeedback;

// estiloescorpiano.ee@gmail.com
// NATO0305