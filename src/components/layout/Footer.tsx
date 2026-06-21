import Link from "next/link";
import { ShieldCheck, AlertTriangle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-brand-light-navy)] bg-[var(--color-brand-midnight)] pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tighter text-white">
                100 <span className="text-[var(--color-brand-neon-jade)]">JILI</span>
              </span>
            </Link>
            <p className="text-[var(--color-brand-slate)] text-sm mb-4 max-w-md">
              100 JILI Casino Philippines is the premier destination for online gaming, offering a secure, fair, and exhilarating experience. Enjoy a vast selection of slots, live casino, and fishing games.
            </p>
            <div className="flex items-center gap-2 text-sm text-[var(--color-brand-white)]">
              <ShieldCheck className="w-5 h-5 text-[var(--color-brand-neon-jade)]" />
              <span>Official PAGCOR Licensed Operator</span>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-[var(--color-brand-slate)]">
              <li><Link href="/100-jili-casino-philippines" className="hover:text-[var(--color-brand-neon-jade)]">About 100 JILI</Link></li>
              <li><Link href="/100-jili-bonus" className="hover:text-[var(--color-brand-neon-jade)]">Promotions</Link></li>
              <li><Link href="/100-jili-games" className="hover:text-[var(--color-brand-neon-jade)]">Games Selection</Link></li>
              <li><Link href="/100-jili-deposit-withdrawal" className="hover:text-[var(--color-brand-neon-jade)]">Payment Methods</Link></li>
              <li><Link href="/100-jili-app-download" className="hover:text-[var(--color-brand-neon-jade)]">Download App</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Support & Legal</h3>
            <ul className="space-y-2 text-sm text-[var(--color-brand-slate)]">
              <li><Link href="/about" className="hover:text-[var(--color-brand-neon-jade)]">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-brand-neon-jade)]">Contact Us</Link></li>
              <li><Link href="/terms" className="hover:text-[var(--color-brand-neon-jade)]">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[var(--color-brand-neon-jade)]">Privacy Policy</Link></li>
              <li><Link href="/responsible-gaming" className="hover:text-[var(--color-brand-neon-jade)]">Responsible Gaming</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[var(--color-brand-light-navy)] pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 bg-[var(--color-brand-navy)] px-4 py-2 rounded-lg">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 font-bold text-white text-xs">21+</span>
            <p className="text-xs text-[var(--color-brand-slate)]">
              This site is strictly for players aged 21 and above.<br />
              <Link href="/responsible-gaming" className="text-[var(--color-brand-neon-jade)] hover:underline">Play Responsibly.</Link>
            </p>
          </div>
          <p className="text-xs text-[var(--color-brand-slate)] text-center md:text-right">
            &copy; {new Date().getFullYear()} 100 JILI Casino Philippines. All rights reserved.<br />
            Licensed and regulated by PAGCOR.
          </p>
        </div>
      </div>
    </footer>
  );
}
