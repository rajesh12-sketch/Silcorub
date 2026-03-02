import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { Calendar, ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts.filter(p => p.id !== id).slice(0, 3);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Image */}
      <div className="h-[40vh] min-h-[300px] bg-gray-900 relative">
        <img 
          src={`https://picsum.photos/seed/${post.id}/1920/1080`} 
          alt={post.title}
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <Link to="/blog" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-6 text-sm font-medium transition-colors">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <div className="flex items-center gap-2 text-gray-300 mb-4 text-sm">
              <Calendar size={16} />
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Content */}
        <article className="prose prose-lg prose-orange max-w-none mb-16">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('- **') || paragraph.match(/^\d+\.\s\*\*/)) {
              // Simple markdown list rendering for the static content
              const isNumbered = paragraph.match(/^\d+\.\s\*\*/);
              const content = paragraph.replace(/^(-\s|\d+\.\s)/, '');
              const parts = content.split('**');
              return (
                <div key={index} className="flex items-start gap-2 mb-2 ml-4">
                  <span className="text-orange-500 font-bold mt-1">{isNumbered ? '•' : '•'}</span>
                  <span>
                    <strong>{parts[1]}</strong>{parts[2]}
                  </span>
                </div>
              );
            }
            if (paragraph.trim() === '') return null;
            return <p key={index} className="text-gray-700 leading-relaxed mb-6">{paragraph}</p>;
          })}
        </article>

        {/* CTA */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Expert Advice?</h3>
          <p className="text-gray-600 mb-6">Contact SILCORUB LIMITED for product guidance and technical specifications tailored to your project.</p>
          <Link to="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-semibold transition-colors">
            Get in Touch
          </Link>
        </div>

        {/* Related Posts */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map(related => (
              <Link key={related.id} to={`/blog/${related.id}`} className="group">
                <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${related.id}/400/300`} 
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2 text-sm">
                  {related.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
