import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaArrowRight, 
  FaStar, 
  FaCheckCircle, 
  FaReact, 
  FaNodeJs, 
  FaBrain,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaUserCheck,
  FaGraduationCap,
  FaLightbulb,
  FaBriefcase,
  FaQuoteLeft,
  FaDownload,
  FaCode,
  FaServer,
  FaDatabase
} from "react-icons/fa";

import Image from "../assets/man.jpeg";
import ResumePDF from "../assets/Amit Mern stack developer.pdf";

const HeroAboutSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  const roles = [
    "Full Stack Developer",
    "React & Node.js Specialist",
    "UI/UX Implementation Expert",
    "Scalable Web Architect",
    "MERN Stack Developer",
  ];

  const techPills = [
    "React.js", "Next.js", "Node.js", "Express.js", 
    "MongoDB", "OpenAI API", "LangChain", "Pinecone", 
    "TypeScript", "Tailwind CSS", "Docker", "AWS"
  ];

  const highlights = [
    "Built production-grade React modules for scalable web platforms",
    "Developed high-performance Node.js & Express.js REST APIs",
    "Integrated OpenAI GPT-4, LangChain, and Pinecone RAG systems",
    "Graduated with BCA from NIET, Greater Noida (2020 - 2023)"
  ];

  const careerTimeline = [
    { year: "Nov 2025 - Present", role: "MERN Stack Developer", company: "Shaadi Software Technology (Delhi, India)" },
    { year: "Aug 2023 - Oct 2025", role: "Full Stack Developer", company: "Webkype Info Services (Noida, India)" },
    { year: "2020 - 2023", role: "BCA Graduate", company: "NIET, Greater Noida" },
  ];

  const detailedFeatures = [
    {
      icon: <FaCode className="text-emerald-500" size={20} />,
      title: "Frontend Engineering",
      desc: "Creating responsive, accessible, and high-performance UI components using React.js, Next.js, and Tailwind CSS."
    },
    {
      icon: <FaServer className="text-teal-500" size={20} />,
      title: "Backend Architecture",
      desc: "Developing secure RESTful APIs, robust microservices, and asynchronous task handlers using Node.js and Express.js."
    },
    {
      icon: <FaDatabase className="text-cyan-500" size={20} />,
      title: "Database & GenAI",
      desc: "Managing data pipelines with MongoDB & MySQL, alongside integrating advanced AI models like LangChain and Pinecone vector search."
    }
  ];

  const scrollToSection = (link) => {
    const element = document.querySelector(link);
    if (element) {
      const offset = 92;
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-emerald-50/50 text-slate-900 transition-colors duration-500 dark:bg-[#061a14] dark:text-slate-100"
    >
      {/* Background Glows & Patterns */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 h-[400px] w-[400px] sm:h-[750px] sm:w-[750px] rounded-full bg-emerald-500/15 blur-[120px] dark:bg-emerald-500/10" />
        <div className="absolute -right-1/3 top-1/3 h-[350px] w-[350px] sm:h-[650px] sm:w-[650px] rounded-full bg-teal-600/15 blur-[130px] dark:bg-teal-600/10" />
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(#10b981 1.5px, transparent 1.5px)`,
            backgroundSize: `80px 80px`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 py-24 sm:px-6 sm:py-28 lg:px-10 lg:py-32">
        
        {/* --- PART 1: HERO SECTION CONTENT --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid w-full items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12 my-auto"
        >
          {/* Left Hero Details */}
          <div className="text-center lg:text-left relative flex flex-col items-center lg:items-start">
            <motion.div variants={itemVariants} className="mb-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/80 bg-white/80 px-3.5 py-1.5 text-[10px] sm:text-[11px] font-extrabold tracking-wider text-emerald-900 shadow-lg backdrop-blur-md dark:border-emerald-500/30 dark:bg-slate-900/60 dark:text-emerald-300">
                <FaStar className="text-emerald-400 animate-spin" style={{ animationDuration: "6s" }} />
                FULL STACK & MERN INNOVATOR
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-[10px] sm:text-[11px] font-bold text-emerald-600 dark:text-emerald-400 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                Available for Hire
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-3xl xs:text-4xl font-black leading-[1.1] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
              HI, I'M{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                AMIT GUPTA
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-4 sm:mt-6 min-h-[40px] sm:min-h-[48px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="flex items-center justify-center gap-2.5 sm:gap-3 text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-700 lg:justify-start dark:text-slate-200"
                >
                  <span className="h-6 sm:h-7 w-1.5 rounded-full bg-gradient-to-b from-emerald-400 to-teal-600 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  {roles[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.p variants={itemVariants} className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-slate-600 dark:text-slate-400">
              Building scalable web applications, robust REST APIs, and optimized user interfaces using <span className="font-bold text-slate-900 dark:text-white">React.js, Node.js, and modern JavaScript toolchains</span>.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-7 sm:mt-8 flex w-full flex-col items-center justify-center gap-3.5 sm:flex-row sm:w-auto lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("#projects")}
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 px-7 py-3.5 sm:px-8 sm:py-4 text-sm font-black text-white shadow-[0_10px_25px_rgba(52,211,153,0.35)] transition-all duration-300"
              >
                Explore Portfolio
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl border-2 border-emerald-300/80 bg-white/80 px-7 py-3.5 sm:px-8 sm:py-4 text-sm font-black text-slate-800 shadow-lg backdrop-blur-md dark:border-emerald-500/30 dark:bg-slate-900/60 dark:text-white"
              >
                Let's Talk
              </motion.a>
            </motion.div>
          </div>

          {/* Right Hero Image Card */}
          <motion.div variants={itemVariants} className="relative mx-auto flex h-[380px] xs:h-[420px] sm:h-[460px] w-full max-w-sm sm:max-w-md items-center justify-center lg:h-[500px] lg:max-w-none">
            <div className="absolute inset-0 rounded-[30px] sm:rounded-[40px] bg-gradient-to-tr from-emerald-500/30 via-teal-500/20 to-cyan-500/20 blur-3xl -z-10 animate-pulse" />
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-[330px] w-[290px] xs:h-[380px] xs:w-[330px] sm:h-[430px] sm:w-[380px] rounded-[36px] p-3 border-2 border-emerald-400/40 bg-gradient-to-b from-white/80 to-emerald-50/50 shadow-[0_20px_50px_rgba(16,185,129,0.2)] backdrop-blur-xl dark:from-slate-900/90 dark:to-[#09261d]/90 dark:border-emerald-500/30 flex flex-col items-center justify-center overflow-hidden group"
            >
              <div className="relative h-full w-full rounded-[28px] overflow-hidden flex items-center justify-center bg-gradient-to-b from-emerald-500/10 to-transparent">
                <img src={Image} alt="Amit Gupta" className="relative z-20 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-4 left-4 z-30 flex items-center gap-2 rounded-xl bg-slate-900/80 px-3 py-1.5 border border-emerald-500/40 backdrop-blur-md shadow-lg">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[11px] font-bold text-emerald-300 tracking-wide">Coding Live</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Badges */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0 pointer-events-none z-30">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-cyan-400/50 bg-white/95 px-3.5 py-1.5 text-[11px] font-bold text-cyan-700 shadow-xl dark:bg-slate-900 dark:text-cyan-300">
                <FaReact className="text-cyan-500 animate-spin" style={{ animationDuration: "8s" }} /> React.js
              </div>
              <div className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 flex items-center gap-1.5 rounded-full border border-emerald-400/50 bg-white/95 px-3.5 py-1.5 text-[11px] font-bold text-emerald-700 shadow-xl dark:bg-slate-900 dark:text-emerald-300">
                <FaNodeJs className="text-emerald-500" /> Node.js
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-teal-400/50 bg-white/95 px-3.5 py-1.5 text-[11px] font-bold text-teal-700 shadow-xl dark:bg-slate-900 dark:text-teal-300">
                <FaBrain className="text-teal-500" /> MERN Stack
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* --- STATS STRIP --- */}
        <motion.div variants={itemVariants} className="mt-12 sm:mt-16 grid w-full max-w-5xl grid-cols-2 gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl border border-emerald-300/60 bg-white/60 p-4 sm:p-6 shadow-xl backdrop-blur-xl sm:grid-cols-4 dark:border-emerald-500/20 dark:bg-slate-900/60">
          <div className="text-center p-2"><h4 className="text-xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">10M+</h4><p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Users Scaled</p></div>
          <div className="text-center p-2"><h4 className="text-xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">50K+</h4><p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Daily API Requests</p></div>
          <div className="text-center p-2"><h4 className="text-xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">3+</h4><p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Years Experience</p></div>
          <div className="text-center p-2"><h4 className="text-xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">98%</h4><p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Lighthouse Score</p></div>
        </motion.div>

        {/* --- PART 2: ABOUT / DEEP DIVE SECTION (CONTINUED INSIDE THE SAME SECTION) --- */}
        <div id="about" className="mt-24 w-full max-w-6xl border-t border-emerald-200/60 pt-20 dark:border-emerald-500/20">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 text-xs font-bold text-white shadow-sm">⚡</span>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">Deep Dive & Background</span>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="flex items-center gap-1.5 rounded-xl border border-emerald-200/80 bg-white/80 p-1 backdrop-blur-md dark:border-emerald-500/20 dark:bg-slate-900/80">
              <button onClick={() => setActiveTab("overview")} className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-bold transition-all ${activeTab === "overview" ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-sm" : "text-slate-600 dark:text-slate-400"}`}>
                <FaUserCheck size={11} /> Overview
              </button>
              <button onClick={() => setActiveTab("background")} className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-bold transition-all ${activeTab === "background" ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-sm" : "text-slate-600 dark:text-slate-400"}`}>
                <FaGraduationCap size={11} /> Timeline
              </button>
              <button onClick={() => setActiveTab("philosophy")} className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-bold transition-all ${activeTab === "philosophy" ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-sm" : "text-slate-600 dark:text-slate-400"}`}>
                <FaLightbulb size={11} /> Philosophy
              </button>
            </div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-[380px] w-[320px] rotate-[-3deg] rounded-[32px] bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 opacity-90 shadow-2xl shadow-emerald-500/20 sm:h-[430px] sm:w-[370px]" />
              <div className="relative z-10 my-4 h-[300px] w-[260px] overflow-hidden rounded-[28px] border-4 border-white shadow-2xl sm:h-[360px] sm:w-[310px] dark:border-slate-900">
                <img src={Image} alt="Amit Gupta" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Engineering <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">Digital Excellence</span>
              </h2>

              <div className="mt-5 min-h-[190px]">
                <AnimatePresence mode="wait">
                  <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                    {activeTab === "overview" && (
                      <div>
                        <p className="text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
                          I'm Amit Gupta — a passionate Full Stack Developer with hands-on professional expertise spanning from Webkype Info Services to Shaadi Software Technology. I specialize in building end-to-end MERN architectures, optimized APIs, and AI-driven workflows.
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
                          <div key={index} className="flex items-start gap-3 rounded-xl border border-emerald-200/60 bg-white/60 p-2.5 backdrop-blur-md dark:border-emerald-500/20 dark:bg-slate-900/60">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                              <FaBriefcase size={12} />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">{item.role}</h4>
                                <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-400">{item.year}</span>
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
                          "Bridging traditional MERN development with modern Generative AI automations. I focus on writing clean, maintainable code that delivers smooth user experiences and robust business logic."
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Tech Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {techPills.map((tech) => (
                  <span key={tech} className="rounded-lg border border-emerald-200/80 bg-white/80 px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-sm dark:border-emerald-500/20 dark:bg-slate-900/60 dark:text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Resume & Social Links */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
                <a href={ResumePDF} download="Amit Gupta MERN.pdf" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02]">
                  <FaDownload size={14} /> Download Resume
                </a>
                <div className="flex items-center gap-3 px-2">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-xl border border-emerald-200 bg-white/85 p-2.5 text-slate-700 hover:text-emerald-600 dark:border-emerald-500/20 dark:bg-slate-900 dark:text-slate-300"><FaGithub size={16} /></a>
                  <a href="https://www.linkedin.com/in/amit-gupta-75a286236" target="_blank" rel="noreferrer" className="rounded-xl border border-emerald-200 bg-white/85 p-2.5 text-slate-700 hover:text-emerald-600 dark:border-emerald-500/20 dark:bg-slate-900 dark:text-slate-300"><FaLinkedin size={16} /></a>
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="rounded-xl border border-emerald-200 bg-white/85 p-2.5 text-slate-700 hover:text-emerald-600 dark:border-emerald-500/20 dark:bg-slate-900 dark:text-slate-300"><FaTwitter size={16} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Skill Feature Cards */}
          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
            {detailedFeatures.map((feat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-emerald-200/60 bg-white/60 p-6 shadow-xl backdrop-blur-md dark:border-emerald-500/20 dark:bg-slate-900/60"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-emerald-500/10 p-3">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">{feat.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroAboutSection;