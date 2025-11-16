function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Visualizing Heart Disease Risk Factors',
      category: 'Data Visualization',
      description: 'Analyzed 550,000+ records from CDC data (2020–2022). Built dashboards using Tableau, Altair, and D3.js. Identified high-risk groups based on age, lifestyle, and demographics.',
      tech: ['Tableau', 'Altair', 'D3.js', 'Python', 'Data Analysis']
    },
    {
      id: 2,
      title: 'Amazon Product Reviews Sentiment Analysis',
      category: 'Machine Learning',
      description: 'Trained SVM, Random Forest, Naive Bayes on 30,000+ reviews. Achieved 91% accuracy using an SVM + Logistic Regression ensemble. Provided performance visuals and confusion matrices.',
      tech: ['Python', 'scikit-learn', 'SVM', 'Random Forest', 'Naive Bayes', 'Logistic Regression']
    },
    {
      id: 3,
      title: 'Smart Document QA Bot',
      category: 'GenAI | RAG',
      description: 'Built a document question-answering assistant using GPT-4 and Chroma DB. Implemented chunking, embeddings, similarity search, and LangChain RAG pipeline.',
      tech: ['GPT-4', 'LangChain', 'Chroma DB', 'RAG', 'Python', 'Embeddings']
    },
    {
      id: 4,
      title: 'Student Retention Predictor',
      category: 'ML & Data Analysis',
      description: 'Analyzed 10,000+ student records to identify dropout factors. Trained Logistic Regression, Decision Trees, Random Forest (85% accuracy). Built dashboards to visualize trends and insights.',
      tech: ['Python', 'scikit-learn', 'Logistic Regression', 'Decision Trees', 'Random Forest', 'Tableau']
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

