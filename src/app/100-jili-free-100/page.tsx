import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Coins, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI Free 100 PHP | Claim Your No Deposit Bonus Today",
  description: "Get 100 JILI free 100 PHP just for registering! Read our guide on how to claim this exclusive no-deposit bonus and withdraw your winnings quickly.",
};

export default function SiloFree100Page() {
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
        "name": "100 JILI Free 100 PHP",
        "item": "https://100-jili.ph/100-jili-free-100"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <Coins className="w-8 h-8 text-yellow-400" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Claim Your 100 JILI Free 100 PHP
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            The most sought-after no-deposit bonus in the Philippines. Register today and get 100 PHP credited instantly.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            Why risk your own money when you can play on the house? The <strong>100 JILI Free 100 PHP bonus</strong> is our 
            way of welcoming new players to our premium casino platform. This risk-free credit allows you to test our 
            high-RTP slots and fishing games without spending a single peso.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">How to Claim the Free 100 PHP</h2>
          <p>We've made the claiming process as smooth as possible. Just follow these steps:</p>
          <ol className="list-decimal pl-6 space-y-4 mt-4 mb-8">
            <li>
              <strong>Register an Account:</strong> Click the <Link href="/100-jili-register" className="text-[var(--color-brand-neon-jade)]">Sign Up</Link> button 
              and fill out the registration form with your active mobile number.
            </li>
            <li>
              <strong>Verify Your Identity:</strong> To prevent fraud and abuse of the free bonus, you must complete a quick 
              KYC check. This usually involves uploading a photo of a valid government ID.
            </li>
            <li>
              <strong>Download the App (Optional but Recommended):</strong> Some free credit promos require you to download 
              the official 100 JILI mobile app for iOS or Android.
            </li>
            <li>
              <strong>Claim in the Promotion Center:</strong> Once verified, navigate to the Promotion Center in your dashboard, 
              find the "Free 100" banner, and click "Apply".
            </li>
          </ol>

          <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-8 rounded-2xl my-12">
            <h3 className="text-xl font-bold text-white mt-0 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[var(--color-brand-neon-jade)]" />
              Terms and Conditions
            </h3>
            <ul className="space-y-2 m-0 pl-4 list-disc text-sm">
              <li>The Free 100 PHP is strictly for new members only (one per IP/Device/Household).</li>
              <li>A standard turnover requirement (e.g., 20x) applies before withdrawals can be processed.</li>
              <li>The maximum withdrawal limit from free bonus winnings is capped at a specific amount (usually 300 - 500 PHP).</li>
              <li>Valid mostly on slot machine games. Live dealer tables and sports betting may be excluded.</li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <Link href="/100-jili-register" className="inline-flex px-8 py-4 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg text-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors shadow-[0_0_20px_rgba(0,255,136,0.4)]">
              Register & Claim Free 100
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
