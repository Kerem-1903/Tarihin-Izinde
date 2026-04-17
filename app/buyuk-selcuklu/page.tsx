import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContentSection } from "@/components/content-section";
import { InfoSection } from "@/components/info-section";
import { QRCodeSection } from "@/components/qr-code-section";
import { NavigationCards } from "@/components/navigation-cards";
import { Sword, Users, Landmark, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Buyuk Selcuklu Devleti | Turk Devletleri ve Goc Yollari",
  description:
    "1071 Malazgirt Zaferi ile Anadolu'nun kapilarini Turklere acan Buyuk Selcuklu Devleti. Tarihin akisini degistiren buyuk imparatorluk.",
};

export default function BuyukSelcukluPage() {
  const infoItems = [
    {
      icon: Sword,
      title: "Onemli Savaslar",
      items: [
        "Dandanakan Savasi (1040) - Bagimsizlik",
        "Pasinler Savasi (1048) - Bizans'a ilk zafer",
        "Malazgirt Meydan Muharbesi (1071)",
      ],
    },
    {
      icon: Users,
      title: "Onemli Kisiler",
      items: [
        "Tugrul Bey - Kurucu",
        "Alparslan - Malazgirt Kahramani",
        "Meliksah - En parlak donem",
        "Nizamulmulk - Buyuk vezir",
      ],
    },
    {
      icon: Landmark,
      title: "Baskentler",
      items: [
        "Nisabur - Ilk baskent",
        "Rey - Tugrul Bey donemi",
        "Isfahan - Meliksah donemi",
      ],
    },
    {
      icon: GraduationCap,
      title: "Egitim ve Kultur",
      items: [
        "Nizamiye Medreseleri",
        "Siyasetname - Nizamulmulk",
        "Islam dunysinin ilim merkezi",
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        emoji="🦅"
        title="Buyuk Selcuklu Devleti"
        subtitle="1071 Malazgirt Zaferi ile Anadolu'nun kapilarini Turklere acan, tarihin akisini degistiren buyuk imparatorluk."
        period="1037 - 1157"
        location="Iran - Anadolu - Suriye"
        founder="Tugrul ve Cagri Beyler"
      />

      <ContentSection title="Oguaz Boylarindan Cihan Hakimiyetine">
        <p>
          Selcuklular, Oguz Turkerinin Kinik boyundan gelmektedir. 10.
          yuzyilda Islam&apos;i kabul eden Selcuk Bey&apos;in torunlari, buyuk
          bir imparatorluk kurmustur.
        </p>
        <p className="mt-4">
          1040 yılındaki Dandanakan Savasi, Selcuklularin bagimsiz bir
          devlet olarak tarih sahnesine cikisini simgeler. Gaznelilere
          karsi kazanilan bu zafer, Selcuklulara Horasan&apos;in kapilarini
          acmistir.
        </p>
      </ContentSection>

      <InfoSection
        title="Buyuk Selcuklu Devleti Hakkinda"
        description="Turk-Islam dunysinin en guclu devletlerinden birinin ozellikleri"
        items={infoItems}
      />

      <ContentSection
        title="Malazgirt - Tarihin Donüm Noktasi"
        className="bg-muted/30"
      >
        <p>
          26 Agustos 1071 tarihinde gerceklesen Malazgirt Meydan Muharbesi,
          dunya tarihinin en onemli savaslarindan biridir. Sultan Alparslan
          komutasindaki Selcuklu ordusu, Bizans Imparatoru Romanos
          Diogenes&apos;in ordusunu agir bir yenilgiye ugratmistir.
        </p>
        <p className="mt-4">
          Bu zafer, Anadolu&apos;nun kapilarini Turklere acmis ve Turkiye
          tarihinin basllangici olmustur. Bizans&apos;in askeri gucu kırılmis
          ve Anadolu&apos;ya Turk gocleri hizlanmistir.
        </p>
        <p className="mt-4">
          Alparslan, savasdan once askerlerine soyledigi meshur sozlerle
          tarihe gecmistir: &quot;Ben ya sehit ya gazi olacagim. Kim
          isterse donebilir, burada sultan yoktur, ben de sizin gibi bir
          askerim.&quot;
        </p>
      </ContentSection>

      <ContentSection title="Meliksah ve Altin Cag">
        <p>
          Meliksah donemi (1072-1092), Buyuk Selcuklu Devleti&apos;nin en
          parlak dönemidir. Devlet sinirları Orta Asya&apos;dan Akdeniz&apos;e,
          Kafkasya&apos;dan Yemen&apos;e kadar genislemistir.
        </p>
        <p className="mt-4">
          Bu donemde buyuk vezir Nizamulmulk&apos;un kurduğu Nizamiye
          Medreseleri, Islam dunysinin en onemli egitim kurumlari haline
          gelmistir. Bagdat, Isfahan ve Nisabur&apos;daki bu medreseler,
          yuzyillar boyunca ilim merkezi olmaya devam etmistir.
        </p>
        <p className="mt-4">
          Nizamulmulk&apos;un yazdigi &quot;Siyasetname&quot; adli eser, devlet
          yonetimi konusunda klasik bir kaynak olmustur.
        </p>
      </ContentSection>

      <ContentSection title="Dagilis ve Miras" className="bg-muted/30">
        <p>
          1092 yilinda Meliksah&apos;in ve Nizamulmulk&apos;un ölümunden sonra
          devlet hizla zayıflamistir. Taht kavgalari ve Batini
          suikastlari, merkezi otoriteyi sarsmistir.
        </p>
        <p className="mt-4">
          Devlet, ceslitli atabeylikler ve yerel hanedanlara bolunmustur.
          1157 yilinda Sultan Sancar&apos;in ölümüyle Buyuk Selcuklu Devleti
          resmen sona ermistir.
        </p>
        <p className="mt-4">
          Ancak Selcuklu mirasi, Anadolu Selcuklu Devleti, Harezmsahlar ve
          diger Turk devletleri tarafindan sürdürülmüstür. Malazgirt
          Zaferi&apos;nin actiği yolda Anadolu, ebedi Turk yurdu olmustur.
        </p>
      </ContentSection>

      <QRCodeSection
        url="https://tarih-portali.vercel.app/buyuk-selcuklu"
        title="Buyuk Selcuklu Devleti - Tarih Portali"
      />

      <NavigationCards
        previous={{
          href: "/gazneli",
          title: "Gazneli Devleti",
          period: "963 - 1187",
        }}
        next={{
          href: "/anadolu-selcuklu",
          title: "Anadolu Selcuklu Devleti",
          period: "1077 - 1308",
        }}
      />
    </div>
  );
}
