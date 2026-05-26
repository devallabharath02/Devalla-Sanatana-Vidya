import { COURSES, MEMBERSHIP_PLANS } from '../../lib/data';

export default function LearnPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 max-w-xl">
          <span className="tag tag-saffron mb-3 inline-block">LEARNING PATHS</span>
          <h1 className="section-title">Structured Spiritual Learning</h1>
          <p className="section-subtitle">
            From foundations to advanced study — guided programs designed for the modern seeker.
          </p>
        </div>

        {/* Courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {COURSES.map((course) => (
            <div key={course.id} className="card flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="tag tag-saffron">{course.level}</span>
                {course.tag && <span className="tag tag-maroon">{course.tag}</span>}
              </div>
              <h3 className="font-display text-[22px] font-medium mb-2.5">{course.title}</h3>
              <p className="text-[13px] text-temple-500 leading-relaxed flex-1 mb-4">{course.desc}</p>
              <div className="flex justify-between items-center pt-4 border-t border-temple-200 dark:border-temple-700">
                <div className="text-xs text-temple-400">{course.duration} · {course.lessons} lessons</div>
                <span className="font-display text-[22px] font-semibold text-saffron">
                  {course.price === 'Free' ? <span className="text-gold">{course.price}</span> : course.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Membership */}
        <h2 className="section-title !text-[28px] mb-6">Membership Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div key={plan.name} className={`card relative ${plan.highlight ? '!border-2 !border-saffron' : ''}`}>
              {plan.highlight && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-saffron text-white px-3.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase">
                  Recommended
                </span>
              )}
              <h4 className="font-display text-xl font-medium mb-1">{plan.name}</h4>
              <div className="text-[28px] font-display font-semibold text-saffron mb-4">{plan.price}</div>
              <div className="flex flex-col gap-2 mb-5">
                {plan.features.map((f, j) => (
                  <div key={j} className="text-[13px] text-temple-500 flex items-center gap-2">
                    <span className="text-gold text-sm">✓</span> {f}
                  </div>
                ))}
              </div>
              <button className={`btn w-full justify-center ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}>
                {plan.price === '₹0' ? 'Get Started' : 'Subscribe'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
