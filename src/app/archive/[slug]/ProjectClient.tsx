"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects, getProjectBySlug } from "@/lib/projects";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-white text-black">
        <Navigation />
        <section className="pt-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold">Project not found</h1>
            <Link href="/archive" className="mt-4 inline-block text-xs tracking-widest cursor-target">
              ← ENTER
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Hero Image - Full Width */}
      <motion.div
        className="w-full aspect-[16/9] md:aspect-[21/9] relative cursor-target overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={project.images[0] || "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=1600&q=80"}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </motion.div>

      {/* Content Section */}
      <section className="pt-16 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl">
          <motion.h1
            className="text-3xl md:text-5xl font-bold tracking-tighter mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.titleCn || project.title}
          </motion.h1>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xs text-gray-500 mb-2">ART DIRECTOR: {project.artDirector}</p>
            <p className="text-xs text-gray-500 mb-2">DESIGNER: {project.designer}</p>
            <p className="text-xs text-gray-500 mb-2">YEAR: {project.year}</p>
            <p className="text-xs text-gray-500">CLIENT: {project.client}</p>
          </motion.div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm leading-relaxed">{project.description}</p>
          </motion.div>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-sm leading-relaxed text-gray-600">
              {project.descriptionCn}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full Width Images with Parallax */}
      {project.images.length > 0 && (
        <div className="w-full">
          {project.images.slice(1).map((image, i) => (
            <motion.div
              key={i}
              className="w-full aspect-[16/9] relative mb-0 cursor-target overflow-hidden"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.img
                src={image}
                alt={`${project.title} - Image ${i + 2}`}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Copyright */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <motion.p
          className="text-xs text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          All Images Copyright © {project.year} {project.client}.
        </motion.p>
      </section>

      {/* Next Project */}
      <section className="px-6 md:px-12 lg:px-24 py-12 border-t border-gray-100">
        <Link href={`/archive/${nextProject.slug}`} className="group block cursor-target">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs text-gray-500 mb-2">NEXT PROJECT</p>
            <h2 className="text-2xl md:text-4xl font-bold group-hover:opacity-60 transition-opacity">
              {nextProject.titleCn || nextProject.title} →
            </h2>
            <p className="text-xs text-gray-500 mt-2">
              {nextProject.client} — {nextProject.year}
            </p>
          </motion.div>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
