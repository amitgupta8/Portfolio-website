import React, { useState, useEffect } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
  FaServer,
  FaBolt,
  FaArrowRight,
  FaTimes,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";

const EXP_DATA = [
  {
    id: 1,
    role: "MERN STACK DEVELOPER",
    company: "Shaadi Software Technology",
    companyUrl: "https://example.com",
    location: "Delhi, India",
    year: "Nov 2025 – Present",
    duration: "Current",
    current: true,
    accent: "from-emerald-400 via-teal-500 to-cyan-600",
    borderGlow: "group-hover:border-emerald-400/60 group-hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)]",
    badgeBg: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30 dark:text-emerald-400",
    icon: FaCode,
    fullDesc:
      "Leading full-stack development for high-traffic matrimonial and social platforms. Spearheading frontend performance optimization, scalable REST API design, and database indexing strategies to handle surging user traffic seamlessly.",
    teamSize: "12+ Engineers & Product Specialists",
    metrics: "35% faster page load times & 50K+ daily active API requests handled",
    lighthouse: "98% Avg Score",
    latency: "< 120ms API Response",
    challenges: "Optimizing massive MongoDB aggregation queries and managing complex state updates across multi-step user onboarding forms.",
    points: [
      "Built 5+ production-grade React.js modules for large-scale web applications, improving page load time by 35%.",
      "Developed Node.js and Express.js REST APIs handling 50K+ daily requests with JWT authentication and MongoDB.",
      "Reduced bundle size by 40% using Next.js code splitting and achieved a 98% Lighthouse performance score.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    role: "FULL STACK DEVELOPER",
    company: "Webkype Info Services Private Limited",
    companyUrl: "https://example.com",
    location: "Noida, India",
    year: "Aug 2023 – Oct 2025",
    duration: "2+ Years",
    current: false,
    accent: "from-emerald-500 via-teal-500 to-cyan-600",
    borderGlow: "group-hover:border-emerald-500/60 group-hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)]",
    badgeBg: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30 dark:text-emerald-400",
    icon: FaServer,
    fullDesc:
      "Engineered multiple client-facing full-stack web applications from scratch. Collaborated closely with UI/UX teams to translate wireframes into pixel-perfect, highly responsive interfaces backed by robust cloud-deployed microservices.",
    teamSize: "8 Cross-functional Team Members",
    metrics: "Boosted client user engagement by 45% with 90%+ Jest test coverage",
    lighthouse: "95% Avg Score",
    latency: "< 200ms API Response",
    challenges: "Eliminating prop drilling across deep component trees and configuring automated AWS EC2 containerized deployments via Docker.",
    points: [
      "Engineered 3 full-stack web applications using React.js, Next.js and Node.js, boosting user engagement by 45%.",
      "Implemented Redux and Context API architecture, reducing unnecessary prop drilling across enterprise applications.",
      "Maintained 90%+ Jest test coverage and deployed scalable applications on AWS EC2 using Docker containers.",
    ],
    skills: ["React.js", "Next.js", "Node.js", "Redux", "AWS", "Docker", "Jest"],
  },
];

const ExperienceCard = ({ exp, onSelect }) => {
  const ExperienceIcon = exp.icon;

  return (
    <article className="group relative h-full">
      <div
        className={`absolute -inset-[1px] rounded-[22px] bg-gradient-to-r ${exp.accent} opacity-0 blur-md transition-all duration-500 group-hover:opacity-30`}
      />
      <div
        onClick={() => onSelect(exp)}
        onKeyDown={(e) => e.key === "Enter" && onSelect(exp)}
        role="button"
        tabIndex={0}
        className={`relative flex h-full flex-col justify-between cursor-pointer overflow-hidden rounded-[22px] border border-emerald-200/80 bg-white/90 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-2 ${exp.borderGlow} sm:p-8 dark:border-emerald-500/20 dark:bg-gradient-to-b dark:from-[#0a261d]/95 dark:to-[#061a14]/95`}
      >
        <div className={`absolute inset-x-0 top-0 h-1.5 rounded-t-[22px] bg-gradient-to-r ${exp.accent}`} />

        <div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-600 sm:text-xl transition-colors dark:text-white dark:group-hover:text-emerald-400">
                  {exp.role}
                </h3>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-0.5 text-[10px] font-bold text-emerald-600 border border-emerald-200 shadow-sm dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Active Role
                  </span>
                )}
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                <span className="font-bold text-slate-800 dark:text-slate-200">{exp.company}</span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                  <FaMapMarkerAlt className="text-[10px] text-emerald-500" />
                  {exp.location}
                </span>
              </div>
            </div>

            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${exp.accent} p-0.5 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-white dark:bg-slate-900">
                <ExperienceIcon className="text-base text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <div className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-50/60 px-3.5 py-1.5 text-xs font-medium text-slate-700 border border-emerald-200/70 shadow-inner dark:bg-slate-900/90 dark:border-emerald-500/20 dark:text-slate-300">
              <FaCalendarAlt className="text-[10px] text-emerald-500" />
              {exp.year}
            </div>
            <div className={`inline-flex items-center rounded-xl px-3.5 py-1.5 text-xs font-bold border ${exp.badgeBg} shadow-sm`}>
              {exp.duration}
            </div>
          </div>

          <div className="mt-6 space-y-3 rounded-2xl border border-emerald-200/50 bg-emerald-50/40 p-4 shadow-sm dark:border-emerald-500/20 dark:bg-slate-900/30">
            {exp.points.slice(0, 2).map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${exp.accent}`} />
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-300 line-clamp-2">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="mb-2 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
              Core Tech Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-emerald-200 bg-emerald-50/50 px-2.5 py-1 text-[10px] font-semibold text-slate-700 dark:border-emerald-500/20 dark:bg-slate-900/60 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-emerald-200 to-transparent dark:via-emerald-500/20" />

          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400 transition-colors group-hover:text-emerald-600 dark:text-slate-500 dark:group-hover:text-emerald-400">
              View Role Deep Dive
            </span>
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:translate-x-1.5 group-hover:border-emerald-400 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400">
              <FaArrowRight className="text-[10px]" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const ExperienceModal = ({ exp, onClose }) => {
  useEffect(() => {
    if (!exp) return;
    
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [exp, onClose]);

  if (!exp) return null;
  const ModalIcon = exp.icon;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      <div className="relative z-10 w-full max-w-4xl my-6 max-h-[92vh] flex flex-col rounded-3xl border border-emerald-500/40 bg-white shadow-2xl shadow-emerald-950/60 dark:bg-[#081e17] dark:shadow-[0_0_80px_rgba(0,0,0,0.95)] overflow-hidden">
        
        <div className={`absolute left-0 right-0 top-0 h-[6px] bg-gradient-to-r ${exp.accent} z-30`} />

        <div className="flex items-center justify-between border-b border-slate-200 bg-white/95 px-6 py-4.5 dark:border-emerald-500/20 dark:bg-[#081e17]/95">
          <div className="flex items-center gap-4 pr-4 min-w-0">
            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${exp.accent} shadow-md text-white`}>
              <ModalIcon className="text-2xl" />
            </div>
            <div className="min-w-0">
              <span className="inline-block rounded-md bg-emerald-100 dark:bg-emerald-500/10 px-2.5 py-0.5 text-[9px] font-extrabold tracking-widest text-emerald-700 dark:text-emerald-400 mb-1">
                {exp.company}
              </span>
              <h2 className="truncate text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                {exp.role}
              </h2>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-700 transition-all hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-emerald-500/30 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-red-500 dark:hover:border-red-500 dark:hover:text-white shadow-sm cursor-pointer"
          >
            <FaTimes className="text-base transition-transform group-hover:rotate-90 duration-300" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">Role Overview & Scope</h4>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {exp.fullDesc}
            </p>
          </div>

          {/* 3-Column Performance Metrics Summary Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3.5 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md">
                <FaShieldAlt className="text-sm" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">Impact Metric</p>
                <p className="text-xs font-extrabold text-slate-900 dark:text-white truncate">{exp.metrics.split('&')[0]}</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white shadow-md">
                <FaRocket className="text-sm" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-wider text-teal-800 dark:text-teal-400">Lighthouse Score</p>
                <p className="text-xs font-extrabold text-slate-900 dark:text-white truncate">{exp.lighthouse}</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-600 text-white shadow-md">
                <FaChartLine className="text-sm" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-wider text-cyan-800 dark:text-cyan-400">API Speed</p>
                <p className="text-xs font-extrabold text-slate-900 dark:text-white truncate">{exp.latency}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Key Contributions & Accomplishments
            </p>
            <div className="space-y-3">
              {exp.points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 dark:border-emerald-500/20 bg-slate-50/70 dark:bg-slate-900/40 p-4"
                >
                  <FaCheckCircle className="shrink-0 text-sm text-emerald-600 dark:text-emerald-400 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Technologies & Tools Utilized
            </p>
            <div className="flex flex-wrap gap-2.5">
              {exp.skills.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300"
                >
                  <FaCode className="text-xs opacity-80" />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <a
              href={exp.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-13 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02]"
            >
              <FaExternalLinkAlt className="text-xs" />
              Visit Company Portal / Reference
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <section
      id="experience"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-emerald-50/50
        px-4
        py-24
        text-slate-900
        transition-colors
        duration-500
        sm:px-6
        md:py-32
        lg:px-12
        dark:bg-[#061a14]
        dark:text-slate-100
      "
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-500/10 via-teal-600/10 to-cyan-600/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-emerald-600/10 blur-[140px]" />
        
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(16,185,129,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mx-auto mb-20 max-w-xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-xs font-bold tracking-widest text-emerald-700 shadow-xl backdrop-blur-md dark:border-emerald-500/30 dark:bg-slate-900/80 dark:text-emerald-300">
            <FaBolt className="text-emerald-500 animate-bounce" />
            CAREER TRAJECTORY
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
            Professional{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mt-3 text-sm text-slate-600 sm:text-base dark:text-slate-400">
            Click any role to explore deep-dive specs, architectural scope, and metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {EXP_DATA.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} onSelect={setSelectedExperience} />
          ))}
        </div>
      </div>

      <ExperienceModal exp={selectedExperience} onClose={() => setSelectedExperience(null)} />
    </section>
  );
};

export default Experience;