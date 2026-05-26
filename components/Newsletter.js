'use client';

import { useState } from 'react';
import { MailIcon } from './Icons';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-16 px-6 bg-cream-dark dark:bg-temple-900 border-y border-temple-200 dark:border-temple-800">
      <div className="max-w-[560px] mx-auto text-center">
        <div className="text-saffron mb-4">
          <MailIcon />
        </div>
        <h2 className="font-display text-[28px] font-normal mb-2 text-temple-900 dark:text-temple-200">
          Receive Weekly Wisdom
        </h2>
        <p className="text-sm text-temple-500 leading-relaxed mb-6">
          A curated selection of slokas, reflections, and spiritual insights delivered to your inbox every Sunday.
        </p>
        {submitted ? (
          <div className="p-5 bg-white dark:bg-temple-800 rounded-lg border border-gold">
            <span className="text-gold font-medium">✓ Namaste! You have been subscribed. Expect your first wisdom letter soon.</span>
          </div>
        ) : (
          <div className="flex gap-2 max-w-[420px] mx-auto">
            <input className="input-field flex-1" placeholder="Your email address"
              value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className="btn btn-primary" onClick={() => { if (email) setSubmitted(true); }}>
              Subscribe
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
