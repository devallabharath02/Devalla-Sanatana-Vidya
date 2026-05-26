import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-temple-900 dark:bg-[#141010] text-temple-400 pt-16 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-saffron-light text-2xl">ॐ</span>
              <span className="font-display text-xl font-medium text-temple-200">
                Devalla <span className="text-saffron-light">Sanatana Vidya</span>
              </span>
            </div>
            <p className="text-[13px] leading-relaxed text-temple-500 max-w-[280px]">
              A living repository of spiritual knowledge rooted in the eternal traditions of Sanatana Dharma. Wisdom beyond time.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-saffron-light mb-4">Explore</h4>
            {['Knowledge Library', 'Mantra Collection', 'Blog & Reflections', 'Learning Paths', 'Community'].map(item => (
              <div key={item} className="text-sm mb-2.5 text-temple-500 hover:text-temple-200 cursor-pointer transition-colors">
                {item}
              </div>
            ))}
          </div>

          {/* Scriptures */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-saffron-light mb-4">Scriptures</h4>
            {['Bhagavad Gita', 'Upanishads', 'Vedas', 'Ramayana', 'Mahabharata', 'Puranas'].map(item => (
              <div key={item} className="text-sm mb-2.5 text-temple-500 hover:text-temple-200 cursor-pointer transition-colors">
                {item}
              </div>
            ))}
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-saffron-light mb-4">Connect</h4>
            {['YouTube', 'Podcast', 'Instagram', 'Twitter / X', 'Contact Us'].map(item => (
              <div key={item} className="text-sm mb-2.5 text-temple-500 hover:text-temple-200 cursor-pointer transition-colors">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-temple-800 pt-6 flex flex-wrap justify-between items-center gap-4">
          <span className="text-xs text-temple-600">© 2026 Devalla Sanatana Vidya. All rights reserved.</span>
          <div className="flex gap-5 text-xs text-temple-600">
            <span className="cursor-pointer hover:text-temple-400">Privacy</span>
            <span className="cursor-pointer hover:text-temple-400">Terms</span>
            <span className="cursor-pointer hover:text-temple-400">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
