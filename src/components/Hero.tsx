import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-16 bg-white dark:bg-gray-900 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Md. Saiful Islam
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light">
              UX Designer & Digital Experience Strategist
            </h2>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              I craft intuitive digital experiences that bridge the gap between
              user needs and business goals. With 3+ years of experience, I
              specialize in user research, interface design, and creating
              meaningful connections through design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                onClick={() => scrollToAbout()}
                className="bg-blue-600 hover:bg-blue-700 text-white dark:text-white px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-800 px-8 py-3 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>
      {/* Thin white line at the bottom for dark mode */}
      <div className="dark:block hidden">
        <div className="h-[2px] w-full bg-white" />
      </div>
    </>
  );
};

export default Hero;
