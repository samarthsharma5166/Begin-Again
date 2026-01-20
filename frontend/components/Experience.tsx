'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Anchor, Lock, RefreshCw, Smile, Clock, Heart } from 'lucide-react';
import clsx from 'clsx';
import Image from 'next/image';

const experiences = [
  {
    icon: RefreshCw,
    title: "Creative Healing",
    // desc: "Engage in creative healing activities designed to gently process relationship loss, allowing emotions to flow rather than stagnate.",
    desc:"Engage in creative healing activities designed to gently process relationship loss , find your center and move forward on your life journey",
    bg: "bg-orange-50",
    accent: "text-orange-600",
    border: "border-orange-100",
    gridClass: "md:col-span-2 lg:col-span-1 lg:row-span-2",
    background:"/healing.webp"
  },
  // {
  //   icon: Anchor,
  //   title: "Guided Inner Work",
  //   desc: "Participate in structured exercises that help you release past burdens, reflect on your journey, and find your center.",
  //   bg: "bg-blue-50",
  //   accent: "text-blue-600",
  //   border: "border-blue-100",
  //   gridClass: "md:col-span-1"
  // },
  // {
  //   icon: Lock,
  //   title: "Understanding Patterns",
  //   desc: "Explore your attachment styles, trust issues, and boundary setting in a safe, non-judgmental environment.",
  //   bg: "bg-purple-50",
  //   accent: "text-purple-600",
  //   border: "border-purple-100",
  //   gridClass: "md:col-span-1"
  // },
  {
    icon: Smile,
    title: "Playful Connection",
    desc: "Cover the joy of interaction through lighthearted group activities designed to build ease without the pressure of 'dating'.",
    bg: "bg-yellow-50",
    accent: "text-yellow-600",
    border: "border-yellow-100",
    gridClass: "md:col-span-2 lg:col-span-2",
    background: "/ply.webp"
  },
  {
    icon: Heart,
    title: "Meet Your Soulmate! ",
    desc:"Life is full of possibilites. You may just meet that special someone while you spend the day with like minded people!!",
    bg: "bg-pink-50",
    accent: "text-pink-600",
    border: "border-pink-100",
    gridClass: "md:col-span-1",
    background: "/sl.webp"
  },
  {
    icon: Clock,
    title: "Unhurried Time",
    desc: "Familiarity grows naturally when we slow down. Enjoy meaningful conversations without the rush.",
    bg: "bg-emerald-50",
    accent: "text-emerald-600",
    border: "border-emerald-100",
    gridClass: "md:col-span-2 lg:col-span-1 lg:row-span-2",
    background: "/time.webp"
  },
  {
    icon: Sparkles,
    title: "Come As You Are",
    desc: "A space where you don't have to perform. Just presence, curiosity, and growth.",
    bg: "bg-rose-50",
    accent: "text-rose-600",
    border: "border-rose-100",
    // gridClass: "md:col-span-1"
    gridClass: "md:col-span-2 lg:col-span-2",
    background: "/space.webp"
  }
];

export const Experience = () => {
  return (
    <section className="sm:py-32 py-20 bg-stone-50 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-orange-100/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-4 block">
              The Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6 leading-tight">
              What You’ll <span className="italic text-stone-500">Experience</span>
            </h2>
            <p className="text-stone-600 text-lg md:text-xl font-light">
              A day carefully curated to move you from hesitation to hope, through connection and self-discovery.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={clsx(
                " p-8 rounded-3xl border transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden group",
                exp.bg,
                exp.border,
                exp.gridClass
              )}
            >
              <div className={`absolute inset-0 z-10 ${exp.bg} opacity-5`}/>
               
            <div className="absolute inset-0 z-0">
                  <Image
                      width={100}
                      height={100}
                      src={exp.background}
                      alt="Calm Nature"
                      className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 via-stone-50/60 to-stone-50" />
              </div>
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 h-full flex flex-col items-start">
                <div className={clsx(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm bg-white",
                  exp.accent
                )}>
                  <exp.icon className="w-7 h-7" />
                </div>

                <h3 className={clsx("text-2xl font-serif mb-4 text-stone-800")}>
                  {exp.title}
                </h3>

                <p className="text-stone-600 leading-relaxed text-lg">
                  {exp.desc}
                </p>

                {/* Decorative icon in background */}
                <exp.icon className={clsx(
                  "absolute -bottom-8 -right-8 w-40 h-40 opacity-5 pointer-events-none transition-transform duration-500 group-hover:scale-110",
                  exp.accent
                )} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
