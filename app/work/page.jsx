"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-slate-800 text-white ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Publications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-600 rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src="/images/Desing.png" // Update this path to your actual image
              alt="Design and Implementation of Auto Switch Lighting Monitoring and Control System"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
              Ai Note Taker
              </h3>
              <p className="text-white">
              it  help  capaturing information  lectures, or other scenarios where notes are needed
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition duration-300"
                aria-label="View Design and Implementation of Auto Switch Lighting Monitoring and Control System"
              >
                <a href="https://github.com/22emini/atlas-note.git">View Work</a>
              
              </motion.button>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-600 rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src="/images/trackin.jpg" // Update this path to your actual image
              alt="Project 2"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">L</h3>
              <p className="text-white">
              Developed an autonomous UAV system using UML and OpenCV for easy aerial video tracking, featuring a web controller. Enhances film quality and supports industries like logistics and security.


              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition duration-300"
                aria-label="View Project 2"
              >
                              <a href="https://www.researchgate.net/publication/356284514_Object_Tracking-Based_Follow-Me_Unmanned_Aerial_Vehicle_UAV_System?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ">View Research</a>
              </motion.button>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-600 rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src="/images/images.jpg" // Update this path to your actual image
              alt="Project 3"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Beyond the Hashtag: Social Media and the Challenges to Cyber Security</h3>
              <p className="text-white">
              A study of 95 social media users found high activity but low risk awareness: 21% read terms, 27% foresee litigation risks. Most prioritize self-protection. Recommendations: regulate platform coding and promote emotional intelligence for cybersecurity.


              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition duration-300"
                aria-label="View Project 3"
              >
              <a href="https://www.researchgate.net/publication/355778828_Beyond_the_Hashtag_Social_Media_and_the_Challenges_to_Cyber_Security?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ">View Research</a>
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-600 rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src="/images/uml.jpg" // Update this path to your actual image
              alt="Project 3"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
              priority
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">An Online Road Transport Booking System</h3>
              <p className="text-white">
              This study automates road transport booking to tackle long wait times and safety issues. Using PHP, CSS, HTML, JavaScript, MySQL, and XAMPP, it proposes an online system connecting passengers, employees, and providers for streamlined, integrated bookings.


              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition duration-300"
                aria-label="View Project 3"
              >
              <a href="https://www.researchgate.net/publication/359851657_An_Online_Road_Transport_Booking_System?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ">View Research</a>
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-600 rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src="/images/download.jpeg" // Update this path to your actual image
              alt="Project 3"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Evaluation of Cashless Policy in Nigeria: The Pros and Cons</h3>
              <p className="text-white">
              This paper evaluates Nigeria's cashless policy, highlighting ATM security threats and POS misuse. Findings call for tech upgrades, POS limits to unbanked areas, ATM panic buttons, and cash hijacking insurance.


              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition duration-300"
                aria-label="View Project 3"
              >
              <a href="https://www.researchgate.net/publication/350281036_Evaluation_of_Cashless_Policy_in_Nigeria_The_Pros_and_Cons?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ">View Research</a>
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-600 rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src="/images/ict.png" // Update this path to your actual image
              alt="Project 3"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Shaping ICT Infrastructure Through Creativity and Innovation</h3>
              <p className="text-white">
            


              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition duration-300"
                aria-label="View Project 3"
              >
              <a href="https://www.researchgate.net/publication/338541974_Shaping_ICT_Infrastructure_Through_Creativity_and_Innovation?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ">View Research</a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Publications