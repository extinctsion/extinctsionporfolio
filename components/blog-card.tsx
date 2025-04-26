import { Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "@/lib/types"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.published_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
      {post.cover_image && (
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={post.cover_image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {post.tag_list.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
          {post.tag_list.length > 3 && <Badge variant="outline">+{post.tag_list.length - 3}</Badge>}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="line-clamp-3">{post.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 border-t pt-4">
        <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>{post.reading_time_minutes} min read</span>
          </div>
        </div>
        <Button className="w-full" asChild>
          <Link href={post.url} target="_blank" rel="noopener noreferrer">
            Read Article
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
