import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Apple, Share, PlusSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI iOS App | Setup Guide for iPhone & iPad",
  description: "Play 100 JILI on your iPhone or iPad. Follow our simple guide to install the web app seamlessly to your iOS home screen.",
};

export default function SiloIOSPage() {
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "100 JILI iOS App",
        "item": "https://100-jili.ph/100-jili-ios-app"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <Apple className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            100 JILI App for iOS (iPhone/iPad)
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Experience the smoothest gameplay on your Apple device using our Progressive Web App (PWA) technology.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            Due to the strict guidelines of the Apple App Store regarding casino applications, the best way to experience 
            <strong>100 JILI</strong> on your iPhone or iPad is by installing our Progressive Web App (PWA) directly to your home screen. 
            This provides the exact same full-screen, fast-loading experience as a native app, without needing to download anything from the App Store.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">How to Install on iOS</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 font-bold shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-white mt-0 mb-2">Open Safari</h3>
                <p className="mb-0 text-sm">Open the Safari browser on your iPhone or iPad and navigate to the official 100-jili.ph website. Note: This process only works in Safari, not Chrome.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 font-bold shrink-0">
                <Share className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mt-0 mb-2">Tap the Share Button</h3>
                <p className="mb-0 text-sm">At the bottom of the Safari screen (or at the top on an iPad), tap the Share icon (the square with an arrow pointing upward).</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 font-bold shrink-0">
                <PlusSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mt-0 mb-2">Add to Home Screen</h3>
                <p className="mb-0 text-sm">Scroll down the share menu options and tap "Add to Home Screen". You can rename the shortcut to "100 JILI" and then tap "Add" in the top right corner.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">You're All Set!</h2>
          <p>
            The 100 JILI icon will now appear on your iPhone's home screen alongside your other apps. Tapping it will open the casino 
            in a dedicated, full-screen window without the Safari address bar, giving you maximum screen space for slots and live tables.
          </p>

          <div className="mt-12 text-center">
             <Link href="/100-jili-login" className="inline-flex px-8 py-4 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg text-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors">
              Log In to Your Account
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
