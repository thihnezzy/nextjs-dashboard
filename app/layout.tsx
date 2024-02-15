import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';

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
