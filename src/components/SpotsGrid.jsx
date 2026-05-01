import { motion } from 'framer-motion'
import spots from '../data/spots.json'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.3, ease: 'easeOut' },
  }),
}

function SpotCard({ spot, index }) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="relative overflow-hidden cursor-pointer group"
      style={{ height: '280px' }}
      aria-label={`Spot incontournable : ${spot.title}`}
    >
      {/* Image */}
      <img
        src={spot.image}
        alt={spot.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transition: 'transform 0.5s ease-out' }}
        loading="lazy"
      />

      {/* Overlay — visible au hover */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-6"
        style={{
          background: 'rgba(15,20,25,0)',
          transition: 'background 0.3s ease-out',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(15,20,25,0.7)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(15,20,25,0)'
        }}
      >
        <motion.div
          initial={{ y: 8, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          className="group-hover:opacity-100 opacity-0"
          style={{ transition: 'all 0.3s ease-out' }}
        >
          <h3
            className="font-heading text-xl font-bold mb-2"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {spot.title}
          </h3>
          <p
            className="font-body text-sm"
            style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}
          >
            {spot.description}
          </p>
        </motion.div>
      </div>

      {/* Titre toujours visible en bas (état idle) */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0"
        style={{
          background: 'linear-gradient(to top, rgba(15,20,25,0.8), transparent)',
          transition: 'opacity 0.3s ease-out',
        }}
      >
        <h3
          className="font-heading text-lg font-bold"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {spot.title}
        </h3>
      </div>
    </motion.article>
  )
}

export default function SpotsGrid() {
  return (
    <section
      id="spots"
      aria-label="Spots incontournables de Montpellier"
      className="py-24 px-6"
      style={{ background: 'var(--color-background)' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-heading text-4xl font-bold mb-4"
          style={{ color: 'var(--color-text-primary)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Les incontournables
        </motion.h2>

        <motion.p
          className="font-body text-base mb-12"
          style={{ color: 'var(--color-text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          Six lieux qui racontent Montpellier.
        </motion.p>

        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          }}
        >
          {spots.map((spot, index) => (
            <SpotCard key={spot.id} spot={spot} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
