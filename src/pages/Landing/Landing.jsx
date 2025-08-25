import HeroSection from "../../components/LandingSection/HeroSection";
import ServicesSection from "../../components/LandingSection/ServicesSection/SevicesSection";
import Logo from "../../components/Header/Logo"
import HaircutSection from "../../components/LandingSection/HaircutSection";
import { ExclusiveDeals } from "../../components/LandingSection/ExclusiveDeals";

const Landing = () => {
  return (
    <main className="lg:px-0">
      <HeroSection />
      <ServicesSection />
      <HaircutSection />
      <ExclusiveDeals />
      <Logo />
    </main>
  );
};

export default Landing;
