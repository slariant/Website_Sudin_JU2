import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ChatBotButton from "@/components/ChatBotButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Suku Dinas Pendidikan Wilayah II Jakarta Utara",
    description: "Mendukung peningkatan mutu pendidikan yang berkualitas, inklusif, dan inovatif.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id" className="scroll-smooth">
            <body className={`${inter.variable} font-sans antialiased`}>
                {children}
                <ChatBotButton />
            </body>
        </html>
    );
}
