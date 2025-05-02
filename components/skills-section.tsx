import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skillCategories = [
    {
      name: "Backend",
      skills: [".NET", "Node.js", "Python", "Django", "REST API", "GraphQL", "MongoDB", "PostgreSQL", "Microservices", "Monolithic"],
    },
    {
      name: "Frontend",
      skills: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      name: "DevOps & Tools",
      skills: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Vercel", "Netlify", "Postman"],
    },
    {
      name: "Design",
      skills: ["Figma", "Adobe XD", "Responsive Design", "UI/UX", "Accessibility"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Here are some of the technologies and tools I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.name} className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
