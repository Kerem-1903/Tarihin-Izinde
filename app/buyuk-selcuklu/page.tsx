import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContentSection } from "@/components/content-section";
import { InfoSection } from "@/components/info-section";
import { QRCodeSection } from "@/components/qr-code-section";
import { NavigationCards } from "@/components/navigation-cards";
import { Sword, Users, Landmark, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Büyük Selçuklu Devleti | Türk Devletleri ve Göç Yolları",
  description:
    "1071 Malazgirt Zaferi ile Anadolu'nun kapılarını Türklere açan Büyük Selçuklu Devleti. Tarihin akışını değiştiren büyük imparatorluk.",
};

export default function BuyukSelcukluPage() {
  const infoItems = [
    {
      icon: Sword,
      title: "Önemli Savaşlar",
      items: [
        "Dandanakan Savaşı (1040) - Bağımsızlık",
        "Pasinler Savaşı (1048) - Bizans'a ilk zafer",
        "Malazgirt Meydan Muharebesi (1071)",
      ],
    },
    {
      icon: Users,
      title: "Önemli Kişiler",
      items: [
        "Tuğrul Bey - Kurucu",
        "Alparslan - Malazgirt Kahramanı",
        "Melikşah - En parlak dönem",
        "Nizâmülmülk - Büyük vezir",
      ],
    },
    {
      icon: Landmark,
      title: "Başkentler",
      items: [
        "Nişabur - İlk başkent",
        "Rey - Tuğrul Bey dönemi",
        "İsfahan - Melikşah dönemi",
      ],
    },
    {
      icon: GraduationCap,
      title: "Eğitim ve Kültür",
      items: [
        "Nizamiye Medreseleri",
        "Siyasetname - Nizâmülmülk",
        "İslâm dünyasının ilim merkezi",
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        emoji="🦅"
        title="Büyük Selçuklu Devleti"
        subtitle="1071 Malazgirt Zaferi ile Anadolu'nun kapılarını Türklere açan, tarihin akışını değiştiren büyük imparatorluk."
        period="1037 - 1157"
        location="İran - Anadolu - Suriye"
        founder="Tuğrul ve Çağrı Beyler"
      />

      <ContentSection title="Oğuz Boylarından Cihan Hâkimiyetine">
        <p>
          Selçuklular, Oğuz Türklerinin Kınık boyundan gelmektedir. 10.
          yüzyılda İslâm&apos;ı kabul eden Selçuk Bey&apos;in torunları, büyük
          bir imparatorluk kurmuştur.
        </p>
        <p className="mt-4">
          1040 yılındaki Dandanakan Savaşı, Selçukluların bağımsız bir
          devlet olarak tarih sahnesine çıkışını simgeler. Gaznelilere
          karşı kazanılan bu zafer, Selçuklulara Horasan&apos;ın kapılarını
          açmıştır.
        </p>
      </ContentSection>

      <InfoSection
        title="Büyük Selçuklu Devleti Hakkında"
        description="Türk-İslâm dünyasının en güçlü devletlerinden birinin özellikleri"
        items={infoItems}
      />

      <ContentSection
        title="Malazgirt - Tarihin Dönüm Noktası"
        className="bg-muted/30"
      >
        <p>
          26 Ağustos 1071 tarihinde gerçekleşen Malazgirt Meydan Muharebesi,
          dünya tarihinin en önemli savaşlarından biridir. Sultan Alparslan
          komutasındaki Selçuklu ordusu, Bizans İmparatoru Romanos
          Diogenes&apos;in ordusunu ağır bir yenilgiye uğratmıştır.
        </p>
        <p className="mt-4">
          Bu zafer, Anadolu&apos;nun kapılarını Türklere açmış ve Türkiye
          tarihinin başlangıcı olmuştur. Bizans&apos;ın askerî gücü kırılmış
          ve Anadolu&apos;ya Türk göçleri hızlanmıştır.
        </p>
        <p className="mt-4">
          Alparslan, savaştan önce askerlerine söylediği meşhur sözlerle
          tarihe geçmiştir: &quot;Ben ya şehit ya gazi olacağım. Kim
          isterse dönebilir, burada sultan yoktur, ben de sizin gibi bir
          askerim.&quot;
        </p>
      </ContentSection>

      <ContentSection title="Melikşah ve Altın Çağ">
        <p>
          Melikşah dönemi (1072-1092), Büyük Selçuklu Devleti&apos;nin en
          parlak dönemidir. Devlet sınırları Orta Asya&apos;dan Akdeniz&apos;e,
          Kafkasya&apos;dan Yemen&apos;e kadar genişlemiştir.
        </p>
        <p className="mt-4">
          Bu dönemde büyük vezir Nizâmülmülk&apos;ün kurduğu Nizamiye
          Medreseleri, İslâm dünyasının en önemli eğitim kurumları haline
          gelmiştir. Bağdat, İsfahan ve Nişabur&apos;daki bu medreseler,
          yüzyıllar boyunca ilim merkezi olmaya devam etmiştir.
        </p>
        <p className="mt-4">
          Nizâmülmülk&apos;ün yazdığı &quot;Siyasetname&quot; adlı eser, devlet
          yönetimi konusunda klasik bir kaynak olmuştur.
        </p>
      </ContentSection>

      <ContentSection title="Dağılış ve Miras" className="bg-muted/30">
        <p>
          1092 yılında Melikşah&apos;ın ve Nizâmülmülk&apos;ün ölümünden sonra
          devlet hızla zayıflamıştır. Taht kavgaları ve Bâtınî
          suikastları, merkezî otoriteyi sarsmıştır.
        </p>
        <p className="mt-4">
          Devlet, çeşitli atabeylikler ve yerel hanedanlara bölünmüştür.
          1157 yılında Sultan Sencer&apos;in ölümüyle Büyük Selçuklu Devleti
          resmen sona ermiştir.
        </p>
        <p className="mt-4">
          Ancak Selçuklu mirası, Anadolu Selçuklu Devleti, Harezmşahlar ve
          diğer Türk devletleri tarafından sürdürülmüştür. Malazgirt
          Zaferi&apos;nin açtığı yolda Anadolu, ebedî Türk yurdu olmuştur.
        </p>
      </ContentSection>

      <QRCodeSection
        url="https://tarih-portali.vercel.app/buyuk-selcuklu"
        title="Büyük Selçuklu Devleti - Tarih Portalı"
      />

      <NavigationCards
        previous={{
          href: "/gazneli",
          title: "Gazneli Devleti",
          period: "963 - 1187",
        }}
        next={{
          href: "/anadolu-selcuklu",
          title: "Anadolu Selçuklu Devleti",
          period: "1077 - 1308",
        }}
      />
    </div>
  );
}
