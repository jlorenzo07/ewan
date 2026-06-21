import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { DollarSign, BarChart } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI Commission Rate | Industry-Leading Revenue Share",
  description: "Discover the highly profitable 100 JILI commission rate structure. Earn up to 55% revenue share based on the volume of players you bring in.",
};

export default function SiloCommissionPage() {
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
        "name": "100 JILI Affiliate",
        "item": "https://100-jili.ph/100-jili-affiliate"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "100 JILI Commission Rate",
        "item": "https://100-jili.ph/100-jili-commission-rate"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <DollarSign className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            100 JILI Commission Structure
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            We believe in rewarding performance. The more active players you refer, the higher your percentage share.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            Unlike other platforms that offer a flat, low-percentage commission, the <strong>100 JILI Commission Rate</strong> 
            operates on a tiered Revenue Share model. This means your earning potential scales exponentially as you grow your network.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-2">
            <BarChart className="w-6 h-6 text-[var(--color-brand-neon-jade)]" />
            Tiered Revenue Share Matrix
          </h2>
          
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[var(--color-brand-navy)] border-b-2 border-[var(--color-brand-neon-jade)]">
                  <th className="p-4 text-white font-bold">Active Players (Monthly)</th>
                  <th className="p-4 text-white font-bold">Net Revenue Generated</th>
                  <th className="p-4 text-[var(--color-brand-neon-jade)] font-bold text-right">Your Commission Share</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-brand-light-navy)]">
                  <td className="p-4">5 - 20</td>
                  <td className="p-4">₱1 - ₱100,000</td>
                  <td className="p-4 text-right font-bold text-white">30%</td>
                </tr>
                <tr className="border-b border-[var(--color-brand-light-navy)] bg-[var(--color-brand-navy)]/30">
                  <td className="p-4">21 - 50</td>
                  <td className="p-4">₱100,001 - ₱500,000</td>
                  <td className="p-4 text-right font-bold text-white">40%</td>
                </tr>
                <tr className="border-b border-[var(--color-brand-light-navy)]">
                  <td className="p-4">51 - 100</td>
                  <td className="p-4">₱500,001 - ₱1,500,000</td>
                  <td className="p-4 text-right font-bold text-white">45%</td>
                </tr>
                <tr className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)]">
                  <td className="p-4 text-white font-bold">101+ (Super Affiliate)</td>
                  <td className="p-4 text-white font-bold">₱1,500,001+</td>
                  <td className="p-4 text-right font-bold text-[var(--color-brand-neon-jade)] text-xl">55%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-white mt-12 mb-4">How Net Revenue is Calculated</h3>
          <p>
            Your commission is calculated based on <em>Net Revenue</em>, not total deposits. 
            <br/><br/>
            <strong>Net Revenue = Total Bets - Total Wins - Player Bonuses - Admin Fees</strong>
          </p>
          <p>
            If your referred players lose more than they win in a given period, you earn your percentage of that net loss. 
            If a player hits a massive jackpot and your net revenue goes negative for the week, <em>negative balances do not carry over</em> to the next month. You always get a fresh start.
          </p>

          <div className="mt-12 text-center">
            <Link href="/100-jili-agent-login" className="inline-flex px-8 py-4 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg text-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors">
              Start Earning 55% Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
