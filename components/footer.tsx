import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 pattern-overlay">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">
                  T
                </span>
              </div>
              <span className="font-serif font-semibold text-lg">
                Tarih Portali
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Orta Asya&apos;dan Anadolu&apos;ya uzanan Turk devletlerinin ve
              goc yollarinin hikayesini kesfetmeye hazir misiniz?
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">Turk Devletleri</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/asya-hun"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Asya Hun Devleti
                </Link>
              </li>
              <li>
                <Link
                  href="/avrupa-hun"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Avrupa Hun Devleti
                </Link>
              </li>
              <li>
                <Link
                  href="/gokturk"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Gokturk Devleti
                </Link>
              </li>
              <li>
                <Link
                  href="/uygur"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Uygur Devleti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">
              Daha Fazla Kefset
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/karahanli"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Karahanli Devleti
                </Link>
              </li>
              <li>
                <Link
                  href="/gazneli"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Gazneli Devleti
                </Link>
              </li>
              <li>
                <Link
                  href="/buyuk-selcuklu"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Buyuk Selcuklu Devleti
                </Link>
              </li>
              <li>
                <Link
                  href="/anadolu-selcuklu"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Anadolu Selcuklu Devleti
                </Link>
              </li>
              <li>
                <Link
                  href="/goc-yollari"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Goc Yollari Haritasi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Bu portal, Turk tarihini gelecek nesillere aktarmak amaciyla
            hazirlanmistir.
          </p>
        </div>
      </div>
    </footer>
  );
}
