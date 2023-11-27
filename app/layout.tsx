import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="max-w-2xl mx-auto min-h-[100dvh]">{children}</body>
    </html>
  );
}
