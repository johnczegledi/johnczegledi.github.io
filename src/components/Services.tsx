//import React from 'react';
import { Database, Layout, Cog, TestTube, Brain, Code, Search, Lightbulb, Users } from 'lucide-react';
export function Services() {
  const services = [{
    icon: <Users size={40} />,
    title: 'Leadership',
    description: 'Design and implement scalable data architectures that support your business goals and growth.'
  },{
    icon: <Search size={40} />,
    title: 'Business Analysis',
    description: 'Design and implement scalable data architectures that support your business goals and growth.'
  },{
    icon: <Lightbulb size={40} />,
    title: 'Advisory',
    description: 'Design and implement scalable data architectures that support your business goals and growth.'
  },{
    icon: <Database size={40} />,
    title: 'Data Architecture',
    description: 'Design and implement scalable data architectures that support your business goals and growth.'
  }, {
    icon: <Layout size={40} />,
    title: 'Data Design & Modeling',
    description: 'Create efficient data models and structures optimized for performance and usability.'
  }, {
    icon: <Cog size={40} />,
    title: 'Data Engineering',
    description: 'Build robust ETL pipelines and data integration solutions for seamless data flow.'
  }, {
    icon: <TestTube size={40} />,
    title: 'Testing & Quality',
    description: 'Ensure data accuracy and reliability through comprehensive testing and quality assurance.'
  }, {
    icon: <Brain size={40} />,
    title: 'AI & Automation',
    description: 'Implement AI solutions and automation to optimize processes and drive innovation.'
  }, {
    icon: <Code size={40} />,
    title: 'BI Reporting',
    description: 'Develop interactive dashboards and reports for data-driven decision making.'
  }];
  return <section id="services" className="py-20 bg-gray-50 scroll-mt-1">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive data solutions tailored to your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="group relative bg-white p-8 hover:bg-teal-500 transition-all duration-300 overflow-hidden">
              {/* Geometric corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-teal-100 group-hover:bg-teal-600 transform rotate-45 translate-x-10 -translate-y-10 transition-colors"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-white flex items-center justify-center mb-6 transition-colors">
                  <div className="text-teal-600 group-hover:text-teal-600">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}