import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { CreditCard, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI PayMaya (Maya) | Fast Deposits & Withdrawals",
  description: "Use PayMaya (Maya) for seamless casino banking at 100 JILI. A comprehensive guide on funding your account and cashing out via Maya.",
};

export default function SiloPayMayaPage() {
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
        "name": "100 JILI PayMaya",
        "item": "https://100-jili.ph/100-jili-paymaya"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-green-500 mb-6">
            <CreditCard className="w-8 h-8 text-green-500" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            100 JILI PayMaya (Maya) Banking
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            An excellent alternative to GCash. Enjoy fast, reliable, and secure transactions using your Maya wallet.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            As the digital banking landscape in the Philippines evolves, PayMaya (now simply known as <strong>Maya</strong>) 
            has emerged as a powerful e-wallet and digital banking solution. 100 JILI fully supports Maya for both deposits and withdrawals.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Why Use Maya at 100 JILI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
             <div className="p-6 bg-[var(--color-brand-navy)] rounded-xl border border-[var(--color-brand-light-navy)]">
                <Zap className="w-6 h-6 text-[var(--color-brand-neon-jade)] mb-2" />
                <h3 className="text-lg font-bold text-white mt-0 mb-2">High Success Rate</h3>
                <p className="text-sm mb-0">Maya transactions rarely experience downtime compared to traditional bank transfers.</p>
             </div>
             <div className="p-6 bg-[var(--color-brand-navy)] rounded-xl border border-[var(--color-brand-light-navy)]">
                <Zap className="w-6 h-6 text-[var(--color-brand-neon-jade)] mb-2" />
                <h3 className="text-lg font-bold text-white mt-0 mb-2">Zero Fees</h3>
                <p className="text-sm mb-0">100 JILI does not charge any processing fees for Maya deposits or withdrawals.</p>
             </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">How to Deposit via Maya</h2>
          <p>
            The process is virtually identical to GCash. Navigate to the Cashier, select "Deposit", choose "Maya/PayMaya", 
            and enter the desired amount. You will be redirected to the secure Maya gateway to authorize the payment using 
            your registered mobile number and password.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Withdrawing to Maya</h2>
          <p>
            When you're ready to cash out your jackpot, simply select Maya in the withdrawal section. Make sure your Maya 
            account name exactly matches your verified 100 JILI account name. Funds are usually credited within 5-10 minutes.
          </p>

          <div className="mt-12 text-center p-8 bg-[var(--color-brand-midnight)] border border-[var(--color-brand-light-navy)] rounded-2xl">
             <p className="mb-6 font-bold text-white">Ready to spin the reels?</p>
             <Link href="/100-jili-register" className="inline-flex px-8 py-3 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors">
              Deposit & Play Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
