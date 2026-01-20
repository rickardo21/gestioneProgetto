import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LayoutNavBar from "@/components/layout/navbar";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "EcoBase - Gestione Finanziaria",
    description: "La tua base per la gestione finanziaria. Semplice. Intelligente. Tua.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body
                className={`${poppins.variable} antialiased`}
            >
                <LayoutNavBar />
                {children}
            </body>
        </html>
    );
}
