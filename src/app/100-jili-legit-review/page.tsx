import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Is 100 JILI Legit? Honest Review 2024",
  description: "Wondering if 100 JILI Casino is legit? Read our in-depth review covering security, payouts, player feedback, and fair play guarantees.",
};

export default function SiloLegitReviewPage() {
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
        "name": "Is 100 JILI Legit?",
        "item": "https://100-jili.ph/100-jili-legit-review"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      {/* Hero Section */}
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <ShieldCheck className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Is 100 JILI Casino Legit? <br />
            <span className="text-[var(--color-brand-slate)] text-2xl md:text-3xl">Our Comprehensive Trust Review</span>
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed font-medium text-white mb-8">
            The short answer: Yes. 100 JILI Casino is a 100% legitimate and safe online gambling platform operating legally in the Philippines. 
            In an industry where scams are unfortunately common, we pride ourselves on absolute transparency and rock-solid security.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Hallmarks of a Legitimate Casino</h2>
          <p>
            When determining if an online casino is a scam or a safe bet, players should look for several key indicators. 
            Here is how 100 JILI passes every test with flying colors:
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Regulatory Compliance and Licensing</h3>
          <p>
            A rogue casino operates in the shadows. A legitimate casino proudly displays its credentials. 100 JILI operates 
            under the strict oversight of the Philippine Amusement and Gaming Corporation (PAGCOR). This means our operations, 
            financials, and game fairness are constantly monitored. You can learn more about our specific licensing on our 
            <Link href="/100-jili-pagcor-license" className="text-[var(--color-brand-neon-jade)] ml-1">PAGCOR License page</Link>.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Verified Payouts and Financial Security</h3>
          <p>
            The biggest complaint players have about scam sites is the inability to withdraw winnings. At 100 JILI, we process 
            thousands of secure transactions daily via trusted local partners like GCash, PayMaya, and major Philippine banks. 
            Our payout speeds are among the fastest in the industry, proving our financial stability and commitment to players.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Authentic Software Providers</h3>
          <p>
            Rigged games are the hallmark of a scam casino. 100 JILI only hosts games from globally recognized, audited software 
            studios (like JILI, Evolution Gaming, and Pragmatic Play). These studios use certified Random Number Generators (RNG) 
            to ensure that every spin, deal, and roll is mathematically fair and unpredictable.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Robust Data Protection</h3>
          <p>
            Your personal data is valuable. We employ enterprise-grade 128-bit SSL encryption to protect every piece of data 
            transmitted between your device and our servers. This is the same level of security used by major international banks.
          </p>

          <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-8 rounded-2xl mt-12 text-center">
            <h4 className="text-2xl font-bold text-white mb-4">Ready to play safely?</h4>
            <p className="mb-6">Join thousands of verified Filipino players who trust 100 JILI every day.</p>
            <Link href="/100-jili-register" className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg text-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors">
              Sign Up Securely <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
