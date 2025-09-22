import {
  ScissorsIcon,
  HairDryerIcon,
  HairIronIcon,
  CustomIcon,
  SearchIcon,
  BottleIcon,
} from "../../ui/icons/icons";

const iconMap = {
  tijera: <ScissorsIcon />,
  secador: <HairDryerIcon />,
  tintura: <HairIronIcon />,
  customIcon: <CustomIcon />,
  searchIcon: <SearchIcon />,
  lavado: <BottleIcon />,
};

const ServicesCard = ({
  services = [],
  limit,
  isDashboard = false,
  onEdit,
  onDelete,
}) => {
  const displayedServices = limit ? services.slice(0, limit) : services;
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8  max-w-7xl mx-4 lg:mx-auto">
      {displayedServices.map((service) => (
        <div
          key={service.id}
          className="group relative w-full flex flex-col"
          style={{ maxHeight: 600 }}
        >
          <img
            alt={service.title}
            src={service.image ? service.image : "/placeholder-image.png"} // <-- placeholder
            className="w-full h-[400px] object-cover group-hover:opacity-75"
          />
          {service.icon && (
            <div className="absolute left-1/2 top-[400px] -translate-x-1/2 -translate-y-1/2 z-10 bg-secondary shadow-[7px_7px_0px_#000] p-2">
              {iconMap[service.icon]}
            </div>
          )}

          <div className="flex flex-col justify-center items-center flex-1 py-14 px-4 bg-[#FFFFFF]">
            <h4 className="text-2xl text-title">{service.title}</h4>
            <p className="mt-1 text-center text-base font-lora font-extralight text-title">
              {service.description}
            </p>
          </div>
          {isDashboard && (
            <div className="flex justify-center gap-x-4 w-full">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => onEdit(service)}
              >
                Editar
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => onDelete(service.id)}
              >
                Eliminar
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
