"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QRCodeSVG } from "qrcode.react";
import {
  MapPin,
  Calendar,
  ArrowRight,
  Users,
  Compass,
  QrCode,
  Share2,
} from "lucide-react";

const migrationRoutes = [
  {
    id: "kavimler-gocu",
    title: "Kavimler Göçü",
    period: "375 - 568",
    description:
      "Hunların baskısıyla başlayan ve Avrupa'nın etnik yapısını değiştiren büyük göç dalgası.",
    route: "Orta Asya → Karadeniz kuzeyi → Avrupa",
    details: [
      "375 yılında Balamir önderliği altında başladı",
      "Got, Vandal, Frank gibi kavimleri itti",
      "Batı Roma İmparatorluğu'nun çöküşünü hızlandırdı",
      "Avrupa'nın bugünkü etnik yapısının temelini attı",
    ],
    color: "bg-red-500",
  },
  {
    id: "oguz-gocu",
    title: "Oğuz Göçü",
    period: "9. - 11. yüzyıl",
    description:
      "Oğuz Türklerinin Orta Asya'dan İran ve Anadolu'ya doğru gerçekleştirdiği göçler.",
    route: "Seyhun nehri → Horasan → İran → Anadolu",
    details: [
      "Oğuzlar, Selçuklu hanedanının mensup olduğu boydan gelir",
      "10. yüzyılda İslâm'ı kabul ettiler",
      "Gazneli ve Selçuklu devletlerinin kurulmasına yol açtı",
      "Anadolu'nun Türkleşmesinin temeli atıldı",
    ],
    color: "bg-amber-500",
  },
  {
    id: "malazgirt-sonrasi",
    title: "Malazgirt Sonrası Göçler",
    period: "1071 - 1200",
    description:
      "Malazgirt Zaferi sonrası Anadolu'ya yoğun Türk göçleri başlamıştır.",
    route: "İran → Doğu Anadolu → İç Anadolu → Batı Anadolu",
    details: [
      "1071 Malazgirt Zaferi Anadolu'nun kapılarını açtı",
      "Türk boylarının kitlesel göçleri başladı",
      "Köylere, kasabalara ve şehirlere yerleşim",
      "Anadolu'nun kalıcı olarak Türk yurdu haline gelmesi",
    ],
    color: "bg-emerald-500",
  },
  {
    id: "mogol-baskisi",
    title: "Moğol Baskısı Sonrası",
    period: "1220 - 1300",
    description:
      "Moğol istilası sonrası Orta Asya ve İran'dan Anadolu'ya yoğun göçler yaşanmıştır.",
    route: "Harezm → İran → Anadolu",
    details: [
      "Cengiz Han'ın fetihleri büyük göç dalgalarına yol açtı",
      "Âlimler, sanatçılar ve tüccarlar Anadolu'ya sığındı",
      "Anadolu Selçuklu kültürünün zenginleşmesi",
      "Tasavvuf ve edebiyatın gelişmesi",
    ],
    color: "bg-blue-500",
  },
];

const timelineEvents = [
  { year: "375", event: "Kavimler Göçü başladı", type: "migration" },
  { year: "552", event: "Göktürk Devleti kuruldu", type: "state" },
  { year: "840", event: "Uygur göçleri", type: "migration" },
  { year: "1040", event: "Dandanakan Savaşı", type: "battle" },
  { year: "1071", event: "Malazgirt Zaferi", type: "battle" },
  { year: "1077", event: "Anadolu Selçuklu kuruldu", type: "state" },
  { year: "1243", event: "Kösedağ Savaşı", type: "battle" },
];

export default function GocYollariPage() {
  const [selectedRoute, setSelectedRoute] = useState(migrationRoutes[0]);

  const handleShare = async () => {
    const url = "https://tarih-portali.vercel.app/goc-yollari";
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Türk Göç Yolları - Tarih Portalı",
          url: url,
        });
      } catch {
        // User cancelled
      }
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 pattern-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Compass className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Türk Göç Yolları
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              Orta Asya&apos;nın engin bozkırlarından Anadolu&apos;nun verimli
              topraklarına uzanan bin yıllık yolculuk. Türklerin dünya
              üzerindeki izleri.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <span className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <Calendar className="w-4 h-4 text-primary" />
                <span>375 - 1300</span>
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Asya&apos;dan Avrupa&apos;ya</span>
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <Users className="w-4 h-4 text-primary" />
                <span>Milyonlarca Türk</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Büyük Göç Hareketleri
            </h2>

            {/* Route Selector */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {migrationRoutes.map((route) => (
                <Button
                  key={route.id}
                  variant={selectedRoute.id === route.id ? "default" : "outline"}
                  className="h-auto py-3 px-4 flex flex-col items-start text-left"
                  onClick={() => setSelectedRoute(route)}
                >
                  <span className="font-medium text-sm">{route.title}</span>
                  <span className="text-xs opacity-70">{route.period}</span>
                </Button>
              ))}
            </div>

            {/* Selected Route Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Map Visualization */}
              <Card className="border-border bg-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="map-container aspect-[4/3] relative flex items-center justify-center">
                    <div className="absolute inset-0 p-6">
                      <svg
                        viewBox="0 0 400 300"
                        className="w-full h-full"
                        fill="none"
                      >
                        {/* Simplified map outline */}
                        <path
                          d="M50 150 C100 100, 200 80, 350 120"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          className="text-muted-foreground/30"
                        />

                        {/* Migration route line */}
                        <path
                          d="M80 140 C150 110, 250 100, 340 130"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-primary"
                          strokeLinecap="round"
                        >
                          <animate
                            attributeName="stroke-dasharray"
                            from="0,1000"
                            to="1000,0"
                            dur="2s"
                            fill="freeze"
                          />
                        </path>

                        {/* Start point */}
                        <circle
                          cx="80"
                          cy="140"
                          r="8"
                          className="fill-primary"
                        />
                        <text
                          x="80"
                          y="165"
                          textAnchor="middle"
                          className="fill-foreground text-xs font-medium"
                        >
                          Orta Asya
                        </text>

                        {/* End point */}
                        <circle
                          cx="340"
                          cy="130"
                          r="8"
                          className="fill-accent"
                        />
                        <text
                          x="340"
                          y="155"
                          textAnchor="middle"
                          className="fill-foreground text-xs font-medium"
                        >
                          {selectedRoute.id === "kavimler-gocu"
                            ? "Avrupa"
                            : "Anadolu"}
                        </text>

                        {/* Arrow */}
                        <polygon
                          points="330,125 345,130 330,135"
                          className="fill-primary"
                        />
                      </svg>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-background/90 backdrop-blur rounded-lg p-3 text-sm">
                        <p className="font-medium text-foreground">
                          {selectedRoute.route}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Route Information */}
              <div className="space-y-6">
                <Card className="border-border bg-card">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${selectedRoute.color} flex items-center justify-center`}
                      >
                        <Compass className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="font-serif text-xl">
                          {selectedRoute.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {selectedRoute.period}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {selectedRoute.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary mb-4">
                      <ArrowRight className="w-4 h-4" />
                      <span className="font-medium">{selectedRoute.route}</span>
                    </div>
                    <ul className="space-y-3">
                      {selectedRoute.details.map((detail, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Göç ve Kuruluş Zaman Çizelgesi
            </h2>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />
              <div className="space-y-6">
                {timelineEvents.map((item, index) => (
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
                    <div
                      className={`relative z-10 w-4 h-4 rounded-full border-2 border-background ${
                        item.type === "migration"
                          ? "bg-red-500"
                          : item.type === "battle"
                            ? "bg-amber-500"
                            : "bg-emerald-500"
                      }`}
                    />
                    <div className="flex-1 pl-4 md:pl-0">
                      <Card className="border-border bg-card">
                        <CardContent className="p-4">
                          <span className="text-xs font-medium text-primary">
                            {item.year}
                          </span>
                          <p className="text-foreground font-medium mt-1">
                            {item.event}
                          </p>
                          <span
                            className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full ${
                              item.type === "migration"
                                ? "bg-red-100 text-red-700"
                                : item.type === "battle"
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-emerald-100 text-emerald-700"
                            }`}
                          >
                            {item.type === "migration"
                              ? "Göç"
                              : item.type === "battle"
                                ? "Savaş"
                                : "Devlet"}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="border-border bg-card text-center">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                  <QrCode className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-serif">Bu Sayfayı Paylaş</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                <div className="qr-container">
                  <QRCodeSVG
                    value="https://tarih-portali.vercel.app/goc-yollari"
                    size={160}
                    level="M"
                    fgColor="#8b5a2b"
                    bgColor="#ffffff"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  QR kodu tarayarak bu sayfaya ulaşabilirsiniz
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Paylaş
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-12 md:py-16 bg-muted/30 pattern-overlay">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Bin Yıllık Yolculuk
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Orta Asya&apos;nın bozkırlarından başlayan bu yolculuk, Türkleri
              dünyanın dört bir yanına taşımıştır. Kavimler Göçü ile
              Avrupa&apos;nın çehresini değiştiren, Malazgirt ile Anadolu&apos;yu
              ebedî yurt yapan bu göçler, dünya tarihinin en önemli
              hareketlerinden biridir.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="border-border bg-card">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-primary">1000+</p>
                  <p className="text-sm text-muted-foreground">Yıllık Tarih</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-primary">3</p>
                  <p className="text-sm text-muted-foreground">Kıta</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-primary">8</p>
                  <p className="text-sm text-muted-foreground">Büyük Devlet</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-primary">4</p>
                  <p className="text-sm text-muted-foreground">Büyük Göç</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
