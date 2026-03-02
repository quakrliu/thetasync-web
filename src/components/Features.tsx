'use client';

import { useI18n } from '@/i18n/context';
import { motion } from 'framer-motion';
import { Brain, Orbit, Download, Database, Hand, RotateCcw } from 'lucide-react';

const featureData = [
  { key: 'digging', icon: Brain, color: '#FFD700' },
  { key: 'meditation', icon: Orbit, color: '#4ECCA3' },
  { key: 'download', icon: Download, color: '#FFD700' },
  { key: 'beliefs', icon: Database, color: '#4ECCA3' },
  { key: 'muscle', icon: Hand, color: '#FFD700' },
  { key: 'ritual', icon: RotateCcw, color: '#4ECCA3' },
];

export default function Features() {
  const { t } = useI18n();

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-[#4ECCA3]/30 bg-[#4ECCA3]/10 text-[#4ECCA3] text-sm mb-6"
          >
            {t('features.badge')}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            {t('features.title')}{' '}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
              {t('features.titleHighlight')}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-white/50 max-w-2xl mx-auto"
          >
            {t('features.subtitle')}
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureData.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${feature.color}10 0%, transparent 70%)`,
                  }}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t(`features.${feature.key}.title` as any)}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {t(`features.${feature.key}.desc` as any)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
