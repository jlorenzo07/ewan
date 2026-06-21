import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "About Us | 100 JILI Casino Philippines",
  description: "Learn more about 100 JILI Casino Philippines, our mission, PAGCOR licensing, and commitment to providing a fair and secure iGaming experience.",
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About 100 JILI Casino Philippines",
    "url": "https://100-jili.ph/about"
  };

  return (
    <>
      <SchemaOrg schema={schema} />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">About 100 JILI Casino</h1>
        <div className="prose prose-invert max-w-none text-[var(--color-brand-slate)]">
          <p className="text-lg leading-relaxed mb-6">
            Welcome to 100 JILI Casino Philippines, the nation's most trusted and exhilarating online gaming destination. 
            Established with a vision to redefine the iGaming landscape, we bring together cutting-edge technology, 
            a massive library of premium games, and unparalleled customer service to deliver an experience like no other.
          </p>
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Our Mission</h2>
          <p className="mb-6 leading-relaxed">
            Our mission is simple: to provide a secure, fair, and incredibly entertaining platform for Filipino players. 
            We believe that online gaming should be an enjoyable escape, which is why we've partnered with the world's 
            leading game developers, including JILI, to offer top-tier slots, fishing games, and live casino experiences.
          </p>
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Licensing & Security</h2>
          <p className="mb-6 leading-relaxed">
            Trust is the foundation of 100 JILI. We are fully licensed and regulated by the Philippine Amusement and Gaming 
            Corporation (PAGCOR), ensuring that our operations meet the highest standards of integrity and player protection. 
            Our platform utilizes advanced SSL encryption technology to safeguard your personal and financial information, 
            guaranteeing that every transaction is secure.
          </p>
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Commitment to Fair Play</h2>
          <p className="mb-6 leading-relaxed">
            Every game at 100 JILI Casino uses certified Random Number Generators (RNG) to ensure that outcomes are 
            completely random and fair. We are committed to transparency and provide our players with equal opportunities 
            to win big.
          </p>
        </div>
      </div>
    </>
  );
}
