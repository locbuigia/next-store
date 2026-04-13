"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";

function DarkMode() {
  const { setTheme, theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // prevent hydration mismatch
  if (!mounted) return null;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 rounded-md border hover:bg-gray-100 transition"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-moon-star-icon lucide-moon-star"
          >
            <path d="M18 5h4" />
            <path d="M20 3v4" />
            <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sun-icon lucide-sun"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        )}
      </button>

      <div
        className={`
          absolute right-0 mt-2 w-31 rounded-md border shadow-lg
          transition-all duration-200 origin-top bg-white dark:bg-slate-950
          ${
            open
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
      >
        <ul className="py-2 text-sm">
          {["light", "dark", "system"].map((mode) => (
            <li key={mode}>
              <button
                onClick={() => {
                  setTheme(mode);
                  setOpen(false);
                }}
                className={`w-full text-center px-4 py-2 hover:bg-gray-100 transition capitalize ${
                  theme === mode ? "font-semibold" : ""
                }`}
              >
                {mode}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DarkMode;
