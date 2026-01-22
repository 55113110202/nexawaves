import { NextRequest, NextResponse } from 'next/server'
import { generateSEOMetadata, generateImageSEO } from '@/lib/mistral'

/**
 * POST /api/generate-seo
 * 
 * Generate comprehensive SEO metadata for a blog post using Mistral AI.
 * 
 * Request body:
 * {
 *   title: string (required) - Post title
 *   content: string (required) - Post body content
 *   imageFilename?: string - Optional main image filename for context
 * }
 * 
 * Response:
 * {
 *   metaTitle: string (max 60 chars)
 *   metaDescription: string (max 160 chars)
 *   excerpt: string (max 200 chars)
 *   keywords: string[]
 *   suggestedTags: string[]
 *   mainImageAlt: string
 *   mainImageCaption: string
 *   shareImageAlt: string
 * }
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { title, content, imageFilename } = body

        if (!title || !content) {
            return NextResponse.json(
                { error: 'Title and content are required' },
                { status: 400 }
            )
        }

        if (!process.env.MISTRAL_API_KEY) {
            return NextResponse.json(
                { error: 'MISTRAL_API_KEY is not configured' },
                { status: 500 }
            )
        }

        const seoMetadata = await generateSEOMetadata(title, content, imageFilename)

        return NextResponse.json(seoMetadata)
    } catch (error) {
        console.error('SEO generation error:', error)
        return NextResponse.json(
            { error: 'Failed to generate SEO metadata' },
            { status: 500 }
        )
    }
}

/**
 * PATCH /api/generate-seo
 * 
 * Generate only image-related SEO (alt text and caption).
 * Useful when adding/updating images after initial post creation.
 * 
 * Request body:
 * {
 *   postTitle: string (required)
 *   postExcerpt: string (required)
 *   imageFilename?: string
 * }
 * 
 * Response:
 * {
 *   alt: string
 *   caption: string
 * }
 */
export async function PATCH(request: NextRequest) {
    try {
        const body = await request.json()
        const { postTitle, postExcerpt, imageFilename } = body

        if (!postTitle || !postExcerpt) {
            return NextResponse.json(
                { error: 'postTitle and postExcerpt are required' },
                { status: 400 }
            )
        }

        if (!process.env.MISTRAL_API_KEY) {
            return NextResponse.json(
                { error: 'MISTRAL_API_KEY is not configured' },
                { status: 500 }
            )
        }

        const imageSEO = await generateImageSEO(postTitle, postExcerpt, imageFilename)

        return NextResponse.json(imageSEO)
    } catch (error) {
        console.error('Image SEO generation error:', error)
        return NextResponse.json(
            { error: 'Failed to generate image SEO' },
            { status: 500 }
        )
    }
}
