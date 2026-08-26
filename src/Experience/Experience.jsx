import React from "react";
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
      gradient: "from-blue-500 via-indigo-500 to-violet-500",
      icon: FaCode,
      points: [
        "Built 5+ production-grade React.js modules for large-scale web applications, improving page load time by 35%.",
        "Developed Node.js and Express.js REST APIs handling 50K+ daily requests with JWT authentication and MongoDB.",
        "Reduced bundle size by 40% using Next.js code splitting and achieved a 98% Lighthouse performance score.",
      ],
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Next.js",
      ],
    },
    {
      role: "FULL STACK DEVELOPER",
      company: "Webkype Info Services Private Limited",
      location: "Noida, India",
      year: "Aug 2023 – Oct 2025",
      duration: "2+ Years",
      current: false,
      gradient: "from-indigo-500 via-purple-500 to-fuchsia-500",
      icon: FaServer,
      points: [
        "Engineered 3 full-stack web applications using React.js, Next.js and Node.js, boosting user engagement by 45%.",
        "Implemented Redux and Context API architecture, reducing unnecessary prop drilling across enterprise applications.",
        "Maintained 90%+ Jest test coverage and deployed scalable applications on AWS EC2 using Docker containers.",
      ],
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Redux",
        "AWS",
        "Docker",
      ],
    },
  ];

  const floatingIcons = [
    {
      icon: FaCode,
      position: "left-[8%] top-[28%]",
    },
    {
      icon: FaDatabase,
      position: "right-[8%] top-[42%]",
    },
    {
      icon: FaCloud,
      position: "left-[12%] bottom-[18%]",
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
        <div className="absolute left-1/2 top-[-320px] h-[600px] w-[750px] -translate-x-1/2 rounded-full bg-indigo-600/[0.08] blur-[150px]" />

        {/* Left Glow */}
        <div className="absolute left-[-280px] top-[35%] h-[450px] w-[450px] rounded-full bg-blue-600/[0.045] blur-[140px]" />

        {/* Right Glow */}
        <div className="absolute bottom-[-150px] right-[-280px] h-[480px] w-[480px] rounded-full bg-purple-600/[0.045] blur-[140px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />

        {/* Floating Icons - Static */}
        {floatingIcons.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`absolute ${item.position} hidden md:block opacity-[0.045]`}
            >
              <Icon className="text-5xl text-indigo-400" />
            </div>
          );
        })}
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="mx-auto mb-14 max-w-2xl text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/15 bg-white/[0.035] px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-slate-300 shadow-[0_0_30px_rgba(99,102,241,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-indigo-400/30 hover:bg-indigo-500/[0.06]">
            <FaBriefcase className="text-indigo-400" />
            PROFESSIONAL JOURNEY
          </div>

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

            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.7)]" />

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/60" />
          </div>
        </div>

        {/* =========================================================
            TIMELINE
        ========================================================== */}

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-indigo-500/10 via-indigo-500/25 to-purple-500/10 sm:left-[21px]" />

          {/* Experience Items */}
          <div className="space-y-8">
            {EXP_DATA.map((exp, index) => {
              const ExperienceIcon = exp.icon;

              return (
                <article
                  key={exp.company}
                  className="relative pl-10 sm:pl-14"
                >
                  {/* =================================================
                      TIMELINE NODE
                  ================================================== */}

                  <div className="absolute left-0 top-7 flex h-8 w-8 items-center justify-center sm:left-[6px]">
                    <div className="absolute h-8 w-8 rounded-full bg-indigo-500/10 blur-md" />

                    <div className="relative flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#070c18] shadow-[0_0_20px_rgba(99,102,241,0.18)]">
                      <span
                        className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${exp.gradient}`}
                      />
                    </div>
                  </div>

                  {/* =================================================
                      CARD
                  ================================================== */}

                  <div className="group relative overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#080e1b]/95 shadow-[0_20px_55px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:shadow-[0_25px_65px_rgba(0,0,0,0.35)]">
                    {/* Gradient Border Glow */}
                    <div
                      className={`absolute -inset-[1px] -z-10 rounded-[24px] bg-gradient-to-r ${exp.gradient} opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-30`}
                    />

                    {/* Top Line */}
                    <div
                      className={`absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r ${exp.gradient}`}
                    />

                    {/* Background Glow */}
                    <div
                      className={`absolute -right-24 -top-24 h-52 w-52 rounded-full bg-gradient-to-r ${exp.gradient} opacity-[0.025] blur-3xl transition-opacity duration-300 group-hover:opacity-[0.08]`}
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
                            <h3 className="text-lg font-black tracking-tight text-white transition-colors duration-300 group-hover:text-indigo-200 sm:text-xl">
                              {exp.role}
                            </h3>

                            {exp.current && (
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-emerald-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                Currently Working
                              </span>
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

                        {/* Company Badge */}
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${exp.gradient} p-[1px] shadow-[0_8px_25px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-105`}
                        >
                          <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#090f1c]">
                            <ExperienceIcon className="text-sm text-white/80" />
                          </div>
                        </div>
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
                          <div
                            key={pointIndex}
                            className="group/point flex items-start gap-3"
                          >
                            {/* Number */}
                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-white/[0.06] bg-white/[0.025] text-[8px] font-bold text-indigo-400 transition-all duration-300 group-hover/point:border-indigo-400/20 group-hover/point:bg-indigo-500/[0.08]">
                              0{pointIndex + 1}
                            </div>

                            {/* Text */}
                            <p className="text-[11px] leading-[1.75] text-slate-500 transition-colors duration-300 group-hover/point:text-slate-300 sm:text-xs">
                              {point}
                            </p>
                          </div>
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
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-md border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-[8px] font-semibold text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/20 hover:bg-indigo-500/[0.07] hover:text-indigo-300"
                            >
                              {skill}
                            </span>
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
                          className={`h-1 w-12 rounded-full bg-gradient-to-r ${exp.gradient} opacity-30 transition-all duration-300 group-hover:w-20 group-hover:opacity-80`}
                        />
                      </div>
                    </div>

                    {/* Bottom Line */}
                    <div
                      className={`h-[2px] w-full bg-gradient-to-r ${exp.gradient} opacity-40 transition-opacity duration-300 group-hover:opacity-100`}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            EXPERIENCE SUMMARY
        ========================================================== */}

        <div className="mx-auto mt-14 max-w-2xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-5 text-center backdrop-blur-xl transition-all duration-300 hover:border-indigo-400/10 hover:bg-white/[0.03]">
            {/* Glow */}
            <div className="absolute left-1/2 top-0 h-20 w-40 -translate-x-1/2 rounded-full bg-indigo-500/[0.05] blur-3xl" />

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
        </div>

        {/* Bottom Separator */}
        <div className="mx-auto mt-10 h-px max-w-5xl bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>
    </section>
  );
};

export default Experience;