import { ScrollReveal } from "@/components/scroll-reveal";

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ContentSection({
  title,
  children,
  className = "",
}: ContentSectionProps) {
  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <ScrollReveal className="container mx-auto px-4" yOffset={20}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
            {title}
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            {children}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
