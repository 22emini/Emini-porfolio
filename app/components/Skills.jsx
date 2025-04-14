import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-8 px-4 sm:px-6 lg:px-8">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-slate-800 rounded-lg shadow-lg p-6 md:p-8"
      >
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Experience
          </h1>
          <img
            src="/images/s.png" // Replace with your image path
            alt="Profile"
            className="w-24 h-24 md:w-32 md:h-32 rounded-md border-4 border-green-600 mx-auto mb-6"
          />
        </div>
        <div className="text-white  text-justify leading-relaxed space-y-4">
          <p>💼 Junior Software Engineer
          </p>
          <p> BillyRonks Internship</p>
         <p> July 2024 – Present</p>
          <p>
          As a Junior Software Engineer, I’ve been actively involved in building modern, responsive web applications with a strong emphasis on clean UI/UX, performance, and maintainability. My primary focus has been on front-end development using React.js, Next.js, Tailwind CSS, and Framer Motion, where I’ve developed reusable components, implemented animations, and collaborated on design improvements to enhance user engagement.
          </p>
          <p>
          On the backend, I’ve worked with both MySQL and MongoDB to create and manage databases for small to medium-sized web apps. I’ve built simple REST APIs using Node.js and integrated them with front-end features to enable full-stack functionality. While I’m still early in my backend journey, I enjoy the problem-solving aspect and am constantly learning best practices for scalability and security.
          </p>
          <p>
          I’m highly comfortable with version control using Git and GitHub, and I follow best practices when it comes to branching, pull requests, and writing clear commit messages. I’ve also handled end-to-end deployment using Vercel, which has helped me understand the importance of optimizing builds and keeping CI/CD pipelines efficient.
          </p>
          <p>
          Beyond just coding, I’ve contributed to planning sessions, where I learned how to break down tasks, estimate timelines, and prioritize features. I regularly document my code and thought process, which helps me stay organized and makes future collaboration smoother. I’ve also taken initiative to learn new tools, whether that’s experimenting with new libraries, diving into Linux environments, or brushing up on core programming with Java, C, and C++.
          </p>
          <p>What excites me most is being part of a team where I can contribute meaningfully, keep growing my skills, and build products that people love to use. I’m passionate about clean code, continuous improvement, and staying updated with the latest in web technologies. Every project I’ve worked on so far has taught me something new, and I’m always looking for opportunities to learn, build, and grow.</p>
          
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;