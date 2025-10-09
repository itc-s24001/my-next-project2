import "./globals.css";
import Heder from "./_components/Header";
import Footer from "./_components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Heder />
        {children}
        <Footer />
      </body>
    </html>
  );
}
