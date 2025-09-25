"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Technology {
  name: string
  category: string
  level: number
  icon: string
  color: string
}

const technologies: Technology[] = [
  { name: "React", category: "Frontend", level: 95, icon: "⚛️", color: "bg-blue-500" },
  { name: "Next.js", category: "Framework", level: 90, icon: "▲", color: "bg-black" },
  { name: "TypeScript", category: "Language", level: 88, icon: "📘", color: "bg-blue-600" },
  { name: "Node.js", category: "Backend", level: 85, icon: "🟢", color: "bg-green-600" },
  { name: "Python", category: "Language", level: 82, icon: "🐍", color: "bg-yellow-500" },
  { name: "AWS", category: "Cloud", level: 80, icon: "☁️", color: "bg-orange-500" },
  { name: "Docker", category: "DevOps", level: 78, icon: "🐳", color: "bg-blue-400" },
  { name: "PostgreSQL", category: "Database", level: 85, icon: "🐘", color: "bg-blue-700" },
]

export function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", ...Array.from(new Set(technologies.map((tech) => tech.category)))]

  const filteredTechs =
    selectedCategory === "All" ? technologies : technologies.filter((tech) => tech.category === selectedCategory)

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technology Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise across modern technologies and frameworks
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTechs.map((tech, index) => (
            <Card
              key={tech.name}
              className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{tech.icon}</span>
                <div>
                  <h3 className="font-semibold text-foreground">{tech.name}</h3>
                  <p className="text-xs text-muted-foreground">{tech.category}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Proficiency</span>
                  <span className="font-medium">{tech.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ${tech.color}`}
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
