import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    groups: [
        { name: 'content', title: 'Content', default: true },
        { name: 'seo', title: 'SEO' },
        { name: 'meta', title: 'Meta' },
    ],
    fields: [
        // Content Group
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            group: 'content',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'content',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            group: 'content',
            description: 'Short summary for listings, RSS feeds, and meta description fallback.',
            validation: (Rule) =>
                Rule.max(200).warning('Keep excerpts under 200 characters for best display.'),
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            group: 'content',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    validation: (Rule: any) =>
                        Rule.required().warning('Alt text is crucial for accessibility and SEO.'),
                },
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                },
            ],
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
            group: 'content',
        }),

        // SEO Group
        defineField({
            name: 'seo',
            title: 'SEO Settings',
            type: 'seo',
            group: 'seo',
        }),

        // Meta Group
        defineField({
            name: 'authors',
            title: 'Authors',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'author' } }],
            group: 'meta',
            description: 'One or more authors for multi-author attribution.',
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
            group: 'meta',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'tag' } }],
            group: 'meta',
            description: 'Granular topic tags (e.g., "Next.js", "Figma").',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            group: 'meta',
            description: 'Publication date for sorting and schema.org datePublished.',
        }),
        defineField({
            name: 'updatedAt',
            title: 'Updated At',
            type: 'datetime',
            group: 'meta',
            description: 'Last major update date for schema.org dateModified.',
        }),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'authors.0.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
})
