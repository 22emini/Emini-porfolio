"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Intro = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white flex items-center justify-center"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Eminioluwa Akinrinade Akinjide
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-slate-300">
            Software Engineer, <span className="text-white font-medium">BillyRonks</span>
          </h2>
          <motion.p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed"
          
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          >
            I'm currently a  300  Level Software Engineering  student at Babcock University, Ilishan Remo,
            Ogun State, Nigeria. I  am also Softare Engineering  inten at BillyRonks Global Limited.

          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300"
            aria-label="View My Work"
          >
           <Link href="https://github.com/22emini">View My Work</Link> 
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl border-4 border-blue-500 hover:border-purple-400 transition-all duration-300">
            <Image
              src="/images/image2.png"
              alt="Eminioluwa Akinrinade Akinjide"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
