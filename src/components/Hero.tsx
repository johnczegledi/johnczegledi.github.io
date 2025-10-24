//import React from 'react';
//import { ArrowRight } from 'lucide-react';
export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left Side - Dark Background with Text */}
        <div className="relative bg-gray-900 text-white flex items-center overflow-hidden">
          {/* Geometric Shape */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-teal-500 transform skew-x-12 translate-x-16"></div>
          <div className="container mx-auto px-8 lg:px-16 py-20 relative z-10">
            <div className="max-w-xl">
              <p className="text-teal-400 font-semibold mb-4 tracking-wide uppercase text-sm">
                IT Data Specialist
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
                I'm a Data Designer, Developer, Test Lead & Advisor.
              </h1>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Transforming business challenges into data-driven solutions
                across banking, telecommunications, and utilities sectors. 
                <br />
                <br />Available remotely or onsite (neg.) in the Asia Pacific Region
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={scrollToContact} className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  GET IN TOUCH
                </button>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({
                behavior: 'smooth'
              })} className="px-8 py-3 bg-teal-500 text-white font-semibold hover:bg-teal-600 transition-all duration-300">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side - Image */}
         <div className="relative bg-gray-100 hidden lg:block">
  {/* Added px-8 py-8 (padding) to shrink the effective size of the image container */}
  <div className="absolute inset-0 flex items-center justify-center px-16 py-16">
      <img 
          src="src/images/composite.png"  
          alt="Professional" 
          className="w-fit-content h-fit-content  object-cover" 
      />
  </div>
  {/* Geometric Overlay */}
  <div className="absolute left-0 top-0 bottom-0 w-32 bg-teal-500 transform -skew-x-12 -translate-x-16 opacity-90"></div>
</div>
      </div>
    </section>;
}