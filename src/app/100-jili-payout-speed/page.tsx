import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Clock, Rocket, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI Fast Payout Speed | Get Paid in Minutes",
  description: "Discover why 100 JILI boasts the fastest casino payout speed in the Philippines. Learn about our automated withdrawal system and VIP priority processing.",
};

export default function SiloPayoutSpeedPage() {
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
        "name": "100 JILI Banking",
        "item": "https://100-jili.ph/100-jili-deposit-withdrawal"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "100 JILI Payout Speed",
        "item": "https://100-jili.ph/100-jili-payout-speed"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-yellow-500 mb-6">
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            100 JILI Payout Speed
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Don't wait days for your money. At 100 JILI, we process withdrawals at lightning speed.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            One of the defining factors that elevates <strong>100 JILI Casino</strong> above generic competitors is our uncompromising 
            focus on withdrawal efficiency. We believe that when you win, you deserve access to your cash immediately.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Our Processing Benchmarks</h2>
          
          <div className="space-y-6 my-8">
            <div className="flex items-center gap-6 p-6 bg-[var(--color-brand-navy)] rounded-xl border border-[var(--color-brand-light-navy)]">
               <Zap className="w-10 h-10 text-[var(--color-brand-neon-jade)] shrink-0" />
               <div>
                 <h3 className="text-xl font-bold text-white mt-0 mb-1">E-Wallets (GCash, Maya)</h3>
                 <p className="mb-0 text-sm">Under 5 Minutes. Automated approval for verified accounts.</p>
               </div>
            </div>
            
            <div className="flex items-center gap-6 p-6 bg-[var(--color-brand-navy)] rounded-xl border border-[var(--color-brand-light-navy)]">
               <Rocket className="w-10 h-10 text-purple-400 shrink-0" />
               <div>
                 <h3 className="text-xl font-bold text-white mt-0 mb-1">Cryptocurrency (USDT)</h3>
                 <p className="mb-0 text-sm">Under 15 Minutes. Dependent on blockchain network congestion.</p>
               </div>
            </div>

            <div className="flex items-center gap-6 p-6 bg-[var(--color-brand-navy)] rounded-xl border border-[var(--color-brand-light-navy)]">
               <Clock className="w-10 h-10 text-slate-400 shrink-0" />
               <div>
                 <h3 className="text-xl font-bold text-white mt-0 mb-1">Bank Transfers</h3>
                 <p className="mb-0 text-sm">1-2 Business Days. Subject to regular banking hours and holidays.</p>
               </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">How to Ensure Fast Payouts</h2>
          <p>You can help us maintain these rapid speeds by following these best practices:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 mb-8">
            <li>Complete your <strong>KYC verification</strong> immediately after registering. Unverified accounts require manual review for the first withdrawal, which takes time.</li>
            <li>Ensure all <strong>Bonus Turnover</strong> requirements are met. You can track your turnover progress in the Promotion Center.</li>
            <li>Withdraw to the <strong>same method</strong> you used to deposit whenever possible (closed-loop system).</li>
            <li>Become a <Link href="/100-jili-vip" className="text-[var(--color-brand-neon-jade)]">VIP Player</Link>. Higher VIP tiers benefit from priority queue processing.</li>
          </ul>

        </div>
      </section>
    </>
  );
}
