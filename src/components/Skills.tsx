import { Code, Database, Layout, Server, Boxes, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      icon: Terminal,
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "JavaScript"],
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
      skills: ["FastAPI", "Flask", "REST API Integration", "OOP"],
    },
    {
      icon: Database,
      title: "Database Management",
      skills: ["SQL", "MySQL", "MongoDB"],
    },
    {
      icon: Boxes,
      title: "Big Data & Processing",
      skills: ["Hadoop", "Spark", "Hive"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl border border-border hover:card-glow transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
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
                    className="bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
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
