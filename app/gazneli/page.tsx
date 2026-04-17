import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContentSection } from "@/components/content-section";
import { InfoSection } from "@/components/info-section";
import { QRCodeSection } from "@/components/qr-code-section";
import { NavigationCards } from "@/components/navigation-cards";
import { Sword, Users, Landmark, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Gazneli Devleti | Turk Devletleri ve Goc Yollari",
  description:
    "Sultan unvanini kullanan ilk Turk devleti. Gazneli Mahmut'un Hindistan seferleri ve kulturel zenginligi ile one cikan imparatorluk.",
};

export default function GazneliPage() {
  const infoItems = [
    {
      icon: Sword,
      title: "Onemli Savaslar",
      items: [
        "17 Hindistan seferi",
        "Somnat Tapinagi'nin fethi",
        "Dandanakan Savasi (1040) - Selcuklulara kaybedildi",
      ],
    },
    {
      icon: Users,
      title: "Onemli Kisiler",
      items: [
        "Alp Tigin - Kurucu",
        "Sebuk Tigin - Gercek kurucu",
        "Gazneli Mahmut - En buyuk hukumdar",
        "Mesud - Son guclu sultan",
      ],
    },
    {
      icon: Landmark,
      title: "Baskent ve Topraklar",
      items: [
        "Gazne - Baskent (Afganistan)",
        "Horasan'dan Kuzey Hindistan'a",
        "Lahore - Ikinci onemli sehir",
      ],
    },
    {
      icon: BookOpen,
      title: "Kultur ve Sanat",
      items: [
        "Firdevsi - Sahname",
        "Biruni - Bilim insani",
        "Farsca edebiyatın koruyucusu",
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        emoji="👑"
        title="Gazneli Devleti"
        subtitle="Sultan unvanini kullanan ilk Turk devleti. Hindistan'a Islam'i tasiya ve kulturel bir ronesan yasayan buyuk imparatorluk."
        period="963 - 1187"
        location="Afganistan - Hindistan - Iran"
        founder="Alp Tigin"
      />

      <ContentSection title="Devletin Kurulusu">
        <p>
          Gazneli Devleti, 963 yilinda Samani Devleti&apos;nin komutanlarindan
          Alp Tigin tarafindan kurulmustur. Ancak devletin gercek kurucusu
          olarak Sebuk Tigin kabul edilir, cunku devleti bagimsiz bir guc
          haline getiren odur.
        </p>
        <p className="mt-4">
          Afganistan&apos;in Gazne sehrini baskent yapan devlet, stratejik
          konumu sayesinde hem Orta Asya hem de Hindistan uzerinde etkili
          olmustur. Ipek Yolu ticaretinden buyuk gelir elde edilmistir.
        </p>
      </ContentSection>

      <InfoSection
        title="Gazneli Devleti Hakkinda"
        description="Sultan unvanini kullanan ve kulturel zenginligi ile one cikan devlet"
        items={infoItems}
      />

      <ContentSection
        title="Gazneli Mahmut - Hindistan Fatihi"
        className="bg-muted/30"
      >
        <p>
          Gazneli Mahmut (998-1030), Turk tarihinin en onemli
          hukumdarlarindan biridir. &quot;Sultan&quot; unvanini kullanan ilk
          Turk hukumdari olarak tarihe gecmistir. Bu unvan, Abbasi Halifesi
          tarafindan kendisine verilmistir.
        </p>
        <p className="mt-4">
          17 kez Hindistan seferine cikan Mahmut, Islam&apos;i Hindistan
          yarimadasi na tasilmistir. Bu seferler sirasinda buyuk ganimetler
          elde edilmis ve Gazne, dunyanin en zengin sehirlerinden biri
          haline gelmistir.
        </p>
        <p className="mt-4">
          Somnat Tapinaği&apos;nin fethi, Mahmut&apos;un en unlu seferlerinden
          biridir. Bu zafer, Islam dunysinda buyuk yanki uyandirmis ve
          Mahmut&apos;a &quot;Gazi&quot; ve &quot;Put kiran&quot; lakaplarinı
          kazandirmistir.
        </p>
      </ContentSection>

      <ContentSection title="Kulturel Altin Cag">
        <p>
          Gazneli Mahmut, sadece bir fatih degil, ayni zamanda kultur ve
          sanatin buyuk koruyucusuydu. Sarayinda dunyanın en unlu bilim
          insanlarin ve sairlerini toplamistir.
        </p>
        <p className="mt-4">
          Firdevsi&apos;nin meshur eseri Sahname, Mahmut&apos;a sunulmak uzere
          yazilmistir. Buyuk bilgin Biruni de Gazneli sarayinda yasami ve
          onemli eserlerini burada kaleme almistir.
        </p>
        <p className="mt-4">
          Gazne sehri, bu donemde mimarisi, kutuphaneleri ve medreseleri
          ile dunyanın en onemli kultur merkezlerinden biri haline
          gelmistir.
        </p>
      </ContentSection>

      <ContentSection title="Dandanakan ve Cokus" className="bg-muted/30">
        <p>
          1040 yılındaki Dandanakan Savasi, Gazneli tarihinin donüm
          noktasidir. Bu savasta Selcuklulara yenilen Gazneliler, Horasan
          ve Iran topraklarinı kaybetmistir.
        </p>
        <p className="mt-4">
          Bu yenilgiden sonra Gazneliler Afganistan ve Kuzey Hindistan&apos;a
          cekilmistir. Devlet, giderek zayiflayarak 1187 yılında Gurlular
          tarafindan ortadan kaldirilmistir.
        </p>
        <p className="mt-4">
          Ancak Gazneliler, Hindistan&apos;da Islam&apos;in yayilmasinin
          temellerini atmis ve zengin bir kulturel miras birakmistir.
        </p>
      </ContentSection>

      <QRCodeSection
        url="https://tarih-portali.vercel.app/gazneli"
        title="Gazneli Devleti - Tarih Portali"
      />

      <NavigationCards
        previous={{
          href: "/karahanli",
          title: "Karahanli Devleti",
          period: "840 - 1212",
        }}
        next={{
          href: "/buyuk-selcuklu",
          title: "Buyuk Selcuklu Devleti",
          period: "1037 - 1157",
        }}
      />
    </div>
  );
}
