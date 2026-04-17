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
    title: "Kavimler Gocu",
    period: "375 - 568",
    description:
      "Hunlarin baskısıyla baslayan ve Avrupa'nin etnik yapisini degistiren buyuk goc dalgasi.",
    route: "Orta Asya → Karadeniz kuzeyi → Avrupa",
    details: [
      "375 yilinda Balamir onderligi altinda basladi",
      "Got, Vandal, Frank gibi kavimleri itti",
      "Bati Roma Imparatorlugu'nun cokuşunu hizlandirdi",
      "Avrupa'nin bugunks etnik yapisinin temelini atti",
    ],
    color: "bg-red-500",
  },
  {
    id: "oguz-gocu",
    title: "Oguz Gocu",
    period: "9. - 11. yuzyil",
    description:
      "Oguz Turklerinin Orta Asya'dan Iran ve Anadolu'ya dogru gerçeklestirdigi gocler.",
    route: "Seyhun nehri → Horasan → Iran → Anadolu",
    details: [
      "Oguzlar, Selcuklu hanedeninin mensup oldugu boydan gelir",
      "10. yuzyilda Islam'i kabul ettiler",
      "Gazneli ve Selcuklu devletlerinin kurulmasina yol acti",
      "Anadolu'nun Turklesmesinin temeli atildi",
    ],
    color: "bg-amber-500",
  },
  {
    id: "malazgirt-sonrasi",
    title: "Malazgirt Sonrasi Gocler",
    period: "1071 - 1200",
    description:
      "Malazgirt Zaferi sonrası Anadolu'ya yoğun Turk gocleri baslamiştır.",
    route: "Iran → Dogu Anadolu → Ic Anadolu → Bati Anadolu",
    details: [
      "1071 Malazgirt Zaferi Anadolu'nun kapilarini acti",
      "Turk boylarının kitlesel gocleri basladi",
      "Koylere, kasabalara ve sehirlere yerlesim",
      "Anadolu'nun kalici olarak Turk yurdu haline gelmesi",
    ],
    color: "bg-emerald-500",
  },
  {
    id: "mogol-baskisi",
    title: "Mogol Baskisi Sonrasi",
    period: "1220 - 1300",
    description:
      "Mogol istilasi sonrası Orta Asya ve Iran'dan Anadolu'ya yogun gocler yasanmistir.",
    route: "Harezm → Iran → Anadolu",
    details: [
      "Cengiz Han'in fetihleri buyuk goc dalgalarina yol acti",
      "Alimler, sanatcilar ve tüccarlar Anadolu'ya siğındi",
      "Anadolu Selcuklu kulturunun zenginlesmesi",
      "Tasavvuf ve edebiyatin gelismesi",
    ],
    color: "bg-blue-500",
  },
];

const timelineEvents = [
  { year: "375", event: "Kavimler Gocu basladi", type: "migration" },
  { year: "552", event: "Gokturk Devleti kuruldu", type: "state" },
  { year: "840", event: "Uygur gocleri", type: "migration" },
  { year: "1040", event: "Dandanakan Savasi", type: "battle" },
  { year: "1071", event: "Malazgirt Zaferi", type: "battle" },
  { year: "1077", event: "Anadolu Selcuklu kuruldu", type: "state" },
  { year: "1243", event: "Kosedag Savasi", type: "battle" },
];

export default function GocYollariPage() {
  const [selectedRoute, setSelectedRoute] = useState(migrationRoutes[0]);

  const handleShare = async () => {
    const url = "https://tarih-portali.vercel.app/goc-yollari";
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Turk Goc Yollari - Tarih Portali",
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
              Turk Goc Yollari
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              Orta Asya&apos;nin engin bozkırlarindan Anadolu&apos;nun verimli
              topraklarina uzanan bin yillik yolculuk. Turklerin dunya
              uzerindeki izleri.
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
                <span>Milyonlarca Turk</span>
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
              Buyuk Goc Hareketleri
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
              Goc ve Kuruluş Zaman Cizelgesi
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
                              ? "Goc"
                              : item.type === "battle"
                                ? "Savas"
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
                <CardTitle className="font-serif">Bu Sayfayi Paylas</CardTitle>
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
                  QR kodu tarayarak bu sayfaya ulasabilirsiniz
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Paylas
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
              Bin Yillik Yolculuk
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Orta Asya&apos;nin bozkırlarindan baslayan bu yolculuk, Turklerı
              dunyanin dort bir yanina tasimistir. Kavimler Gocu ile
              Avrupa&apos;nin cehresini degistiren, Malazgirt ile Anadolu&apos;yu
              ebedi yurt yapan bu gocler, dunya tarihinin en onemli
              hareketlerinden biridir.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="border-border bg-card">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-primary">1000+</p>
                  <p className="text-sm text-muted-foreground">Yillik Tarih</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-primary">3</p>
                  <p className="text-sm text-muted-foreground">Kita</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-primary">8</p>
                  <p className="text-sm text-muted-foreground">Buyuk Devlet</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-primary">4</p>
                  <p className="text-sm text-muted-foreground">Buyuk Goc</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
