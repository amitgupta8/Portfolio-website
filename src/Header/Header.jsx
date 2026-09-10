import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaArrowRight, 
  FaStar, 
  FaTerminal, 
  FaCheckCircle, 
  FaLaptopCode, 
  FaCode, 
  FaReact, 
  FaNodeJs, 
  FaBrain 
} from "react-icons/fa";

import Image from "../assets/man.jpeg";

const Header = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Full Stack Developer",
    "React & Node.js Specialist",
    "UI/UX Implementation Expert",
    "Scalable Web Architect",
    "MERN Stack Developer",
  ];

  const scrollToSection = (link) => {
    const element = document.querySelector(link);
    if (element) {
      const offset = 92;
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-emerald-50/50
        text-slate-900
        transition-colors
        duration-500
        dark:bg-[#061a14]
        dark:text-slate-100
      "
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 h-[400px] w-[400px] sm:h-[750px] sm:w-[750px] rounded-full bg-emerald-500/15 blur-[120px] sm:blur-[160px] dark:bg-emerald-500/10" />
        <div className="absolute -right-1/3 top-1/3 h-[350px] w-[350px] sm:h-[650px] sm:w-[650px] rounded-full bg-teal-600/15 blur-[130px] sm:blur-[170px] dark:bg-teal-600/10" />

        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(#10b981 1.5px, transparent 1.5px), radial-gradient(#10b981 1.5px, transparent 1.5px)`,
            backgroundPosition: `0 0, 40px 40px`,
            backgroundSize: `80px 80px`,
          }}
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-7xl
          flex-col
          items-center
          justify-center
          px-4
          py-24
          sm:px-6
          sm:py-28
          lg:px-10
          lg:py-32
        "
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid w-full items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12 my-auto"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left relative flex flex-col items-center lg:items-start">
            
           

            <motion.div variants={itemVariants} className="mb-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:justify-start">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-emerald-300/80
                  bg-white/80
                  px-3.5
                  py-1.5
                  sm:px-4
                  sm:py-2
                  text-[10px]
                  sm:text-[11px]
                  font-extrabold
                  tracking-wider
                  text-emerald-900
                  shadow-lg
                  shadow-emerald-500/10
                  backdrop-blur-md
                  dark:border-emerald-500/30
                  dark:bg-slate-900/60
                  dark:text-emerald-300
                "
              >
                <FaStar className="text-emerald-400 animate-spin" style={{ animationDuration: "6s" }} />
                FULL STACK & MERN INNOVATOR
              </div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-emerald-500/30
                  bg-emerald-500/10
                  px-3
                  py-1.5
                  sm:px-3.5
                  sm:py-2
                  text-[10px]
                  sm:text-[11px]
                  font-bold
                  text-emerald-600
                  dark:text-emerald-400
                  backdrop-blur-md
                "
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                Available for Hire
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="
                text-3xl
                xs:text-4xl
                font-black
                leading-[1.1]
                tracking-[-0.04em]
                text-slate-950
                sm:text-6xl
                lg:text-7xl
                dark:text-white
              "
            >
              HI, I'M{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent drop-shadow-sm">
                AMIT GUPTA
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-4 sm:mt-6 min-h-[40px] sm:min-h-[48px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="flex items-center justify-center gap-2.5 sm:gap-3 text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-700 lg:justify-start dark:text-slate-200"
                >
                  <span className="h-6 sm:h-7 w-1.5 rounded-full bg-gradient-to-b from-emerald-400 to-teal-600 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  {roles[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-slate-600 dark:text-slate-400"
            >
              Building scalable web applications, robust REST APIs, and optimized user interfaces using <span className="font-bold text-slate-900 dark:text-white">React.js, Node.js, and modern JavaScript toolchains</span>.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start text-xs font-bold text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1.5"><FaCheckCircle className="text-emerald-500" /> React & Redux</span>
              <span className="flex items-center gap-1.5"><FaCheckCircle className="text-emerald-500" /> Express & MongoDB</span>
              <span className="flex items-center gap-1.5"><FaCheckCircle className="text-emerald-500" /> Clean Architecture</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-7 sm:mt-8 flex w-full flex-col items-center justify-center gap-3.5 sm:flex-row sm:w-auto lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("#projects")}
                className="
                  group
                  inline-flex
                  w-full
                  sm:w-auto
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-emerald-500
                  via-teal-500
                  to-cyan-600
                  px-7
                  py-3.5
                  sm:px-8
                  sm:py-4
                  text-sm
                  font-black
                  text-white
                  shadow-[0_10px_25px_rgba(52,211,153,0.35)]
                  transition-all
                  duration-300
                  hover:shadow-[0_15px_30px_rgba(52,211,153,0.5)]
                "
              >
                Explore Portfolio
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="
                  inline-flex
                  w-full
                  sm:w-auto
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  border-2
                  border-emerald-300/80
                  bg-white/80
                  px-7
                  py-3.5
                  sm:px-8
                  sm:py-4
                  text-sm
                  font-black
                  text-slate-800
                  shadow-lg
                  shadow-emerald-500/5
                  backdrop-blur-md
                  transition-all
                  hover:border-emerald-400
                  hover:bg-emerald-50
                  dark:border-emerald-500/30
                  dark:bg-slate-900/60
                  dark:text-white
                  dark:hover:bg-slate-800/80
                "
              >
                Let's Talk
              </motion.a>
            </motion.div>
          </div>

          {/* Right Profile Card Custom-Styled for Standing Developer Holding Laptop Pose */}
          <motion.div
            variants={itemVariants}
            className="relative mx-auto flex h-[380px] xs:h-[420px] sm:h-[460px] w-full max-w-sm sm:max-w-md items-center justify-center lg:h-[500px] lg:max-w-none"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 rounded-[30px] sm:rounded-[40px] bg-gradient-to-tr from-emerald-500/30 via-teal-500/20 to-cyan-500/20 blur-3xl -z-10 animate-pulse" />

            {/* Premium Dynamic Container Frame */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-[330px] w-[290px] xs:h-[380px] xs:w-[330px] sm:h-[430px] sm:w-[380px] rounded-[36px] p-3 border-2 border-emerald-400/40 bg-gradient-to-b from-white/80 to-emerald-50/50 shadow-[0_20px_50px_rgba(16,185,129,0.2)] backdrop-blur-xl dark:from-slate-900/90 dark:to-[#09261d]/90 dark:border-emerald-500/30 flex flex-col items-center justify-center overflow-hidden group"
            >
              {/* Subtle Tech Grid Pattern Overlay */}
              <div 
                className="absolute inset-0 opacity-[0.07] pointer-events-none rounded-[36px]"
                style={{
                  backgroundImage: `radial-gradient(#10b981 1px, transparent 1px)`,
                  backgroundSize: `16px 16px`
                }}
              />

              {/* Glowing Inner Border Effect */}
              <div className="absolute inset-0 rounded-[36px] border border-emerald-400/20 pointer-events-none" />

              {/* Image Frame Wrapper with Depth */}
              <div className="relative h-full w-full rounded-[28px] overflow-hidden flex items-center justify-center bg-gradient-to-b from-emerald-500/10 to-transparent">
                <img
                  src={Image}
                  alt="Amit Gupta - Standing with Laptop"
                  className="
                    relative
                    z-20
                    h-full
                    w-full
                    object-cover
                    object-top
                    scale-100
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    filter contrast-[1.05]
                  "
                />

                {/* Bottom Lighting Gradient for integration */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-emerald-950/70 via-emerald-950/20 to-transparent z-25 pointer-events-none" />
                
                {/* Live Status Badge on Image */}
                <div className="absolute bottom-4 left-4 z-30 flex items-center gap-2 rounded-xl bg-slate-900/80 px-3 py-1.5 border border-emerald-500/40 backdrop-blur-md shadow-lg">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[11px] font-bold text-emerald-300 tracking-wide">Coding Live</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Tech Stack Badges */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 pointer-events-none z-30"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-cyan-400/50 bg-white/95 px-3.5 py-1.5 text-[11px] font-bold text-cyan-700 shadow-xl backdrop-blur-md dark:bg-slate-900 dark:text-cyan-300">
                <FaReact className="text-cyan-500 animate-spin" style={{ animationDuration: "8s" }} /> React.js
              </div>

              <div className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 flex items-center gap-1.5 rounded-full border border-emerald-400/50 bg-white/95 px-3.5 py-1.5 text-[11px] font-bold text-emerald-700 shadow-xl backdrop-blur-md dark:bg-slate-900 dark:text-emerald-300">
                <FaNodeJs className="text-emerald-500" /> Node.js
              </div>

              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-teal-400/50 bg-white/95 px-3.5 py-1.5 text-[11px] font-bold text-teal-700 shadow-xl backdrop-blur-md dark:bg-slate-900 dark:text-teal-300">
                <FaBrain className="text-teal-500" /> MERN Stack
              </div>
            </motion.div>

            {/* Floating Detail Pill 1 */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-3 sm:-left-6 top-12 z-40 flex items-center gap-2 rounded-2xl border border-emerald-400/40 bg-white/90 px-3.5 py-2.5 text-xs font-bold text-slate-800 shadow-2xl backdrop-blur-md dark:bg-slate-900/90 dark:text-white"
            >
              <div className="p-1.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                <FaLaptopCode />
              </div>
              <span>Clean Code</span>
            </motion.div>

            {/* Floating Detail Pill 2 */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 sm:-right-6 bottom-16 z-40 flex items-center gap-2 rounded-2xl border border-emerald-400/40 bg-gradient-to-r from-emerald-500 to-teal-600 px-3.5 py-2.5 text-xs font-bold text-white shadow-2xl backdrop-blur-md"
            >
              <div className="p-1.5 rounded-xl bg-white/20 text-white">
                <FaTerminal />
              </div>
              <span>3+ Yrs Exp</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 grid w-full max-w-5xl grid-cols-2 gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl border border-emerald-300/60 bg-white/60 p-4 sm:p-6 shadow-xl backdrop-blur-xl sm:grid-cols-4 dark:border-emerald-500/20 dark:bg-slate-900/60"
        >
          <div className="text-center p-2">
            <h4 className="text-xl xs:text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">10M+</h4>
            <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">Users Scaled</p>
          </div>
          <div className="text-center p-2">
            <h4 className="text-xl xs:text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">50K+</h4>
            <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">Daily API Requests</p>
          </div>
          <div className="text-center p-2">
            <h4 className="text-xl xs:text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">3+</h4>
            <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">Years Experience</p>
          </div>
          <div className="text-center p-2">
            <h4 className="text-xl xs:text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">98%</h4>
            <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">Lighthouse Score</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;