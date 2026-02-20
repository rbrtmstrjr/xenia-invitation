import type { Metadata } from "next";
import { Poppins, Great_Vibes } from "next/font/google";
import "./globals.css";
import invitationData from "@/data/invitationData.json";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: invitationData.meta.title,
  description: invitationData.meta.description,
  openGraph: {
    title: invitationData.meta.title,
    description: invitationData.meta.description,
    images: [{ url: invitationData.meta.ogImage }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: invitationData.meta.title,
    description: invitationData.meta.description,
    images: [invitationData.meta.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${greatVibes.variable} text-neutral-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
