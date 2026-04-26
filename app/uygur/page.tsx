import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { HeroImage } from "@/components/hero-image";
import { ContentSection } from "@/components/content-section";
import { InfoSection } from "@/components/info-section";

import { NavigationCards } from "@/components/navigation-cards";
import { Building, Users, Landmark, Printer } from "lucide-react";

export const metadata: Metadata = {
  title: "Uygur Devleti | Türk Devletleri ve Göç Yolları",
  description:
    "Yerleşik hayata geçen ilk Türk devleti. Yazılı kültürü geliştiren, ticaret ve kültürde öne çıkan Uygur Devleti.",
};

export default function UygurPage() {
  const infoItems = [
    {
      icon: Building,
      title: "Şehirleşme",
      items: [
        "Karabalgasun - Başkent",
        "Beşbalık, Turfan şehirleri",
        "Tarım Havzası'nda kentleşme",
      ],
    },
    {
      icon: Users,
      title: "Önemli Kişiler",
      items: [
        "Kutluk Bilge Kül Kağan - Kurucu",
        "Böğü Kağan - Maniheizm'i kabul etti",
        "Bökü Kağan - Çin'e yardım etti",
      ],
    },
    {
      icon: Landmark,
      title: "Din ve İnanç",
      items: [
        "Maniheizm - Resmî din (762)",
        "Budizm'in yayılması",
        "Nesturi Hristiyanlık",
      ],
    },
    {
      icon: Printer,
      title: "Kültür ve Teknoloji",
      items: [
        "Yazılı kültürü geliştirdiler",
        "Uygur alfabesi",
        "Kâğıt ve kitap üretimi",
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        emoji="📜"
        title="Uygur Devleti"
        subtitle="Yerleşik hayata geçen ilk Türk devleti. Yazılı kültürü geliştiren, kültür ve ticarette zirveye ulaşan medeniyet."
        period="744 - 840"
        location="Orta Asya (Moğolistan - Doğu Türkistan)"
        founder="Kutluk Bilge Kül Kağan"
      />

      <HeroImage
        src="https://picsum.photos/seed/uygur/1600/900"
        alt="Uygur dönemi kalıntıları ve ipek yolu manzarası"
        caption="Turfan Bölgesi / İpek Yolu"
      />

      <ContentSection title="Göçebe Hayattan Yerleşik Medeniyete">
        <p>
          Uygur Devleti, 744 yılında Kutluk Bilge Kül Kağan tarafından
          kurulmuştur. Göktürklerin yıkılışının ardından Orta Asya&apos;nın yeni
          hâkimi olan Uygurlar, Türk tarihinde önemli bir dönüşüm geçirmiştir.
        </p>
        <p className="mt-4">
          Uygurlar, göçebe yaşam tarzından yerleşik hayata geçen ilk Türk
          topluluğudur. Şehirler kurmuş, tarım yapmış ve ticaretle
          zenginleşmiştir. Bu dönüşüm, Türk kültürünün gelişiminde büyük bir
          dönemeçtir.
        </p>
      </ContentSection>

      <InfoSection
        title="Uygur Devleti Hakkında"
        description="Kültürel gelişim, din değişiklikleri ve teknolojik ilerlemeler"
        items={infoItems}
      />

      <ContentSection title="Maniheizm ve Din Değişikliği" className="bg-muted/30">
        <p>
          762 yılında Böğü Kağan, Maniheizm&apos;i resmî din olarak kabul etmiştir.
          Bu, Türk tarihinde önemli bir kırılma noktasıdır çünkü Türkler ilk
          kez göçebe inançlarından farklı bir dini benimsemiştir.
        </p>
        <p className="mt-4">
          Maniheizm&apos;in temel ilkeleri arasında et yememek ve savaşlardan
          kaçınmak vardı. Bu durum, savaşçı Türk karakteriyle çelişmiş ve
          devletin askerî gücünü olumsuz etkilemiş olabilir.
        </p>
        <p className="mt-4">
          Aynı zamanda Budizm ve Nesturi Hristiyanlık da Uygurlar arasında
          yayılmıştır. Bu dinî çokkültürlüleşme, Uygur sanatına ve
          edebiyatına zenginlik katmıştır.
        </p>
      </ContentSection>

      <ContentSection title="Yazılı Kültür ve Miras">
        <p>
          Uygurlar, yazılı kültürü geliştiren önemli bir
          medeniyettir. Tahta kalıplarla baskı tekniği kullanılarak kitaplar
          çoğaltılmış ve bilgi yayılmıştır.
        </p>
        <p className="mt-4">
          Uygur alfabesi, Soğd alfabesinden türetilmiş olup daha sonra
          Moğollara ve Mançurlara geçmiştir. Bu alfabe, Orta Asya&apos;nın ortak
          yazı dili haline gelmiştir.
        </p>
        <p className="mt-4">
          Uygurlar ayrıca tercümanlık faaliyetleriyle de ünlüdür. Budist ve
          Maniheist metinleri Türkçeye çevirmiş, böylece zengin bir edebiyat
          mirası oluşturmuşlardır.
        </p>
      </ContentSection>

      <ContentSection title="Yıkılış ve Göç" className="bg-muted/30">
        <p>
          840 yılında Kırgızlar tarafından yıkılan Uygur Devleti, halkının
          büyük bir bölümü güneye ve batıya göç etmiştir. Turfan ve Kansu
          bölgelerinde yeni Uygur devletleri kurulmuştur.
        </p>
        <p className="mt-4">
          Bu göç sonrası kurulan devletler, Uygur kültürünü yüzyıllar boyunca
          yaşatmıştır. Uygur yazısı, edebiyatı ve sanatı, Moğol İmparatorluğu
          döneminde bile etkisini sürdürmüştür.
        </p>
      </ContentSection>



      <NavigationCards
        previous={{
          href: "/gokturk",
          title: "Göktürk Devleti",
          period: "552 - 745",
        }}
        next={{
          href: "/karahanli",
          title: "Karahanlı Devleti",
          period: "840 - 1212",
        }}
      />
    </div>
  );
}
