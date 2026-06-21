import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Megaphone, Image as ImageIcon, Link as LinkIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI Affiliate Marketing Tools | Banners & Landing Pages",
  description: "Supercharge your conversions with official 100 JILI marketing tools. Access high-converting banners, landing pages, and promotional copy for your campaigns.",
};

export default function SiloMarketingToolsPage() {
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
        "name": "100 JILI Affiliate",
        "item": "https://100-jili.ph/100-jili-affiliate"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "100 JILI Marketing Tools",
        "item": "https://100-jili.ph/100-jili-marketing-tools"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <Megaphone className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            100 JILI Marketing Tools
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Everything you need to run successful affiliate campaigns. Pre-designed, optimized, and ready to convert.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            You don't need to be a professional graphic designer to succeed as a <strong>100 JILI Affiliate</strong>. 
            We provide our partners with a comprehensive library of high-converting marketing assets that you can download 
            directly from your agent dashboard.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Available Assets</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-xl">
              <ImageIcon className="w-8 h-8 text-[var(--color-brand-neon-jade)] mb-4" />
              <h3 className="text-xl font-bold text-white mt-0 mb-2">Banner Advertisements</h3>
              <p className="mb-0 text-sm">
                Professionally designed static and animated banners (GIF/HTML5) in all standard IAB sizes (e.g., 300x250, 728x90, 320x50). 
                Perfect for embedding on your blog or sports news website.
              </p>
            </div>
            
            <div className="bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-6 rounded-xl">
              <LinkIcon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mt-0 mb-2">Custom Landing Pages</h3>
              <p className="mb-0 text-sm">
                Don't just send traffic to the homepage. Generate links that direct players to specific landing pages optimized for 
                conversion, such as a dedicated "Claim Free 100" page or a "Super Ace Strategy" page.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Social Media Kits</h2>
          <p>
            If you acquire traffic primarily through social media (Facebook Groups, Telegram Channels, TikTok), we offer tailored kits that include:
          </p>
          <ul className="space-y-2 m-0 pl-6 list-disc">
            <li>High-resolution square images optimized for Instagram and Facebook feeds.</li>
            <li>Vertical video clips (Reels/TikToks) showcasing massive slot jackpots.</li>
            <li>Pre-written promotional text (copy) in Taglish highlighting our latest bonuses, complete with strategic emoji placement.</li>
          </ul>

          <div className="mt-12 text-center p-8 bg-[var(--color-brand-midnight)] border border-[var(--color-brand-light-navy)] rounded-2xl">
             <h3 className="text-xl font-bold text-white mb-4">Ready to start promoting?</h3>
             <Link href="/100-jili-agent-login" className="inline-flex px-8 py-3 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors">
              Access Marketing Dashboard
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
