import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    description: 'The official Next.js Course Dashboard, built with App Router.',
    images: [
      "https://thumbs.dreamstime.com/b/apartment-building-architectural-details-modern-39732665.jpg"
    ] 
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialised class => smooths out the font  */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
