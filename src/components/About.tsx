"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: "top 72%" };

      gsap.from(".ab-eyebrow", { y: 20, opacity: 0, duration: 0.7, scrollTrigger: st });
      gsap.from(".ab-title-line", { y: 90, opacity: 0, stagger: 0.09, duration: 1.1, ease: "power3.out", scrollTrigger: st });
      gsap.from(".ab-rule", { scaleX: 0, opacity: 0, duration: 0.8, ease: "power2.out", transformOrigin: "left", scrollTrigger: st });
      gsap.from(".ab-text", { y: 30, opacity: 0, stagger: 0.18, duration: 0.9, scrollTrigger: { ...st, start: "top 68%" } });
      gsap.from(".ab-pill", { y: 16, opacity: 0, stagger: 0.1, duration: 0.7, scrollTrigger: { ...st, start: "top 65%" } });
      gsap.from(".ab-img-main", { scale: 1.06, opacity: 0, duration: 1.4, ease: "power2.out", scrollTrigger: st });
      gsap.from(".ab-img-float", { y: 30, opacity: 0, duration: 1, ease: "power2.out", scrollTrigger: { ...st, start: "top 60%" } });
      gsap.from(".ab-number", { y: 24, opacity: 0, stagger: 0.12, duration: 0.8, scrollTrigger: { ...st, start: "top 65%" } });

      // Subtle float on the secondary image
      gsap.to(".ab-img-float", {
        y: -12,
        repeat: -1,
        yoyo: true,
        duration: 5.5,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="ab-section">

      {/* Background */}
      <div className="ab-bg" />
      <div className="ab-bg-grain" />
      <div className="ab-bg-glow" />

      <div className="ab-container">

        {/* ── LEFT: Images + Numbers ── */}
        <div className="ab-visual">

          {/* Main image */}
          <div className="ab-img-main-wrap">
            <div className="ab-img-main-glow" />
            <img
              src="/image2.webp"
              alt="Inside Cafe Kolayi"
              className="ab-img-main"
            />
            <div className="ab-img-main-shimmer" />
          </div>

          {/* Floating secondary image */}
          <div className="ab-img-float-wrap">
            <img
              src="/kolayi.png"
              alt="Coffee at Kolayi"
              className="ab-img-float"
            />
            <div className="ab-img-float-border" />
          </div>

          {/* Numbers strip */}
          <div className="ab-numbers">
            {[
              { num: "5+", label: "Years" },
              { num: "200+", label: "Dishes" },
              { num: "50k+", label: "Guests" },
            ].map((s, i) => (
              <div key={i} className="ab-number">
                <span className="ab-number-val">{s.num}</span>
                <span className="ab-number-label">{s.label}</span>
              </div>
            ))}
          </div>

        </div>

        {/* ── RIGHT: Text ── */}
        <div className="ab-content">

<p className="ab-eyebrow">
  <span className="ab-eyebrow-line" />
  About Cafe Kolayi
</p>

<h2 className="ab-title">
  {[
    "A place for food,",
    "coffee and",
    "great moments",
    "together."
  ].map((line, i) => (
    <span key={i} className={`ab-title-line ${i === 3 ? "ab-title-accent" : ""}`}>
      {line}
    </span>
  ))}
</h2>

<div className="ab-rule" />

<p className="ab-text">
  Cafe Kolayi is a popular café and restaurant in Malappuram known
  for its relaxed atmosphere, delicious food and welcoming space.
  It’s a place where friends, families and students gather to
  enjoy good meals and meaningful conversations.
</p>

<p className="ab-text">
  From flavorful snacks and signature dishes to refreshing drinks
  and evening tea, Cafe Kolayi offers a menu that brings together
  comfort food and café culture. With its cozy ambience and
  hilltop surroundings, it has become a favorite hangout spot
  for many visitors.
</p>

{/* Attribute pills */}
<div className="ab-pills">
  {[
    "Cafe & Restaurant",
    "Signature Dishes",
    "Evening Hangout",
    "Catering Services"
  ].map((tag) => (
    <span key={tag} className="ab-pill">{tag}</span>
  ))}
</div>

<a href="#contact" className="ab-cta">
  Contact us <span>→</span>
</a>

        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,600&family=Jost:wght@300;400;500&display=swap');

        /* ── Section ── */
        .ab-section {
          position: relative;
          padding: 7rem 1.5rem;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
        }
        @media (min-width: 768px) { .ab-section { padding: 8rem 3rem; } }
        @media (min-width: 1024px) { .ab-section { padding: 10rem 5rem; } }

        /* ── Backgrounds ── */
        .ab-bg {
          position: absolute; inset: 0;
          background: #0a1f17;
        }
        .ab-bg-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.035; pointer-events: none;
        }
        .ab-bg-glow {
          position: absolute;
          top: 10%; right: -10%;
          width: 55%; height: 70%;
          background: radial-gradient(ellipse, rgba(30,77,60,0.4) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Layout ── */
        .ab-container {
          position: relative; z-index: 10;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .ab-container {
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
          }
        }
        @media (min-width: 1024px) {
          .ab-container {
            grid-template-columns: 1.05fr 1fr;
            gap: 6rem;
          }
        }

        /* ── Visual / Images ── */
        .ab-visual {
          position: relative;
          min-height: 480px;
        }

        /* Main image */
        .ab-img-main-wrap {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
        }
        .ab-img-main-glow {
          position: absolute; inset: 0;
          background: radial-gradient(circle at 30% 40%, rgba(200,169,110,0.08), transparent 70%);
          z-index: 1; pointer-events: none;
        }
        .ab-img-main {
          width: 100%; height: 480px;
          object-fit: cover;
          display: block;
          border-radius: 18px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(200,169,110,0.1);
        }
        @media (min-width: 768px) { .ab-img-main { height: 520px; } }
        .ab-img-main-shimmer {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%);
          border-radius: 18px; pointer-events: none; z-index: 2;
        }

        /* Floating small image */
        .ab-img-float-wrap {
          position: absolute;
          bottom: 80px; right: -24px;
          width: 160px; height: 160px;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.65), 0 0 0 1px rgba(200,169,110,0.18);
          z-index: 20;
        }
        @media (min-width: 768px) {
          .ab-img-float-wrap { right: -32px; width: 180px; height: 180px; }
        }
        .ab-img-float {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
        }
        .ab-img-float-border {
          position: absolute; inset: 0;
          border-radius: 14px;
          border: 1px solid rgba(200,169,110,0.2);
          pointer-events: none;
        }

        /* Numbers */
        .ab-numbers {
          position: absolute;
          top: 28px; left: -16px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: rgba(8,22,16,0.88);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(200,169,110,0.14);
          border-radius: 12px;
          padding: 18px 20px;
          z-index: 20;
        }
        @media (min-width: 768px) { .ab-numbers { left: -24px; } }
        .ab-number {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .ab-number-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 300;
          color: #c8a96e;
          line-height: 1;
        }
        .ab-number-label {
          font-size: 8.5px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(240,235,227,0.4);
        }

        /* ── Content / Text ── */
        .ab-content {
          display: flex;
          flex-direction: column;
          gap: 0;
          color: #f0ebe3;
        }

        /* Eyebrow */
        .ab-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 9.5px;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: #c8a96e;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        .ab-eyebrow-line {
          display: inline-block;
          width: 28px; height: 1px;
          background: #c8a96e;
          flex-shrink: 0;
        }

        /* Title */
        .ab-title {
          display: flex;
          flex-direction: column;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 6vw, 4.2rem);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.01em;
          color: #f0ebe3;
          margin: 0 0 1.5rem;
        }
        .ab-title-line { display: block; overflow: hidden; }
        .ab-title-accent {
          font-style: italic;
          font-weight: 600;
          background: linear-gradient(135deg, #c8a96e, #e8d5a0 50%, #c8a96e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Rule */
        .ab-rule {
          width: 60px; height: 1px;
          background: linear-gradient(90deg, #c8a96e, transparent);
          margin-bottom: 1.75rem;
        }

        /* Paragraphs */
        .ab-text {
          font-size: clamp(0.95rem, 1.8vw, 1.05rem);
          font-weight: 300;
          line-height: 1.8;
          color: rgba(240,235,227,0.6);
          margin-bottom: 1.2rem;
        }

        /* Pills */
        .ab-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 1.5rem 0 2rem;
        }
        .ab-pill {
          font-size: 9.5px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(200,169,110,0.8);
          border: 1px solid rgba(200,169,110,0.2);
          background: rgba(200,169,110,0.05);
          padding: 6px 14px;
          border-radius: 999px;
          font-weight: 400;
        }

        /* CTA */
        .ab-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          text-decoration: none;
          color: #c8a96e;
          font-weight: 500;
          position: relative;
          width: fit-content;
          transition: gap 0.25s ease;
        }
        .ab-cta::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0;
          width: 100%; height: 1px;
          background: linear-gradient(90deg, #c8a96e, transparent);
          transform: scaleX(0.4);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .ab-cta:hover { gap: 14px; }
        .ab-cta:hover::after { transform: scaleX(1); }

        /* ── Mobile tweaks ── */
        @media (max-width: 767px) {
          .ab-visual { min-height: 360px; }
          .ab-img-main { height: 360px; }
          .ab-img-float-wrap { width: 130px; height: 130px; right: 0; bottom: 60px; }
          .ab-numbers { left: 0; top: 20px; padding: 14px 16px; gap: 0.75rem; }
          .ab-number-val { font-size: 1.5rem; }
        }
      `}</style>
    </section>
  );
}