'use client'

import { useState, useEffect, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, LinkedinIcon, MailIcon, MenuIcon, XIcon, MoonIcon, SunIcon } from 'lucide-react'
import Link from "next/link";
import Image from 'next/image'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  const skills = {
    'Programming Languages': ['C/C++', 'Python', 'TypeScript', 'JavaScript'],
    'Web Technologies': ['React', 'Next.js', 'Express', 'Node.js'],
    'Cloud & DevOps': ['AWS', 'GCP', 'DevOps'],
    'Databases': ['MongoDB', 'Prisma', 'PostgreSQL']
  }

  const headerVariants = {
    hidden: { y: -100 },
    visible: { y: 0, transition: { type: 'spring', stiffness: 100 } }
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="fixed inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 -z-10" />
      <motion.header
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ajay Upadhyay</h1>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost" onClick={() => scrollToSection('about')}>About</Button>
            <Button variant="ghost" onClick={() => scrollToSection('skills')}>Skills</Button>
            <Button variant="ghost" onClick={() => scrollToSection('projects')}>Projects</Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')}>Contact</Button>
          </nav>
          <div className="flex items-center space-x-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </Button>
            )}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
                <Button variant="ghost" onClick={() => scrollToSection('about')}>About</Button>
                <Button variant="ghost" onClick={() => scrollToSection('skills')}>Skills</Button>
                <Button variant="ghost" onClick={() => scrollToSection('projects')}>Projects</Button>
                <Button variant="ghost" onClick={() => scrollToSection('contact')}>Contact</Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="container mx-auto px-4 py-8">
        <motion.section
          className="py-20 text-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h1 className="text-5xl font-bold mb-4">Ajay Upadhyay</h1>
          <p className="text-xl text-muted-foreground mb-8">Full Stack Developer & Cloud Enthusiast</p>
          <Button onClick={() => scrollToSection('contact')}>Get in touch</Button>
        </motion.section>

        <motion.section
          id="about"
          className="py-20"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/next.svg"
              alt="Ajay Upadhyay"
              width={256}
              height={256}
              className="rounded-full w-64 h-64 object-cover"
            />
            <p className="text-lg text-muted-foreground">
              I'm a passionate full-stack developer with expertise in modern web technologies and cloud platforms.
              With a strong foundation in computer science and a keen interest in DevOps, I strive to create
              efficient, scalable, and user-friendly applications. My journey in tech has been driven by curiosity
              and a desire to solve complex problems through innovative solutions.
            </p>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="py-20"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="overflow-hidden">
                <CardHeader className="bg-primary/10">
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="list-disc list-inside">
                    {skillList.map(skill => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="py-20"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <Card key={project} className="overflow-hidden">
                <img
                  src={`/placeholder.svg?height=200&width=400&text=Project+${project}`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>Project {project}</CardTitle>
                  <CardDescription>A brief description of the project</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Technologies used: React, Node.js, MongoDB</p>
                  <Button className="mt-4" variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="py-20"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <Card>
            <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                <Input id="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                <Input id="email" type="email" placeholder="Your email" value={formData.email} onChange={handleInputChange} required />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
              <Textarea id="message" placeholder="Your message" value={formData.message} onChange={handleInputChange} required />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
            {submitStatus === 'success' && <p className="text-green-500">Message sent successfully!</p>}
            {submitStatus === 'error' && <p className="text-red-500">Error sending message. Please try again.</p>}
          </form>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2024 Ajay Upadhyay. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="https://github.com/57ajay" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="w-6 h-6" />
                </a>
            </Link>
            <Link href="https://linkedin.com/in/upajay" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <LinkedinIcon className="w-6 h-6" />
                </a>
            </Link>
            <Link href="mailto:57ajay.u@gmail.com" aria-label="Email">
              <MailIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}