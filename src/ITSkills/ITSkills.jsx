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
  Search,
  Zap,
  SlidersHorizontal,
  ArrowUpDown,
  BookOpen,
} from "lucide-react";

const ITSkills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [proficiencyFilter, setProficiencyFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const skills = [
    { name: "React.js", icon: "⚛", category: "Frontend", level: 95, experience: "Advanced", featured: true, description: "Component-based UI development & Hooks" },
    { name: "Next.js", icon: "N", category: "Frontend", level: 91, experience: "Advanced", featured: true, description: "Full-stack SSR/SSG React apps" },
    { name: "JavaScript", icon: "JS", category: "Frontend", level: 96, experience: "Advanced", featured: true, description: "Modern ES6+ asynchronous programming" },
    { name: "TypeScript", icon: "TS", category: "Frontend", level: 88, experience: "Advanced", description: "Type-safe robust scalable frontend code" },
    { name: "Tailwind CSS", icon: "TW", category: "Frontend", level: 94, experience: "Advanced", description: "Utility-first modern responsive UI systems" },
    { name: "Redux Toolkit", icon: "R", category: "Frontend", level: 90, experience: "Advanced", description: "Global application state management" },
    { name: "Node.js", icon: "JS", category: "Backend", level: 93, experience: "Advanced", featured: true, description: "Scalable runtime backend environments" },
    { name: "Express.js", icon: "EX", category: "Backend", level: 91, experience: "Advanced", description: "REST API architecture & middleware" },
    { name: "GraphQL", icon: "GQL", category: "Backend", level: 84, experience: "Intermediate", description: "Efficient data querying language" },
    { name: "MongoDB", icon: "DB", category: "Database", level: 94, experience: "Advanced", featured: true, description: "NoSQL schema design & aggregation" },
    { name: "PostgreSQL", icon: "PG", category: "Database", level: 85, experience: "Intermediate", description: "Relational database querying & joins" },
    { name: "Redis", icon: "RDS", category: "Database", level: 80, experience: "Intermediate", description: "In-memory caching & session stores" },
    { name: "AI / LLM", icon: "AI", category: "AI", level: 87, experience: "Advanced", featured: true, description: "Prompt engineering, APIs & Langchain" },
    { name: "OpenAI API", icon: "GPT", category: "AI", level: 89, experience: "Advanced", description: "Custom GPTs & automated workflows" },
    { name: "Docker", icon: "D", category: "DevOps", level: 82, experience: "Intermediate", description: "Containerization & image builds" },
    { name: "AWS", icon: "AWS", category: "DevOps", level: 78, experience: "Intermediate", description: "Cloud EC2, S3 & serverless setup" },
    { name: "CI/CD Pipelines", icon: "CI", category: "DevOps", level: 81, experience: "Intermediate", description: "Automated test and deploy workflows" },
    { name: "Git / GitHub", icon: "G", category: "Tools", level: 95, experience: "Advanced", description: "Version control, branching & PR reviews" },
    { name: "Postman", icon: "PM", category: "Tools", level: 92, experience: "Advanced", description: "API endpoint testing & documentation" },
    { name: "Vite / Webpack", icon: "V", category: "Tools", level: 88, experience: "Advanced", description: "High-performance module bundlers" },
  ];

  const categories = ["All", "Frontend", "Backend", "Database", "AI", "DevOps", "Tools"];

  const categoryIcons = {
    Frontend: Code2,
    Backend: Server,
    Database: Database,
    AI: BrainCircuit,
    DevOps: Cloud,
    Tools: GitBranch,
  };

  const filteredAndSortedSkills = useMemo(() => {
    let result = skills.filter((skill) => {
      const matchesCategory = activeCategory === "All" || skill.category === activeCategory;
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            skill.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesProficiency = proficiencyFilter === "All" || skill.experience === proficiencyFilter;
      
      return matchesCategory && matchesSearch && matchesProficiency;
    });

    if (sortBy === "level-desc") {
      result.sort((a, b) => b.level - a.level);
    } else if (sortBy === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [activeCategory, searchQuery, proficiencyFilter, sortBy]);

  return (
    <section
      id="skills"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-emerald-50/50
        px-3
        py-12
        text-slate-900
        transition-colors
        duration-500
        xs:px-4
        sm:px-6
        md:py-20
        lg:px-12
        dark:bg-[#061a14]
        dark:text-slate-100
      "
    >
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[300px] w-full max-w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-500/10 via-teal-600/10 to-cyan-600/10 blur-[100px]" />
        <div 
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(16,185,129,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.8) 1px, transparent 1px)",
            backgroundSize: "36px 36px"
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        
        {/* Header */}
        <div className="mx-auto mb-8 max-w-xl text-center px-2">
          <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-[10px] sm:text-[11px] font-bold tracking-widest text-emerald-700 shadow-md backdrop-blur-md dark:border-emerald-500/30 dark:bg-slate-900/80 dark:text-emerald-300">
            <Sparkles size={11} className="text-emerald-500 animate-bounce shrink-0" />
            TECH STACK & SKILLS
          </div>

          <h2 className="text-xl font-black tracking-tight text-slate-900 sm:text-3xl md:text-4xl dark:text-white">
            Exploring the Tools <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">Behind My Code</span>
          </h2>

          <p className="mt-2 text-xs text-slate-600 sm:text-sm dark:text-slate-400 leading-relaxed">
            Dynamic inventory equipped with instant filtering, level search, and sorting.
          </p>
        </div>

        {/* =========================================================
           IMPROVED RESPONSIVE CATEGORY TABS (Scrollable & Touch Friendly)
        ========================================================= */}
        <div className="relative mb-6 w-full">
          {/* Subtle fade edges to indicate horizontal scrolling on mobile */}
          <div className="absolute left-0 top-0 bottom-2 w-6 bg-gradient-to-r from-emerald-50/80 to-transparent pointer-events-none z-10 dark:from-[#061a14]/80 md:hidden" />
          <div className="absolute right-0 top-0 bottom-2 w-6 bg-gradient-to-l from-emerald-50/80 to-transparent pointer-events-none z-10 dark:from-[#061a14]/80 md:hidden" />

          <div className="flex w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-emerald-500/20 md:justify-center">
            <div className="flex w-max gap-1.5 rounded-xl border border-emerald-200/80 bg-white/90 p-1.5 shadow-sm backdrop-blur-xl dark:border-emerald-500/20 dark:bg-[#0a261d]/95 mx-auto">
              {categories.map((category) => {
                const Icon = category === "All" ? Layers3 : categoryIcons[category];
                const active = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`
                      flex items-center gap-1.5 rounded-lg px-3 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shrink-0 select-none
                      ${
                        active
                          ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-white shadow-sm shadow-emerald-500/30 scale-105"
                          : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-white"
                      }
                    `}
                  >
                    <Icon size={13} className="shrink-0" />
                    <span>{category}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Secondary Controls Bar: Search + Filters */}
        <div className="mb-6 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Search Bar */}
          <div className="relative w-full sm:w-60 md:w-72">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search framework..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-emerald-200/80 bg-white/90 py-2.5 sm:py-2 pl-9 pr-3 text-xs font-medium text-slate-800 shadow-sm backdrop-blur-md focus:border-emerald-500 focus:outline-none dark:border-emerald-500/20 dark:bg-[#0a261d]/95 dark:text-slate-100"
            />
          </div>

          {/* Filters & Sorting Action Row */}
          <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
            {/* Experience Level Quick Filter */}
            <div className="flex items-center justify-between sm:justify-start gap-1.5 rounded-xl border border-emerald-200/80 bg-white/90 px-3 py-2 sm:py-1.5 text-[11px] font-bold text-slate-700 shadow-sm backdrop-blur-md dark:border-emerald-500/20 dark:bg-[#0a261d]/95 dark:text-slate-300">
              <div className="flex items-center gap-1">
                <SlidersHorizontal size={12} className="text-emerald-500 shrink-0" />
                <span>Level:</span>
              </div>
              <select
                value={proficiencyFilter}
                onChange={(e) => setProficiencyFilter(e.target.value)}
                className="bg-transparent font-extrabold text-emerald-600 focus:outline-none cursor-pointer dark:text-emerald-400"
              >
                <option value="All" className="dark:bg-slate-900">All</option>
                <option value="Advanced" className="dark:bg-slate-900">Advanced</option>
                <option value="Intermediate" className="dark:bg-slate-900">Intermediate</option>
              </select>
            </div>

            {/* Sorting Select */}
            <div className="flex items-center justify-between sm:justify-start gap-1.5 rounded-xl border border-emerald-200/80 bg-white/90 px-3 py-2 sm:py-1.5 text-[11px] font-bold text-slate-700 shadow-sm backdrop-blur-md dark:border-emerald-500/20 dark:bg-[#0a261d]/95 dark:text-slate-300">
              <div className="flex items-center gap-1">
                <ArrowUpDown size={12} className="text-emerald-500 shrink-0" />
                <span>Sort:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent font-extrabold text-emerald-600 focus:outline-none cursor-pointer dark:text-emerald-400"
              >
                <option value="default" className="dark:bg-slate-900">Default</option>
                <option value="level-desc" className="dark:bg-slate-900">Highest</option>
                <option value="name-asc" className="dark:bg-slate-900">A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Compact & Ultra-Responsive Skills Grid */}
        <div className="grid grid-cols-1 gap-3.5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredAndSortedSkills.map((skill) => (
            <article
              key={skill.name}
              className="
                group
                relative
                flex
                flex-col
                justify-between
                overflow-hidden
                rounded-2xl
                border
                border-emerald-200/80
                bg-white/85
                p-3.5
                sm:p-4
                shadow-sm
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-emerald-400
                hover:shadow-[0_10px_25px_rgba(52,211,153,0.1)]
                dark:border-emerald-500/20
                dark:bg-gradient-to-b
                dark:from-[#0a261d]/95
                dark:to-[#061a14]/95
                dark:hover:border-emerald-500/50
              "
            >
              {/* Top Accent Line */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600" />

              <div>
                {/* Header row inside card */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-500/10 text-xs font-black text-emerald-600 shadow-inner group-hover:scale-105 dark:border-emerald-500/30 dark:text-emerald-400">
                      {skill.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors dark:text-white dark:group-hover:text-emerald-400">
                        {skill.name}
                      </h3>
                      <span className="text-[8px] font-extrabold uppercase tracking-widest text-slate-400">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {skill.featured && (
                    <span className="flex items-center gap-0.5 rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[8px] font-extrabold text-emerald-600 border border-emerald-500/20 dark:text-emerald-400 shrink-0">
                      <Zap size={8} /> Core
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-2">
                  {skill.description}
                </p>
              </div>

              {/* Footer specs (Level & Experience) */}
              <div className="mt-3.5 pt-2.5 border-t border-emerald-100 dark:border-emerald-500/10 flex items-center justify-between text-[10px]">
                <span className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[9px]">
                  {skill.experience}
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-12 sm:w-14 bg-slate-100 rounded-full overflow-hidden dark:bg-slate-800">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="font-black text-slate-800 dark:text-white">{skill.level}%</span>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredAndSortedSkills.length === 0 && (
          <div className="py-12 text-center">
            <BookOpen size={24} className="mx-auto text-emerald-500/50 mb-2" />
            <p className="text-xs font-bold text-slate-700 dark:text-slate-300">No matching skills found</p>
            <p className="text-[10px] text-slate-500 mt-1">Try tweaking your search or filter values.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default ITSkills;