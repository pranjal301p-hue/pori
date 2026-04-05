import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BRAND } from '../constants';
import PageHeader from '../components/PageHeader';

const POSTS = [
  {
    id: 1,
    title: "The Future of Web Development in 2026",
    excerpt: "Exploring the latest trends in AI-driven development and modern frameworks.",
    date: "March 25, 2026",
    author: "Pranjal Saikia",
    image: "https://picsum.photos/seed/webdev/800/500",
    category: "Technology",
  },
  {
    id: 2,
    title: "How to Build a High-Converting Portfolio",
    excerpt: "Tips and tricks to showcase your work and attract high-paying clients.",
    date: "March 18, 2026",
    author: "Pranjal Saikia",
    image: "https://picsum.photos/seed/portfolio/800/500",
    category: "Business",
  },
  {
    id: 3,
    title: "Mastering UI Design with Minimalist Principles",
    excerpt: "Why less is more when it comes to creating modern user interfaces.",
    date: "March 10, 2026",
    author: "Pranjal Saikia",
    image: "https://picsum.photos/seed/uiux/800/500",
    category: "Design",
  },
];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | {BRAND.name}</title>
      </Helmet>

      <PageHeader 
        title="Latest Insights" 
        subtitle="Sharing thoughts on technology, design, and the digital world."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-gold font-bold tracking-widest text-sm mb-4 uppercase">My Blog</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Latest Insights & Stories</h3>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              Sharing my thoughts on technology, design, and the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {POSTS.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 border border-white/5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md">
                    {post.category}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-3 h-3" /> {post.author}
                  </span>
                </div>

                <h4 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors leading-tight">
                  {post.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <button className="flex items-center text-gold text-sm font-bold group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </motion.article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="px-10 py-4 border border-white/10 hover:border-gold/50 rounded-full font-bold transition-all">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
