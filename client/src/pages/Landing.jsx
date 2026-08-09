import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Moon,
  Sun,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Landing() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("flowDarkMode") === "true"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("flowDarkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#07100c] text-white">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07100c]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#125c3b] text-lg font-black">
              F
            </div>

            <div>
              <div className="text-lg font-black tracking-tight">
                FLOW
              </div>

              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                Civic Intelligence
              </div>
            </div>
          </Link>

          {/* NAVIGATION */}
          <nav className="hidden items-center gap-8 md:flex">

            <a
              href="#how-it-works"
              className="text-sm font-medium text-white/65 transition hover:text-white"
            >
              How it works
            </a>

            <a
              href="#impact"
              className="text-sm font-medium text-white/65 transition hover:text-white"
            >
              Impact
            </a>

            <a
              href="#accessibility"
              className="text-sm font-medium text-white/65 transition hover:text-white"
            >
              Accessibility
            </a>

          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* DARK MODE */}
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/75 transition hover:bg-white/10"
            >
              {darkMode ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            {/* SIGN IN */}
            <Link
              to="/login"
              className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Sign in
            </Link>

            {/* REPORT */}
            <Link
              to="/login"
              className="hidden rounded-full bg-[#125c3b] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-[#0e7549] sm:block"
            >
              Report an issue
            </Link>

          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <main>

        <section className="relative overflow-hidden">

          {/* BACKGROUND GLOW */}
          <div className="pointer-events-none absolute left-[-15%] top-20 h-[500px] w-[500px] rounded-full bg-emerald-600/15 blur-[140px]" />

          <div className="pointer-events-none absolute right-[-10%] top-10 h-[450px] w-[450px] rounded-full bg-teal-500/10 blur-[140px]" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">

            {/* HERO TEXT */}
            <div>

              {/* BADGE */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-xs font-bold text-emerald-300">
                <Sparkles size={14} />
                AI-powered civic intelligence
              </div>

              {/* HEADING */}
              <h1 className="mt-7 max-w-2xl text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[72px]">

                See what's
                <span className="block text-[#21c878]">
                  breaking.
                </span>

                <span className="block">
                  Fix what matters
                </span>

                <span className="block">
                  first.
                </span>

              </h1>

              {/* DESCRIPTION */}
              <p className="mt-7 max-w-xl text-base leading-8 text-white/55 sm:text-lg">
                FLOW turns scattered community reports into actionable
                intelligence — helping people report problems and helping
                authorities fix the issues that matter most.
              </p>

              {/* BUTTONS */}
              <div className="mt-9 flex flex-wrap gap-3">

                {/* REPORT PROBLEM */}
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 rounded-full bg-[#125c3b] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-950/30 transition hover:-translate-y-1 hover:bg-[#0e7549]"
                >
                  Report a problem
                  <ArrowRight size={17} />
                </Link>

                {/* EXPLORE */}
                <a
                  href="#impact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-bold text-white transition hover:bg-white/[0.08]"
                >
                  Explore the city
                  <MapPin size={17} />
                </a>

              </div>

            </div>

            {/* ================= HERO VISUAL ================= */}
            <div className="relative">

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#102019] shadow-2xl shadow-black/40">

                {/* CITY IMAGE */}
                <img
                  src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=85"
                  alt="City skyline representing FLOW civic intelligence"
                  className="h-[420px] w-full object-cover opacity-70 sm:h-[500px]"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07100c] via-transparent to-transparent" />

                <div className="absolute inset-0 bg-emerald-950/20" />

                {/* MAP MARKER 1 */}
                <MapMarker
                  top="32%"
                  left="28%"
                  color="red"
                />

                {/* MAP MARKER 2 */}
                <MapMarker
                  top="43%"
                  left="67%"
                  color="orange"
                />

                {/* MAP MARKER 3 */}
                <MapMarker
                  top="68%"
                  left="47%"
                  color="red"
                />

                {/* ISSUE CARD */}
                <div className="absolute bottom-8 right-6 w-[280px] rounded-[1.5rem] border border-white/10 bg-[#0d1712]/90 p-5 shadow-2xl backdrop-blur-xl sm:right-8 sm:w-[320px]">

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-bold uppercase tracking-wider text-white/45">
                      Emerging issue
                    </span>

                    <span className="rounded-full bg-red-400/15 px-3 py-1 text-[10px] font-black text-red-300">
                      HIGH
                    </span>

                  </div>

                  <h3 className="mt-3 text-xl font-black">
                    Drainage blockage
                  </h3>

                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-sm text-white/45">
                      24 reports
                    </span>

                    <span className="text-sm font-black text-[#21c878]">
                      ↑ 180%
                    </span>

                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[88%] rounded-full bg-[#21c878]" />
                  </div>

                  <div className="mt-3 text-xs text-white/30">
                    AI priority score: 88/100
                  </div>

                </div>

              </div>

              {/* RESOLVED CARD */}
              <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#122019]/95 p-4 shadow-xl backdrop-blur-xl sm:left-[-20px]">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-300/15 text-emerald-300">
                  <CheckCircle2 size={22} />
                </div>

                <div>
                  <div className="text-xl font-black">
                    1,055
                  </div>

                  <div className="text-xs text-white/40">
                    issues resolved
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section
          id="how-it-works"
          className="border-t border-white/5 bg-[#09130e]"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

            <div className="max-w-2xl">

              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#21c878]">
                How it works
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                From complaint to action.
              </h2>

              <p className="mt-4 text-white/45">
                FLOW transforms an unstructured citizen complaint into
                prioritized civic intelligence.
              </p>

            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-4">

              <Step
                number="01"
                title="Report"
                text="Citizens describe a real-world problem."
              />

              <Step
                number="02"
                title="Understand"
                text="AI identifies the category, severity and risks."
              />

              <Step
                number="03"
                title="Prioritize"
                text="Administrators see the issues that need attention first."
              />

              <Step
                number="04"
                title="Resolve"
                text="Issues move through review, action and resolution."
              />

            </div>

          </div>
        </section>

        {/* ================= IMPACT ================= */}
        <section
          id="impact"
          className="border-t border-white/5 bg-[#07100c]"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#21c878]">
                  Community impact
                </p>

                <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                  Every report can become a signal.
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-white/45">
                  Instead of letting individual complaints disappear into
                  disconnected systems, FLOW connects people, problems,
                  intelligence and action.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <ImpactCard
                  value="1,055"
                  label="Issues resolved"
                />

                <ImpactCard
                  value="88/100"
                  label="AI priority score"
                />

                <ImpactCard
                  value="24"
                  label="Community reports"
                />

                <ImpactCard
                  value="180%"
                  label="Trend detected"
                />

              </div>

            </div>

          </div>
        </section>

        {/* ================= ACCESSIBILITY ================= */}
        <section
          id="accessibility"
          className="border-t border-white/5 bg-[#09130e]"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

            <div className="rounded-[2rem] border border-white/10 bg-[#102019] p-8 sm:p-10">

              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

                <div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-300">
                      <Sparkles size={20} />
                    </div>

                    <span className="font-black">
                      Built for everyone
                    </span>
                  </div>

                  <h2 className="mt-5 text-3xl font-black">
                    Accessibility isn't an afterthought.
                  </h2>

                  <p className="mt-3 max-w-xl leading-7 text-white/45">
                    FLOW provides accessible controls including dark mode,
                    large text and a responsive interface designed for
                    different users and devices.
                  </p>

                </div>

                <Link
                  to="/login"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#125c3b] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0e7549]"
                >
                  Get started
                  <ArrowRight size={17} />
                </Link>

              </div>

            </div>

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/5 bg-[#050b08]">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-8 text-xs text-white/35 sm:flex-row sm:items-center lg:px-8">

          <div className="font-bold text-white/55">
            FLOW • Civic Intelligence
          </div>

          <div>
            Built for HackDevengers 1.0
          </div>

        </div>

      </footer>

    </div>
  );
}

/* ================================
   MAP MARKER
================================ */

function MapMarker({
  top,
  left,
  color,
}) {
  const colors = {
    red: "bg-red-500",
    orange: "bg-orange-400",
    yellow: "bg-yellow-400",
  };

  return (
    <div
      className="absolute"
      style={{ top, left }}
    >
      <div className="relative">

        <div
          className={`absolute -inset-3 animate-ping rounded-full opacity-30 ${colors[color]}`}
        />

        <div
          className={`relative h-5 w-5 rounded-full border-2 border-white shadow-xl ${colors[color]}`}
        />

      </div>
    </div>
  );
}

/* ================================
   STEP CARD
================================ */

function Step({
  number,
  title,
  text,
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.025] p-6">

      <div className="text-sm font-black text-[#21c878]">
        {number}
      </div>

      <h3 className="mt-6 text-xl font-black">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-white/40">
        {text}
      </p>

    </div>
  );
}

/* ================================
   IMPACT CARD
================================ */

function ImpactCard({
  value,
  label,
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.025] p-6">

      <div className="text-3xl font-black text-[#21c878]">
        {value}
      </div>

      <div className="mt-2 text-sm text-white/40">
        {label}
      </div>

    </div>
  );
}

export default Landing;