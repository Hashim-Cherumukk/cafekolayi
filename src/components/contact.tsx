"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: "top 75%" };

      gsap.from(".ct-eyebrow", { y: 16, opacity: 0, duration: 0.7, scrollTrigger: st });
      gsap.from(".ct-title-line", { y: 80, opacity: 0, stagger: 0.09, duration: 1.1, ease: "power3.out", scrollTrigger: st });
      gsap.from(".ct-sub",  { y: 20, opacity: 0, duration: 0.8, scrollTrigger: { ...st, start: "top 72%" } });
      gsap.from(".ct-card", { y: 30, opacity: 0, stagger: 0.12, duration: 0.8, ease: "power2.out", scrollTrigger: { ...st, start: "top 68%" } });
      gsap.from(".ct-map-wrap", { scale: 0.97, opacity: 0, duration: 1.2, ease: "power2.out", scrollTrigger: { ...st, start: "top 65%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const details = [
    {
      label: "Location",
      icon: "◎",
      primary: "Kolayi, Malappuram",
      sub: null,
      link: { href: "https://maps.google.com/?q=kolayi+malappuram", text: "Get directions →", external: true },
    },
    {
      label: "Phone",
      icon: "◈",
      primary: "+91 94970 02105",
      sub: null,
      link: { href: "tel:+919497002105", text: "Call now →", external: false },
    },
    {
      label: "Hours",
      icon: "◷",
      primary: "10 AM – 11 PM",
      sub: "Open every day",
      link: null,
    },
    {
      label: "Instagram",
      icon: "✦",
      primary: "@cafekolayi",
      sub: null,
      link: { href: "https://instagram.com/cafekolayi", text: "Follow us →", external: true },
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="ct-section">

      <div className="ct-bg" />
      <div className="ct-bg-grain" />
      <div className="ct-bg-glow-tl" />
      <div className="ct-bg-glow-br" />

      <div className="ct-inner">

        {/* ── Header row ── */}
        <div className="ct-header">
          <div className="ct-header-left">
            <p className="ct-eyebrow">
              <span className="ct-eyebrow-line" />
              Find Us
            </p>
            <h2 className="ct-title">
              {["Come", "Visit Us"].map((w, i) => (
                <span key={i} className={`ct-title-line ${i === 1 ? "ct-title-accent" : ""}`}>{w}</span>
              ))}
            </h2>
          </div>
          <p className="ct-sub">
            Whether you're stopping by for coffee<br className="ct-br" />
            or planning a special occasion,<br className="ct-br" />
            we're always happy to welcome you.
          </p>
        </div>

        {/* ── Main layout ── */}
        <div className="ct-body">

          {/* Detail cards */}
          <div className="ct-cards">
            {details.map((d, i) => (
              <div key={i} className="ct-card">
                <div className="ct-card-top">
                  <span className="ct-card-icon">{d.icon}</span>
                  <span className="ct-card-label">{d.label}</span>
                </div>
                <p className="ct-card-primary">{d.primary}</p>
                {d.sub && <p className="ct-card-sub">{d.sub}</p>}
                {d.link && (
                  <a
                    href={d.link.href}
                    target={d.link.external ? "_blank" : undefined}
                    rel={d.link.external ? "noopener noreferrer" : undefined}
                    className="ct-card-link"
                  >
                    {d.link.text}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="ct-map-wrap">
            <div className="ct-map-border" />
            <div className="ct-map-frame">
              <iframe
                src="https://maps.google.com/maps?q=kolayi%20malappuram&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Cafe Kolayi location"
              />
            </div>
            {/* Overlay badge */}
            <div className="ct-map-badge">
              <span className="ct-map-badge-dot" />
              <span>Melmuri, Malappuram</span>
            </div>
          </div>

        </div>


      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=Jost:wght@300;400;500&display=swap');

        /* Section */
        .ct-section {
          position: relative;
          padding: 8rem 1.5rem 0;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
        }
        @media (min-width: 768px)  { .ct-section { padding: 9rem 3rem 0; } }
        @media (min-width: 1024px) { .ct-section { padding: 10rem 5rem 0; } }

        /* Backgrounds */
        .ct-bg { position: absolute; inset: 0; background: #091b12; }
        .ct-bg-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.035; pointer-events: none;
        }
        .ct-bg-glow-tl {
          position: absolute; top: -10%; left: -10%;
          width: 50%; height: 60%;
          background: radial-gradient(ellipse, rgba(30,77,60,0.45) 0%, transparent 70%);
          pointer-events: none;
        }
        .ct-bg-glow-br {
          position: absolute; bottom: 10%; right: -5%;
          width: 40%; height: 50%;
          background: radial-gradient(ellipse, rgba(200,169,110,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Inner */
        .ct-inner {
          position: relative; z-index: 10;
          max-width: 1200px; margin: 0 auto;
          display: flex; flex-direction: column; gap: 4rem;
        }

        /* Header */
        .ct-header {
          display: flex; flex-direction: column; gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .ct-header { flex-direction: row; align-items: flex-end; justify-content: space-between; }
        }
        .ct-eyebrow {
          display: flex; align-items: center; gap: 12px;
          font-size: 10px; letter-spacing: 0.35em; text-transform: uppercase;
          color: #c8a96e; font-weight: 500; margin-bottom: 0.75rem;
        }
        .ct-eyebrow-line {
          display: inline-block; width: 28px; height: 1px;
          background: #c8a96e; flex-shrink: 0;
        }
        .ct-title {
          display: flex; flex-direction: column;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 300; line-height: 0.98;
          color: #f0ebe3; margin: 0;
        }
        .ct-title-line { display: block; overflow: hidden; }
        .ct-title-accent {
          font-style: italic; font-weight: 600;
          background: linear-gradient(135deg, #c8a96e, #e8d5a0 50%, #c8a96e);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .ct-sub {
          font-size: clamp(0.9rem, 1.8vw, 1rem);
          font-weight: 300; line-height: 1.8;
          color: rgba(240,235,227,0.5);
          max-width: 280px;
        }
        @media (max-width: 767px) { .ct-sub { max-width: 100%; } }
        .ct-br { display: none; }
        @media (min-width: 768px) { .ct-br { display: block; } }

        /* Body */
        .ct-body {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .ct-body {
            grid-template-columns: 1fr 1.4fr;
            gap: 3rem;
            align-items: start;
          }
        }

        /* Detail cards grid */
        .ct-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .ct-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(200,169,110,0.1);
          border-radius: 14px;
          padding: 20px 18px;
          display: flex; flex-direction: column; gap: 6px;
          transition: border-color 0.3s, background 0.3s;
        }
        .ct-card:hover {
          border-color: rgba(200,169,110,0.22);
          background: rgba(200,169,110,0.04);
        }
        .ct-card-top {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 4px;
        }
        .ct-card-icon {
          font-size: 14px; color: #c8a96e;
        }
        .ct-card-label {
          font-size: 9px; letter-spacing: 0.28em; text-transform: uppercase;
          color: rgba(200,169,110,0.6); font-weight: 500;
        }
        .ct-card-primary {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.1rem, 2.5vw, 1.35rem);
          font-weight: 300; color: #f0ebe3; line-height: 1.2;
          margin: 0;
        }
        .ct-card-sub {
          font-size: 10.5px; color: rgba(240,235,227,0.38);
          letter-spacing: 0.06em; margin: 0;
        }
        .ct-card-link {
          font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
          color: #c8a96e; text-decoration: none; font-weight: 500;
          margin-top: 4px;
          transition: letter-spacing 0.25s;
          width: fit-content;
        }
        .ct-card-link:hover { letter-spacing: 0.26em; }

        /* Map */
        .ct-map-wrap {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
        }
        .ct-map-border {
          position: absolute; inset: 0;
          border-radius: 18px;
          border: 1px solid rgba(200,169,110,0.15);
          z-index: 10; pointer-events: none;
        }
        .ct-map-frame {
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 18px;
          overflow: hidden;
          filter: grayscale(0.3) contrast(1.05);
        }
        @media (min-width: 768px) {
          .ct-map-frame { aspect-ratio: unset; height: 420px; }
        }
        .ct-map-frame iframe {
          width: 100%; height: 100%; display: block;
        }
        .ct-map-badge {
          position: absolute; bottom: 16px; left: 16px; z-index: 20;
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
          color: #f0ebe3; font-weight: 400;
          background: rgba(8,22,16,0.82);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(200,169,110,0.18);
          padding: 7px 14px; border-radius: 999px;
        }
        .ct-map-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #c8a96e;
          box-shadow: 0 0 8px rgba(200,169,110,0.8);
          animation: mapPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes mapPulse {
          0%,100% { opacity: 1; } 50% { opacity: 0.35; }
        }

        /* Footer */
        .ct-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 2.5rem 0 2.5rem;
          border-top: 1px solid rgba(200,169,110,0.1);
          text-align: center;
        }
        @media (min-width: 768px) {
          .ct-footer {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }
        .ct-footer-brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem; font-weight: 300;
          color: #f0ebe3; margin: 0;
        }
        .ct-footer-brand span { color: #c8a96e; }
        .ct-footer-copy {
          font-size: 10px; letter-spacing: 0.1em;
          color: rgba(240,235,227,0.3); margin: 0;
        }
        .ct-footer-links {
          display: flex; align-items: center; gap: 10px;
        }
        .ct-footer-link {
          font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(240,235,227,0.4); text-decoration: none;
          transition: color 0.25s;
        }
        .ct-footer-link:hover { color: #c8a96e; }
        .ct-footer-sep { color: rgba(200,169,110,0.3); font-size: 10px; }

        /* Mobile */
        @media (max-width: 767px) {
          .ct-cards { grid-template-columns: 1fr 1fr; gap: 10px; }
          .ct-card { padding: 16px 14px; }
          .ct-card-primary { font-size: 1rem; }
        }
      `}</style>
    </section>
  );
}