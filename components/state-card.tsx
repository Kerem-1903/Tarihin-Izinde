import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

interface StateCardProps {
  href: string;
  title: string;
  period: string;
  location: string;
  description: string;
  emoji: string;
}

export function StateCard({
  href,
  title,
  period,
  location,
  description,
  emoji,
}: StateCardProps) {
  return (
    <Link href={href}>
      <Card className="card-hover h-full border-border bg-card hover:border-primary/50 transition-all duration-300 group">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary/20 transition-colors">
              {emoji}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {location}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                {description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                Kesfet
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
