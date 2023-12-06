import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <Script
          async
          src="https://us.umami.is/script.js"
          data-website-id="c6aeb1e1-7da3-4549-874e-b36b1d0063d7"
        />
      </head>
      <body className="relative max-w-2xl mx-auto min-h-[100dvh]">
        {children}
      </body>
    </html>
  );
}
