import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { HeroImage } from "@/components/hero-image";
import { ContentSection } from "@/components/content-section";
import { InfoSection } from "@/components/info-section";

import { NavigationCards } from "@/components/navigation-cards";
import { Sword, Users, Landmark, Scroll } from "lucide-react";

export const metadata: Metadata = {
  title: "Asya Hun Devleti | Türk Devletleri ve Göç Yolları",
  description:
    "Tarihte bilinen ilk büyük Türk devleti olan Asya Hun Devleti hakkında detaylı bilgi. MÖ 220 - MS 216 yılları arasında Orta Asya'da hâkimiyet kurmuş büyük bir imparatorluk.",
};

export default function AsyaHunPage() {
  const infoItems = [
    {
      icon: Sword,
      title: "Önemli Savaşlar",
      items: [
        "Çin Seddi'nin yapılmasına sebep olan savaşlar",
        "Mete Han'ın Çin'i vergiye bağlaması",
        "Batı'ya doğru fetih hareketleri",
      ],
    },
    {
      icon: Users,
      title: "Önemli Kişiler",
      items: [
        "Teoman - Devletin kurucusu",
        "Mete Han - En büyük hükümdar",
        "Ki-ok - Mete'nin oğlu ve halef",
      ],
    },
    {
      icon: Landmark,
      title: "Başkent ve Topraklar",
      items: [
        "Ötüken - Kutsal başkent",
        "Moğolistan bozkırları",
        "Çin sınırlarından Orta Asya'ya",
      ],
    },
    {
      icon: Scroll,
      title: "Kültürel Miras",
      items: [
        "Onlu sistem (askerî teşkilat)",
        "Kurultay geleneği",
        "At ve ok kültürü",
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        emoji="🏹"
        title="Asya Hun Devleti"
        subtitle="Tarihte bilinen ilk büyük Türk devleti. Bozkırların ilk efendileri, Çin Seddi'nin yapılmasına sebep olan kudretli imparatorluk."
        period="MÖ 220 - MS 216"
        location="Orta Asya (Moğolistan)"
        founder="Teoman"
      />

      <HeroImage
        src="https://picsum.photos/seed/asyahun/1600/900"
        alt="Asya Hun Bozkırları ve Atlar"
        caption="Orta Asya Bozkırları"
      />

      <ContentSection title="Devletin Kuruluşu ve Yükselişi">
        <p>
          Asya Hun Devleti, tarihte bilinen ilk büyük Türk devleti olarak kabul
          edilir. Milattan önce 220 yılında Teoman tarafından kurulan devlet,
          Orta Asya bozkırlarında güçlü bir imparatorluk haline gelmiştir.
        </p>
        <p className="mt-4">
          Hunlar, atlı göçebe bir yaşam sürüyor ve savaşçı bir toplum
          yapısına sahipti. Teoman döneminde devlet temelleri atılmış, ancak en
          parlak dönem oğlu Mete Han zamanında yaşanmıştır.
        </p>
      </ContentSection>

      <InfoSection
        title="Asya Hun Devleti Hakkında"
        description="Hunların devlet yapısı, savaş stratejileri ve kültürel özellikleri"
        items={infoItems}
      />

      <ContentSection title="Mete Han Dönemi" className="bg-muted/30">
        <p>
          Mete Han (MÖ 209-174), Türk tarihinin en önemli hükümdarlarından
          biridir. Babasını tahttan indirerek başa geçmiş ve devleti en geniş
          sınırlarına ulaştırmıştır.
        </p>
        <p className="mt-4">
          Mete Han&apos;ın en önemli başarılarından biri, Çin&apos;i vergiye
          bağlamasıdır. Ayrıca &quot;onlu sistem&quot; olarak bilinen askerî
          teşkilatı kurmuş ve bu sistem yüzyıllarca Türk devletlerinde
          kullanılmıştır.
        </p>
        <p className="mt-4">
          Bu sistem, orduyu onlar, yüzler, binler ve on binler şeklinde
          organize etmiş ve disiplini ile esnekliği bir arada sunmuştur.
        </p>
      </ContentSection>

      <ContentSection title="Çin Seddi ve Hunlar">
        <p>
          Çin Seddi&apos;nin yapılmasının ana sebebi Hun akınlarından korunmaktır.
          Çin İmparatorluğu, Hun atlılarının akınlarına karşı bu devasa savunma
          hattını inşa etmiştir.
        </p>
        <p className="mt-4">
          Ancak sed bile Hunları durduramamış ve Çin, uzun yıllar Hunlara vergi
          ödemek zorunda kalmıştır. Bu durum, Hunların gücünü ve etkisini açıkça
          göstermektedir.
        </p>
      </ContentSection>

      <ContentSection title="Yıkılış ve Mirası" className="bg-muted/30">
        <p>
          Asya Hun Devleti, iç karışıklıklar ve taht kavgaları sonucu
          zayıflamaya başlamıştır. MS 48 yılında devlet ikiye bölünmüş: Kuzey
          Hunları ve Güney Hunları.
        </p>
        <p className="mt-4">
          Kuzey Hunları batıya göç ederek Avrupa Hun Devleti&apos;nin temellerini
          atmış, Güney Hunları ise Çin&apos;e bağlanmıştır. Bu göç, Kavimler
          Göçü&apos;nü tetikleyerek dünya tarihinin seyrini değiştirmiştir.
        </p>
      </ContentSection>



      <NavigationCards
        next={{
          href: "/avrupa-hun",
          title: "Avrupa Hun Devleti",
          period: "375 - 469",
        }}
      />
    </div>
  );
}
