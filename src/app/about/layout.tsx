import { Metadata } from "next";
import { pageSEO, siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
    title: pageSEO.about.title,
    description: pageSEO.about.description,
    keywords: pageSEO.about.keywords,
    openGraph: {
        title: `${pageSEO.about.title} | ${siteConfig.name}`,
        description: pageSEO.about.description,
        url: `${siteConfig.url}/about`,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `${pageSEO.about.title} | ${siteConfig.name}`,
        description: pageSEO.about.description,
    },
    alternates: {
        canonical: `${siteConfig.url}/about`,
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
