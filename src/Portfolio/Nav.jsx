import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Download,
  ChevronRight,
} from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { name: "Skills", id: "skills" },
    { name: "Stack", id: "stack" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  /* =========================================================
     ACTIVE SECTION
  ========================================================= */

  useEffect(() => {
    const sections = [
      "home",
      "skills",
      "stack",
      "education",
      "projects",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section && scrollPosition >= section.offsetTop) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     MOBILE BODY LOCK
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* =========================================================
     SMOOTH SCROLL
  ========================================================= */

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActive(id);
    setOpen(false);
  };

  return (
    <>
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
        {/* Indigo Glow */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            opacity: [0.08, 0.13, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[8%]
            top-[-180px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-indigo-600/10
            blur-[120px]
          "
        />

        {/* Purple Glow */}
        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 30, 0],
            opacity: [0.06, 0.11, 0.06],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[5%]
            top-[-100px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-purple-600/10
            blur-[120px]
          "
        />
      </div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          left-0
          right-0
          top-3
          z-[100]
          px-3
          sm:top-4
          sm:px-5
        "
      >
        <nav
          className="
            relative
            mx-auto
            flex
            h-[62px]
            max-w-6xl
            items-center
            justify-between
            overflow-hidden
            rounded-2xl
            border
            border-indigo-400/[0.12]
            bg-[#020617]/85
            px-3
            shadow-[0_18px_70px_rgba(2,6,23,0.65)]
            backdrop-blur-2xl
            sm:h-[68px]
            sm:rounded-full
            sm:px-5
            lg:px-6
          "
        >
          {/* =================================================
              TOP GRADIENT LINE
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-[10%]
              right-[10%]
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-indigo-400/70
              to-transparent
            "
          />

          {/* =================================================
              INNER GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-20
              w-1/2
              -translate-x-1/2
              rounded-full
              bg-indigo-500/[0.035]
              blur-3xl
            "
          />

          {/* =================================================
              LOGO
          ================================================= */}

          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="
              group
              relative
              z-10
              flex
              shrink-0
              items-center
              gap-2.5
              text-left
              sm:gap-3
            "
          >
            {/* LOGO BOX */}

            <motion.div
              whileHover={{
                rotate: 6,
                scale: 1.06,
              }}
              whileTap={{
                scale: 0.94,
              }}
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                border
                border-indigo-300/20
                bg-gradient-to-br
                from-indigo-500
                via-purple-600
                to-cyan-500
                shadow-[0_0_35px_rgba(99,102,241,0.22)]
                sm:h-11
                sm:w-11
                sm:rounded-[14px]
              "
            >
              {/* Logo Glow */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-tr
                  from-white/0
                  via-white/10
                  to-white/20
                "
              />

              {/* Shine */}

              <motion.div
                animate={{
                  x: ["-130%", "130%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-y-0
                  w-8
                  rotate-[25deg]
                  bg-white/20
                  blur-md
                "
              />

              <span
                className="
                  relative
                  z-10
                  text-base
                  font-black
                  text-white
                  sm:text-lg
                "
              >
                A
              </span>
            </motion.div>

            {/* BRAND */}

            <div className="leading-none">
              <h1
                className="
                  text-[15px]
                  font-black
                  tracking-tight
                  text-white
                  sm:text-[17px]
                "
              >
                Amit
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
                  .dev
                </span>
              </h1>

              <p
                className="
                  mt-1
                  hidden
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-white/35
                  sm:block
                "
              >
                Full Stack Developer
              </p>
            </div>
          </button>

          {/* =================================================
              DESKTOP MENU
          ================================================= */}

          <div
            className="
              relative
              z-10
              hidden
              items-center
              gap-1
              rounded-full
              border
              border-white/[0.06]
              bg-white/[0.018]
              p-1
              md:flex
            "
          >
            {links.map((item) => {
              const isActive = active === item.id;

              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="
                    relative
                    rounded-full
                    px-3
                    py-2
                    text-[12px]
                    font-medium
                    transition-all
                    duration-300
                    lg:px-4
                    lg:text-[13px]
                  "
                >
                  {/* ACTIVE */}

                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="
                        absolute
                        inset-0
                        rounded-full
                        border
                        border-indigo-400/20
                        bg-gradient-to-r
                        from-indigo-500/[0.12]
                        via-purple-500/[0.10]
                        to-cyan-400/[0.08]
                        shadow-[0_0_25px_rgba(99,102,241,0.10)]
                      "
                    />
                  )}

                  <span
                    className={`
                      relative
                      z-10
                      ${
                        isActive
                          ? "bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent"
                          : "text-white/50 hover:text-white"
                      }
                    `}
                  >
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* =================================================
              RESUME BUTTON
          ================================================= */}

          <motion.a
            whileHover={{
              scale: 1.04,
              y: -1,
            }}
            whileTap={{
              scale: 0.97,
            }}
            href="/resume.pdf"
            download
            className="
              relative
              z-10
              hidden
              h-10
              items-center
              gap-2
              overflow-hidden
              rounded-full
              border
              border-indigo-300/20
              bg-gradient-to-r
              from-indigo-600
              via-purple-600
              to-cyan-500
              px-4
              text-xs
              font-bold
              text-white
              shadow-[0_0_30px_rgba(99,102,241,0.18)]
              transition
              md:flex
              lg:px-5
            "
          >
            {/* Button shine */}

            <motion.span
              animate={{
                x: ["-150%", "150%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="
                absolute
                inset-y-0
                w-10
                rotate-[20deg]
                bg-white/15
                blur-md
              "
            />

            <Download size={14} />

            <span className="relative z-10">Resume</span>

            <ArrowUpRight size={15} />
          </motion.a>

          {/* =================================================
              MOBILE BUTTON
          ================================================= */}

          <motion.button
            type="button"
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="
              relative
              z-10
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-indigo-400/[0.12]
              bg-white/[0.035]
              text-white
              transition
              hover:border-indigo-400/30
              hover:bg-indigo-500/[0.08]
              md:hidden
            "
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {open ? (
                <motion.div
                  key="close"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                  }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                  }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </motion.header>

      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setOpen(false)}
            className="
              fixed
              inset-0
              z-[80]
              bg-[#020617]/75
              backdrop-blur-md
              md:hidden
            "
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          MOBILE SIDE MENU
      ===================================================== */}

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="
              fixed
              right-0
              top-0
              z-[90]
              flex
              h-screen
              w-[min(85vw,340px)]
              flex-col
              overflow-hidden
              border-l
              border-indigo-400/[0.12]
              bg-[#020617]/95
              px-6
              pt-24
              shadow-[-25px_0_100px_rgba(2,6,23,0.75)]
              backdrop-blur-2xl
              md:hidden
            "
          >
            {/* =================================================
                MOBILE GLOWS
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                right-[-120px]
                top-[-80px]
                h-[320px]
                w-[320px]
                rounded-full
                bg-indigo-600/15
                blur-[110px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                bottom-[-100px]
                left-[-100px]
                h-[280px]
                w-[280px]
                rounded-full
                bg-purple-600/10
                blur-[110px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                bottom-[20%]
                right-[-120px]
                h-[220px]
                w-[220px]
                rounded-full
                bg-cyan-500/[0.06]
                blur-[100px]
              "
            />

            {/* =================================================
                MOBILE HEADER
            ================================================= */}

            <div className="relative mb-7 flex items-center justify-between">
              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-indigo-400
                  "
                >
                  Navigation
                </p>

                <h2 className="mt-1 text-xl font-black text-white">
                  Explore
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-white/60
                  transition
                  hover:border-indigo-400/20
                  hover:text-white
                "
              >
                <X size={18} />
              </button>
            </div>

            {/* =================================================
                MOBILE LINKS
            ================================================= */}

            <div className="relative space-y-2">
              {links.map((item, index) => {
                const isActive = active === item.id;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    onClick={() => scrollTo(item.id)}
                    className={`
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      px-4
                      py-4
                      text-left
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "border-indigo-400/20 bg-gradient-to-r from-indigo-500/[0.10] via-purple-500/[0.07] to-transparent"
                          : "border-transparent hover:border-white/[0.06] hover:bg-white/[0.035]"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`
                          text-[10px]
                          font-bold
                          ${
                            isActive
                              ? "text-indigo-400"
                              : "text-white/20"
                          }
                        `}
                      >
                        0{index + 1}
                      </span>

                      <span
                        className={`
                          text-sm
                          font-semibold
                          ${
                            isActive
                              ? "text-white"
                              : "text-white/60"
                          }
                        `}
                      >
                        {item.name}
                      </span>
                    </div>

                    <ChevronRight
                      size={16}
                      className={`
                        transition-all
                        ${
                          isActive
                            ? "translate-x-0 text-indigo-400"
                            : "-translate-x-1 text-white/20 group-hover:translate-x-0 group-hover:text-indigo-300"
                        }
                      `}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* =================================================
                MOBILE RESUME
            ================================================= */}

            <motion.a
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
              }}
              href="/resume.pdf"
              download
              onClick={() => setOpen(false)}
              className="
                relative
                mt-7
                flex
                h-12
                items-center
                justify-center
                gap-2
                overflow-hidden
                rounded-2xl
                border
                border-indigo-300/20
                bg-gradient-to-r
                from-indigo-600
                via-purple-600
                to-cyan-500
                text-sm
                font-bold
                text-white
                shadow-[0_12px_40px_rgba(99,102,241,0.18)]
              "
            >
              <Download size={16} />

              <span className="relative z-10">
                Download Resume
              </span>

              <ArrowUpRight size={16} />
            </motion.a>

            {/* =================================================
                MOBILE BRAND
            ================================================= */}

            <div
              className="
                relative
                mt-auto
                border-t
                border-white/[0.06]
                pb-7
                pt-6
              "
            >
              <p className="text-xs font-bold text-white/50">
                Amit
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
                  .dev
                </span>
              </p>

              <p
                className="
                  mt-1
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-white/25
                "
              >
                Full Stack • AI • MERN
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* =====================================================
          GLOBAL STYLE
      ===================================================== */}

      <style>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 100px;
        }

        body {
          overflow-x: hidden;
          background: #020617;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        ::selection {
          background: rgba(99, 102, 241, 0.3);
          color: white;
        }

        @media (max-width: 767px) {
          html {
            scroll-padding-top: 85px;
          }
        }
      `}</style>
    </>
  );
}