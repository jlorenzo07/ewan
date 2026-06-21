import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Crown, Gem, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI VIP Program | Exclusive High Roller Rewards",
  description: "Join the 100 JILI VIP Program. Climb the tiers to unlock higher daily rebates, dedicated account managers, and luxury gifts.",
};

export default function SiloVIPPage() {
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "100 JILI VIP Program",
        "item": "https://100-jili.ph/100-jili-vip"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-yellow-500 mb-6">
            <Crown className="w-8 h-8 text-yellow-500" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The 100 JILI VIP Club
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Loyalty pays off. Experience the pinnacle of online gaming with unparalleled VIP rewards and red-carpet service.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            The <strong>100 JILI VIP Program</strong> is our way of saying thank you to our most dedicated players. 
            The moment you make your first real-money bet, you begin earning loyalty points. As you accumulate points, 
            you ascend through our VIP tiers, unlocking increasingly lucrative rewards at every level.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">VIP Tiers and Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-[var(--color-brand-navy)] border border-slate-400 p-6 rounded-xl text-center">
              <Star className="w-10 h-10 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mt-0 mb-2">Silver Tier</h3>
              <p className="text-sm">0.5% Daily Slots Rebate<br/>Standard Support<br/>Monthly Bonus</p>
            </div>
            
            <div className="bg-[var(--color-brand-navy)] border border-yellow-400 p-6 rounded-xl text-center shadow-[0_0_15px_rgba(250,204,21,0.2)]">
              <Crown className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mt-0 mb-2">Gold Tier</h3>
              <p className="text-sm">0.8% Daily Slots Rebate<br/>Priority Withdrawals<br/>Birthday Bonus</p>
            </div>

            <div className="bg-[var(--color-brand-navy)] border border-purple-400 p-6 rounded-xl text-center">
              <Gem className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mt-0 mb-2">Diamond Tier</h3>
              <p className="text-sm">1.2% Daily Slots Rebate<br/>Dedicated VIP Manager<br/>Luxury Gifts & Event Invites</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Power of Daily Rebates</h2>
          <p>
            One of the most significant advantages of our VIP club is the <strong>Daily Cash Rebate</strong>. 
            Unlike bonuses that require turnover, rebates are pure cash added back to your account based on your total 
            bet volume, regardless of whether you win or lose. A high-tier VIP player generating large volume can earn 
            thousands of pesos every single day just in rebates.
          </p>

          <div className="mt-12 text-center">
            <Link href="/100-jili-register" className="inline-flex px-8 py-4 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg text-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors">
              Start Earning VIP Points
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
