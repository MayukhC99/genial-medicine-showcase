import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock
} from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: "Medical District, Healthcare Plaza",
      subDetails: "Innovation Tower, Floor 12-15"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: "+91 98765 43210",
      subDetails: "+91 98765 43211 (Emergency)"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "info@genialhealthcare.com",
      subDetails: "medical@genialhealthcare.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
      subDetails: "Saturday: 9:00 AM - 1:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-accent/10 text-accent">
            Get In Touch
          </Badge>
          
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Contact 
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Our Team
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to learn more about our pharmaceutical solutions? Our medical experts 
            are here to provide detailed information and answer your questions.
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Let's Connect
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether you're a healthcare professional, distributor, or have questions 
              about our medicines, we're here to help. Reach out to us through any 
              of the following channels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="group hover:shadow-medical transition-all duration-300 hover:scale-105 bg-gradient-card border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-gradient-primary group-hover:animate-pulse-glow transition-all duration-300">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {info.details}
                      </p>
                      <p className="text-muted-foreground text-xs mt-1 opacity-80">
                        {info.subDetails}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
