import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog-card"
import { fetchBlogPosts } from "@/lib/actions"

export default async function BlogPage() {
  const posts = await fetchBlogPosts()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Blog</h1>
              <p className="mt-4 text-muted-foreground max-w-md mx-auto">
                Articles and thoughts on web development, design, and technology.
              </p>
            </div>

            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No blog posts found.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
