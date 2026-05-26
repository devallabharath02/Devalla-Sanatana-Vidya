'use client';

import { useState } from 'react';
import { ArrowIcon, ClockIcon } from '../../components/Icons';
import { KNOWLEDGE_CATEGORIES } from '../../lib/data';

export default function KnowledgePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filtered = searchQuery
    ? KNOWLEDGE_CATEGORIES.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.desc.toLowerCase().includes(searchQuery.toLowerCase()))
    : KNOWLEDGE_CATEGORIES;

  if (selectedCategory) {
    const sampleArticles = [
      { title: `Introduction to ${selectedCategory.name}`, readTime: '8 min', level: 'Beginner' },
      { title: `Key Concepts in ${selectedCategory.name}`, readTime: '12 min', level: 'Beginner' },
      { title: `${selectedCategory.name}: Historical Context`, readTime: '15 min', level: 'Intermediate' },
      { title: `Advanced Study: ${selectedCategory.name}`, readTime: '20 min', level: 'Advanced' },
      { title: `${selectedCategory.name} in Daily Life`, readTime: '10 min', level: 'Beginner' },
      { title: `Sanskrit Terms in ${selectedCategory.name}`, readTime: '6 min', level: 'Intermediate' },
    ];

    return (
      <section className="py-16 px-6">
        <div className="max-w-[800px] mx-auto">
          <button onClick={() => setSelectedCategory(null)} className="btn btn-ghost mb-6">← Back to Topics</button>
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[40px]">{selectedCategory.icon}</span>
            <div>
              <h1 className="section-title !mb-1">{selectedCategory.name}</h1>
              <span className="text-temple-400 text-sm">{selectedCategory.count} articles</span>
            </div>
          </div>
          <p className="text-base text-temple-500 leading-relaxed mb-10">{selectedCategory.desc}</p>
          <div className="flex flex-col gap-3">
            {sampleArticles.map((art, i) => (
              <div key={i} className="card flex justify-between items-center !p-5">
                <div>
                  <h3 className="font-display text-lg font-medium mb-1">{art.title}</h3>
                  <div className="flex gap-3 text-xs text-temple-400">
                    <span className="flex items-center gap-1"><ClockIcon /> {art.readTime}</span>
                    <span className="tag tag-saffron">{art.level}</span>
                  </div>
                </div>
                <ArrowIcon />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-4">
          <h1 className="section-title">Spiritual Knowledge Repository</h1>
          <p className="section-subtitle">A structured library of Hindu wisdom — from scriptures and philosophy to practical spiritual living.</p>
        </div>
        <input className="input-field max-w-[400px] mb-8" placeholder="Search topics..."
          value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((cat) => (
            <div key={cat.id} className="card flex flex-col gap-3" onClick={() => setSelectedCategory(cat)}>
              <div className="flex justify-between items-start">
                <span className="text-[28px]">{cat.icon}</span>
                <span className="text-[11px] text-temple-400 font-medium">{cat.count} articles</span>
              </div>
              <h3 className="font-display text-xl font-medium">{cat.name}</h3>
              <p className="text-[13px] text-temple-500 leading-relaxed flex-1">{cat.desc}</p>
              <span className="text-[13px] text-saffron font-medium flex items-center gap-1.5">Explore <ArrowIcon /></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
