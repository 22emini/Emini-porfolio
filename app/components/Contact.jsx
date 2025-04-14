"use client"
import { motion } from "framer-motion"
import { Phone, Mail, Facebook, Linkedin, Youtube, MapPin, ExternalLink, Instagram } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Main footer content with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-12"
        >
          {/* Footer grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About/Brand Section */}
            <div className="space-y-4">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="h-12 w-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center"
              >
                <span className="text-2xl font-bold">EA</span>
              </motion.div>
              <h2 className="text-xl font-bold">Eminioluwa Akinjide Akinrinade</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Dedicated to education, research, and innovation in the field of computer science.
              </p>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold border-b border-slate-800 pb-2">Contact</h2>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-purple-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-300">Phone Number:</p>
                    <p className="text-slate-100">+2348111581159</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-300">Location:</p>
                    <p className="text-slate-100">Babcock University, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold border-b border-slate-800 pb-2">Email</h2>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-purple-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-300">Official:</p>
                    <a
                    
                      className="text-slate-100 hover:text-purple-400 transition-colors"
                    >
                      eminioluwaakinrinade716@gmail.com
                    </a>
                  </div>
                </div>

                
              </div>
            </div>

            {/* Social Media Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold border-b border-slate-800 pb-2">Connect</h2>

              <div className="space-y-4">
                <p className="text-sm text-slate-300">Follow on social media:</p>

                <div className="flex flex-wrap gap-3">
            

                  <SocialLink
                    href="https://www.linkedin.com/in/eminioluwa-akinrinade-a544a22b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
                    icon={<Linkedin className="w-5 h-5" />}
                    label="LinkedIn"
                    color="bg-blue-700 hover:bg-blue-800"
                  />
                   <SocialLink
                    href="https://www.instagram.com/"
                    icon={<Instagram className="w-5 h-5" />}
                    label="LinkedIn"
                    color="bg-red-800 hover:bg-blue-800"
                  />

                 
                </div>

               
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar with copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400"
        >
          <p>© {currentYear} Akinrinade Eminioluwa Akinjide. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

// Reusable social media link component
const SocialLink = ({ href, icon, label, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`${color} p-2.5 rounded-full transition-all duration-300 transform hover:scale-110 flex items-center justify-center shadow-lg`}
  >
    {icon}
  </a>
)

export default Footer
