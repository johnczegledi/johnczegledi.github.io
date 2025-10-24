//import React from 'react';
export function Skills() {
  const skillCategories = [{
    category: 'ETL',
    skills: ['Databricks Lakehouse' , 'Microsoft SSIS' ,'Oracle Toad/SQL Developer' ,'Amazon Redshift' , 'Business Objects Data Services','Informatica PowerCenter' ]
  }, {
    category: 'Data Modeling & Design',
    skills: ['Erwin Data Modeler']
  }, {
    category: 'Business Intelligence Reporting',
    skills: ['Microsoft Tabular', 'Micosoft SSAS','Power BI','Thoughtspot', 'Business Objects Reporting (Webi)']
  }, {
    category: 'Data Quality & Testing',
    skills: ['QTest', 'Infosphere QualityStage']
  }, {
    category: 'AI Workflow Automation',
    skills: ['n8n', 'Make']
  }, {
    category: 'Coding Skills',
    skills: ['SQL', 'Python', 'React.js', 'HTML/CSS']
  }];
  return <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech Software Skills
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise across the data technology stack
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => <div key={index} className="bg-gray-800 p-8 hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-teal-400">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => <li key={skillIndex} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-teal-500 mr-3"></span>
                    {skill}
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>
    </section>;
}