import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Wrench, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI App Installation Guide & Troubleshooting",
  description: "Having trouble installing the 100 JILI app? Read our comprehensive installation guide and troubleshooting tips for Android and iOS devices.",
};

export default function SiloInstallGuidePage() {
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
        "name": "Install Guide",
        "item": "https://100-jili.ph/100-jili-install-guide"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <Wrench className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            App Troubleshooting Guide
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Resolving common issues during the download and installation of the 100 JILI mobile app.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <h2 className="text-2xl font-bold text-white mb-6">Common Android (APK) Issues</h2>
          
          <div className="space-y-4">
            <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-xl">
              <h3 className="text-lg font-bold text-white mt-0 mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[var(--color-brand-neon-jade)]" />
                "App Not Installed" Error
              </h3>
              <p className="mb-0 text-sm">
                This usually happens if you have an older version of the app already installed, or if your phone does not have enough storage space. 
                <strong>Fix:</strong> Delete the old app, ensure you have at least 100MB of free storage, and try installing the APK again.
              </p>
            </div>

            <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-xl">
              <h3 className="text-lg font-bold text-white mt-0 mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[var(--color-brand-neon-jade)]" />
                Blocked by Play Protect
              </h3>
              <p className="mb-0 text-sm">
                Google Play Protect sometimes flags gambling APKs. <strong>Fix:</strong> When the warning pops up, click "More Details" and select "Install Anyway."
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Common iOS Issues</h2>
          
          <div className="space-y-4">
            <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-xl">
              <h3 className="text-lg font-bold text-white mt-0 mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[var(--color-brand-neon-jade)]" />
                "Add to Home Screen" is missing
              </h3>
              <p className="mb-0 text-sm">
                This option is exclusively available in the Safari browser. <strong>Fix:</strong> If you are using Chrome, Firefox, or the Facebook in-app browser on your iPhone, open Safari instead and navigate to 100-jili.ph.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-[var(--color-brand-midnight)] border border-[var(--color-brand-light-navy)] rounded-2xl text-center">
             <h3 className="text-xl font-bold text-white mb-4">Still Need Help?</h3>
             <p className="mb-6">Our support team is available 24/7 to guide you through the process.</p>
             <Link href="/contact" className="inline-flex px-8 py-3 border border-[var(--color-brand-neon-jade)] text-[var(--color-brand-neon-jade)] font-bold rounded-lg hover:bg-[var(--color-brand-neon-jade)] hover:text-[var(--color-brand-midnight)] transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
