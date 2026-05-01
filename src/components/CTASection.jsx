import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section
      id="cta"
      aria-label="Section appel à l'action"
      className="py-32 px-6 flex flex-col items-center justify-center text-center"
      style={{ background: 'var(--color-background)' }}
    >
      <motion.h2
        className="font-heading text-3xl font-bold mb-4"
        style={{ color: 'var(--color-text-primary)' }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Prêt à découvrir Montpellier ?
      </motion.h2>

      <motion.p
        className="font-body text-base mb-12 max-w-md"
        style={{ color: 'var(--color-text-secondary)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
      >
        Soleil, culture, mer et garrigue — une ville qui vous attend.
      </motion.p>

      <motion.a
        href="#hero"
        aria-label="Explorer Montpellier depuis le début de la page"
        className="font-body font-bold text-base uppercase tracking-widest px-8 py-4 inline-block"
        style={{
          border: '2px solid var(--color-secondary)',
          color: 'var(--color-secondary)',
          background: 'transparent',
          transition: 'var(--transition-default)',
          borderRadius: 0,
        }}
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        whileHover={{ scale: 1.02, backgroundColor: 'var(--color-surface)' }}
      >
        Explorer Montpellier
      </motion.a>
    </section>
  )
}
