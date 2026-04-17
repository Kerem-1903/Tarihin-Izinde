import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContentSection } from "@/components/content-section";
import { InfoSection } from "@/components/info-section";
import { QRCodeSection } from "@/components/qr-code-section";
import { NavigationCards } from "@/components/navigation-cards";
import { Sword, Users, Landmark, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Avrupa Hun Devleti | Turk Devletleri ve Goc Yollari",
  description:
    "Attila onderligi altinda Avrupa'yi titreten Avrupa Hun Devleti. Kavimler Gocu'nu baslatan ve Roma Imparatorlugu'nu sarsan buyuk Turk devleti.",
};

export default function AvrupaHunPage() {
  const infoItems = [
    {
      icon: Sword,
      title: "Onemli Savaslar",
      items: [
        "Katalunya (Chalons) Muharebesi (451)",
        "Balkan seferleri",
        "Italya seferi (452)",
      ],
    },
    {
      icon: Users,
      title: "Onemli Kisiler",
      items: [
        "Balamir - Avrupa'ya goc onderi",
        "Attila - 'Tanrinin Kırbaci'",
        "Bleda - Attila'nin kardesi",
      ],
    },
    {
      icon: Landmark,
      title: "Topraklar",
      items: [
        "Macaristan ovalarr - Merkez",
        "Almanya'dan Kafkasya'ya",
        "Balkanlar ve Italya'ya akınlar",
      ],
    },
    {
      icon: Globe,
      title: "Tarihi Etki",
      items: [
        "Kavimler Gocu'nu baslattlar",
        "Bati Roma'nin cokusu",
        "Avrupa'nin etnik haritasi degisti",
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        emoji="⚔️"
        title="Avrupa Hun Devleti"
        subtitle="Kavimler Gocu'nu baslatan ve Attila onderligi altinda Avrupa'yi titreten buyuk Turk imparatorlugu."
        period="375 - 469"
        location="Orta Avrupa (Macaristan)"
        founder="Balamir"
      />

      <ContentSection title="Kavimler Gocu ve Avrupa'ya Varis">
        <p>
          375 yilinda basalayan Kavimler Gocu, dunya tarihinin en onemli
          donusumlerinden birini baslatmistir. Balamir onderligi altinda batiya
          hareket eden Hunlar, onlerindeki Germen kavimlerini Roma topraklarina
          dogru itmistir.
        </p>
        <p className="mt-4">
          Bu buyuk goc dalgasi, Bati Roma Imparatorlugu&apos;nun cokusunu
          hizlandirmis ve Avrupa&apos;nin etnik yapısını tamamen degistirmistir. Gotlar,
          Vandallar ve diger kavimler Hun baskısindan kacarak Roma
          topraklarına yerlesmistir.
        </p>
      </ContentSection>

      <InfoSection
        title="Avrupa Hun Devleti Hakkinda"
        description="Attila donemi, savaslar ve Avrupa'daki etkileri"
        items={infoItems}
      />

      <ContentSection title="Attila - Tanrinin Kirbaci" className="bg-muted/30">
        <p>
          Attila (434-453), tarihiin en unutulmaz liderlerinden biridir.
          &quot;Tanrinin Kirbaci&quot; olarak anilan Attila, hem Dogu hem de
          Bati Roma Imparatorlugu&apos;nu vergiye baglamistir.
        </p>
        <p className="mt-4">
          Attila doneminde Hun Devleti en genis sinirlarına ulasmistir.
          Almanya&apos;dan Kafkasya&apos;ya, Baltik Denizi&apos;nden Karadeniz&apos;e uzanan genis
          bir cografyada hakimiyet kurulmustur.
        </p>
        <p className="mt-4">
          451 yilindaki Katalunya (Chalons) Muharebesi, tarihin en buyuk
          savaslarından biri olarak kabul edilir. Attila burada Roma ve
          Vizigot ittifakına karsi savasit, kesin bir galip cikmamistir.
        </p>
      </ContentSection>

      <ContentSection title="Roma Uzerindeki Baski">
        <p>
          Hunlar, hem Dogu Roma (Bizans) hem de Bati Roma uzerinde buyuk baski
          kurmustur. Dogu Roma yillik 2.100 libre altin vergi odemek zorunda
          kalmis, Bati Roma ise surekli akin tehdidi altinda yasamistir.
        </p>
        <p className="mt-4">
          452 yılında Italya seferine cikan Attila, Roma sehrinin kapilarına
          kadar gelmistir. Papa I. Leo&apos;nun araya girmesiyle geri cekilmis, ancak
          bu olay Roma&apos;nin ne kadar zayif dustugunu gostermistir.
        </p>
      </ContentSection>

      <ContentSection title="Yikilis ve Mirasi" className="bg-muted/30">
        <p>
          453 yilinda Attila&apos;nin ani olumu, devletin sonunu hazirlamistir.
          Ogullari arasindaki taht kavgalari ve baglı kavimlerin isyani
          sonucu devlet hızla dagılmistir.
        </p>
        <p className="mt-4">
          469 yilında resmen sona eren Avrupa Hun Devleti, arkasinda
          degismis bir Avrupa birakmistir. Kavimler Gocu sonucu Avrupa&apos;nin
          bugunku etnik yapisi sekillenmis, Bati Roma yikilmis ve Orta Cag
          baslamistir.
        </p>
      </ContentSection>

      <QRCodeSection
        url="https://tarih-portali.vercel.app/avrupa-hun"
        title="Avrupa Hun Devleti - Tarih Portali"
      />

      <NavigationCards
        previous={{
          href: "/asya-hun",
          title: "Asya Hun Devleti",
          period: "MO 220 - MS 216",
        }}
        next={{
          href: "/gokturk",
          title: "Gokturk Devleti",
          period: "552 - 745",
        }}
      />
    </div>
  );
}
