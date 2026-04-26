"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export function HeroImage({ src, alt, caption }: HeroImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="container mx-auto px-4 max-w-5xl mt-[-2rem] mb-12 relative z-10"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl border-4 border-background/50">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {caption && (
          <div className="absolute bottom-4 right-6 text-white/90 text-sm font-medium drop-shadow-md">
            {caption}
          </div>
        )}
      </div>
    </motion.div>
  );
}
