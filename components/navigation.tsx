"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, Map, BookOpen } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const stateLinks = [
  { href: "/asya-hun", label: "Asya Hun Devleti", period: "MÖ 220 - MS 216" },
  { href: "/avrupa-hun", label: "Avrupa Hun Devleti", period: "375 - 469" },
  { href: "/gokturk", label: "Göktürk Devleti", period: "552 - 745" },
  { href: "/uygur", label: "Uygur Devleti", period: "744 - 840" },
  { href: "/karahanli", label: "Karahanlı Devleti", period: "840 - 1212" },
  { href: "/gazneli", label: "Gazneli Devleti", period: "963 - 1187" },
  { href: "/buyuk-selcuklu", label: "Büyük Selçuklu", period: "1037 - 1157" },
  {
    href: "/anadolu-selcuklu",
    label: "Anadolu Selçuklu",
    period: "1077 - 1308",
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg">
                T
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif font-semibold text-lg text-foreground">
                Tarih Portalı
              </span>
              <p className="text-xs text-muted-foreground">
                Türk Devletleri ve Göç Yolları
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/">
              <Button
                variant={pathname === "/" ? "secondary" : "ghost"}
                size="sm"
              >
                Ana Sayfa
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  <BookOpen className="w-4 h-4" />
                  Türk Devletleri
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-64">
                <DropdownMenuLabel>Türk Devletleri</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {stateLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      href={link.href}
                      className="flex justify-between w-full"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {link.period}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/goc-yollari">
              <Button
                variant={pathname === "/goc-yollari" ? "secondary" : "ghost"}
                size="sm"
                className="gap-1"
              >
                <Map className="w-4 h-4" />
                Göç Yolları
              </Button>
            </Link>
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={pathname === "/" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  Ana Sayfa
                </Button>
              </Link>

              <div className="py-2">
                <p className="px-4 text-sm font-medium text-muted-foreground mb-2">
                  Türk Devletleri
                </p>
                {stateLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant={pathname === link.href ? "secondary" : "ghost"}
                      className={cn(
                        "w-full justify-between text-sm",
                        pathname === link.href && "bg-secondary"
                      )}
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {link.period}
                      </span>
                    </Button>
                  </Link>
                ))}
              </div>

              <Link href="/goc-yollari" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={pathname === "/goc-yollari" ? "secondary" : "ghost"}
                  className="w-full justify-start gap-2"
                >
                  <Map className="w-4 h-4" />
                  Göç Yolları
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
