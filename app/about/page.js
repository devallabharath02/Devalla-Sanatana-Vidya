import Mandala from '../../components/Mandala';

export default function AboutPage() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-saffron opacity-30">
            <Mandala size={300} opacity={0.06} />
          </div>
          <span className="tag tag-saffron mb-4 inline-block relative">ABOUT THE FOUNDER</span>
          <h1 className="font-display font-light leading-tight mb-4 relative" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
            My Journey into <span className="font-medium italic text-saffron">Spirituality</span>
          </h1>
        </div>

        {/* Content */}
        <article className="text-[16.5px] leading-[1.95] text-temple-600 dark:text-temple-400 space-y-7">

          <p>
            For as long as I can remember, spirituality was never something imposed upon me — it was something that quietly called from within.
          </p>

          <p>
            Around the age of seven, I began waking up early in the mornings, gathering flowers on my own, and performing pooja — without anyone asking or guiding me. My parents were often surprised by this instinct toward devotion at such a young age. What started as a child&apos;s innocent draw toward the divine gradually became a lifelong journey of seeking.
          </p>

          <div className="bg-cream-dark dark:bg-temple-900 border-l-[3px] border-saffron py-5 px-6 rounded-r-lg my-10 italic text-temple-500">
            &ldquo;That which calls you from within, before the world has had a chance to shape your desires — that is the voice of the soul.&rdquo;
          </div>

          <p>
            Over the years, I have been blessed to visit many of India&apos;s most sacred spiritual centers — places whose energy, history, and silence leave a permanent mark on the heart. Among them are the sacred ghats of Haridwar, the divine presence of Jagannath Puri, the spiritual majesty of Tirumala, the timeless sanctity of Rameshwaram, the ancient temples of Madurai, and the mystical Shakti Peetha of Kamakhya in Assam, along with many others.
          </p>

          <p>
            Alongside these pilgrimages, I developed a deep and abiding interest in Indian spiritual thought, philosophy, yogic sciences, and sacred texts. The teachings and lives of great masters have been a constant source of inspiration on this path — realized beings such as:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-8">
            {[
              'Ramana Maharshi',
              'Paramahansa Yogananda',
              'Swami Sri Yukteswar',
              'Mahavatar Babaji',
              'Radhanath Swami',
              'Swami Vivekananda',
            ].map(name => (
              <div key={name} className="bg-cream-dark dark:bg-temple-900 rounded-lg px-4 py-3 text-center">
                <span className="text-sm font-medium text-temple-700 dark:text-temple-300">{name}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-b border-temple-200 dark:border-temple-800 py-8 my-10">
            <h2 className="font-display text-[26px] font-normal text-temple-900 dark:text-temple-200 mb-4">
              The Space Between Success and Seeking
            </h2>

            <p>
              Professionally, life has been generous. I built a career in Information Technology, eventually moving to the United States and growing into leadership roles. By most external measures — stability, recognition, financial comfort — I have been fortunate beyond expectation.
            </p>

            <p className="mt-6">
              And yet, somewhere within, I increasingly felt that worldly success alone could not fully answer the deeper questions of existence. Despite professional growth and achievement, there remained a quiet inner space that no title, milestone, or possession could fill — a subtle but persistent feeling that there must be something beyond the cycle of ambition, pressure, and external validation.
            </p>

            <p className="mt-6">
              The more I observed life, the more clearly I sensed that this universe is not merely mechanical or accidental. There exists a deeper intelligence, a consciousness that silently sustains and shapes the journey of every being.
            </p>

            <p className="mt-6">
              That realization gradually drew me back to the spiritual path — this time with greater sincerity, seriousness, and surrender.
            </p>
          </div>

          <p>
            Like many seekers, I continue to learn, question, reflect, and evolve. I do not consider myself a guru or a spiritual authority. I remain a student of Sanatana Dharma — someone deeply fascinated by the timeless wisdom left behind by the rishis, yogis, saints, and enlightened masters of this tradition.
          </p>

          <h2 className="font-display text-[26px] font-normal text-temple-900 dark:text-temple-200 mt-12 mb-4">
            The Purpose of Devalla Sanatana Vidya
          </h2>

          <p>
            This platform is born from that sincere seeking. It is envisioned as:
          </p>

          <div className="bg-cream-dark dark:bg-temple-900 rounded-xl p-6 my-6 space-y-3">
            {[
              'A living repository of Hindu spiritual wisdom',
              'A space for thoughtful reflection and contemplation',
              'A bridge between ancient knowledge and modern life',
              'A place where genuine seekers across the world can learn, contemplate, and grow spiritually',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-saffron mt-0.5">✦</span>
                <span className="text-[15px] text-temple-600 dark:text-temple-400">{item}</span>
              </div>
            ))}
          </div>

          <p>
            Through articles, reflections, scriptures, meditative teachings, and spiritual discussions, my humble intention is to contribute toward preserving and sharing the profound spiritual heritage of Bharat — with authenticity, simplicity, and reverence.
          </p>

          <p>
            In a world increasingly driven by distraction and materialism, I believe humanity is once again searching for stillness, meaning, consciousness, and inner truth. Perhaps many who have found outward success quietly carry the same inner longing — a sense that there is something more, something deeper, waiting to be discovered.
          </p>

          <div className="text-center mt-14 py-10 border-t border-temple-200 dark:border-temple-800">
            <p className="text-temple-500 italic mb-6 text-lg">
              This journey — and this platform — is my offering toward exploring that truth more deeply.
            </p>
            <p className="font-sanskrit text-2xl text-saffron font-medium mb-2">ॐ तत् सत्</p>
            <p className="text-sm text-temple-400 italic">Om Tat Sat</p>
          </div>

        </article>
      </div>
    </section>
  );
}
