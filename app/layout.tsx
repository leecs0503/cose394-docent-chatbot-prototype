import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
<<<<<<< HEAD
      <body className="relative max-w-2xl mx-auto min-h-[100dvh]">
        {children}
      </body>
=======
      <body>{children}</body>
>>>>>>> 0f5f825 (init: Tailwind CSS 작동에 필요한 의존성 설치 및 globals.css 작성)
    </html>
  );
}
