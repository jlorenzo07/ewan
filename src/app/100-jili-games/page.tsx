import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Gamepad2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI Games Philippines | Play Slots, Fishing & Live Casino",
  description: "Explore the massive library of 100 JILI games in the Philippines. Play blockbuster titles like Super Ace and Golden Empire, or dive into thrilling fishing games.",
};

export default function Hub4PillarPage() {
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
        "name": "100 JILI Games",
        "item": "https://100-jili.ph/100-jili-games"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the best games to play on 100 JILI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most popular games include JILI slots like Super Ace and Golden Empire, as well as interactive multiplayer fishing arcade games like Mega Fishing."
        }
      },
      {
        "@type": "Question",
        "name": "Can I play 100 JILI games for free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many of our slot games offer a 'Demo Mode' where you can play with virtual credits to learn the mechanics before betting real money."
        }
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={faqSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-20 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <Gamepad2 className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Explore 100 JILI Games
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-brand-slate)] mb-10 max-w-3xl mx-auto">
            Dive into the most diverse and rewarding game library in the Philippines. From high-RTP slots 
            to skill-based fishing games, your next big win is just a click away.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2 prose prose-invert max-w-none text-[var(--color-brand-slate)]">
            <h2 className="text-3xl font-bold text-white mt-0">A World of Entertainment Awaits</h2>
            <p className="text-lg leading-relaxed">
              At <strong>100 JILI Casino</strong>, we don't just host games; we curate an experience. By partnering directly 
              with premium providers like JILI, PG Soft, and Evolution, we ensure that our players have access to the highest 
              quality graphics, seamless gameplay, and certified fair RNG algorithms.
            </p>

            <h3 className="text-2xl font-bold text-white">Blockbuster JILI Slots</h3>
            <p>
              JILI is renowned for creating slot games that perfectly blend engaging themes with massive payout potential. 
              Titles like <Link href="/100-jili-super-ace" className="text-[var(--color-brand-neon-jade)]">Super Ace</Link> and <Link href="/100-jili-golden-empire" className="text-[var(--color-brand-neon-jade)]">Golden Empire</Link> feature cascading reels, 
              progressive multipliers, and free spin rounds that can trigger wins of up to 10,000x your bet.
            </p>

            <h3 className="text-2xl font-bold text-white">Interactive Fishing Games</h3>
            <p>
              Looking for something requiring more skill than a slot machine? Our <Link href="/100-jili-fishing-games" className="text-[var(--color-brand-neon-jade)]">Fishing Games</Link> 
              transform the casino experience into a multiplayer arcade shootout. Aim your cannons, choose your ammunition wisely, 
              and take down boss fish to claim massive coin bounties.
            </p>
            
            <h3 className="text-2xl font-bold text-white">Comprehensive Sports Betting</h3>
            <p>
              Take the action beyond the casino floor with our integrated <Link href="/100-jili-sports-betting" className="text-[var(--color-brand-neon-jade)]">Sportsbook</Link>. 
              Bet on the PBA, NBA, Premier League, and major esports tournaments with highly competitive odds and live in-play betting options.
            </p>
            
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">What are the best games to play on 100 JILI?</h4>
                <p>The most popular games include JILI slots like Super Ace and Golden Empire, as well as interactive multiplayer fishing arcade games like Mega Fishing.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Can I play 100 JILI games for free?</h4>
                <p>Yes, many of our slot games offer a 'Demo Mode' where you can play with virtual credits to learn the mechanics before betting real money.</p>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Game Categories</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/100-jili-super-ace" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">Super Ace</span>
                  </Link>
                </li>
                <li>
                  <Link href="/100-jili-golden-empire" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">Golden Empire</span>
                  </Link>
                </li>
                <li>
                  <Link href="/100-jili-fishing-games" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">Fishing Arcade</span>
                  </Link>
                </li>
                <li>
                  <Link href="/100-jili-sports-betting" className="block p-4 rounded-lg border border-[var(--color-brand-light-navy)] hover:border-[var(--color-brand-neon-jade)] hover:bg-[var(--color-brand-midnight)] transition-all">
                    <span className="block font-bold text-white mb-1">Sports Betting</span>
                  </Link>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-[var(--color-brand-light-navy)]">
                 <Link href="/100-jili-slots" className="text-[var(--color-brand-neon-jade)] hover:underline text-sm font-bold flex items-center gap-1">
                   View All Slots Hub <ArrowRight className="w-4 h-4" />
                 </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
