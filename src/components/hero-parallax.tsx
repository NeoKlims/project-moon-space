"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

interface Item {
  title: string;
  link: string;
  thumbnail: string;
}

export function HeroParallax({ items }: { items: Item[] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div
      ref={ref}
      className="relative flex h-[80vh] items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y: translateY }} className="absolute inset-0 z-0">
        <div className="grid h-full grid-cols-2 md:grid-cols-4">
          {items.map((item, i) => (
            <div key={i} className="relative h-full overflow-hidden">
              <Image
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>
      </motion.div>

      <div className="relative z-10 px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl"
        >
          Serenity Beauty Salon
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-8 max-w-2xl text-xl md:text-2xl"
        >
          Where beauty meets wellness in perfect harmony
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="#services"
            className="hover:bg-opacity-90 rounded-full bg-white px-8 py-3 text-lg font-medium text-black transition-all"
          >
            Discover Our Services
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
