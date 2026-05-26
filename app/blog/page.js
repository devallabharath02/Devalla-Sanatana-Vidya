'use client';

import { useState } from 'react';
import { ClockIcon } from '../../components/Icons';
import Mandala from '../../components/Mandala';
import { BLOG_POSTS } from '../../lib/data';

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const featured = BLOG_POSTS.filter(p => p.featured);

  if (selectedPost) {
    return (
      <section className="py-16 px-6">
        <div className="max-w-[800px] mx-auto">
          <button onClick={() => setSelectedPost(null)} className="btn btn-ghost mb-6">← Back to Blog</button>
          <span className="tag tag-gold mb-3 inline-block">{selectedPost.category}</span>
          <h1 className="font-display font-normal leading-tight mb-4" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
            {selectedPost.title}
          </h1>
          <div className="flex gap-4 text-[13px] text-temple-400 mb-10 pb-6 border-b border-temple-200 dark:border-temple-800">
            <span>{selectedPost.date}</span>
            <span className="flex items-center gap-1"><ClockIcon /> {selectedPost.readTime}</span>
          </div>
          <div className="text-base leading-[1.9] text-temple-500 space-y-6">
            <p>{selectedPost.excerpt}</p>
            <p>
              The ancient rishis understood that spiritual knowledge is not merely intellectual — it must be lived, embodied, and experienced in the depths of one&apos;s being. Each teaching of the scriptures is a seed that, when planted in the fertile soil of sincere practice, blossoms into direct realization.
            </p>
            <div className="bg-cream-dark dark:bg-temple-900 border-l-[3px] border-saffron py-5 px-6 rounded-r-lg italic">
              &ldquo;The Self cannot be known through study of the scriptures, nor through the intellect, nor through hearing discourses about it. It is attained by the one whom the Self chooses.&rdquo;<br />
              <span className="text-[13px] text-gold not-italic font-medium">— Katha Upanishad</span>
            </div>
            <p>
              In today&apos;s world, where distraction is the norm and depth is rare, the call to authentic spiritual practice becomes ever more essential. Not as an escape from life, but as a deeper engagement with its very essence.
            </p>
            <p>
              This is the promise of Sanatana Dharma — not a rigid set of beliefs, but a living, breathing tradition of inquiry, practice, and transformation that has sustained seekers for millennia and continues to illuminate the path for all who dare to look within.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <h1 className="section-title">Founder&apos;s Blog</h1>
          <p className="section-subtitle">
            Spiritual reflections, dharma in modern life, and contemplations on consciousness and self-realization.
          </p>
        </div>

        {/* Featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {featured.map((post) => (
            <div key={post.id} className="card !p-0 overflow-hidden" onClick={() => setSelectedPost(post)}>
              <div className="h-40 bg-gradient-to-br from-cream-dark to-cream dark:from-temple-900 dark:to-temple-950 flex items-center justify-center relative overflow-hidden">
                <div className="absolute text-saffron"><Mandala size={200} opacity={0.08} /></div>
                <span className="tag tag-saffron absolute top-4 left-4">Featured</span>
              </div>
              <div className="p-6">
                <span className="tag tag-gold mb-2.5 inline-block">{post.category}</span>
                <h3 className="font-display text-[22px] font-medium mb-2.5 leading-tight">{post.title}</h3>
                <p className="text-sm text-temple-500 leading-relaxed mb-3.5">{post.excerpt}</p>
                <div className="flex justify-between text-xs text-temple-400">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1"><ClockIcon /> {post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All posts */}
        <div className="flex flex-col gap-4">
          {BLOG_POSTS.filter(p => !p.featured).map((post) => (
            <div key={post.id} className="card flex gap-6 !p-6 items-center" onClick={() => setSelectedPost(post)}>
              <div className="w-[60px] h-[60px] rounded-lg bg-gradient-to-br from-cream-dark to-cream dark:from-temple-900 dark:to-temple-950 flex items-center justify-center shrink-0">
                <span className="text-saffron text-xl">✦</span>
              </div>
              <div className="flex-1">
                <div className="flex gap-2 items-center mb-1.5">
                  <span className="tag tag-gold">{post.category}</span>
                  <span className="text-xs text-temple-400">{post.date}</span>
                </div>
                <h3 className="font-display text-[19px] font-medium mb-1.5">{post.title}</h3>
                <p className="text-[13px] text-temple-500 leading-snug hidden md:block">{post.excerpt}</p>
              </div>
              <div className="hidden md:flex items-center gap-1 text-xs text-temple-400 shrink-0">
                <ClockIcon /> {post.readTime}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
