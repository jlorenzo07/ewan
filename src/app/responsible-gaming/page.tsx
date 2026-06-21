import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Responsible Gaming | 100 JILI Casino",
  description: "100 JILI Casino is committed to responsible gaming. Read our guidelines, access self-exclusion tools, and find support for problem gambling.",
};

export default function ResponsibleGamingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Responsible Gaming - 100 JILI",
    "url": "https://100-jili.ph/responsible-gaming"
  };

  return (
    <>
      <SchemaOrg schema={schema} />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Responsible Gaming</h1>
        <div className="prose prose-invert max-w-none text-[var(--color-brand-slate)] space-y-6">
          <div className="bg-red-900/20 border border-red-500/50 p-6 rounded-xl mb-8">
            <h2 className="text-xl font-bold text-white mt-0 mb-2">Strictly 21+ Only</h2>
            <p className="m-0">
              100 JILI Casino strictly prohibits underage gambling. You must be at least 21 years of age to 
              create an account and play. We perform rigorous KYC checks to verify the age of all our players.
            </p>
          </div>

          <p className="text-lg leading-relaxed">
            At 100 JILI Casino, we want your gaming experience to be enjoyable and entertaining. However, we also 
            understand that for some, gambling can become a problem. We are fully committed to promoting responsible 
            gaming and providing our players with the tools and resources needed to maintain control.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Maintaining Control</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gambling is a form of entertainment, not a way to make money.</li>
            <li>Never chase your losses.</li>
            <li>Only gamble with money you can afford to lose.</li>
            <li>Keep track of the time and money you spend playing.</li>
            <li>Do not gamble if you are under the influence of alcohol or drugs.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Self-Exclusion and Limits</h2>
          <p>
            If you feel that you are losing control, we offer several tools to help you take a break:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Deposit Limits:</strong> Set daily, weekly, or monthly limits on your deposits.</li>
            <li><strong>Time-Outs:</strong> Take a short break from playing for 24 hours up to 6 weeks.</li>
            <li><strong>Self-Exclusion:</strong> Request to have your account blocked for a minimum of 6 months up to indefinitely.</li>
          </ul>
          <p>
            To activate any of these tools, please contact our <Link href="/contact" className="text-[var(--color-brand-neon-jade)]">customer support team</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
