import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { HeroImage } from "@/components/hero-image";
import { ContentSection } from "@/components/content-section";
import { InfoSection } from "@/components/info-section";

import { NavigationCards } from "@/components/navigation-cards";
import { Sword, Users, Landmark, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Avrupa Hun Devleti | Türk Devletleri ve Göç Yolları",
  description:
    "Attila önderliği altında Avrupa'yı titreten Avrupa Hun Devleti. Kavimler Göçü'nü başlatan ve Roma İmparatorluğu'nu sarsan büyük Türk devleti.",
};

export default function AvrupaHunPage() {
  const infoItems = [
    {
      icon: Sword,
      title: "Önemli Savaşlar",
      items: [
        "Katalunya (Chalons) Muharebesi (451)",
        "Balkan seferleri",
        "İtalya seferi (452)",
      ],
    },
    {
      icon: Users,
      title: "Önemli Kişiler",
      items: [
        "Balamir - Avrupa'ya göç önderi",
        "Attila - 'Tanrının Kırbacı'",
        "Bleda - Attila'nın kardeşi",
      ],
    },
    {
      icon: Landmark,
      title: "Topraklar",
      items: [
        "Macaristan ovaları - Merkez",
        "Almanya'dan Kafkasya'ya",
        "Balkanlar ve İtalya'ya akınlar",
      ],
    },
    {
      icon: Globe,
      title: "Tarihî Etki",
      items: [
        "Kavimler Göçü'nü başlattılar",
        "Batı Roma'nın çöküşü",
        "Avrupa'nın etnik haritası değişti",
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        emoji="⚔️"
        title="Avrupa Hun Devleti"
        subtitle="Kavimler Göçü'nü başlatan ve Attila önderliği altında Avrupa'yı titreten büyük Türk imparatorluğu."
        period="375 - 469"
        location="Orta Avrupa (Macaristan)"
        founder="Balamir"
      />

      <HeroImage
        src="/images/avrupa-hun.jpg"
        alt="Avrupa Hun Göçleri ve Dağlar"
        caption="Karpat Dağları ve Göç Yolları"
      />

      <ContentSection title="Kavimler Göçü ve Avrupa'ya Varış">
        <p>
          375 yılında başlayan Kavimler Göçü, dünya tarihinin en önemli
          dönüşümlerinden birini başlatmıştır. Balamir önderliği altında batıya
          hareket eden Hunlar, önlerindeki Germen kavimlerini Roma topraklarına
          doğru itmiştir.
        </p>
        <p className="mt-4">
          Bu büyük göç dalgası, Batı Roma İmparatorluğu&apos;nun çöküşünü
          hızlandırmış ve Avrupa&apos;nın etnik yapısını tamamen değiştirmiştir. Gotlar,
          Vandallar ve diğer kavimler Hun baskısından kaçarak Roma
          topraklarına yerleşmiştir.
        </p>
      </ContentSection>

      <InfoSection
        title="Avrupa Hun Devleti Hakkında"
        description="Attila dönemi, savaşlar ve Avrupa'daki etkileri"
        items={infoItems}
      />

      <ContentSection title="Attila - Tanrının Kırbacı" className="bg-muted/30">
        <p>
          Attila (434-453), tarihin en unutulmaz liderlerinden biridir.
          &quot;Tanrının Kırbacı&quot; olarak anılan Attila, hem Doğu hem de
          Batı Roma İmparatorluğu&apos;nu vergiye bağlamıştır.
        </p>
        <p className="mt-4">
          Attila döneminde Hun Devleti en geniş sınırlarına ulaşmıştır.
          Almanya&apos;dan Kafkasya&apos;ya, Baltık Denizi&apos;nden Karadeniz&apos;e uzanan geniş
          bir coğrafyada hâkimiyet kurulmuştur.
        </p>
        <p className="mt-4">
          451 yılındaki Katalunya (Chalons) Muharebesi, tarihin en büyük
          savaşlarından biri olarak kabul edilir. Attila burada Roma ve
          Vizigot ittifakına karşı savaşmış, kesin bir galip çıkmamıştır.
        </p>
      </ContentSection>

      <ContentSection title="Roma Üzerindeki Baskı">
        <p>
          Hunlar, hem Doğu Roma (Bizans) hem de Batı Roma üzerinde büyük baskı
          kurmuştur. Doğu Roma yıllık 2.100 libre altın vergi ödemek zorunda
          kalmış, Batı Roma ise sürekli akın tehdidi altında yaşamıştır.
        </p>
        <p className="mt-4">
          452 yılında İtalya seferine çıkan Attila, Roma şehrinin kapılarına
          kadar gelmiştir. Papa I. Leo&apos;nun araya girmesiyle geri çekilmiş, ancak
          bu olay Roma&apos;nın ne kadar zayıf düştüğünü göstermiştir.
        </p>
      </ContentSection>

      <ContentSection title="Yıkılış ve Mirası" className="bg-muted/30">
        <p>
          453 yılında Attila&apos;nın ani ölümü, devletin sonunu hazırlamıştır.
          Oğulları arasındaki taht kavgaları ve bağlı kavimlerin isyanı
          sonucu devlet hızla dağılmıştır.
        </p>
        <p className="mt-4">
          469 yılında resmen sona eren Avrupa Hun Devleti, arkasında
          değişmiş bir Avrupa bırakmıştır. Kavimler Göçü sonucu Avrupa&apos;nın
          bugünkü etnik yapısı şekillenmiş, Batı Roma yıkılmış ve Orta Çağ
          başlamıştır.
        </p>
      </ContentSection>



      <NavigationCards
        previous={{
          href: "/asya-hun",
          title: "Asya Hun Devleti",
          period: "MÖ 220 - MS 216",
        }}
        next={{
          href: "/gokturk",
          title: "Göktürk Devleti",
          period: "552 - 745",
        }}
      />
    </div>
  );
}
