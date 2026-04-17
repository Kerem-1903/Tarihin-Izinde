import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContentSection } from "@/components/content-section";
import { InfoSection } from "@/components/info-section";
import { QRCodeSection } from "@/components/qr-code-section";
import { NavigationCards } from "@/components/navigation-cards";
import { BookOpen, Users, Landmark, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Karahanlı Devleti | Türk Devletleri ve Göç Yolları",
  description:
    "İlk Müslüman Türk devleti. Kaşgarlı Mahmut'un Divanu Lugati't-Türk ve Yusuf Has Hacib'in Kutadgu Bilig eserlerinin yazıldığı dönemin devleti.",
};

export default function KarahanliPage() {
  const infoItems = [
    {
      icon: BookOpen,
      title: "Önemli Eserler",
      items: [
        "Divanu Lugati't-Türk - Kaşgarlı Mahmut",
        "Kutadgu Bilig - Yusuf Has Hacib",
        "Atabetü'l Hakayık - Edip Ahmet Yükneki",
      ],
    },
    {
      icon: Users,
      title: "Önemli Kişiler",
      items: [
        "Satuk Buğra Han - İslâm'ı kabul eden ilk hükümdar",
        "Kaşgarlı Mahmut - Büyük dilci",
        "Yusuf Has Hacib - Siyasetname yazarı",
      ],
    },
    {
      icon: Landmark,
      title: "Başkentler",
      items: [
        "Balasagun - Doğu Karahanlılar",
        "Semerkant - Batı Karahanlılar",
        "Kaşgar - Kültürel merkez",
      ],
    },
    {
      icon: Star,
      title: "İlkler",
      items: [
        "İlk Müslüman Türk devleti",
        "Türkçede ilk İslâm edebiyatı",
        "Medrese geleneğinin başlangıcı",
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        emoji="🕌"
        title="Karahanlı Devleti"
        subtitle="İlk Müslüman Türk devleti. Türk-İslâm sentezinin temelleri bu dönemde atılmış, Türk dili ve edebiyatı altın çağını yaşamıştır."
        period="840 - 1212"
        location="Orta Asya (Mâverâünnehr - Doğu Türkistan)"
        founder="Bilge Kül Kadir Han"
      />

      <ContentSection title="İslâmiyet'in Kabulü">
        <p>
          Karahanlı Devleti, Türk tarihinin dönüm noktalarından birini
          oluşturur. 920 yılları civarında Satuk Buğra Han&apos;ın İslâmiyet&apos;i
          kabul etmesiyle Türkler, Müslüman dünya ile kalıcı bir bağ
          kurmuştur.
        </p>
        <p className="mt-4">
          Bu din değişikliği, sadece dinî değil, kültürel, sosyal ve siyasî
          alanda da köklü dönüşümler getirmiştir. Türk-İslâm sentezi bu
          dönemde şekillenmeye başlamış ve yüzyıllar boyunca Türk
          kimliğinin temelini oluşturmuştur.
        </p>
      </ContentSection>

      <InfoSection
        title="Karahanlı Devleti Hakkında"
        description="Türk-İslâm kültürünün temellerinin atıldığı dönem"
        items={infoItems}
      />

      <ContentSection
        title="Divanu Lugati't-Türk - Türkçenin Hazinesi"
        className="bg-muted/30"
      >
        <p>
          Kaşgarlı Mahmut tarafından 1072-1074 yılları arasında yazılan
          Divanu Lugati&apos;t-Türk, Türk dili ve kültürünün en önemli
          eserlerinden biridir. Araplara Türkçeyi öğretmek amacıyla yazılan
          bu sözlük, aynı zamanda bir ansiklopedi niteliği taşımaktadır.
        </p>
        <p className="mt-4">
          Eserde 7500&apos;den fazla Türkçe kelime, atasözleri, şiirler ve
          Türklerin yaşam biçimleri hakkında bilgiler yer almaktadır.
          Ayrıca ilk Türkçe dünya haritası da bu eserde bulunmaktadır.
        </p>
      </ContentSection>

      <ContentSection title="Kutadgu Bilig - Mutluluk Bilgisi">
        <p>
          1069 yılında Yusuf Has Hacib tarafından yazılan Kutadgu Bilig,
          Türk edebiyatının ilk siyasetnamesidir. &quot;Mutluluk Veren
          Bilgi&quot; anlamına gelen eser, ideal devlet yönetimi ve erdemli
          yaşam hakkında öğütler vermektedir.
        </p>
        <p className="mt-4">
          Eserde dört sembolik karakter üzerinden adalet, devlet, akıl ve
          kanaat kavramları işlenmiştir. Bugün bile güncelliğini koruyan
          bu eser, Türk siyasî düşüncesinin temel taşlarından biridir.
        </p>
      </ContentSection>

      <ContentSection title="İkiye Bölünme ve Yıkılış" className="bg-muted/30">
        <p>
          1042 yılında Karahanlı Devleti Doğu ve Batı olmak üzere ikiye
          bölünmüştür. Doğu Karahanlılar Balasagun, Batı Karahanlılar ise
          Semerkant merkezli olarak varlıklarını sürdürmüştür.
        </p>
        <p className="mt-4">
          Her iki devlet de zamanla Selçuklulara ve Karahitaylara bağlı
          hale gelmiştir. 1212 yılında Harezmşahlar tarafından tamamen
          ortadan kaldırılmışlardır.
        </p>
        <p className="mt-4">
          Ancak Karahanlılar, geride zengin bir edebiyat ve kültür mirası
          bırakmıştır. Türk-İslâm medeniyetinin temelleri bu dönemde
          atılmış ve sonraki devletlere ilham kaynağı olmuştur.
        </p>
      </ContentSection>

      <QRCodeSection
        url="https://tarih-portali.vercel.app/karahanli"
        title="Karahanlı Devleti - Tarih Portalı"
      />

      <NavigationCards
        previous={{
          href: "/uygur",
          title: "Uygur Devleti",
          period: "744 - 840",
        }}
        next={{
          href: "/gazneli",
          title: "Gazneli Devleti",
          period: "963 - 1187",
        }}
      />
    </div>
  );
}
