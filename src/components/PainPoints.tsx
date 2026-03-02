'use client';

import { useI18n } from '@/i18n/context';
import { motion } from 'framer-motion';
import { UserX, CalendarOff, BookOpen, BarChart3, DollarSign, Languages, ArrowRight, CheckCircle } from 'lucide-react';

const painData = [
  { key: '1', icon: UserX, color: '#FF6B6B' },
  { key: '2', icon: CalendarOff, color: '#FF6B6B' },
  { key: '3', icon: BookOpen, color: '#FF6B6B' },
  { key: '4', icon: BarChart3, color: '#FF6B6B' },
  { key: '5', icon: DollarSign, color: '#FF6B6B' },
  { key: '6', icon: Languages, color: '#FF6B6B' },
];

export default function PainPoints() {
  const { t } = useI18n();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-[#FF6B6B]/30 bg-[#FF6B6B]/10 text-[#FF6B6B] text-sm mb-6"
          >
            {t('pain.badge' as any)}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            {t('pain.title' as any)}{' '}
            <span className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] bg-clip-text text-transparent">
              {t('pain.titleHighlight' as any)}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-white/50 max-w-2xl mx-auto"
          >
            {t('pain.subtitle' as any)}
          </motion.p>
        </div>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painData.map((pain, i) => {
            const Icon = pain.icon;
            return (
              <motion.div
                key={pain.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                {/* Top: problem */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B6B]/15 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#FF6B6B]" />
                  </div>
                  <h3 className="text-white font-semibold text-lg leading-snug pt-1.5">
                    {t(`pain.${pain.key}.problem` as any)}
                  </h3>
                </div>

                {/* Detail */}
                <p className="text-white/40 text-sm leading-relaxed mb-4 pl-[52px]">
                  {t(`pain.${pain.key}.detail` as any)}
                </p>

                {/* Divider */}
                <div className="border-t border-white/5 mx-0 my-4" />

                {/* Solution */}
                <div className="flex items-start gap-2 pl-[52px]">
                  <CheckCircle className="w-4 h-4 text-[#4ECCA3] shrink-0 mt-0.5" />
                  <p className="text-[#4ECCA3] text-sm font-medium leading-snug">
                    {t(`pain.${pain.key}.solution` as any)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transition arrow to features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <a
            href="#features"
            className="flex items-center gap-2 text-[#FFD700] hover:text-[#FFA500] transition-colors group"
          >
            <span className="text-sm font-medium">
              {t('hero.ctaSecondary')}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
