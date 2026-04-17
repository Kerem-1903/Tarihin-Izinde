import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContentSection } from "@/components/content-section";
import { InfoSection } from "@/components/info-section";
import { QRCodeSection } from "@/components/qr-code-section";
import { NavigationCards } from "@/components/navigation-cards";
import { Sword, Users, Landmark, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Gazneli Devleti | Türk Devletleri ve Göç Yolları",
  description:
    "Sultan unvanını kullanan ilk Türk devleti. Gazneli Mahmut'un Hindistan seferleri ve kültürel zenginliği ile öne çıkan imparatorluk.",
};

export default function GazneliPage() {
  const infoItems = [
    {
      icon: Sword,
      title: "Önemli Savaşlar",
      items: [
        "17 Hindistan seferi",
        "Somnat Tapınağı'nın fethi",
        "Dandanakan Savaşı (1040) - Selçuklulara kaybedildi",
      ],
    },
    {
      icon: Users,
      title: "Önemli Kişiler",
      items: [
        "Alp Tigin - Kurucu",
        "Sebük Tigin - Gerçek kurucu",
        "Gazneli Mahmut - En büyük hükümdar",
        "Mesut - Son güçlü sultan",
      ],
    },
    {
      icon: Landmark,
      title: "Başkent ve Topraklar",
      items: [
        "Gazne - Başkent (Afganistan)",
        "Horasan'dan Kuzey Hindistan'a",
        "Lahor - İkinci önemli şehir",
      ],
    },
    {
      icon: BookOpen,
      title: "Kültür ve Sanat",
      items: [
        "Firdevsî - Şehname",
        "Bîrûnî - Bilim insanı",
        "Farsça edebiyatın koruyucusu",
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        emoji="👑"
        title="Gazneli Devleti"
        subtitle="Sultan unvanını kullanan ilk Türk devleti. Hindistan'a İslâm'ı taşıyan ve kültürel bir rönesans yaşayan büyük imparatorluk."
        period="963 - 1187"
        location="Afganistan - Hindistan - İran"
        founder="Alp Tigin"
      />

      <ContentSection title="Devletin Kuruluşu">
        <p>
          Gazneli Devleti, 963 yılında Samani Devleti&apos;nin komutanlarından
          Alp Tigin tarafından kurulmuştur. Ancak devletin gerçek kurucusu
          olarak Sebük Tigin kabul edilir, çünkü devleti bağımsız bir güç
          haline getiren odur.
        </p>
        <p className="mt-4">
          Afganistan&apos;ın Gazne şehrini başkent yapan devlet, stratejik
          konumu sayesinde hem Orta Asya hem de Hindistan üzerinde etkili
          olmuştur. İpek Yolu ticaretinden büyük gelir elde edilmiştir.
        </p>
      </ContentSection>

      <InfoSection
        title="Gazneli Devleti Hakkında"
        description="Sultan unvanını kullanan ve kültürel zenginliği ile öne çıkan devlet"
        items={infoItems}
      />

      <ContentSection
        title="Gazneli Mahmut - Hindistan Fatihi"
        className="bg-muted/30"
      >
        <p>
          Gazneli Mahmut (998-1030), Türk tarihinin en önemli
          hükümdarlarından biridir. &quot;Sultan&quot; unvanını kullanan ilk
          Türk hükümdarı olarak tarihe geçmiştir. Bu unvan, Abbasi Halifesi
          tarafından kendisine verilmiştir.
        </p>
        <p className="mt-4">
          17 kez Hindistan seferine çıkan Mahmut, İslâm&apos;ı Hindistan
          yarımadasına taşımıştır. Bu seferler sırasında büyük ganimetler
          elde edilmiş ve Gazne, dünyanın en zengin şehirlerinden biri
          haline gelmiştir.
        </p>
        <p className="mt-4">
          Somnat Tapınağı&apos;nın fethi, Mahmut&apos;un en ünlü seferlerinden
          biridir. Bu zafer, İslâm dünyasında büyük yankı uyandırmış ve
          Mahmut&apos;a &quot;Gazi&quot; ve &quot;Put kıran&quot; lakaplarını
          kazandırmıştır.
        </p>
      </ContentSection>

      <ContentSection title="Kültürel Altın Çağ">
        <p>
          Gazneli Mahmut, sadece bir fatih değil, aynı zamanda kültür ve
          sanatın büyük koruyucusuydu. Sarayında dünyanın en ünlü bilim
          insanlarını ve şairlerini toplamıştır.
        </p>
        <p className="mt-4">
          Firdevsî&apos;nin meşhur eseri Şehname, Mahmut&apos;a sunulmak üzere
          yazılmıştır. Büyük bilgin Bîrûnî de Gazneli sarayında yaşamış ve
          önemli eserlerini burada kaleme almıştır.
        </p>
        <p className="mt-4">
          Gazne şehri, bu dönemde mimarisi, kütüphaneleri ve medreseleri
          ile dünyanın en önemli kültür merkezlerinden biri haline
          gelmiştir.
        </p>
      </ContentSection>

      <ContentSection title="Dandanakan ve Çöküş" className="bg-muted/30">
        <p>
          1040 yılındaki Dandanakan Savaşı, Gazneli tarihinin dönüm
          noktasıdır. Bu savaşta Selçuklulara yenilen Gazneliler, Horasan
          ve İran topraklarını kaybetmiştir.
        </p>
        <p className="mt-4">
          Bu yenilgiden sonra Gazneliler Afganistan ve Kuzey Hindistan&apos;a
          çekilmiştir. Devlet, giderek zayıflayarak 1187 yılında Gurlular
          tarafından ortadan kaldırılmıştır.
        </p>
        <p className="mt-4">
          Ancak Gazneliler, Hindistan&apos;da İslâm&apos;ın yayılmasının
          temellerini atmış ve zengin bir kültürel miras bırakmıştır.
        </p>
      </ContentSection>

      <QRCodeSection
        url="https://tarih-portali.vercel.app/gazneli"
        title="Gazneli Devleti - Tarih Portalı"
      />

      <NavigationCards
        previous={{
          href: "/karahanli",
          title: "Karahanlı Devleti",
          period: "840 - 1212",
        }}
        next={{
          href: "/buyuk-selcuklu",
          title: "Büyük Selçuklu Devleti",
          period: "1037 - 1157",
        }}
      />
    </div>
  );
}
