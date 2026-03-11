"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-tag", { y: 16, opacity: 0, duration: 0.7 })
        .from(".hero-title-line", {
          y: 120,
          opacity: 0,
          stagger: 0.1,
          duration: 1.1,
          ease: "power3.out",
        }, "-=0.4")
        .from(".hero-rule", { scaleX: 0, opacity: 0, duration: 0.8, transformOrigin: "left" }, "-=0.6")
        .from(".hero-desc", { y: 24, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-cta-wrap", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-stat", { y: 16, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.6")
        .from(".hero-image-wrap", { scale: 1.06, opacity: 0, duration: 1.4, ease: "power2.out" }, "-=1.2")
        .from(".hero-badge", { scale: 0.7, opacity: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.6");

      // Slow float for image
      gsap.to(".hero-image-inner", {
        y: -18,
        repeat: -1,
        yoyo: true,
        duration: 7,
        ease: "sine.inOut",
      });

      // Badge subtle spin
      gsap.to(".hero-badge-ring", {
        rotation: 360,
        repeat: -1,
        duration: 18,
        ease: "none",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="hero-section"
    >
      {/* ── Background layers ── */}
      <div className="hero-bg" />
      <div className="hero-bg-grain" />
      <div className="hero-bg-vignette" />
      <div className="hero-bg-glow-top" />
      <div className="hero-bg-glow-bottom" />

      {/* ── Decorative vertical text ── */}
      <div className="hero-vertical-text" aria-hidden="true">
        SINCE 2019 · KOLAYI · CAFÉ
      </div>

      {/* ── Main grid ── */}
      <div className="hero-grid">

        {/* LEFT */}
        <div className="hero-left">

          {/* Tag line */}
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            Restaurant &amp; Caterers
          </div>

          {/* Title */}
          <h1 className="hero-title" aria-label="Cafe Kolayi">
            <span className="hero-title-line hero-title-main">Cafe</span>
            <span className="hero-title-line hero-title-accent">Kolayi</span>
          </h1>

          {/* Rule */}
          <div className="hero-rule" />

          {/* Description */}
          <p className="hero-desc">
            A modern café experience built around flavor,<br className="hero-br" />
            atmosphere, and unforgettable moments.
          </p>

          {/* CTAs */}
          <div className="hero-cta-wrap">
            <a href="#menu" className="hero-btn-primary">
              <span>Explore Menu</span>
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#visit" className="hero-btn-outline">Visit Us</a>
          </div>

          {/* Stats row */}
          <div className="hero-stats">
            {[
              { num: "5+", label: "Years of taste" },
              { num: "200+", label: "Menu items" },
              { num: "50k+", label: "Happy guests" },
            ].map((s, i) => (
              <div key={i} className="hero-stat">
                <span className="hero-stat-num">{s.num}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="hero-right">
          <div className="hero-image-wrap">

            {/* Decorative ring behind */}
            <div className="hero-image-ring" />

            <div className="hero-image-inner">
              <Image
                src="/kolayi.png"
                alt="Cafe Kolayi"
                width={560}
                height={560}
                priority
                className="hero-image"
              />
              {/* Overlay shimmer */}
              <div className="hero-image-shimmer" />
            </div>

            {/* Floating badge */}
            <div className="hero-badge">
              <svg className="hero-badge-ring" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M80 10 A70 70 0 1 1 79.99 10"
                  stroke="#c8a96e"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                  fill="none"
                />
                <text fill="#c8a96e" fontSize="10.5" fontFamily="'Cormorant Garamond', serif" letterSpacing="5">
                  <textPath href="#badgePath" startOffset="0%">
                    ARTISAN · CAFÉ · EST. 2019 · KOLAYI ·
                  </textPath>
                </text>
                <defs>
                  <path id="badgePath" d="M80 18 A62 62 0 1 1 79.99 18" />
                </defs>
              </svg>
              <span className="hero-badge-inner">✦</span>
            </div>

            {/* Corner accent card */}
            <div className="hero-card-accent">
              <span className="hero-card-accent-label">Open daily</span>
              <span className="hero-card-accent-time">8 AM – 10 PM</span>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom scroll hint ── */}
      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>

      {/* ── Styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500&display=swap');

        /* ─── Reset / Base ─── */
        .hero-section {
          position: relative;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
          color: #f0ebe3;
        }

        /* ─── Backgrounds ─── */
        .hero-bg {
          position: absolute; inset: 0;
          background: #0c2e22;
        }
        .hero-bg-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.04; mix-blend-mode: overlay;
          pointer-events: none;
        }
        .hero-bg-vignette {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(6,18,13,0.85) 100%);
          pointer-events: none;
        }
        .hero-bg-glow-top {
          position: absolute;
          top: -20%; left: -10%;
          width: 60%; height: 70%;
          background: radial-gradient(ellipse, rgba(30,77,60,0.55) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-bg-glow-bottom {
          position: absolute;
          bottom: -15%; right: -5%;
          width: 55%; height: 60%;
          background: radial-gradient(ellipse, rgba(200,169,110,0.10) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ─── Vertical text ─── */
        .hero-vertical-text {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-family: 'Jost', sans-serif;
          font-size: 9px;
          letter-spacing: 0.45em;
          color: rgba(200,169,110,0.35);
          text-transform: uppercase;
          white-space: nowrap;
          pointer-events: none;
          display: none;
        }
        @media (min-width: 1024px) {
          .hero-vertical-text { display: block; }
        }

        /* ─── Grid ─── */
        .hero-grid {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 7rem 1.5rem 5rem;
        }
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            padding: 7rem 3rem 5rem;
          }
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.15fr 1fr;
            gap: 4rem;
            padding: 8rem 5rem 5rem;
          }
        }

        /* ─── Left content ─── */
        .hero-left {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Tag */
        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: #c8a96e;
          margin-bottom: 1.5rem;
          font-family: 'Jost', sans-serif;
          font-weight: 500;
        }
        .hero-tag-dot {
          display: inline-block;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #c8a96e;
          flex-shrink: 0;
        }

        /* Title */
        .hero-title {
          margin: 0 0 1.5rem;
          line-height: 0.92;
          overflow: hidden;
        }
        .hero-title-line {
          display: block;
          overflow: hidden;
        }
        .hero-title-main {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(4.5rem, 11vw, 9rem);
          color: #f0ebe3;
          letter-spacing: -0.02em;
        }
        .hero-title-accent {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 600;
          font-size: clamp(4.5rem, 11vw, 9rem);
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #c8a96e 0%, #e8d5a0 45%, #c8a96e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Rule */
        .hero-rule {
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, #c8a96e, transparent);
          margin-bottom: 1.5rem;
        }

        /* Description */
        .hero-desc {
          font-family: 'Jost', sans-serif;
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          font-weight: 300;
          line-height: 1.75;
          color: rgba(240,235,227,0.65);
          margin-bottom: 2.25rem;
        }
        .hero-br { display: none; }
        @media (min-width: 1024px) { .hero-br { display: block; } }

        /* CTAs */
        .hero-cta-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #c8a96e 0%, #b8924f 100%);
          color: #0c2e22;
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 2px;
          transition: opacity 0.25s, transform 0.25s, box-shadow 0.25s;
          box-shadow: 0 8px 30px rgba(200,169,110,0.25);
        }
        .hero-btn-primary svg {
          width: 18px; height: 18px;
          transition: transform 0.25s;
        }
        .hero-btn-primary:hover {
          opacity: 0.9;
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(200,169,110,0.35);
        }
        .hero-btn-primary:hover svg { transform: translateX(4px); }
        .hero-btn-outline {
          display: inline-flex;
          align-items: center;
          padding: 14px 28px;
          border: 1px solid rgba(200,169,110,0.45);
          color: #c8a96e;
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 2px;
          transition: border-color 0.25s, background 0.25s, transform 0.25s;
        }
        .hero-btn-outline:hover {
          background: rgba(200,169,110,0.08);
          border-color: rgba(200,169,110,0.8);
          transform: translateY(-2px);
        }

        /* Stats */
        .hero-stats {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .hero-stat {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .hero-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          font-weight: 300;
          color: #c8a96e;
          line-height: 1;
        }
        .hero-stat-label {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(240,235,227,0.45);
          font-weight: 400;
        }

        /* ─── Right / Image ─── */
        .hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-image-wrap {
          position: relative;
          width: min(440px, 90vw);
          aspect-ratio: 1;
        }
        .hero-image-ring {
          position: absolute;
          inset: -14%;
          border-radius: 50%;
          border: 1px solid rgba(200,169,110,0.12);
        }
        .hero-image-inner {
          position: relative;
          width: 100%;
          height: 100%;
          will-change: transform;
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          box-shadow:
            0 0 0 1px rgba(200,169,110,0.15),
            0 30px 80px rgba(0,0,0,0.6),
            0 60px 120px rgba(0,0,0,0.35);
        }
        .hero-image-shimmer {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.06) 0%,
            transparent 50%
          );
          pointer-events: none;
        }

        /* Badge */
        .hero-badge {
          position: absolute;
          bottom: -5%;
          right: -8%;
          width: 110px; height: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-badge-ring {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
        }
        .hero-badge-inner {
          font-size: 22px;
          color: #c8a96e;
          z-index: 2;
          position: relative;
        }

        /* Corner accent */
        .hero-card-accent {
          position: absolute;
          top: -5%;
          left: -8%;
          background: rgba(15,40,28,0.85);
          border: 1px solid rgba(200,169,110,0.2);
          backdrop-filter: blur(12px);
          padding: 12px 18px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .hero-card-accent-label {
          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(200,169,110,0.7);
        }
        .hero-card-accent-time {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-weight: 300;
          color: #f0ebe3;
        }

        /* ─── Scroll hint ─── */
        .hero-scroll-hint {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 10;
        }
        .hero-scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(180deg, rgba(200,169,110,0.7), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        .hero-scroll-hint span {
          font-size: 9px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(200,169,110,0.5);
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }

        /* ─── Mobile adjustments ─── */
        @media (max-width: 767px) {
          .hero-right { order: -1; }
          .hero-image-wrap { width: min(320px, 85vw); }
          .hero-stats { gap: 1.25rem; }
          .hero-badge { bottom: -8%; right: -4%; width: 88px; height: 88px; }
          .hero-card-accent { top: -6%; left: -4%; padding: 10px 14px; }
          .hero-card-accent-time { font-size: 0.95rem; }
          .hero-scroll-hint { display: none; }
        }
      `}</style>
    </section>
  );
}