import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center font-bold text-white tracking-tighter">
                SR
              </div>
              <span className="font-bold text-xl text-white tracking-wider">SILCORUB</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Quality rubber mats, sheeting, and flooring systems for industrial, agricultural, and commercial use. Built for performance.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-orange-500 transition-colors">Products</Link></li>
              <li><Link to="/blog" className="hover:text-orange-500 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Products</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/products#rubber-sheeting" className="hover:text-orange-500 transition-colors">Rubber Sheeting</Link></li>
              <li><Link to="/products#stable-cow-mats" className="hover:text-orange-500 transition-colors">Stable & Cow Mats</Link></li>
              <li><Link to="/products#gym-mats" className="hover:text-orange-500 transition-colors">Gym Mats</Link></li>
              <li><Link to="/products#anti-fatigue-mats" className="hover:text-orange-500 transition-colors">Anti-Fatigue Mats</Link></li>
              <li><Link to="/products" className="hover:text-orange-500 transition-colors">View All</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <span>222 Belvedere Road,<br />Burton-On-Trent, Staffordshire,<br />England, DE13 0RE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span>+44 07853 169264</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="mailto:manager@silcorub.co.uk" className="hover:text-orange-500 transition-colors">manager@silcorub.co.uk</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} SILCORUB LIMITED. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
