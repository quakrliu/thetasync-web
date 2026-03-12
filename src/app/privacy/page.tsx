'use client';

import { I18nProvider, useI18n } from '@/i18n/context';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function PrivacyContent() {
  const { locale } = useI18n();
  const isZh = locale === 'zh-TW';

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            {isZh ? '隱私政策' : 'Privacy Policy'}
          </h1>
          <p className="text-white/40 text-sm mb-10">
            {isZh ? '最後更新：2026 年 3 月' : 'Last updated: March 2026'}
          </p>

          <div className="space-y-8 text-white/70 leading-relaxed">
            {/* Introduction */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? '簡介' : 'Introduction'}
              </h2>
              <p>
                {isZh
                  ? 'ThetaSync（「希塔之引」）重視您的隱私。本隱私政策說明我們在您使用本應用程式時，如何收集、使用和保護您的資訊。'
                  : 'ThetaSync ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our application.'}
              </p>
            </section>


            {/* Trademark Disclaimer */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? '商標聲明' : 'Trademark Disclaimer'}
              </h2>
              <p>
                {isZh
                  ? 'ThetaSync（希塔之引）是一款獨立開發的冥想與個人成長工具。本應用程式與 ThetaHealing®、THInK Institute 或任何官方療癒組織無隸屬、認證或背書關係。ThetaHealing® 是 THInK Institute 的註冊商標。應用程式中提及的冥想技巧與信念探索方法僅供個人成長參考之用。'
                  : 'ThetaSync is an independently developed meditation and personal growth tool. This application is not affiliated with, endorsed by, or certified by ThetaHealing®, THInK Institute, or any official healing organization. ThetaHealing® is a registered trademark of THInK Institute. Meditation techniques and belief exploration methods referenced in the app are provided for personal growth purposes only.'}
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? '資料收集' : 'Data Collection'}
              </h2>
              <p className="mb-3">
                {isZh
                  ? 'ThetaSync 的設計以隱私為優先。我們收集的資料極少：'
                  : 'ThetaSync is designed with privacy first. We collect minimal data:'}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong className="text-white/90">{isZh ? '本地儲存的資料' : 'Locally stored data'}</strong>
                  {isZh
                    ? '：您的信念、對話紀錄、設定和個人偏好全部儲存在您的裝置上，不會上傳至我們的伺服器。'
                    : ': Your beliefs, session history, settings, and personal preferences are all stored locally on your device and are never uploaded to our servers.'}
                </li>
                <li>
                  <strong className="text-white/90">{isZh ? '等候名單 Email' : 'Waitlist email'}</strong>
                  {isZh
                    ? '：如果您自願加入等候名單，我們僅收集您的 Email 地址，用於通知您應用程式的上架資訊。'
                    : ': If you voluntarily join our waitlist, we collect only your email address to notify you about app availability.'}
                </li>
              </ul>
            </section>

            {/* Local Storage */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? '本地儲存' : 'Local Storage'}
              </h2>
              <p>
                {isZh
                  ? '所有個人資料，包括您的信念資料庫、對話記錄、連續紀錄及偏好設定，均使用 AsyncStorage 儲存在您的裝置上。您可以隨時透過應用程式的設定匯出或刪除這些資料。我們無法存取這些本地儲存的資料。'
                  : 'All personal data — including your belief database, conversation history, streak records, and preferences — is stored on your device using AsyncStorage. You can export or delete this data at any time through the app settings. We have no access to this locally stored data.'}
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? '第三方服務' : 'Third-Party Services'}
              </h2>
              <p className="mb-3">
                {isZh
                  ? '為提供 AI 功能，ThetaSync 會與以下第三方服務互動。使用這些功能時，相關資料會傳送至這些服務進行處理：'
                  : 'To provide AI-powered features, ThetaSync interacts with the following third-party services. When using these features, relevant data is sent to these services for processing:'}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong className="text-white/90">Google Gemini API</strong>
                  {isZh
                    ? '：用於 AI 信念教練功能。您的對話內容會傳送至 Google 的伺服器進行處理。請參閱 Google 的隱私政策了解詳情。'
                    : ': Powers the AI Belief Coach. Your conversation content is sent to Google servers for processing. Please refer to Google\'s Privacy Policy for details.'}
                </li>
                <li>
                  <strong className="text-white/90">Google Cloud Text-to-Speech</strong>
                  {isZh
                    ? '：用於語音合成功能。文字內容會傳送至 Google 進行語音合成處理。'
                    : ': Used for voice synthesis. Text content is sent to Google for speech generation.'}
                </li>
                <li>
                  <strong className="text-white/90">OpenAI Whisper API</strong>
                  {isZh
                    ? '：用於語音辨識功能（備用方案）。錄音內容會傳送至 OpenAI 進行轉錄。'
                    : ': Used for speech recognition (fallback). Audio recordings are sent to OpenAI for transcription.'}
                </li>
                <li>
                  <strong className="text-white/90">Adapty</strong>
                  {isZh
                    ? '：用於管理應用程式內訂閱。Adapty 會處理您的訂閱狀態和交易資訊（透過 Apple App Store / Google Play 處理），但不會收集您的個人使用資料或應用程式內容。請參閱 Adapty 的隱私政策了解詳情。'
                    : ': Used to manage in-app subscriptions. Adapty processes your subscription status and transaction information (handled through Apple App Store / Google Play) but does not collect your personal usage data or app content. Please refer to the Adapty Privacy Policy for details.'}
                </li>
              </ul>
              <p className="mt-3">
                {isZh
                  ? '這些第三方服務有各自的隱私政策，我們建議您閱讀以了解其資料處理方式。'
                  : 'These third-party services have their own privacy policies, which we encourage you to review for details on their data handling practices.'}
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? 'Cookies 與追蹤' : 'Cookies & Tracking'}
              </h2>
              <p>
                {isZh
                  ? 'ThetaSync 行動應用程式不使用 Cookies 或追蹤技術。本行銷網站可能使用基本的分析工具來了解流量，但不會追蹤個別使用者的個人資訊。'
                  : 'The ThetaSync mobile app does not use cookies or tracking technologies. This marketing website may use basic analytics to understand traffic patterns, but does not track individual users\' personal information.'}
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? '資料安全' : 'Data Security'}
              </h2>
              <p>
                {isZh
                  ? '由於您的個人資料儲存在您的裝置上，資料安全主要取決於您裝置的安全性。我們建議您使用裝置密碼鎖定，並定期使用應用程式內的匯出功能備份您的資料。'
                  : 'Since your personal data is stored on your device, data security is primarily dependent on your device security. We recommend using device passcode protection and regularly backing up your data using the in-app export feature.'}
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? '兒童隱私' : "Children's Privacy"}
              </h2>
              <p>
                {isZh
                  ? 'ThetaSync 不是為 13 歲以下的兒童設計的，我們也不會有意收集兒童的個人資訊。'
                  : 'ThetaSync is not designed for children under 13, and we do not knowingly collect personal information from children.'}
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? '政策變更' : 'Changes to This Policy'}
              </h2>
              <p>
                {isZh
                  ? '我們可能會不定期更新本隱私政策。如有任何重大變更，我們會透過應用程式內通知或在本頁面上公告。建議您定期查閱本頁面。'
                  : 'We may update this Privacy Policy from time to time. Any significant changes will be communicated through in-app notifications or by posting on this page. We encourage you to review this page periodically.'}
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isZh ? '聯絡我們' : 'Contact Us'}
              </h2>
              <p>
                {isZh
                  ? '如果您對本隱私政策有任何疑問，歡迎透過以下方式聯絡我們：'
                  : 'If you have any questions about this Privacy Policy, please contact us at:'}
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

export default function PrivacyPage() {
  return (
    <I18nProvider>
      <PrivacyContent />
    </I18nProvider>
  );
}
