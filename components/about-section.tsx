import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/40">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">About Me</h2>
            <div className="space-y-4">
              <p>
                Hello! I'm a passionate full-stack developer with a strong focus on creating intuitive and performant
                web applications. With several years of experience in the industry, I've had the opportunity to work on
                a diverse range of projects, from small business websites to complex enterprise applications.
              </p>
              <p>
                My journey in web development began with HTML, CSS, and JavaScript, and has evolved to include modern
                frameworks and technologies like React, Next.js, Node.js, and more. I'm constantly learning and
                exploring new technologies to stay at the forefront of web development.
              </p>
              <p>
                When I'm not coding, you can find me writing technical articles, contributing to open-source projects,
                or exploring the outdoors. I believe in sharing knowledge and helping others grow in their development
                journey.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">4+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">20+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">15+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">30+</h3>
                <p className="text-muted-foreground">Articles Written</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
