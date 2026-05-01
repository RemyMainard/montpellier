import { motion } from 'framer-motion'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1920&q=90'

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Section hero — Bienvenue à Montpellier"
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(15,20,25,0.5)' }}
        aria-hidden="true"
      />

      {/* Content — bottom third */}
      <div className="absolute inset-0 flex flex-col justify-end items-center pb-24 px-6 text-center">
        <motion.h1
          className="font-heading text-text-primary mb-4"
          style={{ fontSize: 'clamp(48px, 7vw, 72px)', lineHeight: 1.2 }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Montpellier,<br />
          <span style={{ color: 'var(--color-secondary)' }}>la Méditerranée à portée de vie</span>
        </motion.h1>

        <motion.p
          className="font-body text-lg max-w-xl"
          style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
        >
          Soleil, culture, étudiants, plages — une ville qui vit vite et bien.
        </motion.p>

        <motion.a
          href="#spots"
          aria-label="Explorer les spots incontournables de Montpellier"
          className="mt-10 font-body font-semibold text-base uppercase tracking-widest"
          style={{
            color: 'var(--color-accent)',
            transition: 'var(--transition-default)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-secondary)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
        >
          Découvrir ↓
        </motion.a>
      </div>
    </section>
  )
}
