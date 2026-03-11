"use client";

export default function Footer() {
  return (
    <footer className="ft-footer">
      <div className="ft-bg" />
      <div className="ft-bg-grain" />
      <div className="ft-glow" />

      <div className="ft-inner">

        {/* ── Top: Brand + Links ── */}
        <div className="ft-top">

          {/* Brand */}
          <div className="ft-brand">
            <h2 className="ft-wordmark">
              <span className="ft-word-cafe">Cafe</span>
              <span className="ft-word-kolayi">Kolayi</span>
            </h2>
            <p className="ft-tagline">
              A relaxed café experience where great food,<br />
              coffee and conversations come together.
            </p>
          </div>

          {/* Links */}
          <div className="ft-links">
            <div className="ft-col">
              <span className="ft-col-head">Social</span>
              <a href="https://instagram.com/cafekolayi" target="_blank" rel="noopener noreferrer" className="ft-link">Instagram</a>
              <a href="https://maps.google.com/?q=kolayi+malappuram" target="_blank" rel="noopener noreferrer" className="ft-link">Google Maps</a>
            </div>
            <div className="ft-col">
              <span className="ft-col-head">Contact</span>
              <a href="tel:+919497002105" className="ft-link">Call Us</a>
              <a href="#visit" className="ft-link">Location</a>
            </div>
            <div className="ft-col">
              <span className="ft-col-head">Navigate</span>
              <a href="#menu" className="ft-link">Menu</a>
              <a href="#gallery" className="ft-link">Gallery</a>
            </div>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="ft-rule" />

        {/* ── Bottom ── */}
        <div className="ft-bottom">
          <p className="ft-copy">© {new Date().getFullYear()} Cafe Kolayi. All rights reserved.</p>
          <div className="ft-status">
            <span className="ft-status-dot" />
            Open daily · 10 AM – 11 PM · Malappuram
          </div>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,600&family=Jost:wght@300;400;500&display=swap');

        .ft-footer {
          position: relative;
          overflow: hidden;
          padding: 5rem 1.5rem 2.5rem;
        }
        @media (min-width: 768px)  { .ft-footer { padding: 6rem 3rem 3rem; } }
        @media (min-width: 1024px) { .ft-footer { padding: 7rem 5rem 3rem; } }

        .ft-bg { position: absolute; inset: 0; background: #060f0a; }
        .ft-bg-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.04; pointer-events: none;
        }
        .ft-glow {
          position: absolute; bottom: -20%; left: 50%;
          transform: translateX(-50%);
          width: 70%; height: 60%;
          background: radial-gradient(ellipse, rgba(200,169,110,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .ft-inner {
          position: relative; z-index: 10;
          max-width: 1200px; margin: 0 auto;
          display: flex; flex-direction: column; gap: 3rem;
        }

        /* Top */
        .ft-top {
          display: flex; flex-direction: column; gap: 3rem;
        }
        @media (min-width: 768px) {
          .ft-top { flex-direction: row; justify-content: space-between; align-items: flex-start; gap: 4rem; }
        }

        /* Brand */
        .ft-brand { display: flex; flex-direction: column; gap: 1rem; }
        .ft-wordmark {
          display: flex; align-items: baseline; gap: 0.3em;
          margin: 0; line-height: 1; user-select: none;
        }
        .ft-word-cafe {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          color: rgba(240,235,227,0.28);
          letter-spacing: -0.02em;
        }
        .ft-word-kolayi {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic; font-weight: 600;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #c8a96e 0%, #e8d5a0 45%, #c8a96e 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .ft-tagline {
          font-family: 'Jost', sans-serif;
          font-size: 13px; font-weight: 300; line-height: 1.78;
          color: rgba(240,235,227,0.35);
          max-width: 300px; margin: 0;
        }

        /* Links */
        .ft-links { display: flex; gap: 3rem; flex-wrap: wrap; }
        .ft-col { display: flex; flex-direction: column; gap: 0.85rem; }
        .ft-col-head {
          font-family: 'Jost', sans-serif;
          font-size: 9px; letter-spacing: 0.35em; text-transform: uppercase;
          color: #c8a96e; font-weight: 500;
        }
        .ft-link {
          font-family: 'Jost', sans-serif;
          font-size: 13px; font-weight: 300;
          color: rgba(240,235,227,0.42);
          text-decoration: none;
          transition: color 0.25s;
        }
        .ft-link:hover { color: #f0ebe3; }

        /* Rule */
        .ft-rule { width: 100%; height: 1px; background: rgba(200,169,110,0.1); }

        /* Bottom */
        .ft-bottom {
          display: flex; flex-direction: column; gap: 0.6rem;
        }
        @media (min-width: 768px) {
          .ft-bottom { flex-direction: row; justify-content: space-between; align-items: center; }
        }
        .ft-copy {
          font-family: 'Jost', sans-serif;
          font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(240,235,227,0.18); margin: 0;
        }
        .ft-status {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Jost', sans-serif;
          font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(240,235,227,0.22);
        }
        .ft-status-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 6px rgba(74,222,128,0.7);
          animation: ftPulse 2.2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes ftPulse {
          0%,100% { opacity: 1; } 50% { opacity: 0.3; }
        }
      `}</style>
    </footer>
  );
}