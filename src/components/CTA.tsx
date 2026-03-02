'use client';

import { useState } from 'react';
import { useI18n } from '@/i18n/context';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbw7_B6VVy1LS0lsCjvqz_iRUAqzxs1Yzo77kYJDWFHnRAqU63LypWtm8CAYhqmyJK1_Nw/exec';

export default function CTA() {
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || loading) return;

    setLoading(true);
    setError(false);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      setSubmitted(true);
      setEmail('');
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="cta" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FFD700]/5 blur-[120px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 sm:p-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {t('cta.title')}{' '}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
              {t('cta.titleHighlight')}
            </span>
          </h2>

          <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 flex items-center justify-center gap-2 text-[#4ECCA3]"
            >
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">
                {t('hero.comingSoon')}
              </span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('cta.email')}
                required
                className="w-full sm:flex-1 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FFD700]/50 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#0B132B] font-semibold hover:shadow-lg hover:shadow-[#FFD700]/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {t('cta.button')}
              </button>
              {error && (
                <p className="text-[#FF6B6B] text-sm mt-2 w-full text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}

          <p className="mt-4 text-xs text-white/30">{t('cta.privacy')}</p>
        </motion.div>
      </div>
    </section>
  );
}
