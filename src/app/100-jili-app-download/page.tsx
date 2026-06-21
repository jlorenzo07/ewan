import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Download, Smartphone, Apple } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI App Download | Play Anywhere on iOS & Android",
  description: "Download the official 100 JILI Casino app for your mobile device. Experience faster load times, exclusive app-only bonuses, and uninterrupted gameplay.",
};

export default function Hub5PillarPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://100-jili.ph/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "100 JILI App Download",
        "item": "https://100-jili.ph/100-jili-app-download"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is the 100 JILI App safe to download?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the official 100 JILI app is completely safe, scanned for malware, and utilizes the same SSL encryption as our desktop site."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use the same account on the app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. You can log into the app using your existing 100 JILI credentials. Your balance and game progress are synced across all devices."
        }
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={faqSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-20 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <Download className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Download the 100 JILI App
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-brand-slate)] mb-10 max-w-3xl mx-auto">
            Take the casino with you wherever you go. The official 100 JILI mobile app delivers the ultimate 
            gaming experience directly to your smartphone with exclusive features and faster loading speeds.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2 prose prose-invert max-w-none text-[var(--color-brand-slate)]">
            <h2 className="text-3xl font-bold text-white mt-0">Why Download the Mobile App?</h2>
            <p className="text-lg leading-relaxed">
              While our website is fully optimized for mobile browsers, downloading the dedicated <strong>100 JILI App</strong> 
              unlocks a superior level of performance and convenience. Designed specifically for the Philippine market, 
              the app consumes less data and provides a more stable connection, especially for live dealer games.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
              <Link href="/100-jili-apk-android" className="flex flex-col items-center p-8 bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] transition-all rounded-2xl group">
                <Smartphone className="w-16 h-16 text-[var(--color-brand-neon-jade)] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mt-0 mb-2">Android (APK)</h3>
                <p className="text-sm text-center mb-0">Direct download for all Android smartphones and tablets.</p>
              </Link>
              
              <Link href="/100-jili-ios-app" className="flex flex-col items-center p-8 bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] transition-all rounded-2xl group">
                <Apple className="w-16 h-16 text-white mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mt-0 mb-2">iOS (Apple)</h3>
                <p className="text-sm text-center mb-0">Install seamlessly on your iPhone or iPad via Safari.</p>
              </Link>
            </div>

            <h3 className="text-2xl font-bold text-white">App-Exclusive Benefits</h3>
            <ul className="space-y-2 m-0 pl-6 list-disc">
              <li><strong>Push Notifications:</strong> Be the first to know about flash sales, promo codes, and new game releases.</li>
              <li><strong>One-Tap Login:</strong> Securely access your account using biometric authentication (Face ID or Fingerprint).</li>
              <li><strong>App-Only Bonuses:</strong> We regularly reward app users with exclusive free spins and deposit matches not available on the web version.</li>
            </ul>
            
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Is the 100 JILI App safe to download?</h4>
                <p>Yes, the official 100 JILI app is completely safe, scanned for malware, and utilizes the same SSL encryption as our desktop site.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Can I use the same account on the app?</h4>
                <p>Absolutely. You can log into the app using your existing 100 JILI credentials. Your balance and game progress are synced across all devices.</p>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Installation Guides</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/100-jili-apk-android" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">Android APK Guide</span>
                  </Link>
                </li>
                <li>
                  <Link href="/100-jili-ios-app" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">iOS Setup Guide</span>
                  </Link>
                </li>
                <li>
                  <Link href="/100-jili-install-guide" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">Troubleshooting Installation</span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
