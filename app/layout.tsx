import "@/app/ui/global.css";
import { inter } from '@/app/ui/fonts';
import { acme } from '@/app/ui/fonts';
import { lusitana } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${acme.className} antialiased`}>{children}</body>
    </html>
  );
}
