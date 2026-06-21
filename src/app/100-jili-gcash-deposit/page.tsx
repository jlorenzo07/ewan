import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Smartphone, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI GCash Deposit Guide | Fund Your Account Instantly",
  description: "Learn how to make a fast and secure GCash deposit at 100 JILI Casino. Step-by-step instructions to fund your account and start playing in seconds.",
};

export default function SiloGCashDepositPage() {
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
        "name": "100 JILI GCash Deposit",
        "item": "https://100-jili.ph/100-jili-gcash-deposit"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-blue-500 mb-6">
            <Smartphone className="w-8 h-8 text-blue-500" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            100 JILI GCash Deposit Guide
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            The easiest and fastest way to fund your 100 JILI account.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            GCash is the undisputed king of e-wallets in the Philippines. At <strong>100 JILI</strong>, we have fully 
            integrated the GCash API to ensure that your deposits are processed in real-time, 24 hours a day, 7 days a week.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Step-by-Step GCash Deposit</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] rounded-xl">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold shrink-0">1</div>
              <div>
                <h3 className="text-lg font-bold text-white mt-0 mb-2">Log into 100 JILI</h3>
                <p className="mb-0 text-sm">Access your account and navigate to the "Deposit" section in the Cashier menu.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] rounded-xl">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold shrink-0">2</div>
              <div>
                <h3 className="text-lg font-bold text-white mt-0 mb-2">Select GCash</h3>
                <p className="mb-0 text-sm">Choose GCash from the list of available payment methods. Ensure your GCash account has sufficient funds.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] rounded-xl">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold shrink-0">3</div>
              <div>
                <h3 className="text-lg font-bold text-white mt-0 mb-2">Enter Amount</h3>
                <p className="mb-0 text-sm">Input the amount you wish to deposit (Minimum: 100 PHP) and click "Submit".</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] rounded-xl">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold shrink-0">4</div>
              <div>
                <h3 className="text-lg font-bold text-white mt-0 mb-2">Authorize Payment</h3>
                <p className="mb-0 text-sm">You will be securely redirected to the GCash portal. Log in with your mobile number and MPIN to confirm the transaction.</p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-brand-midnight)] border border-yellow-500/50 p-6 rounded-xl mt-12">
             <h3 className="text-xl font-bold text-white mt-0 mb-2 flex items-center gap-2">
               <ShieldCheck className="w-5 h-5 text-yellow-500" />
               Important Security Note
             </h3>
             <p className="mb-0 text-sm">
               Never share your GCash MPIN or OTP with anyone, including 100 JILI customer support. The payment authorization 
               is done exclusively through the official GCash gateway interface.
             </p>
          </div>

          <div className="mt-12 text-center">
            <Link href="/100-jili-register" className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg text-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors">
              Make a Deposit Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
