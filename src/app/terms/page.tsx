'use client';

import { I18nProvider, useI18n } from '@/i18n/context';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function TermsContent() {
  const { locale } = useI18n();
  const isZh = locale === 'zh-TW';

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            {isZh ? '服務條款' : 'Terms of Service'}
          </h1>
          <p className="text-white/40 text-sm mb-10">
            {isZh ? '最後更新：2025 年 1 月' : 'Last updated: January 2025'}
          </p>

          <div className="space-y-8 text-white/70 leading-relaxed">
            {/* Acceptance */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? '條款接受' : 'Acceptance of Terms'}
              </h2>
              <p>
                {isZh
                  ? '使用 ThetaSync（「希塔之引」）即表示您同意受本服務條款約束。如果您不同意本條款的任何部分，請勿使用本應用程式。'
                  : 'By using ThetaSync ("the App"), you agree to be bound by these Terms of Service. If you do not agree to any part of these terms, please do not use the App.'}
              </p>
            </section>

            {/* App Description */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? '應用程式說明' : 'App Description'}
              </h2>
              <p>
                {isZh
                  ? 'ThetaSync 是一款冥想與個人成長輔助工具，提供以下功能：AI 驅動的信念探索教練、源頭引導冥想、每日肯定語、信念資料庫管理，以及釋放與重塑引導。'
                  : 'ThetaSync is a meditation and personal growth companion app that provides: an AI-powered belief exploration coach, Source guided meditation, daily affirmations, belief database management, and release & transform guidance.'}
              </p>
            </section>

            {/* Medical Disclaimer */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? '醫療免責聲明' : 'Medical Disclaimer'}
              </h2>
              <div className="p-4 rounded-lg border border-[#FFD700]/20 bg-[#FFD700]/5">
                <p className="font-medium text-white/90 mb-2">
                  {isZh ? '重要聲明' : 'Important Notice'}
                </p>
                <p>
                  {isZh
                    ? '希塔之引是一款冥想與個人成長工具，不提供醫療、心理或治療建議，亦不能替代專業醫療服務。本應用程式不用於診斷、治療、治癒或預防任何疾病或健康狀況。如有健康疑慮，請諮詢合格的醫療專業人士。'
                    : 'ThetaSync is a meditation and personal growth tool. It does not provide medical, psychological, or therapeutic advice and is not a substitute for professional healthcare. The App is not intended to diagnose, treat, cure, or prevent any disease or health condition. Consult a qualified healthcare professional for any health concerns.'}
                </p>
              </div>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? '使用者責任' : 'User Responsibilities'}
              </h2>
              <p className="mb-3">
                {isZh ? '使用 ThetaSync 時，您同意：' : 'When using ThetaSync, you agree to:'}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  {isZh
                    ? '僅將本應用程式用於個人冥想和個人成長目的'
                    : 'Use the App only for personal meditation and personal growth purposes'}
                </li>
                <li>
                  {isZh
                    ? '不以任何方式嘗試對應用程式進行逆向工程、反編譯或其他修改'
                    : 'Not attempt to reverse engineer, decompile, or otherwise modify the App'}
                </li>
                <li>
                  {isZh
                    ? '不將本應用程式用於任何非法或未經授權的目的'
                    : 'Not use the App for any illegal or unauthorized purpose'}
                </li>
                <li>
                  {isZh
                    ? '了解 AI 教練是輔助工具，不能替代合格的專業人士或醫療專業人士'
                    : 'Understand that the AI coach is an assistive tool and not a replacement for a qualified practitioner or healthcare professional'}
                </li>
              </ul>
            </section>

            {/* AI Features */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? 'AI 功能' : 'AI Features'}
              </h2>
              <p>
                {isZh
                  ? 'ThetaSync 的 AI 功能由第三方服務（包括 Google Gemini 和 Google Cloud TTS）提供支援。AI 生成的回應僅供參考和引導之用，可能不完全準確。我們對 AI 功能所提供的建議或回應不承擔責任。AI 功能的可用性取決於第三方服務，可能會因服務中斷而暫時無法使用。'
                  : 'ThetaSync\'s AI features are powered by third-party services including Google Gemini and Google Cloud TTS. AI-generated responses are provided for guidance and informational purposes only and may not always be accurate. We are not responsible for any advice or responses provided by the AI features. Availability of AI features depends on third-party services and may be temporarily unavailable due to service disruptions.'}
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? '智慧財產權' : 'Intellectual Property'}
              </h2>
              <p>
                {isZh
                  ? 'ThetaSync 應用程式的所有內容，包括但不限於文字、圖形、使用者介面、程式碼及音訊，均受智慧財產權法保護。您的個人信念資料和對話記錄屬於您自己。'
                  : 'All content within the ThetaSync app, including but not limited to text, graphics, user interfaces, code, and audio, is protected by intellectual property laws. Your personal belief data and conversation records belong to you.'}
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? '責任限制' : 'Limitation of Liability'}
              </h2>
              <p>
                {isZh
                  ? '在法律允許的最大範圍內，ThetaSync 及其開發者不對因使用或無法使用本應用程式而導致的任何直接、間接、附帶、特殊或衍生性損害承擔責任。本應用程式按「現狀」提供，不提供任何形式的明示或暗示擔保。'
                  : 'To the maximum extent permitted by law, ThetaSync and its developers shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the App. The App is provided "as is" without warranties of any kind, either express or implied.'}
              </p>
            </section>

            {/* Data & Backups */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? '資料與備份' : 'Data & Backups'}
              </h2>
              <p>
                {isZh
                  ? '您的資料儲存在您的裝置本地端。我們不負責因裝置損壞、遺失或應用程式刪除而導致的資料遺失。我們強烈建議您定期使用應用程式內的匯出功能備份資料。'
                  : 'Your data is stored locally on your device. We are not responsible for data loss due to device damage, loss, or app deletion. We strongly recommend regularly backing up your data using the in-app export feature.'}
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? '條款變更' : 'Changes to Terms'}
              </h2>
              <p>
                {isZh
                  ? '我們保留隨時修改本服務條款的權利。如有重大變更，我們會透過應用程式內通知或在本頁面上公告。繼續使用本應用程式即表示您接受修改後的條款。'
                  : 'We reserve the right to modify these Terms of Service at any time. Significant changes will be communicated through in-app notifications or by posting on this page. Continued use of the App constitutes acceptance of the modified terms.'}
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? '準據法' : 'Governing Law'}
              </h2>
              <p>
                {isZh
                  ? '本服務條款受中華民國（台灣）法律管轄並依其解釋，不考慮法律衝突原則。'
                  : 'These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of China (Taiwan), without regard to conflict of law principles.'}
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? '聯絡我們' : 'Contact Us'}
              </h2>
              <p>
                {isZh
                  ? '如果您對本服務條款有任何疑問，歡迎透過以下方式聯絡我們：'
                  : 'If you have any questions about these Terms of Service, please contact us at:'}
              </p>
              <p className="mt-2">
                <a
                  href="mailto:support@thetasync.quakr.dev"
                  className="text-[#FFD700] hover:underline"
                >
                  support@thetasync.quakr.dev
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function TermsPage() {
  return (
    <I18nProvider>
      <TermsContent />
    </I18nProvider>
  );
}
