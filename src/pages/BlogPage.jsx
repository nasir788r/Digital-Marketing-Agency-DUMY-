import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BLOG_POSTS } from '../data/agencyData';
import { FiArrowRight, FiArrowUpRight, FiX } from 'react-icons/fi';

export const BlogPage = ({ openAuditModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePost, setActivePost] = useState(null);

  const categories = ['All', 'Meta Ads', 'Google Ads', 'Digital Marketing'];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="space-y-14 pb-16 px-4 sm:px-8 max-w-7xl mx-auto pt-6 sm:pt-8"
    >
      {/* Blog Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="badge-teal">Growth Insights & Teardowns</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal serif text-[#102421]">
            Algorithmic Media & <span className="gold-text italic">CRO Playbooks</span>
          </h1>
          <p className="text-sm sm:text-base text-[#64706C]">
            Unfiltered frameworks, ad creative teardowns, and data strategies from managing $12M+ in paid ad spend.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs rounded border transition-all cursor-pointer font-medium ${
                selectedCategory === cat
                  ? 'bg-[#0E4640] text-white border-[#0E4640]'
                  : 'bg-white text-[#102421] border-[#0E4640]/15 hover:border-[#0E4640]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Main Post Teaser */}
      {BLOG_POSTS[0] && (
        <div 
          onClick={() => setActivePost(BLOG_POSTS[0])}
          className="bg-white rounded-xl border border-[#0E4640]/15 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 group"
        >
          <div className="lg:col-span-6 aspect-video lg:aspect-auto overflow-hidden bg-[#082F2B]">
            <img
              src={BLOG_POSTS[0].coverImage}
              alt={BLOG_POSTS[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="badge text-[9px] bg-[#E6B85C] text-[#082F2B] font-bold">
                  Featured Teardown
                </span>
                <span className="text-[11px] font-mono text-[#64706C]">
                  {BLOG_POSTS[0].date} • {BLOG_POSTS[0].readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold serif text-[#102421] group-hover:text-[#0E4640] transition-colors leading-snug">
                {BLOG_POSTS[0].title}
              </h2>

              <p className="text-xs sm:text-sm text-[#64706C] leading-relaxed">
                {BLOG_POSTS[0].excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#0E4640]/10">
              <div className="flex items-center gap-2.5">
                <img
                  src={BLOG_POSTS[0].author.avatar}
                  alt={BLOG_POSTS[0].author.name}
                  className="w-8 h-8 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-xs font-bold text-[#102421]">{BLOG_POSTS[0].author.name}</div>
                  <div className="text-[10px] text-[#64706C]">{BLOG_POSTS[0].author.role}</div>
                </div>
              </div>

              <span className="text-xs font-bold text-[#0E4640] flex items-center gap-1">
                <span>Read Playbook</span>
                <FiArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Other Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => setActivePost(post)}
            className="card rounded-xl overflow-hidden cursor-pointer group flex flex-col justify-between bg-white border border-[#0E4640]/15 hover:shadow-lg transition-all"
          >
            <div>
              <div className="aspect-video overflow-hidden bg-[#082F2B]">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-5 space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono text-[#64706C]">
                  <span className="text-[#0E4640] font-bold uppercase">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-base font-bold serif text-[#102421] group-hover:text-[#0E4640] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-[#64706C] line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="px-5 py-3 border-t border-[#0E4640]/10 flex items-center justify-between text-xs bg-[#F7F4EC]/40">
              <span className="text-[11px] text-[#64706C]">{post.date}</span>
              <span className="font-bold text-[#0E4640] flex items-center gap-1">
                <span>Read</span>
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Active Article Full View Modal */}
      <AnimatePresence>
        {activePost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-[#0E4640]/20 overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="bg-[#0E4640] p-5 sm:p-6 text-white flex items-center justify-between">
                <div>
                  <span className="badge text-[9px] mb-1">{activePost.category}</span>
                  <h3 className="text-xl md:text-2xl font-normal serif text-white">
                    {activePost.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActivePost(null)}
                  className="p-1.5 rounded-lg bg-[#082F2B] text-white hover:bg-black/40 transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-sm text-[#102421]">
                <div className="flex items-center gap-3 pb-4 border-b border-[#0E4640]/10 text-xs text-[#64706C]">
                  <span>Written by <strong>{activePost.author.name}</strong></span>
                  <span>•</span>
                  <span>{activePost.date}</span>
                  <span>•</span>
                  <span>{activePost.readTime}</span>
                </div>

                <div className="space-y-4 leading-relaxed text-xs sm:text-sm text-[#102421]/90">
                  {activePost.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Key Takeaways Box */}
                <div className="bg-[#F7F4EC] p-5 rounded-lg border border-[#0E4640]/15 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E4640]">
                    Core Strategic Takeaways:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#102421]">
                    {activePost.keyTakeaways.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#0E4640] font-bold font-mono">0{i + 1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-[#F7F4EC] border-t border-[#0E4640]/10 flex items-center justify-between">
                <button
                  onClick={() => setActivePost(null)}
                  className="btn-outline px-4 py-2 text-xs"
                >
                  Close Article
                </button>
                <button
                  onClick={() => {
                    setActivePost(null);
                    openAuditModal();
                  }}
                  className="btn-teal px-5 py-2 text-xs font-bold"
                >
                  Apply Framework to Your Ad Account
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
