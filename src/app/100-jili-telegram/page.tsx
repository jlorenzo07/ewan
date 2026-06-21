import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";
import { Send, Users, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "100 JILI Official Telegram | Join the Community",
  description: "Join the official 100 JILI Telegram channel. Get access to VIP support, exclusive promo codes, and connect with other players in the Philippines.",
};

export default function SiloTelegramPage() {
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
        "name": "100 JILI Customer Service",
        "item": "https://100-jili.ph/100-jili-customer-service"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "100 JILI Telegram",
        "item": "https://100-jili.ph/100-jili-telegram"
      }
    ]
  };

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      
      <section className="bg-[var(--color-brand-midnight)] py-16 border-b border-[var(--color-brand-light-navy)]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-navy)] border border-blue-400 mb-6">
            <Send className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Official 100 JILI Telegram
          </h1>
          <p className="text-lg text-[var(--color-brand-slate)] max-w-2xl mx-auto">
            Connect with our community, receive instant announcements, and grab exclusive Telegram-only promo codes.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-invert text-[var(--color-brand-slate)]">
          <p className="text-xl leading-relaxed text-white mb-8">
            While Live Chat is great for immediate technical support, the <strong>Official 100 JILI Telegram Channel</strong> 
            is where our community thrives. By subscribing to our Telegram, you ensure you never miss a flash sale, 
            a system maintenance update, or a massive jackpot announcement.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Why You Should Join</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
             <div className="p-6 bg-[var(--color-brand-navy)] rounded-xl border border-[var(--color-brand-light-navy)]">
                <Users className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-bold text-white mt-0 mb-2">Community Insights</h3>
                <p className="text-sm mb-0">See which slots are "hot" or "paying out" based on real-time community chatter.</p>
             </div>
             <div className="p-6 bg-[var(--color-brand-navy)] rounded-xl border border-[var(--color-brand-light-navy)]">
                <Send className="w-8 h-8 text-[var(--color-brand-neon-jade)] mb-3" />
                <h3 className="text-lg font-bold text-white mt-0 mb-2">Flash Promo Codes</h3>
                <p className="text-sm mb-0">We drop limited-use promo codes exclusively in Telegram. First come, first served!</p>
             </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">How to Join Safely</h2>
          
          <div className="bg-[var(--color-brand-midnight)] border border-red-500/50 p-6 rounded-xl my-8">
             <h3 className="text-xl font-bold text-white mt-0 mb-4 flex items-center gap-2">
               <ShieldAlert className="w-6 h-6 text-red-500" />
               Beware of Fake Telegram Groups
             </h3>
             <p className="mb-0 text-sm">
               Scammers often create fake groups pretending to be 100 JILI admins. <strong>Official 100 JILI staff will NEVER 
               ask you to send money directly to a personal GCash number via Telegram.</strong> All deposits MUST be made 
               through the Cashier on our official website. To ensure you join the correct channel, only click the Telegram 
               link provided on the official 100-jili.ph website.
             </p>
          </div>

          <div className="mt-12 text-center p-8 bg-[var(--color-brand-navy)] border border-[var(--color-brand-light-navy)] rounded-2xl">
             <Link href="#" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors">
              <Send className="w-5 h-5" /> Join Official Telegram Channel
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
