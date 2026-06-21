import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Key, Unlock, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI Account Recovery | Reset Password & Unlock Account",
  description: "Lost access to your 100 JILI Casino account? Follow our guide to reset your password, unlock your account, and restore your access securely.",
};

export default function SiloAccountRecoveryPage() {
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
        "name": "100 JILI Customer Service",
        "item": "https://100-jili.ph/100-jili-customer-service"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "100 JILI Account Recovery",
        "item": "https://100-jili.ph/100-jili-account-recovery"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <Unlock className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            100 JILI Account Recovery
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Regain access to your account quickly and securely.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            Losing access to your casino account can be stressful, especially if you have funds in your wallet. 
            <strong>100 JILI</strong> has implemented secure protocols to help legitimate account owners recover their access 
            while keeping unauthorized users out.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Scenario 1: Forgotten Password</h2>
          <div className="p-6 bg-[var(--color-brand-navy)] rounded-xl border border-[var(--color-brand-light-navy)]">
             <p className="mt-0">If you simply forgot your password but still have access to your registered mobile number:</p>
             <ol className="list-decimal pl-6 space-y-2 mb-0">
               <li>Navigate to the <Link href="/100-jili-login" className="text-[var(--color-brand-neon-jade)]">Login Page</Link>.</li>
               <li>Click the "Forgot Password?" link below the login form.</li>
               <li>Enter your registered mobile number.</li>
               <li>Enter the OTP (One-Time Password) sent via SMS to your phone.</li>
               <li>Create and confirm your new secure password.</li>
             </ol>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Scenario 2: Account Locked</h2>
          <div className="p-6 bg-[var(--color-brand-navy)] rounded-xl border border-[var(--color-brand-light-navy)]">
             <p className="mt-0">
               Accounts are automatically locked after multiple failed login attempts to prevent brute-force hacking. 
               To unlock it, you cannot reset the password yourself.
             </p>
             <p className="mb-0">
               <strong>Action Required:</strong> Contact <Link href="/100-jili-live-chat" className="text-[var(--color-brand-neon-jade)]">Live Chat Support</Link>. 
               Inform the agent that your account is locked. They will ask you security questions (e.g., date of birth, last deposit amount) to verify your identity before unlocking it.
             </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Scenario 3: Lost Phone/Number</h2>
          <div className="p-6 bg-[var(--color-brand-navy)] rounded-xl border border-[var(--color-brand-light-navy)]">
             <div className="flex items-center gap-2 mb-4">
               <FileText className="w-6 h-6 text-yellow-500" />
               <h3 className="text-xl font-bold text-white m-0">Manual KYC Recovery</h3>
             </div>
             <p className="mt-0 mb-0">
               If you no longer have access to the phone number registered to your account, recovery is more complex. 
               You must contact Live Chat and initiate a <strong>Manual Account Recovery</strong>. You will be required to submit:
               <br/><br/>
               1. A photo of the valid government ID you used during initial KYC verification.<br/>
               2. A "selfie" holding that ID next to your face.<br/>
               3. Proof of a recent deposit (e.g., a GCash transaction receipt).
               <br/><br/>
               Once verified by our security team, we can update your registered phone number.
             </p>
          </div>
        </div>
      </section>
    </>
  );
}
