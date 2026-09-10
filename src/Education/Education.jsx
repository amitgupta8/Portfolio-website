import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAward,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaCalendarAlt,
  FaCheckCircle,
  FaCertificate,
  FaStar,
  FaChevronDown,
} from "react-icons/fa";

const Education = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  const EDUCATION_DATA = [
    {
      id: "bca",
      degree: "Bachelor of Computer Applications",
      short: "BCA",
      type: "Degree",
      college: "Chaudhary Charan Singh University, Noida",
      year: "July 2020 - July 2023",
      status: "Completed",
      score: "65%",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=90",
      badgeBg: "bg-emerald-500/15 text-emerald-700 border-emerald-300 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/30",
      description:
        "Focused heavily on core computer applications, software development fundamentals, and data structures.",
      keySubjects: ["DSA", "OOPs", "Software Engineering", "Web Tech", "Database Management"],
      achievements: [
        "Completed graduation with 65% aggregate score[cite: 2].",
        "Built core foundations in programming and full-stack development."
      ],
      credentialId: "CCSU/BCA/2023/AI-DEV",
    },
    {
      id: "certs",
      degree: "Professional Certifications & GenAI Specializations",
      short: "Certifications",
      type: "Certification",
      college: "DeepLearning.AI & Udemy",
      year: "2024 - Present",
      status: "Completed",
      score: "Distinction",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=90",
      badgeBg: "bg-teal-500/15 text-teal-700 border-teal-300 dark:bg-teal-500/10 dark:text-teal-300 dark:border-teal-500/30",
      description:
        "Acquired specialized industry certifications focusing on Generative AI, Large Language Models, and modern application development.",
      keySubjects: ["Generative AI", "LangChain", "LLM Apps", "OpenAI API", "Prompt Engineering"],
      achievements: [
        "Generative AI for Developers by DeepLearning.AI[cite: 2].",
        "LangChain for LLM Apps by Udemy[cite: 2].",
        "OpenAI API Mastery[cite: 2]."
      ],
      credentialId: "CERT/GENAI/2026/AMIT",
    },
  ];

  const categories = ["All", "Degree", "Certification"];

  const filteredEducation = useMemo(() => {
    if (activeTab === "All") return EDUCATION_DATA;
    return EDUCATION_DATA.filter((item) => item.type === activeTab);
  }, [activeTab]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="education"
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
        md:py-24
        lg:px-12
        dark:bg-[#061a14]
        dark:text-slate-100
      "
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-500/10 via-teal-600/10 to-cyan-600/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(16,185,129,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="
              mb-3
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-200
              bg-white/80
              px-4
              py-2
              text-[11px]
              font-extrabold
              tracking-[0.15em]
              text-emerald-700
              shadow-lg
              backdrop-blur-md
              dark:border-emerald-500/30
              dark:bg-slate-900/80
              dark:text-emerald-300
            "
          >
            <FaGraduationCap className="text-emerald-500 text-xs" />
            ACADEMIC CREDENTIALS & CERTS
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl md:text-4xl dark:text-white"
          >
            Educational{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Milestones & Certifications
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400"
          >
            Explore academic qualifications, specialized GenAI certificates, and professional development milestones.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-10 flex justify-center overflow-x-auto pb-1"
        >
          <div className="flex w-max gap-1.5 rounded-xl border border-emerald-200/80 bg-white/90 p-1 shadow-lg backdrop-blur-xl dark:border-emerald-500/20 dark:bg-[#0a261d]/95">
            {categories.map((category) => {
              const active = activeTab === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveTab(category)}
                  className={`
                    flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer
                    ${
                      active
                        ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-white shadow-md shadow-emerald-500/20 scale-105"
                        : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-white"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {filteredEducation.map((edu, index) => {
            const isExpanded = expandedId === edu.id;

            return (
              <motion.article 
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative flex flex-col"
              >
                <div
                  className="
                    relative flex flex-col h-full overflow-hidden rounded-[24px] 
                    border
                    border-emerald-200/80
                    bg-white/85
                    p-5
                    sm:p-6
                    shadow-lg
                    backdrop-blur-xl
                    transition-all
                    duration-400
                    hover:-translate-y-1.5
                    hover:border-emerald-400
                    hover:shadow-[0_20px_50px_rgba(52,211,153,0.12)]
                    dark:border-emerald-500/20
                    dark:bg-gradient-to-b
                    dark:from-[#0a261d]/95
                    dark:to-[#061a14]/95
                    dark:hover:border-emerald-500/50
                  "
                >
                  <div className="absolute inset-x-0 top-0 h-1 rounded-t-[24px] bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600" />

                  <div className="relative h-32 w-full overflow-hidden rounded-xl bg-slate-100 mb-4 border border-emerald-200/60 shadow-sm dark:bg-slate-900 dark:border-emerald-500/20">
                    <img
                      src={edu.image}
                      alt={edu.degree}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-85 dark:from-[#061a14]" />

                    <div className="absolute right-2.5 top-2.5 z-10">
                      <div className="flex items-center gap-1 rounded-lg border border-emerald-300/40 bg-white/95 px-2.5 py-1 text-[10px] font-extrabold text-slate-800 backdrop-blur-md shadow-md dark:border-emerald-500/30 dark:bg-slate-900/80 dark:text-white">
                        <FaCalendarAlt className="text-emerald-500 text-[9px]" />
                        {edu.year}
                      </div>
                    </div>

                    <div className="absolute left-2.5 top-2.5 z-10">
                      <div className={`rounded-lg border px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${edu.badgeBg} shadow-md bg-white/95 dark:bg-slate-900/80`}>
                        {edu.short}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                    {edu.degree}
                  </h3>

                  <div className="mt-3 flex items-center justify-between rounded-xl border border-emerald-200/60 bg-emerald-50/40 px-3.5 py-2.5 shadow-sm dark:border-emerald-500/25 dark:bg-slate-900/40">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-sm font-bold text-xs">
                        <FaMapMarkerAlt />
                      </div>
                      <span className="truncate text-xs font-bold text-slate-800 dark:text-slate-200">{edu.college}</span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      <FaCheckCircle className="text-[10px] text-emerald-600 dark:text-emerald-400" />
                      <span className="text-[10px] font-extrabold text-emerald-700 dark:text-emerald-400">{edu.status}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {edu.description}
                  </p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-3.5 pt-4 border-t border-emerald-200/60 dark:border-emerald-500/20">
                          
                          <div className="flex items-center gap-2 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-2 border border-emerald-200 dark:border-emerald-500/20 text-[11px] font-bold text-emerald-800 dark:text-emerald-300">
                            <FaCertificate className="text-emerald-500 shrink-0 text-xs" />
                            <span className="truncate">ID: {edu.credentialId}</span>
                          </div>

                          <div>
                            <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-1">
                              <FaStar className="text-[10px]" /> Core Focus
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {edu.keySubjects.map((subject, idx) => (
                                <span key={idx} className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-800 dark:text-emerald-300">
                                  {subject}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-1">
                              <FaAward className="text-[10px]" /> Highlights
                            </h4>
                            <div className="space-y-1.5">
                              {edu.achievements.map((ach, idx) => (
                                <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                                  <FaCheckCircle className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 text-[10px]" />
                                  <span>{ach}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="my-4 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent dark:via-emerald-500/25" />

                  <div className="flex items-center justify-between pt-1 mt-auto">
                    <div className="flex items-center gap-1.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                        <FaAward className="text-xs" />
                      </div>
                      <div>
                        <p className="text-[8px] font-extrabold uppercase tracking-widest text-slate-400">Score</p>
                        <span className="text-xs font-black text-slate-900 dark:text-white">{edu.score}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => toggleExpand(edu.id)}
                        className="
                          inline-flex items-center gap-1 rounded-xl border border-emerald-400/80
                          bg-emerald-100/70 hover:bg-emerald-200 px-3 py-2 text-[11px] font-black text-emerald-800 transition-all
                          duration-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:hover:bg-emerald-500/25
                          shadow-sm cursor-pointer
                        "
                      >
                        {isExpanded ? "Less" : "Details"}
                        <FaChevronDown className={`text-[9px] transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                      </button>

                      <a
                        href="#certificate"
                        className="
                          inline-flex items-center gap-1 rounded-xl border border-emerald-400/80
                          bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 px-3 py-2 text-[11px] font-black text-white transition-all
                          duration-200 hover:scale-105 hover:shadow-md
                          shadow-sm
                        "
                      >
                        Cert
                        <FaExternalLinkAlt className="text-[8px]" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;