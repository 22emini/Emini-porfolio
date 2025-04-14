"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SkillCard from "./Skills-Cards"
import { Code2, PaintBucket, Database, Layers, Workflow } from "lucide-react"

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: <Code2 className="h-5 w-5" />,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 95 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "Node.js", level: 55 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 75 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    id: "tools",
    name: "Tools",
    icon: <Workflow className="h-5 w-5" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "CI/CD", level: 75 },
    ],
  },
  {
    id: "other",
    name: "Other",
    icon: <Layers className="h-5 w-5" />,
    skills: [
      { name: "SEO", level: 75 },
      { name: "Performance Optimization", level: 80 },
      { name: "Accessibility", level: 85 },
      { name: "Testing", level: 70 },
      { name: "Agile/Scrum", level: 80 },
    ],
  },
]

const Publications = () => {
  const [activeTab, setActiveTab] = useState("frontend")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="publications" className="p-10 md:p-20 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white">
            <h1 className=' text-center text-white  mb-7 font-bold text-5xl'>Skills</h1>      
      <div className="space-y-12 max-w-7xl mx-auto">
        <Tabs defaultValue="frontend" onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 bg-slate-800 p-2 rounded-xl shadow-md">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-700 transition"
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={activeTab === category.id ? "visible" : "hidden"}
              >
                {category.skills.map((skill, index) => (
                  <SkillCard key={`${category.id}-${index}`} name={skill.name} level={skill.level} index={index} />
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-800 p-8 rounded-2xl mt-16 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-white">My Learning Journey</h2>
          <p className="text-slate-400 mb-6">
            I'm constantly learning and improving my skills. Here are some technologies I'm currently exploring:
          </p>
          <div className="flex flex-wrap gap-3">
            {["Three.js", "WebGL", "Rust", "AI/ML", "Web3", "Graphql", "ReactNative"].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Publications
