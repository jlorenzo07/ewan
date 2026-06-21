import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { UserPlus, ArrowRight, Smartphone, Mail, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Register at 100 JILI Casino | Step-by-Step Guide",
  description: "Create your 100 JILI Casino account in under 2 minutes. Follow our comprehensive registration guide and claim your exclusive welcome bonus today.",
};

export default function Hub2PillarPage() {
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
        "name": "Register at 100 JILI",
        "item": "https://100-jili.ph/100-jili-register"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to register at 100 JILI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Registration takes less than 2 minutes. You only need to provide basic details like your phone number and create a secure password."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to verify my account immediately?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While you can deposit and play immediately after registration, you will need to verify your identity (KYC) before making your first withdrawal."
        }
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={faqSchema} />
      
      {/* Hero Section */}
      <section className="bg-[var(--color-brand-midnight)] py-20 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <UserPlus className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Register Your 100 JILI Account
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-brand-slate)] mb-10 max-w-3xl mx-auto">
            Join the fastest-growing online casino in the Philippines. Creating an account is fast, secure, and grants you instant access to thousands of games and exclusive bonuses.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article */}
          <article className="lg:col-span-2 prose prose-invert max-w-none text-[var(--color-brand-slate)]">
            <h2 className="text-3xl font-bold text-white mt-0">The Complete 100 JILI Registration Guide</h2>
            <p className="text-lg leading-relaxed">
              Ready to start winning? Registering at <strong>100 JILI Casino</strong> is incredibly straightforward. 
              We've optimized our sign-up process so you can go from visiting our site to spinning the reels in under two minutes. 
              This guide will walk you through the exact steps required to create a secure account, verify your identity, and claim your first bonus.
            </p>

            <h3 className="text-2xl font-bold text-white">Step 1: Navigate to the Registration Form</h3>
            <p>
              Click any of the green "Register Now" buttons on our website. This will direct you to our secure, 
              SSL-encrypted sign-up portal. Ensure you are on the official 100-jili.ph domain before proceeding.
            </p>

            <h3 className="text-2xl font-bold text-white">Step 2: Enter Your Details</h3>
            <p>
              You will need to provide accurate information to ensure seamless deposits and withdrawals later.
            </p>
            <ul className="space-y-4 m-0 pl-0 list-none my-6">
              <li className="flex items-start gap-4 p-4 bg-[var(--color-brand-navy)] rounded-lg">
                <Smartphone className="w-6 h-6 text-[var(--color-brand-neon-jade)] shrink-0" />
                <div>
                  <strong className="block text-white">Mobile Number</strong>
                  <span>Your active Philippine mobile number. This will be your primary account identifier and is required for OTP verification.</span>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 bg-[var(--color-brand-navy)] rounded-lg">
                <Lock className="w-6 h-6 text-[var(--color-brand-neon-jade)] shrink-0" />
                <div>
                  <strong className="block text-white">Secure Password</strong>
                  <span>Create a strong password containing letters, numbers, and symbols.</span>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 bg-[var(--color-brand-navy)] rounded-lg">
                <Mail className="w-6 h-6 text-[var(--color-brand-neon-jade)] shrink-0" />
                <div>
                  <strong className="block text-white">Referral Code (Optional)</strong>
                  <span>If you were referred by a friend, enter their code here to unlock mutual bonuses.</span>
                </div>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-white">Step 3: Verification (KYC)</h3>
            <p>
              While you can deposit immediately, we highly recommend completing the KYC (Know Your Customer) process right away. 
              This involves uploading a valid government ID. Completing KYC unlocks higher withdrawal limits and faster payout processing times.
            </p>

            <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] p-8 rounded-2xl text-center my-12">
              <h4 className="text-2xl font-bold text-white mb-4">Don't have an account yet?</h4>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg text-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors">
                Register Your Account <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">How long does it take to register at 100 JILI?</h4>
                <p>Registration takes less than 2 minutes. You only need to provide basic details like your phone number and create a secure password.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Do I need to verify my account immediately?</h4>
                <p>While you can deposit and play immediately after registration, you will need to verify your identity (KYC) before making your first withdrawal.</p>
              </div>
            </div>
          </article>

          {/* Sidebar Silo Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Registration Hub</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/100-jili-login" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">100 JILI Login Guide</span>
                    <span className="text-sm text-[var(--color-brand-slate)]">Having trouble logging in? Read this.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/100-jili-new-member" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">New Member Benefits</span>
                    <span className="text-sm text-[var(--color-brand-slate)]">See what awaits you after signing up.</span>
                  </Link>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-[var(--color-brand-light-navy)]">
                 <Link href="/100-jili-bonus" className="text-[var(--color-brand-neon-jade)] hover:underline text-sm font-bold flex items-center gap-1">
                   Explore Welcome Bonuses <ArrowRight className="w-4 h-4" />
                 </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
