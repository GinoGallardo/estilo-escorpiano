import HeroSection from "../../components/LandingSection/HeroSection";
import ServicesSection from "../../components/LandingSection/ServicesSection/SevicesSection";
import Logo from "../../components/Header/Logo"

const Landing = () => {
  return (
    <main className="lg:px-0">
      <HeroSection />
      <ServicesSection />
      <Logo />
    </main>
  );
};

export default Landing;
