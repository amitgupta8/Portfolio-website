import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaArrowRight,
  FaDownload,
  FaBars,
  FaTimes,
  FaCode,
  FaReact,
  FaNodeJs,
  FaEnvelope,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  /* =========================================================
     ROLES
  ========================================================= */

  const roles = [
    "AI MERN Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "AI Integration Engineer",
  ];

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const navItems = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  /* =========================================================
     SOCIALS
  ========================================================= */

  const socials = [
    {
      icon: FaGithub,
      link: "https://github.com/",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      link: "https://linkedin.com/",
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      link: "https://instagram.com/",
      label: "Instagram",
    },
    {
      icon: FaTelegram,
      link: "https://telegram.org/",
      label: "Telegram",
    },
    {
      icon: FaTwitter,
      link: "https://twitter.com/",
      label: "Twitter",
    },
  ];

  /* =========================================================
     TECHNOLOGIES
  ========================================================= */

  const technologies = [
    {
      name: "React",
      icon: FaReact,
      color: "text-cyan-400",
      position: "left-[0%] top-[14%] sm:left-[1%] sm:top-[15%]",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "text-green-400",
      position: "right-[0%] top-[19%] sm:right-[1%] sm:top-[20%]",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-500",
      position: "left-[1%] bottom-[17%] sm:left-[4%] sm:bottom-[18%]",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-white",
      position: "right-[0%] bottom-[15%] sm:right-[4%] sm:bottom-[14%]",
    },
  ];

  /* =========================================================
     STACK
  ========================================================= */

  const stack = [
    [FaReact, "React", "text-cyan-400"],
    [FaNodeJs, "Node.js", "text-green-400"],
    [SiMongodb, "MongoDB", "text-green-500"],
    [SiExpress, "Express", "text-gray-300"],
    [SiNextdotjs, "Next.js", "text-white"],
    [SiJavascript, "JavaScript", "text-yellow-300"],
    [SiTypescript, "TypeScript", "text-blue-400"],
    [SiTailwindcss, "Tailwind", "text-cyan-300"],
    [SiGit, "Git", "text-orange-400"],
  ];

  /* =========================================================
     ROLE ANIMATION
  ========================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);

    return () => clearInterval(timer);
  }, []);

  /* =========================================================
     SCROLL EFFECT
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     CLOSE MENU ON RESIZE
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =========================================================
     MOUSE 3D
  ========================================================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });

  const rotateX = useTransform(smoothY, [-1, 1], [6, -6]);
  const rotateY = useTransform(smoothX, [-1, 1], [-6, 6]);

  const handleMouseMove = (event) => {
    if (window.innerWidth < 1024) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 2;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  /* =========================================================
     SCROLL
  ========================================================= */

  const scrollToSection = (link) => {
    setMenuOpen(false);

    const element = document.querySelector(link);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#030712]
        text-white
      "
    >
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main gradient */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_12%_18%,rgba(59,130,246,0.18),transparent_30%),
            radial-gradient(circle_at_88%_20%,rgba(168,85,247,0.18),transparent_32%),
            radial-gradient(circle_at_50%_95%,rgba(6,182,212,0.12),transparent_34%),
            linear-gradient(135deg,#020617_0%,#07111f_45%,#0b0820_100%)]
          "
        />

        {/* Blue ambient glow */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.18, 1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-32
            top-10
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-600/10
            blur-[120px]
          "
        />

        {/* Purple ambient glow */}
        <motion.div
          animate={{
            x: [0, -90, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-32
            top-24
            h-[460px]
            w-[460px]
            rounded-full
            bg-purple-600/10
            blur-[130px]
          "
        />

        {/* Cyan glow */}
        <motion.div
          animate={{
            x: [0, 70, 0],
            opacity: [0.18, 0.34, 0.18],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-180px]
            left-[30%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-cyan-500/10
            blur-[130px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(129,140,248,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(129,140,248,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
            maskImage:
              "radial-gradient(circle at center, black 15%, transparent 82%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 15%, transparent 82%)",
          }}
        />

        {/* Top light */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-px
            w-[75%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-indigo-400/40
            to-transparent
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,6,23,0.7)_100%)]
          "
        />

        {/* Floating particles */}
        {[...Array(18)].map((_, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: [0, 0.7, 0],
              y: [-10, -100, -180],
              x: [0, index % 2 === 0 ? 25 : -25, 0],
            }}
            transition={{
              duration: 5 + (index % 4),
              delay: index * 0.3,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="
              absolute
              h-1
              w-1
              rounded-full
              bg-indigo-300/50
            "
            style={{
              left: `${(index * 17) % 100}%`,
              top: `${55 + ((index * 9) % 35)}%`,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

    

      {/* =====================================================
          HERO
      ====================================================== */}

      <main
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-4
          pb-12
          pt-28
          sm:px-6
          sm:pb-16
          sm:pt-32
          lg:px-8
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-10
            lg:grid-cols-[1fr_0.95fr]
            lg:gap-6
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -45,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              relative
              z-20
              text-center
              lg:text-left
            "
          >
            {/* STATUS */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
              }}
              className="
                mx-auto
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-400/20
                bg-emerald-400/[0.05]
                px-3.5
                py-2
                shadow-[0_0_25px_rgba(52,211,153,.04)]
                lg:mx-0
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-emerald-300
                  sm:text-[9px]
                "
              >
                Available for freelance
              </span>
            </motion.div>

            {/* HELLO */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.25,
              }}
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-indigo-400
                sm:text-xs
              "
            >
              Hello, I'm
            </motion.p>

            {/* NAME */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.7,
              }}
              className="
                mt-3
                text-[3.2rem]
                font-black
                leading-[0.9]
                tracking-[-0.07em]
                sm:text-7xl
                md:text-8xl
                lg:text-[5.1rem]
                xl:text-[6rem]
              "
            >
              Amit{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-indigo-400
                  via-purple-400
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >
                Gupta
              </span>
              <span className="text-indigo-400">.</span>
            </motion.h1>

            {/* ROLE */}

            <div
              className="
                mt-6
                h-8
                overflow-hidden
                sm:mt-7
                sm:h-9
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -18,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    text-base
                    font-bold
                    sm:text-xl
                    lg:justify-start
                    lg:text-2xl
                  "
                >
                  <span className="text-slate-600">
                    &
                  </span>

                  <span
                    className="
                      bg-gradient-to-r
                      from-cyan-400
                      via-indigo-400
                      to-purple-400
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {roles[roleIndex]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.55,
              }}
              className="
                mx-auto
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-slate-400
                sm:mt-6
                sm:text-base
                sm:leading-8
                lg:mx-0
                lg:text-lg
              "
            >
              I build{" "}
              <span className="font-semibold text-white">
                scalable web applications
              </span>{" "}
              with modern UI, powerful backend systems and{" "}
              <span className="font-semibold text-indigo-300">
                AI-powered experiences.
              </span>
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.65,
              }}
              className="
                mt-7
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:justify-center
                lg:justify-start
              "
            >
              <motion.button
                type="button"
                onClick={() =>
                  scrollToSection("#projects")
                }
                whileHover={{
                  scale: 1.03,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-gradient-to-r
                  from-indigo-600
                  via-purple-600
                  to-cyan-500
                  px-6
                  py-3.5
                  text-xs
                  font-black
                  shadow-[0_15px_45px_rgba(99,102,241,.25)]
                  sm:w-auto
                  sm:text-sm
                "
              >
                Explore Projects

                <FaArrowRight
                  size={12}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </motion.button>

              <motion.a
                whileHover={{
                  scale: 1.03,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href="/resume.pdf"
                download
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  px-6
                  py-3.5
                  text-xs
                  font-bold
                  text-slate-300
                  backdrop-blur-xl
                  transition
                  hover:border-indigo-400/30
                  hover:bg-indigo-500/10
                  hover:text-white
                  sm:w-auto
                  sm:text-sm
                "
              >
                <FaDownload size={12} />
                Download CV
              </motion.a>
            </motion.div>

            {/* FEATURES */}

            <div
              className="
                mt-5
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-3
                gap-y-2
                text-[8px]
                uppercase
                tracking-wider
                text-slate-600
                sm:text-[9px]
                lg:justify-start
              "
            >
              <span>Clean Code</span>
              <span className="text-indigo-500">•</span>
              <span>Responsive UI</span>
              <span className="text-indigo-500">•</span>
              <span>Scalable Backend</span>
            </div>

            {/* SOCIALS */}

            <div
              className="
                mt-7
                flex
                justify-center
                gap-2
                lg:justify-start
              "
            >
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{
                      y: -5,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.025]
                      text-slate-500
                      shadow-[0_8px_25px_rgba(0,0,0,.2)]
                      transition-all
                      hover:border-indigo-400/30
                      hover:bg-indigo-500/10
                      hover:text-indigo-300
                    "
                  >
                    <Icon size={14} />
                  </motion.a>
                );
              })}
            </div>

            {/* STATS */}

            <div
              className="
                mx-auto
                mt-7
                grid
                max-w-xl
                grid-cols-3
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.02]
                py-4
                backdrop-blur-xl
                lg:mx-0
              "
            >
              <div className="text-center lg:text-left lg:pl-4">
                <p className="text-xl font-black sm:text-2xl">
                  20
                  <span className="text-indigo-400">
                    +
                  </span>
                </p>

                <p className="mt-1 text-[7px] uppercase tracking-[0.15em] text-slate-600 sm:text-[9px]">
                  Projects
                </p>
              </div>

              <div
                className="
                  border-l
                  border-white/[0.07]
                  text-center
                  lg:pl-5
                  lg:text-left
                "
              >
                <p className="text-xl font-black sm:text-2xl">
                  10
                  <span className="text-cyan-400">
                    +
                  </span>
                </p>

                <p className="mt-1 text-[7px] uppercase tracking-[0.15em] text-slate-600 sm:text-[9px]">
                  Technologies
                </p>
              </div>

              <div
                className="
                  border-l
                  border-white/[0.07]
                  text-center
                  lg:pl-5
                  lg:text-left
                "
              >
                <p className="text-xl font-black sm:text-2xl">
                  AI
                </p>

                <p className="mt-1 text-[7px] uppercase tracking-[0.15em] text-slate-600 sm:text-[9px]">
                  Integration
                </p>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT VISUAL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.88,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
            }}
            className="
              relative
              flex
              min-h-[350px]
              items-center
              justify-center
              sm:min-h-[460px]
              md:min-h-[520px]
              lg:min-h-[600px]
            "
          >
            {/* BIG AMBIENT GLOW */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.12, 0.25, 0.12],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-[280px]
                w-[280px]
                rounded-full
                bg-indigo-500/20
                blur-[100px]
                sm:h-[420px]
                sm:w-[420px]
              "
            />

            <motion.div
              style={{
                rotateX,
                rotateY,
                transformPerspective: 1200,
              }}
              className="
                relative
                h-[300px]
                w-[300px]
                sm:h-[410px]
                sm:w-[410px]
                md:h-[470px]
                md:w-[470px]
                lg:h-[510px]
                lg:w-[510px]
              "
            >
              {/* OUTER ORBIT */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-indigo-400/20
                  shadow-[0_0_50px_rgba(99,102,241,.04)]
                "
              >
                <span
                  className="
                    absolute
                    left-1/2
                    top-[-4px]
                    h-2
                    w-2
                    -translate-x-1/2
                    rounded-full
                    bg-indigo-400
                    shadow-[0_0_18px_#818cf8]
                    sm:h-2.5
                    sm:w-2.5
                  "
                />
              </motion.div>

              {/* SECOND ORBIT */}

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-[28px]
                  rounded-full
                  border
                  border-dashed
                  border-cyan-400/20
                  sm:inset-[40px]
                  md:inset-[50px]
                "
              >
                <span
                  className="
                    absolute
                    right-[8%]
                    top-[5%]
                    h-2
                    w-2
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_18px_#22d3ee]
                  "
                />
              </motion.div>

              {/* THIRD ORBIT */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-[55px]
                  rounded-full
                  border
                  border-purple-400/15
                  sm:inset-[75px]
                  md:inset-[90px]
                "
              />

              {/* FOURTH ORBIT */}

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-[82px]
                  rounded-full
                  border
                  border-white/[0.04]
                  sm:inset-[105px]
                  md:inset-[125px]
                "
              />

              {/* CENTER GLOW */}

              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.2, 0.42, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[180px]
                  w-[180px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-indigo-600/20
                  blur-[70px]
                  sm:h-[260px]
                  sm:w-[260px]
                  sm:blur-[90px]
                "
              />

              {/* MAIN CARD */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[210px]
                  w-[210px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.035]
                  p-2
                  shadow-[0_30px_100px_rgba(0,0,0,.7)]
                  backdrop-blur-2xl
                  sm:h-[285px]
                  sm:w-[285px]
                  sm:rounded-[2.5rem]
                  sm:p-3
                  md:h-[325px]
                  md:w-[325px]
                "
              >
                <div
                  className="
                    relative
                    flex
                    h-full
                    w-full
                    flex-col
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[1.7rem]
                    border
                    border-indigo-400/20
                    bg-gradient-to-br
                    from-[#111a46]
                    via-[#050b18]
                    to-[#062d3c]
                    sm:rounded-[2.1rem]
                  "
                >
                  {/* CARD GLOW */}

                  <div
                    className="
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      bg-cyan-400/10
                      blur-[60px]
                    "
                  />

                  <div
                    className="
                      absolute
                      -bottom-16
                      -left-16
                      h-32
                      w-32
                      rounded-full
                      bg-purple-500/10
                      blur-[60px]
                    "
                  />

                  {/* INNER GRID */}

                  <div
                    className="
                      absolute
                      inset-0
                      opacity-[0.07]
                    "
                    style={{
                      backgroundImage:
                        "linear-gradient(#818cf8 1px, transparent 1px), linear-gradient(90deg,#818cf8 1px,transparent 1px)",
                      backgroundSize: "18px 18px",
                    }}
                  />

                  {/* TOP BAR */}

                  <div
                    className="
                      absolute
                      left-4
                      right-4
                      top-4
                      flex
                      items-center
                      justify-between
                      sm:left-6
                      sm:right-6
                      sm:top-5
                    "
                  >
                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    </div>

                    <span className="text-[6px] uppercase tracking-[0.2em] text-slate-600 sm:text-[7px]">
                      amit.dev
                    </span>
                  </div>

                  {/* AG LOGO */}

                  <motion.div
                    animate={{
                      scale: [1, 1.04, 1],
                      rotate: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      relative
                      z-10
                      flex
                      h-24
                      w-24
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-indigo-400/30
                      bg-gradient-to-br
                      from-indigo-600
                      via-purple-600
                      to-cyan-500
                      shadow-[0_0_70px_rgba(99,102,241,.4)]
                      sm:h-36
                      sm:w-36
                      md:h-40
                      md:w-40
                    "
                  >
                    <div
                      className="
                        flex
                        h-[92%]
                        w-[92%]
                        items-center
                        justify-center
                        rounded-full
                        bg-[#030712]
                      "
                    >
                      <div className="text-center">
                        <p
                          className="
                            text-3xl
                            font-black
                            tracking-[-0.08em]
                            sm:text-5xl
                            md:text-6xl
                          "
                        >
                          AG
                        </p>

                        <p
                          className="
                            mt-1
                            text-[6px]
                            uppercase
                            tracking-[0.3em]
                            text-indigo-300
                            sm:text-[7px]
                          "
                        >
                          Developer
                        </p>
                      </div>
                    </div>

                    {/* ONLINE */}

                    <span
                      className="
                        absolute
                        bottom-0
                        right-0
                        h-4
                        w-4
                        rounded-full
                        border-2
                        border-[#030712]
                        bg-emerald-400
                        shadow-[0_0_15px_#34d399]
                        sm:h-5
                        sm:w-5
                      "
                    />
                  </motion.div>

                  {/* CARD TEXT */}

                  <div
                    className="
                      absolute
                      bottom-3
                      left-3
                      right-3
                      rounded-xl
                      border
                      border-white/10
                      bg-black/30
                      px-3
                      py-2
                      backdrop-blur-xl
                      sm:bottom-4
                      sm:left-4
                      sm:right-4
                      sm:px-4
                      sm:py-3
                    "
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[6px] uppercase tracking-[0.2em] text-slate-600 sm:text-[7px]">
                          AI + MERN
                        </p>

                        <p className="mt-1 text-[8px] font-bold text-slate-200 sm:text-xs">
                          Building Digital Systems
                        </p>
                      </div>

                      <FaCode className="text-indigo-400" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FLOATING TECHNOLOGIES */}

              {technologies.map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <motion.div
                    key={tech.name}
                    animate={{
                      y: [0, -7, 0],
                    }}
                    transition={{
                      duration: 3.5 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`
                      absolute
                      ${tech.position}
                      z-30
                      flex
                      items-center
                      gap-1.5
                      rounded-lg
                      border
                      border-white/10
                      bg-[#07101f]/90
                      px-2
                      py-2
                      shadow-[0_15px_40px_rgba(0,0,0,.45)]
                      backdrop-blur-xl
                      sm:gap-2
                      sm:rounded-xl
                      sm:px-3
                      sm:py-2.5
                    `}
                  >
                    <Icon
                      className={`text-sm sm:text-lg ${tech.color}`}
                    />

                    <span className="text-[7px] font-bold text-slate-300 sm:text-xs">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}

              {/* CODE BADGE */}

              <motion.div
                animate={{
                  y: [0, -7, 0],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-[0%]
                  top-[39%]
                  z-40
                  hidden
                  rounded-xl
                  border
                  border-indigo-400/20
                  bg-[#030712]/90
                  px-3
                  py-2.5
                  shadow-[0_20px_50px_rgba(0,0,0,.6)]
                  backdrop-blur-xl
                  sm:block
                  lg:left-[-5%]
                "
              >
                <div className="flex items-center gap-2">
                  <FaCode className="text-indigo-400" />

                  <div>
                    <p className="text-[6px] uppercase tracking-wider text-slate-600">
                      Stack
                    </p>

                    <p className="text-[8px] font-bold text-indigo-200">
                      Full Stack
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* AI BADGE */}

              <motion.div
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  right-[0%]
                  top-[43%]
                  z-40
                  hidden
                  rounded-xl
                  border
                  border-purple-400/20
                  bg-[#12091f]/90
                  px-3
                  py-2.5
                  shadow-[0_20px_50px_rgba(0,0,0,.6)]
                  backdrop-blur-xl
                  sm:block
                  lg:right-[-5%]
                "
              >
                <div className="flex items-center gap-2">
                  <div
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-lg
                      bg-purple-500/10
                      text-[9px]
                      font-black
                      text-purple-300
                    "
                  >
                    AI
                  </div>

                  <div>
                    <p className="text-[6px] uppercase tracking-wider text-slate-600">
                      Focus
                    </p>

                    <p className="text-[8px] font-bold text-purple-200">
                      AI Integration
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* EXPERIENCE BADGE */}

              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-[3%]
                  left-1/2
                  z-40
                  hidden
                  -translate-x-1/2
                  rounded-full
                  border
                  border-cyan-400/15
                  bg-[#06141d]/90
                  px-4
                  py-2
                  shadow-[0_15px_40px_rgba(0,0,0,.5)]
                  backdrop-blur-xl
                  sm:block
                "
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

                  <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-cyan-200">
                    Modern Web • AI • Cloud
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* =====================================================
          TECH STRIP
      ====================================================== */}

      <div
        className="
          relative
          z-20
          border-t
          border-white/[0.06]
          bg-white/[0.015]
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-wrap
            items-center
            justify-center
            gap-x-5
            gap-y-4
            px-4
            py-5
            sm:gap-x-7
            sm:px-6
            sm:py-6
            lg:justify-between
            lg:px-8
          "
        >
          {stack.map(([Icon, name, color]) => (
            <motion.div
              key={name}
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              className="
                flex
                items-center
                gap-1.5
                text-slate-600
                transition
                hover:text-slate-300
              "
            >
              <Icon
                className={`text-sm sm:text-base ${color}`}
              />

              <span className="text-[8px] font-bold uppercase tracking-wider sm:text-[9px]">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =====================================================
          BOTTOM LIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          z-20
          h-px
          w-[80%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-cyan-400/30
          to-transparent
        "
      />

      {/* =====================================================
          GLOBAL STYLE
      ====================================================== */}

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          overflow-x: hidden;
          background: #030712;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        ::selection {
          background: rgba(99, 102, 241, 0.35);
          color: white;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(99, 102, 241, 0.35) transparent;
        }

        *::-webkit-scrollbar {
          width: 6px;
        }

        *::-webkit-scrollbar-track {
          background: transparent;
        }

        *::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.35);
          border-radius: 999px;
        }

        *::-webkit-scrollbar-thumb:hover {
          background: rgba(129, 140, 248, 0.6);
        }
      `}</style>
    </section>
  );
};

export default Header;