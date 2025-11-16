function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Hi, I'm{' '}
            <span className="text-blue-600">Sahaj Mekala</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Graduate Student in Computer Science
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Specializing in Data Analytics, Machine Learning, and Generative AI. 
            Building intelligent, scalable solutions with LLMs, RAG systems, and modern AI frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

