import { products } from '../data/products';
import { Check } from 'lucide-react';

export default function Products() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[#1a1a1a] py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Industrial-grade rubber solutions for commercial applications. View our technical specifications below.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Navigation */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-16 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {products.map(p => (
              <a 
                key={p.id} 
                href={`#${p.id}`}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>

        {/* Product Sections */}
        <div className="space-y-24">
          {products.map((product, index) => (
            <section 
              key={product.id} 
              id={product.id} 
              className="scroll-mt-32"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Image Side */}
                  <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="h-64 lg:h-full bg-gray-100 relative">
                      <img 
                        src={`https://picsum.photos/seed/${product.id}/800/800`} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
                      <h2 className="absolute bottom-4 left-4 text-3xl font-bold text-white lg:hidden">{product.name}</h2>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`lg:col-span-7 p-8 lg:p-12 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <h2 className="hidden lg:block text-3xl font-bold text-gray-900 mb-6">{product.name}</h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Features */}
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b pb-2">Key Features</h3>
                        <ul className="space-y-3">
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                              <Check className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Specifications */}
                      <div className="space-y-6">
                        {product.patterns && (
                          <div>
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Available Patterns</h3>
                            <div className="flex flex-wrap gap-2">
                              {product.patterns.map((p, i) => (
                                <span key={i} className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded text-xs font-medium">{p}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {product.types && (
                          <div>
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Available Types</h3>
                            <div className="flex flex-wrap gap-2">
                              {product.types.map((t, i) => (
                                <span key={i} className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded text-xs font-medium">{t}</span>
                              ))}
                            </div>
                          </div>
                        )}

                        {product.thickness && (
                          <div>
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Thickness Options</h3>
                            <p className="text-gray-600 text-sm">{product.thickness}</p>
                          </div>
                        )}

                        <div>
                          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Common Applications</h3>
                          <div className="flex flex-wrap gap-2">
                            {product.applications.map((app, i) => (
                              <span key={i} className="bg-orange-50 text-orange-800 border border-orange-100 px-2.5 py-1 rounded text-xs font-medium">{app}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
