import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Factory, Truck, Globe } from 'lucide-react';
import { products } from '../data/products';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#1a1a1a] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/industrial/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/90 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Industrial Rubber Solutions Built for <span className="text-orange-500">Performance</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Quality rubber mats, sheeting and flooring systems for industrial, agricultural and commercial use. Engineered to withstand the toughest environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-md font-semibold transition-colors flex items-center gap-2"
              >
                View Our Products <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-md font-semibold transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Premium Rubber Products for Every Industry</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                SILCORUB LIMITED is a leading UK supplier of industrial and commercial rubber products. We specialize in high-durability rubber sheeting, safety mats, and flooring systems designed to meet rigorous global standards.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you need heavy-duty stable mats for agriculture, anti-fatigue solutions for manufacturing, or specialized traffic calming products, our extensive range delivers unmatched reliability and safety.
              </p>
              <Link to="/about" className="text-orange-600 font-semibold hover:text-orange-700 flex items-center gap-2">
                Learn more about SILCORUB <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/factory/600/600" alt="Industrial Facility" className="rounded-lg shadow-md w-full h-64 object-cover" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/rubber/600/600" alt="Rubber Materials" className="rounded-lg shadow-md w-full h-64 object-cover mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Product Range</h2>
            <p className="text-gray-600">Explore our comprehensive selection of industrial-grade rubber solutions, manufactured to the highest specifications.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link 
                key={product.id} 
                to={`/products#${product.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
              >
                <div className="h-48 bg-gray-200 overflow-hidden relative">
                  <img 
                    src={`https://picsum.photos/seed/${product.id}/600/400`} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-orange-600 transition-colors">{product.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-grow">{product.description}</p>
                  <span className="text-orange-600 text-sm font-semibold flex items-center gap-1 mt-auto">
                    View Specifications <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose SILCORUB?</h2>
            <p className="text-gray-400">We are committed to delivering excellence through quality materials and dedicated service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#2d2d2d] p-8 rounded-xl border border-white/5">
              <ShieldCheck className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">Durable Materials</h3>
              <p className="text-gray-400 text-sm leading-relaxed">High-grade rubber compounds engineered for longevity and resilience in harsh environments.</p>
            </div>
            <div className="bg-[#2d2d2d] p-8 rounded-xl border border-white/5">
              <Factory className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">Custom Manufacturing</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Bespoke solutions and custom dimensions available to meet your specific project requirements.</p>
            </div>
            <div className="bg-[#2d2d2d] p-8 rounded-xl border border-white/5">
              <Truck className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">Bulk Supply Capability</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Equipped to handle large-scale commercial orders with consistent quality and timely delivery.</p>
            </div>
            <div className="bg-[#2d2d2d] p-8 rounded-xl border border-white/5">
              <Globe className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">UK-Based Operations</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Local support, fast communication, and reliable distribution across the United Kingdom.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need technical specifications or bulk pricing?</h2>
          <p className="text-orange-100 text-lg mb-10">Our team of experts is ready to assist you in finding the perfect rubber solution for your application.</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
