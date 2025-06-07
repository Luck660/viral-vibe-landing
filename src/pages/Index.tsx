
import Hero from "@/components/Hero";
import SecretsSection from "@/components/SecretsSection";
import ModulesSection from "@/components/ModulesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Hero />
      <SecretsSection />
      <ModulesSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
