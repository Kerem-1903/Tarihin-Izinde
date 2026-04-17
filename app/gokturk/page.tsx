import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContentSection } from "@/components/content-section";
import { InfoSection } from "@/components/info-section";
import { QRCodeSection } from "@/components/qr-code-section";
import { NavigationCards } from "@/components/navigation-cards";
import { Sword, Users, Landmark, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Göktürk Devleti | Türk Devletleri ve Göç Yolları",
  description:
    "'Türk' adını kullanan ilk devlet. Orhun Kitabeleri ile Türk tarihine en önemli yazılı kaynakları bırakan Göktürk Devleti.",
};

export default function GokturkPage() {
  const infoItems = [
    {
      icon: Sword,
      title: "Önemli Savaşlar",
      items: [
        "Juan-Juan Devleti'ne karşı isyan (552)",
        "Sasani ve Bizans'a karşı ittifaklar",
        "Çin'e karşı mücadeleler",
      ],
    },
    {
      icon: Users,
      title: "Önemli Kişiler",
      items: [
        "Bumin Kağan - Kurucu",
        "İstemi Yabgu - Batı kanadının lideri",
        "Bilge Kağan - Kitabelerin sahibi",
        "Kül Tigin - Büyük komutan",
      ],
    },
    {
      icon: Landmark,
      title: "Başkent ve Topraklar",
      items: [
        "Ötüken - Kutsal başkent",
        "Mançurya'dan Karadeniz'e",
        "Sibirya'dan Tibet'e",
      ],
    },
    {
      icon: BookOpen,
      title: "Yazılı Miras",
      items: [
        "Orhun Kitabeleri (8. yüzyıl)",
        "Göktürk alfabesi",
        "Türk adının ilk yazılı kullanımı",
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        emoji="🐺"
        title="Göktürk Devleti"
        subtitle="'Türk' adını resmen kullanan ilk devlet. Orhun Kitabeleri ile Türk milletine kalan en değerli yazılı miras."
        period="552 - 745"
        location="Orta Asya"
        founder="Bumin Kağan"
      />

      <ContentSection title="Devletin Kuruluşu">
        <p>
          Göktürk Devleti, 552 yılında Bumin Kağan tarafından kurulmuştur.
          Göktürkler, Juan-Juan (Avar) hâkimiyeti altında demirci olarak
          çalışıyorlardı. Bumin Kağan önderliği altında isyan ederek
          bağımsızlıklarını kazandılar.
        </p>
        <p className="mt-4">
          &quot;Türk&quot; adını resmî olarak kullanan ilk devlet olan
          Göktürkler, kısa sürede Orta Asya&apos;nın en büyük gücü haline
          gelmiştir. Devlet, Mançurya&apos;dan Karadeniz&apos;e kadar uzanan
          geniş topraklara hâkim olmuştur.
        </p>
      </ContentSection>

      <InfoSection
        title="Göktürk Devleti Hakkında"
        description="Türk tarihinin en önemli devletlerinden birinin özellikleri"
        items={infoItems}
      />

      <ContentSection title="Doğu ve Batı Göktürkler" className="bg-muted/30">
        <p>
          Göktürk Devleti, kuruluş aşamasından itibaren iki kanattan oluşuyordu.
          Bumin Kağan doğu kanadının, kardeşi İstemi Yabgu ise batı kanadının
          başında bulunuyordu.
        </p>
        <p className="mt-4">
          582 yılında devlet resmen ikiye bölünmüştür. Doğu Göktürkler Çin ile
          mücadele ederken, Batı Göktürkler Sasani ve Bizans ile ilişkiler
          kurmuştur. İpek Yolu ticareti üzerinde önemli bir kontrol sağlanmıştır.
        </p>
      </ContentSection>

      <ContentSection title="Orhun Kitabeleri - Türkçenin İlk Anıtı">
        <p>
          Orhun Kitabeleri, Türk tarihinin en önemli yazılı kaynaklarıdır.
          8. yüzyılda dikilen bu kitabeler, Bilge Kağan, Kül Tigin ve Tonyukuk
          adına yazılmıştır.
        </p>
        <p className="mt-4">
          Kitabeler, Göktürk alfabesiyle yazılmış olup Türk milletine hitap
          etmektedir. &quot;Türk milleti, yok olacaktın. Türk milleti, titre ve
          kendine dön!&quot; gibi ifadeler, millî bilincin ilk yazılı
          örneklerini oluşturmaktadır.
        </p>
        <p className="mt-4">
          Bu kitabeler, Türklerin devlet anlayışını, savaş stratejilerini ve
          toplumsal değerlerini günümüze ulaştıran eşsiz belgelerdir.
        </p>
      </ContentSection>

      <ContentSection title="II. Göktürk (Kutluk) Devleti" className="bg-muted/30">
        <p>
          630 yılında Çin hâkimiyetine giren Göktürkler, 682 yılında Kutluk
          Kağan önderliği altında yeniden bağımsızlık kazanmıştır. Bu dönem
          &quot;II. Göktürk&quot; veya &quot;Kutluk Devleti&quot; olarak
          adlandırılır.
        </p>
        <p className="mt-4">
          Bilge Kağan ve kardeşi Kül Tigin döneminde devlet yeniden güçlü bir
          konuma ulaşmıştır. Ancak iç karışıklıklar sonucu 745 yılında
          Uygurlara yenilerek tarih sahnesinden çekilmiştir.
        </p>
      </ContentSection>

      <QRCodeSection
        url="https://tarih-portali.vercel.app/gokturk"
        title="Göktürk Devleti - Tarih Portalı"
      />

      <NavigationCards
        previous={{
          href: "/avrupa-hun",
          title: "Avrupa Hun Devleti",
          period: "375 - 469",
        }}
        next={{
          href: "/uygur",
          title: "Uygur Devleti",
          period: "744 - 840",
        }}
      />
    </div>
  );
}
