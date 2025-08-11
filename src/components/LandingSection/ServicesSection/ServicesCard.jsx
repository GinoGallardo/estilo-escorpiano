import ScissorsIcon from "../../icons/ScissorsIcon";

const products = [
  {
    id: 1,
    name: "Corte de pelo",
    icon: <ScissorsIcon />,
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    description: "Moderno, preciso, favorecedor y lleno de estilo",
  },
  {
    id: 2,
    name: "Alisado",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    description: "Cabello liso, suave, brillante y sin frizz",
  },
  {
    id: 3,
    name: "Color",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: "$35",
    description: "Tonos vibrantes, personalizados y de larga duración",
  },
  {
    id: 4,
    name: "Baño de crema",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: "$35",
    description: "Nutrición profunda, suavidad y brillo intenso",
  },
];

const ServicesCard = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
      {products.slice(0, 3).map((product) => (
        <div
          key={product.id}
          className="group relative w-full flex flex-col"
          style={{ maxHeight: 600 }} // Opcional: limitar alto máximo
        >
          <img
            alt={product.imageAlt}
            src={product.imageSrc}
            className="w-full h-[400px] object-cover group-hover:opacity-75"
          />
          <div className="absolute left-1/2 top-[400px] -translate-x-1/2 -translate-y-1/2 z-10 bg-secondary shadow-lg shadow-black p-2">
            {product.icon}
          </div>

          <div className="flex flex-col justify-center items-center flex-1 py-14 px-4 bg-[#FFFFFF]">
            <h4 className="text-2xl text-title">{product.name}</h4>
            <p className="mt-1 text-center text-base font-lora font-extralight text-title">
              {product.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
