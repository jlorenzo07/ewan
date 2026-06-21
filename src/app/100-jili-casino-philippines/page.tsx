import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { CheckCircle2, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI Casino Philippines | The Ultimate iGaming Experience",
  description: "Discover why 100 JILI Casino Philippines is the top choice for online slots, live dealer games, and secure payouts. Register now and claim your welcome bonus.",
};

export default function Hub1PillarPage() {
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
        "name": "100 JILI Casino Philippines",
        "item": "https://100-jili.ph/100-jili-casino-philippines"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is 100 JILI Casino legit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, 100 JILI Casino is 100% legitimate and holds a valid gaming license from PAGCOR, ensuring a safe and regulated gaming environment for all players in the Philippines."
        }
      },
      {
        "@type": "Question",
        "name": "What games can I play at 100 JILI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can play a wide variety of games including popular online slots like Super Ace and Golden Empire, live casino games such as Baccarat and Roulette, and various fishing arcade games."
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            100 JILI Casino Philippines: <br />
            <span className="text-[var(--color-brand-neon-jade)]">The Premier Gaming Hub</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-brand-slate)] mb-10 max-w-3xl mx-auto">
            Experience the thrill of Vegas from the comfort of your home. 100 JILI offers the most extensive 
            collection of top-rated slots, immersive live dealer tables, and secure, lightning-fast payouts 
            exclusively tailored for the Philippine market.
          </p>
          <Link href="/100-jili-register" className="inline-flex px-8 py-4 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg text-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors shadow-[0_0_20px_rgba(0,255,136,0.4)]">
            Register Now
          </Link>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article */}
          <article className="lg:col-span-2 prose prose-invert max-w-none text-[var(--color-brand-slate)]">
            <h2 className="text-3xl font-bold text-white mt-0">Why 100 JILI is the Top Choice for Filipinos</h2>
            <p className="text-lg leading-relaxed">
              In the rapidly expanding world of online gambling, finding a trustworthy and exciting platform can be challenging. 
              <strong>100 JILI Casino Philippines</strong> rises above the competition by delivering a uniquely localized experience 
              that prioritizes security, game variety, and massive rewards. Whether you are a casual spinner or a high-roller 
              at the Baccarat tables, our platform is engineered to meet your exact needs.
            </p>

            <h3 className="text-2xl font-bold text-white">A World-Class Game Library</h3>
            <p>
              We have partnered with the industry's leading software providers to bring you a meticulously curated selection of games. 
              From the high-octane action of fishing games to the strategic depth of live blackjack, the variety is truly unmatched. 
              Our slot selection features titles with high Return to Player (RTP) rates, meaning your chances of securing a massive 
              jackpot are higher than ever.
            </p>

            <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-xl my-8">
              <h4 className="text-xl font-bold text-white mt-0 mb-4">Core Platform Highlights</h4>
              <ul className="space-y-3 m-0 pl-0 list-none">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-neon-jade)] shrink-0" />
                  <span><strong>Lightning Fast Payouts:</strong> Withdraw your winnings in minutes, not days. We support GCash and PayMaya.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-neon-jade)] shrink-0" />
                  <span><strong>Mobile Optimized:</strong> A flawless experience on both Android and iOS devices.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-neon-jade)] shrink-0" />
                  <span><strong>Generous Bonuses:</strong> Daily, weekly, and monthly promotions to boost your bankroll.</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-white">Uncompromising Security and Legitimacy</h3>
            <p>
              Player safety is our paramount concern. We operate under a strict regulatory framework and utilize state-of-the-art 
              encryption to ensure your data and funds are always secure. Our commitment to fair play is absolute, with all 
              games regularly audited by independent testing agencies.
            </p>
            
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Is 100 JILI Casino legit?</h4>
                <p>Yes, 100 JILI Casino is 100% legitimate and holds a valid gaming license from PAGCOR, ensuring a safe and regulated gaming environment for all players in the Philippines.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">What games can I play at 100 JILI?</h4>
                <p>You can play a wide variety of games including popular online slots like Super Ace and Golden Empire, live casino games such as Baccarat and Roulette, and various fishing arcade games.</p>
              </div>
            </div>
          </article>

          {/* Sidebar Silo Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-[var(--color-brand-neon-jade)]" />
                Deep Dive: 100 JILI
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/100-jili-legit-review" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">Is 100 JILI Legit?</span>
                    <span className="text-sm text-[var(--color-brand-slate)]">Read our comprehensive trust review.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/100-jili-pagcor-license" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">PAGCOR License Details</span>
                    <span className="text-sm text-[var(--color-brand-slate)]">Verify our regulatory compliance.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/100-jili-vs-competitors" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">100 JILI vs Competitors</span>
                    <span className="text-sm text-[var(--color-brand-slate)]">See how we stack up against the rest.</span>
                  </Link>
                </li>
              </ul>
              
              <div className="mt-8">
                 <Link href="/100-jili-deposit-withdrawal" className="text-[var(--color-brand-neon-jade)] hover:underline text-sm font-bold">
                   &rarr; Learn about our Fast GCash Payouts
                 </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
