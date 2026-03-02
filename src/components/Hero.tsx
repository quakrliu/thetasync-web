'use client';

import { useI18n } from '@/i18n/context';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown } from 'lucide-react';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FFD700]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#4ECCA3]/5 blur-[100px]" />
      </div>

      {/* Stars / particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 text-[#FFD700] text-sm mb-8"
        >
          <Sparkles className="w-4 h-4" />
          {t('hero.badge')}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight"
        >
          {t('hero.title')}
          <br />
          <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
            {t('hero.titleHighlight')}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#cta"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#0B132B] font-semibold text-lg hover:shadow-xl hover:shadow-[#FFD700]/25 transition-all hover:scale-105"
          >
            {t('hero.cta')}
          </a>
          <a
            href="#features"
            className="px-8 py-3.5 rounded-full border border-white/20 text-white hover:border-[#FFD700]/50 hover:text-[#FFD700] transition-all"
          >
            {t('hero.ctaSecondary')}
          </a>
        </motion.div>

        {/* Coming soon */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-sm text-white/40"
        >
          {t('hero.comingSoon')}
        </motion.p>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto w-[280px] h-[560px] rounded-[3rem] border-2 border-white/10 bg-gradient-to-b from-[#1C2541] to-[#0B132B] shadow-2xl shadow-[#FFD700]/10 overflow-hidden">
            {/* Screen content mockup */}
            <div className="absolute inset-4 rounded-[2.2rem] overflow-hidden bg-[#0B132B]">
              {/* Status bar */}
              <div className="h-10 flex items-center justify-center">
                <div className="w-20 h-5 rounded-full bg-black" />
              </div>
              {/* App content mock */}
              <div className="p-4 space-y-4">
                <div className="text-center">
                  <div className="text-[#FFD700] text-xs font-medium">ThetaSync</div>
                  <div className="text-white text-sm font-semibold mt-1">Good Morning</div>
                  <div className="text-white/50 text-[10px] mt-0.5">Daily connection with Creator</div>
                </div>

                {/* Streak badge */}
                <div className="flex justify-center">
                  <div className="px-3 py-1 rounded-full bg-[#FFD700]/15 border border-[#FFD700]/30">
                    <span className="text-[#FFD700] text-[10px]">🔥 7 Day Streak</span>
                  </div>
                </div>

                {/* Affirmation card */}
                <div className="rounded-2xl bg-white/5 border border-white/10 p-3 backdrop-blur">
                  <div className="text-white/40 text-[9px] uppercase tracking-wider">Daily Download</div>
                  <div className="text-white text-[11px] mt-1.5 leading-relaxed">
                    I know what it feels like to live without fear.
                  </div>
                  <div className="mt-2 py-1.5 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-center">
                    <span className="text-[#0B132B] text-[10px] font-semibold">Accept & Download</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Streak', value: '7' },
                    { label: 'Beliefs', value: '23' },
                    { label: 'Planes', value: '7th' },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-white/5 border border-white/10 p-2 text-center">
                      <div className="text-[#FFD700] text-sm font-bold">{stat.value}</div>
                      <div className="text-white/40 text-[8px]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pulsing orb overlay */}
            <motion.div
              className="absolute bottom-20 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#FFD700]/20"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-white/30 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
