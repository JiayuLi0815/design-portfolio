import { useState, useEffect, useRef } from "react";
import portraitPhoto from "@/imports/IMG_9702.JPG";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  desc: string;
  img: string;
  accent: string;
  placeholder?: boolean;
  images?: string[];
  role?: string;
  duration?: string;
  deliverables?: string[];
  fullDesc?: string;
  fullDescEn?: string;
  tags?: string[];
}

const ACCENT_CYCLE = ["#18C8FF", "#3BFFA0", "#FF7048", "#18C8FF"];

const ALL_PROJECTS: Project[] = [
  {
    id: "01",
    title: "NEXUS",
    subtitle: "互联体验",
    category: "产品互动",
    year: "2024",
    desc: "为某头部电商平台设计的大促节点全链路互动体验，融合实时数据可视化与用户行为引导，DAU 提升 34%。",
    img: "https://images.unsplash.com/photo-1593073862407-a3ce22748763?w=900&h=600&fit=crop&auto=format",
    accent: "#18C8FF",
    images: [
      "https://images.unsplash.com/photo-1593073862407-a3ce22748763?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&auto=format",
    ],
    role: "互动体验设计 / 交互设计",
    duration: "3 个月",
    deliverables: ["互动原型", "设计规范文档", "前端实现协作", "数据埋点方案"],
    fullDesc:
      "NEXUS 是为某头部电商平台大促节点设计的全链路互动体验系统。项目核心挑战在于如何在高流量峰值场景下，将复杂的促销信息转化为直觉化的沉浸体验，同时引导用户行为、提升转化效率。\n\n设计采用实时数据可视化模块作为核心叙事线索，将商品热度、库存动态、用户轨迹以动态图形语言呈现，使每个页面节点都成为一个「有生命感」的信息场域。最终落地后，活动期 DAU 提升 34%，核心转化路径点击率较上年同期提升 51%。",
    fullDescEn:
      "NEXUS is a full-funnel interactive experience system designed for a major e-commerce platform's peak campaign. The core challenge: transform dense promotional content into an intuitive, immersive experience at high-traffic scale while guiding user behavior and improving conversion.\n\nReal-time data visualization modules serve as the narrative spine — product heat, inventory dynamics, and user flows rendered as living graphic systems. Post-launch: DAU +34%, core conversion path CTR +51% year-over-year.",
    tags: ["React", "GSAP", "WebGL", "实时数据", "互动设计"],
  },
  {
    id: "02",
    title: "ECHO FIELD",
    subtitle: "回声域",
    category: "数字展览",
    year: "2024",
    desc: "面向 Web 端的沉浸式数字展览，多终端自适应，支持 3000+ 同时在线用户的实时互动与轨迹可视化叙事。",
    img: "https://images.unsplash.com/photo-1768692508167-bc60a243b386?w=900&h=600&fit=crop&auto=format",
    accent: "#3BFFA0",
    images: [
      "https://images.unsplash.com/photo-1768692508167-bc60a243b386?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1637578035851-c5b169722de1?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1641290091305-70283afc4e88?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1706552604002-f7efaebebca6?w=1200&h=800&fit=crop&auto=format",
    ],
    role: "体验设计 / 视觉设计 / 前端开发",
    duration: "4 个月",
    deliverables: ["Web 展览系统", "互动装置界面", "用户轨迹可视化", "多语言版本"],
    fullDesc:
      "回声域是一个以「集体记忆与空间感知」为主题的 Web 沉浸式数字展览，由同济大学人文学院与北京大学数字人文研究中心联合发起。\n\n展览核心是一套实时用户轨迹聚合系统——每位访客的浏览路径、停留时长、标注内容都被转化为动态粒子轨迹，在共享画布上形成集体性的视觉叙事。系统支持 3000+ 并发用户，在高峰期仍保持流畅的实时更新。展览上线 48 小时内访问量突破 8 万次。",
    fullDescEn:
      "Echo Field is a web-based immersive digital exhibition on collective memory and spatial perception, co-initiated by Tongji University and PKU's Digital Humanities Research Center.\n\nAt its core: a real-time user trajectory aggregation system. Each visitor's browsing path, dwell time, and annotations become dynamic particle traces on a shared canvas — forming a collective visual narrative. Built for 3,000+ concurrent users. Reached 80,000 visits within 48 hours of launch.",
    tags: ["Three.js", "WebSocket", "数字展览", "可视化", "多端适配"],
  },
  {
    id: "03",
    title: "SIGNAL",
    subtitle: "信号场",
    category: "品牌互动",
    year: "2023",
    desc: "品牌节点数字落地项目，H5 互动 + 线下联动屏，三天内触达 120 万用户，核心互动率 62%。",
    img: "https://images.unsplash.com/photo-1782248615311-965868b8a5b3?w=900&h=600&fit=crop&auto=format",
    accent: "#FF7048",
    images: [
      "https://images.unsplash.com/photo-1782248615311-965868b8a5b3?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1784407097298-759eb54e8aeb?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1585592049275-66497dae73d4?w=1200&h=800&fit=crop&auto=format",
    ],
    role: "创意方向 / 视觉设计 / 互动设计",
    duration: "6 周",
    deliverables: ["H5 互动页面", "线下大屏系统", "品牌视觉延伸", "传播素材"],
    fullDesc:
      "SIGNAL 是一个品牌节点数字落地项目，为某消费品牌周年庆设计。项目核心是构建 H5 互动端与线下联动屏幕之间的实时信号通道——用户在手机端的操作实时映射到线下展览空间的视觉墙上，形成线上线下一体的互动场域。\n\n视觉语言围绕「信号传播」展开，以动态波纹、光谱扫描为核心图形语素，配合品牌色系重构了完整的交互视觉体系。项目上线三天内触达 120 万用户，核心互动率 62%，创品牌历史活动最高记录。",
    fullDescEn:
      "SIGNAL is a brand activation for a consumer brand's anniversary. The core concept: build a real-time signal channel between the H5 mobile experience and physical display walls — user actions on mobile map live onto the venue's visual surfaces, creating a unified online-offline interactive field.\n\n3 days post-launch: 1.2M users reached, 62% core interaction rate — highest in the brand's campaign history.",
    tags: ["H5", "Canvas", "WebSocket", "品牌设计", "线下联动"],
  },
  {
    id: "04",
    title: "DRIFT",
    subtitle: "漂移",
    category: "创意技术",
    year: "2022",
    desc: "城市数据艺术项目，实时抓取交通、气象、社交热词，生成动态视觉系统，在数字展厅及 Web 端同步展出。",
    img: "https://images.unsplash.com/photo-1593072188319-5006e116315e?w=900&h=600&fit=crop&auto=format",
    accent: "#18C8FF",
    images: [
      "https://images.unsplash.com/photo-1593072188319-5006e116315e?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1768527049008-85f2cc0166be?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1771794686652-80b05ced7119?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1767477665632-36f3236d97f9?w=1200&h=800&fit=crop&auto=format",
    ],
    role: "概念设计 / 视觉系统 / 技术实现",
    duration: "5 个月",
    deliverables: ["生成式视觉系统", "Web 展览端", "数字展厅装置", "数据接口对接"],
    fullDesc:
      "漂移是一个城市尺度的数据艺术项目。系统实时抓取上海城市的交通流量、气象数据、社交平台热词，将这些异质数据流转化为统一的生成式视觉语言——城市的「呼吸」与「情绪」以动态粒子场、流线图形的方式被可视化。\n\n项目同时在 Web 端与线下数字展厅展出，两端使用同一数据源实时同步，形成跨越物理与数字边界的联动叙事。作品在北京大学文化产业研究院年度展览中展出，并入选当年数字艺术季推荐名单。",
    fullDescEn:
      "Drift is a city-scale data art project. The system ingests real-time data from Shanghai — traffic flow, weather, trending social keywords — and translates these heterogeneous streams into a unified generative visual language.\n\nThe project runs simultaneously on web and a physical digital exhibition space, both fed by the same live data source. Exhibited at PKU's Cultural Industry Research Institute annual show; selected for the Digital Art Season recommended list.",
    tags: ["生成艺术", "Processing", "数据接口", "粒子系统", "跨端展出"],
  },
  // ── Placeholders ──
  {
    id: "05",
    title: "PROJECT 05",
    subtitle: "即将更新",
    category: "产品互动",
    year: "2025",
    desc: "作品整理中，即将上线。",
    img: "",
    accent: "#3BFFA0",
    placeholder: true,
  },
  {
    id: "06",
    title: "PROJECT 06",
    subtitle: "即将更新",
    category: "数字展览",
    year: "2025",
    desc: "作品整理中，即将上线。",
    img: "",
    accent: "#FF7048",
    placeholder: true,
  },
  {
    id: "07",
    title: "PROJECT 07",
    subtitle: "即将更新",
    category: "视觉设计",
    year: "2025",
    desc: "作品整理中，即将上线。",
    img: "",
    accent: "#18C8FF",
    placeholder: true,
  },
  {
    id: "08",
    title: "PROJECT 08",
    subtitle: "即将更新",
    category: "创意技术",
    year: "2025",
    desc: "作品整理中，即将上线。",
    img: "",
    accent: "#3BFFA0",
    placeholder: true,
  },
];

const FEATURED = ALL_PROJECTS.slice(0, 4);

const NAV_ITEMS = [
  { id: "works", cn: "作品", en: "Works" },
  { id: "about", cn: "关于", en: "About" },
  { id: "contact", cn: "联系", en: "Contact" },
];

const CATEGORIES = ["全部", "产品互动", "数字展览", "品牌互动", "创意技术", "视觉设计"];

// ─────────────────────────────────────────────
// ProjectModal
// ─────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const images = project.images ?? [];

  return (
    <div className="fixed inset-0 z-[80] flex items-stretch" style={{ animation: "fadeIn 0.2s ease" }}>
      <div className="absolute inset-0 bg-[#030507]/92 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative z-10 ml-auto w-full max-w-5xl h-full bg-[#09111A] flex flex-col md:flex-row overflow-hidden"
        style={{ animation: "slideIn 0.32s cubic-bezier(0.22,1,0.36,1)" }}
      >
        {/* Left: images */}
        <div className="flex flex-col md:w-[55%] h-[42vh] md:h-full flex-shrink-0 bg-[#060910]">
          <div className="relative flex-1 overflow-hidden bg-[#060910]">
            {images[activeImg] ? (
              <img
                key={activeImg}
                src={images[activeImg]}
                alt={`${project.title} view ${activeImg + 1}`}
                className="w-full h-full object-cover opacity-90"
                style={{ animation: "imgFade 0.3s ease" }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-barlow font-black text-white/5 select-none" style={{ fontSize: "clamp(60px,8vw,100px)" }}>{project.id}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060910]/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-[10px] text-white/30 font-outfit tracking-widest">
              {String(activeImg + 1).padStart(2, "0")} / {String(Math.max(images.length, 1)).padStart(2, "0")}
            </div>
            <div className="absolute top-4 right-4 w-2.5 h-2.5" style={{ background: project.accent }} />
          </div>
          {images.length > 1 && (
            <div className="flex gap-1 p-2 bg-[#060910] flex-shrink-0">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative flex-1 h-14 overflow-hidden transition-opacity duration-200 ${activeImg === i ? "opacity-100" : "opacity-30 hover:opacity-60"}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                  {activeImg === i && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: project.accent }} />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: info */}
        <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
          <div className="p-8 md:p-10">
            <button onClick={onClose} className="mb-8 flex items-center gap-2 text-white/30 hover:text-white transition-colors duration-200 group text-xs tracking-[0.2em] uppercase font-outfit">
              <span className="w-5 h-px bg-current transition-all duration-200 group-hover:w-8" />
              Close  ×
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] text-white/25 tracking-[0.22em] uppercase font-outfit">{project.category}</span>
              <span className="w-1 h-1 rounded-full bg-white/15" />
              <span className="text-[10px] text-white/25 font-outfit">{project.year}</span>
            </div>

            <h2 className="font-barlow font-black uppercase leading-none text-[#E8EEF8] mb-1" style={{ fontSize: "clamp(38px,5.5vw,60px)" }}>
              {project.title}
            </h2>
            <p className="font-barlow font-semibold tracking-wider mb-8" style={{ color: project.accent, fontSize: "clamp(15px,1.8vw,20px)" }}>
              {project.subtitle}
            </p>

            {project.placeholder ? (
              <div className="py-12 flex flex-col items-start gap-4">
                <div className="w-12 h-px" style={{ background: project.accent }} />
                <p className="text-white/30 font-outfit text-sm leading-relaxed">
                  这个作品正在整理中，稍后上线。<br />
                  <span className="text-white/15">This project is being prepared and will be available soon.</span>
                </p>
              </div>
            ) : (
              <>
                <p className="text-white/60 font-outfit text-[14px] leading-[1.85] mb-4">
                  {project.fullDesc?.split("\n\n").map((para, i, arr) => (
                    <span key={i}>{para}{i < arr.length - 1 && <><br /><br /></>}</span>
                  ))}
                </p>
                <div className="h-px bg-white/[0.06] my-8" />
                <p className="text-white/30 font-outfit text-[13px] leading-[1.9] italic mb-8">
                  {project.fullDescEn?.split("\n\n").map((para, i, arr) => (
                    <span key={i}>{para}{i < arr.length - 1 && <><br /><br /></>}</span>
                  ))}
                </p>
                <div className="h-px bg-white/[0.06] mb-8" />
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[{ label: "我的角色", val: project.role }, { label: "项目周期", val: project.duration }].map((item) => (
                    <div key={item.label}>
                      <div className="text-[9px] tracking-[0.3em] uppercase font-outfit font-semibold mb-2" style={{ color: project.accent }}>{item.label}</div>
                      <div className="text-white/55 text-sm font-outfit leading-[1.6]">{item.val}</div>
                    </div>
                  ))}
                </div>
                <div className="mb-8">
                  <div className="text-[9px] tracking-[0.3em] uppercase font-outfit font-semibold mb-3" style={{ color: project.accent }}>交付物</div>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables?.map((d) => (
                      <span key={d} className="text-[11px] text-white/50 font-outfit px-3 py-1.5 border border-white/[0.08] hover:border-white/20 transition-colors">{d}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] tracking-[0.3em] uppercase font-outfit font-semibold mb-3 text-white/20">技术标签</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((t) => (
                      <span key={t} className="text-[11px] font-outfit px-3 py-1.5 font-medium" style={{ color: project.accent, background: `${project.accent}12`, border: `1px solid ${project.accent}30` }}>{t}</span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// AllWorksPage
// ─────────────────────────────────────────────
function AllWorksPage({ onClose, onSelectProject }: { onClose: () => void; onSelectProject: (p: Project) => void }) {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const filtered = activeCategory === "全部"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="fixed inset-0 z-[70] bg-[#060910] overflow-y-auto" style={{ animation: "pageIn 0.35s cubic-bezier(0.22,1,0.36,1)", scrollbarWidth: "none" }}>
      {/* Top accent */}
      <div className="sticky top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#18C8FF] via-[#3BFFA0] to-[#FF7048] z-10" />

      {/* Header */}
      <div className="sticky top-[2px] z-10 bg-[#060910]/95 backdrop-blur-md border-b border-white/[0.05] px-8 md:px-14 py-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button onClick={onClose} className="flex items-center gap-2.5 text-white/30 hover:text-white transition-colors duration-200 group text-[11px] tracking-[0.22em] uppercase font-outfit">
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="transition-transform duration-200 group-hover:-translate-x-1">
              <path d="M0 5H15M0 5L5 1M0 5L5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            返回  Back
          </button>
          <span className="w-px h-4 bg-white/10" />
          <span className="font-barlow font-black text-sm uppercase tracking-[0.2em] text-white/20">所有作品</span>
        </div>
        <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-white/30 hover:text-white transition-colors border border-white/[0.08] hover:border-white/20">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <div className="px-8 md:px-14 pt-12 pb-20 max-w-[1400px] mx-auto">
        {/* Page title */}
        <div className="mb-10">
          <div className="text-[#3BFFA0] text-[10px] tracking-[0.38em] uppercase font-outfit font-semibold mb-4">All Works / 全部作品</div>
          <h1 className="font-barlow font-black uppercase leading-none text-[#E8EEF8]" style={{ fontSize: "clamp(52px,8vw,100px)" }}>
            作品<br />归档
          </h1>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-white/[0.06] pb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] tracking-[0.18em] uppercase font-outfit font-medium px-4 py-2 transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#18C8FF] text-[#060910]"
                  : "text-white/35 border border-white/[0.08] hover:text-white/70 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-[11px] text-white/15 font-outfit self-center">{filtered.length} 个项目</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
          {filtered.map((p) => (
            <article
              key={p.id}
              className={`relative overflow-hidden bg-[#060910] group ${p.placeholder ? "cursor-default" : "cursor-pointer"}`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onSelectProject(p)}
            >
              {/* Image / Placeholder */}
              <div className="relative overflow-hidden bg-[#0B0F18]" style={{ aspectRatio: "4/3" }}>
                {p.placeholder ? (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                    <div className="font-barlow font-black text-white/[0.04] leading-none select-none" style={{ fontSize: "clamp(40px,5vw,64px)" }}>
                      {p.id}
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-3 h-px" style={{ background: p.accent }} />
                      <span className="text-[9px] tracking-[0.3em] uppercase font-outfit" style={{ color: p.accent }}>即将更新</span>
                      <div className="w-3 h-px" style={{ background: p.accent }} />
                    </div>
                  </div>
                ) : (
                  <>
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-55 group-hover:opacity-80 group-hover:scale-[1.05] transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060910] via-transparent to-transparent" />
                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hovered === p.id ? "opacity-100" : "opacity-0"}`}>
                      <div className="text-[10px] tracking-[0.2em] uppercase font-outfit font-semibold px-4 py-2 backdrop-blur-sm" style={{ color: p.accent, background: `${p.accent}18`, border: `1px solid ${p.accent}40` }}>
                        查看详情 →
                      </div>
                    </div>
                  </>
                )}
                <div className="absolute top-3 right-3 w-2 h-2" style={{ background: p.accent, opacity: p.placeholder ? 0.4 : 1 }} />
              </div>

              {/* Info */}
              <div className="p-5 border-t border-white/[0.04]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] text-white/20 tracking-[0.2em] uppercase font-outfit">{p.category}</span>
                  <span className="text-[9px] text-white/20 font-outfit">{p.year}</span>
                </div>
                <h3 className={`font-barlow font-black uppercase leading-none mb-0.5 transition-colors duration-200 ${p.placeholder ? "text-white/15" : "text-[#E8EEF8] group-hover:text-white"}`}
                  style={{ fontSize: "clamp(20px,2.5vw,28px)" }}>
                  {p.title}
                </h3>
                <p className={`font-barlow font-semibold tracking-wider text-sm ${p.placeholder ? "opacity-30" : ""}`} style={{ color: p.accent }}>
                  {p.subtitle}
                </p>
                {!p.placeholder && (
                  <div className="mt-4 h-[1px] transition-all duration-500" style={{
                    background: hovered === p.id ? `linear-gradient(to right, ${p.accent}, transparent)` : "rgba(255,255,255,0.04)",
                    width: hovered === p.id ? "100%" : "20px",
                  }} />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// App
// ─────────────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllWorks, setShowAllWorks] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = ["home", "works", "about", "contact"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 120 && r.bottom > 120) { setActiveSection(id); break; }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleOpenAllWorks = () => {
    setShowAllWorks(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseAllWorks = () => {
    setShowAllWorks(false);
    document.body.style.overflow = "";
  };

  const handleSelectFromAll = (p: Project) => {
    setSelectedProject(p);
  };

  return (
    <div className="bg-[#060910] text-[#E8EEF8] font-outfit min-h-screen overflow-x-hidden">
      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes slideIn { from { transform:translateX(60px);opacity:0 } to { transform:translateX(0);opacity:1 } }
        @keyframes imgFade { from { opacity:0 } to { opacity:0.9 } }
        @keyframes pageIn { from { transform:translateY(32px);opacity:0 } to { transform:translateY(0);opacity:1 } }
      `}</style>

      {/* ── NAV ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 py-5 transition-all duration-300 ${scrolled ? "bg-[#060910]/88 backdrop-blur-md border-b border-white/[0.06]" : ""}`}>
        <button onClick={() => scrollTo("home")} className="font-barlow text-base font-black tracking-[0.22em] uppercase text-[#E8EEF8] hover:text-[#18C8FF] transition-colors duration-200">
          JIAYU LI
        </button>
        <ul className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button onClick={() => scrollTo(item.id)} className={`text-[11px] tracking-[0.22em] uppercase font-outfit font-medium transition-colors duration-200 ${activeSection === item.id ? "text-[#18C8FF]" : "text-white/40 hover:text-white/80"}`}>
                {item.cn}  {item.en}
              </button>
            </li>
          ))}
          <li>
            <button onClick={() => scrollTo("contact")} className="text-[11px] tracking-[0.2em] uppercase font-outfit font-semibold px-5 py-2.5 border border-[#18C8FF]/50 text-[#18C8FF] hover:bg-[#18C8FF] hover:text-[#060910] transition-all duration-200">
              合作洽谈
            </button>
          </li>
        </ul>
        <button className="md:hidden flex flex-col gap-[5px] p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-[#060910] flex flex-col items-center justify-center gap-12 transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {NAV_ITEMS.map((item) => (
          <button key={item.id} onClick={() => scrollTo(item.id)} className="font-barlow text-6xl font-black uppercase leading-none text-[#E8EEF8] hover:text-[#18C8FF] transition-colors flex items-baseline gap-5">
            <span>{item.cn}</span>
            <span className="text-3xl text-white/20">{item.en}</span>
          </button>
        ))}
      </div>

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex flex-col justify-end pb-20 px-8 md:px-14 overflow-hidden">
        <div className="absolute inset-0 bg-[#060910]">
          <img src="https://images.unsplash.com/photo-1768692508167-bc60a243b386?w=1800&h=1200&fit=crop&auto=format" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-[0.18]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#060910] via-[#0A0F1E]/80 to-[#060C18]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060910] via-transparent to-[#060910]/40" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#18C8FF]/[0.04] blur-[140px] pointer-events-none" />
          <div className="absolute bottom-20 left-0 w-[500px] h-[400px] rounded-full bg-[#3BFFA0]/[0.03] blur-[120px] pointer-events-none" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#18C8FF] via-[#3BFFA0] to-[#FF7048]" />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 opacity-30">
          <div className="w-px h-16 bg-[#18C8FF]" />
          <span className="text-[9px] tracking-[0.45em] uppercase text-[#18C8FF] font-outfit" style={{ writingMode: "vertical-rl" }}>Scroll to Explore</span>
        </div>
        <div className="relative z-10 max-w-6xl">
          <div className="flex items-center gap-4 mb-7">
            <span className="w-8 h-px bg-[#3BFFA0]" />
            <span className="text-[#3BFFA0] text-[10px] tracking-[0.38em] uppercase font-outfit font-semibold">互动体验设计 · 数字展览 · 创意技术落地</span>
          </div>
          <h1 className="font-barlow font-black uppercase leading-[0.86] tracking-[-0.01em] text-[#E8EEF8] mb-5" style={{ fontSize: "clamp(78px, 15.5vw, 210px)" }}>
            JIAYU<br />LI<span className="text-[#18C8FF]">.</span>
          </h1>
          <p className="font-barlow font-semibold uppercase tracking-[0.18em] text-white/30 mb-12" style={{ fontSize: "clamp(13px, 2.2vw, 24px)" }}>
            Interactive Experience Designer &amp; Creative Technologist
          </p>
          <div className="flex flex-wrap gap-10 md:gap-16 border-t border-white/[0.07] pt-8 mb-12">
            {[
              { num: "5+", cn: "落地项目", en: "Projects" },
              { num: "3000+", cn: "触达用户", en: "Users Reached" },
              { num: "2021", cn: "从业至今", en: "Since" },
            ].map((s) => (
              <div key={s.num}>
                <div className="font-barlow font-black text-[#FF7048]" style={{ fontSize: "clamp(30px, 4.5vw, 52px)" }}>{s.num}</div>
                <div className="text-[10px] text-white/25 tracking-[0.28em] uppercase font-outfit leading-relaxed mt-1">{s.cn}<br />{s.en}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => scrollTo("works")} className="px-8 py-3.5 bg-[#6CD0F2] text-[#060910] font-outfit font-bold text-[11px] tracking-[0.25em] uppercase hover:bg-[#3BFFA0] transition-all duration-300">
              查看作品  View Works →
            </button>
            <button onClick={() => scrollTo("contact")} className="px-8 py-3.5 border border-white/15 text-white/50 font-outfit font-semibold text-[11px] tracking-[0.25em] uppercase hover:border-[#FF7048]/60 hover:text-[#FF7048] transition-all duration-300">
              合作洽谈  Let's Talk
            </button>
          </div>
        </div>
      </section>

      {/* ── WORKS ── */}
      <section id="works" className="py-24 px-8 md:px-14">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex items-end justify-between mb-16 border-b border-white/[0.07] pb-8">
            <div>
              <div className="text-[#3BFFA0] text-[10px] tracking-[0.38em] uppercase font-outfit font-semibold mb-4">Selected Works</div>
              <h2 className="font-barlow font-black uppercase leading-none text-[#E8EEF8]" style={{ fontSize: "clamp(50px, 8.5vw, 105px)" }}>
                代表<br />作品
              </h2>
            </div>
            <div className="flex flex-col items-end gap-4">
              <div className="font-barlow font-black text-white/[0.035] leading-none hidden md:block select-none" style={{ fontSize: "clamp(58px, 8vw, 115px)" }}>
                2022<br />–2024
              </div>
              {/* View All button */}
              <button
                onClick={handleOpenAllWorks}
                className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-outfit font-semibold text-white/35 hover:text-[#3BFFA0] transition-colors duration-200 group"
              >
                查看全部  View All
                <span className="flex items-center gap-1 transition-all duration-200 group-hover:gap-2">
                  <span className="w-6 h-px bg-current" />
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </button>
            </div>
          </div>

          {/* Featured 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]">
            {FEATURED.map((p) => (
              <article
                key={p.id}
                className="relative overflow-hidden bg-[#060910] group cursor-pointer"
                onMouseEnter={() => setHoveredProject(p.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(p)}
              >
                <div className="relative overflow-hidden bg-[#0B0F18]" style={{ height: "clamp(260px, 28vw, 420px)" }}>
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-55 group-hover:opacity-75 group-hover:scale-[1.04] transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E1C]/60 via-transparent to-transparent mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060910] via-[#060910]/10 to-transparent" />
                  <div className="absolute top-5 left-5 font-barlow font-black text-white/[0.07] leading-none select-none" style={{ fontSize: "clamp(44px,5.5vw,72px)" }}>{p.id}</div>
                  <div className="absolute top-5 right-5 w-2.5 h-2.5" style={{ background: p.accent }} />
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === p.id ? "opacity-100" : "opacity-0"}`}>
                    <div className="px-6 py-2.5 border text-[11px] tracking-[0.2em] uppercase font-outfit font-semibold backdrop-blur-sm" style={{ borderColor: p.accent, color: p.accent, background: `${p.accent}18` }}>
                      查看详情  View Project →
                    </div>
                  </div>
                </div>
                <div className="p-7 md:p-8 border-t border-white/[0.04]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] text-white/25 tracking-[0.2em] uppercase font-outfit">{p.category}</span>
                    <span className="w-1 h-1 rounded-full bg-white/10" />
                    <span className="text-[10px] text-white/25 font-outfit">{p.year}</span>
                  </div>
                  <h3 className="font-barlow font-black uppercase leading-none text-[#E8EEF8] mb-1" style={{ fontSize: "clamp(30px,3.8vw,46px)" }}>{p.title}</h3>
                  <p className="font-barlow font-semibold tracking-wider mb-4" style={{ color: p.accent, fontSize: "clamp(15px,1.8vw,20px)" }}>{p.subtitle}</p>
                  <p className="text-sm text-white/40 font-outfit leading-[1.75] max-w-sm">{p.desc}</p>
                  <div className="mt-6 h-[1.5px] transition-all duration-500" style={{ background: hoveredProject === p.id ? `linear-gradient(to right, ${p.accent}, transparent)` : "rgba(255,255,255,0.05)", width: hoveredProject === p.id ? "100%" : "28px" }} />
                </div>
              </article>
            ))}
          </div>

          {/* Bottom "View All" teaser */}
          <div className="mt-px bg-white/[0.04]">
            <button
              onClick={handleOpenAllWorks}
              className="w-full flex items-center justify-center gap-4 py-6 text-white/20 hover:text-[#3BFFA0] transition-colors duration-300 group"
            >
              <span className="w-12 h-px bg-current transition-all duration-300 group-hover:w-20" />
              <span className="text-[11px] tracking-[0.3em] uppercase font-outfit font-semibold">还有 4 个作品  查看全部 →</span>
              <span className="w-12 h-px bg-current transition-all duration-300 group-hover:w-20" />
            </button>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 px-8 md:px-14 bg-[#09111A]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.15fr] gap-14 lg:gap-24 items-center">
          <div className="relative max-w-xs">
            <div className="relative overflow-hidden bg-[#0D1626]" style={{ aspectRatio: "3/4" }}>
              <img src={portraitPhoto} alt="李家瑜 Jiayu Li" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#FF7048] text-[#060910] px-5 py-3.5">
              <div className="font-barlow font-black text-xl uppercase leading-tight">SHANGHAI<br />Based</div>
            </div>
            <div className="absolute top-0 -left-3 w-[2px] h-24 bg-gradient-to-b from-[#3BFFA0] to-transparent" />
          </div>
          <div className="md:pl-2">
            <div className="text-[#3BFFA0] text-[10px] tracking-[0.38em] uppercase font-outfit font-semibold mb-6">About / 关于</div>
            <h2 className="font-barlow font-black uppercase leading-none text-[#E8EEF8] mb-8" style={{ fontSize: "clamp(46px, 6.5vw, 84px)" }}>
              DESIGN<br />THAT<br /><span className="text-[#18C8FF]">MOVES.</span>
            </h2>
            <p className="text-white/50 font-outfit leading-[1.85] mb-5 text-[15px]">
              李家瑜，25级同济大学设计硕士，互动体验、视觉设计师，专注互联网产品的创意互动落地与数字展览体验设计。
              擅长将复杂数据、品牌叙事与用户行为结合，打造在 Web 端、移动端和线下大屏可无缝延伸的沉浸体验。
            </p>
            <p className="text-white/50 font-outfit leading-[1.85] mb-12 text-[15px]">
              I design interactive experiences that live at the intersection of product, brand, and space —
              from high-traffic campaign pages and data-driven web exhibitions to real-time interactive installations
              built for digital-native audiences.
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-7 border-t border-white/[0.07] pt-8">
              {[
                { label: "Expertise", val: "视觉设计 · 互动体验\n数字展览 · 数据可视化", accent: "#18C8FF" },
                { label: "Collaborated With", val: "同济大学人文学院\n北京大学人工智能研究院 · 数字人文研究中心\n北京大学文化产业研究院", accent: "#3BFFA0" },
                { label: "Tools", val: "PS/AI/ID · Figma · VS Code\nUnity · Blender", accent: "#FF7048" },
                { label: "Languages", val: "Chinese · English", accent: "#18C8FF" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-[9px] tracking-[0.32em] uppercase font-outfit font-semibold mb-2" style={{ color: item.accent }}>{item.label}</div>
                  <div className="text-white/55 text-sm font-outfit leading-[1.7] whitespace-pre-line">{item.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-32 px-8 md:px-14 relative overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-[#18C8FF]/[0.04] blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[400px] rounded-full bg-[#3BFFA0]/[0.03] blur-[110px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-[#3BFFA0] text-[10px] tracking-[0.38em] uppercase font-outfit font-semibold mb-6">Contact / 联系</div>
          <h2 className="font-barlow font-black uppercase leading-none text-[#E8EEF8] mb-6" style={{ fontSize: "clamp(58px, 11vw, 148px)" }}>
            LET'S<br />BUILD<br /><span className="text-[#FF7048]">IT.</span>
          </h2>
          <p className="text-white/40 font-outfit text-base md:text-lg max-w-lg mb-16 leading-[1.85]">
            有项目想聊？互动交互、数字展览、品牌创意互动皆可。<br />
            Open to product collabs, digital exhibitions, and creative tech builds.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-16">
            {[
              { label: "Email", val: "jiayu98518@163.com", accent: "#18C8FF" },
              { label: "WeChat", val: "ClaudeX_9", accent: "#3BFFA0" },
              { label: "LinkedIn / Behance", val: "李家瑜 Jiayu Li", accent: "#FF7048" },
              { label: "Location", val: "Shanghai, China", accent: "#18C8FF" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-5 p-5 border border-white/[0.05] hover:border-white/[0.12] transition-colors duration-200 group">
                <div className="w-[2px] h-8 flex-shrink-0 rounded-sm" style={{ background: c.accent }} />
                <div>
                  <div className="text-[9px] text-white/20 tracking-[0.3em] uppercase font-outfit mb-1">{c.label}</div>
                  <div className="text-[#E8EEF8] font-outfit font-medium text-sm group-hover:text-white transition-colors duration-200">{c.val}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="h-px bg-gradient-to-r from-[#18C8FF] via-[#3BFFA0] to-[#FF7048]" />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-8 md:px-14 py-7 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/[0.04]">
        <span className="font-barlow font-black text-sm uppercase tracking-[0.25em] text-white/12">JIAYU LI</span>
        <span className="text-[10px] text-white/12 font-outfit tracking-wider">© 2026 · 互动体验设计 · All Rights Reserved</span>
      </footer>

      {/* ── ALL WORKS PAGE ── */}
      {showAllWorks && (
        <AllWorksPage
          onClose={handleCloseAllWorks}
          onSelectProject={(p) => {
            setSelectedProject(p);
          }}
        />
      )}

      {/* ── PROJECT MODAL ── */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}
