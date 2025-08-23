const ShadowButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-48 inline-block px-6 py-3 font-bold borde
      shadow-[7px_7px_0px] transition-all duration-300 
      hover:translate-x-[7px] hover:translate-y-[7px] hover:shadow-none 
      ${className}`}
    >
      {children}
    </button>
  );
};

export default ShadowButton;
