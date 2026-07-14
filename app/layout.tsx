import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Paharpur Fiber Net & LPG Gas',
  description: "পাহাড়পুর বাজার মন্টু মেম্বার এর বাসা ২য় তলা",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <head>
        <meta name="google-site-verification" content="GOHtXGInf5H9JJqjAedrhKYzsU4RNaZpkgCWKpKHIL0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
