import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maksim Bogachuk - Frontend Developer",
  description: "Angehender Frontend-Entwickler mit einer Leidenschaft für die Erstellung ansprechender und übersichtlicher Benutzeroberflächen. HTML, CSS, JavaScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
