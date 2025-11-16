function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            About Me
          </h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              Graduate student in Computer Science with practical experience in data analytics, 
              machine learning, and Generative AI. Skilled in building LLM-based applications, 
              RAG systems, and AI workflows using LangChain and modern AI frameworks.
            </p>
            <p>
              Seeking opportunities to develop intelligent, scalable solutions in dynamic, 
              innovation-focused environments.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.0</div>
              <div className="text-gray-600">GPA (M.S. CS)</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Dashboards Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

