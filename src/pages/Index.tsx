import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import Timeline from "@/components/Timeline";
import INA from "@/components/INA";
import Mystery from "@/components/Mystery";
import Quotes from "@/components/Quotes";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Biography />
      <Timeline />
      <INA />
      <Mystery />
      <Quotes />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
