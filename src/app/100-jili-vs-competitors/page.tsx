import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Swords, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI vs Competitors | Why We Are the Best Casino in PH",
  description: "Compare 100 JILI Casino against other online casinos in the Philippines. See why our bonuses, game selection, and payout speeds make us the clear winner.",
};

export default function SiloVsCompetitorsPage() {
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
        "name": "100 JILI Casino Philippines",
        "item": "https://100-jili.ph/100-jili-casino-philippines"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "100 JILI vs Competitors",
        "item": "https://100-jili.ph/100-jili-vs-competitors"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <Swords className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            100 JILI vs Other PH Casinos
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Don't settle for less. See exactly why thousands of Filipinos are making the switch to 100 JILI Casino.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="overflow-x-auto rounded-xl border border-[var(--color-brand-light-navy)]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[var(--color-brand-navy)] text-white">
                  <th className="p-4 border-b border-r border-[var(--color-brand-light-navy)] font-bold">Feature</th>
                  <th className="p-4 border-b border-[var(--color-brand-light-navy)] font-bold text-[var(--color-brand-neon-jade)] bg-[var(--color-brand-midnight)] text-center text-xl w-1/3">100 JILI Casino</th>
                  <th className="p-4 border-b border-l border-[var(--color-brand-light-navy)] font-bold text-center text-[var(--color-brand-slate)] w-1/3">Generic Casinos</th>
                </tr>
              </thead>
              <tbody className="bg-[var(--color-brand-midnight)] text-[var(--color-brand-slate)]">
                <tr>
                  <td className="p-4 border-b border-r border-[var(--color-brand-light-navy)] font-medium text-white">Welcome Bonus Turnover</td>
                  <td className="p-4 border-b border-[var(--color-brand-light-navy)] text-center bg-[var(--color-brand-navy)]/30">
                    <span className="text-[var(--color-brand-neon-jade)] font-bold">Low & Fair (15x-20x)</span>
                  </td>
                  <td className="p-4 border-b border-l border-[var(--color-brand-light-navy)] text-center">Unrealistic (40x-50x)</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-r border-[var(--color-brand-light-navy)] font-medium text-white">Payout Speed (GCash)</td>
                  <td className="p-4 border-b border-[var(--color-brand-light-navy)] text-center bg-[var(--color-brand-navy)]/30">
                    <span className="text-[var(--color-brand-neon-jade)] font-bold flex justify-center items-center gap-2"><Check className="w-5 h-5"/> Under 5 Minutes</span>
                  </td>
                  <td className="p-4 border-b border-l border-[var(--color-brand-light-navy)] text-center flex justify-center items-center gap-2">24 to 48 Hours</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-r border-[var(--color-brand-light-navy)] font-medium text-white">PAGCOR Licensed</td>
                  <td className="p-4 border-b border-[var(--color-brand-light-navy)] text-center bg-[var(--color-brand-navy)]/30">
                    <Check className="w-6 h-6 text-[var(--color-brand-neon-jade)] mx-auto" />
                  </td>
                  <td className="p-4 border-b border-l border-[var(--color-brand-light-navy)] text-center text-red-500">
                    <X className="w-6 h-6 mx-auto" /> (Often Unlicensed)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-r border-[var(--color-brand-light-navy)] font-medium text-white">JILI Games Integration</td>
                  <td className="p-4 border-b border-[var(--color-brand-light-navy)] text-center bg-[var(--color-brand-navy)]/30">
                    <span className="text-[var(--color-brand-neon-jade)] font-bold">Direct Partner (No Lag)</span>
                  </td>
                  <td className="p-4 border-b border-l border-[var(--color-brand-light-navy)] text-center">Third-Party Proxy</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-[var(--color-brand-light-navy)] font-medium text-white">Customer Support</td>
                  <td className="p-4 border-[var(--color-brand-light-navy)] text-center bg-[var(--color-brand-navy)]/30">
                    <span className="text-[var(--color-brand-neon-jade)] font-bold">24/7 Live Agent (Local)</span>
                  </td>
                  <td className="p-4 border-l border-[var(--color-brand-light-navy)] text-center">Chatbots Only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center prose prose-invert mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">The Clear Winner</h2>
            <p className="text-lg">
              When you compare the facts, 100 JILI provides a significantly better, safer, and more rewarding environment for Filipino players. 
              Why risk your hard-earned money on unverified sites with rigged odds and impossible withdrawal conditions?
            </p>
            <div className="mt-8">
              <Link href="/100-jili-register" className="inline-flex px-8 py-4 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg text-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors shadow-[0_0_20px_rgba(0,255,136,0.4)]">
                Try 100 JILI Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
