import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div className=" p-6  bg-slate-950 text-white md:p-11">
      <motion.div
        initial={{ opacity: 0, translateX: "-100%" }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 2, type: "spring" }}
        viewport={{ once: true }} // Ensure animation only triggers once
        className="rounded-xl bg-slate-800 p-6 md:p-8 lg:p-10 shadow-lg"
      >
        <div className="flex flex-col items-center space-y-4">
          <Image
            className="h-16 w-16 md:h-20 md:w-20 rounded-full border-4 border-purple-500 hover:border-purple-300 transition-all duration-300"
            src="/images/abou.png" // Ensure the image path is correct
            alt="Dr. Oluwasola Stephen Maitanmi - Associate Professor of Computer Science"
            width={80}
            height={80}
          />
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
            About Me
          </h1>
        </div>
        <p className="mt-6 text-white text-justify leading-relaxed">
        Passionate and detail-oriented Junior Software Engineer with a strong foundation in front-end development, specializing in React.js, Next.js, Tailwind CSS, and Framer Motion to create visually appealing and interactive user interfaces.
       </p>
       <p className="mt-6 text-white text-justify leading-relaxed">
       On the backend, I have experience working with MySQL, MongoDB, basic Node.js and Express enabling me to build and manage scalable web applications. Additionally, I am proficient in version control with Git & GitHub and skilled in deployment using Vercel.

       </p>
       <p className="mt-6 text-white text-justify leading-relaxed">
       Beyond web development, I have a solid grasp of Java, C, and C++, along with experience working in Linux environments, allowing me to adapt to different tech stacks and problem-solving scenarios.
         
        </p>
        <p className="mt-6 text-white text-justify leading-relaxed">
        Eager to learn and grow in a collaborative environment, I am excited about opportunities to contribute, innovate, and enhance my expertise in full-stack development. Always open to networking and discussions on the latest in web technologies! 
          </p>
      </motion.div>
    </div>
  );
};

export default About;