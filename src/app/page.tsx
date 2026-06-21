import Link from "next/link";
import Image from "next/image";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "100 JILI Casino",
    "url": "https://100-jili.ph/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://100-jili.ph/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "100 JILI Casino Philippines",
    "url": "https://100-jili.ph",
    "logo": "https://100-jili.ph/logo.png",
    "sameAs": [
      "https://www.facebook.com/100jili",
      "https://twitter.com/100jili"
    ]
  };

  return (
    <>
      <SchemaOrg schema={websiteSchema} />
      <SchemaOrg schema={orgSchema} />

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden bg-[#0A192F]">
        {/* Jade glow blob */}
        <div className="absolute inset-0 z-0">
          <div className="absolute left-0 top-0 w-[700px] h-[700px] bg-[#00FF88] rounded-full blur-[200px] opacity-10" />
        </div>

        <div className="container relative z-10 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 md:py-24">
          {/* Left – copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#233554] bg-[#112240] text-[#00FF88] text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-[#00FF88]" /> #1 Online Casino Philippines
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              The Ultimate<br />
              <span style={{ color: "#00FF88" }}>100 JILI</span> Casino<br />
              Experience
            </h1>
            <p className="text-lg text-[#8892B0] mb-10 max-w-lg">
              Play the best online slots, live casino, and fishing games in the Philippines. 
              Join 100 JILI today and claim your exclusive welcome bonus!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/100-jili-register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-[0_0_25px_rgba(0,255,136,0.45)] hover:shadow-[0_0_35px_rgba(0,255,136,0.6)] hover:scale-105 bg-[#00FF88]"
                style={{ color: "#0A192F" }}
              >
                Register & Play Now <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/100-jili-games"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-lg font-bold border border-[#233554] bg-[#112240] text-white hover:border-[#00FF88] hover:bg-[#112240] transition-all"
              >
                Explore Games
              </a>
            </div>
          </div>

          {/* Right – casino girl image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/aboutus.png"
              alt="100 JILI Casino Philippines – Play & Win"
              width={520}
              height={600}
              className="object-contain drop-shadow-2xl max-h-[560px] w-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── EXCLUSIVE FEATURES ── */}
      <section className="py-20 bg-[#112240]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Why Choose <span style={{ color: "#00FF88" }}>100 JILI</span>?
          </h2>
          <p className="text-center text-[#8892B0] mb-14 max-w-2xl mx-auto">
            Thousands of Filipino players trust 100 JILI for fair games, fast payouts, and unbeatable promotions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { img: "/excl-props.png", title: "JILI Slots", desc: "500+ premium slot titles" },
              { img: "/excl-return.png", title: "Jackpots", desc: "Massive must-hit prizes" },
              { img: "/excl-signIn.png", title: "Link Jackpot", desc: "Networked progressive wins" },
              { img: "/excl-event.png", title: "Daily Events", desc: "New tasks & rewards daily" },
              { img: "/excl-task.png", title: "VIP Trophy", desc: "Climb tiers, earn more" },
            ].map((feat, i) => (
              <div key={i} className="flex flex-col items-center text-center group p-5 rounded-2xl bg-[#0A192F] border border-[#233554] hover:border-[#00FF88] transition-all hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <Image src={feat.img} alt={feat.title} width={80} height={80} className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">{feat.title}</h3>
                <p className="text-[#8892B0] text-xs leading-tight">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GAMES SHOWCASE ── */}
      <section className="py-20 bg-[#0A192F]">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/ourgame_top.png"
              alt="100 JILI Casino Games – Slots, Fishing, Live Casino"
              width={600}
              height={420}
              className="object-contain drop-shadow-2xl rounded-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              World-Class Games<br />
              <span style={{ color: "#00FF88" }}>Built for Filipino Players</span>
            </h2>
            <p className="text-[#8892B0] text-lg mb-8 leading-relaxed">
              From blockbuster JILI slot titles like <strong className="text-white">Super Ace</strong> and <strong className="text-white">Golden Empire</strong> to 
              multiplayer fishing arcades and live dealer baccarat tables — our game library is curated 
              for maximum excitement and fair RTP.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Slot Games", value: "500+" },
                { label: "Live Tables", value: "80+" },
                { label: "Fishing Games", value: "20+" },
                { label: "Sports Markets", value: "1,000+" },
              ].map((stat, i) => (
                <div key={i} className="bg-[#112240] border border-[#233554] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold" style={{ color: "#00FF88" }}>{stat.value}</div>
                  <div className="text-[#8892B0] text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            <a
              href="/100-jili-games"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-colors bg-[#00FF88] hover:bg-[#00CC6A]"
              style={{ color: "#0A192F" }}
            >
              Browse All Games <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── HUBS NAVIGATION GRID ── */}
      <section className="py-20 bg-[#112240]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Explore 100 JILI</h2>
          <p className="text-center text-[#8892B0] mb-12">Everything you need to know about the Philippines' premier online casino.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Casino Review", link: "/100-jili-casino-philippines", desc: "Is 100 JILI legit? Full review.", icon: "/logo_jili_us-en.png" },
              { title: "Register & Login", link: "/100-jili-register", desc: "Create your account in 2 mins.", icon: "/excl-signIn.png" },
              { title: "Bonuses", link: "/100-jili-bonus", desc: "Claim your free 100 PHP.", icon: "/excl-return.png" },
              { title: "Games Library", link: "/100-jili-games", desc: "Super Ace & Golden Empire.", icon: "/excl-props.png" },
              { title: "App Download", link: "/100-jili-app-download", desc: "iOS & Android app.", icon: "/excl-event.png" },
              { title: "Banking", link: "/100-jili-deposit-withdrawal", desc: "GCash & PayMaya payouts.", icon: "/excl-task.png" },
              { title: "Support", link: "/100-jili-customer-service", desc: "24/7 live chat help.", icon: "/excl-props.png" },
              { title: "Affiliates", link: "/100-jili-affiliate", desc: "Earn up to 55% commission.", icon: "/excl-task.png" },
            ].map((hub, idx) => (
              <Link key={idx} href={hub.link} className="flex items-center gap-4 group p-5 rounded-2xl bg-[#0A192F] border border-[#233554] hover:border-[#00FF88] transition-all hover:shadow-[0_0_15px_rgba(0,255,136,0.15)]">
                <Image src={hub.icon} alt={hub.title} width={44} height={44} className="object-contain shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="text-base font-bold text-white mb-0.5 group-hover:text-[#00FF88] transition-colors">{hub.title}</h3>
                  <p className="text-[#8892B0] text-xs">{hub.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
