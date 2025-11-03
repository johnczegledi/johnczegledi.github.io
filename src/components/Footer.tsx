//import React from 'react';
export function Footer() {
  return <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Data Specialist</h3>
            <p className="text-gray-400 leading-relaxed">
              Professional IT data solutions in banking, telecommunications, utilities and more.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth'
              })} className="hover:text-teal-400 transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({
                behavior: 'smooth'
              })} className="hover:text-teal-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('industries')?.scrollIntoView({
                behavior: 'smooth'
              })} className="hover:text-teal-400 transition-colors">
                  Industries
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })} className="hover:text-teal-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} John Czegledi. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}