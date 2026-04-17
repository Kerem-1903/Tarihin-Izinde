"use client";

import { QRCodeSVG } from "qrcode.react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QRCodeSectionProps {
  url: string;
  title: string;
}

export function QRCodeSection({ url, title }: QRCodeSectionProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
      } catch {
        // User cancelled share
      }
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card className="border-border bg-card text-center">
            <CardHeader>
              <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                <QrCode className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="font-serif">Bu Sayfayi Paylas</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <div className="qr-container">
                <QRCodeSVG
                  value={url}
                  size={160}
                  level="M"
                  fgColor="#8b5a2b"
                  bgColor="#ffffff"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                QR kodu tarayarak bu sayfaya ulasabilirsiniz
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="gap-2"
              >
                <Share2 className="w-4 h-4" />
                Paylas
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
