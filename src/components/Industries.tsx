//import React from 'react';
import { Building2, Radio, Zap } from 'lucide-react';
export function Industries() {
  const industries = [{
    icon: <Building2 size={48} />,
    title: 'Banking & Finance',
    description: 'Delivering secure, compliant data solutions for financial institutions with expertise in risk analytics, regulatory reporting, and customer data management.'
  }, {
    icon: <Radio size={48} />,
    title: 'Telecommunications',
    description: 'Optimizing network data, customer analytics, and billing systems to enhance service delivery and operational efficiency in telecom environments.'
  }, {
    icon: <Zap size={48} />,
    title: 'Utilities',
    description: 'Implementing smart grid analytics, consumption forecasting, and infrastructure optimization solutions for utility companies.'
  }];
  return <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industry Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Deep domain expertise across critical sectors
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => <div key={index} className="relative bg-teal-500 text-white p-10 hover:bg-teal-600 transition-colors group overflow-hidden">
              {/* Geometric accent */}
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-600 group-hover:bg-teal-700 transform -rotate-45 -translate-x-12 translate-y-12 transition-colors"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-white flex items-center justify-center mb-6">
                  <div className="text-teal-600">{industry.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                <p className="text-white/90 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}