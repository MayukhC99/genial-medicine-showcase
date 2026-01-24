import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Scale, Shield, Microscope, HeartHandshake, Target, TrendingUp } from "lucide-react";
export default function AboutSection() {
  const values = [{
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control processes ensure every product meets the highest pharmaceutical standards."
  }, {
    icon: Scale,
    title: "Integrity & Ethics",
    description: "We operate with transparency, honesty, and adherence to regulatory and ethical standards."
  }, {
    icon: HeartHandshake,
    title: "Customer Centric",
    description: "Every decision we make prioritizes customer safety, efficacy, and accessibility."
  }, {
    icon: Microscope,
    title: "Scientific Excellence",
    description: "Our products are driven by evidence-based research and continuous improvement."
  }];
  const achievements = [{
    icon: Award,
    number: "50+",
    label: "Awards & Recognitions",
    color: "text-primary"
  }, {
    icon: Users,
    number: "1000+",
    label: "Healthcare Partners",
    color: "text-accent"
  }, {
    icon: Target,
    number: "99.9%",
    label: "Quality Compliance",
    color: "text-success"
  }, {
    icon: TrendingUp,
    number: "25+",
    label: "Years of Excellence",
    color: "text-primary"
  }];
  return <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* About Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary">
              About Genial Health Care
            </Badge>
            
            <h2 className="text-5xl font-bold mb-6 text-foreground">
              Pioneering Healthcare 
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {" "}Innovation
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">Genial Healthcare Pvt. Ltd. has been serving the healthcare and nutrition space for over 15 years, driven by a clear vision: to deliver reliable, high-quality medicines and nutrition solutions while creating lasting value for customers and employees alike.</p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our commitment to excellence, combined with cutting-edge research and 
              manufacturing capabilities, has established us as a trusted partner for 
              healthcare professionals worldwide.
            </p>
            
            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </div>
          
          {/* Achievement Stats */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {achievements.map((achievement, index) => <Card key={achievement.label} className="group hover:shadow-medical transition-all duration-300 hover:scale-105 bg-gradient-card border-border/50" style={{
            animationDelay: `${index * 200}ms`
          }}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors duration-300">
                      <achievement.icon className={`h-8 w-8 ${achievement.color} group-hover:animate-pulse`} />
                    </div>
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-foreground">
              Our Core Values
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our mission to deliver exceptional pharmaceutical solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <Card key={value.title} className="group text-center hover:shadow-medical transition-all duration-500 hover:scale-105 bg-gradient-card border-border/50 animate-fade-in" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-gradient-primary group-hover:animate-pulse-glow transition-all duration-300">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-gradient-hero rounded-3xl p-12 shadow-medical animate-fade-in-up">
          <h3 className="text-4xl font-bold mb-6 text-foreground">
            Our Mission
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            "To develop, manufacture, and deliver innovative pharmaceutical solutions that 
            enhance patient care, improve quality of life, and contribute to the advancement 
            of global healthcare through excellence, integrity, and compassion."
          </p>
        </div>
      </div>
    </section>;
}