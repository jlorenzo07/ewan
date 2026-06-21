import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Terms and Conditions | 100 JILI Casino",
  description: "Read the terms and conditions for playing at 100 JILI Casino Philippines. Important legal information regarding accounts, bonuses, and gameplay.",
};

export default function TermsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions - 100 JILI",
    "url": "https://100-jili.ph/terms"
  };

  return (
    <>
      <SchemaOrg schema={schema} />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms and Conditions</h1>
        <div className="prose prose-invert max-w-none text-[var(--color-brand-slate)] space-y-6">
          <p className="text-sm">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and registering an account with 100 JILI Casino Philippines, you agree to be bound by these 
            Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Account Registration & Eligibility</h2>
          <p>
            You must be at least 21 years of age to register an account and play for real money. Players must provide 
            accurate and up-to-date information during registration. Only one account is permitted per person, household, 
            IP address, and device.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Deposits and Withdrawals</h2>
          <p>
            All deposits must be made using a payment method registered in your own name. Withdrawals are subject to 
            verification procedures and must meet the minimum turnover requirements before they can be processed. 
            100 JILI reserves the right to withhold withdrawals if fraudulent activity is suspected.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Bonuses and Promotions</h2>
          <p>
            Bonuses are subject to specific wagering requirements as detailed in the promotion's terms. Bonus funds 
            cannot be withdrawn until the wagering requirements are fully met. 100 JILI reserves the right to cancel 
            any bonus or winnings if a player is found to be abusing the promotional offers.
          </p>
        </div>
      </div>
    </>
  );
}
