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
  FaHeart,
} from "react-icons/fa";

const PROJECTS = [
  {
    id: 1,
    number: "01",
    title: "Matrimonial Matchmaking Platform",
    category: "FULL STACK & COMMUNITY",
    desc: "Scalable matrimonial platform featuring advanced matchmaking algorithms, secure profile management, and interactive chat.",
    fullDesc:
      "Developed a high-performance matrimonial and social web application designed to connect users seamlessly with advanced search filters, verified profiles, interest tracking, and real-time messaging capabilities.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT Auth"],
    icon: FaHeart,
    iconColor: "text-rose-600 dark:text-rose-400",
    gradient: "from-rose-400 via-pink-500 to-red-600",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    metrics: "35% faster page load times & 50K+ daily active API requests",
    architecture: "MERN stack architecture with optimized MongoDB indexing and stateless JWT authentication workflows.",
    challenges: "Optimizing massive database aggregation queries for complex partner preference matching.",
    features: [
      "Advanced multi-parameter profile filtering and partner matching",
      "Secure interest request and acceptance workflow",
      "Responsive user dashboard with profile customization options",
      "Optimized REST APIs with error boundaries and fast response times",
    ],
    link: "https://example.com/matrimonial-demo",
    github: "https://github.com/example/matrimonial-app",
  },
  {
    id: 2,
    number: "02",
    title: "Enterprise Sales CRM System",
    category: "FULL STACK & CLOUD",
    desc: "Advanced real-time CRM with predictive analytics, interactive multi-view dashboards, and automated sales tracking workflows.",
    fullDesc:
      "Engineered an enterprise-grade, high-performance real-time Sales CRM system designed to handle heavy concurrent workloads with dynamic customer lifecycle management and automated tracking.",
    tech: ["React.js", "Node.js", "Express", "MongoDB Atlas", "Tailwind CSS", "Redis"],
    icon: FaDatabase,
    iconColor: "text-emerald-600 dark:text-emerald-400",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    metrics: "45% faster pipeline processing & 99.8% uptime",
    architecture: "MERN Stack powered by RESTful microservices, JWT authentication, and Redis caching layers.",
    challenges: "Resolving high-frequency read/write bottlenecks during massive concurrent analytics queries.",
    features: [
      "Dynamic interactive analytics workspace with custom report generation",
      "Automated lead scoring, customer lifecycle tracking, and milestone triggers",
      "Robust REST API architecture with comprehensive error handling",
    ],
    link: "https://example.com/crm-demo",
    github: "https://github.com/example/sales-crm",
  },
  {
    id: 3,
    number: "03",
    title: "Global E-commerce OmniPlatform",
    category: "WEB APP & FINTECH",
    desc: "Feature-rich e-commerce ecosystem featuring intelligent cart sync, advanced product filtering, and secure multi-gateway checkout.",
    fullDesc:
      "Architected a scalable, lightning-fast global e-commerce web application equipped with seamless inventory tracking, wishlist management, multi-currency support, and secure payment gateway workflows.",
    tech: ["React.js", "Redux Toolkit", "Node.js", "Stripe SDK", "PostgreSQL", "Tailwind CSS"],
    icon: FaShoppingCart,
    iconColor: "text-teal-600 dark:text-teal-400",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    metrics: "99.9% secure transaction success rate with 1.2s avg page load",
    architecture: "Decoupled client-side global state management via Redux Toolkit paired with a PostgreSQL relational backend.",
    challenges: "Mitigating complex cart race conditions during flash sales and maintaining instant inventory sync.",
    features: [
      "Instant fuzzy product search with multi-parameter faceted filtering",
      "Persistent shopping cart architecture with real-time state synchronization",
      "Integrated Stripe checkout gateway workflow with webhook error handling",
    ],
    link: "https://example.com/ecommerce-demo",
    github: "https://github.com/example/ecommerce-platform",
  },
  {
    id: 4,
    number: "04",
    title: "Real-Time Crypto Asset Tracker",
    category: "FINTECH & DATA STREAMING",
    desc: "Live cryptocurrency market intelligence platform with custom watchlists, technical indicators, and interactive financial charts.",
    fullDesc:
      "Developed an advanced financial technology web application that consumes high-frequency live market feeds, delivering real-time price trend movements and deep market cap metrics.",
    tech: ["React.js", "Node.js", "Chart.js", "CoinGecko API", "WebSockets", "Tailwind CSS"],
    icon: FaBitcoin,
    iconColor: "text-cyan-600 dark:text-cyan-400",
    gradient: "from-teal-400 via-cyan-500 to-emerald-600",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop",
    metrics: "Sub-200ms live data latency with 10k+ active asset nodes",
    architecture: "Lightweight Single Page Application (SPA) frontend optimized with Chart.js canvas rendering.",
    challenges: "Managing strict third-party API rate limits while ensuring uninterrupted real-time UI data streaming.",
    features: [
      "Live global cryptocurrency pricing ticker and market trend indicators",
      "Interactive historical performance charting with custom timeline intervals",
      "Customizable user watchlists with real-time price threshold alerts",
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
        className="relative flex h-full flex-col justify-between cursor-pointer overflow-hidden rounded-[22px] border border-emerald-200/80 bg-white/90 shadow-[0_10px_35px_rgba(16,185,129,.07)] backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-emerald-400 group-hover:shadow-[0_20px_50px_rgba(16,185,129,.18)] dark:border-emerald-500/20 dark:bg-[#0a261d]/95 dark:shadow-[0_10px_35px_rgba(0,0,0,.25)] dark:group-hover:border-emerald-500/50 dark:group-hover:shadow-[0_20px_50px_rgba(16,185,129,.25)]"
      >
        {/* Project Thumbnail Image Preview */}
        <div className="relative h-44 w-full overflow-hidden bg-slate-900">
          <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10`} />
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between">
            <span className="inline-block rounded-md border border-emerald-500/30 bg-slate-900/80 px-2.5 py-1 text-[9px] font-extrabold tracking-[0.15em] text-emerald-300 backdrop-blur-md">
              {project.category}
            </span>
            <span className="text-xl font-black text-white/80">{project.number}</span>
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 dark:border-emerald-500/30 dark:bg-emerald-500/10`}>
                <Icon className={`text-base ${project.iconColor}`} />
              </div>
              <h3 className="text-lg font-extrabold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                {project.title}
              </h3>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-slate-600 transition-colors duration-300 dark:text-slate-300 line-clamp-2">
              {project.desc}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-emerald-200 bg-emerald-50/80 px-2 py-0.5 text-[9px] font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300"
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
              <div className="flex h-7 w-7 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:translate-x-1.5 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400">
                <FaArrowRight className="text-[9px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
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
      <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl my-6 max-h-[92vh] flex flex-col rounded-3xl border border-emerald-500/40 bg-white shadow-2xl shadow-emerald-950/60 dark:bg-[#081e17] dark:shadow-[0_0_80px_rgba(0,0,0,0.95)] overflow-hidden">
        <div className={`absolute left-0 right-0 top-0 h-[6px] bg-gradient-to-r ${project.gradient} z-30`} />

        <div className="flex items-center justify-between border-b border-slate-200 bg-white/95 px-6 py-4.5 dark:border-emerald-500/20 dark:bg-[#081e17]/95">
          <div className="flex items-center gap-4 pr-4 min-w-0">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} shadow-md text-white`}>
              <ModalIcon className="text-xl" />
            </div>
            <div className="min-w-0">
              <span className="inline-block rounded-md bg-emerald-100 dark:bg-emerald-500/10 px-2.5 py-0.5 text-[9px] font-extrabold tracking-widest text-emerald-700 dark:text-emerald-400 mb-1">
                {project.category}
              </span>
              <h2 className="truncate text-lg sm:text-xl font-black tracking-tight text-slate-900 dark:text-white">
                {project.title}
              </h2>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-700 transition-all hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-emerald-500/30 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-red-500 dark:hover:text-white shadow-sm cursor-pointer"
          >
            <FaTimes className="text-sm transition-transform group-hover:rotate-90 duration-300" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Large Image Banner in Modal */}
          <div className="relative h-56 sm:h-72 w-full overflow-hidden rounded-2xl border border-emerald-500/30 shadow-lg">
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Project Visual Preview</p>
              <h4 className="text-lg font-black">{project.title}</h4>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">Project Overview</h4>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {project.fullDesc}
            </p>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-teal-500/20 to-cyan-500/10 p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-md">
              <FaShieldAlt className="text-xl" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">Performance & Impact Metrics</p>
              <p className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">{project.metrics}</p>
            </div>
          </div>

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

          <div>
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Core Features & Capabilities
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-xl border border-slate-200 dark:border-emerald-500/20 bg-slate-50/70 dark:bg-slate-900/40 p-3.5">
                  <FaCheckCircle className="shrink-0 text-sm text-emerald-600 dark:text-emerald-400 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Technologies & Frameworks Used
            </p>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((tech) => (
                <span key={tech} className="flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  <FaCode className="text-xs opacity-80" />
                  {tech}
                </span>
              ))}
            </div>
          </div>

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
    <section id="projects" className="relative overflow-hidden bg-emerald-50/50 px-4 py-16 text-slate-900 transition-colors duration-500 sm:px-6 md:py-20 lg:px-8 dark:bg-[#061a14] dark:text-white">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.18em] text-emerald-700 shadow-sm backdrop-blur-xl dark:border-emerald-500/30 dark:bg-slate-900/80 dark:text-emerald-300">
            <FaLayerGroup className="text-emerald-500" />
            FEATURED PROJECTS & CASE STUDIES
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Explore My <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-400">
            A curated portfolio of high-impact full-stack web applications, built with modern architecture and optimized performance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default ProjectShow;