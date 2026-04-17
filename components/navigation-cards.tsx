import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavLink {
  href: string;
  title: string;
  period: string;
}

interface NavigationCardsProps {
  previous?: NavLink;
  next?: NavLink;
}

export function NavigationCards({ previous, next }: NavigationCardsProps) {
  return (
    <section className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {previous ? (
              <Link href={previous.href} className="group">
                <Card className="h-full border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      Onceki Devlet
                    </div>
                    <h3 className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                      {previous.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {previous.period}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link href={next.href} className="group md:text-right">
                <Card className="h-full border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                      Sonraki Devlet
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h3 className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                      {next.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {next.period}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
