"use client";

import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">{personalInfo.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in-delay">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
            Passionate about building innovative web solutions and constantly learning new technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay-3">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
