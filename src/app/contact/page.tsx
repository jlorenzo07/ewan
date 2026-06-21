import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Contact Us | 100 JILI Casino Support",
  description: "Get in touch with the 100 JILI Casino support team. Available 24/7 via live chat, email, and Telegram for all your gaming needs.",
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact 100 JILI Casino",
    "url": "https://100-jili.ph/contact"
  };

  return (
    <>
      <SchemaOrg schema={schema} />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Contact Us</h1>
        <p className="text-lg text-[var(--color-brand-slate)] mb-12">
          At 100 JILI Casino, we pride ourselves on delivering exceptional customer service. 
          Our dedicated support team is available 24/7 to assist you with any questions or concerns.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Live Chat</h3>
            <p className="text-[var(--color-brand-slate)] mb-6">
              For immediate assistance, connect with our support agents instantly through our live chat service.
            </p>
            <button className="px-6 py-3 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors">
              Start Live Chat
            </button>
          </div>

          <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Email Support</h3>
            <p className="text-[var(--color-brand-slate)] mb-6">
              For non-urgent inquiries, verification documents, or detailed support requests, drop us an email.
            </p>
            <a href="mailto:support@100-jili.ph" className="text-[var(--color-brand-neon-jade)] font-bold hover:underline">
              support@100-jili.ph
            </a>
          </div>
        </div>

        <div className="bg-[var(--color-brand-midnight)] border border-[var(--color-brand-light-navy)] p-8 rounded-2xl">
           <h3 className="text-xl font-bold text-white mb-4">Join our Community</h3>
           <p className="text-[var(--color-brand-slate)] mb-4">
             Follow our official channels on Telegram and Facebook to stay updated on the latest promotions, game releases, and announcements.
           </p>
        </div>
      </div>
    </>
  );
}
