import { Card, CardContent } from "@/components/ui/card";
import youngNetaji from "@/assets/netaji-young.jpg";
import heroImage from "@/assets/netaji-hero.jpg";
import inaSoldiers from "@/assets/ina-soldiers.jpg";

const Gallery = () => {
  const images = [
    {
      src: youngNetaji,
      title: "Young Netaji",
      description: "Netaji during his early years",
    },
    {
      src: heroImage,
      title: "INA Leader",
      description: "Commander of Indian National Army",
    },
    {
      src: inaSoldiers,
      title: "INA Soldiers",
      description: "Brave soldiers of Azad Hind Fauj",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-accent mb-4">
            Historical Gallery
          </h2>
          <p className="text-muted-foreground text-lg">
            Glimpses from the life of Netaji and the freedom struggle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden vintage-shadow hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative group">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="font-serif text-xl font-bold text-white mb-2">
                      {image.title}
                    </h3>
                    <p className="text-white/90 text-sm">{image.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            "A true soldier fights not because he hates what is in front of him, but because he loves what is behind him."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
