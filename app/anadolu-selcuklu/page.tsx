import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { HeroImage } from "@/components/hero-image";
import { ContentSection } from "@/components/content-section";
import { InfoSection } from "@/components/info-section";

import { NavigationCards } from "@/components/navigation-cards";
import { Sword, Users, Landmark, Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "Anadolu Selçuklu Devleti | Türk Devletleri ve Göç Yolları",
  description:
    "Anadolu'da kurulan ilk Türk devleti. Konya merkezli, zengin mimarî ve kültürel mirası ile öne çıkan Türkiye Selçukluları.",
};

export default function AnadoluSelcukluPage() {
  const infoItems = [
    {
      icon: Sword,
      title: "Önemli Savaşlar",
      items: [
        "Miryokefalon Savaşı (1176) - Bizans'a kesin zafer",
        "Yassıçemen Savaşı (1230) - Harezmşahlara zafer",
        "Kösedağ Savaşı (1243) - Moğollara yenilgi",
      ],
    },
    {
      icon: Users,
      title: "Önemli Kişiler",
      items: [
        "Kutalmışoğlu Süleyman Şah - Kurucu",
        "I. Kılıç Arslan - Haçlı savaşları kahramanı",
        "I. Alâeddin Keykubat - En büyük hükümdar",
      ],
    },
    {
      icon: Landmark,
      title: "Başkentler",
      items: [
        "İznik - İlk başkent",
        "Konya - Uzun süreli başkent",
        "Kayseri, Sivas - Önemli şehirler",
      ],
    },
    {
      icon: Palette,
      title: "Mimarî Miras",
      items: [
        "Kervansaraylar (Sultanhanı, Ağzıkarahan)",
        "Medreseler (Çifte Minareli, Gök Medrese)",
        "Camiler ve Türbeler",
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        emoji="🏛️"
        title="Anadolu Selçuklu Devleti"
        subtitle="Anadolu'da kurulan ilk Türk devleti. Konya'yı başkent yapan, zengin mimarî ve kültürel miras bırakan Türkiye Selçukluları."
        period="1077 - 1308"
        location="Anadolu"
        founder="Kutalmışoğlu Süleyman Şah"
      />

      <HeroImage
        src="/images/anadolu-selcuklu.jpg"
        alt="Kervansaray ve Anadolu taş işçiliği"
        caption="Anadolu Selçuklu Kervansarayları"
      />

      <ContentSection title="Anadolu'nun Türkleşmesi">
        <p>
          Malazgirt Zaferi&apos;nden sonra Anadolu&apos;ya akın eden Türk
          boyları, bu topraklarda kalıcı yerleşmeler kurmaya başlamıştır.
          1077 yılında Kutalmışoğlu Süleyman Şah, İznik&apos;i başkent yaparak
          Anadolu Selçuklu Devleti&apos;ni kurmuştur.
        </p>
        <p className="mt-4">
          Bu devlet, &quot;Türkiye&quot; adının ilk kez kullanıldığı siyasî
          yapı olmuştur. Anadolu, artık Türk yurdu olarak anılmaya
          başlamıştır. Devlet, yüzyıllar boyunca Anadolu&apos;nun
          Türkleştirilmesinde merkezî rol oynamıştır.
        </p>
      </ContentSection>

      <InfoSection
        title="Anadolu Selçuklu Devleti Hakkında"
        description="Anadolu'da Türk-İslâm medeniyetinin temelleri"
        items={infoItems}
      />

      <ContentSection
        title="Haçlı Seferleri ve Mücadele"
        className="bg-muted/30"
      >
        <p>
          1096 yılında başlayan Haçlı Seferleri, Anadolu Selçuklu
          Devleti&apos;ni doğrudan etkilemiştir. I. Kılıç Arslan, ilk Haçlı
          ordularına karşı başarılı savunma yapmış ve Haçlıların ilerlemesini
          yavaşlatmıştır.
        </p>
        <p className="mt-4">
          Ancak başkent İznik 1097&apos;de Haçlılara kaybedilmiş ve başkent
          Konya&apos;ya taşınmıştır. Bu zorunlu göç, aslında devletin
          Anadolu&apos;nun iç kesimlerinde güçlü bir şekilde yerleşmesini
          sağlamıştır.
        </p>
        <p className="mt-4">
          1176 yılındaki Miryokefalon Savaşı, Bizans&apos;ın Anadolu&apos;yu geri
          alma umutlarını tamamen yok etmiştir. Bu zafer, Anadolu&apos;nun
          kesin olarak Türk yurdu olduğunu kanıtlamıştır.
        </p>
      </ContentSection>

      <ContentSection title="I. Alâeddin Keykubat Dönemi">
        <p>
          I. Alâeddin Keykubat (1220-1237), Anadolu Selçuklu Devleti&apos;nin
          en büyük hükümdarıdır. Onun döneminde devlet, siyasî, ekonomik
          ve kültürel açıdan zirveye ulaşmıştır.
        </p>
        <p className="mt-4">
          Akdeniz&apos;de Alanya fethedilmiş ve Selçuklu donanması
          kurulmuştur. Karadeniz&apos;de Sinop ve Suğdak limanları ele
          geçirilmiş, deniz ticareti canlandırılmıştır.
        </p>
        <p className="mt-4">
          Bu dönemde inşa edilen kervansaraylar, Anadolu&apos;yu önemli bir
          ticaret merkezi haline getirmiştir. Sultanhanı ve Ağzıkarahan
          gibi yapılar, bugün hâlâ ayakta duran mimarî şaheserlerdir.
        </p>
      </ContentSection>

      <ContentSection title="Moğol İstilası ve Çöküş" className="bg-muted/30">
        <p>
          1243 yılındaki Kösedağ Savaşı, Anadolu Selçuklu tarihinin en
          büyük felaketi olmuştur. Moğollara karşı kaybedilen bu savaş
          sonucu devlet, Moğol hâkimiyetine girmiştir.
        </p>
        <p className="mt-4">
          Bundan sonra Anadolu Selçukluları, Moğollara bağlı bir vasal
          devlet olarak varlığını sürdürmüştür. Merkezî otorite zayıflamış
          ve Anadolu&apos;da beylikler dönemi başlamıştır.
        </p>
        <p className="mt-4">
          1308 yılında devlet resmen sona ermiş, ancak Türk beylikleri
          Selçuklu mirasını sürdürmüştür. Bu beyliklerden Osmanlılar,
          dünya tarihinin en büyük imparatorluklarından birini kuracaktır.
        </p>
      </ContentSection>

      <ContentSection title="Kültürel Miras">
        <p>
          Anadolu Selçukluları, benzersiz bir mimarî miras bırakmıştır.
          Kervansaraylar, medreseler, camiler ve türbeler, Selçuklu
          sanatının en güzel örnekleridir.
        </p>
        <p className="mt-4">
          Konya&apos;daki Alâeddin Camii, Karatay Medresesi ve İnce Minareli
          Medrese; Sivas&apos;taki Çifte Minareli Medrese ve Gök Medrese;
          Kayseri&apos;deki Hunat Hatun Külliyesi bu mirası temsil etmektedir.
        </p>
        <p className="mt-4">
          Ayrıca Mevlânâ Celâleddin Rûmî gibi büyük düşünürler bu
          dönemde yaşamış ve Anadolu&apos;yu tasavvufun merkezi haline
          getirmiştir.
        </p>
      </ContentSection>



      <NavigationCards
        previous={{
          href: "/buyuk-selcuklu",
          title: "Büyük Selçuklu Devleti",
          period: "1037 - 1157",
        }}
      />
    </div>
  );
}
