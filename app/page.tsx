import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StateCard } from "@/components/state-card";
import { ArrowRight, Map, BookOpen, Clock } from "lucide-react";

const turkishStates = [
  {
    href: "/asya-hun",
    title: "Asya Hun Devleti",
    period: "MÖ 220 - MS 216",
    location: "Orta Asya",
    description:
      "Tarihte bilinen ilk büyük Türk devleti. Teoman tarafından kurulmuş, Mete Han döneminde en parlak çağını yaşamıştır.",
    emoji: "🏹",
  },
  {
    href: "/avrupa-hun",
    title: "Avrupa Hun Devleti",
    period: "375 - 469",
    location: "Avrupa",
    description:
      "Balamir önderliği altında Avrupa'ya göç eden Hunlar, Attila döneminde en güçlü dönemini yaşamıştır.",
    emoji: "⚔️",
  },
  {
    href: "/gokturk",
    title: "Göktürk Devleti",
    period: "552 - 745",
    location: "Orta Asya",
    description:
      "'Türk' adını kullanan ilk devlet. Orhun Kitabeleri ile Türk tarihine önemli bir miras bırakmıştır.",
    emoji: "🐺",
  },
  {
    href: "/uygur",
    title: "Uygur Devleti",
    period: "744 - 840",
    location: "Orta Asya",
    description:
      "Yerleşik hayata geçen ilk Türk devleti. Yazılı kültürü geliştiren ve ticaretle öne çıkan bir medeniyet kurmuşlardır.",
    emoji: "📜",
  },
  {
    href: "/karahanli",
    title: "Karahanlı Devleti",
    period: "840 - 1212",
    location: "Orta Asya",
    description:
      "İlk Müslüman Türk devleti. Kaşgarlı Mahmut'un Divanu Lugati't-Türk eseri bu dönemde yazılmıştır.",
    emoji: "🕌",
  },
  {
    href: "/gazneli",
    title: "Gazneli Devleti",
    period: "963 - 1187",
    location: "Afganistan - Hindistan",
    description:
      "Sultan unvanını kullanan ilk Türk devleti. Gazneli Mahmut döneminde en güçlü halini almıştır.",
    emoji: "👑",
  },
  {
    href: "/buyuk-selcuklu",
    title: "Büyük Selçuklu Devleti",
    period: "1037 - 1157",
    location: "İran - Anadolu",
    description:
      "1071 Malazgirt Zaferi ile Anadolu'nun kapılarını Türklere açmış, tarihin akışını değiştirmiştir.",
    emoji: "🦅",
  },
  {
    href: "/anadolu-selcuklu",
    title: "Anadolu Selçuklu Devleti",
    period: "1077 - 1308",
    location: "Anadolu",
    description:
      "Anadolu'da kurulan ilk Türk devleti. Konya başkentlik yapmış, zengin bir kültür mirası bırakmıştır.",
    emoji: "🏛️",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 pattern-overlay overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary mb-6">
              <Clock className="w-4 h-4" />
              MÖ 220&apos;den MS 1308&apos;e
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Türk Devletleri ve Göç Yolları
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
              Orta Asya&apos;nın engin bozkırlarından Anadolu&apos;nun verimli
              topraklarına uzanan destansı bir yolculuk. Bin yıllık Türk
              tarihini keşfetmeye hazır mısınız?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/asya-hun">
                <Button size="lg" className="gap-2">
                  <BookOpen className="w-5 h-5" />
                  Yolculuğa Başla
                </Button>
              </Link>
              <Link href="/goc-yollari">
                <Button variant="outline" size="lg" className="gap-2">
                  <Map className="w-5 h-5" />
                  Göç Yolları Haritası
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* States Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Türk Devletleri
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Tarih boyunca kurulan büyük Türk devletlerini kronolojik sırayla
                keşfet
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {turkishStates.map((state) => (
                <StateCard key={state.href} {...state} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Migration Routes CTA */}
      <section className="py-16 md:py-24 bg-muted/30 pattern-overlay">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
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
              <Button size="lg" className="gap-2">
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Tarih Zaman Çizelgesi
            </h2>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />
              <div className="space-y-8">
                {[
                  { year: "MÖ 220", event: "Asya Hun Devleti kuruldu" },
                  { year: "375", event: "Kavimler Göçü başladı" },
                  { year: "552", event: "Göktürk Devleti kuruldu" },
                  { year: "840", event: "Karahanlılar Müslümanlığı kabul etti" },
                  { year: "1040", event: "Dandanakan Savaşı" },
                  { year: "1071", event: "Malazgirt Zaferi" },
                ].map((item, index) => (
                  <div
                    key={item.year}
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
                    <div className="flex-1 pl-4 md:pl-0">
                      <span className="text-sm font-medium text-primary">
                        {item.year}
                      </span>
                      <p className="text-foreground font-medium mt-1">
                        {item.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
