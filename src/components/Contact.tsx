import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        'service_k7sshs9', // your EmailJS service ID
        'template_vyzb4hl', // your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
          reply_to: formData.email, // ensures replies go to sender
        },
        'AKPXvXz8NMUYN17ai' // your EmailJS public key
      )
      .then(() => {
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', company: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('There was a problem sending your message. Please try again.');
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your data challenges into opportunities? Let's discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-500 text-white flex items-center justify-center mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">czegledijohn@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-teal-500 text-white flex items-center justify-center mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">
                    Available for remote projects in the Asia Pacific Region
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-teal-500"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-teal-500"
                  placeholder="your.email@company.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-teal-500"
                  placeholder="Your company name"
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-teal-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 text-white font-semibold py-4 hover:bg-teal-600 transition-colors flex items-center justify-center"
              >
                SEND MESSAGE
                <Send className="ml-2" size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
