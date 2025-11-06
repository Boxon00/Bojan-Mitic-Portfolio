"use client";

import { experience, education, certifications } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Experience & Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-blue-600 mr-3"></span>
              Work Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-green-600 mr-3"></span>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {edu.location}
                  </p>
                  {edu.address && (
                    <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                      {edu.address}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-purple-600 mr-3"></span>
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
