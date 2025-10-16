import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/netaji-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Netaji Subhas Chandra Bose"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/80 via-accent/70 to-accent/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 hero-text-shadow animate-fade-in">
          Netaji Subhas Chandra Bose
        </h1>
        <p className="text-2xl md:text-4xl font-serif italic mb-8 hero-text-shadow animate-fade-in">
          "Give me blood, and I will give you freedom!"
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in">
          Freedom fighter, visionary leader, and founder of the Indian National Army. 
          Discover the extraordinary life and enduring legacy of India's most courageous patriot.
        </p>
        <Link to="/biography">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-6 animate-scale-in"
          >
            Explore His Journey
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
