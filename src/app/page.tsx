"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import LiquidEther from "@/components/LiquidEther";

const clients = [
  { name: "Macallan", slug: "macallan" },
  { name: "Hennessy", slug: "hennessy" },
  { name: "Martell", slug: "martell" },
  { name: "Glenfiddich", slug: "glenfiddich" },
  { name: "Chivas", slug: "chivas" },
  { name: "Johnnie Walker", slug: "jw" },
  { name: "Absolut", slug: "absolut" },
  { name: "Moët", slug: "moet" },
  { name: "Dom Pérignon", slug: "dom" },
  { name: "Opus One", slug: "opus" },
  { name: "Penfods", slug: "penfolds" },
  { name: "Cloudy Bay", slug: "cloudy" },
  { name: "Kweichow Moutai", slug: "moutai" },
  { name: "Wuliangye", slug: "wuliangye" },
];

export default function Home() {
return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Liquid Ether background effect */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={["#FF6B35", "#FF9F45", "#FFBF69"]}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.5}
          mouseForce={25}
          resolution={0.6}
        />
      </div>

      {/* Giant DECANT background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold tracking-tighter leading-none select-none pointer-events-none"
        style={{ opacity: 0.03 }}
      >
        DECANT
      </div>

      <div className="relative z-10 min-h-screen flex flex-col px-6 md:px-12 py-8">
        {/* Top section with nav and title */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h1
            className="text-6xl md:text-9xl font-bold tracking-tighter leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            DECANT
          </motion.h1>

          <motion.p
            className="mt-8 md:mt-12 max-w-lg text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A curated platform showcasing the finest alcohol packaging designs
            from around the world. Discover innovative spirits, wines, and
            beverages that define contemporary packaging aesthetics.
          </motion.p>

          <motion.div
            className="mt-10 md:mt-14 flex flex-col gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/about"
              className="text-xs tracking-widest hover:opacity-70 transition-opacity w-fit cursor-target"
            >
              → ABOUT
            </Link>
            <Link
              href="/collections"
              className="text-xs tracking-widest hover:opacity-70 transition-opacity w-fit cursor-target"
            >
              → COLLECTIONS
            </Link>
            <Link
              href="/archive"
              className="text-xs tracking-widest hover:opacity-70 transition-opacity w-fit cursor-target"
            >
              → ENTER
            </Link>
          </motion.div>
        </div>

        {/* Client logos grid - bottom section */}
        <motion.div
          className="grid grid-cols-4 md:grid-cols-7 gap-6 md:gap-8 py-8 md:py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {clients.map((client, i) => (
            <motion.div
              key={client.slug}
              className="aspect-square bg-white/10 rounded-lg flex items-center justify-center p-3 hover:bg-white/20 transition-colors cursor-pointer cursor-target"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.03 }}
            >
              <span className="text-[10px] text-white/60 text-center leading-tight">
                {client.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <div className="flex justify-between items-center text-[10px] md:text-xs tracking-widest opacity-30">
          <span>© DECANT, EST. 2024</span>
          <span>GLOBAL PACKAGING ARCHIVE</span>
        </div>
      </div>
    </main>
  );
}
