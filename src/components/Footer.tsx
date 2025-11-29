import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-display font-bold gradient-text mb-2">
              Sanjay G.
            </p>
            <p className="text-muted-foreground">
              Aspiring Software Engineer | Full-Stack Developer
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/sanjuGuna"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjaygunasekaran"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sanjayvennila2006@gmail.com"
              className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sanjay G. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
