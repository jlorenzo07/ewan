import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { PlayCircle, Coins } from "lucide-react";

export const metadata: Metadata = {
  title: "Play 100 JILI Super Ace | High RTP Slot Game",
  description: "Play Super Ace, the most popular slot game at 100 JILI Casino. Master the cascading reels, trigger the golden cards, and win up to 1500x your bet.",
};

export default function SiloSuperAcePage() {
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
        "name": "100 JILI Super Ace",
        "item": "https://100-jili.ph/100-jili-super-ace"
      }
    ]
  };

  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Super Ace",
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web, Android, iOS",
    "publisher": {
      "@type": "Organization",
      "name": "JILI Games"
    }
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={gameSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            100 JILI Super Ace
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Experience the card-themed slot phenomenon that has taken the Philippines by storm.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            <strong>Super Ace</strong> is arguably the flagship title of JILI Games and a massive favorite among players at 
            100 JILI Casino. Its unique blend of playing card aesthetics, cascading reels, and escalating multipliers creates 
            an incredibly fast-paced and rewarding slot experience.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">How Super Ace Works</h2>
          <p>
            Unlike traditional slots, Super Ace uses a cascading "avalanche" mechanic. When you hit a winning combination, 
            the winning cards disappear, and new cards drop down from above to fill the gaps. This allows for consecutive 
            wins on a single spin.
          </p>
          <p>
            Furthermore, consecutive wins trigger the <strong>Combo Multiplier</strong>. With every successive cascade, 
            your win multiplier increases from 1x to 2x, 3x, and finally 5x.
          </p>

          <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-8 rounded-2xl my-8">
            <h3 className="text-xl font-bold text-white mt-0 mb-4 flex items-center gap-2">
              <Coins className="w-6 h-6 text-yellow-400" />
              The Golden Cards feature
            </h3>
            <p className="mb-0">
              Keep an eye out for the Golden Cards appearing on reels 2, 3, and 4. If a Golden Card is part of a winning 
              combination, it transforms into a "Joker" (Wild symbol) for the next cascade, drastically increasing your 
              chances of continuing the combo streak and reaching that 5x multiplier.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Free Spins Bonus Round</h2>
          <p>
            Landing three Scatter symbols anywhere on the reels triggers the Free Spins feature, awarding 10 free games. 
            During the Free Spins round, the base multiplier is doubled! The combo multiplier now progresses as 2x, 4x, 6x, and 10x, 
            creating the potential for absolutely massive payouts.
          </p>

          <div className="mt-12 text-center">
            <Link href="/100-jili-register" className="inline-flex px-8 py-4 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg text-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors shadow-[0_0_20px_rgba(0,255,136,0.4)]">
              Play Super Ace Now <PlayCircle className="w-5 h-5 ml-2 inline-block" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
