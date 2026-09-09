import React, { useState, useEffect } from "react";
import {
  FaExternalLinkAlt,
  FaDatabase,
  FaShoppingCart,
  FaBitcoin,
  FaArrowRight,
  FaGithub,
  FaLayerGroup,
  FaCheckCircle,
  FaTimes,
  FaCode,
  FaServer,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";

const PROJECTS = [
  {
    id: 1,
    number: "01",
    title: "Enterprise Sales CRM System",
    category: "FULL STACK & CLOUD",
    desc: "Advanced real-time CRM with predictive analytics, interactive multi-view dashboards, and automated sales tracking workflows.",
    fullDesc:
      "Engineered an enterprise-grade, high-performance real-time Sales CRM system designed to handle heavy concurrent workloads. It features dynamic customer lifecycle management, automated email sequencing, predictive revenue forecasting pipelines, role-based access control, and comprehensive performance monitoring dashboards built for high-growth sales teams.",
    tech: ["React.js", "Node.js", "Express", "MongoDB Atlas", "Tailwind CSS", "JWT Auth", "Redis"],
    icon: FaDatabase,
    iconColor: "text-emerald-600 dark:text-emerald-400",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    metrics: "45% faster pipeline processing & 99.8% uptime",
    architecture: "MERN Stack powered by RESTful microservices, JWT stateless authentication, and Redis caching layers for optimized database performance.",
    challenges: "Resolving high-frequency read/write bottlenecks during massive concurrent analytics queries and ensuring real-time multi-client synchronization.",
    features: [
      "Dynamic interactive analytics workspace with custom CSV/PDF report generation",
      "Automated lead scoring, customer lifecycle tracking, and milestone triggers",
      "Robust REST API architecture with comprehensive error boundary handling",
      "Advanced MongoDB aggregation pipelines for real-time data transformation",
      "Multi-tier role-based access control (Admin, Manager, Sales Rep)",
    ],
    link: "https://example.com/crm-demo",
    github: "https://github.com/example/sales-crm",
  },
  {
    id: 2,
    number: "02",
    title: "Global E-commerce OmniPlatform",
    category: "WEB APP & FINTECH",
    desc: "Feature-rich e-commerce ecosystem featuring intelligent cart sync, advanced product filtering, and secure multi-gateway checkout.",
    fullDesc:
      "Architected a scalable, lightning-fast global e-commerce web application equipped with seamless inventory tracking, wishlist management, multi-currency support, order history tracking, and enterprise-grade secure payment gateway workflows tailored for high-volume retail operations.",
    tech: ["React.js", "Redux Toolkit", "Node.js", "Stripe SDK", "Express", "PostgreSQL", "Tailwind CSS"],
    icon: FaShoppingCart,
    iconColor: "text-teal-600 dark:text-teal-400",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    metrics: "99.9% secure transaction success rate with 1.2s avg page load",
    architecture: "Decoupled client-side global state management via Redux Toolkit paired with a secure PostgreSQL relational backend database.",
    challenges: "Mitigating complex cart race conditions during flash sales and maintaining instant inventory synchronization across distributed nodes.",
    features: [
      "Instant fuzzy product search with multi-parameter faceted filtering",
      "Persistent shopping cart architecture with real-time state synchronization",
      "Secure encrypted user authentication with password hashing and session tokens",
      "Integrated Stripe checkout gateway workflow with webhook error handling",
      "Comprehensive user dashboard for order tracking and invoice downloads",
    ],
    link: "https://example.com/ecommerce-demo",
    github: "https://github.com/example/ecommerce-platform",
  },
  {
    id: 3,
    number: "03",
    title: "Real-Time Crypto Asset Tracker",
    category: "FINTECH & DATA STREAMING",
    desc: "Live cryptocurrency market intelligence platform with custom watchlists, technical indicators, and interactive financial charts.",
    fullDesc:
      "Developed an advanced financial technology web application that consumes high-frequency live market feeds. It delivers real-time price trend movements, deep market capitalization metrics, historical financial data visualization, and instant portfolio asset tracking for digital currency enthusiasts.",
    tech: ["React.js", "Node.js", "Chart.js", "CoinGecko API", "WebSockets", "Tailwind CSS"],
    icon: FaBitcoin,
    iconColor: "text-cyan-600 dark:text-cyan-400",
    gradient: "from-teal-400 via-cyan-500 to-emerald-600",
    metrics: "Sub-200ms live data latency with 10k+ active asset nodes",
    architecture: "Lightweight Single Page Application (SPA) frontend optimized with Chart.js canvas rendering and efficient websocket/polling pipelines.",
    challenges: "Managing strict third-party API rate limits while ensuring uninterrupted real-time UI data streaming without memory leaks.",
    features: [
      "Live global cryptocurrency pricing ticker and market trend indicators",
      "Interactive historical performance charting with custom timeline intervals",
      "Third-party financial data aggregation with automatic fallback handling",
      "Customizable user watchlists with real-time price threshold alerts",
      "Fully responsive dual-theme optimized interface with fluid mobile support",
    ],
    link: "https://example.com/crypto-demo",
    github: "https://github.com/example/crypto-tracker",
  },
];

const ProjectCard = ({ project, onSelect }) => {
  const Icon = project.icon;

  return (
    <article className="group relative h-full">
      <div
        className={`absolute -inset-[1px] rounded-[22px] bg-gradient-to-r ${project.gradient} opacity-0 blur-md transition-all duration-500 group-hover:opacity-30`}
      />
      <div
        onClick={() => onSelect(project)}
        onKeyDown={(e) => e.key === "Enter" && onSelect(project)}
        role="button"
        tabIndex={0}
        className="relative flex h-full flex-col justify-between cursor-pointer overflow-hidden rounded-[22px] border border-emerald-200/80 bg-white/90 p-5 shadow-[0_10px_35px_rgba(16,185,129,.07)] backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-emerald-400 group-hover:shadow-[0_20px_50px_rgba(16,185,129,.18)] dark:border-emerald-500/20 dark:bg-[#0a261d]/95 dark:shadow-[0_10px_35px_rgba(0,0,0,.25)] dark:group-hover:border-emerald-500/50 dark:group-hover:shadow-[0_20px_50px_rgba(16,185,129,.25)]"
      >
        <div className={`absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r ${project.gradient}`} />

        <div>
          <div className="flex items-center justify-between">
            <div className="relative">
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-15 blur-lg dark:opacity-25`} />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 transition-all duration-300 group-hover:scale-110 dark:border-emerald-500/30 dark:bg-emerald-500/10">
                <Icon className={`text-xl ${project.iconColor}`} />
              </div>
            </div>
            <span className="text-4xl font-black text-slate-200 transition-colors duration-300 dark:text-emerald-500/10">
              {project.number}
            </span>
          </div>

          <div className="mt-4">
            <span className="inline-block rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[9px] font-extrabold tracking-[0.15em] text-emerald-700 transition-colors duration-300 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
              {project.category}
            </span>
          </div>

          <h3 className="mt-3 text-lg font-extrabold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
            {project.title}
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-slate-600 transition-colors duration-300 dark:text-slate-300">
            {project.desc}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-emerald-200 bg-emerald-50/80 px-2.5 py-1 text-[9px] font-semibold text-emerald-700 transition-all duration-300 group-hover:border-emerald-400 group-hover:text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300 dark:group-hover:text-emerald-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="my-4 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent dark:via-emerald-500/20" />

          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400 transition-colors group-hover:text-emerald-600 dark:text-slate-500 dark:group-hover:text-emerald-400">
              View Detailed Specs
            </span>
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:translate-x-1.5 group-hover:border-emerald-400 group-hover:bg-emerald-100 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-hover:border-emerald-500/50 dark:group-hover:bg-emerald-500/20">
              <FaArrowRight className="text-[10px]" />
            </div>
          </div>
        </div>

        <div className={`h-[2px] w-0 bg-gradient-to-r ${project.gradient} transition-all duration-500 group-hover:w-full`} />
      </div>
    </article>
  );
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    
    // Lock background scroll when modal opens
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Handle Escape key press
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
  }, [project, onClose]);

  if (!project) return null;
  const ModalIcon = project.icon;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Background Overlay */}
      <div 
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-4xl my-6 max-h-[92vh] flex flex-col rounded-3xl border border-emerald-500/40 bg-white shadow-2xl shadow-emerald-950/60 dark:bg-[#081e17] dark:shadow-[0_0_80px_rgba(0,0,0,0.95)] overflow-hidden">
        
        {/* Top Gradient Line */}
        <div className={`absolute left-0 right-0 top-0 h-[6px] bg-gradient-to-r ${project.gradient} z-30`} />

        {/* Modal Header with Clear Close Button */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-white/95 px-6 py-4.5 dark:border-emerald-500/20 dark:bg-[#081e17]/95">
          <div className="flex items-center gap-4 pr-4 min-w-0">
            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} shadow-md text-white`}>
              <ModalIcon className="text-2xl" />
            </div>
            <div className="min-w-0">
              <span className="inline-block rounded-md bg-emerald-100 dark:bg-emerald-500/10 px-2.5 py-0.5 text-[9px] font-extrabold tracking-widest text-emerald-700 dark:text-emerald-400 mb-1">
                {project.category}
              </span>
              <h2 className="truncate text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Close Button */}
          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-700 transition-all hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-emerald-500/30 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-red-500 dark:hover:border-red-500 dark:hover:text-white shadow-sm cursor-pointer"
          >
            <FaTimes className="text-base transition-transform group-hover:rotate-90 duration-300" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Detailed Overview */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">Project Overview</h4>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {project.fullDesc}
            </p>
          </div>

          {/* Key Metrics & Impact */}
          <div className="flex items-center gap-4 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-teal-500/20 to-cyan-500/10 p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-md">
              <FaShieldAlt className="text-xl" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">Performance & Impact Metrics</p>
              <p className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">{project.metrics}</p>
            </div>
          </div>

          {/* Architecture & Engineering Focus (2 Columns) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-slate-50 dark:bg-slate-900/50 p-5">
              <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400">
                <FaServer className="text-sm" />
                <span className="text-[11px] font-bold uppercase tracking-wider">System Architecture</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.architecture}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-slate-50 dark:bg-slate-900/50 p-5">
              <div className="flex items-center gap-2 mb-2 text-teal-600 dark:text-teal-400">
                <FaLightbulb className="text-sm" />
                <span className="text-[11px] font-bold uppercase tracking-wider">Engineering Challenge</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.challenges}</p>
            </div>
          </div>

          {/* Key Features Checklists */}
          <div>
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Core Features & Capabilities
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 dark:border-emerald-500/20 bg-slate-50/70 dark:bg-slate-900/40 p-3.5"
                >
                  <FaCheckCircle className="shrink-0 text-sm text-emerald-600 dark:text-emerald-400 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Technologies & Frameworks Used
            </p>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((tech) => (
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

          {/* Action Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-13 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02]"
            >
              <FaExternalLinkAlt className="text-xs" />
              Live Preview / Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-13 items-center justify-center gap-2 rounded-2xl border border-slate-300 dark:border-emerald-500/30 bg-slate-100 dark:bg-slate-900 text-sm font-bold text-slate-700 dark:text-slate-200 transition-all hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              <FaGithub className="text-base" />
              View Source Code
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

const ProjectShow = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-emerald-50/50 px-4 py-16 text-slate-900 transition-colors duration-500 sm:px-6 md:py-20 lg:px-8 dark:bg-[#061a14] dark:text-white"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-250px] h-[450px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="absolute left-[-220px] top-[40%] h-[280px] w-[280px] rounded-full bg-teal-500/10 blur-[100px]" />
        <div className="absolute bottom-[-150px] right-[-180px] h-[330px] w-[330px] rounded-full bg-cyan-500/10 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(16,185,129,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.18em] text-emerald-700 shadow-sm backdrop-blur-xl transition-colors duration-500 dark:border-emerald-500/30 dark:bg-slate-900/80 dark:text-emerald-300">
            <FaLayerGroup className="text-emerald-500" />
            FEATURED PROJECTS & CASE STUDIES
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Explore My{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Work
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed text-slate-600 transition-colors duration-500 sm:text-sm dark:text-slate-400">
            A curated portfolio of high-impact full-stack web applications, built with modern architecture, optimized performance, and scalable infrastructure.
          </p>

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-emerald-500/60" />
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,.8)]" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-teal-500/60" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-slate-500 dark:text-slate-400">
          More production apps coming soon • Continuously shipping & learning
        </p>

        <div className="mx-auto mt-8 h-px max-w-4xl bg-gradient-to-r from-transparent via-emerald-200 to-transparent dark:via-emerald-500/20" />
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default ProjectShow;