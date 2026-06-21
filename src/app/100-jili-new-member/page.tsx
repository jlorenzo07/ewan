import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Gift, Award, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI New Member Benefits | Claim Your Welcome Package",
  description: "Discover the exclusive perks of being a new member at 100 JILI Casino. From free credits to first deposit matches, see what awaits you.",
};

export default function SiloNewMemberPage() {
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
        "name": "100 JILI New Member",
        "item": "https://100-jili.ph/100-jili-new-member"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <Gift className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            100 JILI New Member Benefits
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Your journey at 100 JILI begins with an explosive start. We treat our new members like VIPs from day one.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            Signing up at 100 JILI isn't just about creating an account; it's about unlocking a treasure trove of exclusive 
            promotions designed to maximize your initial bankroll and extend your playtime. Here is exactly what you get 
            the moment your registration is complete.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-8 rounded-2xl">
              <Award className="w-10 h-10 text-[var(--color-brand-neon-jade)] mb-4" />
              <h3 className="text-2xl font-bold text-white mt-0 mb-3">1. The Free 100 PHP No Deposit Bonus</h3>
              <p className="mb-0">
                To welcome you to the platform, we offer a risk-free 100 PHP bonus upon successful account verification. 
                You don't need to deposit a single peso to claim this. It's the perfect way to test out our slot machines 
                and get a feel for the interface before committing your own funds.
              </p>
            </div>

            <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-8 rounded-2xl">
              <Zap className="w-10 h-10 text-[var(--color-brand-neon-jade)] mb-4" />
              <h3 className="text-2xl font-bold text-white mt-0 mb-3">2. 100% First Deposit Match</h3>
              <p className="mb-0">
                When you are ready to make your first deposit, 100 JILI will double it. If you deposit 1,000 PHP, you will 
                receive an additional 1,000 PHP in bonus funds, giving you a total of 2,000 PHP to play with. This massive 
                boost significantly increases your chances of hitting a major jackpot.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">How to Claim Your New Member Perks</h2>
          <p>Claiming your benefits is fully automated:</p>
          <ol className="list-decimal pl-6 space-y-2 mt-4 mb-8">
            <li>Complete your <Link href="/100-jili-register" className="text-[var(--color-brand-neon-jade)]">registration process</Link>.</li>
            <li>Navigate to the 'Promotions' tab in your account dashboard.</li>
            <li>Select the "New Member Free 100" or "First Deposit Match" offer.</li>
            <li>Click "Apply". The funds will instantly be credited to your promo wallet.</li>
          </ol>

          <div className="mt-12 text-center bg-[var(--color-brand-midnight)] border border-[var(--color-brand-neon-jade)] p-8 rounded-2xl shadow-[0_0_20px_rgba(0,255,136,0.1)]">
            <h3 className="text-2xl font-bold text-white mb-4">Don't Miss Out!</h3>
            <p className="mb-6">These exclusive new member benefits are only available for a limited time after registration.</p>
            <Link href="/100-jili-register" className="inline-flex px-8 py-4 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg text-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors">
              Register Now & Claim
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
