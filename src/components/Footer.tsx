import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="font-serif text-2xl italic mb-4">
            "Freedom is not given, it is taken."
          </p>
          <p className="text-white/80">- Netaji Subhas Chandra Bose</p>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/90 flex items-center justify-center gap-2 mb-2">
            Developed with <Heart className="text-primary" size={16} fill="currentColor" /> by Debdip Mondal
          </p>
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} NetajiSubhasChandraBose.com • All Rights Reserved
          </p>
          <p className="text-white/60 text-sm mt-2">
            Dedicated to preserving the legacy of India's greatest freedom fighter
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
