import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
  FaHeart,
  FaPaperPlane,
  FaCheckCircle,
  FaCode,
  FaServer,
  FaMobileAlt,
  FaBolt,
  FaRegClock,
  FaRegCopy,
  FaTerminal,
  FaShieldAlt,
  FaCircle,
} from "react-icons/fa";
import Chart from "../ChartProcess/Chart";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [copiedField, setCopiedField] = useState("");
  const [showTerminalModal, setShowTerminalModal] = useState(false);
  
  const phoneNumber = "9654496209";
  const email = "amitgupta99393@gmail.com";

  // Live Time in India (IST)
  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: "Asia/Kolkata", hour: '2-digit', minute: '2-digit', hour12: true };
      const timeStr = new Date().toLocaleTimeString('en-US', options);
      setCurrentTime(timeStr);
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setEmailInput("");
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 2500);
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const features = [
    { title: "Full-Stack Web Apps", icon: <FaCode /> },
    { title: "Clean & Scalable Code", icon: <FaCheckCircle /> },
    { title: "UI/UX Implementation", icon: <FaBolt /> },
    { title: "Responsive Design", icon: <FaMobileAlt /> },
    { title: "Performance Optimization", icon: <FaServer /> },
    { title: "API Integration", icon: <FaCode /> },
    { title: "Cloud Deployment", icon: <FaServer /> },
    { title: "State Management", icon: <FaBolt /> },
  ];

  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com",
      className: "hover:border-emerald-400/40 hover:bg-white hover:text-slate-900 dark:hover:border-emerald-500/30 dark:hover:bg-emerald-500/10 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: "https://linkedin.com",
      className: "hover:border-emerald-400/30 hover:bg-white hover:text-emerald-600 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      href: "https://twitter.com",
      className: "hover:border-teal-400/30 hover:bg-white hover:text-teal-600 dark:hover:bg-teal-500/10 dark:hover:text-teal-400",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-emerald-50/50 px-4 pt-10 pb-8 text-slate-900 transition-colors duration-500 sm:px-6 sm:pt-14 lg:px-12 dark:bg-[#061a14] dark:text-white">
      {/* Background Subtle Grid & Neon Glow Accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-280px] h-[500px] w-[750px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[150px]" />
        <div className="absolute left-[-200px] top-[30%] h-[350px] w-[350px] rounded-full bg-teal-500/10 blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-200px] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(16,185,129,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.8) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex flex-col gap-6 w-full max-w-7xl">
        
        {/* Chart Component */}
        <div className="w-full -mt-2 sm:-mt-4">
          <Chart />
        </div>

        {/* Full Width Wrapper Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full overflow-hidden rounded-[2.2rem] border border-emerald-200/80 bg-white/85 p-6 shadow-[0_20px_60px_rgba(16,185,129,.1)] backdrop-blur-2xl transition-colors duration-500 sm:p-8 lg:p-12 dark:border-emerald-500/20 dark:bg-[#0a261d]/90 dark:shadow-[0_20px_60px_rgba(0,0,0,.4)]"
        >
          {/* Top Edge Neon Border Highlight */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 opacity-90 shadow-[0_0_15px_rgba(16,185,129,0.7)]" />

          {/* ULTRA-COMPACT & SLEEK CTA BANNER WITH QUICK INPUT */}
          <div className="relative mb-10 overflow-hidden rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white/50 to-teal-50/40 p-5 shadow-inner sm:p-6 lg:p-7 dark:border-emerald-500/20 dark:from-emerald-500/[0.04] dark:via-[#0c3327] dark:to-teal-500/[0.02]">
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              
              <div className="space-y-2">
                <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-100/50 px-3 py-1 dark:border-emerald-500/30 dark:bg-emerald-500/10">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                    Open for Projects
                  </span>
                  <span className="text-slate-300 dark:text-slate-600">|</span>
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                    <FaRegClock className="text-emerald-500 text-[9px]" /> {currentTime} IST
                  </span>
                </div>

                <h3 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                  Have an idea?{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                    Let's build it.
                  </span>
                </h3>

                <p className="max-w-md text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-300">
                  Drop your email below to connect instantly or start a project discussion.
                </p>
              </div>

              {/* Quick Message / Newsletter Form */}
              <div className="w-full lg:w-auto">
                {isSubscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs font-bold text-emerald-600 dark:text-emerald-400"
                  >
                    <FaCheckCircle className="text-sm" /> Thanks! I'll get back to you shortly.
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 w-full lg:w-[360px]">
                    <div className="relative flex-1">
                      <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400" />
                      <input
                        type="email"
                        required
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="Enter your email..."
                        className="w-full rounded-xl border border-emerald-200/80 bg-white/90 py-3 pl-10 pr-4 text-xs text-slate-800 placeholder-slate-400 shadow-sm focus:border-emerald-400 focus:outline-none dark:border-emerald-500/20 dark:bg-[#061a14]/80 dark:text-white dark:placeholder-slate-500"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      type="submit"
                      className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_15px_rgba(16,185,129,0.25)] transition-all hover:brightness-110 shrink-0"
                    >
                      <span>Send</span>
                      <FaPaperPlane className="text-[10px] transition-transform duration-300 group-hover:translate-x-0.5" />
                    </motion.button>
                  </form>
                )}
              </div>

            </div>
          </div>

          {/* Modern Capabilities Showcase Section */}
          <div className="mb-10">
            <h4 className="mb-4 text-[10px] font-black uppercase tracking-[0.25em] text-slate-700 dark:text-slate-300">
              Core Capabilities & Expertise
            </h4>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02, y: -1 }}
                  className="flex items-center gap-2.5 rounded-xl border border-emerald-200/60 bg-white/60 p-3 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-50/50 hover:text-emerald-700 dark:border-emerald-500/15 dark:bg-[#061a14]/60 dark:text-slate-300 dark:hover:border-emerald-400/40 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-300"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-100/70 text-[11px] text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
                    {item.icon}
                  </span>
                  <span className="truncate">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Expanded 3-Column Grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start">
            
            {/* BRAND */}
            <div className="space-y-4">
              <button onClick={scrollToTop} className="group flex items-center gap-1.5 text-left">
                <span className="text-3xl font-black tracking-[-0.08em] text-slate-900 dark:text-white">
                  AMIT
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">.</span>
                </span>
              </button>
              <p className="text-xs font-normal text-slate-600 leading-relaxed dark:text-slate-400">
                A passionate Full-Stack Developer focused on building robust, scalable, and user-centric digital products.
              </p>

              {/* Social Icons & Interactive Terminal Trigger */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {socials.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.94 }}
                    aria-label={item.name}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/80 text-xs text-slate-700 shadow-sm transition-all duration-300 dark:border-emerald-500/20 dark:bg-[#061a14] dark:text-slate-300 ${item.className}`}
                  >
                    {item.icon}
                  </motion.a>
                ))}
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowTerminalModal(true)}
                  className="flex items-center gap-1.5 rounded-xl border border-emerald-300/80 bg-emerald-100/60 px-3.5 py-2.5 text-[10px] font-mono font-bold text-emerald-800 shadow-sm transition-colors hover:bg-emerald-200/80 dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-300 dark:hover:bg-emerald-500/25"
                >
                  <FaTerminal className="text-xs text-emerald-600 dark:text-emerald-400" />
                  <span>CLI V3</span>
                </motion.button>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-700 dark:text-slate-300">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="group flex items-center gap-2 text-xs font-medium text-slate-600 transition-colors duration-200 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300 transition-all duration-300 group-hover:w-3 group-hover:bg-emerald-500 dark:bg-slate-700 dark:group-hover:bg-emerald-400" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* GET IN TOUCH WITH COPY FEATURE */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-700 dark:text-slate-300">
                Get in Touch
              </h4>
              <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
                <li>
                  <div className="group flex items-center justify-between rounded-xl border border-transparent p-1.5 transition-colors hover:border-emerald-500/20 hover:bg-emerald-50/30 dark:hover:bg-emerald-500/5">
                    <a href={`mailto:${email}`} className="flex items-center gap-2.5 truncate hover:text-emerald-500 dark:hover:text-emerald-400">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-200/80 bg-slate-50 text-[10px] text-emerald-600 dark:border-emerald-500/20 dark:bg-[#061a14] dark:text-emerald-400">
                        <FaEnvelope />
                      </span>
                      <span className="truncate font-medium">{email}</span>
                    </a>
                    <button
                      onClick={() => copyToClipboard(email, "email")}
                      title="Copy email"
                      className="relative p-1.5 text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400"
                    >
                      {copiedField === "email" ? <FaCheckCircle className="text-emerald-500 text-xs" /> : <FaRegCopy className="text-xs" />}
                    </button>
                  </div>
                </li>

                <li>
                  <div className="group flex items-center justify-between rounded-xl border border-transparent p-1.5 transition-colors hover:border-emerald-500/20 hover:bg-emerald-50/30 dark:hover:bg-emerald-500/5">
                    <a href={`tel:${phoneNumber}`} className="flex items-center gap-2.5 truncate hover:text-emerald-500 dark:hover:text-emerald-400">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-200/80 bg-slate-50 text-[10px] text-emerald-600 dark:border-emerald-500/20 dark:bg-[#061a14] dark:text-emerald-400">
                        <FaPhoneAlt />
                      </span>
                      <span className="font-medium">+{phoneNumber}</span>
                    </a>
                    <button
                      onClick={() => copyToClipboard(phoneNumber, "phone")}
                      title="Copy phone"
                      className="relative p-1.5 text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400"
                    >
                      {copiedField === "phone" ? <FaCheckCircle className="text-emerald-500 text-xs" /> : <FaRegCopy className="text-xs" />}
                    </button>
                  </div>
                </li>

                <li>
                  <div className="flex items-center gap-3 p-1.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-200/80 bg-slate-50 text-[10px] text-emerald-600 dark:border-emerald-500/20 dark:bg-[#061a14] dark:text-emerald-400">
                      <FaMapMarkerAlt />
                    </span>
                    <span className="font-medium">India</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* BOTTOM BAR / COPYRIGHT & LIVE STATUS */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-6 sm:flex-row dark:border-emerald-500/15">
            <div className="flex items-center gap-3">
              <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                © {new Date().getFullYear()} Amit Gupta. All rights reserved.
              </p>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
              <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                <FaCircle className="text-[6px] animate-pulse" /> Systems Normal
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
              <span>Crafted with</span>
              <FaHeart className="text-emerald-500 animate-pulse text-[10px]" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Terminal Easter Egg Modal */}
      <AnimatePresence>
        {showTerminalModal && (
          <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-lg overflow-hidden rounded-2xl border border-emerald-500/40 bg-slate-900 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">amit@portfolio-cli: ~</span>
                </div>
                <button
                  onClick={() => setShowTerminalModal(false)}
                  className="font-mono text-xs text-slate-400 hover:text-white"
                >
                  [ESC]
                </button>
              </div>
              <div className="p-5 font-mono text-xs text-emerald-400 space-y-2">
                <p className="text-slate-500">$ whoami</p>
                <p className="text-white">Amit Gupta - Full Stack Developer & Tech Enthusiast</p>
                <p className="text-slate-500 pt-2">$ cat status.txt</p>
                <p className="text-emerald-300">Status: Available for full-time roles and high-impact freelance contracts.</p>
                <p className="text-slate-500 pt-2">$ contact --email</p>
                <p className="text-cyan-300">amitgupta99393@gmail.com</p>
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setShowTerminalModal(false)}
                    className="rounded-lg bg-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 transition-colors hover:bg-emerald-400"
                  >
                    Close Terminal
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Back-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 15 }}
            whileHover={{ y: -3, scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-[99999] flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/60 bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-[0_8px_25px_rgba(16,185,129,0.4)] backdrop-blur-md transition-colors"
          >
            <FaArrowUp className="text-xs" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;