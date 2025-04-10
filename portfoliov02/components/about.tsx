"use client"

import { motion } from "framer-motion"
import { Code2, Server, Terminal, GitBranch, Database, Cloud } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  { name: "Software Development", icon: <Code2 className="h-6 w-6" /> },
  { name: "DevOps", icon: <Server className="h-6 w-6" /> },
  { name: "CI/CD", icon: <GitBranch className="h-6 w-6" /> },
  { name: "Cloud Infrastructure", icon: <Cloud className="h-6 w-6" /> },
  { name: "TypeScript", icon: <Terminal className="h-6 w-6" /> },
  { name: "Python", icon: <Terminal className="h-6 w-6" /> },
  { name: "Golang", icon: <Terminal className="h-6 w-6" /> },
  { name: "C/C++", icon: <Terminal className="h-6 w-6" /> },
  { name: "Rust", icon: <Terminal className="h-6 w-6" /> },
  { name: "Database Management", icon: <Database className="h-6 w-6" /> },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=400" alt="Ajay Upadhyay" fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-primary/10 rounded-xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Software & DevOps Engineer</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate Software and DevOps Engineer with expertise in building robust applications and
              streamlining development workflows. I specialize in creating efficient, scalable solutions and
              implementing CI/CD pipelines to enhance development processes. My skills include TypeScript, JavaScript,
              Python, Golang, C/C++, and various DevOps technologies.
            </p>

            <h4 className="text-xl font-semibold mb-4">My Skills</h4>
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <Card>
                    <CardContent className="flex items-center gap-3 p-4">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
