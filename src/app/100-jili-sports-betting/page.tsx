import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Activity, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI Sports Betting | PBA, NBA & Esports Odds",
  description: "Bet on your favorite sports at 100 JILI Casino. Enjoy competitive odds, live in-play betting, and vast coverage of NBA, PBA, and major esports events.",
};

export default function SiloSportsBettingPage() {
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "100 JILI Sports Betting",
        "item": "https://100-jili.ph/100-jili-sports-betting"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <Trophy className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            100 JILI Sports Betting
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Take your game to the next level with our comprehensive sportsbook offering the best odds in the Philippines.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            While we are famous for our casino games, the <strong>100 JILI Sportsbook</strong> provides a world-class sports betting 
            experience. Powered by industry-leading odds providers, we offer thousands of pre-match and live betting markets every single day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mt-0 mb-4">Basketball Betting</h3>
              <p className="mb-0 text-sm leading-relaxed">
                Basketball is the heart of Philippine sports. We offer extensive coverage of the <strong>PBA</strong> (Philippine Basketball Association) 
                and the <strong>NBA</strong>. Bet on point spreads, over/under totals, player props, and futures.
              </p>
            </div>

            <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mt-0 mb-4">Esports Action</h3>
              <p className="mb-0 text-sm leading-relaxed">
                Get in on the rapidly growing esports scene. We provide live odds for major tournaments in <strong>Dota 2, Mobile Legends: Bang Bang (MLBB), 
                League of Legends, and CS:GO</strong>.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Live In-Play Betting</h2>
          <p>
            Don't just bet before the game; bet <em>during</em> the game. Our <strong className="text-[var(--color-brand-neon-jade)]"><Activity className="inline w-5 h-5 mx-1" />Live Betting interface</strong> allows you 
            to place wagers as the action unfolds on the court or pitch. Odds are updated in real-time based on the current score, momentum, and time remaining.
          </p>
          <p>
            We also offer early cash-out options on select matches, allowing you to secure a profit or minimize losses before the final whistle blows.
          </p>

          <div className="mt-12 text-center p-8 bg-[var(--color-brand-midnight)] border border-[var(--color-brand-neon-jade)] rounded-2xl shadow-[0_0_20px_rgba(0,255,136,0.1)]">
            <h3 className="text-2xl font-bold text-white mb-4">Claim Your Sports Bonus</h3>
            <p className="mb-6">New to sports betting? Claim our dedicated sports welcome bonus to boost your first deposit.</p>
            <Link href="/100-jili-register" className="inline-flex px-8 py-4 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg text-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors">
              Bet on Sports Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
