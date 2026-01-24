import { Metadata } from "next";
import { pageSEO, siteConfig, generateServiceSchema } from "@/lib/seo-config";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
    title: pageSEO.realEstate.title,
    description: pageSEO.realEstate.description,
    keywords: pageSEO.realEstate.keywords,
    openGraph: {
        title: `${pageSEO.realEstate.title} | ${siteConfig.name}`,
        description: pageSEO.realEstate.description,
        url: `${siteConfig.url}/solutions/real-estate`,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `${pageSEO.realEstate.title} | ${siteConfig.name}`,
        description: pageSEO.realEstate.description,
    },
    alternates: {
        canonical: `${siteConfig.url}/solutions/real-estate`,
    },
};

export default function RealEstateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const serviceSchema = generateServiceSchema(
        "Real Estate Website Development",
        pageSEO.realEstate.description,
        `${siteConfig.url}/solutions/real-estate`
    );

    return (
        <>
            <JsonLd data={serviceSchema} />
            {children}
        </>
    );
}
