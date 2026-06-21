import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Headset, MessageCircle, Send, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI Customer Service | 24/7 Support & Security",
  description: "Get immediate help from the 100 JILI customer service team. We offer 24/7 support via Live Chat and Telegram, plus essential account security guidelines.",
};

export default function Hub7PillarPage() {
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
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can I contact 100 JILI support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The fastest way to reach us is through the 24/7 Live Chat widget on our website. You can also connect with us via our official Telegram channel."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do if I forgot my password?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Click 'Forgot Password' on the login screen to reset it via SMS OTP. If your account is locked, please contact Live Chat for immediate assistance."
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
            <Headset className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            100 JILI Customer Service & Security
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-brand-slate)] mb-10 max-w-3xl mx-auto">
            Your peace of mind is our priority. Our dedicated support team is available 24/7 to resolve any issues, 
            while our advanced security systems keep your account safe from unauthorized access.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2 prose prose-invert max-w-none text-[var(--color-brand-slate)]">
            <h2 className="text-3xl font-bold text-white mt-0">Always Here When You Need Us</h2>
            <p className="text-lg leading-relaxed">
              Whether you are experiencing a technical glitch during a game, have questions about a bonus turnover requirement, 
              or need assistance with a delayed withdrawal, the <strong>100 JILI Customer Service</strong> team is fully equipped 
              to provide rapid, accurate, and courteous resolutions.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-6">Contact Methods</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-xl text-center">
                <MessageCircle className="w-12 h-12 text-[var(--color-brand-neon-jade)] mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white m-0">24/7 Live Chat</h4>
                <p className="text-sm mt-2 mb-4">Instant connection with our support agents directly on the website.</p>
                <Link href="/100-jili-live-chat" className="text-[var(--color-brand-neon-jade)] hover:underline font-bold">Read Guide &rarr;</Link>
              </div>
              <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-xl text-center">
                <Send className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white m-0">Official Telegram</h4>
                <p className="text-sm mt-2 mb-4">Join our community channel for support and exclusive promo codes.</p>
                <Link href="/100-jili-telegram" className="text-blue-400 hover:underline font-bold">Read Guide &rarr;</Link>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">Account Security First</h3>
            <p>
              We employ military-grade encryption to protect your data, but security is a shared responsibility. 
              We urge all players to review our <Link href="/100-jili-scam-alert" className="text-[var(--color-brand-neon-jade)]">Scam Alerts</Link> to 
              educate themselves on how to identify fake 100 JILI websites and phishing attempts.
            </p>
            <p>
              If you ever lose access to your account, do not panic. Our <Link href="/100-jili-account-recovery" className="text-[var(--color-brand-neon-jade)]">Account Recovery</Link> process 
              is designed to securely restore your access after verifying your identity.
            </p>
            
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">How can I contact 100 JILI support?</h4>
                <p>The fastest way to reach us is through the 24/7 Live Chat widget on our website. You can also connect with us via our official Telegram channel.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">What should I do if I forgot my password?</h4>
                <p>Click 'Forgot Password' on the login screen to reset it via SMS OTP. If your account is locked, please contact Live Chat for immediate assistance.</p>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Support & Security Hub</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/100-jili-live-chat" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1 flex items-center gap-2"><MessageCircle className="w-4 h-4" /> Live Chat</span>
                  </Link>
                </li>
                <li>
                  <Link href="/100-jili-telegram" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1 flex items-center gap-2"><Send className="w-4 h-4" /> Telegram Support</span>
                  </Link>
                </li>
                <li>
                  <Link href="/100-jili-scam-alert" className="block p-4 rounded-lg border border-red-500/50 hover:border-red-500 hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1 flex items-center gap-2"><ShieldAlert className="w-4 h-4 text-red-500" /> Scam Alerts</span>
                  </Link>
                </li>
                <li>
                  <Link href="/100-jili-account-recovery" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">Account Recovery Guide</span>
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
