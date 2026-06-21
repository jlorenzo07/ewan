import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Anchor, Target, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI Fishing Game | Play Mega Fishing & Jackpot Fishing",
  description: "Experience the thrill of 100 JILI fishing games. Aim your cannons, shoot boss fish, and win massive coin multipliers in real-time multiplayer arenas.",
};

export default function SiloFishingPage() {
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
        "name": "100 JILI Fishing Games",
        "item": "https://100-jili.ph/100-jili-fishing-games"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <Anchor className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            100 JILI Fishing Games
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Take aim, fire, and reel in massive jackpots. Explore our action-packed multiplayer fishing arcades.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            Unlike traditional slots where you rely entirely on the spin of the reels, <strong>100 JILI Fishing Games</strong> introduce 
            a thrilling element of skill and strategy. Enter an underwater arena with other players, upgrade your cannons, and 
            strategically target high-value boss fish for enormous payouts.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Top Fishing Games at 100 JILI</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-xl">
              <Target className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mt-0 mb-2">Mega Fishing</h3>
              <p className="mb-0 text-sm">
                The absolute classic. Navigate through deep-sea trenches and hunt the elusive Mega Boss. Features special torpedo weapons and screen-clearing bomb fish.
              </p>
            </div>
            
            <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-xl">
              <Zap className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mt-0 mb-2">Jackpot Fishing</h3>
              <p className="mb-0 text-sm">
                Designed for high rollers, this variant offers massive progressive jackpots that trigger randomly when taking down specific golden targets.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Winning Strategies</h2>
          <p>Don't just shoot blindly. Follow these tips to maximize your ROI:</p>
          <ul className="space-y-2 m-0 pl-6 list-disc">
            <li><strong>Manage Your Ammo:</strong> Every shot costs money. Don't waste high-tier bullets on low-value swarms.</li>
            <li><strong>Steal the Last Hit:</strong> In multiplayer rooms, the player who lands the final blow gets the reward. Let others weaken the boss before you unleash your torpedoes.</li>
            <li><strong>Use Lock-On Features:</strong> Use the game's auto-lock mechanic to ensure your bullets ignore small fry and hit your intended high-value target.</li>
          </ul>

          <div className="mt-12 text-center">
            <Link href="/100-jili-register" className="inline-flex px-8 py-4 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg text-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors">
              Play Fishing Games Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
