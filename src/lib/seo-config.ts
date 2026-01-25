// SEO Configuration for Nexawaves
// Centralized SEO constants and metadata generators

export const siteConfig = {
    name: "Nexawaves",
    tagline: "Technology That Brings Customers",
    url: "https://nexawaves.com",

    // Company Info (for LocalBusiness schema)
    company: {
        legalName: "Nexawaves",
        address: {
            street: "No 2A, 14th Cross, Balaji Layout",
            city: "Bangalore",
            state: "Karnataka",
            postalCode: "560056",
            country: "IN",
        },
        email: "hello@nexawaves.com",
        // TODO: Add real phone number
        phone: "+91 63601 14438",
    },

    // Social Links (update with real URLs)
    social: {
        twitter: "https://twitter.com/nexawaves",
        linkedin: "https://linkedin.com/company/nexawaves",
        instagram: "https://instagram.com/nexawaves",
        facebook: "https://facebook.com/nexawaves",
    },

    // Default OpenGraph image
    ogImage: "/og-image.jpg",
};

// Primary Keywords by Category
export const keywords = {
    brand: [
        "web design company Bangalore",
        "website development Bengaluru",
        "best web design company Bangalore",
        "professional web designers Bangalore",
        "top web design companies Bangalore 2025",
    ],
    services: [
        "responsive web design Bangalore",
        "SEO-friendly web design Bangalore",
        "custom web design Bangalore",
        "mobile-first web design Bangalore",
        "UI/UX web design Bangalore",
    ],
    realEstate: [
        "real estate website development Bangalore",
        "property listing website design",
        "realtor website development India",
        "real estate lead generation website",
    ],
    automotive: [
        "car dealer website design Bangalore",
        "automotive website development India",
        "used car dealership website",
        "vehicle inventory management website",
    ],
    ecommerce: [
        "Shopify development company Bangalore",
        "custom Shopify store development",
        "e-commerce website design Bengaluru",
        "WordPress WooCommerce development",
    ],
};

// Page-specific SEO configurations
export const pageSEO = {
    home: {
        title: "Best Web Design Company in Bangalore",
        description:
            "Top-rated web design agency in Bengaluru. SEO-optimized websites for Real Estate, Automotive & E-commerce. Get your free consultation today!",
        keywords: [...keywords.brand, ...keywords.services],
    },
    about: {
        title: "About Nexawaves | Web Design Agency Bengaluru",
        description:
            "Your digital growth partner in Bangalore. Research-first web design that brings customers. Meet the team building India's best business websites.",
        keywords: ["web design agency Bangalore", "digital growth partner Bengaluru"],
    },
    realEstate: {
        title: "Real Estate Website Development Bangalore",
        description:
            "Professional real estate website design in Bangalore. Property listings, OTP-verified leads, agent portals. Trusted by 50+ realtors. Free demo!",
        keywords: keywords.realEstate,
    },
    automotive: {
        title: "Car Dealer Website Design Bangalore",
        description:
            "Custom automotive website development in Bangalore. Showcase inventory 24/7, EMI calculators, test drive booking. Get your digital showroom today!",
        keywords: keywords.automotive,
    },
    ecommerce: {
        title: "Shopify Development Company Bangalore",
        description:
            "Custom Shopify & WordPress e-commerce in Bangalore. No templates—100% custom designs with built-in SEO. Stand out from competitors!",
        keywords: keywords.ecommerce,
    },
    contact: {
        title: "Contact Us | Web Design Consultation Bangalore",
        description:
            "Get in touch with Nexawaves for your web design project. Free consultation for Real Estate, Automotive & E-commerce websites in Bangalore.",
        keywords: ["contact web design Bangalore", "web design consultation"],
    },
};

// JSON-LD Schema Generators
export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        sameAs: Object.values(siteConfig.social),
        contactPoint: {
            "@type": "ContactPoint",
            telephone: siteConfig.company.phone,
            contactType: "sales",
            email: siteConfig.company.email,
            areaServed: "IN",
            availableLanguage: ["English", "Hindi", "Kannada"],
        },
    };
}

export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/#localbusiness`,
        name: siteConfig.name,
        description: pageSEO.home.description,
        url: siteConfig.url,
        telephone: siteConfig.company.phone,
        email: siteConfig.company.email,
        address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.company.address.street,
            addressLocality: siteConfig.company.address.city,
            addressRegion: siteConfig.company.address.state,
            postalCode: siteConfig.company.address.postalCode,
            addressCountry: siteConfig.company.address.country,
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 12.9716,
            longitude: 77.5946,
        },
        areaServed: [
            { "@type": "City", name: "Bangalore" },
            { "@type": "State", name: "Karnataka" },
            { "@type": "Country", name: "India" },
        ],
        priceRange: "₹₹",
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
        },
    };
}

export function generateWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: pageSEO.home.description,
        publisher: {
            "@id": `${siteConfig.url}/#organization`,
        },
    };
}

export function generateServiceSchema(
    serviceName: string,
    description: string,
    url: string
) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: serviceName,
        description: description,
        url: url,
        provider: {
            "@id": `${siteConfig.url}/#organization`,
        },
        areaServed: {
            "@type": "City",
            name: "Bangalore",
        },
        serviceType: "Web Design and Development",
    };
}
