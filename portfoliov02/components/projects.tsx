"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


const initialProjects = [
  {
    id: "1",
    title: "Trendex",
    description: "A modern News and media platform",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["DevOps", "CI/CD", "Docker", "Redis", "Typescript", "Cloudflare", "Firebase"],
    github: "https://github.com/57ajay/57READ",
    liveLink: "https://trendex.57x.online",
  },
  {
    id: "2",
    title: "Homefindr",
    description: "A full stack EState application",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Cloud", "AWS", "Nodejs", "Firebase", "TypeScript"],
    github: "https://github.com/57ajay/homefindr",
    liveLink: "https://homefindr-backend.onrender.com",
  },
  {
    id: "3",
    title: "TMGR",
    description: "A CLI tool to manage events and tasks",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Go", "Docker"],
    github: "https://github.com/57Ajay/go-taskmanagerCLI",
    liveLink: "https://github.com/57Ajay/go-taskmanagerCLI",
  },
  {
    id: "4",
    title: "DistPubSum",
    description: "A Distributed Pub-Sub System",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Go", "Docker", "Redis", "CI/CD", "Pub-Sub"],
    github: "https://github.com/57Ajay/distPubSub",
    liveLink: "https://github.com/57Ajay/distPubSub",
  },
  {
    id: "5",
    title: "Random Art Generator",
    description: "Generate Random Art with Mathametical Equations",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["C", "Arena", "STB_IMAGE", "CI/CD"],
    github: "https://github.com/57Ajay/random_art",
    liveLink: "https://github.com/57Ajay/random_art",
  },
  {
    id: "6",
    title: "Ray Tracing",
    description: "A dimostration of raytracing",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["C", "Raylib", "CI/CD"],
    github: "https://github.com/57Ajay/ray_tracing",
    liveLink: "https://github.com/57Ajay/ray_tracing",
  },
  
]

export default function Projects() {
  const projects = initialProjects

 
  return (
    <section id="projects" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project demonstrates my skills in software development
            and DevOps engineering.
          </p>
        </motion.div>

       

        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="flex-grow p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end p-6 pt-0">
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" asChild>
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      </Button>
                      {project.liveLink && (
                        <Button variant="outline" size="icon" asChild>
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            <span className="sr-only">Live Link</span>
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  )
}
