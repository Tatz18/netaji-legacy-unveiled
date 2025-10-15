import { Calendar, GraduationCap, Flag, Plane } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import youngNetaji from "@/assets/netaji-young.jpg";

const Biography = () => {
  const lifeStages = [
    {
      icon: Calendar,
      year: "1897-1913",
      title: "Early Life",
      description:
        "Born on January 23, 1897, in Cuttack, Odisha. Showed exceptional intelligence and leadership from childhood. Excelled in academics at Presidency College, Kolkata.",
      highlights: ["Born in Cuttack", "Presidency College", "Early nationalist sentiments"],
    },
    {
      icon: GraduationCap,
      year: "1919-1921",
      title: "Education & ICS",
      description:
        "Studied at Cambridge University and qualified for the Indian Civil Service. However, resigned in 1921, inspired by India's freedom movement and Mahatma Gandhi's call.",
      highlights: ["Cambridge graduate", "ICS qualification", "Resigned for freedom struggle"],
    },
    {
      icon: Flag,
      year: "1921-1939",
      title: "Freedom Movement",
      description:
        "Joined Indian National Congress, worked closely with Chittaranjan Das. Became Congress President twice but resigned due to differences with Gandhi over methods of struggle.",
      highlights: ["Congress leader", "Mayor of Calcutta", "Forward Bloc formation"],
    },
    {
      icon: Plane,
      year: "1941-1945",
      title: "INA & Final Years",
      description:
        "Escaped house arrest, traveled to Germany and Japan. Formed the Indian National Army (Azad Hind Fauj) and launched the 'Chalo Delhi' campaign. Mysteriously disappeared in 1945.",
      highlights: ["Great escape", "INA formation", "Azad Hind Government"],
    },
  ];

  return (
    <section id="biography" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-accent mb-4">
            The Journey of a Revolutionary
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From a brilliant student to a fearless freedom fighter who challenged the British Empire
          </p>
        </div>

        {/* Featured Image Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden vintage-shadow">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 p-8">
                  <h3 className="font-serif text-2xl font-bold text-accent mb-4">
                    A Life Dedicated to Freedom
                  </h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    Netaji Subhas Chandra Bose was not just a freedom fighter; he was a visionary 
                    who believed in complete independence through direct action. His leadership of 
                    the Indian National Army inspired millions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    "It is our duty to pay for our liberty with our own blood. The freedom that 
                    we shall win through our sacrifice and exertions, we shall be able to preserve 
                    with our own strength." - Netaji
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    src={youngNetaji}
                    alt="Young Netaji"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {lifeStages.map((stage, index) => (
            <Card
              key={index}
              className="vintage-shadow hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <stage.icon className="text-primary" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-primary mb-2">
                      {stage.year}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-accent mb-3">
                      {stage.title}
                    </h3>
                    <p className="text-foreground mb-4 leading-relaxed">
                      {stage.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {stage.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Biography;
