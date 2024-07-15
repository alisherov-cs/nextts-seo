import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nextjs + SEO",
    description:
        "dummy website developed with nextjs to test out SEO in nextjs",
    openGraph: {
        title: "Nextjs + SEO",
        description:
            "dummy website developed with nextjs to test out SEO in nextjs",
        url: "https://nextts-seo.vercel.app",
    },
    twitter: {
        title: "Nextjs + SEO",
        description:
            "dummy website developed with nextjs to test out SEO in nextjs",
    },
};

const jsonLd = {
    "@context": "https://nextts-seo.vercel.app",
    "@type": "Website",
    name: "Nextjs + SEO",
    image: "https://nextts-seo.vercel.app/next.svg",
    description:
        "dummy website developed with nextjs to test out SEO in nextjs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </body>
        </html>
    );
}
