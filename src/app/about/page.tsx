"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
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
            ABOUT
          </motion.h1>

          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base md:text-lg leading-relaxed mb-8">
              Decant is a curated platform showcasing the finest alcohol packaging designs
              from around the world. We believe that exceptional packaging tells a story,
              and every bottle deserves to be presented with artistry.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-8 text-gray-600">
              Our archive features innovative spirits, wines, and beverages that define
              contemporary packaging aesthetics. From heritage distilleries to
              emerging craft brands, we celebrate the craft of packaging design.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              Founded in 2024, Decant has become the definitive resource for designers,
              brands, and enthusiasts seeking inspiration in premium packaging.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 flex flex-wrap gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="mailto:hello@decant.com"
              className="text-xs tracking-widest opacity-60 hover:opacity-100 cursor-target"
            >
              Email
            </a>
            <span className="text-xs opacity-30">|</span>
            <a
              href="#"
              className="text-xs tracking-widest opacity-60 hover:opacity-100 cursor-target"
            >
              Instagram
            </a>
            <span className="text-xs opacity-30">|</span>
            <Link
              href="/collections"
              className="text-xs tracking-widest opacity-60 hover:opacity-100 cursor-target"
            >
              Brand Collections
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
