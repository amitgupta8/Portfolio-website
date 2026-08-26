import React from "react";

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
  FaCheckCircle,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

import Image from "../assets/man.jpeg";

/* =========================================================
   STAT CARD
========================================================= */

const StatCard = ({ icon: Icon, value, label }) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.08]
        bg-[#0d1b2e]/80
        p-4
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400/30
        hover:bg-[#10233b]
        hover:shadow-[0_15px_40px_rgba(34,211,238,0.08)]
      "
    >
      {/* Card Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-24
          w-24
          rounded-full
          bg-cyan-400/[0.06]
          blur-2xl
          transition-all
          duration-300
          group-hover:bg-cyan-400/[0.12]
        "
      />

      {/* Icon */}

      <div
        className="
          relative
          mb-3
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          border
          border-cyan-400/10
          bg-cyan-400/[0.08]
          text-cyan-400
          transition-all
          duration-300
          group-hover:border-cyan-400/20
          group-hover:bg-cyan-400/[0.12]
        "
      >
        <Icon size={15} />
      </div>

      <h4 className="relative text-xl font-black text-white">
        {value}
      </h4>

      <p className="relative mt-1 text-[10px] text-slate-500 sm:text-xs">
        {label}
      </p>
    </div>
  );
};

/* =========================================================
   TECHNOLOGY CARD
========================================================= */

const TechCard = ({ icon: Icon, name, text }) => {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-white/[0.08]
        bg-[#0b192b]/80
        p-3
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400/25
        hover:bg-[#10233b]
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-white/[0.08]
          bg-white/[0.035]
          transition-all
          duration-300
          group-hover:border-cyan-400/20
          group-hover:bg-cyan-400/[0.06]
        "
      >
        <Icon className="text-lg text-cyan-400" />
      </div>

      <div className="min-w-0">
        <h4 className="truncate text-sm font-bold text-white">
          {name}
        </h4>

        <p className="mt-0.5 truncate text-[10px] text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
};

/* =========================================================
   ABOUT COMPONENT
========================================================= */

const AboutMe = () => {
  const socials = [
    {
      icon: FaGithub,
      href: "https://github.com/",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/",
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/",
      label: "Twitter",
    },
    {
      icon: FaTelegram,
      href: "https://telegram.org/",
      label: "Telegram",
    },
  ];

  const technologies = [
    {
      icon: SiMongodb,
      name: "MongoDB",
      text: "Database",
    },
    {
      icon: SiExpress,
      name: "Express.js",
      text: "Backend",
    },
    {
      icon: SiReact,
      name: "React.js",
      text: "Frontend",
    },
    {
      icon: SiNodedotjs,
      name: "Node.js",
      text: "Runtime",
    },
    {
      icon: SiJavascript,
      name: "JavaScript",
      text: "Language",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
      text: "UI Design",
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#081525]
        px-4
        py-16
        text-white
        sm:px-6
        sm:py-20
        md:px-8
        md:py-24
        lg:px-10
        lg:py-28
      "
    >
      {/* =====================================================
          STATIC BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Top Left Cyan Glow */}

        <div
          className="
            absolute
            -left-40
            -top-40
            h-[450px]
            w-[450px]
            rounded-full
            bg-cyan-500/[0.10]
            blur-[130px]
          "
        />

        {/* Right Indigo Glow */}

        <div
          className="
            absolute
            -right-40
            top-[25%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-indigo-500/[0.10]
            blur-[140px]
          "
        />

        {/* Bottom Violet Glow */}

        <div
          className="
            absolute
            bottom-[-220px]
            left-[30%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-violet-600/[0.09]
            blur-[140px]
          "
        />

        {/* Center Blue Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[350px]
            w-[350px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.035]
            blur-[120px]
          "
        />

        {/* Static Grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(103,232,249,.35) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(103,232,249,.35) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Header Transition */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            h-32
            bg-gradient-to-b
            from-[#07111f]
            to-transparent
          "
        />

        {/* Bottom Transition */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-32
            bg-gradient-to-t
            from-[#07111f]/60
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <div className="mb-12 sm:mb-16">

          {/* Label */}

          <div className="flex items-center gap-3">
            <span
              className="
                h-[2px]
                w-12
                bg-gradient-to-r
                from-cyan-400
                to-indigo-500
              "
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-cyan-400
                sm:text-xs
              "
            >
              About Developer
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              mt-4
              text-4xl
              font-black
              tracking-tight
              sm:text-5xl
              md:text-6xl
            "
          >
            About{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                via-indigo-400
                to-violet-400
                bg-clip-text
                text-transparent
              "
            >
              Me
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-4
              max-w-xl
              text-sm
              leading-7
              text-slate-400
              sm:text-base
            "
          >
            Passionate about creating modern, scalable and
            user-friendly web applications.
          </p>
        </div>

        {/* ===================================================
            MAIN CONTENT
        ==================================================== */}

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-16
          "
        >

          {/* =================================================
              IMAGE AREA
          ================================================== */}

          <div className="flex justify-center">
            <div className="relative">

              {/* Main Image Glow */}

              <div
                className="
                  absolute
                  inset-5
                  rounded-full
                  bg-cyan-400/20
                  blur-[70px]
                "
              />

              {/* Static Outer Ring */}

              <div
                className="
                  absolute
                  -inset-4
                  rounded-full
                  border
                  border-dashed
                  border-cyan-400/20
                "
              />

              {/* Image */}

              <div
                className="
                  group
                  relative
                  h-[230px]
                  w-[230px]
                  overflow-hidden
                  rounded-full
                  border-[5px]
                  border-[#0d1b2e]
                  shadow-[0_20px_80px_rgba(34,211,238,0.18)]
                  sm:h-[300px]
                  sm:w-[300px]
                  md:h-[330px]
                  md:w-[330px]
                "
              >
                <img
                  src={Image}
                  alt="Amit Gupta"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#07111f]/40
                    via-transparent
                    to-cyan-300/[0.06]
                  "
                />
              </div>

              {/* Available Badge */}

              <div
                className="
                  absolute
                  right-[-5px]
                  top-[10%]
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-emerald-400/20
                  bg-[#0b192b]/95
                  px-3
                  py-1.5
                  shadow-[0_10px_30px_rgba(0,0,0,.25)]
                  backdrop-blur-xl
                  sm:right-[-10px]
                  sm:px-4
                  sm:py-2
                "
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    text-emerald-300
                    sm:text-xs
                  "
                >
                  Available
                </span>
              </div>

              {/* MERN Badge */}

              <div
                className="
                  absolute
                  bottom-[5%]
                  left-[-5px]
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-[#0b192b]/95
                  px-3
                  py-2
                  shadow-[0_10px_30px_rgba(0,0,0,.3)]
                  backdrop-blur-xl
                  sm:left-[-10px]
                  sm:px-4
                  sm:py-3
                "
              >
                <p
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.25em]
                    text-slate-500
                    sm:text-[9px]
                  "
                >
                  Specialization
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    font-bold
                    text-white
                    sm:text-sm
                  "
                >
                  MERN Stack
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              INFORMATION
          ================================================== */}

          <div>

            {/* Small Heading */}

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-cyan-400
                sm:text-xs
              "
            >
              Hello, I'm
            </p>

            {/* Name */}

            <h3
              className="
                mt-2
                text-3xl
                font-black
                sm:text-4xl
                md:text-5xl
              "
            >
              Amit{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-cyan-400
                  via-indigo-400
                  to-violet-400
                  bg-clip-text
                  text-transparent
                "
              >
                Gupta
              </span>
            </h3>

            {/* Role */}

            <div className="mt-3 flex items-center gap-2">
              <FaCheckCircle
                className="text-cyan-400"
                size={14}
              />

              <span
                className="
                  text-sm
                  font-semibold
                  text-slate-300
                "
              >
                Full Stack MERN Developer
              </span>
            </div>

            {/* Description */}

            <div
              className="
                mt-6
                space-y-4
                text-sm
                leading-7
                text-slate-400
                sm:text-[15px]
                sm:leading-8
              "
            >
              <p>
                I build{" "}
                <span className="font-semibold text-white">
                  modern full-stack web applications
                </span>{" "}
                using MongoDB, Express.js, React.js and Node.js.
              </p>

              <p>
                I focus on clean architecture, responsive
                interfaces, smooth user experiences and scalable
                backend systems.
              </p>
            </div>

            {/* =================================================
                STATS
            ================================================== */}

            <div
              className="
                mt-7
                grid
                grid-cols-2
                gap-2.5
                sm:grid-cols-4
                sm:gap-3
              "
            >
              <StatCard
                icon={FaCode}
                value="20+"
                label="Projects"
              />

              <StatCard
                icon={FaServer}
                value="15+"
                label="APIs"
              />

              <StatCard
                icon={FaDatabase}
                value="10+"
                label="Technologies"
              />

              <StatCard
                icon={FaRocket}
                value="100%"
                label="Passion"
              />
            </div>

            {/* =================================================
                TECHNOLOGIES
            ================================================== */}

            <div className="mt-7">

              <div className="mb-4 flex items-center gap-3">
                <span
                  className="
                    h-px
                    w-7
                    bg-cyan-400/50
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-slate-500
                  "
                >
                  Core Technologies
                </span>
              </div>

              <div
                className="
                  grid
                  grid-cols-2
                  gap-2
                  sm:grid-cols-3
                "
              >
                {technologies.map((tech) => (
                  <TechCard
                    key={tech.name}
                    {...tech}
                  />
                ))}
              </div>
            </div>

            {/* =================================================
                ACTION BUTTONS
            ================================================== */}

            <div
              className="
                mt-7
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              {/* Work Button */}

              <a
                href="mailto:amitgupta99393@gmail.com"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  via-indigo-600
                  to-violet-600
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_35px_rgba(34,211,238,.16)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_40px_rgba(34,211,238,.25)]
                "
              >
                <span>Let's Work Together</span>

                <FaArrowRight
                  size={12}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>

              {/* Resume Button */}

              <a
                href="/resume.pdf"
                download
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/[0.10]
                  bg-white/[0.035]
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.06]
                "
              >
                <FaDownload
                  size={13}
                  className="text-cyan-400"
                />

                Download Resume
              </a>
            </div>

            {/* =================================================
                SOCIAL LINKS
            ================================================== */}

            <div className="mt-6 flex gap-2.5">
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
                      border-white/[0.08]
                      bg-white/[0.035]
                      text-slate-400
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-cyan-400/30
                      hover:bg-cyan-400/[0.07]
                      hover:text-cyan-300
                    "
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CUSTOM STYLE
      ====================================================== */}

      <style>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 100px;
        }

        @media (max-width: 767px) {
          html {
            scroll-padding-top: 85px;
          }
        }

        ::selection {
          background: rgba(34, 211, 238, 0.2);
          color: white;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;