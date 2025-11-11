import { ARK_META } from "@/constants";
import { INTER_CLASS } from "@/styles";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { MainHeader } from "@/components/layouts/navigation";
import { Footer } from "@/components/layouts/footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: ARK_META.title,
  description: ARK_META.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${INTER_CLASS} antialiased`}>
        <NextTopLoader color="var(--tertiary)" />
        <MainHeader />
        <main
          id="main-content"
          className="relative max-w-[1728px] mx-auto"
          role="main"
        >
          {children}
        </main>
        <Footer />
        <Toaster
          toastOptions={{
            duration: 6000,
          }}
        />
      </body>
    </html>
  );
}
