"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navigation />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-xs tracking-widest opacity-60 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.6 }}
          >
            PACKAGING ARCHIVE
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/archive/${project.slug}`} className="group block cursor-target">
                  <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-gray-300">
                        {project.title}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-lg font-bold group-hover:opacity-60 transition-opacity">
                      {project.titleCn || project.title}
                    </h2>
                    <p className="text-xs text-gray-500 mt-1">
                      {project.client} — {project.year}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
