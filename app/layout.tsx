import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammed Saber — Frontend Developer & UI/UX Designer",
  description:
    "Premium websites for ambitious local businesses. Gyms, clinics, nurseries, restaurants, and construction companies that refuse to look amateur online.",
  openGraph: {
    title: "Mohammed Saber — Premium Websites for Local Businesses",
    description:
      "I design websites that look premium and convert visitors into clients.",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
