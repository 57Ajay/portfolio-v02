"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-primary/50 pl-4 py-2">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    2023 - Present
                  </div>
                  <h3 className="text-lg font-semibold">B.Tech in Computer Science and Engineering</h3>
                  <p className="text-muted-foreground">ongoing</p>
                  <p className="text-sm font-medium mt-1">CGPA: 8.0</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-2 border-primary/50 pl-4 py-2">
                  <h3 className="text-lg font-semibold">Meta Frontend & Backend Developer Professional Certificate</h3>
                </div>
                <div className="border-l-2 border-primary/50 pl-4 py-2">
                  <h3 className="text-lg font-semibold">0-100 Full Stack Developer Comprehensive Program</h3>
                </div>
                <div className="border-l-2 border-primary/50 pl-4 py-2">
                  <h3 className="text-lg font-semibold">Advanced DevOps and Cloud Computing Specialization</h3>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
