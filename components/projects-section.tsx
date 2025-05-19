import { ProjectCard } from "./project-card"

export function ProjectsSection() {
  const projects = [
    {
      title: "QuickURL",
      description: "A very quick URL shortener with a simple and clean UI.",
      image: "quickk.png?height=400&width=600",
      tags: ["Next.js", ".NET 8", "AWS EC2", "Docker"],
      demoUrl: "https://quickkurl.netlify.app/",
      githubUrl: "https://github.com/extinctsion/quickkURL",
    },
    {
      title: "EasyPythonPi",
      description: "A python library for beginners.",
      image: "/ezpy.png?height=400&width=600",
      tags: ["Python", "Git"],
      demoUrl: "https://pypi.org/project/easyPythonpi/",
      githubUrl: "https://github.com/extinctsion/easyPythonpi",
    },
    {
      title: "Neural Network from Scratch",
      description: "Making a neural network from scratch without using ML based libraries in all programming language.",
      image: "/neuralnet.png?height=400&width=600",
      tags: ["React", "Firebase", "Material UI", "Redux"],
      demoUrl: "https://github.com/extinctsion/neuralNetworkScratch",
      githubUrl: "https://github.com/extinctsion/neuralNetworkScratch",
    },
    {
      title: "Lychrel Number Visualizer",
      description: "A web application that visualizes Lychrel numbers and their sequences, helping to understand these mathematical curiosities through interactive visualization.",
      image: "/Lychrel.png?height=400&width=600",
      tags: ["Next.js", "Netlify", "Typescript", "Tailwind CSS"],
      demoUrl: "https://lychrelnumber.netlify.app/",
      githubUrl: "https://github.com/extinctsion/lychrel_number_app",
    }
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
