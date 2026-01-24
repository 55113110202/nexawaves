import { Metadata } from "next";
import { pageSEO, siteConfig, generateServiceSchema } from "@/lib/seo-config";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
    title: pageSEO.automotive.title,
    description: pageSEO.automotive.description,
    keywords: pageSEO.automotive.keywords,
    openGraph: {
        title: `${pageSEO.automotive.title} | ${siteConfig.name}`,
        description: pageSEO.automotive.description,
        url: `${siteConfig.url}/solutions/automotive`,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `${pageSEO.automotive.title} | ${siteConfig.name}`,
        description: pageSEO.automotive.description,
    },
    alternates: {
        canonical: `${siteConfig.url}/solutions/automotive`,
    },
};

export default function AutomotiveLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const serviceSchema = generateServiceSchema(
        "Automotive Website Development",
        pageSEO.automotive.description,
        `${siteConfig.url}/solutions/automotive`
    );

    return (
        <>
            <JsonLd data={serviceSchema} />
            {children}
        </>
    );
}
