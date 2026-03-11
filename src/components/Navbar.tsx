"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const LINKS = [
  { id: "home",    href: "#home",    label: "Home" },
  { id: "about",   href: "#about",   label: "About" },
  { id: "menu",    href: "#menu",    label: "Menu" },
  { id: "gallery", href: "#gallery", label: "Gallery" },
  { id: "contact", href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive]     = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const fn = () => { setScrolled(window.scrollY > 50); lastY.current = window.scrollY; };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ══════════ DESKTOP ══════════ */}
      <header className={`dn ${scrolled ? "dn-s" : ""}`}>
        <nav className="dn-nav">

          {/* Logo */}
         <a href="#home" className="dn-logo-link">
           <Image
            src="/logo.png"
            alt="Cafe Kolayi"
            width={100}
            height={42}
            priority
            className="dn-logo"
           />
         </a>
          {/* Links */}
          <ul className="dn-links">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a href={l.href} className={`dn-link ${active === l.id ? "dn-link-on" : ""}`}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#contact" className="dn-cta">
            <span>Reserve a table</span>
            <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>

        </nav>
      </header>

{/* ══════════ MOBILE HEADER ══════════ */}
<header className="mn">
  <a href="#home" className="mn-logo-link">
    <Image
      src="/logo.png"
      alt="Cafe Kolayi"
      width={100}
      height={36}
      priority
      className="mn-logo"
    />
  </a>

        <button
          className={`mn-burger ${menuOpen ? "mn-burger-open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </header>

      {/* ══════════ MOBILE FULLSCREEN MENU ══════════ */}
      <div className={`mo ${menuOpen ? "mo-open" : ""}`}>
        <ul className="mo-links">
          {LINKS.map((l, i) => (
            <li key={l.id} style={{ "--i": i } as React.CSSProperties}>
              <a
                href={l.href}
                className={`mo-link ${active === l.id ? "mo-link-on" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mo-num">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mo-footer">
          <a href="tel:+919497002105" className="mo-tel">+91 94970 02105</a>
          <a href="#contact" className="mo-cta" onClick={() => setMenuOpen(false)}>Reserve a table →</a>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600&family=Jost:wght@300;400;500&display=swap');

        /* ─ shared ─ */
        *, *::before, *::after { box-sizing: border-box; }

        /* ══ DESKTOP ══ */
        .dn { display: none; }

        @media (min-width: 768px) {
          .dn {
            display: block;
            position: fixed; inset: 0 0 auto;
            z-index: 500;
            padding: 0 2.5rem;
          }

          .dn-nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 1200px;
            margin: 0 auto;
            height: 76px;
            border-bottom: 1px solid rgba(200,169,110,0.0);
            transition: height .4s ease, background .4s ease, border-color .4s ease,
                        backdrop-filter .4s ease, padding .4s ease, border-radius .4s ease,
                        box-shadow .4s ease, margin .4s ease, max-width .4s ease;
          }

          .dn-s .dn-nav {
            margin: 12px auto;
            max-width: 960px;
            height: 60px;
            padding: 0 28px;
            border-radius: 999px;
            background: rgba(6, 17, 11, 0.88);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(200,169,110,0.14);
            box-shadow: 0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(200,169,110,0.06);
          }

          /* Logo */
          .dn-logo-link {
            display: flex; align-items: center; gap: 10px;
            text-decoration: none; flex-shrink: 0;
          }
.dn-logo {
  height: 42px !important;
  width: auto !important;
  object-fit: contain;
}
          .dn-logo-link:hover .dn-logo { transform: scale(1.07); }
          .dn-brand {
            font-family: 'Cormorant Garamond', serif;
            font-style: italic; font-weight: 600;
            font-size: 1.4rem;
            background: linear-gradient(135deg, #c8a96e, #e8d5a0 50%, #c8a96e);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
            letter-spacing: -0.01em;
          }
          .dn-brand em { font-style: normal; color: #c8a96e; -webkit-text-fill-color: #c8a96e; }

          /* Links */
          .dn-links {
            display: flex; align-items: center; gap: 2rem;
            list-style: none; margin: 0; padding: 0;
          }
          .dn-link {
            font-family: 'Jost', sans-serif;
            font-size: 11px; font-weight: 400;
            letter-spacing: 0.22em; text-transform: uppercase;
            color: rgba(240,235,227,0.48);
            text-decoration: none; position: relative;
            transition: color .22s;
          }
          .dn-link::after {
            content: ''; position: absolute;
            bottom: -3px; left: 0;
            width: 0; height: 1px;
            background: #c8a96e;
            transition: width .25s ease;
          }
          .dn-link:hover { color: #f0ebe3; }
          .dn-link:hover::after, .dn-link-on::after { width: 100%; }
          .dn-link-on { color: #c8a96e; }

          /* CTA */
          .dn-cta {
            display: inline-flex; align-items: center; gap: 8px;
            font-family: 'Jost', sans-serif;
            font-size: 10px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase;
            text-decoration: none; color: #0c2e22;
            background: linear-gradient(135deg, #c8a96e, #b8924f);
            padding: 9px 20px; border-radius: 4px;
            box-shadow: 0 4px 14px rgba(200,169,110,0.22);
            transition: transform .2s, box-shadow .2s, opacity .2s;
          }
          .dn-cta svg { width: 14px; height: 14px; transition: transform .2s; }
          .dn-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(200,169,110,0.35); opacity: .92; }
          .dn-cta:hover svg { transform: translateX(3px); }
        }

        /* ══ MOBILE HEADER ══ */
        .mn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: fixed; inset: 0 0 auto;
          z-index: 500;
          padding: 14px 20px;
          background: linear-gradient(to bottom, rgba(6,17,11,0.96) 55%, transparent 100%);
        }
        @media (min-width: 768px) { .mn { display: none; } }

        .mn-logo-link {
          display: flex; align-items: center; gap: 9px;
          text-decoration: none;
        }
.mn-logo {
  height: 36px !important;
  width: auto !important;
  object-fit: contain;
}
        .mn-brand {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic; font-weight: 600; font-size: 1.25rem;
          background: linear-gradient(135deg, #c8a96e, #e8d5a0 50%, #c8a96e);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        /* Burger */
        .mn-burger {
          display: flex; flex-direction: column; justify-content: center;
          gap: 5px; width: 36px; height: 36px;
          background: rgba(200,169,110,0.08);
          border: 1px solid rgba(200,169,110,0.18);
          border-radius: 8px; cursor: pointer;
          padding: 0 9px;
          transition: background .2s;
        }
        .mn-burger:hover { background: rgba(200,169,110,0.14); }
        .mn-burger span {
          display: block; width: 100%; height: 1.5px;
          background: #c8a96e; border-radius: 2px;
          transform-origin: center;
          transition: transform .3s ease, opacity .3s ease, width .3s ease;
        }
        .mn-burger-open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .mn-burger-open span:nth-child(2) { opacity: 0; width: 0; }
        .mn-burger-open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* ══ MOBILE FULLSCREEN OVERLAY ══ */
        .mo {
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: fixed; inset: 0;
          z-index: 490;
          background: #060f0a;
          padding: 6rem 2rem 3rem;
          transform: translateX(100%);
          opacity: 0;
          transition: transform .45s cubic-bezier(.77,0,.18,1), opacity .35s ease;
          pointer-events: none;
        }
        .mo-open {
          transform: translateX(0);
          opacity: 1;
          pointer-events: all;
        }
        @media (min-width: 768px) { .mo { display: none !important; } }

        .mo-links {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 0;
        }
        .mo-links li {
          opacity: 0; transform: translateX(30px);
          transition: opacity .4s ease calc(var(--i) * 0.07s + .1s),
                      transform .4s ease calc(var(--i) * 0.07s + .1s);
        }
        .mo-open .mo-links li {
          opacity: 1; transform: translateX(0);
        }
        .mo-link {
          display: flex; align-items: center; gap: 1rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 12vw, 5rem);
          font-weight: 300; color: rgba(240,235,227,0.25);
          text-decoration: none; line-height: 1.1;
          border-bottom: 1px solid rgba(200,169,110,0.07);
          padding: 0.35rem 0;
          transition: color .2s;
        }
        .mo-link:hover, .mo-link-on { color: #f0ebe3; }
        .mo-link-on { font-style: italic; color: #c8a96e !important; }
        .mo-num {
          font-family: 'Jost', sans-serif;
          font-size: 10px; letter-spacing: 0.2em;
          color: rgba(200,169,110,0.4);
          align-self: flex-start; margin-top: 0.6rem;
        }

        .mo-footer {
          margin-top: 3rem;
          display: flex; flex-direction: column; gap: 1rem;
        }
        .mo-tel {
          font-family: 'Jost', sans-serif;
          font-size: 13px; font-weight: 300; letter-spacing: 0.12em;
          color: rgba(240,235,227,0.3); text-decoration: none;
        }
        .mo-cta {
          display: inline-flex; align-items: center;
          font-family: 'Jost', sans-serif;
          font-size: 11px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase;
          text-decoration: none; color: #0c2e22;
          background: linear-gradient(135deg, #c8a96e, #b8924f);
          padding: 12px 24px; border-radius: 4px;
          width: fit-content;
          box-shadow: 0 6px 20px rgba(200,169,110,0.25);
        }
      `}</style>
    </>
  );
}