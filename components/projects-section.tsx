import { ProjectCard } from "./project-card"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product management,AI, Portfolio manangement, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "Material UI", "Redux"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Personal Finance Dashboard",
      description: "A dashboard for tracking personal finances, expenses, and investments with data visualization.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Vue.js", "Node.js", "Express", "MongoDB"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Weather Forecast App",
      description: "A weather forecast application with location-based services and interactive maps.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "Redux", "OpenWeatherMap API"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Here are some of the projects I've worked on. Check out my GitHub for more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
