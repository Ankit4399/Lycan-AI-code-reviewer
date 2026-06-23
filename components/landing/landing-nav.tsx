"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed z-50 flex justify-center w-full transition-all duration-500 ease-out",
        scrolled
          ? "top-4 inset-x-0 px-6"
          : "top-0 inset-x-0 px-0"
      )}
    >
      <nav
        className={cn(
          "flex items-center justify-between transition-all duration-500 ease-out",
          scrolled
            /* Floating pill with glassmorphism */
            ? "w-full max-w-3xl rounded-full px-5 py-3 backdrop-blur-2xl"
            /* Full-width bar */
            : "w-full max-w-7xl px-8 py-5"
        )}
        style={
          scrolled
            ? {
                backgroundColor: "rgba(11,11,11,0.75)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03) inset",
              }
            : {
                backgroundColor: "transparent",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }
        }
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80 group"
          aria-label="Home"
        >
          <div className="relative">
            <img
              src="/wolf_image.png"
              alt="Lycan"
              className={cn(
                "rounded-full object-cover transition-all duration-500",
                scrolled ? "size-7" : "size-8"
              )}
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            />
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: "0 0 8px rgba(255,255,255,0.1)" }}
            />
          </div>
          <span
            className={cn(
              "font-bold tracking-[0.18em] text-white uppercase font-mono transition-all duration-500",
              scrolled ? "text-[11px]" : "text-sm"
            )}
          >
            Lycan
          </span>
        </Link>

        {/* ── Nav links ── */}
        <div className="hidden items-center gap-6 md:flex">
          {[
            { label: "Features", href: "#features" },
            { label: "How it works", href: "#how-it-works" },
            { label: "Pricing", href: "#pricing" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={cn(
                "font-medium tracking-wider uppercase transition-colors hover:text-white",
                scrolled ? "text-[10px] text-neutral-400" : "text-xs text-neutral-400"
              )}
            >
              {label}
            </a>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="flex items-center gap-5">
          <Link
            href="/sign-in"
            className={cn(
              "font-medium tracking-wider uppercase transition-colors hover:text-white text-neutral-400",
              scrolled ? "text-[10px]" : "text-xs"
            )}
          >
            Sign in
          </Link>
          <Link
            href="/sign-in"
            className={cn(
              "inline-flex items-center font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-200",
              scrolled ? "h-8 px-4 text-[10px] rounded-full" : "h-9 px-5 text-xs rounded-sm"
            )}
            style={{
              backgroundColor: "#FFFFFF",
              color: "#050505",
            }}
          >
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
}
