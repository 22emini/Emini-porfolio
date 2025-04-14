"use client";
import Intro from "./components/Intro";
import React, { useState, useRef } from "react";
import Projects from "./components/Publications";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Link from "next/link"; // Correct import for Next.js
import { motion } from "framer-motion";
import Image from "next/image";
import About from "./components/About";
import SendMessage from './components/SendMessage'

export default function Home() {
  const home = useRef(null);
  const about = useRef(null);
  const publication = useRef(null);
  const contact = useRef(null);
  const experience = useRef(null);
  const sendMessageRef = useRef(null);

  const scrollToTopSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="min-h-screen">
      <motion.nav
        initial={{ opacity: 0, translateX: "-100%" }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 2, type: "spring" }}
        viewport={{ once: true }}
        className="fixed w-full top-0 start-0 bg-slate-900 shadow-md shadow-purple-900 z-10"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 sm:p-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 rtl:space-x-reverse">
            <Image
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full transition-all duration-300"
              src="/images/image.png"
              alt="emini"
              width={40}
              height={40}
            />
            <span className="text-white text-sm sm:text-xl font-bold hover:text-purple-300 transition-all duration-300">
              Akinjie Akinrinade
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:order-2 space-x-2 sm:space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              onClick={() => scrollToTopSection(sendMessageRef)}
              className="text-white border-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-2xl text-xs sm:text-sm px-2 sm:px-4 py-1 text-center mr-2 sm:mr-3"
            >
              Send Message
            </button>

            <div className="relative inline-block text-left md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 sm:p-3 border border-transparent shadow-sm rounded-md bg-gradient-to-br from-purple-600 to-black text-white hover:from-purple-700 hover:to-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>

              {/* Mobile Menu Dropdown */}
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="origin-top-right absolute right-0 mt-2 w-48 sm:w-56 rounded-md shadow-lg bg-white"
                >
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {[
                      { label: "Home", ref: home },
                      { label: "About", ref: about },
                      { label: "Experience", ref: experience },
                      { label: "Skills", ref: publication },
                      { label: "Contact", ref: contact },
                    ].map((item) => (
                      <div
                        key={item.label}
                        onClick={() => {
                          scrollToTopSection(item.ref);
                          setIsOpen(false);
                        }}
                        className="block px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:border-l-8 hover:bg-gray-200 hover:border-slate-500 transition-all duration-300 cursor-pointer"
                        role="menuitem"
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Desktop Menu */}
          <div
            className="text-white items-center justify-center hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="cursor-pointer flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-4 lg:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {[
                { label: "Home", ref: home },
                { label: "About", ref: about },
                { label: "Experience", ref: experience },
                { label: "Skills", ref: publication },
                { label: "Contact", ref: contact },
              ].map((item) => (
                <li
                  key={item.label}
                  onClick={() => scrollToTopSection(item.ref)}
                  className="px-2 sm:px-3 py-2 text-sm lg:text-base text-white hover:text-purple-300 hover:bg-purple-700/10 hover:border-b-2 hover:border-white transition-all duration-300"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.nav>

      <div ref={home}>
        <Intro />
      </div>
      <div ref={about}>
        <About />
      </div>
      <div ref={publication}>
        <Projects />
      </div>
      <div ref={experience}>
        <Skills />
      </div>
      <div ref={sendMessageRef}>
        <SendMessage />
      </div>

      <div ref={contact}>
        <Contact />
      </div>
    </main>
  );
}