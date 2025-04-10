"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Experience & Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-l-2 border-primary/50 pl-4 py-4">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    August 2024 - November 2024
                  </div>
                  <h3 className="text-xl font-semibold">Backend Engineer Intern</h3>
                  <p className="text-muted-foreground mb-4">Kleiba Pvt. Ltd, Remote</p>
                  <ul className="space-y-2 list-disc list-inside text-sm md:text-base">
                    <li>Engineered scalable backend microservices with advanced architectural patterns</li>
                    <li>Implemented robust authentication and security mechanisms</li>
                    <li>Optimized database performance and developed efficient data models</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Flagship Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-primary/50 pl-4 py-4">
                  <h3 className="text-xl font-semibold">Distributed pub-sub and messaging system</h3>
                  <ul className="space-y-2 list-disc list-inside text-sm md:text-base mt-2">
                    <li>A redis like system , enabling efficient communication and scalability</li>
                    <li>Technologies: Golang, Redis, Docker, GCP</li>
                    <li>Implemented publish and subscribe messaging patterns and many redis commands.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/50 pl-4 py-4">
                  <h3 className="text-xl font-semibold">Financial Transaction Microservices</h3>
                  <ul className="space-y-2 list-disc list-inside text-sm md:text-base mt-2">
                    <li>Comprehensive financial platform with microservices architecture</li>
                    <li>Technologies: TypeScript, Node.js, React, Kubernetes, AWS</li>
                    <li>Features: Scalable payment gateway, real-time fraud detection, secure authentication</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/50 pl-4 py-4">
                  <h3 className="text-xl font-semibold">Advanced System Monitoring Dashboard</h3>
                  <ul className="space-y-2 list-disc list-inside text-sm md:text-base mt-2">
                    <li>Developed comprehensive observability solution</li>
                    <li>Technologies: Prometheus, Grafana, Docker, Kubernetes</li>
                    <li>Implemented real-time performance metrics and automated alerting</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Core Competencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-l-2 border-primary/50 pl-4 py-2">
                    <h3 className="font-semibold">Software Development</h3>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-4 py-2">
                    <h3 className="font-semibold">Full-Stack Development</h3>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-4 py-2">
                    <h3 className="font-semibold">DevOps Engineering</h3>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-4 py-2">
                    <h3 className="font-semibold">Continuous Integration/Deployment</h3>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-4 py-2">
                    <h3 className="font-semibold">Microservices Architecture</h3>
                  </div>
                  <div className="border-l-2 border-primary/50 pl-4 py-2">
                    <h3 className="font-semibold">Distributed Systems Design</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
