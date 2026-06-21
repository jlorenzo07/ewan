import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { PlayCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Play 100 JILI Golden Empire | Megaways Slot Action",
  description: "Journey into the ancient ruins with Golden Empire at 100 JILI Casino. Enjoy up to 32,400 ways to win in this high-volatility, Megaways-style slot game.",
};

export default function SiloGoldenEmpirePage() {
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
        "name": "100 JILI Golden Empire",
        "item": "https://100-jili.ph/100-jili-golden-empire"
      }
    ]
  };

  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Golden Empire",
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
            100 JILI Golden Empire
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Discover up to 32,400 ways to win in this epic Aztec-themed Megaways adventure.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            <strong>Golden Empire</strong> is a visually stunning, high-volatility slot game offered at 100 JILI Casino. 
            Utilizing a dynamic reel structure similar to the famous "Megaways" mechanic, this game provides an ever-changing 
            number of ways to win on every single spin, capping out at an incredible 32,400 paylines.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Dynamic Reels & Wild Frames</h2>
          <p>
            The game consists of 6 main reels, with reels 2, 3, 4, and 5 having an extra row on top. Winning symbols 
            explode and trigger cascades. What makes Golden Empire special is the <strong>Golden Frame</strong> feature.
          </p>
          <ul className="space-y-2 m-0 pl-6 list-disc">
            <li>Certain symbols on the middle reels may land with a golden frame.</li>
            <li>If a golden-framed symbol is part of a win, it doesn't just disappear; it transforms into a Wild symbol for the next cascade.</li>
            <li>Multiple golden frames can result in a screen flooded with Wilds, leading to spectacular chain reactions.</li>
          </ul>

          <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-8 rounded-2xl my-8">
            <h3 className="text-xl font-bold text-white mt-0 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[var(--color-brand-neon-jade)]" />
              The Free Spins Feature
            </h3>
            <p className="mb-0">
              Landing 4 Scatter symbols (the Golden Temple) awards 8 free spins, with 2 extra spins for every additional Scatter. 
              During free spins, a persistent global win multiplier is activated. It starts at 1x and increases by 1 after every 
              cascading win. This multiplier does not reset between spins, allowing it to climb to astronomical heights by the 
              end of the bonus round.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link href="/100-jili-register" className="inline-flex px-8 py-4 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg text-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors shadow-[0_0_20px_rgba(0,255,136,0.4)]">
              Play Golden Empire Now <PlayCircle className="w-5 h-5 ml-2 inline-block" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
