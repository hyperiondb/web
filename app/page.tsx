import SignupForm from "./signup-form";

export default function Home() {
  return (
    <>
      <div className="bg-motif" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      <div className="wrap">
        <header>
          <div className="container">
            <div className="topbar">
              <a className="logo" href="#">
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" role="img" aria-label="HyperionDB">
                  <defs>
                    <linearGradient id="hyp-sun" x1="16" y1="15" x2="33" y2="34" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3B82F6" />
                      <stop offset="1" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  <circle cx="24" cy="24" r="19" stroke="#CBD5E1" strokeWidth="1.5" />
                  <circle cx="42.07" cy="18.13" r="2.4" fill="#94A3B8" />
                  <circle cx="35.17" cy="39.37" r="2.4" fill="#94A3B8" />
                  <circle cx="12.83" cy="39.37" r="2.4" fill="#94A3B8" />
                  <circle cx="5.93" cy="18.13" r="2.4" fill="#94A3B8" />
                  <circle cx="24" cy="5" r="4.2" fill="#06B6D4" />
                  <circle cx="24" cy="5" r="7" stroke="#06B6D4" strokeOpacity="0.25" strokeWidth="1.5" />
                  <circle cx="24" cy="24" r="8.5" fill="url(#hyp-sun)" />
                </svg>
                <span>
                  Hyperion<span className="db">DB</span>
                </span>
              </a>
              <nav className="top-links">
                <a href="#">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  GitHub
                </a>
                <a href="https://github.com/hyperiondb/hyperiondb">
                  <span className="label-docs">Docs</span>
                </a>
              </nav>
            </div>
          </div>
        </header>

        <main>
          <div className="container">
            <div className="hero">
              <div className="eyebrow-pill">
                <span className="dot" />
                Coming soon · Postgres extension
              </div>
              <h1>
                Easily scalable
                <br />
                Postgres, with
                <br />
                <span className="accent">failover built in.</span>
              </h1>
              <p className="lede">
                HyperionDB turns a Postgres database into a self-healing cluster. Add nodes as you
                grow and the built-in Raft group keeps one leader elected and your data byte-identical —
                automatically. No etcd, no Consul, no Kubernetes.
              </p>

              <SignupForm />

              <div className="ticks">
                <span className="tick">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="16" y="16" width="6" height="6" rx="1" />
                      <rect x="2" y="16" width="6" height="6" rx="1" />
                      <rect x="9" y="2" width="6" height="6" rx="1" />
                      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                      <path d="M12 12V8" />
                    </svg>
                  </span>
                  Scale to N nodes
                </span>
                <span className="tick">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>
                  Automatic failover
                </span>
                <span className="tick">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                      <path d="M3 12A9 3 0 0 0 21 12" />
                    </svg>
                  </span>
                  Zero external dependencies
                </span>
              </div>
            </div>
          </div>
        </main>

        <footer>
          <div className="container">
            <div className="footbar">
              <span className="status-pill">
                <span className="dot" />
                Building in the open
              </span>
              <div className="foot-meta">
                <span>© 2026 HyperionDB</span>
                <a href="https://github.com/hyperiondb/hyperiondb">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
