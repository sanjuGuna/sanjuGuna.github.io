import { Code, Database, Layout, Server, Boxes, Terminal, Activity, GitFork } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      icon: Terminal,
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "JavaScript"],
    },
    {
      icon: Layout,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "Responsive Design", "Accessibility"],
    },
    {
      icon: Code,
      title: "Frontend & UI",
      skills: ["React.js", "UI/UX Basics"],
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "FastAPI", "Flask", "REST API Integration"],
    },
    {
      icon: Database,
      title: "Database Management",
      skills: ["MySQL", "MongoDB"],
    },
    {
      icon: Boxes,
      title: "Big Data & Processing",
      skills: ["Hadoop", "Spark", "Hive", "kafka"],
    },
    {
      icon: Activity,
      title: "Orchestration & Streaming",
      skills: ["Apache Airflow", "Kafka Producers & Consumers"],
    },
    {
      icon: GitFork,
      title: "Tools & DevOps Basics",
      skills: ["Git & GitHub", "Docker (Basics)", "Linux Fundamentals"],
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-card p-6 rounded-2xl border border-border/60 hover:card-glow hover:-translate-y-1 transition-all duration-300 group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="rounded-full px-3 py-1 bg-muted text-xs font-medium text-muted-foreground border border-border/60 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
