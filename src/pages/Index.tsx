import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedPhones from "@/components/FeaturedPhones";
import Accessories from "@/components/Accessories";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedPhones />
      <Accessories />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
