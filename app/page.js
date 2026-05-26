'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Mandala from '../components/Mandala';
import Newsletter from '../components/Newsletter';
import { ArrowIcon, ClockIcon } from '../components/Icons';
import { KNOWLEDGE_CATEGORIES, MANTRAS, BLOG_POSTS, DAILY_QUOTE } from '../lib/data';

export default function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { setTimeout(() => setHeroVisible(true), 100); }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden py-20 md:py-24 px-6 min-h-[540px] flex items-center bg-gradient-to-br from-cream via-cream-dark to-temple-200 dark:from-temple-950 dark:via-temple-900 dark:to-temple-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-saffron animate-spin-slow">
          <Mandala size={600} opacity={0.04} />
        </div>
        <div className="absolute top-10 right-[10%] text-gold animate-float hidden md:block">
          <Mandala size={120} opacity={0.06} />
        </div>
        <div className="absolute bottom-10 left-[5%] text-maroon animate-float-slow hidden md:block">
          <Mandala size={80} opacity={0.05} />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10 w-full">
          <div className={`max-w-[700px] transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="tag tag-saffron text-[10px] mb-5 inline-block">A LIVING LIBRARY OF SANATANA DHARMA</span>
            <h1 className="font-display font-light leading-[1.15] mb-5 text-temple-900 dark:text-temple-200" style={{ fontSize: 'clamp(36px, 5.5vw, 62px)' }}>
              Ancient Wisdom<br />
              <span className="font-medium italic text-saffron">for the Modern Seeker</span>
            </h1>
            <p className="text-temple-500 leading-relaxed mb-9 max-w-[520px]" style={{ fontSize: 'clamp(15px, 2vw, 18px)' }}>
              A sacred repository of spiritual knowledge, meditation, philosophy, yoga, and self-discovery — rooted in the eternal traditions of Sanatana Dharma.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/knowledge" className="btn btn-primary no-underline">Begin Your Journey <ArrowIcon /></Link>
              <Link href="/mantras" className="btn btn-outline no-underline">Explore Mantras</Link>
              <Link href="/blog" className="btn btn-ghost no-underline">Read the Blog</Link>
            </div>
          </div>

          {/* Daily Quote Card */}
          <div className={`hidden lg:block absolute right-0 bottom-[-20px] bg-white dark:bg-temple-800 border border-temple-200 dark:border-temple-700 rounded-xl p-6 max-w-[320px] shadow-lg transition-all duration-1000 delay-400 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="text-[11px] text-saffron font-semibold tracking-wider mb-3 uppercase">✦ Today&apos;s Wisdom</div>
            <p className="font-sanskrit text-base leading-relaxed mb-2">{DAILY_QUOTE.sanskrit}</p>
            <p className="text-[13px] text-temple-400 italic mb-2">{DAILY_QUOTE.transliteration}</p>
            <p className="text-sm text-temple-500 leading-snug mb-2.5">&ldquo;{DAILY_QUOTE.meaning}&rdquo;</p>
            <span className="text-xs text-gold font-medium">— {DAILY_QUOTE.source}</span>
          </div>
        </div>
      </section>

      {/* ─── KNOWLEDGE PREVIEW ─── */}
      <section className="py-20 px-6 bg-cream-dark dark:bg-temple-900">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="tag tag-gold mb-3 inline-block">EXPLORE</span>
            <h2 className="section-title mx-auto">Spiritual Knowledge Repository</h2>
            <p className="section-subtitle mx-auto">
              A structured library of Hindu wisdom — from scriptures and philosophy to practical spiritual living.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {KNOWLEDGE_CATEGORIES.slice(0, 8).map((cat) => (
              <Link key={cat.id} href={`/knowledge#${cat.id}`} className="card flex flex-col gap-3 no-underline text-inherit">
                <div className="flex justify-between items-start">
                  <span className="text-[28px]">{cat.icon}</span>
                  <span className="text-[11px] text-temple-400 font-medium">{cat.count} articles</span>
                </div>
                <h3 className="font-display text-xl font-medium">{cat.name}</h3>
                <p className="text-[13px] text-temple-500 leading-relaxed flex-1">{cat.desc}</p>
                <span className="text-[13px] text-saffron font-medium flex items-center gap-1.5">Explore <ArrowIcon /></span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/knowledge" className="btn btn-outline no-underline">View All {KNOWLEDGE_CATEGORIES.length} Topics <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* ─── MANTRAS PREVIEW ─── */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <span className="tag tag-maroon mb-3 inline-block">SACRED SOUNDS</span>
            <h2 className="section-title mx-auto">Sacred Mantras</h2>
            <p className="section-subtitle mx-auto">
              Ancient sound formulas for meditation, healing, and spiritual awakening — with Sanskrit text, pronunciation, and meaning.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {MANTRAS.slice(0, 3).map((mantra) => (
              <div key={mantra.id} className="card p-7">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="tag tag-maroon mb-2 inline-block">{mantra.category}</span>
                    <h3 className="font-display text-[22px] font-medium">{mantra.name}</h3>
                    <span className="text-xs text-temple-400">Deity: {mantra.deity}</span>
                  </div>
                </div>
                <div className="font-sanskrit text-lg leading-relaxed p-4 bg-cream-dark dark:bg-temple-900 rounded-lg border-l-[3px] border-saffron mb-3">
                  {mantra.sanskrit}
                </div>
                <p className="text-sm text-temple-400 italic mb-3">{mantra.transliteration}</p>
                <div className="bg-cream-dark dark:bg-temple-900 rounded-lg p-5">
                  <h4 className="text-[13px] text-saffron font-semibold tracking-wide mb-2 uppercase">Meaning</h4>
                  <p className="text-sm text-temple-500 leading-relaxed">{mantra.meaning}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/mantras" className="btn btn-outline no-underline">Explore All Mantras <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* ─── BLOG PREVIEW ─── */}
      <section className="py-20 px-6 bg-cream-dark dark:bg-temple-900">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="tag tag-gold mb-3 inline-block">REFLECTIONS</span>
            <h2 className="section-title mx-auto">Founder&apos;s Blog</h2>
            <p className="section-subtitle mx-auto">
              Spiritual reflections, dharma in modern life, and contemplations on consciousness and self-realization.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {BLOG_POSTS.slice(0, 4).map((post) => (
              <Link key={post.id} href={`/blog#post-${post.id}`} className="card flex gap-6 p-6 items-center no-underline text-inherit">
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
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="btn btn-outline no-underline">Read All Posts <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-12 px-6 bg-gradient-to-br from-cream-dark to-cream dark:from-temple-900 dark:to-temple-950 border-y border-temple-200 dark:border-temple-800">
        <div className="max-w-[1200px] mx-auto flex justify-around flex-wrap gap-8">
          {[
            { num: '500+', label: 'Articles & Guides' },
            { num: '108', label: 'Sacred Mantras' },
            { num: '4', label: 'Learning Paths' },
            { num: '10K+', label: 'Seekers Worldwide' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-medium text-saffron mb-1">{s.num}</div>
              <div className="text-[13px] text-temple-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
