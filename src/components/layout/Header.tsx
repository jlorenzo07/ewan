import Link from "next/link";
import Image from "next/image";
import { Menu, User, Gift, Trophy, Download, Wallet, Info } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-brand-light-navy)] bg-[var(--color-brand-midnight)]/90 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="100 JILI Casino Philippines - Official Logo"
            width={120}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          <Link href="/100-jili-casino-philippines" className="flex items-center gap-1 hover:text-[var(--color-brand-neon-jade)] transition-colors">
            <Info className="w-4 h-4" /> Overview
          </Link>
          <Link href="/100-jili-bonus" className="flex items-center gap-1 hover:text-[var(--color-brand-neon-jade)] transition-colors">
            <Gift className="w-4 h-4" /> Promotions
          </Link>
          <Link href="/100-jili-games" className="flex items-center gap-1 hover:text-[var(--color-brand-neon-jade)] transition-colors">
            <Trophy className="w-4 h-4" /> Games
          </Link>
          <Link href="/100-jili-app-download" className="flex items-center gap-1 hover:text-[var(--color-brand-neon-jade)] transition-colors">
            <Download className="w-4 h-4" /> App
          </Link>
          <Link href="/100-jili-deposit-withdrawal" className="flex items-center gap-1 hover:text-[var(--color-brand-neon-jade)] transition-colors">
            <Wallet className="w-4 h-4" /> Cashier
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="/100-jili-login"
            className="btn-login hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-md"
          >
            Login
          </a>
          <Link
            href="/100-jili-register"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold transition-colors bg-[#00FF88] hover:bg-[#00CC6A] rounded-md"
            style={{ color: "#0A192F" }}
          >
            <User className="w-4 h-4 mr-2" /> Register Now
          </Link>
          <button className="md:hidden p-2 text-[var(--color-brand-slate)] hover:text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
