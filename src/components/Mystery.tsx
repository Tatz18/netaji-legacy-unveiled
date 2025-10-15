import { HelpCircle, FileText, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Mystery = () => {
  const theories = [
    {
      icon: FileText,
      title: "Official Account",
      description:
        "According to official records, Netaji died in a plane crash in Taiwan on August 18, 1945. His ashes are preserved at Renkoji Temple in Tokyo.",
    },
    {
      icon: Search,
      title: "Multiple Investigations",
      description:
        "Three commissions (Shah Nawaz, Khosla, and Mukherjee) investigated his death. The Mukherjee Commission (1999-2005) rejected the plane crash theory.",
    },
    {
      icon: HelpCircle,
      title: "Gumnami Baba Theory",
      description:
        "Some believe Netaji returned to India and lived as 'Gumnami Baba' in Uttar Pradesh until 1985. However, this remains unverified despite extensive investigations.",
    },
  ];

  return (
    <section id="mystery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-accent mb-4">
            The Unsolved Mystery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What really happened to Netaji after 1945? A question that continues to intrigue historians and patriots
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {theories.map((theory, index) => (
            <Card key={index} className="vintage-shadow hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <theory.icon className="text-accent" size={32} />
                </div>
                <CardTitle className="font-serif text-xl text-accent">
                  {theory.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  {theory.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-card border-2 border-border">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold text-accent mb-4 text-center">
                Declassified Files
              </h3>
              <p className="text-foreground leading-relaxed text-center mb-4">
                In 2016, the Indian government declassified files related to Netaji. However, the complete truth about his disappearance remains elusive, keeping the mystery alive for future generations to uncover.
              </p>
              <p className="text-muted-foreground text-center italic">
                "Truth is the ultimate weapon against tyranny, and someday the complete truth will emerge."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mystery;
