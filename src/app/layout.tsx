import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
  import { Montserrat_Alternates } from 'next/font/google';
import "./globals.css";
  
 const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '700'], // ajusta según lo que necesites
  variable: '--font-montserrat-alternates', // nombre de la CSS variable
  display: 'swap',
});
    // app/layout.tsx or pages/_app.tsx
    import { Montserrat } from 'next/font/google';

    const montserrat = Montserrat({
      subsets: ['latin'],
      display: 'swap', // Recommended for better font loading
      variable: '--font-montserrat', // Optional: for use with Tailwind CSS
      // If you need specific weights, add them here:
      // weight: ['300', '400', '500', '700'],
    });


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserratAlternates.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.parranopolisstudio.com"),
  title: "Parranopolis Studio — Custom Software & Automations for SMBs in Denver",
  description:
    "We build fast, modern websites, web & mobile apps, and AI automations for small businesses in Colorado.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Parranopolis Studio",
    description:
      "Custom software, web & mobile apps, and automations for SMBs.",
    url: "/",
    siteName: "Parranopolis Studio",
    locale: "en_US",
    type: "website"
  },
  robots: { index: true, follow: true }
};
