'use client';

import { useI18n } from '@/i18n/context';
import { Heart } from 'lucide-react';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center">
                <span className="text-[#0B132B] font-bold text-sm">θ</span>
              </div>
              <span className="text-white font-semibold text-lg">ThetaSync</span>
              <span className="text-white/40 text-sm ml-1">希塔之引</span>
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

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">{t('footer.copyright')}</p>
          <p className="flex items-center gap-1.5 text-white/30 text-sm">
            {t('footer.tagline')} <Heart className="w-3.5 h-3.5 text-[#FFD700]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
