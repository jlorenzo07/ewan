import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { ShieldAlert, AlertOctagon, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI Scam Alert | Protect Your Account from Phishing",
  description: "Learn how to spot fake 100 JILI websites and scammers. Protect your account, avoid phishing links, and ensure you only play on the official 100 JILI platform.",
};

export default function SiloScamAlertPage() {
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
        "name": "100 JILI Customer Service",
        "item": "https://100-jili.ph/100-jili-customer-service"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "100 JILI Scam Alerts",
        "item": "https://100-jili.ph/100-jili-scam-alert"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-red-500 mb-6">
            <ShieldAlert className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            100 JILI Scam Alerts
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Because of our popularity in the Philippines, scammers frequently attempt to impersonate 100 JILI. Learn how to stay safe.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            Your security is paramount. The <strong>100 JILI Security Team</strong> works continuously to take down fake websites 
            and malicious actors. However, player education is the strongest line of defense against fraud.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-2">
            <AlertOctagon className="w-6 h-6 text-red-400" /> 
            Common Scams to Avoid
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-[var(--color-brand-navy)] rounded-xl border border-red-500/30">
               <h3 className="text-xl font-bold text-white mt-0 mb-2">1. Fake Websites (Phishing)</h3>
               <p className="mb-0 text-sm">
                 Scammers create clone websites that look exactly like 100 JILI but have slightly altered URLs 
                 (e.g., 100jili-vip.com or 100-jili-bonus.net). If you log into these sites, they steal your password.
                 <strong>Protection:</strong> Only log in at the official domain: <code>100-jili.ph</code>. Bookmark this page.
               </p>
            </div>
            
            <div className="p-6 bg-[var(--color-brand-navy)] rounded-xl border border-red-500/30">
               <h3 className="text-xl font-bold text-white mt-0 mb-2">2. "Agent" Deposit Scams</h3>
               <p className="mb-0 text-sm">
                 Someone messages you on Facebook or Telegram claiming to be a "100 JILI Agent" offering double bonuses if you 
                 send money directly to their personal GCash number.
                 <strong>Protection:</strong> 100 JILI does NOT use human agents for deposits. ALL deposits must be automated through the Cashier on our website.
               </p>
            </div>
            
            <div className="p-6 bg-[var(--color-brand-navy)] rounded-xl border border-red-500/30">
               <h3 className="text-xl font-bold text-white mt-0 mb-2">3. OTP Stealing</h3>
               <p className="mb-0 text-sm">
                 A scammer calls you claiming your account is locked and asks you to read back the OTP (One-Time Password) sent to your phone to "verify" your identity.
                 <strong>Protection:</strong> NEVER share your OTP with anyone. Our support staff will never ask for your OTP or password.
               </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-[var(--color-brand-midnight)] border border-[var(--color-brand-neon-jade)] rounded-2xl flex items-center gap-6">
             <CheckCircle className="w-12 h-12 text-[var(--color-brand-neon-jade)] shrink-0" />
             <div>
                <h3 className="text-xl font-bold text-white mt-0 mb-2">The Golden Rule</h3>
                <p className="mb-0 text-sm">
                  If an offer seems too good to be true (e.g., "Send 500 get 5,000 guaranteed"), it is a scam. Only trust promotions listed in the official Promotion Center on our site.
                </p>
             </div>
          </div>

          <div className="mt-8 text-center">
             <p>If you believe your account has been compromised, please contact <Link href="/100-jili-live-chat" className="text-[var(--color-brand-neon-jade)]">Live Chat</Link> immediately.</p>
          </div>
        </div>
      </section>
    </>
  );
}
