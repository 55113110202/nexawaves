import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'redirect',
    title: 'Redirect',
    type: 'document',
    fields: [
        defineField({
            name: 'source',
            title: 'Source Path',
            type: 'string',
            description: 'The path to redirect from (e.g., /old-page).',
            validation: (Rule) =>
                Rule.required().custom((value) => {
                    if (value && !value.startsWith('/')) {
                        return 'Source path must start with /'
                    }
                    return true
                }),
        }),
        defineField({
            name: 'destination',
            title: 'Destination',
            type: 'string',
            description: 'The path or URL to redirect to.',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'isPermanent',
            title: 'Permanent Redirect (301)',
            type: 'boolean',
            description: 'Use 301 for permanent moves, 302 for temporary.',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            source: 'source',
            destination: 'destination',
            isPermanent: 'isPermanent',
        },
        prepare({ source, destination, isPermanent }) {
            return {
                title: `${source} → ${destination}`,
                subtitle: isPermanent ? '301 Permanent' : '302 Temporary',
            }
        },
    },
})
