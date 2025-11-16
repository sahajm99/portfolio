function Education() {
  const education = [
    {
      degree: 'M.S. Computer Science',
      school: 'University of North Texas',
      gpa: 'GPA: 4.0',
      period: 'Aug 2023 – May 2025',
      location: 'Denton, TX'
    },
    {
      degree: 'B.Tech Electronics & Instrumentation Engineering',
      school: 'IIT (ISM) Dhanbad',
      gpa: 'GPA: 3.5',
      period: '2017 – 2021',
      location: 'Dhanbad, India'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold mb-2">
                    {edu.school}
                  </p>
                  <p className="text-gray-600 font-medium">
                    {edu.gpa}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <p className="text-gray-700 font-medium mb-1">
                    {edu.period}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {edu.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

