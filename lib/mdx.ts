import fs from "fs"
import path from "path"
import matter from "gray-matter"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

const postsDirectory = path.join(process.cwd(), "content/posts")

export interface PostFrontmatter {
  title: string
  date: string
  excerpt: string
  image?: string
  slug: string
}

export interface Post {
  frontmatter: PostFrontmatter
  content: string
  slug: string
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    if (!fs.existsSync(fullPath)) {
      return null
    }
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      frontmatter: {
        ...data,
        slug,
      } as PostFrontmatter,
      content,
      slug,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs()
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug.replace(/\.mdx$/, ""))
      return post
    })
  )
  return posts.filter((post): post is Post => post !== null).sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  })
}

// MDX serialization will be handled by Next.js MDX loader
// This function is kept for future use if needed
