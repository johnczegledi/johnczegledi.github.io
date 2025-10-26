import React, { useEffect, useState } from 'react';
import { Database, Code, BarChart3, TestTube, X, ArrowRight, Brain, Wrench } from 'lucide-react';
interface Skill {
  name: string;
  level: number;
}
interface SkillCategory {
  icon: JSX.Element;
  title: string;
  description: string;
  tagline: string;
  skills: Skill[];
}
export function About() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const skillCategories: SkillCategory[] = [{
    icon: <Database size={32} />,
    title: 'Data Engineering',
    tagline: 'ETL, Pipelines, Integration & Migration',
    description: 'Delivering scalable data architectures and dimensional modeling for enterprise solutions.',
    skills: [{
      name: 'ETL Development',
      level: 95
    }, {
      name: 'Data Integration',
      level: 90
    }, {
      name: 'Data Migration',
      level: 90
    }, {
      name: 'Data Warehousing',
      level: 90
    }]
  }, {
    icon: <Code size={32} />,
    title: 'ETL Data Modeling & Design',
    tagline: 'Dimensional Modeling, Schema Design',
    description: 'Building robust data pipelines and integration solutions for seamless data flow across systems.',
    skills: [{
      name: 'Medallion Architecture',
      level: 95
    }, {
      name: 'Dimensional Modeling',
      level: 90
    }, {
      name: 'Star Schema',
      level: 85
    }, {
      name: 'Snowflake Schema',
      level: 85
    }, {
      name: 'Normalization',
      level: 90
    }]
  }, {
    icon: <BarChart3 size={32} />,
    title: 'Business Intelligence',
    tagline: 'Dashboards, Reporting, Analytics',
    description: 'Creating interactive dashboards and reports that drive data-driven decision making.',
    skills: [{
      name: 'OLAP Cubes',
      level: 85
    }, {
      name: 'Dashboard Design',
      level: 95
    }, {
      name: 'Reporting',
      level: 90
    }, {
      name: 'Data Visualization',
      level: 90
    }]
  }, {
    icon: <TestTube size={32} />,
    title: 'Quality & Testing',
    tagline: 'Data Quality, Automation, Validation',
    description: 'Ensuring data accuracy and reliability through comprehensive testing and validation.',
    skills: [{
      name: 'Data Quality',
      level: 90
    }, {
      name: 'Test Automation',
      level: 85
    }, {
      name: 'UAT',
      level: 90
    }, {
      name: 'Performance Testing',
      level: 85
    }, {
      name: 'Data Profiling',
      level: 95
    }]
  }, {
    icon: <Brain size={32} />,
    title: 'AI & Automation',
    tagline: 'Machine Learning, Process Automation',
    description: 'Implementing cutting-edge AI solutions and intelligent automation to optimize processes and unlock new business capabilities.',
    skills: [{
      name: 'AI Agent Automation',
      level: 85
    }, {
      name: 'Ecommerce Workflows',
      level: 75
    }, {
      name: 'Social Media Data Scraping',
      level: 90
    }, {
      name: 'Predictive Analytics',
      level: 85
    }]
  }, {
    icon: <Wrench size={32} />,
    title: 'Coding Skills',
    tagline: 'SQL, Python, Javascript, Cloud Platforms',
    description: 'Proficient in modern programming languages, databases, and cloud technologies essential for building enterprise-grade data solutions.',
    skills: [{
      name: 'Code Modularization',
      level: 100
    },
     {
      name: 'Authentication',
      level: 85
    }, {
      name: 'Code Efficency and Performance',
      level: 85
    }, {
      name: 'Code Troubleshooting',
      level: 85
    }, {
      name: 'Deployment and Build',
      level: 85
    }]
  }];
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setExpandedCard(null);
      }
    };
    if (expandedCard !== null) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [expandedCard]);
  return <React.Fragment>
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Side - Text Content (2 columns) */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Me
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I am a highly skilled IT data freelancer specializing in
                delivering comprehensive data solutions across banking and
                finance, telecommunications, and utilities sectors.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With a strong foundation in data engineering and design, business
                intelligence, and emerging AI technologies, I help organizations
                transform their data into actionable insights and automated
                solutions that drive business value.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                My approach combines technical excellence with business acumen,
                ensuring every solution delivers measurable business outcomes.
              </p>
            </div>
            {/* Right Side - Skill Cards (3 columns) */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => <button key={index} onClick={() => setExpandedCard(index)} className="relative bg-teal-500 text-white p-8 hover:bg-teal-600 transition-all duration-300 group overflow-hidden cursor-pointer text-left">
                  {/* Folded Corner Effect */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-teal-600 group-hover:bg-teal-700 transform rotate-45 translate-x-8 -translate-y-8 transition-colors"></div>
                  <div className="relative flex flex-col h-full">
                    {/* Icon Circle */}
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                      <div className="text-teal-600">{category.icon}</div>
                    </div>
                    {/* Title */}
                    <h3 className="text-lg font-bold mb-2 leading-tight">
                      {category.title}
                    </h3>
                    {/* Tagline */}
                    <p className="text-white/70 text-xs mb-4">
                      {category.tagline}
                    </p>
                    {/* Mini Preview Bars */}
                    <div className="space-y-2 opacity-50 mb-4">
                      {category.skills.slice(0, 3).map((skill, skillIndex) => <div key={skillIndex} className="h-1 bg-white/30 w-full">
                          <div className="h-full bg-white" style={{
                      width: `${skill.level}%`
                    }}></div>
                        </div>)}
                    </div>
                    {/* Expand Link */}
                    <div className="flex items-center justify-end mt-auto">
                      <span className="text-xs text-white/60 group-hover:text-white transition-colors flex items-center gap-1">
                        Expand
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </button>)}
            </div>
          </div>
        </div>
        {/* Modal Overlay */}
        {expandedCard !== null && <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setExpandedCard(null)}>
            <div className="relative bg-teal-500 text-white p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300" onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
              {/* Close Button */}
              <button onClick={() => setExpandedCard(null)} className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors" aria-label="Close">
                <div className="p-4"> 
                    <X size={24} />
                </div>
              </button>
              {/* Folded Corner Effect */}
              {/* <div className="absolute top-0 right-0 w-24 h-24 bg-teal-600 transform rotate-45 translate-x-12 -translate-y-12"></div> */}
              <div className="relative">
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8">
                  <div className="text-teal-600">
                    {skillCategories[expandedCard].icon}
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-3xl font-bold mb-4">
                  {skillCategories[expandedCard].title}
                </h3>
                {/* Description */}
                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  {skillCategories[expandedCard].description}
                </p>
                {/* Skills with Progress Bars */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold mb-4">
                    Technical Expertise
                  </h4>
                  {skillCategories[expandedCard].skills.map((skill, index) => <div key={index} className="animate-in slide-in-from-left duration-500" style={{
                animationDelay: `${index * 100}ms`
              }}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-white/80">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-3 bg-white/20 overflow-hidden">
                        <div className="h-full bg-white transition-all duration-1000 ease-out" style={{
                    width: `${skill.level}%`,
                    transitionDelay: `${index * 100}ms`
                  }}></div>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>}
      </section>
    </React.Fragment>;
}
