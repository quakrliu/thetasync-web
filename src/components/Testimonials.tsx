'use client';

import { useI18n } from '@/i18n/context';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonialKeys = ['1', '2', '3'] as const;

export default function Testimonials() {
  const { t } = useI18n();

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-[#4ECCA3]/30 bg-[#4ECCA3]/10 text-[#4ECCA3] text-sm mb-6"
          >
            {t('testimonials.badge')}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            {t('testimonials.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-white/50"
          >
            {t('testimonials.subtitle')}
          </motion.p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6"
            >
              <Quote className="w-8 h-8 text-[#FFD700]/30 mb-4" />

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {t(`testimonials.${key}.text` as any)}
              </p>

              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFD700]/30 to-[#4ECCA3]/30 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {(t(`testimonials.${key}.author` as any) as string).charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-medium text-sm">
                    {t(`testimonials.${key}.author` as any)}
                  </div>
                  <div className="text-white/40 text-xs">
                    {t(`testimonials.${key}.role` as any)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
