"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface SkillDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  skill: {
    name: string
    level: number
    details?: string[]
  }
}

export default function SkillDetailsModal({ isOpen, onClose, skill }: SkillDetailsModalProps) {
  return (
    <Dialog  open={isOpen} onOpenChange={(open: boolean) => !open && onClose()}>
      <DialogContent className="sm:max-w-md  ">
        <DialogHeader>
          <DialogTitle>{skill.name}</DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-2">Proficiency Level</h4>
            <div className="relative h-3 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-end mt-1">
              <span className="text-sm font-medium">{skill.level}%</span>
            </div>
          </div>

          {skill.details && skill.details.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2">Experience & Projects</h4>
              <ul className="space-y-2">
                <AnimatePresence>
                  {skill.details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-sm text-muted-foreground flex items-start"
                    >
                      <span className="mr-2">•</span>
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
