import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContentSection } from "@/components/content-section";
import { InfoSection } from "@/components/info-section";
import { QRCodeSection } from "@/components/qr-code-section";
import { NavigationCards } from "@/components/navigation-cards";
import { Sword, Users, Landmark, Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "Anadolu Selcuklu Devleti | Turk Devletleri ve Goc Yollari",
  description:
    "Anadolu'da kurulan ilk Turk devleti. Konya merkezli, zengin mimari ve kulturel mirasi ile one cikan Turkiye Selcuklulari.",
};

export default function AnadoluSelcukluPage() {
  const infoItems = [
    {
      icon: Sword,
      title: "Onemli Savaslar",
      items: [
        "Miryokefalon Savasi (1176) - Bizans'a kesin zafer",
        "Yassicemen Savasi (1230) - Harezmsahlara zafer",
        "Kosedag Savasi (1243) - Mogollara yenilgi",
      ],
    },
    {
      icon: Users,
      title: "Onemli Kisiler",
      items: [
        "Kutalmisoglu Suleyman Sah - Kurucu",
        "I. Kılıc Arslan - Hacli savasları kahramani",
        "I. Alaeddin Keykubat - En buyuk hukumdar",
      ],
    },
    {
      icon: Landmark,
      title: "Baskentler",
      items: [
        "Iznik - Ilk baskent",
        "Konya - Uzun sureli baskent",
        "Kayseri, Sivas - Onemli sehirler",
      ],
    },
    {
      icon: Palette,
      title: "Mimari Miras",
      items: [
        "Kervansaraylar (Sultanhanı, Ağzıkarahan)",
        "Medreseler (Cifte Minareli, Gok Medrese)",
        "Camiler ve Turbeler",
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        emoji="🏛️"
        title="Anadolu Selcuklu Devleti"
        subtitle="Anadolu'da kurulan ilk Turk devleti. Konya'yi baskent yapan, zengin mimari ve kulturel miras birakan Turkiye Selcuklulari."
        period="1077 - 1308"
        location="Anadolu"
        founder="Kutalmisoglu Suleyman Sah"
      />

      <ContentSection title="Anadolu'nun Turklesmesi">
        <p>
          Malazgirt Zaferi&apos;nden sonra Anadolu&apos;ya akan Turk
          boylari, bu topraklarda kalici yerlesmeler kurmaya baslamistir.
          1077 yilinda Kutalmisoglu Suleyman Sah, Iznik&apos;i baskent yaparak
          Anadolu Selcuklu Devleti&apos;ni kurmustur.
        </p>
        <p className="mt-4">
          Bu devlet, &quot;Turkiye&quot; adinin ilk kez kullanildigi siyasi
          yapi olmustur. Anadolu, artik Turk yurdu olarak anilmaya
          baslamistir. Devlet, yuzyillar boyunca Anadolu&apos;nun
          Turklestirilmesinde merkezi rol oynamistur.
        </p>
      </ContentSection>

      <InfoSection
        title="Anadolu Selcuklu Devleti Hakkinda"
        description="Anadolu'da Turk-Islam medeniyetinin temelleri"
        items={infoItems}
      />

      <ContentSection
        title="Hacli Seferleri ve Mucadele"
        className="bg-muted/30"
      >
        <p>
          1096 yilında baslayan Hacli Seferleri, Anadolu Selcuklu
          Devleti&apos;ni dogrudan etkilemistir. I. Kılıc Arslan, ilk Hacli
          ordularına karsi basarili savunma yapmis ve Hacliların ilerlemesini
          yavaşlatmistir.
        </p>
        <p className="mt-4">
          Ancak baskent Iznik 1097&apos;de Haclilara kaybedilmis ve baskent
          Konya&apos;ya tasınmıştır. Bu zorunlu goc, aslinda devletin
          Anadolu&apos;nun ic kesimlerinde guclu bir sekilde yerlesimesini
          saglamistir.
        </p>
        <p className="mt-4">
          1176 yılındaki Miryokefalon Savasi, Bizans&apos;in Anadolu&apos;yu geri
          alma umutlarini tamamen yok etmistir. Bu zafer, Anadolu&apos;nun
          kesin olarak Turk yurdu oldugunu kanitlamistir.
        </p>
      </ContentSection>

      <ContentSection title="I. Alaeddin Keykubat Donemi">
        <p>
          I. Alaeddin Keykubat (1220-1237), Anadolu Selcuklu Devleti&apos;nin
          en buyuk hukumdaridir. Onun doneminde devlet, siyasi, ekonomik
          ve kulturel acindan zirveye ulastmistir.
        </p>
        <p className="mt-4">
          Akdeniz&apos;de Alanya fethedilmis ve Selcuklu donanmasi
          kurulmustur. Karadeniz&apos;de Sinop ve Sugdak limanlari ele
          gecirilmis, deniz ticareti canlandirılmıştir.
        </p>
        <p className="mt-4">
          Bu donemde insaa edilen kervansaraylar, Anadolu&apos;yu onemli bir
          ticaret merkezi haline getirmistir. Sultanhani ve Agzikarahan
          gibi yapilar, bugun hala ayakta duran mimari saheserlerdir.
        </p>
      </ContentSection>

      <ContentSection title="Mogol Istilasi ve Cokus" className="bg-muted/30">
        <p>
          1243 yılındaki Kosedag Savasi, Anadolu Selcuklu tarihinin en
          buyuk felaketi olmustur. Mogollara karsi kaybedilen bu savas
          sonucu devlet, Mogol hakimiyetine girmistir.
        </p>
        <p className="mt-4">
          Bundan sonra Anadolu Selcuklulari, Mogollara bagli bir vasal
          devlet olarak varligini surdurumustur. Merkezi otorite zayiflamis
          ve Anadolu&apos;da beylikler donemi baslamistir.
        </p>
        <p className="mt-4">
          1308 yilinda devlet resmen sona ermis, ancak Turk beylikleri
          Selcuklu mirasini surdurumustur. Bu beyliklerden Osmanlilar,
          dunya tarihinin en buyuk imparatorluklarindan birini kuracaktir.
        </p>
      </ContentSection>

      <ContentSection title="Kulturel Miras">
        <p>
          Anadolu Selcuklulari, benzersiz bir mimari miras birakmistir.
          Kervansaraylar, medreseler, camiler ve turbeler, Selcuklu
          sanatinin en guzel ornekleridi r.
        </p>
        <p className="mt-4">
          Konya&apos;daki Alaeddin Camii, Karatay Medresesi ve Ince Minareli
          Medrese; Sivas&apos;taki Cifte Minareli Medrese ve Gok Medrese;
          Kayseri&apos;deki Hunat Hatun Kulliyesi bu mirasi temsil etmektedir.
        </p>
        <p className="mt-4">
          Ayrica Mevlana Celaleddin Rumi gibi buyuk dusunurler bu
          donemde yasamis ve Anadolu&apos;yu tasavvufun merkezi haline
          getirmistir.
        </p>
      </ContentSection>

      <QRCodeSection
        url="https://tarih-portali.vercel.app/anadolu-selcuklu"
        title="Anadolu Selcuklu Devleti - Tarih Portali"
      />

      <NavigationCards
        previous={{
          href: "/buyuk-selcuklu",
          title: "Buyuk Selcuklu Devleti",
          period: "1037 - 1157",
        }}
      />
    </div>
  );
}
