import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
import "./_styles/global.scss";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";
import { Toaster } from "react-hot-toast";
import { Modal, ModalWindow } from "./_components/Modal";
import AgeGateModal from "./_components/AgeGateModal";

// import fonts
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

// add metadata
export const metadata: Metadata = {
  title: {
    template: "%s | SMOKE SIGNALS",
    default: "SMOKE SIGNALS",
  },
  description: "Smoke shop in Dover, NH",
};

// create root
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${bebasNeue.variable}`}>
        <Modal defaultOpenId="21modal">
          <Navigation />
          <Toaster position="top-center" />
          {children}
          <Footer />
          <AgeGateModal />
        </Modal>
      </body>
    </html>
  );
}
