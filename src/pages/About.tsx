import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const industries = [
    "Agriculture & Farming",
    "Industrial Manufacturing",
    "Commercial Kitchens",
    "Warehousing & Logistics",
    "Sports & Fitness Facilities",
    "Equestrian & Stables",
    "Marine & Offshore",
    "Public Infrastructure"
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-[#1a1a1a] py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About SILCORUB</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Delivering high-performance rubber solutions across the UK.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Main Content */}
          <div>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  SILCORUB LIMITED is a premier supplier of industrial and commercial rubber products based in Staffordshire, England. We specialize in providing high-quality, durable rubber solutions designed to meet the rigorous demands of various sectors, including agriculture, fitness, manufacturing, and commercial spaces.
                </p>
                <p>
                  Since our products reach diverse markets, we employ stringent quality control to ensure international quality benchmarks. Skillful personnel and the newest technology assure excellence at all stages of production and management. Top-quality raw materials, well-equipped labs, and spacious production facilities add more to our commitment to excellence.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mission Statement</h2>
              <p className="text-xl text-gray-600 italic border-l-4 border-orange-500 pl-6 py-2 bg-gray-50">
                "To provide comprehensive, durable, and innovative rubber solutions that enhance safety, comfort, and efficiency for our clients across all industries, while maintaining the highest standards of quality and service."
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality & Manufacturing Standards</h2>
              <p className="text-gray-600 mb-6">
                Besides our effective quality control process, we focus on research and development to address the needs of an ever-changing global scenario. Custom-made products are produced and delivered on time. Armed with these resources and perspectives, SILCORUB provides comprehensive solutions as far as rubber tiles, mats, and accessories are concerned.
              </p>
              <ul className="space-y-3">
                {[
                  "Stringent raw material selection",
                  "Continuous R&D for product improvement",
                  "Strict adherence to dimensional tolerances",
                  "Comprehensive testing for durability and resilience"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="text-orange-500 w-5 h-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Industries We Serve</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((industry, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="font-medium text-gray-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Address</p>
                  <p className="text-lg">222 Belvedere Road,<br/>Burton-On-Trent, Staffordshire,<br/>England, DE13 0RE</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-lg">+44 07853 169264</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:manager@silcorub.co.uk" className="text-lg text-orange-400 hover:text-orange-300 transition-colors">manager@silcorub.co.uk</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
