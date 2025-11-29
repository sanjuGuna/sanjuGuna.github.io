import { Layout, Code, Globe, Database } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Frontend Development",
      description:
        "Creating responsive, accessible, and beautiful user interfaces using modern frameworks like React.js with attention to detail and user experience.",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Building complete web applications from frontend to backend, integrating databases, APIs, and creating seamless user experiences end-to-end.",
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description:
        "Developing scalable web applications using modern tech stacks including React, FastAPI, and various database solutions for real-world problems.",
    },
    {
      icon: Database,
      title: "Data Engineering Basics",
      description:
        "Working with ETL pipelines, data processing workflows, and big data technologies like Hadoop and Spark for efficient data management.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          What I <span className="gradient-text">Offer</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border hover:card-glow transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
