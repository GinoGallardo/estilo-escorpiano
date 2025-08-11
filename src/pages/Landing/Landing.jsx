import HeroSection from "../../components/LandingSection/HeroSection";
import ServicesSection from "../../components/LandingSection/ServicesSection/SevicesSection";

const Landing = () => {
  return (
    <main className="px-4 lg:px-0">
      <HeroSection />
      <ServicesSection />
    </main>
  );
};

export default Landing;
