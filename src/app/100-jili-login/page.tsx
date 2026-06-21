import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { LogIn, Key, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI Login | Secure Account Access",
  description: "Log in securely to your 100 JILI Casino account. Access your favorite games, manage your funds, and claim daily login bonuses.",
};

export default function SiloLoginPage() {
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "100 JILI Login",
        "item": "https://100-jili.ph/100-jili-login"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <LogIn className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Secure 100 JILI Login
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Access your account safely and securely to resume your gaming session.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <h2 className="text-2xl font-bold text-white mb-6">How to Log In to Your Account</h2>
          <p>
            Accessing your 100 JILI account is designed to be fast and frictionless, whether you are playing on a desktop 
            computer or through our dedicated mobile app. To login, simply:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mt-4 mb-8">
            <li>Click the "Login" button located at the top right corner of the screen.</li>
            <li>Enter the mobile number you used during registration.</li>
            <li>Input your secure password.</li>
            <li>Complete the brief CAPTCHA verification to prove you are human.</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Troubleshooting Login Issues</h2>
          
          <div className="space-y-6">
            <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mt-0 mb-2 flex items-center gap-2">
                <Key className="w-5 h-5 text-[var(--color-brand-neon-jade)]" />
                Forgot Password?
              </h3>
              <p className="mb-0">
                If you have forgotten your password, click the "Forgot Password" link on the login screen. You will be prompted 
                to enter your registered mobile number. We will send an SMS OTP (One-Time Password) to verify your identity, 
                after which you can securely reset your password.
              </p>
            </div>

            <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mt-0 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                Account Locked?
              </h3>
              <p className="mb-0">
                For your security, accounts are temporarily locked after multiple failed login attempts. If your account is locked, 
                please contact our 24/7 Live Chat support team. They will ask a few security questions to verify your identity and 
                unlock your account immediately.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-6 font-bold text-white">Don't have an account yet?</p>
            <Link href="/100-jili-register" className="px-8 py-3 border border-[var(--color-brand-neon-jade)] text-[var(--color-brand-neon-jade)] font-bold rounded-lg text-lg hover:bg-[var(--color-brand-neon-jade)] hover:text-[var(--color-brand-midnight)] transition-colors">
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
