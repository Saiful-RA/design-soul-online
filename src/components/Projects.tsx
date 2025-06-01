
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "HealthTech Mobile App",
      category: "Healthcare • Mobile Design",
      description: "Redesigned a telemedicine app to improve patient engagement and reduce appointment no-shows by 35%. Led user research, created personas, and designed an intuitive booking system.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      tags: ["User Research", "Mobile Design", "Prototyping", "Usability Testing"],
      results: "35% reduction in no-shows, 4.8/5 user satisfaction rating"
    },
    {
      title: "E-commerce Platform Redesign",
      category: "Retail • Web Design",
      description: "Complete UX overhaul of an e-commerce platform serving 500K+ monthly users. Improved conversion rates through streamlined checkout and enhanced product discovery.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Information Architecture", "Conversion Optimization", "A/B Testing", "Design System"],
      results: "42% increase in conversion rate, 28% boost in average order value"
    },
    {
      title: "Financial Dashboard",
      category: "FinTech • Data Visualization",
      description: "Designed an intuitive dashboard for financial advisors to track client portfolios. Complex data made simple through thoughtful information hierarchy and interactive visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Data Visualization", "Dashboard Design", "User Flow", "Accessibility"],
      results: "60% faster task completion, 95% user adoption rate"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects where I've helped businesses 
            solve complex user experience challenges and achieve measurable results.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-green-800 font-medium">Results: {project.results}</p>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Case Study
                    </Button>
                    <Button variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      View Prototype
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" className="px-8 py-3 text-lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
