import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Quotes = () => {
  const quotes = [
    {
      text: "Give me blood, and I will give you freedom!",
      context: "Rally cry to the Indian National Army",
    },
    {
      text: "It is our duty to pay for our liberty with our own blood.",
      context: "On the price of independence",
    },
    {
      text: "Freedom is not given, it is taken.",
      context: "Philosophy of direct action",
    },
    {
      text: "One individual may die for an idea, but that idea will, after his death, incarnate itself in a thousand lives.",
      context: "On sacrifice and legacy",
    },
    {
      text: "Reality is, after all, too big for our frail understanding to fully comprehend. Nevertheless, we have to build our life on the theory which contains the maximum truth.",
      context: "On truth and philosophy",
    },
    {
      text: "No real change in history has ever been achieved by discussions.",
      context: "On the need for action",
    },
  ];

  return (
    <section id="quotes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-accent mb-4">
            Words That Inspired a Nation
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful quotes from Netaji that continue to resonate today
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {quotes.map((quote, index) => (
            <Card
              key={index}
              className="vintage-shadow hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-card to-muted/20"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Quote className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-serif text-lg text-accent italic mb-3 leading-relaxed">
                      "{quote.text}"
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {quote.context}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
            <CardContent className="p-8">
              <p className="font-serif text-3xl text-accent font-bold mb-2">
                Jai Hind!
              </p>
              <p className="text-muted-foreground">
                The rallying cry that united millions in the struggle for freedom
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
