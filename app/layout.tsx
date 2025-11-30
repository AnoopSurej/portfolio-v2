import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anoop Surej | Personal Portfolio",
  description: "Full-stack developer with 2 years of experience",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden">
      <body
        className={`${inter.className} bg-slate-50 text-slate-950 relative pt-28 sm:pt-44 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden overflow-y-auto`}
      >
        <div className="bg-[#fbe2e3] fixed top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#c5e3fc] fixed top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <div className="bg-[#fbe2e3] fixed top-[40vh] -z-10 right-[-60rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] 2xl:h-[70.25rem] 2xl:w-[100.25rem] 2xl:opacity-25 2xl:right-[-70rem]"></div>
        <div className="bg-[#dbd7fb] fixed bottom-[-5rem] -z-10 right-[-60rem] h-[20.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-20rem] xl:left-[-15rem] 2xl:h-[50.25rem] 2xl:w-[100rem] 2xl:left-[-15rem] dark:bg-[#676394] opacity-20"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
