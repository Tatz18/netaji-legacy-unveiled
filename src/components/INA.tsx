import { Shield, Users, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import inaSoldiers from "@/assets/ina-soldiers.jpg";

const INA = () => {
  const inaFacts = [
    {
      icon: Shield,
      title: "Formation",
      description:
        "The Indian National Army was formed in 1942 with the goal of securing Indian independence from British rule through armed struggle.",
    },
    {
      icon: Users,
      title: "Brave Soldiers",
      description:
        "Comprised of Indian prisoners of war and civilians in Southeast Asia. Included the Rani of Jhansi Regiment, the first women's infantry regiment.",
    },
    {
      icon: Target,
      title: "Mission",
      description:
        "The 'Chalo Delhi' campaign aimed to march to Delhi and free India. They fought alongside Japanese forces in Burma and reached Indian soil.",
    },
  ];

  return (
    <section id="ina" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-accent mb-4">
            Azad Hind Fauj
          </h2>
          <p className="text-primary text-xl font-semibold mb-2">
            The Indian National Army
          </p>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            An army of patriots who fought for India's freedom on foreign soil
          </p>
        </div>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative overflow-hidden rounded-lg vintage-shadow">
            <img
              src={inaSoldiers}
              alt="INA Soldiers"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent flex items-end">
              <div className="p-8 text-white">
                <p className="font-serif text-2xl italic hero-text-shadow">
                  "Dilli Chalo!" - March to Delhi!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Facts Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {inaFacts.map((fact, index) => (
            <Card key={index} className="vintage-shadow hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <fact.icon className="text-secondary" size={32} />
                </div>
                <CardTitle className="font-serif text-xl text-accent">
                  {fact.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  {fact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quote Section */}
        <div className="max-w-3xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <CardContent className="p-8">
              <p className="font-serif text-2xl text-accent italic mb-4">
                "It is blood alone that can pay the price of freedom. Give me blood and I will give you freedom!"
              </p>
              <p className="text-muted-foreground font-medium">
                - Netaji Subhas Chandra Bose
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default INA;
