"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const roles = [
  "Frontend Developer",
  "UI Craftsman",
  "Fullstack Innovator",
  "UI/UX Designer",
  "WordPress Developer"
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/NJWILD",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/joshua-njoku-9524b9369",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:njokujoshua571@gmail.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [stars, setStars] = useState([]);

  // Typewriter effect
  useEffect(() => {
    const target = roles[roleIdx];
    let timeout;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(
        () => setDisplayed(target.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  // Generate stars once (client-side)
  useEffect(() => {
    const s = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 2,
    }));
    setStars(s);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-lines"
    >
      {/* Gradient orbs */}
      <div
        className="orb w-[600px] h-[600px] bg-gold/8 -top-40 -right-40 animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="orb w-[400px] h-[400px] bg-amber-900/15 bottom-0 -left-20 animate-float"
        style={{ animationDelay: "-2s" }}
      />
      <div
        className="orb w-[300px] h-[300px] bg-gold/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ filter: "blur(120px)" }}
      />

      {/* Stars */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-gold/30"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            animation: `pulse ${s.duration}s ${s.delay}s ease-in-out infinite`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left Content ── */}
          <div>
            {/* Label */}
            <div
              className="section-label mb-8 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Available for Opportunities
            </div>

            {/* Name */}
            <h1
              className="mb-4 leading-none"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            >
              <span
                className="block text-white/90 animate-fade-up"
                style={{
                  fontSize: "clamp(3rem, 6vw, 5.5rem)",
                  animationDelay: "0.3s",
                }}
              >
                Njoku
              </span>
              <span
                className="block gold-clip font-semibold animate-fade-up"
                style={{
                  fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
                  animationDelay: "0.4s",
                }}
              >
                Joshua
              </span>
           
            </h1>

            {/* Typewriter */}
            <div
              className="flex items-center gap-2 mb-6 animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              <span
                className="text-white/40 text-lg"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                I am a
              </span>
              <span
                className="text-gold text-xl font-semibold"
                style={{ fontFamily: "var(--font-syne)", minWidth: "240px" }}
              >
                {displayed}
                <span className="type-cursor" />
              </span>
            </div>

            {/* Bio */}
            <p
              className="text-white/50 leading-relaxed mb-10 max-w-lg animate-fade-up"
              style={{
                fontSize: "1rem",
                animationDelay: "0.7s",
                fontFamily: "var(--font-syne)",
              }}
            >
              Self-taught developer crafting pixel-perfect, blazing-fast web
              experiences. 4+ years building with{" "}
              <span className="text-gold/80">React</span>,{" "}
              <span className="text-gold/80">Tailwind CSS</span> &{" "}
              <span className="text-gold/80">Firebase</span>. Currently{" "}
              <span className="text-white/70">@ Hyperbird Technologies</span> &{" "}
              Co-Founding a student e-commerce platform at FUTO.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 mb-12 animate-fade-up"
              style={{ animationDelay: "0.8s" }}
            >
              <a
                href="#projects"
                className="btn-gold"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="btn-ghost"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Let's Connect
              </a>
              <a
                href="/NJOKU_JOSHUA_UCHENNA_FlowCV_Resume_2026-04-10.pdf"
                download
                className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-sm"
                style={{
                  fontFamily: "var(--font-syne)",
                  letterSpacing: "0.08em",
                  alignSelf: "center",
                  padding: "14px 0",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div
              className="flex items-center gap-6 animate-fade-up"
              style={{ animationDelay: "0.9s" }}
            >
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/30 hover:text-gold transition-all duration-300 hover:-translate-y-1"
                >
                  {s.icon}
                </a>
              ))}
              <div className="ml-2 w-px h-6 bg-white/10" />
              <span
                className="text-white/30 text-xs"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Owerri / Remote
              </span>
            </div>
          </div>

          {/* ── Right: Profile Image ── */}
          <div
            className="flex justify-center lg:justify-end animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="relative">
              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-full border border-gold/20 animate-spin-slow"
                style={{ inset: "-24px", borderStyle: "dashed" }}
              />
              {/* Second ring */}
              <div
                className="absolute rounded-full border border-gold/10"
                style={{ inset: "-12px" }}
              />

              {/* Profile Frame */}
              <div
                className="profile-frame relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-full overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #1a1d24, #252830)",
                }}
              >
                {/* Replace src with your actual photo path: /your-photo.jpg */}
                <Image
                  src="/images/Joshua's img.jpeg"
                  alt="Njoku Joshua Uchenna - Frontend Developer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 300px, 360px"
                  onError={(e) => {
                    // Fallback if image not found
                    e.target.style.display = "none";
                  }}
                />

                {/* Inner glow */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ boxShadow: "inset 0 0 60px rgba(229,168,37,0.1)" }}
                />
              </div>

              {/* Floating badges */}
              <div
                className="floating-badge absolute -left-10 top-10 bg-charcoal border border-gold/20 px-4 py-3 rounded-lg shadow-gold-sm hidden sm:block"
                style={{ minWidth: "130px" }}
              >
                <div
                  className="text-gold text-xl font-bold"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  4+
                </div>
                <div
                  className="text-white/50 text-xs"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Years Experience
                </div>
              </div>

              <div
                className="floating-badge absolute -right-6 bottom-16 bg-charcoal border border-gold/20 px-4 py-3 rounded-lg shadow-gold-sm hidden sm:block"
                style={{ minWidth: "130px", animationDelay: "-2s" }}
              >
                <div
                  className="text-gold text-xl font-bold"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  10+
                </div>
                <div
                  className="text-white/50 text-xs"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Projects Built
                </div>
              </div>

              <div
                className="floating-badge absolute -right-4 top-6 bg-charcoal border border-gold/20 px-4 py-3 rounded-lg shadow-gold-sm hidden lg:block"
                style={{ animationDelay: "-1s" }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span
                    className="text-white/60 text-xs"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Open to Work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/25">
            <span
              className="text-xs tracking-widest uppercase"
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: "0.65rem",
              }}
            >
              Scroll
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
