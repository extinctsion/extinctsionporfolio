import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0" />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Hi, I'm <span className="text-primary">John Doe</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">Full Stack Developer & Technical Writer</p>
              <p className="text-muted-foreground max-w-md">
                I build accessible, responsive, and performant web applications using modern technologies. I also write
                about web development, design, and other tech topics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/blog">
                  Read My Blog <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] w-full rounded-lg bg-gradient-to-br from-primary/20 via-secondary/20 to-background flex items-center justify-center">
            <div className="absolute inset-2 rounded-lg bg-muted/80 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg font-medium">Profile Image</p>
                <p className="text-sm text-muted-foreground">Add your photo here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
