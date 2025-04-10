"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// This would typically come from a database or CMS
// For this example, we'll use a static array that can be edited
const initialProjects = [
  {
    id: "1",
    title: "DevOps Automation Platform",
    description: "A platform for automating CI/CD pipelines and infrastructure deployment",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["DevOps", "CI/CD", "Docker"],
    github: "https://github.com/username/project1",
    liveLink: "https://project1.example.com",
  },
  {
    id: "2",
    title: "Cloud Resource Manager",
    description: "A tool for managing and optimizing cloud resources across multiple providers",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Cloud", "AWS", "Terraform"],
    github: "https://github.com/username/project2",
    liveLink: "",
  },
  {
    id: "3",
    title: "Microservices Framework",
    description: "A framework for building and deploying scalable microservices",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Microservices", "Kubernetes", "API"],
    github: "https://github.com/username/project3",
    liveLink: "https://project3.example.com",
  },
]

// In a real application, you would use a database or localStorage
// This is just for demonstration purposes
export default function Projects() {
  const [projects, setProjects] = useState(initialProjects)
  const [filter, setFilter] = useState("All")
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
    github: "",
    liveLink: "",
  })

  const allTags = ["All", ...new Set(projects.flatMap((project) => project.tags))]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.tags.includes(filter))

  const handleAddProject = () => {
    const tagsArray = newProject.tags.split(",").map((tag) => tag.trim())

    const project = {
      id: Date.now().toString(),
      title: newProject.title,
      description: newProject.description,
      image: newProject.image || "/placeholder.svg?height=300&width=500",
      tags: tagsArray,
      github: newProject.github,
      liveLink: newProject.liveLink,
    }

    setProjects([...projects, project])
    setNewProject({
      title: "",
      description: "",
      image: "",
      tags: "",
      github: "",
      liveLink: "",
    })
  }

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

        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div className="flex gap-2 flex-wrap">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={filter === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Project
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Project</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="image">Image URL</Label>
                  <Input
                    id="image"
                    placeholder="/placeholder.svg?height=300&width=500"
                    value={newProject.image}
                    onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tags">Tags (comma separated)</Label>
                  <Input
                    id="tags"
                    placeholder="DevOps, CI/CD, Docker"
                    value={newProject.tags}
                    onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="github">GitHub URL</Label>
                  <Input
                    id="github"
                    value={newProject.github}
                    onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="liveLink">Live Link (optional)</Label>
                  <Input
                    id="liveLink"
                    value={newProject.liveLink}
                    onChange={(e) => setNewProject({ ...newProject, liveLink: e.target.value })}
                  />
                </div>
                <Button onClick={handleAddProject}>Add Project</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
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
