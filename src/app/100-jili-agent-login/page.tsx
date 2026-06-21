import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { LogIn, Key, LayoutDashboard } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI Agent Login | Access Your Affiliate Dashboard",
  description: "Secure login portal for 100 JILI agents and affiliates. Track your referrals, monitor real-time revenue, and request commission payouts.",
};

export default function SiloAgentLoginPage() {
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
        "name": "100 JILI Agent Login",
        "item": "https://100-jili.ph/100-jili-agent-login"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-[var(--color-brand-neon-jade)] mb-6">
            <LayoutDashboard className="w-8 h-8 text-[var(--color-brand-neon-jade)]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            100 JILI Agent Login
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Access your secure affiliate dashboard to track your performance and withdraw your commissions.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8 text-center">
            The Agent Portal is separate from the standard player login. This dedicated backend system provides 
            granular analytics, real-time tracking, and marketing tools required to run your affiliate business effectively.
          </p>

          <div className="max-w-md mx-auto bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] p-8 rounded-2xl my-12 shadow-2xl">
             <h2 className="text-2xl font-bold text-white mt-0 mb-6 text-center">Agent Portal</h2>
             
             <div className="space-y-4">
                <div>
                   <label className="block text-sm font-bold text-[var(--color-brand-slate)] mb-1">Agent Username / ID</label>
                   <input type="text" placeholder="Enter Agent ID" className="w-full px-4 py-3 bg-[var(--color-brand-midnight)] border border-[var(--color-brand-light-navy)] rounded-lg focus:outline-none focus:border-[var(--color-brand-neon-jade)] text-white" disabled />
                </div>
                <div>
                   <label className="block text-sm font-bold text-[var(--color-brand-slate)] mb-1">Password</label>
                   <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-[var(--color-brand-midnight)] border border-[var(--color-brand-light-navy)] rounded-lg focus:outline-none focus:border-[var(--color-brand-neon-jade)] text-white" disabled />
                </div>
                <button className="w-full mt-4 flex justify-center items-center gap-2 px-8 py-3 bg-[var(--color-brand-neon-jade)] text-[var(--color-brand-midnight)] font-bold rounded-lg hover:bg-[var(--color-brand-dark-jade)] transition-colors opacity-80 cursor-not-allowed">
                  <LogIn className="w-5 h-5" /> Secure Login
                </button>
                <div className="text-center mt-4">
                   <p className="text-xs text-[var(--color-brand-slate)] mb-0 flex items-center justify-center gap-1">
                     <Key className="w-3 h-3" /> Note: This is a static demonstration portal.
                   </p>
                </div>
             </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Dashboard Features</h2>
          <ul className="space-y-2 m-0 pl-6 list-disc">
            <li><strong>Live Tracking:</strong> See clicks on your affiliate links update in real-time.</li>
            <li><strong>Player Analytics:</strong> View how many referred players registered, deposited, and their current activity status.</li>
            <li><strong>Commission Reports:</strong> Download detailed weekly breakdowns of Net Revenue and your calculated revenue share.</li>
            <li><strong>Link Generator:</strong> Create custom tracking links for different campaigns (e.g., one for your Facebook page, one for Telegram).</li>
          </ul>

        </div>
      </section>
    </>
  );
}
