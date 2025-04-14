import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
import "./_styles/global.scss";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Smoke Signals",
  description: "Smoke shop in Dover, NH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${bebasNeue.variable}`}>
        {children}
      </body>
    </html>
  );
}
