"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { LandingNav } from "@/components/landing/landing-nav";

/* ------------------------------------------------------------------ */
/*  SVG Icons                                                          */
/* ------------------------------------------------------------------ */

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  );
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function GitPRIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className} style={style}>
      <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Wolf SVG Background (Network Lines) - Subtly Platinum Silver      */
/* ------------------------------------------------------------------ */

function WolfNetworkBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none"
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Wolf head silhouette formed from network nodes and lines */}
      <g stroke="#D1D5DB" strokeWidth="0.5">
        {/* Head outline nodes */}
        <circle cx="720" cy="160" r="2" fill="#D1D5DB" opacity="0.8" />
        <circle cx="680" cy="190" r="1.5" fill="#D1D5DB" opacity="0.6" />
        <circle cx="760" cy="190" r="1.5" fill="#D1D5DB" opacity="0.6" />
        <circle cx="660" cy="230" r="1.5" fill="#D1D5DB" opacity="0.5" />
        <circle cx="780" cy="230" r="1.5" fill="#D1D5DB" opacity="0.5" />
        <circle cx="640" cy="280" r="2" fill="#D1D5DB" opacity="0.7" />
        <circle cx="800" cy="280" r="2" fill="#D1D5DB" opacity="0.7" />
        <circle cx="630" cy="330" r="1.5" fill="#D1D5DB" opacity="0.5" />
        <circle cx="810" cy="330" r="1.5" fill="#D1D5DB" opacity="0.5" />
        {/* Ear left */}
        <circle cx="650" cy="130" r="2" fill="#D1D5DB" opacity="0.8" />
        <circle cx="630" cy="100" r="1.5" fill="#D1D5DB" opacity="0.6" />
        <circle cx="660" cy="90" r="1.5" fill="#D1D5DB" opacity="0.6" />
        <circle cx="670" cy="115" r="1.5" fill="#D1D5DB" opacity="0.5" />
        {/* Ear right */}
        <circle cx="790" cy="130" r="2" fill="#D1D5DB" opacity="0.8" />
        <circle cx="810" cy="100" r="1.5" fill="#D1D5DB" opacity="0.6" />
        <circle cx="780" cy="90" r="1.5" fill="#D1D5DB" opacity="0.6" />
        <circle cx="770" cy="115" r="1.5" fill="#D1D5DB" opacity="0.5" />
        {/* Snout */}
        <circle cx="720" cy="360" r="2" fill="#D1D5DB" opacity="0.7" />
        <circle cx="700" cy="380" r="1.5" fill="#D1D5DB" opacity="0.5" />
        <circle cx="740" cy="380" r="1.5" fill="#D1D5DB" opacity="0.5" />
        <circle cx="720" cy="400" r="2" fill="#D1D5DB" opacity="0.6" />
        {/* Eyes */}
        <circle cx="685" cy="240" r="3" fill="#D1D5DB" opacity="1" />
        <circle cx="755" cy="240" r="3" fill="#D1D5DB" opacity="1" />
        {/* Network lines connecting nodes */}
        <line x1="720" y1="160" x2="680" y2="190" opacity="0.4" />
        <line x1="720" y1="160" x2="760" y2="190" opacity="0.4" />
        <line x1="680" y1="190" x2="660" y2="230" opacity="0.3" />
        <line x1="760" y1="190" x2="780" y2="230" opacity="0.3" />
        <line x1="660" y1="230" x2="640" y2="280" opacity="0.3" />
        <line x1="780" y1="230" x2="800" y2="280" opacity="0.3" />
        <line x1="640" y1="280" x2="630" y2="330" opacity="0.3" />
        <line x1="800" y1="280" x2="810" y2="330" opacity="0.3" />
        {/* Ear connections */}
        <line x1="720" y1="160" x2="650" y2="130" opacity="0.4" />
        <line x1="650" y1="130" x2="630" y2="100" opacity="0.3" />
        <line x1="650" y1="130" x2="660" y2="90" opacity="0.3" />
        <line x1="650" y1="130" x2="670" y2="115" opacity="0.3" />
        <line x1="720" y1="160" x2="790" y2="130" opacity="0.4" />
        <line x1="790" y1="130" x2="810" y2="100" opacity="0.3" />
        <line x1="790" y1="130" x2="780" y2="90" opacity="0.3" />
        <line x1="790" y1="130" x2="770" y2="115" opacity="0.3" />
        {/* Snout connections */}
        <line x1="630" y1="330" x2="700" y2="380" opacity="0.3" />
        <line x1="810" y1="330" x2="740" y2="380" opacity="0.3" />
        <line x1="700" y1="380" x2="720" y2="400" opacity="0.3" />
        <line x1="740" y1="380" x2="720" y2="400" opacity="0.3" />
        {/* Cross connections for body of wolf (shoulders) */}
        <circle cx="600" cy="430" r="2" fill="#D1D5DB" opacity="0.5" />
        <circle cx="840" cy="430" r="2" fill="#D1D5DB" opacity="0.5" />
        <circle cx="580" cy="500" r="1.5" fill="#D1D5DB" opacity="0.3" />
        <circle cx="860" cy="500" r="1.5" fill="#D1D5DB" opacity="0.3" />
        <line x1="630" y1="330" x2="600" y2="430" opacity="0.25" />
        <line x1="810" y1="330" x2="840" y2="430" opacity="0.25" />
        <line x1="600" y1="430" x2="580" y2="500" opacity="0.2" />
        <line x1="840" y1="430" x2="860" y2="500" opacity="0.2" />
        {/* Extra sparse nodes for network feel */}
        <circle cx="720" cy="280" r="1.5" fill="#D1D5DB" opacity="0.4" />
        <circle cx="720" cy="320" r="1.5" fill="#D1D5DB" opacity="0.4" />
        <line x1="680" y1="190" x2="720" y2="280" opacity="0.2" />
        <line x1="760" y1="190" x2="720" y2="280" opacity="0.2" />
        <line x1="720" y1="280" x2="720" y2="320" opacity="0.2" />
        <line x1="640" y1="280" x2="685" y2="240" opacity="0.25" />
        <line x1="800" y1="280" x2="755" y2="240" opacity="0.25" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Animated Particles - Darker, Low Brightness                       */
/* ------------------------------------------------------------------ */

function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${10 + (i * 5.2) % 80}%`,
    top: `${5 + (i * 7.3) % 85}%`,
    size: i % 3 === 0 ? 1.5 : 1,
    delay: `${(i * 0.8) % 6}s`,
    duration: `${6 + (i % 4) * 2}s`,
    opacity: (0.12 + (i % 5) * 0.05) * 0.3, // Reduced by 70%+
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: "#D1D5DB",
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const FEATURES = [
  {
    icon: ZapIcon,
    title: "Instant Analysis",
    description: "Reviews complete in under 800ms. Every push, every commit, reviewed before your team blinks.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Security Triage",
    description: "OWASP Top 10, secret detection, injection risks — all caught before they reach staging.",
  },
  {
    icon: CodeIcon,
    title: "Pattern Enforcement",
    description: "Understands your codebase conventions and flags deviations. Consistent standards, automatically.",
  },
  {
    icon: GitPRIcon,
    title: "Native GitHub Integration",
    description: "Inline comments appear directly on pull requests. No dashboard switching. No context loss.",
  },
  {
    icon: AlertIcon,
    title: "Requirements Validation",
    description: "Cross-references Linear and Jira tickets. Confirms acceptance criteria are actually met.",
  },
  {
    icon: CheckIcon,
    title: "Release Readiness",
    description: "Generates a confidence score before merge. Your team approves knowing the risk surface is clear.",
  },
];

const PRICING = [
  {
    name: "Solo",
    price: { monthly: "$0", annually: "$0" },
    period: { monthly: "forever", annually: "forever" },
    description: "For individual engineers exploring AI review",
    features: ["Up to 20 reviews / month", "Public & private repos", "Inline GitHub comments", "Community support"],
    cta: "Start for free",
    highlighted: false,
  },
  {
    name: "Team",
    price: { monthly: "$29", annually: "$23" },
    period: { monthly: "per seat / mo", annually: "per seat / mo" },
    description: "For serious engineering teams shipping fast",
    features: [
      "Unlimited reviews",
      "Linear & Jira sync",
      "Custom review rules",
      "Security vulnerability triage",
      "Priority review queue",
      "Dedicated support",
    ],
    cta: "Start 14-day trial",
    highlighted: true,
  },
];

const HISTORIES = [
  { pr: "#247", branch: "feat/payment-retry-logic", status: "approved", score: 97, issues: 0, time: "4m ago" },
  { pr: "#246", branch: "fix/session-timeout-race", status: "changes", score: 71, issues: 2, time: "22m ago" },
  { pr: "#245", branch: "refactor/query-optimizer", status: "approved", score: 94, issues: 0, time: "1h ago" },
  { pr: "#244", branch: "feat/webhook-signature-check", status: "approved", score: 99, issues: 0, time: "3h ago" },
];

/* ------------------------------------------------------------------ */
/*  Main Page                                                          */
/* ------------------------------------------------------------------ */

export default function LycanLandingPage() {
  const [billing, setBilling] = useState<"monthly" | "annually">("monthly");
  const [installStep, setInstallStep] = useState<"idle" | "loading" | "done">("idle");
  const [installPct, setInstallPct] = useState(0);
  const [scanLine, setScanLine] = useState(0);

  // Animating scan line in PR panel
  useEffect(() => {
    const t = setInterval(() => {
      setScanLine((n) => (n + 1) % 8);
    }, 1200);
    return () => clearInterval(t);
  }, []);

  const handleInstall = () => {
    if (installStep !== "idle") return;
    setInstallStep("loading");
    setInstallPct(0);
    const t = setInterval(() => {
      setInstallPct((p) => {
        if (p >= 100) { clearInterval(t); setInstallStep("done"); return 100; }
        return p + 20;
      });
    }, 350);
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden font-sans text-white"
      style={{ backgroundColor: "#050505" }}
    >
      {/* ── Grid texture - highly subtle ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.007) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.007) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Wolf silhouette (hero area only) ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <WolfNetworkBackground />
      </div>

      {/* ── Particles ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <Particles />
      </div>

      {/* ── Soft Ambient Glow (Removed excessive glow, very subtle platinum/white) ── */}
      <div
        className="pointer-events-none fixed z-0"
        style={{
          top: "-20%",
          left: "25%",
          right: "25%",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.015) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* ── CSS Keyframes ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-up {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0px) rotate(-0.5deg); }
          50% { transform: translateY(-6px) rotate(0deg); }
        }
        @keyframes scan-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-float { animation: float-up 8s ease-in-out infinite; }
        .animate-float-badge { animation: float-badge 6s ease-in-out infinite; }
        .animate-scan { animation: scan-pulse 2s ease-in-out infinite; }
        .premium-shimmer {
          background: linear-gradient(135deg, #FFFFFF 0%, #D1D5DB 50%, #FFFFFF 100%);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: text-shimmer 6s linear infinite;
        }
      `}} />

      {/* ── Navigation ── */}
      <LandingNav />

      {/* ── HERO SECTION ── */}
      <section className="relative z-10 min-h-screen flex items-center">
        <div className="mx-auto w-full max-w-7xl px-8 pt-28 pb-20 lg:pt-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* LEFT — Headline + CTAs */}
            <div className="flex flex-col items-start">

              {/* Badge */}
              <div
                className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em]"
                style={{
                  border: "1px solid #1A1A1A",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  color: "#A1A1AA",
                  borderRadius: "2px",
                }}
              >
                <span
                  className="size-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: "#10B981" }} // Emerald dot for live intelligence state
                />
                AI Code Review Platform
              </div>

              {/* Headline */}
              <h1
                className="text-5xl font-black leading-[1.03] tracking-tight md:text-6xl lg:text-[4.2rem]"
                style={{ fontWeight: 900, letterSpacing: "-0.02em" }}
              >
                <span className="text-white block">AI Reviews Every</span>
                <span className="text-white block">Pull Request Like</span>
                <span className="premium-shimmer block mt-1">Your Best Staff</span>
                <span className="premium-shimmer block">Engineer</span>
              </h1>

              {/* Description */}
              <p
                className="mt-7 max-w-md text-[15px] leading-[1.75] font-light"
                style={{ color: "#A1A1AA" }}
              >
                Lycan operates as a senior engineer on every pull request — validating requirements, catching security vulnerabilities, enforcing architecture rules, and delivering release-confidence scores in under a second.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex items-center gap-5">
                <Link
                  href="/sign-in"
                  className="inline-flex h-12 items-center gap-2.5 px-7 text-sm font-bold tracking-wide transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-200"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#050505",
                    borderRadius: "3px",
                  }}
                >
                  <GitHubIcon className="size-4" />
                  Start Reviewing Free
                </Link>
                <a
                  href="#pricing"
                  className="inline-flex h-12 items-center px-7 text-sm font-medium tracking-wide transition-all duration-300"
                  style={{
                    border: "1px solid #1A1A1A",
                    color: "#A1A1AA",
                    borderRadius: "3px",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#FFFFFF"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1A1A1A"; e.currentTarget.style.color = "#A1A1AA"; }}
                >
                  Book a Demo
                </a>
              </div>

              {/* Social proof metrics */}
              <div
                className="mt-14 flex items-center gap-8 pt-8 w-full max-w-sm"
                style={{ borderTop: "1px solid #1A1A1A" }}
              >
                {[
                  { val: "<800ms", label: "Review Time" },
                  { val: "100%", label: "PR Coverage" },
                  { val: "0 config", label: "To Deploy" },
                ].map((m, i) => (
                  <div key={i}>
                    <div
                      className="text-xl font-black font-mono tracking-tight text-white"
                    >
                      {m.val}
                    </div>
                    <div
                      className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-neutral-500"
                    >
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Floating PR Review Panel */}
            <div className="relative flex justify-center lg:justify-end">

              {/* Tilted 3D Wrapper */}
              <div
                className="animate-float relative w-full max-w-[540px]"
                style={{ perspective: "1200px" }}
              >
                <div
                  style={{
                    transform: "perspective(1200px) rotateX(10deg) rotateY(-14deg) rotateZ(2deg)",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.8s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "perspective(1200px) rotateX(4deg) rotateY(-6deg) rotateZ(1deg)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "perspective(1200px) rotateX(10deg) rotateY(-14deg) rotateZ(2deg)";
                  }}
                >
                  {/* Subtle Elegant Border Gradient Wrapper */}
                  <div
                    className="p-px rounded-xl overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.08) 100%)",
                      boxShadow: "0 30px 100px rgba(0,0,0,0.8)",
                    }}
                  >
                    {/* Panel body with soft blur */}
                    <div className="rounded-xl overflow-hidden backdrop-blur-xl" style={{ backgroundColor: "rgba(11,11,11,0.92)" }}>

                      {/* Window chrome */}
                      <div
                        className="flex items-center justify-between px-5 py-3.5"
                        style={{ borderBottom: "1px solid #1A1A1A", backgroundColor: "#0E0E0E" }}
                      >
                        <div className="flex items-center gap-2">
                          <span className="size-2.5 rounded-full" style={{ backgroundColor: "#EF4444", opacity: 0.6 }} />
                          <span className="size-2.5 rounded-full" style={{ backgroundColor: "#D1D5DB", opacity: 0.4 }} />
                          <span className="size-2.5 rounded-full" style={{ backgroundColor: "#10B981", opacity: 0.6 }} />
                          <span
                            className="ml-3 font-mono text-[10px] text-neutral-500"
                          >
                            github.com / lycan-ai / core
                          </span>
                        </div>
                        <div
                          className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest"
                          style={{
                            border: "1px solid rgba(16,185,129,0.3)",
                            color: "#10B981",
                            backgroundColor: "rgba(16,185,129,0.06)",
                          }}
                        >
                          <span className="size-1.5 rounded-full bg-[#10B981] animate-pulse" />
                          PR Open
                        </div>
                      </div>

                      {/* PR Title row */}
                      <div
                        className="px-5 py-4"
                        style={{ borderBottom: "1px solid #1A1A1A" }}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div
                              className="text-[11px] font-mono uppercase tracking-widest mb-1 text-neutral-500"
                            >
                              #128 · feat/jwt-key-rotation
                            </div>
                            <div className="text-sm font-semibold text-white leading-tight">
                              Implement asymmetric JWT signature rotation
                            </div>
                            <div
                              className="mt-1 text-[10px] text-neutral-500"
                            >
                              by ankit4399 · 14 commits · 6 files
                            </div>
                          </div>
                          <GitPRIcon className="size-5 shrink-0 mt-0.5 text-neutral-400" />
                        </div>
                      </div>

                      {/* Live scan status */}
                      <div
                        className="mx-4 mt-4 px-4 py-3 rounded-lg flex items-center justify-between"
                        style={{
                          border: "1px solid #1A1A1A",
                          backgroundColor: "rgba(255,255,255,0.01)",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative size-2">
                            <span
                              className="absolute inset-0 rounded-full animate-ping bg-neutral-400"
                              style={{ opacity: 0.3 }}
                            />
                            <span className="relative block size-2 rounded-full bg-neutral-400" />
                          </div>
                          <div>
                            <div
                              className="text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-400"
                            >
                              Lycan Intelligence
                            </div>
                            <div className="text-xs font-semibold text-white">Live verification active</div>
                          </div>
                        </div>
                        <span
                          className="text-[9px] font-mono animate-scan text-neutral-400"
                        >
                          SCANNING
                        </span>
                      </div>

                      {/* Grid of review panels */}
                      <div className="p-4 grid grid-cols-2 gap-3">

                        {/* Production Readiness Score */}
                        <div
                          className="col-span-2 rounded-lg px-4 py-3.5 flex items-center justify-between"
                          style={{ border: "1px solid #1A1A1A", backgroundColor: "#0E0E0E" }}
                        >
                          <div>
                            <div
                              className="text-[9px] uppercase tracking-widest font-mono mb-1 text-neutral-500"
                            >
                              Production Readiness Score
                            </div>
                            <div className="flex items-baseline gap-1.5">
                              <span
                                className="text-2xl font-black font-mono text-white"
                              >
                                76
                              </span>
                              <span className="text-xs text-neutral-500">/100</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div
                              className="text-[9px] mb-1.5 text-neutral-500"
                            >
                              2 issues blocking merge
                            </div>
                            <div className="flex gap-1 justify-end">
                              {[1,2,3,4,5,6,7,8,9,10].map((s) => (
                                <div
                                  key={s}
                                  className="h-1.5 w-3.5 rounded-sm"
                                  style={{
                                    backgroundColor: s <= 7 ? "#10B981" : "rgba(255,255,255,0.07)",
                                    opacity: s <= 7 ? 0.9 - (s * 0.04) : 0.3,
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Blocking Issues */}
                        <div
                          className="rounded-lg p-3.5"
                          style={{ border: "1px solid rgba(239,68,68,0.25)", backgroundColor: "rgba(239,68,68,0.04)" }}
                        >
                          <div
                            className="text-[9px] uppercase tracking-widest font-mono mb-2 text-[#EF4444] font-bold"
                          >
                            Blocking Issues
                          </div>
                          <div className="text-xl font-black text-white font-mono">2</div>
                          <div className="mt-2 space-y-1">
                            <div className="text-[9px] text-red-400/90 flex items-start gap-1.5">
                              <span>·</span>
                              <span>Key fallback bypasses auth</span>
                            </div>
                            <div className="text-[9px] text-red-400/90 flex items-start gap-1.5">
                              <span>·</span>
                              <span>Missing expiry validation</span>
                            </div>
                          </div>
                        </div>

                        {/* Security Findings */}
                        <div
                          className="rounded-lg p-3.5"
                          style={{ border: "1px solid rgba(239,68,68,0.25)", backgroundColor: "rgba(239,68,68,0.04)" }}
                        >
                          <div
                            className="text-[9px] uppercase tracking-widest font-mono mb-2 text-[#EF4444] font-bold"
                          >
                            Security Findings
                          </div>
                          <div className="text-xl font-black text-white font-mono">3</div>
                          <div className="mt-2 space-y-1">
                            <div className="text-[9px] text-red-400/90 flex items-start gap-1.5">
                              <span>·</span>
                              <span>Weak entropy source</span>
                            </div>
                            <div className="text-[9px] text-red-400/90 flex items-start gap-1.5">
                              <span>·</span>
                              <span>Hardcoded fallback key</span>
                            </div>
                          </div>
                        </div>

                        {/* Requirements */}
                        <div
                          className="col-span-2 rounded-lg px-4 py-3"
                          style={{ border: "1px solid #1A1A1A", backgroundColor: "#0E0E0E" }}
                        >
                          <div className="flex items-center justify-between mb-2.5">
                            <div
                              className="text-[9px] uppercase tracking-widest font-mono text-neutral-500"
                            >
                              Requirement Coverage
                            </div>
                            <span
                              className="text-[9px] font-mono font-bold text-white"
                            >
                              2/3 linked issues
                            </span>
                          </div>
                          <div
                            className="h-1 rounded-full overflow-hidden mb-2.5"
                            style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                          >
                            <div
                              className="h-full rounded-full transition-all bg-[#10B981]"
                              style={{ width: "66%" }}
                            />
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-[9px]">
                              <CheckIcon className="size-3 text-emerald-400 shrink-0" />
                              <span className="text-neutral-400">LIN-241: Asymmetric key generation</span>
                            </div>
                            <div className="flex items-center gap-2 text-[9px]">
                              <CheckIcon className="size-3 text-emerald-400 shrink-0" />
                              <span className="text-neutral-400">LIN-242: Rotation interval enforcement</span>
                            </div>
                            <div className="flex items-center gap-2 text-[9px]">
                              <span className="size-3 shrink-0 text-red-400">✗</span>
                              <span className="text-neutral-500">LIN-243: Fallback to previous valid key</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Suggested Fix diff */}
                      <div className="mx-4 mb-4 rounded-lg overflow-hidden" style={{ border: "1px solid #1A1A1A" }}>
                        <div
                          className="flex items-center justify-between px-4 py-2"
                          style={{ backgroundColor: "#0E0E0E", borderBottom: "1px solid #1A1A1A" }}
                        >
                          <span className="font-mono text-[9px] text-neutral-500">
                            Suggested Fix · auth/key-manager.ts
                          </span>
                          <span
                            className="font-mono text-[9px] text-neutral-400"
                          >
                            Line 42
                          </span>
                        </div>
                        <div className="font-mono text-[9px] leading-relaxed" style={{ backgroundColor: "#070707" }}>
                          <div className="flex items-start px-3 py-1" style={{ backgroundColor: "rgba(239,68,68,0.07)", borderLeft: "2px solid rgba(239,68,68,0.5)" }}>
                            <span className="w-7 shrink-0 select-none text-red-400/40">-42</span>
                            <span className="text-red-400/80">{"const key = process.env.JWT_SECRET || 'fallback';"}</span>
                          </div>
                          <div className="flex items-start px-3 py-1" style={{ backgroundColor: "rgba(16,185,129,0.05)", borderLeft: "2px solid rgba(16,185,129,0.4)" }}>
                            <span className="w-7 shrink-0 select-none text-emerald-400/40">+42</span>
                            <span className="text-emerald-400/80">{"const key = await keyRotator.getActiveKey();"}</span>
                          </div>
                        </div>
                        <div
                          className="flex items-center justify-between px-4 py-2.5"
                          style={{ borderTop: "1px solid #1A1A1A", backgroundColor: "#0E0E0E" }}
                        >
                          <span className="text-[9px] text-neutral-500">
                            AI-generated — confidence 94%
                          </span>
                          <button
                            className="px-3 py-1 text-[9px] font-bold uppercase tracking-wider rounded transition-all hover:bg-neutral-200 cursor-pointer"
                            style={{ backgroundColor: "#FFFFFF", color: "#050505" }}
                          >
                            Apply Patch
                          </button>
                        </div>
                      </div>

                      {/* Approval state */}
                      <div
                        className="mx-4 mb-5 flex items-center justify-between px-4 py-3 rounded-lg"
                        style={{ border: "1px solid #1A1A1A", backgroundColor: "#070707" }}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className="size-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white border border-[#1A1A1A]"
                            style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                          >
                            L
                          </div>
                          <div>
                            <div className="text-[10px] font-bold text-white">lycan-ai[bot]</div>
                            <div className="text-[9px] text-neutral-500">Code Review Agent</div>
                          </div>
                        </div>
                        <div
                          className="flex items-center gap-1.5 px-3 py-1 rounded text-[9px] font-bold uppercase tracking-wider"
                          style={{
                            backgroundColor: "rgba(239,68,68,0.08)",
                            border: "1px solid rgba(239,68,68,0.25)",
                            color: "#EF4444",
                          }}
                        >
                          <span>⛔</span>
                          Changes Required
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge: Checks */}
              <div
                className="absolute -left-10 top-20 animate-float-badge hidden sm:flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg z-20 backdrop-blur-xl"
                style={{
                  border: "1px solid #1A1A1A",
                  backgroundColor: "rgba(11,11,11,0.9)",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                  animationDelay: "0.5s",
                }}
              >
                <span className="size-2 rounded-full bg-[#10B981]" />
                <span className="font-mono text-[10px] text-white">5 / 6 checks passed</span>
              </div>

              {/* Floating badge: Latency */}
              <div
                className="absolute -right-8 bottom-24 animate-float-badge hidden sm:flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg z-20 backdrop-blur-xl"
                style={{
                  border: "1px solid #1A1A1A",
                  backgroundColor: "rgba(11,11,11,0.9)",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                  animationDelay: "1s",
                }}
              >
                <span className="text-[#D1D5DB] text-xs">⚡</span>
                <span className="font-mono text-[10px] text-white">Response: 712ms</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES SECTION ── */}
      <section
        id="features"
        className="relative z-10 py-28"
        style={{ borderTop: "1px solid #1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16">
            <div
              className="mb-4 text-[10px] uppercase tracking-[0.25em] font-mono text-neutral-500 font-bold"
            >
              Capabilities
            </div>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
              Enterprise-grade review.<br />
              <span className="text-neutral-500">Zero configuration required.</span>
            </h2>
          </div>

          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ border: "1px solid #1A1A1A", backgroundColor: "#1A1A1A" }}>
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="group p-8 transition-all duration-300 cursor-default"
                style={{ backgroundColor: "#0B0B0B" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "#121212"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "#0B0B0B"; }}
              >
                <div
                  className="mb-5 inline-flex size-10 items-center justify-center rounded transition-all duration-300 border border-[#1A1A1A] bg-white/[0.02] text-neutral-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/5 group-hover:text-[#10B981]"
                >
                  <f.icon className="size-4" />
                </div>
                <h3 className="mb-2.5 text-sm font-bold text-white tracking-wide">{f.title}</h3>
                <p className="text-xs leading-relaxed text-neutral-500">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        id="how-it-works"
        className="relative z-10 py-28"
        style={{ borderTop: "1px solid #1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 max-w-xl">
            <div
              className="mb-4 text-[10px] uppercase tracking-[0.25em] font-mono text-neutral-500 font-bold"
            >
              Process
            </div>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
              Up in 60 seconds.<br />
              <span className="text-neutral-500">No YAML. No agents. No config files.</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { n: "01", title: "Install GitHub App", body: "One-click install from the GitHub Marketplace. Select which repositories to connect — done in under a minute." },
              { n: "02", title: "Open Any Pull Request", body: "Push your branch and open a PR. Lycan immediately begins analyzing the diff against your codebase context." },
              { n: "03", title: "Receive Instant Review", body: "Within seconds, inline comments, a severity report, and a readiness score appear directly on your PR. No dashboard needed." },
            ].map((s) => (
              <div
                key={s.n}
                className="relative pl-16 py-8 pr-8"
                style={{ borderTop: "1px solid #1A1A1A" }}
              >
                <div
                  className="absolute left-0 top-8 text-6xl font-black font-mono leading-none select-none text-[#1A1A1A]"
                >
                  {s.n}
                </div>
                <div
                  className="mb-1 text-[9px] uppercase tracking-[0.2em] font-mono text-neutral-500 font-bold"
                >
                  Step {s.n}
                </div>
                <h3 className="mb-3 text-base font-bold text-white">{s.title}</h3>
                <p className="text-xs leading-relaxed text-neutral-500">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEW HISTORY ── */}
      <section
        className="relative z-10 py-28"
        style={{ borderTop: "1px solid #1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-10">
            <div
              className="mb-4 text-[10px] uppercase tracking-[0.25em] font-mono text-neutral-500 font-bold"
            >
              Activity
            </div>
            <h2 className="text-3xl font-black tracking-tight text-white" style={{ letterSpacing: "-0.02em" }}>
              Audit-ready review history
            </h2>
          </div>

          <div
            className="overflow-hidden rounded-sm"
            style={{ border: "1px solid #1A1A1A" }}
          >
            {/* Header */}
            <div
              className="grid grid-cols-12 px-6 py-3 text-[9px] uppercase tracking-[0.2em] font-mono"
              style={{ borderBottom: "1px solid #1A1A1A", color: "rgba(255,255,255,0.3)", backgroundColor: "#0B0B0B" }}
            >
              <div className="col-span-1">PR</div>
              <div className="col-span-5">Branch</div>
              <div className="col-span-2">Score</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2 text-right">Time</div>
            </div>
            {HISTORIES.map((h, i) => (
              <div
                key={i}
                className="grid grid-cols-12 items-center px-6 py-4 text-xs font-mono transition-colors"
                style={{
                  borderBottom: i < HISTORIES.length - 1 ? "1px solid #1A1A1A" : "none",
                  backgroundColor: "#050505",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "#121212"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "#050505"; }}
              >
                <div className="col-span-1 text-neutral-500">{h.pr}</div>
                <div className="col-span-5 text-white truncate pr-4">{h.branch}</div>
                <div className="col-span-2 font-bold" style={{ color: h.score >= 90 ? "#10B981" : h.score >= 70 ? "#D1D5DB" : "#EF4444" }}>
                  {h.score}/100
                </div>
                <div className="col-span-2">
                  <span
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm text-[9px] font-bold uppercase tracking-widest"
                    style={
                      h.status === "approved"
                        ? { backgroundColor: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", color: "#10B981" }
                        : { backgroundColor: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "#EF4444" }
                    }
                  >
                    <span
                      className="size-1 rounded-full"
                      style={{ backgroundColor: h.status === "approved" ? "#10B981" : "#EF4444" }}
                    />
                    {h.status === "approved" ? "Approved" : "Changes"}
                  </span>
                </div>
                <div className="col-span-2 text-right text-neutral-500">{h.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GITHUB INTEGRATION ── */}
      <section
        className="relative z-10 py-28"
        style={{ borderTop: "1px solid #1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div
                className="mb-4 text-[10px] uppercase tracking-[0.25em] font-mono text-neutral-500 font-bold"
              >
                Integration
              </div>
              <h2 className="mb-5 text-4xl font-black tracking-tight text-white md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
                Zero-friction<br />
                <span className="text-neutral-500">GitHub-native setup</span>
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-neutral-500">
                Install Lycan directly from the GitHub Marketplace with a single click. No new dashboards to learn. Reviews surface exactly where your team already operates — inside the pull request.
              </p>
              <ul className="space-y-3">
                {[
                  "Granular repository permissions",
                  "Private and public repo support",
                  "Linear, Jira, and Slack integration",
                  "Webhook-based, no polling agents required",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-neutral-400">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Install simulator */}
            <div>
              <div
                className="rounded-sm overflow-hidden"
                style={{ border: "1px solid #1A1A1A", backgroundColor: "#0B0B0B" }}
              >
                <div
                  className="flex items-center gap-3 px-5 py-4"
                  style={{ borderBottom: "1px solid #1A1A1A", backgroundColor: "#0E0E0E" }}
                >
                  <div
                    className="size-8 rounded-full flex items-center justify-center text-lg border border-[#1A1A1A]"
                  >
                    🐙
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">GitHub Marketplace</div>
                    <div className="text-[10px] text-neutral-500">Publisher: Lycan AI Inc.</div>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <div
                    className="rounded-sm p-4 border border-[#1A1A1A]"
                    style={{ backgroundColor: "rgba(255,255,255,0.01)" }}
                  >
                    <div className="text-[9px] uppercase tracking-widest font-mono mb-1.5 text-neutral-500">Target Account</div>
                    <div className="text-xs font-mono text-white">github.com / ankit4399</div>
                  </div>
                  <div
                    className="rounded-sm p-4 border border-[#1A1A1A]"
                    style={{ backgroundColor: "rgba(255,255,255,0.01)" }}
                  >
                    <div className="text-[9px] uppercase tracking-widest font-mono mb-1.5 text-neutral-500">Repository Scope</div>
                    <div className="text-xs font-mono text-white">All repositories</div>
                  </div>

                  {installStep === "idle" && (
                    <button
                      onClick={handleInstall}
                      className="w-full h-11 text-xs font-bold uppercase tracking-widest rounded-sm transition-all hover:bg-neutral-200 cursor-pointer"
                      style={{ backgroundColor: "#FFFFFF", color: "#050505" }}
                    >
                      Install Lycan
                    </button>
                  )}
                  {installStep === "loading" && (
                    <div className="py-2">
                      <div className="flex justify-between text-[10px] font-mono mb-2 text-neutral-500">
                        <span>Configuring webhooks...</span>
                        <span className="text-[#10B981]">{installPct}%</span>
                      </div>
                      <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                        <div
                          className="h-full rounded-full transition-all duration-300 bg-[#10B981]"
                          style={{ width: `${installPct}%` }}
                        />
                      </div>
                    </div>
                  )}
                  {installStep === "done" && (
                    <div
                      className="rounded-sm p-4 flex items-center gap-3 border border-emerald-500/30"
                      style={{ backgroundColor: "rgba(16,185,129,0.05)" }}
                    >
                      <CheckIcon className="size-4 text-emerald-400 shrink-0" />
                      <span className="text-xs text-emerald-400">Lycan connected successfully.</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section
        id="pricing"
        className="relative z-10 py-28"
        style={{ borderTop: "1px solid #1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-12">
            <div
              className="mb-4 text-[10px] uppercase tracking-[0.25em] font-mono text-neutral-500 font-bold"
            >
              Pricing
            </div>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
              Simple pricing.
              <span className="text-neutral-500"> No surprises.</span>
            </h2>
          </div>

          {/* Billing toggle */}
          <div className="mb-10 flex items-center gap-2">
            {(["monthly", "annually"] as const).map((p) => (
              <button
                key={p}
                onClick={() => setBilling(p)}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-widest rounded-sm transition-all cursor-pointer"
                style={
                  billing === p
                    ? { backgroundColor: "#FFFFFF", color: "#050505" }
                    : { border: "1px solid #1A1A1A", color: "#A1A1AA", backgroundColor: "transparent" }
                }
              >
                {p === "annually" ? "Annual (save 20%)" : "Monthly"}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-3xl">
            {PRICING.map((tier) => (
              <div
                key={tier.name}
                className="flex flex-col p-8 rounded-sm"
                style={
                  tier.highlighted
                    ? {
                        border: "1px solid #1A1A1A",
                        backgroundColor: "#0B0B0B",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                      }
                    : {
                        border: "1px solid #1A1A1A",
                        backgroundColor: "#0B0B0B",
                      }
                }
              >
                {tier.highlighted && (
                  <div
                    className="self-start mb-4 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded-sm"
                    style={{ backgroundColor: "#FFFFFF", color: "#050505" }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="text-base font-bold text-white mb-1">{tier.name}</div>
                <div className="text-[11px] mb-6 text-neutral-500">{tier.description}</div>

                <div className="flex items-baseline gap-1.5 mb-1">
                  <span
                    className="text-4xl font-black font-mono text-white"
                  >
                    {tier.price[billing]}
                  </span>
                  <span className="text-xs text-neutral-500">
                    / {tier.period[billing]}
                  </span>
                </div>
                <div className="h-px my-6 bg-[#1A1A1A]" />

                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-400">
                      <span className="text-[#10B981] mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/sign-in"
                  className="inline-flex h-11 items-center justify-center text-xs font-bold uppercase tracking-widest rounded-sm transition-all hover:bg-neutral-200"
                  style={
                    tier.highlighted
                      ? { backgroundColor: "#FFFFFF", color: "#050505" }
                      : { border: "1px solid #1A1A1A", color: "#FFFFFF" }
                  }
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="relative z-10 py-28"
        style={{ borderTop: "1px solid #1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-8">
          <div
            className="relative overflow-hidden rounded-sm px-12 py-16 text-center border border-[#1A1A1A]"
            style={{ backgroundColor: "#0B0B0B" }}
          >
            <div
              className="mb-3 text-[10px] uppercase tracking-[0.25em] font-mono text-neutral-500 font-bold"
            >
              Ready to deploy
            </div>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl mb-4" style={{ letterSpacing: "-0.02em" }}>
              Trusted code. Every merge.
            </h2>
            <p className="mb-10 text-sm max-w-lg mx-auto text-neutral-500">
              Connect your GitHub organization to Lycan today. Your next pull request will be reviewed before your first commit message is typed.
            </p>
            <div className="flex items-center justify-center gap-5 flex-wrap">
              <Link
                href="/sign-in"
                className="inline-flex h-12 items-center gap-2.5 px-8 text-sm font-bold tracking-wide rounded-sm transition-all hover:bg-neutral-200"
                style={{ backgroundColor: "#FFFFFF", color: "#050505" }}
              >
                <GitHubIcon className="size-4" />
                Start for Free
              </Link>
              <a
                href="mailto:team@lycan.ai"
                className="inline-flex h-12 items-center px-8 text-sm font-medium tracking-wide rounded-sm transition-all border border-[#1A1A1A] text-[#A1A1AA]"
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#FFFFFF"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1A1A1A"; e.currentTarget.style.color = "#A1A1AA"; }}
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="relative z-10 py-12"
        style={{ borderTop: "1px solid #1A1A1A" }}
      >
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/wolf_image.png"
                alt="Lycan"
                className="size-7 rounded-full object-cover border border-white/10"
              />
              <span className="text-sm font-bold tracking-[0.18em] uppercase text-white font-mono">Lycan</span>
            </Link>

            <nav className="flex items-center gap-8">
              {[
                { label: "Features", href: "#features" },
                { label: "How it works", href: "#how-it-works" },
                { label: "Pricing", href: "#pricing" },
                { label: "Sign in", href: "/sign-in" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-xs uppercase tracking-widest transition-colors text-neutral-500 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div
            className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-[10px] font-mono border-t border-[#1A1A1A] text-neutral-500"
          >
            <span>© {new Date().getFullYear()} Lycan Technologies Inc. All rights reserved.</span>
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
