import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContentSection } from "@/components/content-section";
import { InfoSection } from "@/components/info-section";
import { QRCodeSection } from "@/components/qr-code-section";
import { NavigationCards } from "@/components/navigation-cards";
import { Sword, Users, Landmark, Scroll } from "lucide-react";

export const metadata: Metadata = {
  title: "Asya Hun Devleti | Turk Devletleri ve Goc Yollari",
  description:
    "Tarihte bilinen ilk buyuk Turk devleti olan Asya Hun Devleti hakkinda detayli bilgi. MO 220 - MS 216 yillari arasinda Orta Asya'da hakimiyet kurmus buyuk bir imparatorluk.",
};

export default function AsyaHunPage() {
  const infoItems = [
    {
      icon: Sword,
      title: "Onemli Savaslar",
      items: [
        "Cin Seddi'nin yapilmasina sebep olan savaslar",
        "Mete Han'in Cin'i vergiye baglamasi",
        "Bati'ya dogru fetih hareketleri",
      ],
    },
    {
      icon: Users,
      title: "Onemli Kisiler",
      items: [
        "Teoman - Devletin kurucusu",
        "Mete Han - En buyuk hukumdar",
        "Ki-ok - Mete'nin oglu ve halef",
      ],
    },
    {
      icon: Landmark,
      title: "Baskent ve Topraklar",
      items: [
        "Otuken - Kutsal baskent",
        "Mogolistan bozkırlari",
        "Cin sinirlarindan Orta Asya'ya",
      ],
    },
    {
      icon: Scroll,
      title: "Kulturel Miras",
      items: [
        "Onlu sistem (askeri teskilat)",
        "Kurultay gelenegi",
        "At ve ok kulturu",
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        emoji="🏹"
        title="Asya Hun Devleti"
        subtitle="Tarihte bilinen ilk buyuk Turk devleti. Bozkırların ilk efendileri, Cin Seddi'nin yapilmasina sebep olan kudretli imparatorluk."
        period="MO 220 - MS 216"
        location="Orta Asya (Mogolistan)"
        founder="Teoman"
      />

      <ContentSection title="Devletin Kurulusu ve Yukselisi">
        <p>
          Asya Hun Devleti, tarihte bilinen ilk buyuk Turk devleti olarak kabul
          edilir. Milattan once 220 yilinda Teoman tarafindan kurulan devlet,
          Orta Asya bozkırlarinda guclu bir imparatorluk haline gelmistir.
        </p>
        <p className="mt-4">
          Hunlar, atlı gocebe bir yasam surduruyor ve savasci bir toplum
          yapisina sahipti. Teoman doneminde devlet temelleri atilmis, ancak en
          parlak donem oglu Mete Han zamaninda yasanmistir.
        </p>
      </ContentSection>

      <InfoSection
        title="Asya Hun Devleti Hakkinda"
        description="Hunlarin devlet yapisi, savas stratejileri ve kulturel ozellikleri"
        items={infoItems}
      />

      <ContentSection title="Mete Han Donemi" className="bg-muted/30">
        <p>
          Mete Han (MO 209-174), Turk tarihinin en onemli hukumdarlarindan
          biridir. Babasini tahttan indirerek basna gecmis ve devleti en genis
          sinirlarına ulastirmistir.
        </p>
        <p className="mt-4">
          Mete Han&apos;in en onemli basarilarindan biri, Cin&apos;i vergiye
          baglamasidir. Ayrica &quot;onlu sistem&quot; olarak bilinen askeri
          teskilati kurmus ve bu sistem yuzyllarca Turk devletlerinde
          kullanilmistir.
        </p>
        <p className="mt-4">
          Bu sistem, orduyu onlar, yuzler, binler ve on binler seklinde
          organize etmis ve disiplini ile esnekligi bir arada sunmustur.
        </p>
      </ContentSection>

      <ContentSection title="Cin Seddi ve Hunlar">
        <p>
          Cin Seddi&apos;nin yapilmasinin ana sebebi Hun akınlarindan korunmaktir.
          Cin imparatorlugu, Hun atlılarinin akınlarına karsi bu devasa savunma
          hattini insa etmistir.
        </p>
        <p className="mt-4">
          Ancak sed bile Hunlari durduramami ve Cin, uzun yillar Hunlara vergi
          odemek zorunda kalmistir. Bu durum, Hunlarin gucunu ve etkisini acikca
          gostermektedir.
        </p>
      </ContentSection>

      <ContentSection title="Yikilis ve Mirasi" className="bg-muted/30">
        <p>
          Asya Hun Devleti, ic karisikliklar ve taht kavgalari sonucu
          zayiflamaya baslamistir. MS 48 yilinda devlet ikiye bolunmus: Kuzey
          Hunlari ve Guney Hunlari.
        </p>
        <p className="mt-4">
          Kuzey Hunlari batiya goc ederek Avrupa Hun Devleti&apos;nin temellerini
          atmis, Guney Hunlari ise Cin&apos;e baglanmistir. Bu goc, Kavimler
          Gocu&apos;nu tetikleyerek dunya tarihinin seyrini degistirmistir.
        </p>
      </ContentSection>

      <QRCodeSection
        url="https://tarih-portali.vercel.app/asya-hun"
        title="Asya Hun Devleti - Tarih Portali"
      />

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
