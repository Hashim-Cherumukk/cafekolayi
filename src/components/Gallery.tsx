"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: "top 78%" };

      gsap.from(".gl-header-line", {
        y: 80, opacity: 0, stagger: 0.08, duration: 1.1, ease: "power3.out",
        scrollTrigger: st,
      });
      gsap.from(".gl-sub", {
        y: 20, opacity: 0, duration: 0.8,
        scrollTrigger: { ...st, start: "top 73%" },
      });

      // Staggered reveal per card
      gsap.from(".gl-card", {
        opacity: 0, y: 50, scale: 0.97,
        stagger: { amount: 0.8, from: "start" },
        duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".gl-grid", start: "top 82%" },
      });

      // Parallax on tall images
      gsap.utils.toArray<HTMLElement>(".gl-img-para").forEach((img) => {
        gsap.to(img, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: img.closest(".gl-card")!,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const photos = [
    { src: "/image1.webp", span: "gl-card--tall", label: "Interiors" },
    { src: "/image2.webp", span: "gl-card--wide", label: "The Bar" },
    { src: "/image3.webp", span: "gl-card--sq",   label: "Our Coffee" },
  ];

  const videos = [
    { src: "/kolayi1.mp4", label: "Crafted with care" },
    { src: "/kolayi2.mp4", label: "Every detail" },
    { src: "/kolayi3.mp4", label: "Come as you are" },
  ];

  return (
    <section id="gallery" ref={sectionRef} className="gl-section">

      <div className="gl-bg" />
      <div className="gl-bg-grain" />
      <div className="gl-bg-glow" />

      <div className="gl-inner">

        {/* ── Header ── */}
        <div className="gl-header">
          <div className="gl-header-left">
            <p className="gl-eyebrow">
              <span className="gl-eyebrow-line" />
              The Space
            </p>
            <h2 className="gl-title">
              {["Cafe", "Moments"].map((w, i) => (
                <span key={i} className={`gl-header-line ${i === 1 ? "gl-title-accent" : ""}`}>{w}</span>
              ))}
            </h2>
          </div>
          <p className="gl-sub">
            A glimpse into the atmosphere,<br />
            food and experiences at Kolayi.
          </p>
        </div>

        {/* ── Main grid ── */}
        <div className="gl-grid">

          {/* Photo 1 — tall left */}
          <div className="gl-card gl-card--p1">
            <div className="gl-card-inner">
              <img src="/image1.webp" alt="Cafe interiors" className="gl-img gl-img-para" />
              <div className="gl-card-overlay" />
              <span className="gl-card-label">Interiors</span>
            </div>
          </div>

          {/* Photo 2 — top right */}
          <div className="gl-card gl-card--p2">
            <div className="gl-card-inner">
              <img src="/image2.webp" alt="The bar" className="gl-img gl-img-para" />
              <div className="gl-card-overlay" />
              <span className="gl-card-label">The Bar</span>
            </div>
          </div>

          {/* Photo 3 — mid right */}
          <div className="gl-card gl-card--p3">
            <div className="gl-card-inner">
              <img src="/image3.webp" alt="Our coffee" className="gl-img gl-img-para" />
              <div className="gl-card-overlay" />
              <span className="gl-card-label">Our Coffee</span>
            </div>
          </div>

          {/* Videos */}
          {videos.map((v, i) => (
            <div key={i} className={`gl-card gl-card--v${i + 1}`}>
              <div className="gl-card-inner">
                <video
                  src={v.src}
                  autoPlay muted loop playsInline
                  className="gl-img"
                />
                <div className="gl-card-overlay" />
                <span className="gl-card-label">{v.label}</span>
                <span className="gl-card-reel">▶ Reel</span>
              </div>
            </div>
          ))}

        </div>

        {/* ── Bottom strip ── */}
        <div className="gl-strip">
          <span className="gl-strip-text">Cafe Kolayi · Restaurant & Caterers · Est. 2019 · Melmuri · Malappuram · Kerala · India ·&nbsp;</span>
          <span className="gl-strip-text" aria-hidden="true">Cafe Kolayi · Restaurant & Caterers · Est. 2019 · Melmuri · Malappuram · Kerala · India ·  &nbsp;</span>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,600&family=Jost:wght@300;400;500&display=swap');

        /* Section */
        .gl-section {
          position: relative;
          padding: 7rem 1.5rem 0;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
        }
        @media (min-width: 768px)  { .gl-section { padding: 8rem 3rem 0; } }
        @media (min-width: 1024px) { .gl-section { padding: 10rem 5rem 0; } }

        /* Backgrounds */
        .gl-bg { position: absolute; inset: 0; background: #091b12; }
        .gl-bg-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.035; pointer-events: none;
        }
        .gl-bg-glow {
          position: absolute; top: 0; right: 0;
          width: 50%; height: 50%;
          background: radial-gradient(ellipse at top right, rgba(30,77,60,0.4) 0%, transparent 65%);
          pointer-events: none;
        }

        /* Inner */
        .gl-inner {
          position: relative; z-index: 10;
          max-width: 1280px; margin: 0 auto;
          display: flex; flex-direction: column; gap: 3.5rem;
        }

        /* Header */
        .gl-header {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .gl-header {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
          }
        }
        .gl-eyebrow {
          display: flex; align-items: center; gap: 12px;
          font-size: 10px; letter-spacing: 0.35em; text-transform: uppercase;
          color: #c8a96e; font-weight: 500; margin-bottom: 0.75rem;
        }
        .gl-eyebrow-line {
          display: inline-block; width: 28px; height: 1px;
          background: #c8a96e; flex-shrink: 0;
        }
        .gl-title {
          display: flex; flex-direction: row; align-items: baseline; gap: 0.5rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 300; line-height: 1;
          color: #f0ebe3; margin: 0;
        }
        .gl-header-line { overflow: hidden; display: block; }
        .gl-title-accent {
          font-style: italic; font-weight: 600;
          background: linear-gradient(135deg, #c8a96e, #e8d5a0 50%, #c8a96e);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .gl-sub {
          font-size: clamp(0.9rem, 1.8vw, 1rem);
          font-weight: 300; line-height: 1.75;
          color: rgba(240,235,227,0.5);
          max-width: 260px;
        }
        @media (max-width: 767px) { .gl-sub { max-width: 100%; } }

        /* ── GRID ── */
        .gl-grid {
          display: grid;
          gap: 12px;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
        }
        @media (min-width: 768px) {
          .gl-grid {
            grid-template-columns: 1.2fr 1fr 1fr 1fr;
            grid-template-rows: 280px 280px;
            gap: 14px;
          }
        }
        @media (min-width: 1024px) {
          .gl-grid {
            grid-template-rows: 320px 320px;
            gap: 16px;
          }
        }

        /* Card base */
        .gl-card {
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }
        .gl-card-inner {
          position: relative;
          width: 100%; height: 100%;
          overflow: hidden;
          border-radius: 16px;
        }
        .gl-img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.7s ease;
          will-change: transform;
        }
        .gl-card:hover .gl-img { transform: scale(1.05); }
        .gl-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(6,16,11,0.65) 0%, transparent 55%);
          pointer-events: none;
          transition: opacity 0.3s;
        }
        .gl-card:hover .gl-card-overlay { opacity: 0.7; }
        .gl-card-label {
          position: absolute; bottom: 14px; left: 16px;
          font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(240,235,227,0.75); font-weight: 400;
          transition: color 0.3s;
        }
        .gl-card:hover .gl-card-label { color: #c8a96e; }
        .gl-card-reel {
          position: absolute; top: 14px; right: 14px;
          font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(200,169,110,0.8);
          background: rgba(8,22,16,0.7);
          border: 1px solid rgba(200,169,110,0.2);
          backdrop-filter: blur(8px);
          padding: 4px 10px; border-radius: 999px;
        }

        /* Photo placements — desktop */
        @media (min-width: 768px) {
          .gl-card--p1 { grid-column: 1; grid-row: 1 / 3; } /* tall left */
          .gl-card--p2 { grid-column: 2; grid-row: 1; }
          .gl-card--p3 { grid-column: 3; grid-row: 1; }
          .gl-card--v1 { grid-column: 2; grid-row: 2; }
          .gl-card--v2 { grid-column: 3; grid-row: 2; }
          .gl-card--v3 { grid-column: 4; grid-row: 1 / 3; } /* tall right video */
        }

        /* Mobile fallback — all stacked 2-col */
        @media (max-width: 767px) {
          .gl-card { aspect-ratio: 1; }
          .gl-card--p1 { grid-column: 1 / 3; aspect-ratio: 16/9; }
          .gl-card--v3 { grid-column: 1 / 3; aspect-ratio: 16/9; }
        }

        /* ── Scrolling strip ── */
        .gl-strip {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
          border-top: 1px solid rgba(200,169,110,0.1);
          padding: 1.25rem 0;
          margin-top: 0.5rem;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .gl-strip-text {
          display: inline-block;
          font-size: 10px; letter-spacing: 0.32em; text-transform: uppercase;
          color: rgba(200,169,110,0.35); font-weight: 400;
          animation: stripScroll 18s linear infinite;
          padding-right: 2rem;
        }
        @keyframes stripScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}