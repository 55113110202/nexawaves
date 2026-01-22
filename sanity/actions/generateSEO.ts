import { useCallback, useState } from 'react'
import { DocumentActionProps, useDocumentOperation } from 'sanity'
import { SparklesIcon } from '@sanity/icons'

/**
 * Generate SEO Document Action
 * 
 * Adds a "Generate SEO" button to the Post document actions in Sanity Studio.
 * Calls the /api/generate-seo endpoint to generate all SEO fields using Mistral AI.
 */
export function GenerateSEOAction(props: DocumentActionProps) {
    const { published, draft } = props
    const doc = draft || published
    const { patch } = useDocumentOperation(props.id, props.type)
    const [isGenerating, setIsGenerating] = useState(false)

    const handleGenerate = useCallback(async () => {
        if (!doc) return

        const title = doc.title as string
        const body = doc.body as any[]

        if (!title) {
            alert('Please add a title first')
            return
        }

        // Extract text content from Portable Text body
        const content = body
            ?.filter((block: any) => block._type === 'block')
            ?.map((block: any) =>
                block.children
                    ?.map((child: any) => child.text)
                    ?.join('')
            )
            ?.join('\n') || ''

        if (!content) {
            alert('Please add some body content first')
            return
        }

        setIsGenerating(true)

        try {
            // Get image filename if available
            const mainImage = doc.mainImage as any
            const imageFilename = mainImage?.asset?._ref?.split('-')[1] || undefined

            const response = await fetch('/api/generate-seo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title,
                    content,
                    imageFilename,
                }),
            })

            if (!response.ok) {
                throw new Error('Failed to generate SEO')
            }

            const seoData = await response.json()

            // Patch the document with generated SEO data
            patch.execute([
                // Set excerpt
                { set: { excerpt: seoData.excerpt } },
                // Set SEO object
                {
                    set: {
                        seo: {
                            _type: 'seo',
                            metaTitle: seoData.metaTitle,
                            metaDescription: seoData.metaDescription,
                            keywords: seoData.keywords,
                        },
                    },
                },
                // Set main image alt and caption if image exists
                ...(mainImage
                    ? [
                        {
                            set: {
                                'mainImage.alt': seoData.mainImageAlt,
                                'mainImage.caption': seoData.mainImageCaption,
                            },
                        },
                    ]
                    : []),
            ])

            // Show success message
            alert(
                `✅ SEO Generated!\n\nMeta Title: ${seoData.metaTitle}\n\nSuggested Tags: ${seoData.suggestedTags.join(', ')}\n\n(Check the SEO tab and excerpt field)`
            )
        } catch (error) {
            console.error('SEO generation error:', error)
            alert('Failed to generate SEO. Check console for details.')
        } finally {
            setIsGenerating(false)
        }
    }, [doc, patch])

    // Only show for post documents
    if (props.type !== 'post') {
        return null
    }

    return {
        label: isGenerating ? 'Generating...' : 'Generate SEO',
        icon: SparklesIcon,
        disabled: isGenerating || !doc?.title,
        onHandle: handleGenerate,
        tone: 'primary' as const,
    }
}
