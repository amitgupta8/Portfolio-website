import React, { useMemo, useState } from "react";
import {
  Code2,
  Database,
  Server,
  Cloud,
  BrainCircuit,
  GitBranch,
  Layers3,
  Sparkles,
  ArrowUpRight,
  Zap,
  Activity,
} from "lucide-react";

const ITSkills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const skills = [
    {
      name: "React",
      icon: "⚛",
      category: "Frontend",
      level: 95,
      experience: "Advanced",
      color: "cyan",
      featured: true,
      description: "Component-based UI development",
    },
    {
      name: "Next.js",
      icon: "N",
      category: "Frontend",
      level: 91,
      experience: "Advanced",
      color: "white",
      featured: true,
      description: "Full-stack React applications",
    },
    {
      name: "JavaScript",
      icon: "JS",
      category: "Frontend",
      level: 96,
      experience: "Advanced",
      color: "yellow",
      featured: true,
      description: "Modern ES6+ development",
    },
    {
      name: "TypeScript",
      icon: "TS",
      category: "Frontend",
      level: 88,
      experience: "Advanced",
      color: "blue",
      description: "Type-safe scalable applications",
    },
    {
      name: "Tailwind CSS",
      icon: "TW",
      category: "Frontend",
      level: 94,
      experience: "Advanced",
      color: "cyan",
      description: "Modern responsive UI systems",
    },
    {
      name: "HTML5",
      icon: "5",
      category: "Frontend",
      level: 98,
      experience: "Expert",
      color: "orange",
      description: "Semantic web markup",
    },
    {
      name: "CSS3",
      icon: "3",
      category: "Frontend",
      level: 95,
      experience: "Advanced",
      color: "blue",
      description: "Layouts and animations",
    },
    {
      name: "Node.js",
      icon: "JS",
      category: "Backend",
      level: 93,
      experience: "Advanced",
      color: "green",
      featured: true,
      description: "Scalable backend applications",
    },
    {
      name: "Express.js",
      icon: "EX",
      category: "Backend",
      level: 91,
      experience: "Advanced",
      color: "white",
      description: "REST API architecture",
    },
    {
      name: "MongoDB",
      icon: "DB",
      category: "Database",
      level: 94,
      experience: "Advanced",
      color: "green",
      featured: true,
      description: "NoSQL database development",
    },
    {
      name: "PostgreSQL",
      icon: "PG",
      category: "Database",
      level: 85,
      experience: "Intermediate",
      color: "blue",
      description: "Relational database systems",
    },
    {
      name: "Redux Toolkit",
      icon: "R",
      category: "Frontend",
      level: 90,
      experience: "Advanced",
      color: "purple",
      description: "Application state management",
    },
    {
      name: "AI / LLM",
      icon: "AI",
      category: "AI",
      level: 87,
      experience: "Advanced",
      color: "emerald",
      featured: true,
      description: "AI API and LLM integration",
    },
    {
      name: "Docker",
      icon: "D",
      category: "DevOps",
      level: 82,
      experience: "Intermediate",
      color: "blue",
      description: "Containerized deployment",
    },
    {
      name: "AWS",
      icon: "AWS",
      category: "DevOps",
      level: 78,
      experience: "Intermediate",
      color: "orange",
      description: "Cloud infrastructure",
    },
    {
      name: "Git / GitHub",
      icon: "G",
      category: "Tools",
      level: 95,
      experience: "Advanced",
      color: "orange",
      description: "Version control and collaboration",
    },
  ];

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "AI",
    "DevOps",
    "Tools",
  ];

  const categoryIcons = {
    Frontend: Code2,
    Backend: Server,
    Database: Database,
    AI: BrainCircuit,
    DevOps: Cloud,
    Tools: GitBranch,
  };

  const colorMap = {
    cyan: {
      text: "text-cyan-300",
      border: "border-cyan-400/30",
      gradient: "from-cyan-300 via-blue-400 to-indigo-500",
      glow: "rgba(34,211,238,.35)",
      bg: "bg-cyan-400/10",
    },

    blue: {
      text: "text-blue-300",
      border: "border-blue-400/30",
      gradient: "from-blue-300 via-indigo-400 to-purple-500",
      glow: "rgba(59,130,246,.35)",
      bg: "bg-blue-400/10",
    },

    green: {
      text: "text-emerald-300",
      border: "border-emerald-400/30",
      gradient: "from-green-300 via-emerald-400 to-cyan-500",
      glow: "rgba(16,185,129,.35)",
      bg: "bg-emerald-400/10",
    },

    purple: {
      text: "text-purple-300",
      border: "border-purple-400/30",
      gradient: "from-purple-300 via-fuchsia-400 to-indigo-500",
      glow: "rgba(168,85,247,.35)",
      bg: "bg-purple-400/10",
    },

    orange: {
      text: "text-orange-300",
      border: "border-orange-400/30",
      gradient: "from-orange-300 via-red-400 to-pink-500",
      glow: "rgba(249,115,22,.35)",
      bg: "bg-orange-400/10",
    },

    yellow: {
      text: "text-yellow-300",
      border: "border-yellow-400/30",
      gradient: "from-yellow-300 via-orange-400 to-red-500",
      glow: "rgba(234,179,8,.35)",
      bg: "bg-yellow-400/10",
    },

    white: {
      text: "text-white",
      border: "border-white/20",
      gradient: "from-white via-gray-300 to-gray-500",
      glow: "rgba(255,255,255,.18)",
      bg: "bg-white/10",
    },

    emerald: {
      text: "text-emerald-300",
      border: "border-emerald-400/30",
      gradient: "from-emerald-300 via-cyan-400 to-blue-500",
      glow: "rgba(16,185,129,.35)",
      bg: "bg-emerald-400/10",
    },
  };

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return skills;

    return skills.filter(
      (skill) => skill.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="skills"
      className="
        relative
        min-h-screen
        overflow-hidden
        px-3
        py-16
        text-white
        sm:px-5
        sm:py-20
        md:px-8
        lg:px-10
      "
      style={{
        background: `
          radial-gradient(
            circle at 8% 10%,
            rgba(34,211,238,.08),
            transparent 24%
          ),
          radial-gradient(
            circle at 92% 15%,
            rgba(139,92,246,.08),
            transparent 26%
          ),
          radial-gradient(
            circle at 50% 100%,
            rgba(59,130,246,.07),
            transparent 32%
          ),
          linear-gradient(
            135deg,
            #020617 0%,
            #061024 35%,
            #0a1024 55%,
            #061326 75%,
            #020617 100%
          )
        `,
      }}
    >
      {/* =====================================================
          STATIC BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Static Cyan Glow */}
        <div
          className="
            absolute
            -left-32
            top-10
            h-64
            w-64
            rounded-full
            bg-cyan-500/10
            blur-[100px]
            sm:h-80
            sm:w-80
          "
        />

        {/* Static Violet Glow */}
        <div
          className="
            absolute
            -right-32
            top-32
            h-72
            w-72
            rounded-full
            bg-violet-600/10
            blur-[110px]
            sm:h-96
            sm:w-96
          "
        />

        {/* Static Bottom Glow */}
        <div
          className="
            absolute
            -bottom-32
            left-1/2
            h-80
            w-80
            -translate-x-1/2
            rounded-full
            bg-blue-600/10
            blur-[110px]
          "
        />

        {/* Static Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            sm:opacity-[0.035]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,.7) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,.7) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            mx-auto
            mb-9
            max-w-3xl
            text-center
            sm:mb-11
          "
        >
          {/* Badge */}

          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/20
              bg-white/[0.035]
              px-3
              py-1.5
              backdrop-blur-xl
              sm:px-4
              sm:py-2
            "
          >
            <Sparkles
              size={13}
              className="text-cyan-300"
            />

            <span
              className="
                text-[8px]
                font-black
                uppercase
                tracking-[0.24em]
                text-cyan-200
                sm:text-[9px]
                sm:tracking-[0.3em]
              "
            >
              Technical Arsenal
            </span>

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-emerald-400
              "
            />
          </div>

          {/* Heading */}

          <h2
            className="
              text-[2.3rem]
              font-black
              leading-none
              tracking-[-0.055em]
              sm:text-5xl
              md:text-6xl
            "
          >
            My{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-300
                via-blue-400
                to-violet-400
                bg-clip-text
                text-transparent
              "
            >
              Tech Stack
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              px-2
              text-xs
              leading-5
              text-slate-400
              sm:mt-5
              sm:text-sm
              sm:leading-6
              md:text-base
            "
          >
            Technologies and tools I use to build modern,
            scalable and high-performance digital experiences.
          </p>

          {/* Static Divider */}

          <div
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-2
              sm:mt-6
              sm:gap-3
            "
          >
            <span
              className="
                h-px
                w-8
                bg-gradient-to-r
                from-transparent
                to-cyan-400
                sm:w-12
              "
            />

            <div
              className="
                h-1.5
                w-1.5
                rotate-45
                border
                border-cyan-300
                bg-cyan-400/20
                sm:h-2
                sm:w-2
              "
            />

            <span
              className="
                h-px
                w-8
                bg-gradient-to-l
                from-transparent
                to-violet-400
                sm:w-12
              "
            />
          </div>
        </div>

        {/* =====================================================
            FILTER
        ====================================================== */}

        <div
          className="
            mb-7
            -mx-3
            overflow-x-auto
            px-3
            pb-2
            sm:mx-0
            sm:mb-9
            sm:px-0
            md:overflow-visible
          "
        >
          <div
            className="
              flex
              w-max
              gap-2
              md:mx-auto
              md:w-auto
              md:flex-wrap
              md:justify-center
            "
          >
            {categories.map((category) => {
              const Icon =
                category === "All"
                  ? Layers3
                  : categoryIcons[category];

              const active =
                activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className={`
                    flex
                    min-h-[37px]
                    shrink-0
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    px-3.5
                    py-2
                    text-[8px]
                    font-black
                    uppercase
                    tracking-wider
                    transition-colors
                    duration-200
                    sm:px-4
                    sm:text-[9px]

                    ${
                      active
                        ? `
                          border-cyan-400/30
                          bg-gradient-to-r
                          from-cyan-400/10
                          to-violet-500/10
                          text-cyan-300
                        `
                        : `
                          border-white/[0.07]
                          bg-white/[0.025]
                          text-slate-500
                          hover:border-white/[0.15]
                          hover:text-white
                        `
                    }
                  `}
                >
                  <Icon size={12} />
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            SKILLS GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-3
            min-[420px]:grid-cols-2
            sm:gap-3.5
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
          "
        >
          {filteredSkills.map((skill) => {
            const colors =
              colorMap[skill.color];

            return (
              <article
                key={skill.name}
                className="group relative"
              >
                {/* Card */}

                <div
                  className="
                    relative
                    min-h-[225px]
                    overflow-hidden
                    rounded-[19px]
                    border
                    border-white/[0.075]
                    bg-[#061124]/80
                    p-3
                    backdrop-blur-2xl
                    transition-colors
                    duration-300
                    group-hover:border-white/[0.15]
                    group-hover:bg-[#08162c]/90
                    sm:min-h-[230px]
                    sm:p-3.5
                  "
                >
                  {/* Gradient */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-br
                      ${colors.gradient}
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-[0.055]
                    `}
                  />

                  {/* Top Shine */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      h-px
                      w-0
                      -translate-x-1/2
                      bg-gradient-to-r
                      from-transparent
                      via-white
                      to-transparent
                      transition-all
                      duration-300
                      group-hover:w-2/3
                    "
                  />

                  {/* Featured */}

                  {skill.featured && (
                    <div
                      className="
                        absolute
                        right-2.5
                        top-2.5
                        flex
                        items-center
                        gap-1
                        rounded-full
                        border
                        border-yellow-400/15
                        bg-yellow-400/[0.07]
                        px-1.5
                        py-1
                        text-[5.5px]
                        font-black
                        uppercase
                        tracking-wider
                        text-yellow-300
                      "
                    >
                      <Zap size={7} />
                      Core
                    </div>
                  )}

                  {/* Icon */}

                  <div
                    className="
                      relative
                      mx-auto
                      mb-2.5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-[15px]
                      border
                      border-white/[0.08]
                      bg-white/[0.045]
                      shadow-[inset_0_1px_0_rgba(255,255,255,.07)]
                    "
                  >
                    <span
                      className={`
                        ${colors.text}
                        font-black
                        ${
                          skill.icon.length > 2
                            ? "text-[11px]"
                            : "text-xl"
                        }
                      `}
                      style={{
                        textShadow: `
                          0 0 16px
                          ${colors.glow}
                        `,
                      }}
                    >
                      {skill.icon}
                    </span>

                    {/* Static Ring */}

                    <div
                      className={`
                        absolute
                        -inset-1
                        rounded-[17px]
                        border
                        border-dashed
                        ${colors.border}
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      `}
                    />
                  </div>

                  {/* Name */}

                  <h3
                    className="
                      relative
                      truncate
                      text-center
                      text-[13px]
                      font-black
                      leading-5
                      text-white
                    "
                  >
                    {skill.name}
                  </h3>

                  {/* Category */}

                  <div className="relative mt-1 text-center">
                    <span
                      className={`
                        inline-flex
                        rounded-full
                        ${colors.bg}
                        px-2
                        py-0.5
                        text-[5.5px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        ${colors.text}
                      `}
                    >
                      {skill.category}
                    </span>
                  </div>

                  {/* Description */}

                  <p
                    className="
                      relative
                      mx-auto
                      mt-2
                      line-clamp-2
                      min-h-[25px]
                      max-w-[190px]
                      text-center
                      text-[7.5px]
                      leading-3.5
                      text-slate-500
                    "
                  >
                    {skill.description}
                  </p>

                  {/* Expertise */}

                  <div className="relative mt-3">
                    <div
                      className="
                        mb-1.5
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <div className="flex items-center gap-1">
                        <Activity
                          size={9}
                          className="text-slate-600"
                        />

                        <span
                          className="
                            text-[6px]
                            font-bold
                            uppercase
                            tracking-wider
                            text-slate-600
                          "
                        >
                          Expertise
                        </span>
                      </div>

                      <span
                        className={`
                          text-[8px]
                          font-black
                          ${colors.text}
                        `}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    <div
                      className="
                        h-1
                        overflow-hidden
                        rounded-full
                        bg-white/[0.07]
                      "
                    >
                      {/* STATIC PROGRESS */}

                      <div
                        className={`
                          h-full
                          rounded-full
                          bg-gradient-to-r
                          ${colors.gradient}
                        `}
                        style={{
                          width: `${skill.level}%`,
                          boxShadow: `
                            0 0 8px
                            ${colors.glow}
                          `,
                        }}
                      />
                    </div>
                  </div>

                  {/* Bottom */}

                  <div
                    className="
                      relative
                      mt-2.5
                      flex
                      items-center
                      justify-between
                      border-t
                      border-white/[0.05]
                      pt-2
                    "
                  >
                    <span
                      className="
                        text-[5.5px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-slate-600
                      "
                    >
                      {skill.experience}
                    </span>

                    <div className={colors.text}>
                      <ArrowUpRight size={12} />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            STATS
        ====================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-2
            gap-2.5
            sm:mt-12
            sm:gap-3
            md:grid-cols-4
          "
        >
          {[
            {
              number: "16+",
              title: "Technologies",
              icon: Code2,
            },
            {
              number: "95%",
              title: "Frontend",
              icon: Layers3,
            },
            {
              number: "92%",
              title: "Backend",
              icon: Server,
            },
            {
              number: "87%",
              title: "AI / LLM",
              icon: BrainCircuit,
            },
          ].map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  p-3
                  text-center
                  backdrop-blur-xl
                  transition-colors
                  duration-300
                  hover:border-cyan-400/20
                  hover:bg-white/[0.04]
                  sm:p-3.5
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-cyan-400/[0.04]
                    to-violet-500/[0.04]
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                <Icon
                  size={14}
                  className="
                    relative
                    mx-auto
                    mb-1.5
                    text-cyan-300/70
                  "
                />

                <div
                  className="
                    relative
                    bg-gradient-to-r
                    from-cyan-300
                    via-blue-400
                    to-violet-400
                    bg-clip-text
                    text-xl
                    font-black
                    text-transparent
                    sm:text-2xl
                  "
                >
                  {stat.number}
                </div>

                <div
                  className="
                    relative
                    mt-0.5
                    text-[6px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-slate-600
                    sm:text-[7px]
                  "
                >
                  {stat.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          CSS
      ====================================================== */}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @media (max-width: 639px) {
          #skills {
            scroll-margin-top: 70px;
          }
        }
      `}</style>
    </section>
  );
};

export default ITSkills;