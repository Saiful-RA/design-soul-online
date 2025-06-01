
import { Search, Palette, Code, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "User Research & Strategy",
      description: "Deep dive into user behavior through interviews, surveys, and usability testing to inform design decisions.",
      features: [
        "User interviews & surveys",
        "Competitive analysis",
        "Persona development",
        "Journey mapping"
      ]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create beautiful, intuitive interfaces that delight users and drive business results.",
      features: [
        "Wireframing & prototyping",
        "Visual design",
        "Design systems",
        "Responsive design"
      ]
    },
    {
      icon: Code,
      title: "Design Development",
      description: "Bridge the gap between design and development with detailed specs and collaboration.",
      features: [
        "Design handoffs",
        "Frontend collaboration",
        "Quality assurance",
        "Implementation support"
      ]
    },
    {
      icon: BarChart,
      title: "Optimization & Testing",
      description: "Continuously improve user experience through data-driven insights and iterative design.",
      features: [
        "A/B testing",
        "Analytics review",
        "Conversion optimization",
        "Performance monitoring"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How I Can Help
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial research to final implementation, I provide comprehensive 
            UX design services that deliver measurable business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your User Experience?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how we can work together to create exceptional digital experiences 
            that drive results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Start a Project
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
