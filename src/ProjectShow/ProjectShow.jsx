import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaCode,
  FaTimes,
  FaDatabase,
  FaShoppingCart,
  FaBitcoin,
  FaArrowRight,
  FaGithub,
  FaLayerGroup,
  FaCheckCircle,
} from "react-icons/fa";

const ProjectShow = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const PROJECTS = [
    {
      id: 1,
      number: "01",
      title: "Sales CRM System",
      category: "FULL STACK",
      desc: "Real-time CRM with dashboards and sales tracking.",
      fullDesc:
        "Designed and engineered a real-time Sales CRM system with interactive dashboards, customer management, sales tracking and automated performance monitoring.",
      tech: ["React", "Node.js", "MongoDB"],
      icon: FaDatabase,
      iconColor: "text-indigo-400",
      gradient: "from-blue-500 to-indigo-500",
      features: [
        "Interactive analytics dashboard",
        "Customer & sales management",
        "REST API architecture",
        "MongoDB integration",
      ],
      link: "#",
      github: "#",
    },
    {
      id: 2,
      number: "02",
      title: "E-commerce Platform",
      category: "WEB APP",
      desc: "Modern shopping platform with secure payment integration.",
      fullDesc:
        "Developed a complete e-commerce platform featuring product management, cart functionality, authentication, order processing and secure payment integration.",
      tech: ["React", "Redux", "Node.js"],
      icon: FaShoppingCart,
      iconColor: "text-pink-400",
      gradient: "from-pink-500 to-purple-500",
      features: [
        "Product management",
        "Shopping cart",
        "Authentication system",
        "Payment integration",
      ],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      number: "03",
      title: "Crypto Tracker",
      category: "FINTECH",
      desc: "Live cryptocurrency tracking with interactive charts.",
      fullDesc:
        "Built a cryptocurrency tracking application that consumes live market data and presents price movements, market statistics and interactive charts.",
      tech: ["React", "Express", "MongoDB"],
      icon: FaBitcoin,
      iconColor: "text-yellow-400",
      gradient: "from-yellow-400 to-orange-500",
      features: [
        "Live crypto prices",
        "Interactive charts",
        "API integration",
        "Responsive dashboard",
      ],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#030712] px-4 py-16 text-white sm:px-6 md:py-20 lg:px-8"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[-250px] h-[450px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600 blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-220px] top-[40%] h-[280px] w-[280px] rounded-full bg-blue-600/[0.04] blur-[100px]"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-150px] right-[-180px] h-[330px] w-[330px] rounded-full bg-purple-600/[0.04] blur-[110px]"
        />

        <div
          className="absolute inset-0 opacity-[0.014]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-9 max-w-xl text-center sm:mb-11"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-400/10 bg-indigo-500/[0.05] px-3 py-1.5 text-[9px] font-bold tracking-[0.18em] text-slate-400 backdrop-blur-xl"
          >
            <FaLayerGroup className="text-indigo-400" />
            FEATURED PROJECTS
          </motion.div>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-md text-[11px] leading-5 text-slate-600 sm:text-xs sm:leading-6">
            A selection of modern full-stack applications built with scalable
            technologies and clean architecture.
          </p>

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-px w-9 bg-gradient-to-r from-transparent to-indigo-500/60" />

            <motion.span
              animate={{
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,.8)]"
            />

            <span className="h-px w-9 bg-gradient-to-l from-transparent to-purple-500/60" />
          </div>
        </motion.div>

        {/* ================= CARDS ================= */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative"
              >
                {/* Hover Glow */}

                <div
                  className={`absolute -inset-[1px] rounded-[18px] bg-gradient-to-r ${project.gradient} opacity-0 blur-md transition duration-500 group-hover:opacity-35`}
                />

                {/* CARD */}

                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative cursor-pointer overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#080d19] shadow-[0_10px_35px_rgba(0,0,0,.22)] transition-all duration-500 group-hover:border-white/[0.13] group-hover:shadow-[0_18px_45px_rgba(0,0,0,.32)]"
                >
                  {/* Top Gradient */}

                  <div
                    className={`absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r ${project.gradient}`}
                  />

                  <div className="p-4">
                    {/* TOP */}

                    <div className="flex items-center justify-between">
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: 4,
                        }}
                        className="relative"
                      >
                        <div
                          className={`absolute inset-0 rounded-xl bg-gradient-to-r ${project.gradient} opacity-20 blur-lg`}
                        />

                        <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035]">
                          <Icon
                            className={`text-lg ${project.iconColor}`}
                          />
                        </div>
                      </motion.div>

                      <span className="text-3xl font-black text-white/[0.035]">
                        {project.number}
                      </span>
                    </div>

                    {/* CATEGORY */}

                    <div className="mt-3">
                      <span className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1 text-[7px] font-bold tracking-[0.15em] text-slate-600">
                        {project.category}
                      </span>
                    </div>

                    {/* TITLE */}

                    <h3 className="mt-2.5 text-[17px] font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-indigo-300">
                      {project.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-1.5 min-h-[42px] text-[10px] leading-5 text-slate-600">
                      {project.desc}
                    </p>

                    {/* TECH */}

                    <div className="mt-3 flex min-h-[25px] flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-indigo-400/[0.08] bg-indigo-500/[0.035] px-2 py-1 text-[7px] font-semibold text-indigo-300/60 transition-colors group-hover:text-indigo-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* DIVIDER */}

                    <div className="my-3.5 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

                    {/* FOOTER */}

                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-slate-700 transition-colors group-hover:text-slate-400">
                        Explore Project
                      </span>

                      <motion.div
                        whileHover={{
                          x: 3,
                        }}
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-indigo-400 transition-all group-hover:border-indigo-400/20 group-hover:bg-indigo-500/10"
                      >
                        <FaArrowRight className="text-[8px]" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Bottom Line */}

                  <div
                    className={`h-[2px] w-0 bg-gradient-to-r ${project.gradient} transition-all duration-500 group-hover:w-full`}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ================= BOTTOM ================= */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="mt-8 text-center text-[9px] text-slate-700 sm:text-[10px]"
        >
          More projects coming soon • Always building • Always improving
        </motion.p>

        <div className="mx-auto mt-7 h-px max-w-4xl bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      </div>

      {/* =========================================================
          MODAL
      ========================================================== */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 p-3 backdrop-blur-md sm:p-5"
          >
            {/* Backdrop */}

            <div
              className="absolute inset-0"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              className="relative z-10 my-4 max-h-[92vh] w-full max-w-md overflow-y-auto rounded-[22px] border border-white/[0.09] bg-[#080d19] shadow-[0_25px_70px_rgba(0,0,0,.65)]"
            >
              {/* Top Gradient */}

              <div
                className={`absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r ${selectedProject.gradient}`}
              />

              <div className="relative p-5 sm:p-6">
                {/* Close */}

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] text-slate-500 transition hover:bg-red-500/10 hover:text-red-400"
                >
                  <FaTimes className="text-xs" />
                </button>

                {/* Modal Header */}

                <div className="flex items-center gap-3 pr-10">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${selectedProject.gradient}`}
                  >
                    {React.createElement(selectedProject.icon, {
                      className: "text-base text-white",
                    })}
                  </div>

                  <div className="min-w-0">
                    <span className="text-[7px] font-bold tracking-[0.16em] text-indigo-400">
                      {selectedProject.category}
                    </span>

                    <h2 className="mt-0.5 truncate text-xl font-black text-white">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                {/* Description */}

                <p className="mt-4 text-xs leading-6 text-slate-500">
                  {selectedProject.fullDesc}
                </p>

                {/* Features */}

                <div className="mt-5">
                  <p className="mb-2.5 text-[8px] font-bold uppercase tracking-[0.16em] text-slate-600">
                    Key Features
                  </p>

                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {selectedProject.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2 rounded-lg border border-white/[0.05] bg-white/[0.02] p-2"
                      >
                        <FaCheckCircle className="mt-0.5 shrink-0 text-[8px] text-emerald-400" />

                        <span className="text-[9px] leading-4 text-slate-500">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}

                <div className="mt-5">
                  <p className="mb-2.5 text-[8px] font-bold uppercase tracking-[0.16em] text-slate-600">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-indigo-400/10 bg-indigo-500/[0.05] px-2.5 py-1.5 text-[8px] font-semibold text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <a
                    href={selectedProject.link}
                    onClick={(e) => e.stopPropagation()}
                    className="flex min-h-[42px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-[9px] font-bold text-white transition hover:-translate-y-0.5"
                  >
                    <FaExternalLinkAlt className="text-[7px]" />
                    Live Preview
                  </a>

                  <a
                    href={selectedProject.github}
                    onClick={(e) => e.stopPropagation()}
                    className="flex min-h-[42px] items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] text-[9px] font-bold text-slate-300 transition hover:-translate-y-0.5 hover:bg-white/[0.06] hover:text-white"
                  >
                    <FaGithub className="text-sm" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectShow;