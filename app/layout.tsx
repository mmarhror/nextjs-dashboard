import "@/app/ui/global.css";
import { josefin } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${josefin.className}`}>{children}</body>
    </html>
  );
}
