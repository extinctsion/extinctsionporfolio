"use server"

import type { BlogPost } from "./types"

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch("https://dev.to/api/articles/me", {
      headers: {
        "api-key": process.env.DEV_TO_API_KEY || "",
        // "api-key": "",
      },
      next: { revalidate: 900 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}
