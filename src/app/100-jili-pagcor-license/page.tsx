import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { CheckCircle2, FileText, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI PAGCOR License Details | Verified Philippine Casino",
  description: "Verify the PAGCOR licensing and regulatory compliance of 100 JILI Casino. Play with confidence on a legally sanctioned iGaming platform.",
};

export default function SiloPAGCORPage() {
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
        "name": "100 JILI PAGCOR License",
        "item": "https://100-jili.ph/100-jili-pagcor-license"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <FileText className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            100 JILI PAGCOR License
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Your safety and the integrity of our games are guaranteed by our strict adherence to Philippine law.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <h2 className="text-2xl font-bold text-white mb-6">What is PAGCOR?</h2>
          <p>
            The Philippine Amusement and Gaming Corporation (PAGCOR) is a government-owned and controlled corporation 
            established to regulate the gaming industry in the Philippines. A PAGCOR license is the gold standard 
            for any online casino operating within the country, ensuring that the operator adheres to rigorous 
            standards of fairness, transparency, and financial stability.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Our Regulatory Commitment</h2>
          <p>
            100 JILI Casino proudly operates under a valid license issued by PAGCOR. This licensing means that:
          </p>
          <ul className="space-y-4 list-none pl-0 mt-6">
            <li className="flex items-start gap-4 p-4 bg-[var(--color-brand-navy)] rounded-lg border border-[var(--color-brand-light-navy)]">
              <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-neon-jade)] shrink-0 mt-1" />
              <div>
                <strong className="block text-white mb-1">Player Funds are Segregated</strong>
                <span>Your deposits and winnings are held in secure, separate accounts from our operational funds, ensuring you can always be paid out.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 bg-[var(--color-brand-navy)] rounded-lg border border-[var(--color-brand-light-navy)]">
              <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-neon-jade)] shrink-0 mt-1" />
              <div>
                <strong className="block text-white mb-1">Games are Fair and Audited</strong>
                <span>All software and RNG algorithms are tested to ensure the return-to-player (RTP) percentages are accurate and fair.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 bg-[var(--color-brand-navy)] rounded-lg border border-[var(--color-brand-light-navy)]">
              <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-neon-jade)] shrink-0 mt-1" />
              <div>
                <strong className="block text-white mb-1">Responsible Gaming is Enforced</strong>
                <span>We strictly prohibit underage gambling and provide robust tools for self-exclusion and deposit limits.</span>
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Verify Our License</h2>
          <p>
            We believe in total transparency. Players can verify the active status of our regulatory compliance 
            by checking the official PAGCOR registry of approved offshore and domestic online gaming operators.
          </p>

          <div className="mt-12 flex justify-center">
            <Link href="/100-jili-register" className="px-8 py-4 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg text-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors text-center w-full sm:w-auto">
              Play Safely on 100 JILI
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
