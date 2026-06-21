import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Banknote, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI GCash Withdrawal | How to Cash Out Your Winnings",
  description: "Learn how to withdraw your winnings to GCash at 100 JILI Casino. Fast, secure, and hassle-free payouts straight to your mobile wallet.",
};

export default function SiloGCashWithdrawalPage() {
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
        "name": "100 JILI GCash Withdrawal",
        "item": "https://100-jili.ph/100-jili-gcash-withdrawal"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-blue-500 mb-6">
            <Banknote className="w-8 h-8 text-blue-500" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            100 JILI GCash Withdrawal
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Turn your casino wins into real cash in your GCash wallet in just a few minutes.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            Winning big on Super Ace is exciting, but securing your winnings is what really matters. 
            <strong>100 JILI</strong> makes withdrawing your funds to your GCash account incredibly simple and fast.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">How to Withdraw via GCash</h2>
          
          <ol className="list-decimal pl-6 space-y-4 mb-8">
            <li><strong>Login and Navigate:</strong> Go to the Cashier menu and select "Withdrawal".</li>
            <li><strong>Select GCash:</strong> Choose GCash as your payout method.</li>
            <li><strong>Enter Amount:</strong> Input the amount you want to withdraw. Ensure it meets the minimum withdrawal threshold.</li>
            <li><strong>Confirm Details:</strong> Verify that the GCash number displayed matches your own. We strictly process withdrawals to the GCash account bound to your profile.</li>
            <li><strong>Submit Request:</strong> Click submit. The funds will typically arrive in your GCash wallet within 5 minutes.</li>
          </ol>

          <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-8 rounded-2xl my-12">
            <h3 className="text-xl font-bold text-white mt-0 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              Common Withdrawal Issues to Avoid
            </h3>
            <ul className="space-y-3 m-0 pl-0 list-none">
              <li className="border-b border-[var(--color-brand-light-navy)] pb-3">
                <strong className="block text-white">1. Incomplete KYC</strong>
                <span className="text-sm">You must verify your identity by uploading an ID before making your first withdrawal.</span>
              </li>
              <li className="border-b border-[var(--color-brand-light-navy)] pb-3">
                <strong className="block text-white">2. Unmet Turnover Requirements</strong>
                <span className="text-sm">If you claimed a bonus, ensure you have reached the required betting volume before cashing out.</span>
              </li>
              <li className="pb-0">
                <strong className="block text-white">3. Third-Party GCash Accounts</strong>
                <span className="text-sm">For security and anti-money laundering compliance, you can only withdraw to a GCash account registered in your own name.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
