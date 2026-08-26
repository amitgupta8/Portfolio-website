import React from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCheckCircle,
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

const Experience = () => {
  const EXP_DATA = [
    {
      role: "MERN STACK DEVELOPER",
      company: "Shaadi Software Technology",
      location: "Delhi, India",
      year: "Nov 2025 – Present",
      duration: "Current",
      current: true,
      short: "SST",
      gradient: "from-blue-500 via-indigo-500 to-violet-500",
      icon: FaCode,
      points: [
        "Built 5+ production-grade React.js modules for large-scale web applications, improving page load time by 35%.",
        "Developed Node.js and Express.js REST APIs handling 50K+ daily requests with JWT authentication and MongoDB.",
        "Reduced bundle size by 40% using Next.js code splitting and achieved a 98% Lighthouse performance score.",
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Next.js"],
    },
    {
      role: "FULL STACK DEVELOPER",
      company: "Webkype Info Services Private Limited",
      location: "Noida, India",
      year: "Aug 2023 – Oct 2025",
      duration: "2+ Years",
      current: false,
      short: "WIS",
      gradient: "from-indigo-500 via-purple-500 to-fuchsia-500",
      icon: FaServer,
      points: [
        "Engineered 3 full-stack web applications using React.js, Next.js and Node.js, boosting user engagement by 45%.",
        "Implemented Redux and Context API architecture, reducing unnecessary prop drilling across enterprise applications.",
        "Maintained 90%+ Jest test coverage and deployed scalable applications on AWS EC2 using Docker containers.",
      ],
      skills: ["React.js", "Next.js", "Node.js", "Redux", "AWS", "Docker"],
    },
  ];

  const floatingIcons = [
    {
      icon: FaCode,
      position: "left-[8%] top-[28%]",
      delay: 0,
    },
    {
      icon: FaDatabase,
      position: "right-[8%] top-[42%]",
      delay: 1,
    },
    {
      icon: FaCloud,
      position: "left-[12%] bottom-[18%]",
      delay: 2,
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#030712] px-4 py-20 text-white sm:px-6 md:py-24 lg:px-10"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top Center Glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[-320px] h-[600px] w-[750px] -translate-x-1/2 rounded-full bg-indigo-600/[0.08] blur-[150px]"
        />

        {/* Left Glow */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-280px] top-[35%] h-[450px] w-[450px] rounded-full bg-blue-600/[0.055] blur-[140px]"
        />

        {/* Right Glow */}
        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-150px] right-[-280px] h-[480px] w-[480px] rounded-full bg-purple-600/[0.055] blur-[140px]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />

        {/* Floating Icons */}
        {floatingIcons.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              animate={{
                y: [0, -18, 0],
                rotate: [0, 4, 0],
                opacity: [0.04, 0.1, 0.04],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut",
              }}
              className={`absolute ${item.position} hidden md:block`}
            >
              <Icon className="text-5xl text-indigo-400" />
            </motion.div>
          );
        })}
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          {/* Small Badge */}

          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/15 bg-white/[0.035] px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-slate-300 shadow-[0_0_30px_rgba(99,102,241,0.08)] backdrop-blur-xl"
          >
            <FaBriefcase className="text-indigo-400" />
            PROFESSIONAL JOURNEY
          </motion.div>

          {/* Heading */}

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-slate-500 sm:text-sm">
            My professional journey through development, problem solving,
            scalable applications and modern technologies.
          </p>

          {/* Decorative Line */}

          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-500/60" />

            <motion.span
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.9)]"
            />

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/60" />
          </div>
        </motion.div>

        {/* =========================================================
            TIMELINE
        ========================================================== */}

        <div className="relative">
          {/* Timeline Background Line */}

          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-indigo-500/5 via-indigo-500/25 to-purple-500/5 sm:left-[21px]" />

          {/* Animated Timeline */}

          <motion.div
            initial={{
              height: 0,
            }}
            whileInView={{
              height: "100%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            className="absolute left-[15px] top-0 w-[2px] bg-gradient-to-b from-indigo-500/80 via-purple-500/50 to-transparent sm:left-[21px]"
          />

          {/* =======================================================
              EXPERIENCE ITEMS
          ======================================================== */}

          <div className="space-y-8">
            {EXP_DATA.map((exp, index) => {
              const ExperienceIcon = exp.icon;

              return (
                <motion.article
                  key={exp.company}
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  className="relative pl-10 sm:pl-14"
                >
                  {/* =================================================
                      TIMELINE NODE
                  ================================================== */}

                  <div className="absolute left-0 top-7 flex h-8 w-8 items-center justify-center sm:left-[6px]">
                    {/* Glow */}

                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.25, 0.65, 0.25],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.4,
                      }}
                      className={`absolute h-8 w-8 rounded-full bg-gradient-to-r ${exp.gradient} blur-md`}
                    />

                    {/* Node */}

                    <div className="relative flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#070c18] shadow-[0_0_20px_rgba(99,102,241,0.25)]">
                      <span
                        className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${exp.gradient}`}
                      />
                    </div>
                  </div>

                  {/* =================================================
                      CARD
                  ================================================== */}

                  <motion.div
                    whileHover={{
                      y: -6,
                      rotateX: 1,
                      rotateY: -1,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="group relative overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#080e1b]/95 shadow-[0_20px_55px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
                  >
                    {/* Animated Gradient Border */}

                    <div
                      className={`absolute -inset-[1px] -z-10 rounded-[24px] bg-gradient-to-r ${exp.gradient} opacity-0 blur-sm transition duration-500 group-hover:opacity-35`}
                    />

                    {/* Top Line */}

                    <div
                      className={`absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r ${exp.gradient}`}
                    />

                    {/* Background Glow */}

                    <div
                      className={`absolute -right-24 -top-24 h-52 w-52 rounded-full bg-gradient-to-r ${exp.gradient} opacity-[0.025] blur-3xl transition duration-700 group-hover:opacity-[0.1]`}
                    />

                    <div className="relative p-5 sm:p-6">
                      {/* =================================================
                          CARD HEADER
                      ================================================== */}

                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        {/* Information */}

                        <div className="min-w-0">
                          {/* Role + Current */}

                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-lg font-black tracking-tight text-white sm:text-xl">
                              {exp.role}
                            </h3>

                            {exp.current && (
                              <motion.span
                                initial={{
                                  opacity: 0,
                                  scale: 0.8,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                viewport={{
                                  once: true,
                                }}
                                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-emerald-400"
                              >
                                <motion.span
                                  animate={{
                                    opacity: [0.4, 1, 0.4],
                                    scale: [0.8, 1.15, 0.8],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                  }}
                                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                                />

                                Currently Working
                              </motion.span>
                            )}
                          </div>

                          {/* Company */}

                          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className="text-sm font-bold text-indigo-400">
                              {exp.company}
                            </span>

                            <span className="hidden text-slate-700 sm:inline">
                              •
                            </span>

                            <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                              <FaMapMarkerAlt className="text-[9px] text-slate-600" />
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        {/* =================================================
                            COMPANY BADGE
                        ================================================== */}

                        <motion.div
                          whileHover={{
                            scale: 1.08,
                            rotate: 5,
                          }}
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${exp.gradient} p-[1px] shadow-[0_8px_25px_rgba(0,0,0,0.3)]`}
                        >
                          <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#090f1c]">
                            <ExperienceIcon className="text-sm text-white/80" />
                          </div>
                        </motion.div>
                      </div>

                      {/* =================================================
                          DATE + DURATION
                      ================================================== */}

                      <div className="mt-4 flex flex-wrap gap-2">
                        <div className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.025] px-3 py-1.5">
                          <FaCalendarAlt className="text-[9px] text-indigo-400" />

                          <span className="text-[10px] font-semibold tracking-wide text-slate-400">
                            {exp.year}
                          </span>
                        </div>

                        <div className="rounded-lg border border-indigo-400/10 bg-indigo-500/[0.045] px-3 py-1.5 text-[10px] font-semibold text-indigo-300/70">
                          {exp.duration}
                        </div>
                      </div>

                      {/* =================================================
                          ACHIEVEMENT LABEL
                      ================================================== */}

                      <div className="mt-5 flex items-center gap-2">
                        <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/15 to-transparent" />

                        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-600">
                          Key Contributions
                        </span>

                        <div className="h-px flex-1 bg-gradient-to-l from-purple-500/15 to-transparent" />
                      </div>

                      {/* =================================================
                          POINTS
                      ================================================== */}

                      <div className="mt-4 space-y-3">
                        {exp.points.map((point, pointIndex) => (
                          <motion.div
                            key={pointIndex}
                            initial={{
                              opacity: 0,
                              x: -12,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.45,
                              delay: 0.25 + pointIndex * 0.12,
                            }}
                            className="group/point flex items-start gap-3"
                          >
                            {/* Number */}

                            <div
                              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-white/[0.06] bg-white/[0.025] text-[8px] font-bold text-indigo-400 transition duration-300 group-hover/point:border-indigo-400/20 group-hover/point:bg-indigo-500/[0.08]`}
                            >
                              0{pointIndex + 1}
                            </div>

                            {/* Text */}

                            <p className="text-[11px] leading-[1.75] text-slate-500 transition-colors duration-300 group-hover:text-slate-400 sm:text-xs">
                              {point}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {/* =================================================
                          DIVIDER
                      ================================================== */}

                      <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

                      {/* =================================================
                          SKILLS
                      ================================================== */}

                      <div>
                        <div className="mb-2.5 flex items-center justify-between">
                          <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-slate-600">
                            Technologies
                          </span>

                          <span className="text-[8px] text-slate-700">
                            {exp.skills.length} Skills
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {exp.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skill}
                              initial={{
                                opacity: 0,
                                scale: 0.9,
                              }}
                              whileInView={{
                                opacity: 1,
                                scale: 1,
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                delay: 0.35 + skillIndex * 0.05,
                              }}
                              whileHover={{
                                y: -2,
                              }}
                              className="rounded-md border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-[8px] font-semibold text-slate-500 transition-all duration-300 hover:border-indigo-400/20 hover:bg-indigo-500/[0.07] hover:text-indigo-300"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* =================================================
                          CARD FOOTER
                      ================================================== */}

                      <div className="mt-5 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[9px] text-slate-600">
                          <FaCheckCircle className="text-emerald-500/60" />

                          <span>
                            {exp.current
                              ? "Active Position"
                              : "Completed Position"}
                          </span>
                        </div>

                        <div
                          className={`h-1 w-12 overflow-hidden rounded-full bg-gradient-to-r ${exp.gradient} opacity-30 transition-all duration-500 group-hover:w-20 group-hover:opacity-80`}
                        />
                      </div>
                    </div>

                    {/* Bottom Animated Line */}

                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: "100%",
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1.3,
                        delay: index * 0.2,
                      }}
                      className={`h-[2px] bg-gradient-to-r ${exp.gradient}`}
                    />
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            EXPERIENCE SUMMARY
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mt-14 max-w-2xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-5 text-center backdrop-blur-xl">
            {/* Glow */}

            <div className="absolute left-1/2 top-0 h-20 w-40 -translate-x-1/2 rounded-full bg-indigo-500/[0.06] blur-3xl" />

            <div className="relative">
              <div className="mb-3 flex items-center justify-center gap-2">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-indigo-500/40" />

                <FaBriefcase className="text-xs text-indigo-400/70" />

                <span className="h-px w-8 bg-gradient-to-l from-transparent to-purple-500/40" />
              </div>

              <p className="text-[11px] leading-6 text-slate-600 sm:text-xs">
                Turning ideas into{" "}
                <span className="font-semibold text-slate-400">
                  scalable, performant and user-focused products.
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Separator */}

        <div className="mx-auto mt-10 h-px max-w-5xl bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>
    </section>
  );
};

export default Experience;