function Skills() {
  const skillCategories = [
    {
      category: 'Data Analysis & Visualization',
      skills: ['Python', 'Tableau', 'Power BI', 'Excel', 'D3.js', 'Altair', 'Matplotlib', 'Seaborn']
    },
    {
      category: 'Generative AI & LLMs',
      skills: ['LLM App Development', 'RAG', 'CAG', 'KAG']
    },
    {
      category: 'AI Frameworks',
      skills: ['LangChain', 'LangGraph']
    },
    {
      category: 'Programming',
      skills: ['Python', 'SQL', 'JavaScript']
    },
    {
      category: 'Machine Learning',
      skills: ['scikit-learn', 'Logistic Regression', 'Random Forest', 'SVM', 'KNN', 'Ensemble Models', 'ANN', 'EDA', 'Feature Engineering']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Skills
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-200">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

