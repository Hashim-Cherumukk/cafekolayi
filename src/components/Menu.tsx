"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const menuData = [
  {
    category: "Coffee",
    tag: "Hot & Cold",
    icon: "◎",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80",
    items: [
      { name: "Espresso", desc: "Double shot, dark roast", price: "120" },
      { name: "Latte", desc: "Steamed milk, smooth finish", price: "180" },
      { name: "Cold Brew", desc: "12-hour slow brewed", price: "160" },
      { name: "Cappuccino", desc: "Velvety foam, rich espresso", price: "170" },
    ],
  },
  {
    category: "Snacks",
    tag: "Light Bites",
    icon: "◈",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
    items: [
      { name: "Club Sandwich", desc: "Triple decker, fresh veggies", price: "280" },
      { name: "Chicken Burger", desc: "Grilled, house sauce", price: "320" },
      { name: "Loaded Fries", desc: "Cheese, jalapeño, herbs", price: "220" },
      { name: "Bruschetta", desc: "Tomato, basil, olive oil", price: "190" },
    ],
  },
  {
    category: "Desserts",
    tag: "Sweet Endings",
    icon: "✦",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80",
    items: [
      { name: "Brownie", desc: "Warm, walnut, fudge", price: "160" },
      { name: "Chocolate Cake", desc: "Dark ganache, three layers", price: "200" },
      { name: "Ice Cream", desc: "Two scoops, seasonal flavour", price: "140" },
      { name: "Cheesecake", desc: "New York style, berry coulis", price: "220" },
    ],
  },
];

export default function Menu() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".mn-header-line", {
        y: 70, opacity: 0, stagger: 0.08, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
      gsap.from(".mn-tabs", {
        y: 20, opacity: 0, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Animate content on tab change
  useEffect(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
  }, [activeTab]);

  const active = menuData[activeTab];

  return (
    <section id="menu" ref={sectionRef} className="mn-section">

      <div className="mn-bg" />
      <div className="mn-bg-grain" />
      <div className="mn-bg-accent" />

      <div className="mn-inner">

        {/* ── Header ── */}
        <div className="mn-header">
          <p className="mn-eyebrow">
            <span className="mn-eyebrow-dot" />
            What we serve
          </p>
          <h2 className="mn-title">
            {["Our", "Menu"].map((w, i) => (
              <span key={i} className={`mn-header-line ${i === 1 ? "mn-title-accent" : ""}`}>{w}</span>
            ))}
          </h2>
        </div>

        {/* ── Tabs ── */}
        <div className="mn-tabs">
          {menuData.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`mn-tab ${activeTab === i ? "mn-tab--active" : ""}`}
            >
              <span className="mn-tab-icon">{cat.icon}</span>
              {cat.category}
            </button>
          ))}
        </div>

        {/* ── Content ── */}
        <div ref={contentRef} className="mn-content">

          {/* Left: image + tag */}
          <div className="mn-img-col">
            <div className="mn-img-wrap">
              <img src={active.image} alt={active.category} className="mn-img" />
              <div className="mn-img-overlay" />
              <div className="mn-img-tag">
                <span>{active.icon}</span>
                {active.tag}
              </div>
            </div>
          </div>

          {/* Right: items list */}
          <div className="mn-list-col">

            <div className="mn-list-header">
              <h3 className="mn-list-title">{active.category}</h3>
              <span className="mn-list-count">{active.items.length} items</span>
            </div>

            <div className="mn-rule" />

            <div className="mn-items">
              {active.items.map((item, i) => (
                <div key={i} className="mn-item">
                  <div className="mn-item-left">
                    <span className="mn-item-num">0{i + 1}</span>
                    <div className="mn-item-info">
                      <span className="mn-item-name">{item.name}</span>
                      <span className="mn-item-desc">{item.desc}</span>
                    </div>
                  </div>
                  <span className="mn-item-price">₹{item.price}</span>
                </div>
              ))}
            </div>

            <a href="#visit" className="mn-order-cta">
              Visit & Order
              <svg viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

          </div>

        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,600&family=Jost:wght@300;400;500&display=swap');

        /* Section */
        .mn-section {
          position: relative;
          padding: 7rem 1.5rem;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
        }
        @media (min-width: 768px)  { .mn-section { padding: 8rem 3rem; } }
        @media (min-width: 1024px) { .mn-section { padding: 10rem 5rem; } }

        /* Backgrounds */
        .mn-bg { position: absolute; inset: 0; background: #0c2e22; }
        .mn-bg-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.035; pointer-events: none;
        }
        .mn-bg-accent {
          position: absolute; bottom: -20%; left: -10%;
          width: 50%; height: 60%;
          background: radial-gradient(ellipse, rgba(200,169,110,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Inner */
        .mn-inner {
          position: relative; z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        /* Header */
        .mn-header { display: flex; flex-direction: column; gap: 1rem; }
        .mn-eyebrow {
          display: flex; align-items: center; gap: 8px;
          font-size: 10px; letter-spacing: 0.35em; text-transform: uppercase;
          color: #c8a96e; font-weight: 500;
        }
        .mn-eyebrow-dot {
          display: inline-block; width: 5px; height: 5px;
          border-radius: 50%; background: #c8a96e; flex-shrink: 0;
        }
        .mn-title {
          display: flex; flex-direction: row; gap: 0.6rem; align-items: baseline;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.2rem, 8vw, 6rem);
          font-weight: 300; line-height: 1;
          color: #f0ebe3; margin: 0;
        }
        .mn-header-line { display: block; overflow: hidden; }
        .mn-title-accent {
          font-style: italic; font-weight: 600;
          background: linear-gradient(135deg, #c8a96e, #e8d5a0 50%, #c8a96e);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        /* Tabs */
        .mn-tabs {
          display: flex; gap: 8px; flex-wrap: wrap;
        }
        .mn-tab {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Jost', sans-serif;
          font-size: 11px; font-weight: 400;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(240,235,227,0.4);
          background: transparent;
          border: 1px solid rgba(240,235,227,0.1);
          padding: 10px 22px; border-radius: 999px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .mn-tab:hover { color: rgba(240,235,227,0.75); border-color: rgba(240,235,227,0.2); }
        .mn-tab--active {
          color: #0c2e22;
          background: linear-gradient(135deg, #c8a96e, #b8924f);
          border-color: transparent;
          box-shadow: 0 6px 20px rgba(200,169,110,0.28);
        }
        .mn-tab-icon { font-size: 13px; }

        /* Content grid */
        .mn-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        @media (min-width: 768px) {
          .mn-content {
            grid-template-columns: 1fr 1.1fr;
            gap: 4rem;
            align-items: center;
          }
        }

        /* Image */
        .mn-img-col { width: 100%; }
        .mn-img-wrap {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          aspect-ratio: 4/3;
        }
        .mn-img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.6s ease;
        }
        .mn-img-wrap:hover .mn-img { transform: scale(1.03); }
        .mn-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(8,22,16,0.6) 0%, transparent 50%);
          pointer-events: none;
        }
        .mn-img-tag {
          position: absolute; bottom: 18px; left: 18px;
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
          color: #c8a96e; font-weight: 500;
          background: rgba(8,22,16,0.75);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(200,169,110,0.18);
          padding: 7px 14px; border-radius: 999px;
        }

        /* List */
        .mn-list-col { display: flex; flex-direction: column; gap: 0; }
        .mn-list-header {
          display: flex; align-items: baseline;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .mn-list-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 300; color: #f0ebe3; margin: 0;
        }
        .mn-list-count {
          font-size: 9.5px; letter-spacing: 0.22em;
          text-transform: uppercase; color: rgba(200,169,110,0.5);
        }
        .mn-rule {
          width: 100%; height: 1px;
          background: rgba(200,169,110,0.12);
          margin-bottom: 0;
        }

        /* Items */
        .mn-items { display: flex; flex-direction: column; }
        .mn-item {
          display: flex; align-items: center;
          justify-content: space-between;
          padding: 1.1rem 0;
          border-bottom: 1px solid rgba(200,169,110,0.08);
          transition: background 0.2s;
          gap: 1rem;
        }
        .mn-item:last-child { border-bottom: none; }
        .mn-item-left {
          display: flex; align-items: center; gap: 16px;
        }
        .mn-item-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.9rem; font-weight: 300;
          color: rgba(200,169,110,0.35); flex-shrink: 0;
          width: 20px;
        }
        .mn-item-info {
          display: flex; flex-direction: column; gap: 2px;
        }
        .mn-item-name {
          font-size: 1rem; font-weight: 400;
          color: #f0ebe3; letter-spacing: 0.01em;
        }
        .mn-item-desc {
          font-size: 11px; font-weight: 300;
          color: rgba(240,235,227,0.38);
          letter-spacing: 0.04em;
        }
        .mn-item-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem; font-weight: 300;
          color: #c8a96e; flex-shrink: 0;
        }

        /* CTA */
        .mn-order-cta {
          display: inline-flex; align-items: center; gap: 10px;
          margin-top: 2rem;
          font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
          font-weight: 500; text-decoration: none;
          color: #0c2e22;
          background: linear-gradient(135deg, #c8a96e, #b8924f);
          padding: 13px 28px; border-radius: 2px;
          transition: opacity 0.25s, transform 0.25s, box-shadow 0.25s;
          box-shadow: 0 6px 24px rgba(200,169,110,0.25);
          width: fit-content;
        }
        .mn-order-cta svg { width: 18px; height: 18px; transition: transform 0.25s; }
        .mn-order-cta:hover { opacity: 0.9; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(200,169,110,0.35); }
        .mn-order-cta:hover svg { transform: translateX(4px); }

        /* Mobile */
        @media (max-width: 767px) {
          .mn-title { flex-direction: row; }
          .mn-item-name { font-size: 0.95rem; }
          .mn-item-price { font-size: 1.15rem; }
        }
      `}</style>
    </section>
  );
}