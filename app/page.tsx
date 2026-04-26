import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StateCard } from "@/components/state-card";
import { HeroImage } from "@/components/hero-image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowRight, Map, BookOpen, Clock, Sparkles } from "lucide-react";

const turkishStates = [
  {
    href: "/asya-hun",
    title: "Asya Hun Devleti",
    period: "MÖ 220 - MS 216",
    location: "Orta Asya",
    description:
      "Tarihte bilinen ilk büyük Türk devleti. Teoman tarafından kurulmuş, Mete Han döneminde en parlak çağını yaşamıştır.",
    emoji: "🏹",
    image: "/images/asya-hun.jpg",
  },
  {
    href: "/avrupa-hun",
    title: "Avrupa Hun Devleti",
    period: "375 - 469",
    location: "Avrupa",
    description:
      "Balamir önderliği altında Avrupa'ya göç eden Hunlar, Attila döneminde en güçlü dönemini yaşamıştır.",
    emoji: "⚔️",
    image: "/images/avrupa-hun.jpg",
  },
  {
    href: "/gokturk",
    title: "Göktürk Devleti",
    period: "552 - 745",
    location: "Orta Asya",
    description:
      "'Türk' adını kullanan ilk devlet. Orhun Kitabeleri ile Türk tarihine önemli bir miras bırakmıştır.",
    emoji: "🐺",
    image: "/images/gokturk.jpg",
  },
  {
    href: "/uygur",
    title: "Uygur Devleti",
    period: "744 - 840",
    location: "Orta Asya",
    description:
      "Yerleşik hayata geçen ilk Türk devleti. Yazılı kültürü geliştiren ve ticaretle öne çıkan bir medeniyet kurmuşlardır.",
    emoji: "📜",
    image: "/images/uygur.jpg",
  },
  {
    href: "/karahanli",
    title: "Karahanlı Devleti",
    period: "840 - 1212",
    location: "Orta Asya",
    description:
      "İlk Müslüman Türk devleti. Kaşgarlı Mahmut'un Divanu Lugati't-Türk eseri bu dönemde yazılmıştır.",
    emoji: "🕌",
    image: "/images/karahanli.jpg",
  },
  {
    href: "/gazneli",
    title: "Gazneli Devleti",
    period: "963 - 1187",
    location: "Afganistan - Hindistan",
    description:
      "Sultan unvanını kullanan ilk Türk devleti. Gazneli Mahmut döneminde en güçlü halini almıştır.",
    emoji: "👑",
    image: "/images/gazneli.jpg",
  },
  {
    href: "/buyuk-selcuklu",
    title: "Büyük Selçuklu Devleti",
    period: "1037 - 1157",
    location: "İran - Anadolu",
    description:
      "1071 Malazgirt Zaferi ile Anadolu'nun kapılarını Türklere açmış, tarihin akışını değiştirmiştir.",
    emoji: "🦅",
    image: "/images/buyuk-selcuklu.jpg",
  },
  {
    href: "/anadolu-selcuklu",
    title: "Anadolu Selçuklu Devleti",
    period: "1077 - 1308",
    location: "Anadolu",
    description:
      "Anadolu'da kurulan ilk Türk devleti. Konya başkentlik yapmış, zengin bir kültür mirası bırakmıştır.",
    emoji: "🏛️",
    image: "/images/anadolu-selcuklu.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/home-portal.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 pattern-overlay" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 backdrop-blur-sm rounded-full text-sm text-primary mb-6 border border-primary/20">
              <Clock className="w-4 h-4" />
              MÖ 220&apos;den MS 1308&apos;e
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
              Türk Devletleri ve{" "}
              <span className="text-primary">Göç Yolları</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
              Orta Asya&apos;nın engin bozkırlarından Anadolu&apos;nun verimli
              topraklarına uzanan destansı bir yolculuk. Bin yıllık Türk
              tarihini keşfetmeye hazır mısınız?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/asya-hun">
                <Button size="lg" className="gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
                  <BookOpen className="w-5 h-5" />
                  Yolculuğa Başla
                </Button>
              </Link>
              <Link href="/goc-yollari">
                <Button variant="outline" size="lg" className="gap-2 backdrop-blur-sm">
                  <Map className="w-5 h-5" />
                  Göç Yolları Haritası
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Bar */}
      <section className="py-8 border-b border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "8", label: "Türk Devleti" },
              { value: "1500+", label: "Yıllık Tarih" },
              { value: "3", label: "Kıta" },
              { value: "∞", label: "Miras" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-primary font-serif">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* States Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-xs text-primary mb-4">
                <Sparkles className="w-3 h-3" />
                Kronolojik Sıralama
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Türk Devletleri
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Tarih boyunca kurulan büyük Türk devletlerini kronolojik sırayla
                keşfet
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {turkishStates.map((state, index) => (
                <ScrollReveal key={state.href} delay={index * 0.05} yOffset={20}>
                  <StateCard {...state} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Migration Routes CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542336391-ae2936d8efe4?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <Map className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Göç Yolları Haritası
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Türklerin Orta Asya&apos;dan Anadolu&apos;ya uzanan bin yıllık göç
              serüveni. Kavimler Göçü&apos;nden Malazgirt&apos;e kadar tüm
              tarihi güzergahlar.
            </p>
            <Link href="/goc-yollari">
              <Button size="lg" className="gap-2 shadow-lg shadow-primary/25">
                Haritayı İncele
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal yOffset={30}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Tarih Zaman Çizelgesi
              </h2>
            </ScrollReveal>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />
              <div className="space-y-8">
                {[
                  { year: "MÖ 220", event: "Asya Hun Devleti kuruldu", emoji: "🏹" },
                  { year: "375", event: "Kavimler Göçü başladı", emoji: "🌍" },
                  { year: "552", event: "Göktürk Devleti kuruldu", emoji: "🐺" },
                  { year: "840", event: "Karahanlılar Müslümanlığı kabul etti", emoji: "🕌" },
                  { year: "1040", event: "Dandanakan Savaşı", emoji: "⚔️" },
                  { year: "1071", event: "Malazgirt Zaferi", emoji: "🦅" },
                ].map((item, index) => (
                  <ScrollReveal key={item.year} delay={index * 0.1} yOffset={15}>
                    <div
                      className={`relative flex items-center gap-4 md:gap-8 ${
                        index % 2 === 0
                          ? "md:flex-row"
                          : "md:flex-row-reverse md:text-right"
                      }`}
                    >
                      <div
                        className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}
                      />
                      <div className="relative z-10 timeline-dot" />
                      <div className="flex-1 pl-4 md:pl-0 bg-card/50 backdrop-blur-sm rounded-lg p-3 border border-border/50">
                        <span className="text-sm font-medium text-primary">
                          {item.emoji} {item.year}
                        </span>
                        <p className="text-foreground font-medium mt-1">
                          {item.event}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
