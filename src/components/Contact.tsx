import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const templateParams = {
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        message: formData.get("message"),
      };

      await emailjs.send(
        "service_uzebioo",
        "template_c15st8q",
        templateParams,
        "zK6Uir1oer4WBjbiD"
      );

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      e.currentTarget.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sanjayvennila2006@gmail.com",
      href: "mailto:sanjayvennila2006@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6380974687",
      href: "tel:+916380974687",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sanjaygunasekaran",
      href: "https://www.linkedin.com/in/sanjaygunasekaran",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/sanjuGuna",
      href: "https://github.com/sanjuGuna",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:card-glow transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" className="gradient-bg w-full" disabled={isSubmitting}>
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
