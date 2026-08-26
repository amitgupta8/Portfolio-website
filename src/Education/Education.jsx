import React from "react";
import {
  FaAward,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Education = () => {
  const EDUCATION_DATA = [
    {
      degree: "Bachelor of Computer Applications",
      short: "BCA",
      college: "NIET, Greater Noida",
      year: "2020 - 2023",
      status: "Completed",
      score: "76%",
      image: "https://www.imsnoida.com/assets/img/hostel/1.jpg",
      gradient: "from-blue-500 via-indigo-500 to-violet-500",
      accent: "text-indigo-400",
      description:
        "Focused on software development, web technologies, databases and modern programming concepts.",
    },
    {
      degree: "Intermediate",
      short: "12th",
      college: "Aapke School Ka Naam",
      year: "2018 - 2020",
      status: "Completed",
      score: "65%",
      image: "https://www.imsnoida.com/assets/img/hostel/1.jpg",
      gradient: "from-indigo-500 via-purple-500 to-fuchsia-500",
      accent: "text-purple-400",
      description:
        "Built a strong academic foundation with an early interest in computers, technology and problem solving.",
    },
    {
      degree: "High School",
      short: "10th",
      college: "Aapke School Ka Naam",
      year: "2016 - 2018",
      status: "Completed",
      score: "60%",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=90",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      accent: "text-pink-400",
      description:
        "Completed secondary education while developing the fundamentals that started my technology journey.",
    },
  ];

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#050816] px-4 py-20 text-white sm:px-6 md:py-24 lg:px-10"
    >
      {/* =========================================================
          BACKGROUND - STATIC
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top Glow */}
        <div className="absolute left-1/2 top-[-280px] h-[500px] w-[650px] -translate-x-1/2 rounded-full bg-indigo-600/[0.08] blur-[130px]" />

        {/* Left Glow */}
        <div className="absolute left-[-250px] top-[35%] h-[400px] w-[400px] rounded-full bg-blue-600/[0.05] blur-[120px]" />

        {/* Right Glow */}
        <div className="absolute bottom-[5%] right-[-250px] h-[420px] w-[420px] rounded-full bg-purple-600/[0.05] blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Static Dots */}
        <div className="absolute left-[12%] top-[22%] h-1 w-1 rounded-full bg-indigo-400 opacity-40" />

        <div className="absolute right-[15%] top-[30%] h-1 w-1 rounded-full bg-purple-400 opacity-40" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="mx-auto mb-12 max-w-2xl text-center">
          {/* Badge */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-400/15 bg-white/[0.035] px-4 py-2 text-[10px] font-bold tracking-[0.18em] text-slate-300 shadow-[0_0_30px_rgba(99,102,241,0.08)] backdrop-blur-xl">
            <FaGraduationCap className="text-indigo-400" />
            EDUCATION
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-slate-500 sm:text-sm">
            Academic milestones that shaped my technical foundation and
            professional journey.
          </p>

          {/* Decoration */}

          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-500/60" />

            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/60" />
          </div>
        </div>

        {/* =======================================================
            EDUCATION GRID
        ======================================================== */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {EDUCATION_DATA.map((edu, index) => (
            <article
              key={edu.degree}
              className="group relative"
            >
              {/* Outer Glow */}

              <div
                className={`absolute -inset-[1px] rounded-[22px] bg-gradient-to-r ${edu.gradient} opacity-0 blur-md transition-all duration-500 group-hover:opacity-45`}
              />

              {/* Card */}

              <div className="relative h-full overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#0a1020]/95 shadow-[0_15px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/[0.14] group-hover:shadow-[0_25px_65px_rgba(0,0,0,0.35)]">
                {/* Top Gradient */}

                <div
                  className={`absolute left-0 right-0 top-0 z-20 h-[2px] bg-gradient-to-r ${edu.gradient}`}
                />

                {/* =================================================
                    IMAGE
                ================================================== */}

                <div className="relative h-[155px] overflow-hidden">
                  <img
                    src={edu.image}
                    alt={edu.degree}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Dark Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020] via-[#0a1020]/20 to-black/20" />

                  {/* Image Shine - CSS only */}

                  <div className="pointer-events-none absolute inset-y-0 left-[-100%] w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent transition-all duration-700 group-hover:left-[120%]" />

                  {/* Year */}

                  <div className="absolute right-3 top-3">
                    <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/35 px-2.5 py-1.5 text-[9px] font-semibold text-slate-200 shadow-lg backdrop-blur-xl">
                      <FaCalendarAlt className="text-[8px] text-indigo-400" />
                      {edu.year}
                    </div>
                  </div>

                  {/* Number */}

                  <div className="absolute bottom-2 left-4">
                    <span className="text-[42px] font-black leading-none text-white/[0.07]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Degree Badge */}

                  <div className="absolute bottom-3 right-4">
                    <div
                      className={`rounded-lg border border-white/10 bg-gradient-to-r ${edu.gradient} px-3 py-1.5 text-[9px] font-black tracking-wider text-white shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-105`}
                    >
                      {edu.short}
                    </div>
                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="p-[18px]">
                  {/* Status + Score */}

                  <div className="mb-3.5 flex items-center justify-between">
                    {/* Status */}

                    <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/10 bg-emerald-400/[0.055] px-2.5 py-1">
                      <FaCheckCircle className="text-[9px] text-emerald-400" />

                      <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-emerald-400">
                        {edu.status}
                      </span>
                    </div>

                    {/* Score */}

                    <div className="flex items-center gap-1.5">
                      <FaAward className="text-[11px] text-yellow-400" />

                      <span className="text-xs font-extrabold text-white">
                        {edu.score}
                      </span>
                    </div>
                  </div>

                  {/* Title */}

                  <h3 className="min-h-[50px] text-[17px] font-extrabold leading-[1.45] text-white transition-colors duration-300 group-hover:text-indigo-300">
                    {edu.degree}
                  </h3>

                  {/* Institution */}

                  <div className="mt-3.5 flex items-center gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-indigo-400/10 bg-indigo-500/[0.07] text-indigo-400 transition-all duration-300 group-hover:border-indigo-400/20 group-hover:bg-indigo-500/[0.12]">
                      <FaMapMarkerAlt className="text-[11px]" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[7px] font-bold uppercase tracking-[0.16em] text-slate-600">
                        Institution
                      </p>

                      <p className="mt-0.5 truncate text-[11px] font-semibold text-slate-300">
                        {edu.college}
                      </p>
                    </div>
                  </div>

                  {/* Description */}

                  <p className="mt-3.5 min-h-[57px] text-[11px] leading-[1.65] text-slate-500">
                    {edu.description}
                  </p>

                  {/* Divider */}

                  <div className="my-3.5 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

                  {/* Bottom */}

                  <div className="flex items-center justify-between">
                    {/* Score */}

                    <div>
                      <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-slate-600">
                        Academic Score
                      </p>

                      <div className="mt-0.5 flex items-center gap-1.5">
                        <span className="text-sm font-extrabold text-slate-200">
                          {edu.score}
                        </span>

                        <span className="text-[8px] text-slate-600">
                          Overall
                        </span>
                      </div>
                    </div>

                    {/* Certificate */}

                    <button
                      type="button"
                      className="group/btn flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-[9px] font-bold text-slate-300 transition-all duration-300 hover:scale-[1.04] hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-white active:scale-[0.96]"
                    >
                      Certificate

                      <FaExternalLinkAlt className="text-[7px] text-indigo-400 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </div>

                {/* Bottom Progress Line */}

                <div className="relative h-[2px] w-full overflow-hidden bg-white/[0.025]">
                  <div
                    className={`h-full w-full bg-gradient-to-r ${edu.gradient}`}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =======================================================
            BOTTOM MESSAGE
        ======================================================== */}

        <div className="mx-auto mt-11 max-w-xl text-center">
          <div className="mx-auto mb-4 h-px w-20 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

          <p className="text-[11px] leading-6 text-slate-600 sm:text-xs">
            Education is not just about degrees — it's about building the
            mindset to{" "}
            <span className="font-semibold text-slate-400">
              keep learning and keep improving.
            </span>
          </p>
        </div>

        {/* Bottom Line */}

        <div className="mx-auto mt-9 h-px max-w-5xl bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>
    </section>
  );
};

export default Education;