"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface SkillCardProps {
  name: string
  level: number
  index: number
}

export default function SkillCard({ name, level, index }: SkillCardProps) {
  // Item variants for individual card animations
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Card className="overflow-hidden  bg-slate-800  text-white h-full">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">{name}</h3>

          <div className="relative h-2 bg-muted rounded-full overflow-hidden mb-2">
            <motion.div
              className="absolute top-0 left-0 h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
            />
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Proficiency</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="font-medium"
            >
              {level}%
            </motion.span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
