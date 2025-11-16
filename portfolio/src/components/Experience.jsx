function Experience() {
  const experiences = [
    {
      company: 'DaVita (via Tata Consultancy Services)',
      position: 'Data Analyst',
      period: 'July 2021 – July 2023',
      location: 'Hyderabad, India',
      achievements: [
        'Collected, cleaned, and transformed healthcare data, improving data processing efficiency by 28%',
        'Built 25+ automated dashboards using Tableau & Power BI for 50+ centers',
        'Analyzed datasets of 20M+ records using SQL and Python, reducing patient no-show rates by 12%',
        'Performed ETL testing and validation, reducing critical data discrepancies by 35%',
        'Automated reporting processes, cutting report generation time by 40%',
        'Worked cross-functionally to define KPIs and deliver actionable insights'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold mb-2">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <p className="text-gray-600 font-medium">
                    {exp.period}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {exp.location}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3 mt-6">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

