
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTelegram,
  FaDownload,
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaServer,
  FaRocket,
  FaUserCheck,
  FaGraduationCap,
  FaLightbulb,
  FaCheckCircle,
  FaBriefcase,
  FaQuoteLeft,
} from "react-icons/fa";

import Image from "../assets/man.jpeg";

/* =========================================================
   STAT CARD
========================================================= */

const StatCard = ({ icon: Icon, value, label, trend }) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-emerald-200/80
        bg-white/85
        p-4
        shadow-sm
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:border-emerald-400
        hover:bg-white
        hover:shadow-[0_15px_40px_rgba(52,211,153,0.15)]
        dark:border-emerald-500/20
        dark:bg-[#0a261d]/80
        dark:hover:bg-[#0f382a]
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-24
          w-24
          rounded-full
          bg-emerald-500/[0.08]
          blur-2xl
          transition-all
          duration-300
          group-hover:bg-emerald-500/[0.2]
        "
      />

      <div className="flex items-center justify-between mb-3">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-emerald-300/40
            bg-emerald-500/10
            text-emerald-600
            transition-all
            duration-300
            group-hover:border-emerald-400
            group-hover:bg-emerald-500/20
            dark:text-emerald-400
          "
        >
          <Icon size={16} />
        </div>
        {trend && (
          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            {trend}
          </span>
        )}
      </div>

      <h4 className="relative text-2xl font-black text-slate-900 dark:text-white">
        {value}
      </h4>

      <p className="relative mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
        {label}
      </p>
    </div>
  );
};

/* =========================================================
   ABOUT COMPONENT
========================================================= */

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const socials = [
    { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/", label: "Twitter" },
    { icon: FaTelegram, href: "https://telegram.org/", label: "Telegram" },
  ];

  const techPills = ["React.js", "Node.js", "Next.js", "MongoDB", "TypeScript", "Tailwind CSS", "GraphQL", "Docker"];

  const highlights = [
    "Clean & Maintainable Code Architecture",
    "High-Performance API & State Optimization",
    "Responsive UI/UX with Modern Frameworks",
  ];

  const careerTimeline = [
    { year: "2023 - Present", role: "Senior Full Stack MERN Developer", company: "Freelance & Agency Projects" },
    { year: "2021 - 2023", role: "Frontend & Backend Engineer", company: "Tech Solutions Inc." },
    { year: "2020 - 2021", role: "Junior Web Developer", company: "Open Source Contributor" },
  ];

  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-emerald-50/50
        px-4
        py-16
        text-slate-900
        transition-colors
        duration-500
        sm:px-6
        sm:py-20
        md:px-8
        md:py-24
        lg:px-10
        lg:py-28
        dark:bg-[#061a14]
        dark:text-slate-100
      "
    >
      {/* Background Glows & Grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[130px] dark:bg-emerald-500/10" />
        <div className="absolute -right-32 top-[30%] h-[450px] w-[450px] rounded-full bg-teal-600/10 blur-[140px] dark:bg-teal-600/10" />

        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16,185,129,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16,185,129,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        
        {/* SECTION HEADER BADGE & LIVE AVAILABILITY */}
        <div className="mb-12 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 text-white text-xs font-bold shadow-sm shadow-emerald-500/40">
              ⚡
            </span>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
              About Me
            </span>
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Hire
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-1.5 rounded-xl border border-emerald-200/80 bg-white/80 p-1 backdrop-blur-md dark:border-emerald-500/20 dark:bg-slate-900/80">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-bold transition-all ${
                activeTab === "overview"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              <FaUserCheck size={11} /> Overview
            </button>
            <button
              onClick={() => setActiveTab("background")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-bold transition-all ${
                activeTab === "background"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              <FaGraduationCap size={11} /> Timeline
            </button>
            <button
              onClick={() => setActiveTab("philosophy")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-bold transition-all ${
                activeTab === "philosophy"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              <FaLightbulb size={11} /> Philosophy
            </button>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          
          {/* LEFT: IMAGE & FLOATING TAGS */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-[380px] w-[320px] rounded-[32px] bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 shadow-2xl shadow-emerald-500/20 sm:h-[430px] sm:w-[370px] opacity-90 rotate-[-3deg]" />

            <div className="relative z-10 my-4 h-[300px] w-[260px] overflow-hidden rounded-[28px] border-4 border-white shadow-2xl sm:h-[360px] sm:w-[310px] dark:border-slate-900">
              <img
                src={Image}
                alt="Amit Gupta"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-2 top-8 z-25 rounded-full border border-emerald-300 bg-white/95 px-3.5 py-1.5 text-[11px] font-black text-slate-800 shadow-xl backdrop-blur-md dark:bg-slate-900 dark:text-white dark:border-emerald-500/40"
            >
              🚀 Full Stack Dev
            </motion.div>

            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 right-2 z-25 rounded-full bg-slate-900 px-4 py-1.5 text-[11px] font-black text-emerald-400 shadow-2xl border border-emerald-400/30 dark:bg-emerald-500 dark:text-slate-950"
            >
              💻 3+ Years Exp
            </motion.div>
          </div>

          {/* RIGHT: TAB CONTENT */}
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
              Who is <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">Amit Gupta</span>?
            </h2>

            {/* Dynamic Content Based on Tab Switcher */}
            <div className="mt-5 min-h-[160px]">
              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
                      Hey there, I'm Amit Gupta — a passionate full stack MERN developer dedicated to creating intuitive digital experiences that blend clean aesthetics with robust functionality.
                    </p>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {highlights.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                          <FaCheckCircle className="text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "background" && (
                  <motion.div
                    key="background"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    {careerTimeline.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 rounded-xl border border-emerald-200/60 bg-white/60 p-2.5 dark:border-emerald-500/20 dark:bg-slate-900/60 backdrop-blur-md">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                          <FaBriefcase size={12} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">{item.role}</h4>
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">{item.year}</span>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">{item.company}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "philosophy" && (
                  <motion.div
                    key="philosophy"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="rounded-2xl border border-emerald-300/40 bg-emerald-500/10 p-4 backdrop-blur-md dark:border-emerald-500/30">
                      <FaQuoteLeft className="text-emerald-500 mb-2 opacity-60" size={16} />
                      <p className="text-sm font-semibold italic text-slate-700 dark:text-emerald-300 leading-relaxed">
                        "Simplicity is the prerequisite for reliability. I believe in writing modular, readable, and future-proof code that scales gracefully as products grow."
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tech Stack Pills Badge Row */}
            <div className="mt-6 flex flex-wrap gap-2">
              {techPills.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-emerald-200/80 bg-white/80 px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50 dark:border-emerald-500/20 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:bg-emerald-500/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-emerald-500
                  via-teal-500
                  to-cyan-600
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_25px_rgba(52,211,153,0.35)]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_15px_30px_rgba(52,211,153,0.5)]
                "
              >
                Let's Work Together
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  rounded-2xl
                  border
                  border-emerald-300/80
                  bg-white/90
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-slate-800
                  shadow-sm
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-emerald-400
                  hover:bg-emerald-50
                  hover:text-emerald-700
                  dark:border-emerald-500/30
                  dark:bg-slate-900/60
                  dark:text-white
                  dark:hover:bg-slate-800/80
                "
              >
                <FaDownload size={13} className="text-emerald-400" />
                Download Resume
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-400">Connect:</span>
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-emerald-200
                      bg-white/90
                      text-slate-600
                      shadow-sm
                      transition-all
                      hover:border-emerald-400
                      hover:bg-emerald-50
                      hover:text-emerald-600
                      dark:border-emerald-500/30
                      dark:bg-slate-900/60
                      dark:text-slate-300
                      dark:hover:bg-emerald-500/10
                      dark:hover:text-emerald-300
                    "
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          <StatCard icon={FaCode} value="25+" label="Successful Projects" trend="+12% this year" />
          <StatCard icon={FaServer} value="15+" label="Industry APIs" trend="Optimized" />
          <StatCard icon={FaDatabase} value="150+" label="Happy Customers" trend="100% Satisfied" />
          <StatCard icon={FaRocket} value="3+" label="Years Experience" trend="Expert Level" />
        </div>

      </div>
    </section>
  );
};

export default AboutMe;