import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaUserCheck,
  FaGraduationCap,
  FaLightbulb,
  FaCheckCircle,
  FaBriefcase,
  FaQuoteLeft,
  FaDownload,
} from "react-icons/fa";

import Image from "../assets/man.jpeg";
import ResumePDF from "../assets/Amit Mern stack developer.pdf";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const techPills = [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "OpenAI API",
    "LangChain",
    "Pinecone",
    "TypeScript",
    "Tailwind CSS",
    "Docker",
    "AWS",
  ];

  const highlights = [
    "Built production-grade React modules for scalable web platforms",
    "Developed high-performance Node.js & Express.js REST APIs",
    "Integrated OpenAI GPT-4, LangChain, and Pinecone RAG systems",
  ];

  const careerTimeline = [
    { year: "Nov 2025 - Present", role: "MERN Stack Developer", company: "Shaadi Software Technology (Delhi, India)" },
    { year: "Aug 2023 - Oct 2025", role: "Full Stack Developer", company: "Webkype Info Services (Noida, India)" },
    { year: "2020 - 2023", role: "BCA Graduate", company: "NIET, Greater Noida" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-emerald-50/50 px-4 py-16 text-slate-900 transition-colors duration-500 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28 dark:bg-[#061a14] dark:text-slate-100"
    >
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
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 text-xs font-bold text-white shadow-sm shadow-emerald-500/40">
              ⚡
            </span>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
              About Me
            </span>
          </div>

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

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-[380px] w-[320px] rotate-[-3deg] rounded-[32px] bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 opacity-90 shadow-2xl shadow-emerald-500/20 sm:h-[430px] sm:w-[370px]" />

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
              className="absolute left-2 top-8 z-25 rounded-full border border-emerald-300 bg-white/95 px-3.5 py-1.5 text-[11px] font-black text-slate-800 shadow-xl backdrop-blur-md dark:border-emerald-500/40 dark:bg-slate-900 dark:text-white"
            >
              🚀 AI MERN Developer
            </motion.div>

            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 right-2 z-25 rounded-full border border-emerald-400/30 bg-slate-900 px-4 py-1.5 text-[11px] font-black text-emerald-400 shadow-2xl dark:bg-emerald-500 dark:text-slate-950"
            >
              💻 2.8+ Years Exp
            </motion.div>
          </div>

          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
              Who is{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                Amit Gupta
              </span>
              ?
            </h2>

            <div className="mt-5 min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === "overview" && (
                    <div>
                      <p className="text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
                        I'm Amit Gupta — an AI-Integrated Full Stack Developer with hands-on experience building scalable MERN web applications, high-performance REST APIs, and cutting-edge GenAI workflows using OpenAI, LangChain, Pinecone vector databases, and modern cloud deployment tools.
                      </p>
                      <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {highlights.map((item, index) => (
                          <div key={index} className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                            <FaCheckCircle className="shrink-0 text-emerald-500" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "background" && (
                    <div className="space-y-3">
                      {careerTimeline.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 rounded-xl border border-emerald-200/60 bg-white/60 p-2.5 backdrop-blur-md dark:border-emerald-500/20 dark:bg-slate-900/60"
                        >
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                            <FaBriefcase size={12} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">{item.role}</h4>
                              <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
                                {item.year}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">{item.company}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "philosophy" && (
                    <div className="rounded-2xl border border-emerald-300/40 bg-emerald-500/10 p-4 backdrop-blur-md dark:border-emerald-500/30">
                      <FaQuoteLeft className="mb-2 text-emerald-500 opacity-60" size={16} />
                      <p className="text-sm font-semibold italic leading-relaxed text-slate-700 dark:text-emerald-300">
                        "Bridging traditional MERN development with generative AI automation. I focus on creating reliable, high-performance apps that solve complex business bottlenecks."
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

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

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <a
                href={ResumePDF}
                download="Amit Gupta MERN.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02]"
              >
                <FaDownload size={14} /> Download Resume
              </a>
              <div className="flex items-center gap-3 px-2">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-emerald-200 bg-white/85 p-2.5 text-slate-700 transition hover:text-emerald-600 dark:border-emerald-500/20 dark:bg-slate-900 dark:text-slate-300"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/amit-gupta-75a286236?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-emerald-200 bg-white/85 p-2.5 text-slate-700 transition hover:text-emerald-600 dark:border-emerald-500/20 dark:bg-slate-900 dark:text-slate-300"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-emerald-200 bg-white/85 p-2.5 text-slate-700 transition hover:text-emerald-600 dark:border-emerald-500/20 dark:bg-slate-900 dark:text-slate-300"
                >
                  <FaTwitter size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;