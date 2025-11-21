import Hero from "@/components/Hero";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import HowToHelp from "@/components/HowToHelp";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Statistics />
      <HowToHelp />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
