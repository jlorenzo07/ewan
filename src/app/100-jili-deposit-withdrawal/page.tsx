import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Wallet, CreditCard, Banknote, ShieldCheck, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI Deposit & Withdrawal | Secure Banking in the Philippines",
  description: "Learn how to deposit and withdraw securely at 100 JILI Casino. We support GCash, PayMaya, and local bank transfers with ultra-fast payout speeds.",
};

export default function Hub6PillarPage() {
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
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the minimum deposit at 100 JILI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The minimum deposit varies by method, but it is generally 100 PHP for e-wallets like GCash and PayMaya."
        }
      },
      {
        "@type": "Question",
        "name": "How long do withdrawals take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Withdrawals via GCash and PayMaya are typically processed in under 5 minutes. Bank transfers may take 1-2 business days."
        }
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={faqSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-20 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <Wallet className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            100 JILI Banking: Deposit & Withdrawal
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-brand-slate)] mb-10 max-w-3xl mx-auto">
            Manage your funds with confidence. 100 JILI provides secure, localized, and ultra-fast payment 
            solutions tailored for Filipino players.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2 prose prose-invert max-w-none text-[var(--color-brand-slate)]">
            <h2 className="text-3xl font-bold text-white mt-0">Secure and Instant Banking</h2>
            <p className="text-lg leading-relaxed">
              We understand that moving money online requires absolute trust. At <strong>100 JILI Casino</strong>, we have 
              integrated the most popular and secure payment gateways in the Philippines. Every transaction is guarded 
              by 128-bit SSL encryption, ensuring your financial data never falls into the wrong hands.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-6">Supported Payment Methods</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-xl flex items-center gap-4">
                <Smartphone className="w-10 h-10 text-blue-400" />
                <div>
                  <h4 className="text-xl font-bold text-white m-0">GCash</h4>
                  <p className="text-sm m-0">Instant Deposits & Fast Payouts</p>
                </div>
              </div>
              <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-xl flex items-center gap-4">
                <CreditCard className="w-10 h-10 text-green-400" />
                <div>
                  <h4 className="text-xl font-bold text-white m-0">PayMaya (Maya)</h4>
                  <p className="text-sm m-0">Secure E-Wallet Transfers</p>
                </div>
              </div>
              <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-xl flex items-center gap-4">
                <Banknote className="w-10 h-10 text-yellow-500" />
                <div>
                  <h4 className="text-xl font-bold text-white m-0">Bank Transfer</h4>
                  <p className="text-sm m-0">BDO, BPI, UnionBank, Metrobank</p>
                </div>
              </div>
              <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-xl flex items-center gap-4">
                <ShieldCheck className="w-10 h-10 text-purple-400" />
                <div>
                  <h4 className="text-xl font-bold text-white m-0">USDT / Crypto</h4>
                  <p className="text-sm m-0">Anonymous & Uncapped</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">Deposit Process Overview</h3>
            <p>
              Making a deposit is instant and fee-free on our end. Simply log into your account, click the "Deposit" button, 
              select your preferred method (like GCash), enter the amount, and follow the on-screen prompts to authorize the payment. 
              The funds will reflect in your casino wallet within seconds.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">Withdrawal Process Overview</h3>
            <p>
              We pride ourselves on our <Link href="/100-jili-payout-speed" className="text-[var(--color-brand-neon-jade)]">lightning-fast payout speed</Link>. 
              Before requesting your first withdrawal, ensure you have completed the mandatory KYC identity verification. 
              Also, check that any active bonus wagering requirements have been fully met, otherwise the withdrawal may be rejected.
            </p>
            
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">What is the minimum deposit at 100 JILI?</h4>
                <p>The minimum deposit varies by method, but it is generally 100 PHP for e-wallets like GCash and PayMaya.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">How long do withdrawals take?</h4>
                <p>Withdrawals via GCash and PayMaya are typically processed in under 5 minutes. Bank transfers may take 1-2 business days.</p>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Detailed Banking Guides</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/100-jili-gcash-deposit" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">GCash Deposit Guide</span>
                  </Link>
                </li>
                <li>
                  <Link href="/100-jili-gcash-withdrawal" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">GCash Withdrawal Guide</span>
                  </Link>
                </li>
                <li>
                  <Link href="/100-jili-paymaya" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">Using PayMaya</span>
                  </Link>
                </li>
                <li>
                  <Link href="/100-jili-payout-speed" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">Payout Speed Facts</span>
                  </Link>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-[var(--color-brand-light-navy)]">
                 <Link href="/100-jili-bonus" className="text-[var(--color-brand-neon-jade)] hover:underline text-sm font-bold block">
                   &rarr; Don't forget to claim a bonus with your deposit!
                 </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
