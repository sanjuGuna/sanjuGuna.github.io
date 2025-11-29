import { GraduationCap, Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border hover:card-glow transition-all duration-300">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                My name is <span className="text-foreground font-semibold">Sanjay G</span>. I'm an aspiring software engineer with experience in JavaScript, Python, FastAPI, React, and database systems. I'm motivated by building practical, user-focused applications and continuously improving my technical and problem-solving skills.
              </p>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  Note: No formal work experience yet, but building strong project-based skills through hands-on development
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border hover:card-glow transition-all duration-300">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-foreground">
                    B.Tech – Information Technology
                  </h4>
                  <p className="text-primary font-medium">
                    Kongu Engineering College
                  </p>
                  <p className="text-muted-foreground">2023 – 2027</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    Currently pursuing my undergraduate degree with a focus on modern software development practices, full-stack technologies, and data engineering fundamentals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
