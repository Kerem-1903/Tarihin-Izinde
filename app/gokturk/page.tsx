import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContentSection } from "@/components/content-section";
import { InfoSection } from "@/components/info-section";
import { QRCodeSection } from "@/components/qr-code-section";
import { NavigationCards } from "@/components/navigation-cards";
import { Sword, Users, Landmark, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Gokturk Devleti | Turk Devletleri ve Goc Yollari",
  description:
    "'Turk' adini kullanan ilk devlet. Orhun Kitabeleri ile Turk tarihine en onemli yazili kaynaklari birakan Gokturk Devleti.",
};

export default function GokturkPage() {
  const infoItems = [
    {
      icon: Sword,
      title: "Onemli Savaslar",
      items: [
        "Juan-Juan Devleti'ne karsi isyan (552)",
        "Sasani ve Bizans'a karsi ittifaklar",
        "Cin'e karsi mucadeleler",
      ],
    },
    {
      icon: Users,
      title: "Onemli Kisiler",
      items: [
        "Bumin Kagan - Kurucu",
        "Istemi Yabgu - Bati kanadının lideri",
        "Bilge Kagan - Kitabelerin sahibi",
        "Kultgin - Buyuk komutan",
      ],
    },
    {
      icon: Landmark,
      title: "Baskent ve Topraklar",
      items: [
        "Otuken - Kutsal baskent",
        "Mancurya'dan Karadeniz'e",
        "Sibirya'dan Tibet'e",
      ],
    },
    {
      icon: BookOpen,
      title: "Yazili Miras",
      items: [
        "Orhun Kitabeleri (8. yuzyil)",
        "Gokturk alfabesi",
        "Turk adının ilk yazili kullanimu",
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        emoji="🐺"
        title="Gokturk Devleti"
        subtitle="'Turk' adini resmren kullanan ilk devlet. Orhun Kitabeleri ile Turk milletine kalan en degerli yazili miras."
        period="552 - 745"
        location="Orta Asya"
        founder="Bumin Kagan"
      />

      <ContentSection title="Devletin Kurulusu">
        <p>
          Gokturk Devleti, 552 yilinda Bumin Kagan tarafindan kurulmustur.
          Gokturkler, Juan-Juan (Avar) hakimiyeti altinda demirci olarak
          calisiyorlardi. Bumin Kagan onderligi altinda isyan ederek
          bagimsizliklarini kazandilar.
        </p>
        <p className="mt-4">
          &quot;Turk&quot; adini resmi olarak kullanan ilk devlet olan
          Gokturkler, kisa surede Orta Asya&apos;nin en buyuk gucu haline
          gelmistir. Devlet, Mancurya&apos;dan Karadeniz&apos;e kadar uzanan
          genis topraklara hakim olmustur.
        </p>
      </ContentSection>

      <InfoSection
        title="Gokturk Devleti Hakkinda"
        description="Turk tarihinin en onemli devletlerinden birinin ozellikleri"
        items={infoItems}
      />

      <ContentSection title="Dogu ve Bati Gokturkler" className="bg-muted/30">
        <p>
          Gokturk Devleti, kurulus asamasindan itibaren iki kanattan olusuyordu.
          Bumin Kagan dogu kanadinın, kardesi Istemi Yabgu ise bati kanadinin
          basinda bulunuyordu.
        </p>
        <p className="mt-4">
          582 yilinda devlet resmen ikiye bolunmustur. Dogu Gokturkler Cin ile
          mucadele ederken, Bati Gokturkler Sasani ve Bizans ile iliskiler
          kurmustur. Ipek Yolu ticareti uzerinde onemli bir kontrol saglanmistir.
        </p>
      </ContentSection>

      <ContentSection title="Orhun Kitabeleri - Turkce'nin Ilk Aniti">
        <p>
          Orhun Kitabeleri, Turk tarihinin en onemli yazili kaynaklaridir.
          8. yuzyilda dikilen bu kitabeler, Bilge Kagan, Kultgin ve Tonyukuk
          adina yazilmistir.
        </p>
        <p className="mt-4">
          Kitabeler, Gokturk alfabesiyle yazilmis olup Turk milletine hitap
          etmektedir. &quot;Turk milleti, yokolacaktın. Turk milleti, titre ve
          kendine don!&quot; gibi ifadeler, milli bilincin ilk yazili
          orneklerini olusturmaktadir.
        </p>
        <p className="mt-4">
          Bu kitabeler, Turklerin devlet anlayisini, savas stratejilerini ve
          toplumsal degerlerini gunumuze ulastiran essiz belgelerdir.
        </p>
      </ContentSection>

      <ContentSection title="II. Gokturk (Kutluk) Devleti" className="bg-muted/30">
        <p>
          630 yilinda Cin hakimiyetine giren Gokturkler, 682 yilinda Kutluk
          Kagan onderligi altinda yeniden bagimsizlik kazanmistir. Bu donem
          &quot;II. Gokturk&quot; veya &quot;Kutluk Devleti&quot; olarak
          adlandirilir.
        </p>
        <p className="mt-4">
          Bilge Kagan ve kardesi Kultgin doneminde devlet yeniden guclu bir
          konuma ulastmistir. Ancak ic karisikliklar sonucu 745 yilinda
          Uygurlara yenilerek tarih sahnesinden cekilmistir.
        </p>
      </ContentSection>

      <QRCodeSection
        url="https://tarih-portali.vercel.app/gokturk"
        title="Gokturk Devleti - Tarih Portali"
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
