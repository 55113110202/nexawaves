import { Metadata } from "next";
import { pageSEO, siteConfig, generateServiceSchema } from "@/lib/seo-config";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
    title: pageSEO.ecommerce.title,
    description: pageSEO.ecommerce.description,
    keywords: pageSEO.ecommerce.keywords,
    openGraph: {
        title: `${pageSEO.ecommerce.title} | ${siteConfig.name}`,
        description: pageSEO.ecommerce.description,
        url: `${siteConfig.url}/solutions/ecommerce`,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `${pageSEO.ecommerce.title} | ${siteConfig.name}`,
        description: pageSEO.ecommerce.description,
    },
    alternates: {
        canonical: `${siteConfig.url}/solutions/ecommerce`,
    },
};

export default function EcommerceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const serviceSchema = generateServiceSchema(
        "E-commerce Website Development",
        pageSEO.ecommerce.description,
        `${siteConfig.url}/solutions/ecommerce`
    );

    return (
        <>
            <JsonLd data={serviceSchema} />
            {children}
        </>
    );
}
