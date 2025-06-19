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
      title: "3+ Years Experience",
      description: "Leading UX design for Fortune 500 companies and innovative startups"
    },
    {
      icon: Users,
      title: "30+ Projects Delivered",
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
    <>
      <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I believe great design is invisible—it just works. My approach combines 
              empathy, creativity, and strategic thinking to solve complex problems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Starting as a graphic designer, I discovered my passion for user experience 
                when I realized the power of design to solve real problems. Over the past 3 years, 
                I've had the privilege of working with diverse teams and clients, from early-stage 
                startups to established enterprises.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                My background in psychology gives me unique insights into user behavior, 
                while my technical skills allow me to collaborate effectively with development teams. 
                I'm passionate about creating inclusive designs that work for everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800">
                  <CardContent className="p-6 text-center">
                    <highlight.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{highlight.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Skills & Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <span className="text-gray-700 dark:text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Thin white line at the bottom for dark mode */}
      <div className="dark:block hidden">
        <div className="h-[1px] w-full bg-white" />
      </div>
    </>
  );
};

export default About;
