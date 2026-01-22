import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'seo',
    title: 'SEO & Social',
    type: 'object',
    fields: [
        defineField({
            name: 'metaTitle',
            title: 'Meta Title',
            type: 'string',
            description: 'Title for search engines. If empty, the page title will be used.',
            validation: (Rule) =>
                Rule.max(60).warning('Titles over 60 characters may be truncated in search results.'),
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            rows: 3,
            description: 'Description for search engines. If empty, the excerpt will be used.',
            validation: (Rule) =>
                Rule.max(160).warning('Descriptions over 160 characters may be truncated.'),
        }),
        defineField({
            name: 'canonicalUrl',
            title: 'Canonical URL',
            type: 'url',
            description: 'The preferred URL if this content appears at multiple URLs.',
            validation: (Rule) =>
                Rule.uri({
                    scheme: ['http', 'https'],
                }).error('Please enter a valid URL starting with http:// or https://'),
        }),
        defineField({
            name: 'noIndex',
            title: 'Hide from Search Engines',
            type: 'boolean',
            description: 'Prevent this page from appearing in search results.',
            initialValue: false,
        }),
        defineField({
            name: 'noFollow',
            title: 'No Follow Links',
            type: 'boolean',
            description: 'Prevent search engines from following links on this page.',
            initialValue: false,
        }),
        defineField({
            name: 'shareImage',
            title: 'Social Share Image',
            type: 'image',
            description: 'Image for social media previews. Recommended: 1200x630px.',
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
        defineField({
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Keywords for internal tagging (not a ranking factor).',
            options: {
                layout: 'tags',
            },
        }),
    ],
})
