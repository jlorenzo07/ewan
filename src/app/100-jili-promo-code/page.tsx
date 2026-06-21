import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Ticket, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI Promo Code 2024 | Unlock Hidden Casino Bonuses",
  description: "Find the latest active 100 JILI promo codes. Unlock exclusive free spins, cashback rewards, and special deposit matches today.",
};

export default function SiloPromoCodePage() {
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
        "name": "100 JILI Bonus Philippines",
        "item": "https://100-jili.ph/100-jili-bonus"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "100 JILI Promo Code",
        "item": "https://100-jili.ph/100-jili-promo-code"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <Ticket className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            100 JILI Promo Codes
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Unlock secret promotions, exclusive VIP event tickets, and limited-time free spin offers with our active promo codes.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            While our standard promotions are easily accessible from the Promotion Center, <strong>100 JILI Promo Codes</strong> 
            offer access to exclusive, limited-time deals. These codes are often distributed through our social media channels, 
            partner affiliates, and directly to our most loyal players via email.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Where to Find Active Promo Codes</h2>
          <ul className="space-y-4 m-0 pl-0 list-none my-6">
            <li className="flex items-start gap-4 p-4 bg-[var(--color-brand-navy)] rounded-lg">
              <Search className="w-6 h-6 text-[var(--color-brand-neon-jade)] shrink-0" />
              <div>
                <strong className="block text-white">Official Telegram Channel</strong>
                <span>Join our Telegram group for flash codes that are valid for 24 hours only.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 bg-[var(--color-brand-navy)] rounded-lg">
              <Search className="w-6 h-6 text-[var(--color-brand-neon-jade)] shrink-0" />
              <div>
                <strong className="block text-white">Email Newsletters</strong>
                <span>Ensure your email is verified and subscribed. We send personalized codes on your birthday and account anniversaries.</span>
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">How to Redeem a Promo Code</h2>
          <p>Got a code? Here is how to use it:</p>
          <ol className="list-decimal pl-6 space-y-2 mt-4 mb-8">
            <li>Log in to your 100 JILI account.</li>
            <li>Go to "My Account" and select "Redeem Promo Code".</li>
            <li>Enter the code exactly as it appears (codes are case-sensitive).</li>
            <li>Click "Submit". The bonus funds or free spins will immediately reflect in your account.</li>
          </ol>

          <div className="mt-12 text-center p-8 bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Don't have an account yet?</h3>
            <p className="mb-6">You need an active account to redeem any promo codes.</p>
            <Link href="/100-jili-register" className="inline-flex px-8 py-3 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors">
              Create Account Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
