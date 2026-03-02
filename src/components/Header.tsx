'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useI18n } from '@/i18n/context';
import { Menu, X, Globe } from 'lucide-react';

export default function Header() {
  const { locale, setLocale, t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: { key: string; href: string }[] = [
    { key: 'nav.features', href: '#features' },
    { key: 'nav.meditation', href: '#meditation' },
    { key: 'nav.testimonials', href: '#testimonials' },
    { key: 'nav.faq', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0B132B]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
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
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 hover:text-[#FFD700] transition-colors"
              >
                {t(item.key as any)}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLocale(locale === 'en' ? 'zh-TW' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 text-sm text-white/70 hover:text-[#FFD700] hover:border-[#FFD700]/50 transition-all cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              <span>{locale === 'en' ? '中文' : 'EN'}</span>
            </button>

            {/* CTA */}
            <a
              href="#cta"
              className="hidden sm:inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#0B132B] text-sm font-semibold hover:shadow-lg hover:shadow-[#FFD700]/25 transition-all"
            >
              {t('nav.download')}
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white/70 hover:text-white cursor-pointer"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0B132B]/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white/70 hover:text-[#FFD700] transition-colors"
              >
                {t(item.key as any)}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 text-center px-4 py-2 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#0B132B] font-semibold"
            >
              {t('nav.download')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
