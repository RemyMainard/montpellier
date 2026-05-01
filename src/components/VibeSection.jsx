import { motion } from 'framer-motion'
import vibe from '../data/vibe.json'

function ProfileCard({ profile }) {
  return (
    <div
      className="flex flex-col items-center text-center"
      style={{ width: '150px', flexShrink: 0 }}
      aria-label={`Profil : ${profile.name}`}
    >
      <div
        className="text-4xl mb-3"
        role="img"
        aria-label={profile.name}
      >
        {profile.emoji}
      </div>
      <p
        className="font-heading text-sm font-bold mb-1"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {profile.name}
      </p>
      <p
        className="font-body text-xs"
        style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}
      >
        {profile.descriptor}
      </p>
    </div>
  )
}

function StatItem({ stat }) {
  return (
    <div className="flex flex-col">
      <span
        className="font-heading text-3xl font-bold"
        style={{ color: 'var(--color-accent)' }}
      >
        {stat.value}
        <span className="text-lg ml-1">{stat.unit}</span>
      </span>
      <span
        className="font-body text-sm mt-1"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        {stat.label}
      </span>
    </div>
  )
}

export default function VibeSection() {
  return (
    <section
      id="vibe"
      aria-label="Vibe locale — ambiance et profils de Montpellier"
      className="py-24 px-6"
      style={{ background: 'var(--color-background)' }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative pl-8"
          style={{
            borderLeft: '4px solid var(--color-secondary)',
          }}
        >
          {/* Background semi-transparent */}
          <div
            className="absolute inset-0 -ml-8"
            style={{
              background: 'rgba(26,31,46,0.8)',
              backdropFilter: 'blur(4px)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 py-10 pr-10">
            {/* Headline */}
            <h2
              className="font-heading text-3xl font-bold mb-4"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {vibe.headline}
            </h2>

            {/* Description */}
            <p
              className="font-body text-base mb-10 max-w-2xl"
              style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}
            >
              {vibe.description}
            </p>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-10 mb-14"
              role="list"
              aria-label="Chiffres clés de Montpellier"
            >
              {vibe.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  role="listitem"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
                >
                  <StatItem stat={stat} />
                </motion.div>
              ))}
            </div>

            {/* Profils */}
            <div>
              <p
                className="font-body text-xs uppercase tracking-widest mb-6"
                style={{ color: 'var(--color-accent)' }}
              >
                Qui vit ici ?
              </p>
              <div
                className="flex flex-wrap gap-10"
                role="list"
                aria-label="Profils de résidents de Montpellier"
              >
                {vibe.profiles.map((profile, i) => (
                  <motion.div
                    key={profile.id}
                    role="listitem"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2, ease: 'easeOut' }}
                  >
                    <ProfileCard profile={profile} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
