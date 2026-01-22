import { defineType, defineArrayMember } from 'sanity'
import { LinkIcon, CodeIcon } from '@sanity/icons'

export default defineType({
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
        defineArrayMember({
            title: 'Block',
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' },
            ],
            lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Numbered', value: 'number' },
            ],
            marks: {
                decorators: [
                    { title: 'Bold', value: 'strong' },
                    { title: 'Italic', value: 'em' },
                    { title: 'Underline', value: 'underline' },
                    { title: 'Code', value: 'code' },
                ],
                annotations: [
                    {
                        title: 'External Link',
                        name: 'link',
                        type: 'object',
                        icon: LinkIcon,
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url',
                                validation: (Rule: any) =>
                                    Rule.uri({
                                        scheme: ['http', 'https', 'mailto', 'tel'],
                                    }),
                            },
                            {
                                title: 'Open in new tab',
                                name: 'blank',
                                type: 'boolean',
                                initialValue: true,
                            },
                            {
                                title: 'No Follow',
                                name: 'noFollow',
                                type: 'boolean',
                                description: 'Add rel="nofollow" for sponsored/untrusted links.',
                                initialValue: false,
                            },
                        ],
                    },
                    {
                        title: 'Internal Link',
                        name: 'internalLink',
                        type: 'object',
                        icon: LinkIcon,
                        fields: [
                            {
                                name: 'reference',
                                type: 'reference',
                                to: [
                                    { type: 'post' },
                                    { type: 'category' },
                                ],
                            },
                        ],
                    },
                ],
            },
        }),
        defineArrayMember({
            type: 'image',
            options: { hotspot: true },
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
        defineArrayMember({
            title: 'Code Block',
            name: 'code',
            type: 'object',
            icon: CodeIcon,
            fields: [
                {
                    name: 'language',
                    title: 'Language',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'JavaScript', value: 'javascript' },
                            { title: 'TypeScript', value: 'typescript' },
                            { title: 'HTML', value: 'html' },
                            { title: 'CSS', value: 'css' },
                            { title: 'JSON', value: 'json' },
                            { title: 'Bash', value: 'bash' },
                            { title: 'Python', value: 'python' },
                            { title: 'Other', value: 'text' },
                        ],
                    },
                },
                {
                    name: 'code',
                    title: 'Code',
                    type: 'text',
                    rows: 10,
                },
                {
                    name: 'filename',
                    title: 'Filename',
                    type: 'string',
                    description: 'Optional filename to display above the code block.',
                },
            ],
            preview: {
                select: {
                    language: 'language',
                    filename: 'filename',
                },
                prepare({ language, filename }) {
                    return {
                        title: filename || 'Code Block',
                        subtitle: language,
                    }
                },
            },
        }),
    ],
})
