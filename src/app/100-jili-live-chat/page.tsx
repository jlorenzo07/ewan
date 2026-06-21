import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { MessageCircle, Clock, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI Live Chat | 24/7 Instant Customer Support",
  description: "Connect with 100 JILI Live Chat support instantly. Our agents are available 24/7 to resolve deposit issues, bonus queries, and technical problems.",
};

export default function SiloLiveChatPage() {
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
        "name": "100 JILI Live Chat",
        "item": "https://100-jili.ph/100-jili-live-chat"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <MessageCircle className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            100 JILI Live Chat Support
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Real-time solutions for your casino questions. Available 24 hours a day, 7 days a week.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            When you need help, you don't want to wait hours for an email reply. That is why <strong>100 JILI Live Chat</strong> 
            is our primary support channel. Located directly on our website and mobile app, our live chat connects you with a 
            human support agent in seconds.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Why Use Live Chat?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
             <div className="p-6 bg-[var(--color-brand-navy)] rounded-xl border border-[var(--color-brand-light-navy)]">
                <Zap className="w-6 h-6 text-[var(--color-brand-neon-jade)] mb-3" />
                <h3 className="text-lg font-bold text-white mt-0 mb-2">Instant Connection</h3>
                <p className="text-sm mb-0">Average wait time is under 30 seconds. No bots, just real people ready to help.</p>
             </div>
             <div className="p-6 bg-[var(--color-brand-navy)] rounded-xl border border-[var(--color-brand-light-navy)]">
                <Clock className="w-6 h-6 text-yellow-400 mb-3" />
                <h3 className="text-lg font-bold text-white mt-0 mb-2">24/7 Availability</h3>
                <p className="text-sm mb-0">Whether it's 2 PM or 2 AM, our agents are online and monitoring the system.</p>
             </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">How to Access Live Chat</h2>
          <ol className="list-decimal pl-6 space-y-2 mb-8">
            <li>Look for the floating chat bubble icon in the bottom right corner of any page on 100-jili.ph.</li>
            <li>Click the icon to open the chat window.</li>
            <li>If prompted, enter your registered mobile number or username to help us pull up your account details faster.</li>
            <li>Type your question and press send.</li>
          </ol>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">What Can Live Chat Help With?</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Investigating delayed GCash deposits or withdrawals.</li>
            <li>Explaining bonus terms, conditions, and turnover requirements.</li>
            <li>Unlocking accounts that have been temporarily suspended due to failed logins.</li>
            <li>Assisting with the KYC (Identity Verification) process.</li>
          </ul>

          <div className="mt-12 text-center p-8 bg-[var(--color-brand-midnight)] border border-[var(--color-brand-neon-jade)] rounded-2xl shadow-[0_0_20px_rgba(0,255,136,0.1)]">
             <p className="mb-6 font-bold text-white">Need immediate assistance right now?</p>
             <button className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors">
              <MessageCircle className="w-5 h-5" /> Open Live Chat Widget
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
