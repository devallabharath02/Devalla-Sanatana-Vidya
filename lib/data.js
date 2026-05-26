// ─── KNOWLEDGE CATEGORIES ───
export const KNOWLEDGE_CATEGORIES = [
  { id: "gita", name: "Bhagavad Gita", icon: "📖", count: 42, desc: "The divine song of 700 verses revealing the essence of dharma, yoga, and self-realization through Krishna's teachings to Arjuna." },
  { id: "upanishads", name: "Upanishads", icon: "🕉️", count: 38, desc: "The philosophical heart of the Vedas — exploring Brahman, Atman, and the ultimate nature of reality." },
  { id: "ramayana", name: "Ramayana", icon: "🏹", count: 24, desc: "The epic journey of Lord Rama — embodying dharma, devotion, duty, and the triumph of righteousness." },
  { id: "mahabharata", name: "Mahabharata", icon: "⚔️", count: 36, desc: "The great epic of Bharata — exploring duty, morality, and the cosmic battle between dharma and adharma." },
  { id: "vedas", name: "Vedas", icon: "📜", count: 28, desc: "The oldest sacred texts of humanity — Rig, Yajur, Sama, and Atharva — the foundation of all Vedic knowledge." },
  { id: "puranas", name: "Puranas", icon: "🌀", count: 18, desc: "Ancient narratives of creation, cosmic cycles, genealogies of gods, and the stories that shape Hindu cosmology." },
  { id: "vedanta", name: "Advaita Vedanta", icon: "🔱", count: 22, desc: "The philosophy of non-duality — Adi Shankaracharya's profound teaching that Brahman alone is real." },
  { id: "bhakti", name: "Bhakti", icon: "💛", count: 20, desc: "The path of devotion — surrendering to the Divine through love, prayer, chanting, and selfless worship." },
  { id: "yoga", name: "Yoga", icon: "🧘", count: 32, desc: "The science of union — integrating body, mind, and spirit through asana, pranayama, and meditation." },
  { id: "tantra", name: "Tantra", icon: "🔥", count: 14, desc: "Sacred practices for spiritual transformation — harnessing energy, mantra, and ritual for liberation." },
  { id: "dharma", name: "Dharma", icon: "⚖️", count: 16, desc: "The cosmic law sustaining order — exploring righteous living, duty, ethics, and universal harmony." },
  { id: "karma", name: "Karma", icon: "♻️", count: 12, desc: "The law of cause and effect — understanding action, consequence, and the path to liberation from cycles." },
  { id: "meditation", name: "Meditation", icon: "🧿", count: 26, desc: "Techniques for inner stillness — from dhyana to samadhi, exploring consciousness beyond the mind." },
  { id: "chakras", name: "Chakras", icon: "🌈", count: 14, desc: "The seven energy centers — understanding the subtle body, kundalini, and spiritual awakening." },
  { id: "mantras", name: "Mantras", icon: "📿", count: 30, desc: "Sacred sound formulas — the vibrational keys to invoke divine energies and transform consciousness." },
  { id: "festivals", name: "Hindu Festivals", icon: "🪔", count: 18, desc: "Sacred celebrations marking cosmic events — Diwali, Navaratri, Maha Shivaratri, and their deeper significance." },
];

// ─── MANTRAS ───
export const MANTRAS = [
  { id: 1, name: "Gayatri Mantra", sanskrit: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्", transliteration: "Om Bhur Bhuvaḥ Svaḥ Tat Savitur Vareṇyaṃ Bhargo Devasya Dhīmahi Dhiyo Yo Naḥ Prachodayāt", meaning: "We meditate on the glory of the Creator who has created the Universe, who is worthy of worship, who is the embodiment of knowledge and light, who is the remover of all sin and ignorance. May He enlighten our intellect.", category: "Vedic", benefits: "Spiritual awakening, mental clarity, divine protection", deity: "Savitri / Universal" },
  { id: 2, name: "Maha Mrityunjaya Mantra", sanskrit: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्", transliteration: "Om Tryambakam Yajāmahe Sugandhim Puṣṭi-Vardhanam Urvārukam Iva Bandhanān Mṛtyor Mukṣīya Māmṛtāt", meaning: "We worship the three-eyed Lord Shiva who nourishes all beings and is fragrant. May He liberate us from death for the sake of immortality, even as the cucumber is severed from its bondage to the creeper.", category: "Shiva", benefits: "Healing, longevity, overcoming fear of death", deity: "Lord Shiva" },
  { id: 3, name: "Om Namah Shivaya", sanskrit: "ॐ नमः शिवाय", transliteration: "Om Namaḥ Śivāya", meaning: "I bow to Lord Shiva — the auspicious one, the supreme consciousness, the inner Self of all beings.", category: "Shiva", benefits: "Inner peace, self-realization, destruction of ego", deity: "Lord Shiva" },
  { id: 4, name: "Hare Krishna Maha Mantra", sanskrit: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे हरे राम हरे राम राम राम हरे हरे", transliteration: "Hare Kṛṣṇa Hare Kṛṣṇa Kṛṣṇa Kṛṣṇa Hare Hare Hare Rāma Hare Rāma Rāma Rāma Hare Hare", meaning: "O Supreme Lord, O energy of the Lord — please engage me in Your devotional service.", category: "Vaishnava", benefits: "Divine love, spiritual ecstasy, liberation", deity: "Lord Krishna / Lord Rama" },
  { id: 5, name: "Shanti Mantra", sanskrit: "ॐ सह नाववतु सह नौ भुनक्तु सह वीर्यं करवावहै तेजस्वि नावधीतमस्तु मा विद्विषावहै ॐ शान्तिः शान्तिः शान्तिः", transliteration: "Om Saha Nāv-Avatu Saha Nau Bhunaktu Saha Vīryam Karavāvahai Tejasvi Nāv-Adhītam-Astu Mā Vidviṣāvahai Om Śāntiḥ Śāntiḥ Śāntiḥ", meaning: "May the Lord protect us both. May He nourish us both. May we work together with great energy. May our study be enlightening. May we never hate each other. Om Peace, Peace, Peace.", category: "Vedic", benefits: "Harmony, peace, auspicious beginnings", deity: "Universal" },
  { id: 6, name: "Durga Mantra", sanskrit: "ॐ दुं दुर्गायै नमः", transliteration: "Om Dum Durgāyai Namaḥ", meaning: "Salutations to the Goddess Durga — the invincible one who removes all obstacles and protects devotees.", category: "Devi", benefits: "Protection, courage, removal of obstacles", deity: "Goddess Durga" },
];

// ─── BLOG POSTS ───
export const BLOG_POSTS = [
  { id: 1, title: "The Art of Surrender: Understanding Ishvara Pranidhana", excerpt: "True surrender is not weakness — it is the highest act of strength. When we release our attachment to outcomes and place our trust in the cosmic order, we discover a freedom that the mind alone can never manufacture.", date: "May 20, 2026", readTime: "8 min", category: "Philosophy", featured: true },
  { id: 2, title: "Why Dharma Cannot Be Reduced to Religion", excerpt: "Dharma encompasses the entire cosmic order — from the orbit of planets to the moral duties of an individual. Reducing it to 'religion' misses the vast, all-encompassing nature of this profound concept.", date: "May 14, 2026", readTime: "12 min", category: "Dharma", featured: true },
  { id: 3, title: "Morning Sadhana: Building a Sacred Daily Practice", excerpt: "The hours before dawn — Brahma Muhurta — hold a unique spiritual potency. Here is a practical guide to establishing a morning practice that transforms your entire day.", date: "May 8, 2026", readTime: "10 min", category: "Practice", featured: false },
  { id: 4, title: "Meditation on the Mahavakyas: 'Tat Tvam Asi'", excerpt: "The great declaration 'That Thou Art' is not merely a philosophical statement — it is a direct pointer to the ultimate reality of your own being.", date: "Apr 30, 2026", readTime: "15 min", category: "Vedanta", featured: false },
  { id: 5, title: "The Deeper Meaning of Navaratri", excerpt: "Nine nights of the Goddess represent nine stages of inner transformation. Each night corresponds to a specific form of Shakti and a specific spiritual quality being awakened within the seeker.", date: "Apr 22, 2026", readTime: "9 min", category: "Festivals", featured: false },
  { id: 6, title: "Karma Yoga in the Age of Burnout", excerpt: "The Bhagavad Gita's teaching on selfless action offers a radical antidote to modern burnout. When we shift from doing for results to doing as an offering, work itself becomes a spiritual practice.", date: "Apr 15, 2026", readTime: "11 min", category: "Modern Life", featured: false },
];

// ─── COURSES ───
export const COURSES = [
  { id: 1, title: "Foundations of Vedanta", level: "Beginner", duration: "8 weeks", lessons: 24, desc: "A comprehensive introduction to Advaita Vedanta — from the nature of Brahman to the path of self-inquiry.", price: "Free", tag: "Most Popular" },
  { id: 2, title: "Bhagavad Gita Deep Study", level: "Intermediate", duration: "12 weeks", lessons: 36, desc: "Verse-by-verse exploration of all 18 chapters with Sanskrit pronunciation, commentary, and practical application.", price: "$49", tag: "Flagship" },
  { id: 3, title: "Dhyana: The Art of Meditation", level: "All Levels", duration: "6 weeks", lessons: 18, desc: "From basic breath awareness to advanced Vedic meditation techniques — a structured path to inner stillness.", price: "$29", tag: "New" },
  { id: 4, title: "Sanskrit for Seekers", level: "Beginner", duration: "10 weeks", lessons: 30, desc: "Learn to read, chant, and understand sacred Sanskrit texts with proper pronunciation and grammar.", price: "$39", tag: "" },
];

// ─── DAILY QUOTE ───
export const DAILY_QUOTE = {
  sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय",
  transliteration: "Yoga-sthaḥ kuru karmāṇi saṅgaṃ tyaktvā dhanañjaya",
  meaning: "Established in yoga, perform actions, having abandoned attachment, O Dhananjaya.",
  source: "Bhagavad Gita 2.48",
};

// ─── MEMBERSHIP PLANS ───
export const MEMBERSHIP_PLANS = [
  { name: "Free", price: "₹0", features: ["Access to knowledge library", "Daily mantra", "Blog access", "Community forums"] },
  { name: "Seeker", price: "₹499/mo", features: ["All Free features", "Guided meditation courses", "Audio pronunciation", "Progress tracking", "Study guides"], highlight: true },
  { name: "Advanced Sadhaka", price: "₹999/mo", features: ["All Seeker features", "Live webinars", "Sanskrit training", "Mentorship sessions", "Certificate programs"] },
  { name: "Inner Circle", price: "₹2499/mo", features: ["All Advanced features", "1-on-1 guidance", "Retreat access", "Exclusive satsangs", "Personal learning path"] },
];

// ─── COMMUNITY FEATURES ───
export const COMMUNITY_FEATURES = [
  { icon: "💬", title: "Discussion Forums", desc: "Engage in thoughtful discussions on scriptures, philosophy, and spiritual practice with seekers worldwide.", status: "Active" },
  { icon: "🙏", title: "Ask a Guru", desc: "Submit your spiritual questions and receive guidance from experienced teachers and scholars.", status: "Coming Soon" },
  { icon: "📝", title: "Spiritual Journaling", desc: "Private journaling space for tracking your spiritual progress, reflections, and insights.", status: "Coming Soon" },
  { icon: "🧘", title: "Meditation Tracking", desc: "Log your daily meditation practice, track streaks, and set personal goals.", status: "Coming Soon" },
  { icon: "📅", title: "Event Calendar", desc: "Stay updated on virtual satsangs, chanting sessions, full moon meditations, and spiritual retreats.", status: "Active" },
  { icon: "🌍", title: "Global Satsang Groups", desc: "Find or create local satsang groups in your city — connect with fellow seekers near you.", status: "Coming Soon" },
];
