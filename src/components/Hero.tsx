import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <p className="text-lg text-muted-foreground">Hey, I'm Sanjay 👋</p>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              <span className="gradient-text">Aspiring</span>
              <br />
              Software
              <br />
              Engineer
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Building practical, user-focused apps with modern technologies.
              Full-Stack Developer | Data Engineering Enthusiast
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="gradient-bg text-lg"
              >
                View Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="text-lg border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Contact Me
              </Button>
              <a
                href="https://github.com/sanjuGuna"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Github className="mr-2 w-5 h-5" />
                  GitHub
                </Button>
              </a>
            </div>
          </div>

          <div className="flex justify-center animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="relative">
              <div className="absolute inset-0 gradient-bg blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-primary overflow-hidden card-glow animate-float">
                <img
                  src={profilePicture}
                  alt="Sanjay G Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
