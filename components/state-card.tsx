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
  image?: string;
}

export function StateCard({
  href,
  title,
  period,
  location,
  description,
  emoji,
  image,
}: StateCardProps) {
  return (
    <Link href={href}>
      <Card className="card-hover h-full border-border bg-card hover:border-primary/50 transition-all duration-300 group overflow-hidden flex flex-col">
        {image && (
          <div className="relative h-48 w-full overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={image} 
              alt={title} 
              className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex items-center justify-center text-2xl">
                {emoji}
              </div>
            </div>
          </div>
        )}
        <CardContent className={`p-6 flex-1 flex flex-col ${image ? "pt-5" : ""}`}>
          <div className="flex items-start gap-4 flex-1">
            {!image && (
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary/20 transition-colors">
                {emoji}
              </div>
            )}
            <div className="flex-1 flex flex-col min-w-0">
              <h3 className="font-serif font-semibold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1 bg-muted/50 px-2 py-0.5 rounded-md text-xs font-medium">
                  <Calendar className="w-3 h-3 text-primary" />
                  {period}
                </span>
                <span className="flex items-center gap-1 bg-muted/50 px-2 py-0.5 rounded-md text-xs font-medium line-clamp-1">
                  <MapPin className="w-3 h-3 text-primary" />
                  {location}
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground line-clamp-2 leading-relaxed flex-1">
                {description}
              </p>
              <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-primary">
                Tarihi Keşfet
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
