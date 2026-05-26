'use client';

import { useState } from 'react';
import { PlayIcon, ChevDownIcon } from '../../components/Icons';
import { MANTRAS } from '../../lib/data';

export default function MantrasPage() {
  const [filter, setFilter] = useState('All');
  const [expanded, setExpanded] = useState(null);
  const [bookmarked, setBookmarked] = useState(new Set());

  const categories = ['All', 'Vedic', 'Shiva', 'Vaishnava', 'Devi'];
  const filtered = filter === 'All' ? MANTRAS : MANTRAS.filter(m => m.category === filter);

  const toggleBookmark = (id, e) => {
    e.stopPropagation();
    setBookmarked(prev => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-4">
          <h1 className="section-title">Sloka &amp; Mantra Library</h1>
          <p className="section-subtitle">
            Ancient sound formulas for meditation, healing, and spiritual awakening — with Sanskrit text, pronunciation, and meaning.
          </p>
        </div>

        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              className={`btn ${filter === c ? 'btn-primary' : 'btn-ghost'} !py-2 !px-5 !text-[13px]`}>
              {c}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          {filtered.map((mantra) => (
            <div key={mantra.id} className="card !p-7" onClick={() => setExpanded(expanded === mantra.id ? null : mantra.id)}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="tag tag-maroon mb-2 inline-block">{mantra.category}</span>
                  <h3 className="font-display text-[22px] font-medium">{mantra.name}</h3>
                  <span className="text-xs text-temple-400">Deity: {mantra.deity}</span>
                </div>
                <button onClick={(e) => toggleBookmark(mantra.id, e)}
                  className={`bg-transparent border-none cursor-pointer text-lg p-1 ${bookmarked.has(mantra.id) ? 'text-saffron' : 'text-temple-400'}`}>
                  {bookmarked.has(mantra.id) ? '★' : '☆'}
                </button>
              </div>
              <div className="font-sanskrit text-lg leading-relaxed p-4 bg-cream-dark dark:bg-temple-900 rounded-lg border-l-[3px] border-saffron mb-3">
                {mantra.sanskrit}
              </div>
              <p className="text-sm text-temple-400 italic mb-3">{mantra.transliteration}</p>

              {expanded === mantra.id && (
                <div className="animate-slide-down">
                  <div className="bg-cream-dark dark:bg-temple-900 rounded-lg p-5 mb-4">
                    <h4 className="text-[13px] text-saffron font-semibold tracking-wide mb-2 uppercase">Meaning</h4>
                    <p className="text-sm text-temple-500 leading-relaxed">{mantra.meaning}</p>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <div className="flex-1 min-w-[200px] bg-cream-dark dark:bg-temple-900 rounded-lg p-4">
                      <h4 className="text-xs text-gold font-semibold tracking-wide mb-1.5 uppercase">Benefits</h4>
                      <p className="text-[13px] text-temple-500 leading-snug">{mantra.benefits}</p>
                    </div>
                    <button className="btn btn-outline !py-2 !px-4 !text-xs"><PlayIcon /> Audio</button>
                  </div>
                </div>
              )}
              {expanded !== mantra.id && (
                <span className="text-[13px] text-saffron flex items-center gap-1 mt-2">
                  View full meaning &amp; benefits <ChevDownIcon />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
