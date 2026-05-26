import { COMMUNITY_FEATURES } from '../../lib/data';

export default function CommunityPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <span className="tag tag-maroon mb-3 inline-block">SANGHA</span>
          <h1 className="section-title mx-auto">Community &amp; Satsang</h1>
          <p className="section-subtitle mx-auto">
            Connect with fellow seekers on the path of dharma — share, learn, and grow together.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COMMUNITY_FEATURES.map((item, i) => (
            <div key={i} className="card">
              <div className="flex justify-between items-start mb-3.5">
                <span className="text-[32px]">{item.icon}</span>
                <span className={`tag ${item.status === 'Active' ? 'tag-gold' : 'tag-saffron'}`}>{item.status}</span>
              </div>
              <h3 className="font-display text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-[13px] text-temple-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
