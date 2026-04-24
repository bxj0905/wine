"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const brands = [
  "Macallan", "Hennessy", "Martell", "Glenfiddich", "Chivas", "Johnnie Walker",
  "Absolut", "Moët", "Dom Pérignon", "Opus One", "Penfolds", "Cloudy Bay",
  "Kweichow Moutai", "Wuliangye", "Bacardi", "Jack Daniel's", "Jim Beam",
  "Captain Morgan", "Jameson", "Aberlour", "Glenmorangie", "Talisker",
  "Dalmore", "Lagavulin", "Laphroaig", "Oban", "Tullamore",
];

export default function CollectionsPage() {
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
            BRAND COLLECTIONS
          </motion.h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-4">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                className="py-3 border-b border-gray-100 cursor-target"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
              >
                <span className="text-sm">{brand}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
