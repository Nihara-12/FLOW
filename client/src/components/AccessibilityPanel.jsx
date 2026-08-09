import { Accessibility, Moon, Sun, Type } from "lucide-react";
import { useEffect, useState } from "react";

function AccessibilityPanel() {
  const [dark, setDark] = useState(
    localStorage.getItem("flowDarkMode") === "true"
  );

  const [largeText, setLargeText] = useState(
    localStorage.getItem("flowLargeText") === "true"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("flowDarkMode", dark);
  }, [dark]);

  useEffect(() => {
    document.documentElement.classList.toggle("text-large", largeText);
    localStorage.setItem("flowLargeText", largeText);
  }, [largeText]);

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-2xl border border-black/10 bg-white p-2 shadow-xl"
      aria-label="Accessibility controls"
    >
      <button
        type="button"
        onClick={() => setLargeText(!largeText)}
        title="Toggle large text"
        aria-label="Toggle large text"
        className="flex h-10 w-10 items-center justify-center rounded-xl text-black/70 transition hover:bg-black/5"
      >
        <Type size={18} />
      </button>

      <button
        type="button"
        onClick={() => setDark(!dark)}
        title="Toggle dark mode"
        aria-label="Toggle dark mode"
        className="flex h-10 w-10 items-center justify-center rounded-xl text-black/70 transition hover:bg-black/5"
      >
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <div className="hidden items-center gap-1 px-2 text-xs font-bold text-black/50 sm:flex">
        <Accessibility size={16} />
        Accessibility
      </div>
    </div>
  );
}

export default AccessibilityPanel;