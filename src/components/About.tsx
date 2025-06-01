
import { Award, Users, Lightbulb, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "User Research & Testing",
    "Information Architecture",
    "Interaction Design",
    "Prototyping & Wireframing",
    "Design Systems",
    "Accessibility Design",
    "Figma & Adobe Creative Suite",
    "HTML/CSS/JavaScript"
  ];

  const highlights = [
    {
      icon: Award,
      title: "8+ Years Experience",
      description: "Leading UX design for Fortune 500 companies and innovative startups"
    },
    {
      icon: Users,
      title: "50+ Projects Delivered",
      description: "Successfully launched products used by millions of users worldwide"
    },
    {
      icon: Lightbulb,
      title: "Design Thinking Expert",
      description: "Facilitating workshops and implementing human-centered design processes"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Proven track record of increasing conversion rates by up to 40%"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I believe great design is invisible—it just works. My approach combines 
            empathy, creativity, and strategic thinking to solve complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Starting as a graphic designer, I discovered my passion for user experience 
              when I realized the power of design to solve real problems. Over the past 8 years, 
              I've had the privilege of working with diverse teams and clients, from early-stage 
              startups to established enterprises.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My background in psychology gives me unique insights into user behavior, 
              while my technical skills allow me to collaborate effectively with development teams. 
              I'm passionate about creating inclusive designs that work for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <highlight.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">{highlight.title}</h4>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Skills & Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors duration-300"
              >
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
