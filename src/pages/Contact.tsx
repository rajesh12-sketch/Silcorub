import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[#1a1a1a] py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get in touch for technical specifications, bulk pricing, or general inquiries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Address</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      222 Belvedere Road,<br />
                      Burton-On-Trent, Staffordshire,<br />
                      England, DE13 0RE
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Phone</p>
                    <p className="text-gray-600 text-sm">+44 07853 169264</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:manager@silcorub.co.uk" className="text-orange-600 hover:text-orange-700 text-sm transition-colors">
                      manager@silcorub.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-300 rounded-xl overflow-hidden h-64 relative border border-gray-200">
              {/* In a real app, this would be an iframe to Google Maps */}
              <img 
                src="https://picsum.photos/seed/map/600/400" 
                alt="Map Location" 
                className="w-full h-full object-cover opacity-80 mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-md shadow-sm font-medium text-gray-800 flex items-center gap-2">
                  <MapPin size={16} className="text-orange-600" /> View on Google Maps
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">Message Sent Successfully!</h3>
                  <p>Thank you for contacting SILCORUB. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                      placeholder="+44 1234 567890"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-md transition-colors disabled:opacity-70"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
