// ThemeToggle.tsx
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const start = stored ?? (prefersDark ? "dark" : "light");
    if (start === "dark") { root.classList.add("dark"); setIsDarkMode(true); }
    else { root.classList.remove("dark"); setIsDarkMode(false); }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDarkMode) { root.classList.remove("dark"); localStorage.setItem("theme","light"); setIsDarkMode(false); }
    else { root.classList.add("dark"); localStorage.setItem("theme","dark"); setIsDarkMode(true); }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn("fixed z-50 top-5 right-5 p-2 rounded-full transition-colors duration-300 focus:outline-none")}
      aria-label="Toggle theme"
    >
      {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-blue-300" />}
    </button>
  );
};
