const Timeline = () => {
  const events = [
    { year: 1897, event: "Born in Cuttack, Odisha" },
    { year: 1919, event: "Graduated from Cambridge University" },
    { year: 1921, event: "Resigned from Indian Civil Service" },
    { year: 1924, event: "Became CEO of Calcutta Corporation" },
    { year: 1938, event: "Elected President of Indian National Congress" },
    { year: 1939, event: "Founded Forward Bloc" },
    { year: 1941, event: "Escaped from house arrest, traveled to Germany" },
    { year: 1943, event: "Formed Indian National Army (INA)" },
    { year: 1943, event: "Established Azad Hind Government" },
    { year: 1944, event: "Launched 'Chalo Delhi' campaign" },
    { year: 1945, event: "Mysteriously disappeared after alleged plane crash" },
  ];

  return (
    <section id="timeline" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-accent mb-4">
            Timeline of Courage
          </h2>
          <p className="text-muted-foreground text-lg">
            Key moments that shaped India's freedom struggle
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            {/* Timeline Events */}
            {events.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                <div
                  className={`flex items-center ${
                    index % 2 === 0
                      ? "md:flex-row-reverse md:justify-start"
                      : "md:justify-end"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    } md:w-5/12 bg-card p-6 rounded-lg vintage-shadow hover:scale-105 transition-transform duration-300`}
                  >
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground font-bold rounded-full text-sm mb-2">
                      {item.year}
                    </span>
                    <p className="text-foreground font-medium">{item.event}</p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 ring-4 ring-background"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
