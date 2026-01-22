import post from './post'
import author from './author'
import category from './category'
import blockContent from './blockContent'
import tag from './tag'
import siteSettings from './siteSettings'
import redirect from './redirect'
import seo from './objects/seo'

export const schemaTypes = [
    // Document types
    post,
    author,
    category,
    tag,
    siteSettings,
    redirect,
    // Block types
    blockContent,
    // Object types
    seo,
]
