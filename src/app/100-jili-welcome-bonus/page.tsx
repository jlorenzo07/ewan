import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Sparkles, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI Welcome Bonus | Double Your First Deposit",
  description: "Claim the massive 100 JILI welcome bonus today. Get a 100% match on your first deposit and drastically increase your chances of winning big.",
};

export default function SiloWelcomeBonusPage() {
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
        "name": "100 JILI Welcome Bonus",
        "item": "https://100-jili.ph/100-jili-welcome-bonus"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <Sparkles className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The 100 JILI Welcome Bonus
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Double your playing power instantly. Claim a 100% match on your first deposit up to 5,000 PHP.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            Ready to make your first deposit? We are going to reward your commitment with a massive <strong>100% Welcome Bonus</strong>. 
            This means whatever amount you deposit, we will match it peso-for-peso in bonus credits.
          </p>

          <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-8 rounded-2xl my-12 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-white mt-0 mb-4">How it Works</h3>
              <ul className="space-y-2 m-0 pl-4 list-disc">
                <li>Deposit 500 PHP &rarr; Play with 1,000 PHP</li>
                <li>Deposit 1,000 PHP &rarr; Play with 2,000 PHP</li>
                <li>Deposit 5,000 PHP &rarr; Play with 10,000 PHP!</li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
               <TrendingUp className="w-32 h-32 text-[var(--color-brand-neon-jade)] opacity-50" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Maximizing Your Welcome Bonus</h2>
          <p>
            To get the most out of your welcome bonus, we recommend depositing the maximum amount you are comfortable with. 
            Since this is a one-time offer for your <em>first deposit only</em>, depositing 100 PHP will only yield a 100 PHP bonus. 
            If your budget allows, a larger initial deposit provides a much bigger cushion to survive slot volatility and chase massive multipliers.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Wagering Requirements</h3>
          <p>
            The 100% Welcome Bonus typically carries a fair turnover requirement (e.g., 15x or 20x the deposit + bonus amount). 
            Slot games usually contribute 100% to this requirement, while table games might contribute less. 
            Check the Promotion Center for the exact terms before applying.
          </p>

          <div className="mt-12 text-center">
            <Link href="/100-jili-register" className="inline-flex px-8 py-4 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg text-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors">
              Make Your First Deposit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
