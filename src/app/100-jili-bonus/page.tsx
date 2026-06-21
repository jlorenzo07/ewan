import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Gift, Sparkles, Coins, Crown, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI Bonus Philippines | Claim The Best Casino Promotions",
  description: "Maximize your winnings with the best 100 JILI bonuses in the Philippines. Claim your welcome package, daily rebates, and VIP rewards today.",
};

export default function Hub3PillarPage() {
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
        "name": "100 JILI Bonus Philippines",
        "item": "https://100-jili.ph/100-jili-bonus"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I claim my 100 JILI bonus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply log into your account, navigate to the Promotion Center, and click 'Apply' on the bonus you wish to claim. Ensure you meet the minimum deposit requirements if applicable."
        }
      },
      {
        "@type": "Question",
        "name": "Are there wagering requirements for the bonuses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all bonuses come with specific wagering (turnover) requirements that must be met before withdrawing funds. Always check the terms of the specific promotion."
        }
      }
    ]
  };

  const promotions = [
    { title: "Free 100 PHP No Deposit", link: "/100-jili-free-100", icon: <Coins className="w-8 h-8 text-yellow-400" />, desc: "Register and verify your account to get 100 PHP instantly." },
    { title: "100% Welcome Bonus", link: "/100-jili-welcome-bonus", icon: <Sparkles className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />, desc: "We double your first deposit up to 5,000 PHP." },
    { title: "Promo Codes", link: "/100-jili-promo-code", icon: <Gift className="w-8 h-8 text-purple-400" />, desc: "Find exclusive codes for free spins and cashback." },
    { title: "VIP Rewards", link: "/100-jili-vip", icon: <Crown className="w-8 h-8 text-yellow-500" />, desc: "Unlock daily rebates and luxury prizes." },
  ];

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={faqSchema} />
      
      {/* Hero Section */}
      <section className="bg-[var(--color-brand-midnight)] py-20 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <Gift className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            The Ultimate 100 JILI Bonus Hub
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-brand-slate)] mb-10 max-w-3xl mx-auto">
            Boost your bankroll and extend your playtime with the most lucrative casino promotions in the Philippines. 
            From no-deposit sign-up bonuses to high-roller VIP rewards, we have an offer for every type of player.
          </p>
          <Link href="/100-jili-register" className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg text-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors shadow-[0_0_20px_rgba(0,255,136,0.4)]">
            Claim Your Bonus Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article */}
          <article className="lg:col-span-2 prose prose-invert max-w-none text-[var(--color-brand-slate)]">
            <h2 className="text-3xl font-bold text-white mt-0">Why Our Promotions Are Better</h2>
            <p className="text-lg leading-relaxed">
              At <strong>100 JILI Casino</strong>, we believe in fair, transparent, and genuinely rewarding promotions. 
              Unlike other casinos that hide behind impossible 40x turnover requirements, our bonuses are designed to 
              be achievable, allowing you to actually withdraw your winnings.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
              {promotions.map((promo, idx) => (
                <div key={idx} className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-2xl flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-[var(--color-brand-midnight)] rounded-full border border-[var(--color-brand-light-navy)]">
                    {promo.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mt-0 mb-2">{promo.title}</h3>
                  <p className="text-sm mb-4 text-[var(--color-brand-slate)]">{promo.desc}</p>
                  <Link href={promo.link} className="mt-auto text-[var(--color-brand-neon-jade)] font-bold hover:underline">
                    Read Details &rarr;
                  </Link>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-white">Understanding Turnover (Wagering) Requirements</h3>
            <p>
              A turnover requirement dictates how many times you must bet your bonus amount before it converts to withdrawable cash. 
              For example, if you claim a 100 PHP bonus with a 15x turnover, you must place 1,500 PHP worth of valid bets on slot games. 
              Always read the specific terms and conditions attached to every promotion.
            </p>
            
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">How do I claim my 100 JILI bonus?</h4>
                <p>Simply log into your account, navigate to the Promotion Center, and click 'Apply' on the bonus you wish to claim. Ensure you meet the minimum deposit requirements if applicable.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Are there wagering requirements for the bonuses?</h4>
                <p>Yes, all bonuses come with specific wagering (turnover) requirements that must be met before withdrawing funds. Always check the terms of the specific promotion.</p>
              </div>
            </div>
          </article>

          {/* Sidebar Silo Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Promotion Categories</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/100-jili-free-100" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">Free 100 PHP Guide</span>
                  </Link>
                </li>
                <li>
                  <Link href="/100-jili-welcome-bonus" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">Welcome Bonus Secrets</span>
                  </Link>
                </li>
                <li>
                  <Link href="/100-jili-promo-code" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">Active Promo Codes</span>
                  </Link>
                </li>
                <li>
                  <Link href="/100-jili-vip" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">VIP Club Benefits</span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
