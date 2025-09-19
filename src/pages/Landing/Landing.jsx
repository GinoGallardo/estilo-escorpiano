import HeroSection from "../../components/LandingSection/HeroSection";
import ServicesSection from "../../components/LandingSection/ServicesSection/SevicesSection";
import HaircutSection from "../../components/LandingSection/HaircutSection";
import { ExclusiveDeals } from "../../components/LandingSection/ExclusiveDeals";
import ClientFeedback from "../../components/LandingSection/ClientFeedback/ClientFeedback";


const Landing = () => {
  return (
    <main className="lg:px-0">
      <HeroSection />
      <ServicesSection />
      <HaircutSection />
      <ExclusiveDeals />
      <ClientFeedback />
      
    </main>
  );
};

export default Landing;
