import { useState, useEffect, useRef } from "react";

const data = {
  skills: [
    {
      icon: "💻", title: "Languages", color: "text-red-400",
      bg: "bg-red-500/10", border: "border-red-500/20", bar: "from-red-500 to-orange-400",
      tags: ["Python", "Java", "C", "SQL"]
    },
    {
      icon: "🌐", title: "Web Development", color: "text-blue-400",
      bg: "bg-blue-500/10", border: "border-blue-500/20", bar: "from-blue-500 to-cyan-400",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "Tailwind CSS"]
    },
    {
      icon: "🤖", title: "AI & Data Science", color: "text-green-400",
      bg: "bg-green-500/10", border: "border-green-500/20", bar: "from-green-500 to-emerald-300",
      tags: ["Scikit-learn", "Pandas", "NumPy", "Gemini AI", "OpenAI API"]
    },
    {
      icon: "🛠️", title: "Tools", color: "text-purple-400",
      bg: "bg-purple-500/10", border: "border-purple-500/20", bar: "from-purple-500 to-pink-400",
      tags: ["Git", "GitHub", "VS Code", "Vercel", "Render", "Cloudinary"]
    }
  ],
  projects: [
    {
      num: "01", badge: "MERN Stack", badgeClass: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      title: "Smart College Portal",
      desc: "Full-stack role-based academic management for Admin, HOD, Faculty & Students. AI-generated class routines and real-time notifications.",
      stack: ["React.js", "Node.js", "MongoDB", "Socket.IO", "Gemini AI", "JWT", "Tailwind"],
      ongoing: true, github: null, live: null
    },
    {
      num: "02", badge: "GEN AI", badgeClass: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
      title: "DSA Instructor AI",
      desc: "AI-powered DSA tutor that answers only Data Structures & Algorithms questions with code examples. Supports follow-up questions with conversation memory.",
      stack: ["React", "Vite", "Tailwind CSS", "Gemini 2.0 Flash"],
      ongoing: false,
      live: "https://dsa-instructor-sandy.vercel.app/",
      github: "https://github.com/deepsanbui08/Dsa_Instructor"
    },
    {
      num: "03", badge: "MERN Stack", badgeClass: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      title: "Library Management System",
      desc: "Complete library web app with role-based access, book tracking, fine calculation, image uploads and OTP-based authentication.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
      ongoing: false,
      github: "https://github.com/deepsanbui08/Library-Management-System",
      live: "https://library-management-system-frontend-lime-delta.vercel.app/"
    },
    {
      num: "04", badge: "Machine Learning", badgeClass: "bg-green-500/10 text-green-400 border border-green-500/20",
      title: "Healthcare Symptom Checker",
      desc: "ML chatbot that predicts diseases from natural language symptom input using Random Forest with fuzzy matching for typo tolerance.",
      stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      ongoing: false, live: null,
      github: "https://github.com/deepsanbui08/Healthcare_Symptom_Checker_Chatbot",
    },
    {
      num: "05", badge: "Web App", badgeClass: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
      title: "Online Restaurant Booking System",
      desc: "Web app where users can register, log in, and reserve a table at their favourite restaurant. Sends booking confirmation emails automatically.",
      stack: ["Node.js", "Express.js", "EJS", "MongoDB",],
      ongoing: false,
      live: "https://online-restaurant-booking.onrender.com/",
      github: "https://github.com/deepsanbui08/online_restaurant_booking"
    }
  ]
};

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal();

  const dm = dark;

  const handleCVDownload = () => window.open("/Deep_Sanbui_CV.pdf", "_blank");

  return (
    <div className={dm ? "dark" : ""} style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Cabinet+Grotesk:wght@300;400;500;700&display=swap');
        html { scroll-behavior: smooth; }
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        @keyframes drift1 { to { transform: translate(-40px, 40px) scale(1.1); } }
        @keyframes drift2 { to { transform: translate(40px, -30px) scale(1.08); } }
        @keyframes drift3 { to { transform: translate(-20px, 20px) scale(0.95); } }
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.8)} }
        @keyframes colorPulse { 0%,100%{transform:scale(1);opacity:0.6} 50%{transform:scale(1.4);opacity:1} }
        @keyframes spin { to { transform: translateY(-50%) rotate(360deg); } }
        .blob-1 { animation: drift1 12s ease-in-out infinite alternate; }
        .blob-2 { animation: drift2 10s ease-in-out infinite alternate; }
        .blob-3 { animation: drift3 14s ease-in-out infinite alternate; }
        .dot-pulse { animation: pulse 2s infinite; }
        .photo-deco-2 { animation: spin 20s linear infinite; }
        .color-dot { animation: colorPulse 3s ease-in-out infinite; }
        .hero-tag { animation: fadeUp 0.6s ease both; }
        .hero-name { animation: fadeUp 0.6s 0.1s ease both; }
        .hero-role { animation: fadeUp 0.6s 0.2s ease both; }
        .hero-cta { animation: fadeUp 0.6s 0.3s ease both; }
        .hero-right-anim { animation: fadeUp 0.6s 0.25s ease both; }
        .proj-card:hover { transform: translateY(-6px); }
        .proj-card { transition: all 0.3s; }
        .skill-card:hover { transform: translateY(-5px); }
        .skill-card { transition: all 0.3s ease; }
        .skill-card:hover .skill-top-bar { opacity: 1 !important; }
        .skill-top-bar { opacity: 0; transition: opacity 0.3s; }
        .name-font { font-family: 'Clash Display', sans-serif; }
      `}</style>

      {/* GRAIN */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.35]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")` }} />

      <div className={`min-h-screen overflow-x-hidden ${dm ? "bg-[#060608] text-[#ececf0]" : "bg-[#f5f5f0] text-[#1a1a2e]"} transition-colors duration-300`}>

        {/* NAV */}
        <nav className={`fixed top-0 left-0 right-0 z-40 px-16 py-[18px] flex justify-between items-center backdrop-blur-xl border-b transition-colors duration-300 ${dm ? "bg-[#060608]/75 border-white/7" : "bg-[#f5f5f0]/80 border-black/8"}`}>
          <div className="name-font font-bold text-[1.4rem] tracking-tight">
            Deep<span className="text-[#ffbd2e]">.</span>
          </div>
          <ul className="hidden md:flex gap-10 list-none">
            {["about","skills","projects","contact"].map(s => (
              <li key={s}>
                <a href={`#${s}`} className={`text-[0.82rem] tracking-[0.1em] uppercase font-medium transition-colors ${dm ? "text-[#7a7a8e] hover:text-[#ececf0]" : "text-[#7a7a8e] hover:text-[#1a1a2e]"}`}>{s}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            {/* Dark/Light toggle */}
            <button
              onClick={() => setDark(!dm)}
              className={`p-2 rounded-full border transition-all duration-300 text-sm ${dm ? "border-white/10 bg-white/5 hover:bg-white/10 text-yellow-300" : "border-black/10 bg-black/5 hover:bg-black/10 text-slate-600"}`}
              title="Toggle theme"
            >
              {dm ? "☀️" : "🌙"}
            </button>
            <button
              className="flex items-center gap-2 px-5 py-[9px] rounded-full bg-[#ffbd2e] text-[#060608] text-[0.82rem] font-bold tracking-[0.04em] cursor-pointer border-none transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,189,46,0.35)]"
              onClick={handleCVDownload}
            >
              ↓ Download CV
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section id="hero" className="min-h-screen grid md:grid-cols-2 items-center px-16 pt-[120px] pb-20 gap-16 relative overflow-hidden max-md:grid-cols-1 max-md:px-6 max-md:pt-24">
          {/* Blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="blob-1 absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.12] bg-[#ff5f57] -top-[150px] -right-[100px]" />
            <div className="blob-2 absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.12] bg-[#4f8ef7] -bottom-[100px] -left-[120px]" />
            <div className="blob-3 absolute w-[350px] h-[350px] rounded-full blur-[120px] opacity-[0.12] bg-[#bf5af2] top-[35%] left-[35%]" />
          </div>

          <div className="relative z-10">
            <div className={`hero-tag inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.75rem] tracking-[0.08em] uppercase mb-7 border ${dm ? "bg-white/4 border-white/7 text-[#7a7a8e]" : "bg-black/4 border-black/7 text-[#7a7a8e]"}`}>
              <span className="dot-pulse w-1.5 h-1.5 bg-[#28c840] rounded-full inline-block" />
              Open to opportunities
            </div>
            <h1 className="hero-name name-font font-bold leading-none tracking-[-0.04em]" style={{ fontSize: "clamp(3.5rem, 6vw, 5.5rem)" }}>
              <span className="block text-[#ff5f57]">Deep</span>
              <span className="text-[#ffbd2e]">Sanbui</span>
            </h1>
            <p className={`hero-role mt-5 text-base leading-[1.7] max-w-[480px] ${dm ? "text-[#7a7a8e]" : "text-[#7a7a8e]"}`}>
              <strong className={dm ? "text-[#ececf0] font-medium" : "text-[#1a1a2e] font-medium"}>CS Undergraduate</strong> @ Heritage Institute of Technology.<br />
              Building full-stack web apps with the <strong className={dm ? "text-[#ececf0] font-medium" : "text-[#1a1a2e] font-medium"}>MERN stack</strong> and exploring <strong className={dm ? "text-[#ececf0] font-medium" : "text-[#1a1a2e] font-medium"}>Machine Learning</strong> & AI.
            </p>
            <div className="hero-cta mt-10 flex gap-3 flex-wrap">
              <a href="#projects" className="inline-flex items-center gap-2 px-[26px] py-[13px] rounded-full bg-[#ff5f57] text-white text-[0.88rem] font-bold cursor-pointer no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,95,87,0.4)]">View Projects →</a>
              <a href="#contact" className={`inline-flex items-center gap-2 px-[26px] py-[13px] rounded-full text-[0.88rem] font-bold cursor-pointer no-underline transition-all hover:-translate-y-0.5 border ${dm ? "bg-transparent text-[#ececf0] border-white/7 hover:border-white/25" : "bg-transparent text-[#1a1a2e] border-black/10 hover:border-black/25"}`}>Get in Touch</a>
            </div>
          </div>

          {/* PHOTO */}
          <div className="hero-right-anim relative z-10 flex justify-center items-center max-md:order-first">
            <div className="relative w-[340px] h-[400px] max-md:w-[260px] max-md:h-[300px]">
              <div className={`w-full h-full rounded-[28px] overflow-hidden border ${dm ? "border-white/7 bg-[#0e0e14]" : "border-black/8 bg-white"}`}>
                <img
                  src="/Photo.jpg"
                  alt="Deep Sanbui"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="w-full h-full hidden flex-col items-center justify-center gap-4 text-[#7a7a8e]" style={{ background: dm ? "linear-gradient(135deg,#0e0e14,#16161f)" : "linear-gradient(135deg,#f0f0ec,#e8e8e4)" }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl" style={{ background: "linear-gradient(135deg,#ff5f57,#bf5af2)" }}>👤</div>
                  <p className="text-[0.82rem] tracking-[0.06em] uppercase">Add photo.jpg to public folder</p>
                </div>
              </div>
              <div className="photo-deco-1 absolute -top-4 -right-4 w-20 h-20 rounded-[20px] opacity-70 -z-10" style={{ background: "linear-gradient(135deg,#ffbd2e,#ff5f57)" }} />
              <div className="photo-deco-2 absolute -bottom-5 -left-5 w-24 h-24 rounded-full border-2 border-[#4f8ef7] opacity-40 -z-10" style={{ transform: "translateY(0)" }} />
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 flex flex-col gap-2">
                {["#ff5f57","#ffbd2e","#28c840","#4f8ef7","#bf5af2"].map((c, i) => (
                  <div key={i} className="color-dot w-2.5 h-2.5 rounded-full" style={{ background: c, animationDelay: `${i * 0.4}s` }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className={`px-16 py-24 max-md:px-6 transition-colors duration-300 ${dm ? "bg-[#0e0e14]" : "bg-white/60"}`}>
          <div className="reveal" ref={r1} style={{ opacity: 0, transform: "translateY(28px)" }}>
            <div className={`flex items-center gap-3 text-[0.72rem] tracking-[0.15em] uppercase mb-3 before:content-[''] before:w-7 before:h-px ${dm ? "text-[#7a7a8e] before:bg-[#7a7a8e]" : "text-[#9a9aaa] before:bg-[#9a9aaa]"}`}>Who I am</div>
            <h2 className="name-font font-bold tracking-tight mb-16" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)" }}>About Me</h2>
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-20 max-md:grid-cols-1 max-md:gap-10">
              <div>
                {[
                  <>I'm a <strong className={dm ? "text-[#ececf0] font-medium" : "text-[#1a1a2e] font-medium"}>3rd year B.Tech CSE student</strong> at Heritage Institute of Technology, Kolkata, with a GPA of <strong className={dm ? "text-[#ececf0] font-medium" : "text-[#1a1a2e] font-medium"}>9.476/10</strong>. I love turning ideas into working products that solve real problems.</>,
                  <>My primary focus is <strong className={dm ? "text-[#ececf0] font-medium" : "text-[#1a1a2e] font-medium"}>full-stack web development</strong> using the MERN stack — building role-based systems, real-time applications, and production-ready deployments.</>,
                  <>I'm also diving deeper into <strong className={dm ? "text-[#ececf0] font-medium" : "text-[#1a1a2e] font-medium"}>Machine Learning and AI</strong>, integrating smart features into web apps and building standalone ML solutions.</>
                ].map((text, i) => (
                  <p key={i} className={`text-base leading-[1.9] mb-5 ${dm ? "text-[#7a7a8e]" : "text-[#7a7a8e]"}`}>{text}</p>
                ))}
                <div className="flex flex-wrap gap-2.5 mt-8">
                  {[
                    { label: "MERN Stack", cls: "text-[#ff5f57] border-red-500/30 bg-red-500/6" },
                    { label: "Machine Learning", cls: "text-[#4f8ef7] border-blue-500/30 bg-blue-500/6" },
                    { label: "AI Integration", cls: "text-[#28c840] border-green-500/30 bg-green-500/6" },
                    { label: "Open to Work", cls: "text-[#bf5af2] border-purple-500/30 bg-purple-500/6" },
                  ].map(p => (
                    <span key={p.label} className={`px-[18px] py-2 rounded-full text-[0.8rem] font-medium border ${p.cls}`}>{p.label}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { label: "GPA", val: "9.476 / 10", valCls: "text-[#ffbd2e]" },
                  { label: "Degree", val: "B.Tech — CSE", valCls: "" },
                  { label: "Institute", val: "Heritage Institute of Technology, Kolkata", valCls: "" },
                  { label: "Email", val: "deep.sanbui2004@gmail.com", valCls: "text-[0.95rem]" },
                ].map(card => (
                  <div key={card.label} className={`rounded-2xl p-5 border transition-colors hover:border-white/14 ${dm ? "bg-[#060608] border-white/7" : "bg-white border-black/8"}`}>
                    <div className={`text-[0.72rem] tracking-[0.08em] uppercase mb-1.5 ${dm ? "text-[#7a7a8e]" : "text-[#9a9aaa]"}`}>{card.label}</div>
                    <div className={`name-font text-[1.1rem] font-semibold ${card.valCls}`}>{card.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className={`px-16 py-24 max-md:px-6 transition-colors duration-300 ${dm ? "bg-[#060608]" : "bg-[#f5f5f0]"}`}>
          <div className="reveal" ref={r2} style={{ opacity: 0, transform: "translateY(28px)" }}>
            <div className={`flex items-center gap-3 text-[0.72rem] tracking-[0.15em] uppercase mb-3 before:content-[''] before:w-7 before:h-px ${dm ? "text-[#7a7a8e] before:bg-[#7a7a8e]" : "text-[#9a9aaa] before:bg-[#9a9aaa]"}`}>What I work with</div>
            <h2 className="name-font font-bold tracking-tight mb-16" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)" }}>Skills</h2>
            <div className="grid grid-cols-4 gap-5 max-md:grid-cols-2">
              {data.skills.map(s => (
                <div key={s.title} className={`skill-card relative rounded-[20px] p-7 border overflow-hidden ${dm ? `bg-[#0e0e14] border-white/7` : `bg-white border-black/8`}`}>
                  <div className={`skill-top-bar absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${s.bar}`} />
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 ${s.bg}`}>{s.icon}</div>
                  <h3 className={`name-font text-[0.95rem] font-semibold mb-3 ${s.color}`}>{s.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map(t => (
                      <span key={t} className={`text-[0.72rem] px-2.5 py-1 rounded-md border ${dm ? "bg-white/4 text-[#7a7a8e] border-white/7" : "bg-black/4 text-[#9a9aaa] border-black/7"}`}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className={`px-16 py-24 max-md:px-6 transition-colors duration-300 ${dm ? "bg-[#0e0e14]" : "bg-white/60"}`}>
          <div className="reveal" ref={r3} style={{ opacity: 0, transform: "translateY(28px)" }}>
            <div className={`flex items-center gap-3 text-[0.72rem] tracking-[0.15em] uppercase mb-3 before:content-[''] before:w-7 before:h-px ${dm ? "text-[#7a7a8e] before:bg-[#7a7a8e]" : "text-[#9a9aaa] before:bg-[#9a9aaa]"}`}>What I've built</div>
            <h2 className="name-font font-bold tracking-tight mb-16" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)" }}>Projects</h2>
            <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
              {data.projects.map(p => (
                <div key={p.num} className={`proj-card relative rounded-[22px] p-8 border flex flex-col ${dm ? "bg-[#060608] border-white/7 hover:border-white/13" : "bg-white border-black/8 hover:border-black/15"}`}>
                  <div className={`name-font text-[5rem] font-bold opacity-[0.03] absolute top-2 right-5 leading-none pointer-events-none ${dm ? "text-white" : "text-black"}`}>{p.num}</div>
                  <span className={`inline-block text-[0.68rem] px-3 py-1 rounded-full mb-4 font-semibold tracking-[0.06em] uppercase ${p.badgeClass}`}>{p.badge}</span>
                  <h3 className="name-font text-[1.2rem] font-bold mb-3">{p.title}</h3>
                  <p className={`text-[0.86rem] leading-[1.75] mb-5 flex-1 ${dm ? "text-[#7a7a8e]" : "text-[#7a7a8e]"}`}>{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.stack.map(t => (
                      <span key={t} className={`text-[0.72rem] px-2.5 py-1 rounded-md border ${dm ? "bg-white/4 text-[#7a7a8e] border-white/7" : "bg-black/4 text-[#9a9aaa] border-black/7"}`}>{t}</span>
                    ))}
                  </div>
                  {p.ongoing && (
                    <span className="text-[0.75rem] text-[#ff5f57] flex items-center gap-1.5">🚧 Ongoing</span>
                  )}
                  {(p.github || p.live) && (
                    <div className="flex flex-wrap gap-4 mt-1">
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noreferrer"
                          className="inline-flex items-center gap-2 text-[0.82rem] text-[#ffbd2e] font-semibold no-underline transition-all hover:gap-3 w-fit">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                          View On GitHub →
                        </a>
                      )}
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer"
                          className="inline-flex items-center gap-2 text-[0.82rem] text-[#28c840] font-semibold no-underline transition-all hover:gap-3 w-fit">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                          </svg>
                          Live Demo →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className={`px-16 py-24 max-md:px-6 text-center relative overflow-hidden transition-colors duration-300 ${dm ? "bg-[#060608]" : "bg-[#f5f5f0]"}`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,189,46,0.07) 0%, transparent 70%)" }} />
          <div className="reveal" ref={r4} style={{ opacity: 0, transform: "translateY(28px)" }}>
            <div className={`flex items-center justify-center gap-3 text-[0.72rem] tracking-[0.15em] uppercase mb-3 ${dm ? "text-[#7a7a8e]" : "text-[#9a9aaa]"}`}>Let's talk</div>
            <h2 className="name-font font-bold tracking-tight mb-4" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)" }}>Get In Touch</h2>
            <p className={`text-base max-w-[420px] mx-auto mb-12 leading-[1.75] ${dm ? "text-[#7a7a8e]" : "text-[#7a7a8e]"}`}>
              I'm currently seeking opportunities in AI/ML and Full-Stack Development. Feel free to reach out!
            </p>
            <div className="flex justify-center gap-3 flex-wrap relative z-10">
              <a href="mailto:deep.sanbui2004@gmail.com"
                className="inline-flex items-center gap-2 px-[26px] py-[13px] rounded-full bg-[#ffbd2e] text-[#060608] text-[0.86rem] font-bold no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,189,46,0.35)]">
                ✉️ Send Email
              </a>
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/deep-sanbui-699814254" },
                { label: "GitHub", href: "https://github.com/deepsanbui08" },
              ].map(btn => (
                <a key={btn.label} href={btn.href} target="_blank" rel="noreferrer"
                  className={`inline-flex items-center gap-2 px-[26px] py-[13px] rounded-full text-[0.86rem] font-semibold no-underline transition-all hover:-translate-y-0.5 border hover:border-[#ffbd2e] hover:text-[#ffbd2e] ${dm ? "bg-[#0e0e14] text-[#ececf0] border-white/7" : "bg-white text-[#1a1a2e] border-black/8"}`}>
                  {btn.label}
                </a>
              ))}
              <button
                onClick={handleCVDownload}
                className={`inline-flex items-center gap-2 px-[26px] py-[13px] rounded-full text-[0.86rem] font-semibold transition-all hover:-translate-y-0.5 border hover:border-[#ffbd2e] hover:text-[#ffbd2e] cursor-pointer ${dm ? "bg-[#0e0e14] text-[#ececf0] border-white/7" : "bg-white text-[#1a1a2e] border-black/8"}`}>
                ↓ Download CV
              </button>
            </div>
          </div>
        </section>

        <footer className={`text-center px-16 py-7 text-[0.78rem] border-t ${dm ? "border-white/7 text-[#7a7a8e]" : "border-black/8 text-[#9a9aaa]"}`}>
          <p>Designed & built by <strong className={dm ? "text-[#ececf0]" : "text-[#1a1a2e]"}>Deep Sanbui</strong> · 2026</p>
        </footer>

      </div>
    </div>
  );
}