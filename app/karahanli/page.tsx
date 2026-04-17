import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContentSection } from "@/components/content-section";
import { InfoSection } from "@/components/info-section";
import { QRCodeSection } from "@/components/qr-code-section";
import { NavigationCards } from "@/components/navigation-cards";
import { BookOpen, Users, Landmark, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Karahanli Devleti | Turk Devletleri ve Goc Yollari",
  description:
    "Ilk Musluman Turk devleti. Kasgarli Mahmut'un Divanu Lugati't-Turk ve Yusuf Has Hacib'in Kutadgu Bilig eserlerinin yazildigi donemin devleti.",
};

export default function KarahanliPage() {
  const infoItems = [
    {
      icon: BookOpen,
      title: "Onemli Eserler",
      items: [
        "Divanu Lugati't-Turk - Kasgarli Mahmut",
        "Kutadgu Bilig - Yusuf Has Hacib",
        "Atabetul Hakayik - Edip Ahmet Yukneki",
      ],
    },
    {
      icon: Users,
      title: "Onemli Kisiler",
      items: [
        "Satuk Bugra Han - Islami kabul eden ilk hukumdar",
        "Kasgarli Mahmut - Buyuk dilci",
        "Yusuf Has Hacib - Siyasetname yazari",
      ],
    },
    {
      icon: Landmark,
      title: "Baskentler",
      items: [
        "Balasagun - Dogu Karahanlılar",
        "Semerkant - Bati Karahanlılar",
        "Kasgar - Kulturel merkez",
      ],
    },
    {
      icon: Star,
      title: "Ilkler",
      items: [
        "Ilk Musluman Turk devleti",
        "Turkcede ilk Islam edebiyati",
        "Medrese geleneginin baslangici",
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        emoji="🕌"
        title="Karahanli Devleti"
        subtitle="Ilk Musluman Turk devleti. Turk-Islam sentezinin temelleri bu donemde atilmis, Turk dili ve edebiyati altin cagini yasamistir."
        period="840 - 1212"
        location="Orta Asya (Maverauunnehr - Dogu Turkistan)"
        founder="Bilge Kul Kadir Han"
      />

      <ContentSection title="Islamiyet'in Kabulü">
        <p>
          Karahanli Devleti, Turk tarihinin donüm noktalarindan birini
          olusturur. 920 yillari civarinda Satuk Bugra Han&apos;in Islamiyet&apos;i
          kabul etmesiyle Turkler, Muusluman dunya ile kalici bir bag
          kurmustur.
        </p>
        <p className="mt-4">
          Bu din degisikligi, sadece dini degil, kulturel, sosyal ve siyasi
          alanda da koklü donusumler getirmistir. Turk-Islam sentezi bu
          donemde sekillenmeye baslmis ve yuzyillar boyunca Turk
          kimliginin temelini olusturmustur.
        </p>
      </ContentSection>

      <InfoSection
        title="Karahanli Devleti Hakkinda"
        description="Turk-Islam kulturunun temellerinin atildigi donem"
        items={infoItems}
      />

      <ContentSection
        title="Divanu Lugati't-Turk - Turkcenin Hazinesi"
        className="bg-muted/30"
      >
        <p>
          Kasgarli Mahmut tarafindan 1072-1074 yillari arasında yazilan
          Divanu Lugati&apos;t-Turk, Turk dili ve kulturunun en onemli
          eserlerinden biridir. Araplara Turkceyi ogretmek amaciyla yazilan
          bu sozluk, ayni zamanda bir ansiklopedi niteligi tasimaktadir.
        </p>
        <p className="mt-4">
          Eserde 7500&apos;den fazla Turkce kelime, atasozleri, siirler ve
          Turklerin yasam bicimleri hakkinda bilgiler yer almaktadir.
          Ayrica ilk Turkce dunya haritasi da bu eserde bulunmaktadir.
        </p>
      </ContentSection>

      <ContentSection title="Kutadgu Bilig - Mutluluk Bilgisi">
        <p>
          1069 yilinda Yusuf Has Hacib tarafindan yazilan Kutadgu Bilig,
          Turk edebiyatinin ilk siyasetnamesidir. &quot;Mutluluk Veren
          Bilgi&quot; anlamina gelen eser, ideal devlet yonetimi ve erdemli
          yasam hakkinda ogutler vermektedir.
        </p>
        <p className="mt-4">
          Eserde dort sembolik karakter uzerinden adalet, devlet, akil ve
          kanaat kavramlari islenmistir. Bugn bile guncelligini koruyan
          bu eser, Turk siyasi dusuncesinin temel taslarindan biridir.
        </p>
      </ContentSection>

      <ContentSection title="Ikiye Bolunme ve Yikilis" className="bg-muted/30">
        <p>
          1042 yilinda Karahanli Devleti Dogu ve Bati olmak uzere ikiye
          bolunmustur. Dogu Karahanlılar Balasagun, Bati Karahanlılar ise
          Semerkant merkezli olarak varliklarini surdurumustur.
        </p>
        <p className="mt-4">
          Her iki devlet de zamanla Selcuklulara ve Karahitaylara bagli
          hale gelmistir. 1212 yilinda Harezmsahlar tarafindan tamamen
          ortadan kaldirilmislardir.
        </p>
        <p className="mt-4">
          Ancak Karahanlilar, geride zengin bir edebiyat ve kultur mirasi
          birakmistir. Turk-Islam medeniyetinin temelleri bu donemde
          atilmis ve sonraki devletlere ilham kaynagi olmustur.
        </p>
      </ContentSection>

      <QRCodeSection
        url="https://tarih-portali.vercel.app/karahanli"
        title="Karahanli Devleti - Tarih Portali"
      />

      <NavigationCards
        previous={{
          href: "/uygur",
          title: "Uygur Devleti",
          period: "744 - 840",
        }}
        next={{
          href: "/gazneli",
          title: "Gazneli Devleti",
          period: "963 - 1187",
        }}
      />
    </div>
  );
}
