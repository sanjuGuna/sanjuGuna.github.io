import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Bloggle",
      description:
        "A modern blogging platform with a clean, simple editor for sharing stories on tech, trends, medical topics, and current affairs. Built with focus on user experience and content creation.",
      tech: ["React", "Vite", "Modern UI"],
      github: "https://github.com/sanjuGuna/Bloggle.git",
      demo: "https://bloggle-7j9v.vercel.app/",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
    },
    {
      title: "CleanURL",
      description:
        "A URL shortener SaaS application that shortens long URLs, tracks click counts, and provides analytics. Features a clean interface and robust backend with MySQL integration.",
      tech: ["React", "FastAPI", "MySQL", "Vite"],
      github: "https://github.com/sanjuGuna/CleanURL.git",
      demo: null,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      title: "Spotify ETL Pipeline",
      description:
        "An ETL pipeline that extracts playlist data using the Spotify API, transforms the data for analysis, and loads it into MySQL for further processing and insights.",
      tech: ["Python", "Spotify API", "MySQL", "ETL"],
      github: "https://github.com/sanjuGuna/Spotify_ETL.git",
      demo: null,
      image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&h=400&fit=crop",
    },
    {
      title: "CommuneDB",
      description:
        "A natural language to SQL application that converts natural language prompts into SQL queries and executes them on a database. Makes database interactions more accessible.",
      tech: ["Python", "NLP", "SQL", "Database"],
      github: "https://github.com/sanjuGuna/communeDB.git",
      demo: null,
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:card-glow transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-display font-bold">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" className="w-full">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="gradient-bg w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
