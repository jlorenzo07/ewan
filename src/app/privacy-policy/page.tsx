import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Privacy Policy | 100 JILI Casino",
  description: "100 JILI Casino Privacy Policy. How we protect, collect, and use your personal data securely.",
};

export default function PrivacyPolicyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - 100 JILI",
    "url": "https://100-jili.ph/privacy-policy"
  };

  return (
    <>
      <SchemaOrg schema={schema} />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-[var(--color-brand-slate)] space-y-6">
          <p className="text-sm">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
          <p>
            When you register an account with 100 JILI Casino, we collect personal information such as your name, 
            email address, phone number, and date of birth. We also collect transactional data when you make deposits 
            or withdrawals, and technical data such as your IP address and device information.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Your Data</h2>
          <p>
            We use your personal data to manage your account, process transactions, verify your identity (KYC), 
            and provide customer support. We may also use your data to send you promotional offers, provided you 
            have opted in to receive such communications.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Data Security</h2>
          <p>
            We employ industry-standard security measures, including 128-bit SSL encryption, to protect your personal 
            and financial information from unauthorized access, disclosure, or modification. Your data is stored on 
            secure servers protected by advanced firewall technology.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Sharing Your Information</h2>
          <p>
            We do not sell your personal data to third parties. We may share your information with trusted payment 
            processors, regulatory authorities (such as PAGCOR), and fraud prevention agencies strictly for the 
            purpose of operating our services and complying with legal obligations.
          </p>
        </div>
      </div>
    </>
  );
}
