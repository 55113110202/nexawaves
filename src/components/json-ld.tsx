// JSON-LD Structured Data Components
// Renders schema.org markup for SEO

interface JsonLdProps {
    data: object;
}

export function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// Pre-built schema components for common use cases
export function OrganizationJsonLd({ data }: { data: object }) {
    return <JsonLd data={data} />;
}

export function LocalBusinessJsonLd({ data }: { data: object }) {
    return <JsonLd data={data} />;
}

export function ServiceJsonLd({ data }: { data: object }) {
    return <JsonLd data={data} />;
}

export function WebsiteJsonLd({ data }: { data: object }) {
    return <JsonLd data={data} />;
}

// Combined schema for root layout (includes multiple schemas)
export function RootJsonLd({
    organization,
    localBusiness,
    website,
}: {
    organization: object;
    localBusiness: object;
    website: object;
}) {
    // Combine all schemas into a graph
    const graphData = {
        "@context": "https://schema.org",
        "@graph": [organization, localBusiness, website],
    };

    return <JsonLd data={graphData} />;
}
