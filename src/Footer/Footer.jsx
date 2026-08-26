import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
  FaHeart,
  FaCode,
  FaPaperPlane,
} from "react-icons/fa";
import Chart from "../ChartProcess/Chart";

const Footer = () => {
  const phoneNumber = "9654496209";
  const email = "amitgupta99393@gmail.com";

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "#",
      className:
        "hover:border-white/30 hover:bg-white/10 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: "#",
      className:
        "hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      href: "#",
      className:
        "hover:border-sky-400/30 hover:bg-sky-500/10 hover:text-sky-400",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#020617] text-white">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Indigo Glow */}

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -20, 0],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-180px] top-[-180px] h-[400px] w-[400px] rounded-full bg-indigo-600/[0.10] blur-[130px]"
        />

        {/* Cyan Glow */}

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-160px] top-[20%] h-[360px] w-[360px] rounded-full bg-cyan-500/[0.08] blur-[130px]"
        />

        {/* Purple Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-200px] left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/[0.08] blur-[140px]"
        />

        {/* Floating Dots */}

        <motion.span
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute left-[12%] top-[25%] h-1 w-1 rounded-full bg-indigo-400"
        />

        <motion.span
          animate={{
            y: [0, 25, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute right-[20%] top-[35%] h-1.5 w-1.5 rounded-full bg-cyan-400"
        />

        <motion.span
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute bottom-[25%] left-[35%] h-1 w-1 rounded-full bg-purple-400"
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-7 pt-14 sm:px-6 sm:pt-16 lg:px-8">

        {/* =================================================
            CTA
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mb-12 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-7"
        >

          {/* CTA Glow */}

          <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>

              <div className="mb-2 flex items-center gap-2">

                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Available for work
                </span>

              </div>

              <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
                Have an idea?
                <span className="ml-2 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Let's build it.
                </span>
              </h3>

              <p className="mt-2 max-w-xl text-xs leading-5 text-slate-500 sm:text-sm">
                Let's transform your idea into a fast, modern and scalable
                digital experience.
              </p>

            </div>

            <motion.button
              whileHover={{
                y: -3,
                boxShadow: "0 15px 35px rgba(99,102,241,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="group flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-black transition-all duration-300 hover:bg-indigo-50 sm:w-auto"
            >
              Start a Project

              <FaPaperPlane className="text-[10px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </motion.button>

          </div>
        </motion.div>

        {/* =================================================
            FOOTER CONTENT
        ================================================== */}

        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr]">

          {/* =================================================
              BRAND
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2"
            >
              <span className="text-3xl font-black tracking-[-0.08em]">
                AMIT
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                  .
                </span>
              </span>

              <span className="rounded-md border border-indigo-400/10 bg-indigo-500/[0.06] px-2 py-1 text-[8px] font-bold uppercase tracking-[0.15em] text-indigo-300">
                Developer
              </span>
            </button>

            <p className="mt-4 max-w-sm text-xs leading-6 text-slate-500 sm:text-sm">
              Full Stack Developer crafting modern web applications with
              clean UI, powerful backend systems and scalable architecture.
            </p>

            {/* Tech Badge */}

            <div className="mt-4 flex flex-wrap gap-2">

              {["React", "Node.js", "MongoDB"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/[0.06] bg-white/[0.025] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-wider text-slate-500"
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* Social */}

            <div className="mt-5 flex gap-2">

              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-xs text-slate-500 transition-all duration-300 ${social.className}`}
                >
                  {social.icon}
                </motion.a>
              ))}

            </div>
          </motion.div>

          {/* =================================================
              NAVIGATION
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >

            <h4 className="mb-5 text-[9px] font-bold uppercase tracking-[0.22em] text-indigo-400">
              Navigation
            </h4>

            <div className="grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-1">

              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="group flex items-center gap-2 text-left text-xs text-slate-500 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {link.name}
                </button>
              ))}

            </div>
          </motion.div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >

            <h4 className="mb-5 text-[9px] font-bold uppercase tracking-[0.22em] text-indigo-400">
              Get In Touch
            </h4>

            <div className="space-y-3">

              {/* EMAIL */}

              <motion.a
                whileHover={{ x: 3 }}
                href={`mailto:${email}`}
                className="group flex items-center gap-3"
              >

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-xs text-indigo-400 transition-all duration-300 group-hover:border-indigo-400/30 group-hover:bg-indigo-500/10">
                  <FaEnvelope />
                </span>

                <div className="min-w-0">

                  <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                    Email
                  </p>

                  <p className="mt-0.5 truncate text-xs text-slate-400 transition-colors group-hover:text-white">
                    {email}
                  </p>

                </div>

              </motion.a>

              {/* PHONE */}

              <motion.a
                whileHover={{ x: 3 }}
                href={`tel:+91${phoneNumber}`}
                className="group flex items-center gap-3"
              >

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-xs text-indigo-400 transition-all duration-300 group-hover:border-indigo-400/30 group-hover:bg-indigo-500/10">
                  <FaPhoneAlt />
                </span>

                <div>

                  <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                    Phone
                  </p>

                  <p className="mt-0.5 text-xs text-slate-400 transition-colors group-hover:text-white">
                    +91 {phoneNumber}
                  </p>

                </div>

              </motion.a>

              {/* LOCATION */}

              <motion.div
                whileHover={{ x: 3 }}
                className="group flex items-center gap-3"
              >

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-xs text-indigo-400">
                  <FaMapMarkerAlt />
                </span>

                <div>

                  <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                    Location
                  </p>

                  <p className="mt-0.5 text-xs text-slate-400">
                    Kishanganj, Bihar, India
                  </p>

                </div>

              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* =================================================
            DIVIDER
        ================================================== */}

        <div className="my-9 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        {/* =================================================
            BOTTOM BAR
        ================================================== */}

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

          <p className="text-center text-[8px] uppercase tracking-[0.16em] text-slate-600 sm:text-left">
            © 2026 Amit. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.15em] text-slate-600">

            <span>Built with</span>

            <FaHeart className="text-[8px] text-red-500" />

            <span>React</span>

            <span className="text-slate-700">•</span>

            <span>Framer Motion</span>

          </div>

          {/* BACK TO TOP */}

          <motion.button
            whileHover={{
              y: -4,
              boxShadow: "0 8px 25px rgba(99,102,241,0.2)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-xs text-slate-500 transition-all duration-300 hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-white"
          >
            <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </motion.button>

        </div>

      </div>

      {/* =====================================================
          CHAT COMPONENT
      ====================================================== */}

      <Chart />
    </footer>
  );
};

export default Footer;