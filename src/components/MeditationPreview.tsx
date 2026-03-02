'use client';

import { useI18n } from '@/i18n/context';
import { motion } from 'framer-motion';

const planes = [
  { name: '1st', color: '#8B4513', label: 'Minerals' },
  { name: '2nd', color: '#228B22', label: 'Plants' },
  { name: '3rd', color: '#4169E1', label: 'Humans' },
  { name: '4th', color: '#9370DB', label: 'Spirit' },
  { name: '5th', color: '#FF69B4', label: 'Angels' },
  { name: '6th', color: '#FFD700', label: 'Laws' },
  { name: '7th', color: '#FFFFFF', label: 'Creator' },
];

export default function MeditationPreview() {
  const { t } = useI18n();

  const steps = [
    { key: 'meditation.step1', icon: '🌬️' },
    { key: 'meditation.step2', icon: '💛' },
    { key: 'meditation.step3', icon: '✨' },
    { key: 'meditation.step4', icon: '🕊️' },
  ];

  return (
    <section id="meditation" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#FFD700]/3 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 text-[#FFD700] text-sm mb-6"
            >
              {t('meditation.badge')}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            >
              {t('meditation.title')}{' '}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                {t('meditation.titleHighlight')}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg text-white/50 leading-relaxed"
            >
              {t('meditation.subtitle')}
            </motion.p>

            {/* Steps */}
            <div className="mt-8 space-y-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-white/30 text-xs font-mono">0{i + 1}</span>
                    <p className="text-white font-medium">{t(step.key as any)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Seven Planes visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[340px] h-[340px]">
              {/* Concentric rings for planes */}
              {planes.map((plane, i) => {
                const size = 340 - i * 40;
                return (
                  <motion.div
                    key={plane.name}
                    className="absolute rounded-full border flex items-center justify-center"
                    style={{
                      width: size,
                      height: size,
                      top: (340 - size) / 2,
                      left: (340 - size) / 2,
                      borderColor: `${plane.color}30`,
                      backgroundColor: `${plane.color}05`,
                    }}
                    animate={{
                      borderColor: [`${plane.color}20`, `${plane.color}40`, `${plane.color}20`],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    {/* Label on top-right */}
                    {i < 7 && (
                      <div
                        className="absolute text-[10px] font-mono whitespace-nowrap"
                        style={{
                          top: -8,
                          right: size * 0.15,
                          color: `${plane.color}80`,
                        }}
                      >
                        {plane.name} — {plane.label}
                      </div>
                    )}
                  </motion.div>
                );
              })}

              {/* Center orb */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/90"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255,255,255,0.3), 0 0 60px rgba(255,215,0,0.2)',
                    '0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(255,215,0,0.4)',
                    '0 0 20px rgba(255,255,255,0.3), 0 0 60px rgba(255,215,0,0.2)',
                  ],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Rising energy particle */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FFD700]"
                animate={{
                  bottom: ['0%', '50%'],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
