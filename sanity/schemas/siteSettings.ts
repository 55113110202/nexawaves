import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    groups: [
        { name: 'general', title: 'General', default: true },
        { name: 'seo', title: 'SEO & Social' },
        { name: 'contact', title: 'Contact' },
    ],
    fields: [
        // General
        defineField({
            name: 'siteTitle',
            title: 'Site Title',
            type: 'string',
            group: 'general',
            description: 'The name of your website. Used as suffix in page titles.',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'organizationName',
            title: 'Organization Name',
            type: 'string',
            group: 'general',
            description: 'Legal name for schema.org Organization.',
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            group: 'general',
            description: 'Logo for schema.org and Open Graph defaults.',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                },
            ],
        }),

        // SEO & Social
        defineField({
            name: 'defaultMetaDescription',
            title: 'Default Meta Description',
            type: 'text',
            rows: 3,
            group: 'seo',
            description: 'Fallback description for pages without their own.',
            validation: (Rule) =>
                Rule.max(160).warning('Descriptions over 160 characters may be truncated.'),
        }),
        defineField({
            name: 'defaultShareImage',
            title: 'Default Social Image',
            type: 'image',
            group: 'seo',
            description: 'Fallback image for social sharing. Recommended: 1200x630px.',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'socialProfiles',
            title: 'Social Profiles',
            type: 'array',
            group: 'seo',
            of: [{ type: 'url' }],
            description: 'Social media URLs for schema.org sameAs property.',
        }),
        defineField({
            name: 'googleAnalyticsId',
            title: 'Google Analytics ID',
            type: 'string',
            group: 'seo',
            description: 'GA4 Measurement ID (e.g., G-XXXXXXXX).',
        }),

        // Contact
        defineField({
            name: 'address',
            title: 'Address',
            type: 'object',
            group: 'contact',
            fields: [
                { name: 'street', title: 'Street Address', type: 'string' },
                { name: 'city', title: 'City', type: 'string' },
                { name: 'state', title: 'State/Region', type: 'string' },
                { name: 'postalCode', title: 'Postal Code', type: 'string' },
                { name: 'country', title: 'Country', type: 'string' },
            ],
        }),
        defineField({
            name: 'contactInfo',
            title: 'Contact Information',
            type: 'object',
            group: 'contact',
            fields: [
                { name: 'phone', title: 'Phone', type: 'string' },
                { name: 'email', title: 'Email', type: 'string' },
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Site Settings',
            }
        },
    },
})
