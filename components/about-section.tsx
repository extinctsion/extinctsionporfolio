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
                Hello! I'm a passionate software engineer with a strong focus on building scalable and high-performance
                web applications. With professional experience in both backend and frontend development, I've had the
                opportunity to work on a range of impactful projects, from enterprise-grade systems to open-source tools.
              </p>
              <p>
                My journey in software development began with Python, C#, and JavaScript, and has grown to include modern
                technologies like .NET Core, Angular, GraphQL, Next.js, and cloud services like AWS. I love 
                optimizing system performance, designing efficient APIs, and implementing microservices architectures to 
                create seamless user experiences. I’m always exploring new patterns and best practices to stay at the 
                forefront of development.
              </p>
              <p>
              When I'm not coding, you’ll find me writing technical articles on Dev.to, contributing to open-source 
              projects, or exploring my creative side through art and travel. I believe in continuous learning, sharing 
              knowledge, and helping others in their tech journeys.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link href="https://drive.google.com/uc?export=download&id=18iFwUKxxXRJgvfRKplY06fxPkuCKnWLx" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">2+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">15+</h3>
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
