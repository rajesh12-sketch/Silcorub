import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[#1a1a1a] py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Industry Insights</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Guides, tips, and news about industrial rubber products and applications.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src={`https://picsum.photos/seed/${post.id}/600/400`} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={14} />
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-orange-600 transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm hover:text-orange-700 mt-auto"
                >
                  Read Full Article <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
