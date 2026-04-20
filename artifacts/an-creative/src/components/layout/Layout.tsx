import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

const SOCIAL = {
  instagram: "https://www.instagram.com/a7m.r3?igsh=MTdrMTdrcHIyOTQycw==",
  tiktok: "https://www.tiktok.com/@a7m.r4?_r=1&_t=ZS-95g0CFYu7tP",
  whatsapp: "https://wa.me/966572190784",
  email: "mailto:ahmedosamaqotyifan@gmail.com",
};

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "المتجر", href: "/store" },
    { label: "المدونة", href: "/blog" },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="A&N Creative"
              className="h-10 w-10 object-contain rounded-md mix-blend-multiply"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden font-bold text-xl text-primary tracking-tight">A&N Creative</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="default" className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
              <Link href="/store">تسوّق الآن</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 right-0 w-full bg-background border-b border-border p-4 flex flex-col gap-4 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 text-lg font-medium rounded-md ${
                  location === link.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-2 bg-primary rounded-full">
              <Link href="/store" onClick={() => setMobileMenuOpen(false)}>تسوّق الآن</Link>
            </Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="font-bold text-2xl text-primary">A&N Creative</span>
              </Link>
              <p className="text-muted-foreground max-w-sm leading-relaxed mb-6">
                استوديو إبداعي رقمي يقدّم منتجات رقمية متميزة وخدمات إبداعية احترافية للعلامات التجارية الحديثة.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary/15 hover:text-primary flex items-center justify-center text-muted-foreground transition-all"
                  aria-label="إنستغرام"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={SOCIAL.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary/15 hover:text-primary flex items-center justify-center text-muted-foreground transition-all"
                  aria-label="تيك توك"
                >
                  <TikTokIcon size={17} />
                </a>
                <a
                  href={SOCIAL.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-[#25D366]/15 hover:text-[#25D366] flex items-center justify-center text-muted-foreground transition-all"
                  aria-label="واتساب"
                >
                  <WhatsAppIcon size={18} />
                </a>
                <a
                  href={SOCIAL.email}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary/15 hover:text-primary flex items-center justify-center text-muted-foreground transition-all"
                  aria-label="البريد الإلكتروني"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">روابط سريعة</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">الرئيسية</Link></li>
                <li><Link href="/store" className="text-muted-foreground hover:text-primary transition-colors">المتجر</Link></li>
                <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">المدونة</Link></li>
              </ul>
            </div>

            {/* Legal + Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">قانوني وتواصل</h4>
              <ul className="space-y-3">
                <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">سياسة الخصوصية</Link></li>
                <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">شروط الخدمة</Link></li>
                <li><Link href="/refund-policy" className="text-muted-foreground hover:text-primary transition-colors">سياسة الاسترداد</Link></li>
                <li>
                  <a href={SOCIAL.email} className="text-muted-foreground hover:text-primary transition-colors break-all">
                    ahmedosamaqotyifan@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[#25D366] transition-colors"
                  >
                    تواصل عبر واتساب
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 A&N Creative. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-4 text-sm flex-wrap justify-center md:justify-end">
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">سياسة الخصوصية</Link>
              <span className="text-border">·</span>
              <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">شروط الخدمة</Link>
              <span className="text-border">·</span>
              <Link href="/refund-policy" className="text-muted-foreground hover:text-primary transition-colors">سياسة الاسترداد</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
