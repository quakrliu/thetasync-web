'use client';

import Image from 'next/image';
import { useI18n } from '@/i18n/context';
import { Heart } from 'lucide-react';

export default function Footer() {
  const { locale, t } = useI18n();

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="ThetaSync Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-white font-semibold text-lg">
                {locale === 'zh-TW' ? '希塔之引' : 'ThetaSync'}
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-white/40 hover:text-[#FFD700] text-sm transition-colors">
                  {t('nav.features')}
                </a>
              </li>
              <li>
                <a href="#meditation" className="text-white/40 hover:text-[#FFD700] text-sm transition-colors">
                  {t('nav.meditation')}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/40 hover:text-[#FFD700] text-sm transition-colors">
                  {t('nav.faq')}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/40 hover:text-[#FFD700] text-sm transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/40 hover:text-[#FFD700] text-sm transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-white/20 text-xs leading-relaxed text-center max-w-3xl mx-auto">
            {t('footer.disclaimer' as any)}
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">{t('footer.copyright')}</p>
          <p className="flex items-center gap-1.5 text-white/30 text-sm">
            {t('footer.tagline')} <Heart className="w-3.5 h-3.5 text-[#FFD700]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
