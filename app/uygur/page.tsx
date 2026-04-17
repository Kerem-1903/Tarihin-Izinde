import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContentSection } from "@/components/content-section";
import { InfoSection } from "@/components/info-section";
import { QRCodeSection } from "@/components/qr-code-section";
import { NavigationCards } from "@/components/navigation-cards";
import { Building, Users, Landmark, Printer } from "lucide-react";

export const metadata: Metadata = {
  title: "Uygur Devleti | Turk Devletleri ve Goc Yollari",
  description:
    "Yerlsik hayata gecen ilk Turk devleti. Matbaayi Avrupa'dan once kullanan, ticaret ve kulturde one cikan Uygur Devleti.",
};

export default function UygurPage() {
  const infoItems = [
    {
      icon: Building,
      title: "Sehirlesme",
      items: [
        "Karabalgasun - Baskent",
        "Beshbalik, Turfan sehirleri",
        "Tarim Havzasi'nda kentlesme",
      ],
    },
    {
      icon: Users,
      title: "Onemli Kisiler",
      items: [
        "Kutluk Bilge Kul Kagan - Kurucu",
        "Bogu Kagan - Maniheizm'i kabul etti",
        "Boku Kagan - Cin'e yardim etti",
      ],
    },
    {
      icon: Landmark,
      title: "Din ve Inanc",
      items: [
        "Maniheizm - Resmi din (762)",
        "Budizm'in yayilmasi",
        "Nesturi Hristiyanlík",
      ],
    },
    {
      icon: Printer,
      title: "Kultur ve Teknoloji",
      items: [
        "Matbaa kullanimi (Avrupa'dan once)",
        "Uygur alfabesi",
        "Kagit ve kitap uretimi",
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        emoji="📜"
        title="Uygur Devleti"
        subtitle="Yerlsik hayata gecen ilk Turk devleti. Matbaayi Avrupa'dan once kullanan, kultur ve ticarette zirveye ulasan medeniyet."
        period="744 - 840"
        location="Orta Asya (Mogolistan - Dogu Turkistan)"
        founder="Kutluk Bilge Kul Kagan"
      />

      <ContentSection title="Gocebe Hayattan Yerlsik Medeniyete">
        <p>
          Uygur Devleti, 744 yilında Kutluk Bilge Kul Kagan tarafindan
          kurulmustur. Gokturklerin yikilisinin ardindan Orta Asya&apos;nin yeni
          hakimi olan Uygurlar, Turk tarihinde onemli bir donusum gecirmistir.
        </p>
        <p className="mt-4">
          Uygurlar, gocebe yasam tarzindan yerlsik hayata gecen ilk Turk
          toplulugudur. Sehirler kurmus, tarim yapmis ve ticaretle
          zenginlesmistir. Bu donusum, Turk kulturunun gelisiminde buyuk bir
          donemecidir.
        </p>
      </ContentSection>

      <InfoSection
        title="Uygur Devleti Hakkinda"
        description="Kulturel gelisim, din degisiklikleri ve teknolojik ilerlemeler"
        items={infoItems}
      />

      <ContentSection title="Maniheizm ve Din Degisikligi" className="bg-muted/30">
        <p>
          762 yilinda Bogu Kagan, Maniheizm&apos;i resmi din olarak kabul etmistir.
          Bu, Turk tarihinde onemli bir kirilma noktasidir cunku Turkler ilk
          kez gocebe inanclarindan farkli bir dini benimsemistir.
        </p>
        <p className="mt-4">
          Maniheizm&apos;in temel ilkeleri arasinda et yememek ve savaslardan
          kacinmak vardi. Bu durum, savasci Turk karakteriyle celismis ve
          devletin askeri gucunu olumsuz etkilemis olabilir.
        </p>
        <p className="mt-4">
          Ayni zamanda Budizm ve Nesturi Hristiyanlik da Uygurlar arasinda
          yayilmistir. Bu dini cokkulturellesme, Uygur sanatina ve
          edebiyatina zenginlik katmistir.
        </p>
      </ContentSection>

      <ContentSection title="Matbaa ve Kulturel Miras">
        <p>
          Uygurlar, matbaayi Avrupa&apos;dan yuzyillar once kullanmis bir
          medeniyettir. Tahta kaliplarla basski teknigi kullanilarak kitaplar
          cogaltilmis ve bilgi yayilmistir.
        </p>
        <p className="mt-4">
          Uygur alfabesi, Sogd alfabesinden turetilmis olup daha sonra
          Mogollara ve Mancurlara gecmistir. Bu alfabe, Orta Asya&apos;nin ortak
          yazı dili haline gelmistir.
        </p>
        <p className="mt-4">
          Uygurlar ayrica tercumanlik faaliyetleriyle de unludur. Budist ve
          Maniheist metinleri Turkcey cevirmi, boylece zengin bir edebiyat
          mirasi olusturmuslardir.
        </p>
      </ContentSection>

      <ContentSection title="Yikilis ve Goc" className="bg-muted/30">
        <p>
          840 yilinda Kirgizlar tarafindan yikilan Uygur Devleti, halkinin
          buyuk bir bolumu guneye ve batiya goc etmistir. Turfan ve Kansu
          bolgerlerinde yeni Uygur devletleri kurulmustur.
        </p>
        <p className="mt-4">
          Bu goc sonrasi kurulan devletler, Uygur kulturunu yuzyillar boyunca
          yasatmistir. Uygur yazisi, edebiyati ve sanati, Mogol Imparatorlugu
          doneminde bile etkisini surdurmustir.
        </p>
      </ContentSection>

      <QRCodeSection
        url="https://tarih-portali.vercel.app/uygur"
        title="Uygur Devleti - Tarih Portali"
      />

      <NavigationCards
        previous={{
          href: "/gokturk",
          title: "Gokturk Devleti",
          period: "552 - 745",
        }}
        next={{
          href: "/karahanli",
          title: "Karahanli Devleti",
          period: "840 - 1212",
        }}
      />
    </div>
  );
}
