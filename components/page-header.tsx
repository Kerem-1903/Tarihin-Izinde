import { Calendar, MapPin, Crown } from "lucide-react";

interface PageHeaderProps {
  emoji: string;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  founder?: string;
}

export function PageHeader({
  emoji,
  title,
  subtitle,
  period,
  location,
  founder,
}: PageHeaderProps) {
  return (
    <section className="relative py-16 md:py-24 pattern-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl">
            {emoji}
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
            {subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-base">
            <span className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-foreground">{period}</span>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-foreground">{location}</span>
            </span>
            {founder && (
              <span className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <Crown className="w-4 h-4 text-primary" />
                <span className="text-foreground">{founder}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
