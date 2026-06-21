import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Smartphone, DownloadCloud, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI APK Download | Official Android App",
  description: "Download the official 100 JILI APK for Android devices. Enjoy seamless gaming, fast deposits, and exclusive mobile bonuses in the Philippines.",
};

export default function SiloAndroidAPKPage() {
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
        "name": "100 JILI APK Android",
        "item": "https://100-jili.ph/100-jili-apk-android"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <Smartphone className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            100 JILI APK Download for Android
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Get the ultimate casino experience directly on your Android device. Follow this guide to install safely.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            Due to Google Play Store policies regarding real-money gambling apps in certain regions, the official 
            <strong>100 JILI App</strong> must be downloaded directly from our secure servers as an APK (Android Package Kit) file. 
            This process is completely safe, legal, and takes less than a minute.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Step-by-Step Android Installation</h2>
          
          <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-xl mb-6">
            <h3 className="text-xl font-bold text-white mt-0 mb-2 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-yellow-500" />
              Step 1: Allow "Unknown Sources"
            </h3>
            <p className="mb-0 text-sm">
              Before downloading, go to your phone's <strong>Settings &gt; Security (or Privacy)</strong>. Find the option labeled 
              "Install unknown apps" or "Unknown Sources" and enable it for your web browser (e.g., Chrome). This simply allows you 
              to install apps outside of the Play Store.
            </p>
          </div>

          <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-xl mb-6">
            <h3 className="text-xl font-bold text-white mt-0 mb-2 flex items-center gap-2">
              <DownloadCloud className="w-5 h-5 text-[var(--color-brand-neon-jade)]" />
              Step 2: Download the APK
            </h3>
            <p className="mb-4 text-sm">
              Click the official download link provided on our platform. The file size is small (around 20MB) and will download quickly.
            </p>
            <button className="px-6 py-3 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors">
              Download 100 JILI.apk
            </button>
          </div>

          <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-xl mb-6">
            <h3 className="text-xl font-bold text-white mt-0 mb-2">Step 3: Install and Play</h3>
            <p className="mb-0 text-sm">
              Once downloaded, open the APK file from your notification panel or Downloads folder. Tap "Install". 
              Once the installation is complete, you will see the 100 JILI icon on your home screen. Open it, log in, and start winning!
            </p>
          </div>

          <div className="mt-12 text-center p-8 bg-[var(--color-brand-midnight)] border border-[var(--color-brand-light-navy)] rounded-2xl">
            <p className="mb-6 font-bold text-white">Need an account before you download?</p>
            <Link href="/100-jili-register" className="inline-flex px-8 py-3 border border-[var(--color-brand-neon-jade)] text-[var(--color-brand-neon-jade)] font-bold rounded-lg hover:bg-[var(--color-brand-neon-jade)] hover:text-[var(--color-brand-midnight)] transition-colors">
              Register First
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
