import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Eye,
  Globe2,
  Menu,
  Moon,
  MapPin,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
  X,
  Zap,
} from "lucide-react";

function Landing() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-[#08100d] text-white transition-colors duration-500"
          : "min-h-screen bg-[#f7faf8] text-[#14201b] transition-colors duration-500"
      }
    >
      {/* NAVBAR */}
      <header
        className={
          darkMode
            ? "fixed top-0 z-50 w-full border-b border-white/10 bg-[#08100d]/80 backdrop-blur-xl"
            : "fixed top-0 z-50 w-full border-b border-black/5 bg-white/75 backdrop-blur-xl"
        }
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          {/* LOGO */}
          <a href="#" className="flex items-center gap-3" aria-label="FLOW home">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#123d2a] text-white shadow-lg shadow-emerald-900/20">
              <span className="text-lg font-black">F</span>
            </div>

            <div>
              <div className="text-lg font-black tracking-tight">FLOW</div>
              <div
                className={
                  darkMode
                    ? "text-[9px] font-medium uppercase tracking-[0.25em] text-white/45"
                    : "text-[9px] font-medium uppercase tracking-[0.25em] text-black/40"
                }
              >
                Civic Intelligence
              </div>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#how"
              className="text-sm font-medium opacity-70 transition hover:opacity-100"
            >
              How it works
            </a>

            <a
              href="#impact"
              className="text-sm font-medium opacity-70 transition hover:opacity-100"
            >
              Impact
            </a>

            <a
              href="#accessibility"
              className="text-sm font-medium opacity-70 transition hover:opacity-100"
            >
              Accessibility
            </a>
          </div>

          {/* ACTIONS */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={
                darkMode
                  ? "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                  : "flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white transition hover:bg-black/5"
              }
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-semibold transition hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5">
              Sign in
            </button>

            <button
  type="button"
  onClick={() => navigate("/login")}
  className="rounded-full bg-[#123d2a] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-[#0d3020]"
>
  Report an issue
</button>
          </div>

          {/* MOBILE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div
            className={
              darkMode
                ? "border-t border-white/10 bg-[#08100d] p-5 md:hidden"
                : "border-t border-black/5 bg-white p-5 md:hidden"
            }
          >
            <div className="flex flex-col gap-5">
              <a href="#how" onClick={() => setMenuOpen(false)}>
                How it works
              </a>
              <a href="#impact" onClick={() => setMenuOpen(false)}>
                Impact
              </a>
              <a href="#accessibility" onClick={() => setMenuOpen(false)}>
                Accessibility
              </a>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-2 text-left"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                {darkMode ? "Light mode" : "Dark mode"}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <main>
        <section className="relative overflow-hidden pt-32 lg:pt-40">
          {/* decorative background */}
          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 lg:grid-cols-[1fr_1.05fr] lg:px-8 lg:pb-28">
            {/* COPY */}
            <div>
              <div
                className={
                  darkMode
                    ? "mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300"
                    : "mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-800"
                }
              >
                <Sparkles size={14} />
                AI-powered civic intelligence
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                See what's
                <span className="block text-[#21a366]">breaking.</span>
                Fix what matters
                <span className="block">first.</span>
              </h1>

              <p
                className={
                  darkMode
                    ? "mt-7 max-w-xl text-lg leading-8 text-white/60"
                    : "mt-7 max-w-xl text-lg leading-8 text-black/60"
                }
              >
                FLOW turns scattered community reports into actionable
                intelligence — helping people report problems and helping
                authorities fix the issues that matter most.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button className="group flex items-center justify-center gap-2 rounded-full bg-[#123d2a] px-7 py-4 font-bold text-white shadow-xl shadow-emerald-950/20 transition hover:-translate-y-1 hover:bg-[#0d3020]">
                  Report a problem
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

                <button
                  className={
                    darkMode
                      ? "flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-semibold transition hover:bg-white/10"
                      : "flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-7 py-4 font-semibold shadow-sm transition hover:bg-black/5"
                  }
                >
                  Explore the city
                  <MapPin size={18} />
                </button>
              </div>

              {/* TRUST */}
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm opacity-60">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={16} />
                  Privacy conscious
                </span>

                <span className="flex items-center gap-2">
                  <Eye size={16} />
                  Accessible by design
                </span>

                <span className="flex items-center gap-2">
                  <Globe2 size={16} />
                  Community powered
                </span>
              </div>
            </div>

            {/* VISUAL */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#dfe9e3] shadow-2xl shadow-black/10 dark:border-white/10 dark:bg-[#12221b]">
                {/* CITY IMAGE */}
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=85"
                  alt="Urban city skyline representing the community FLOW serves"
                  className="h-[430px] w-full object-cover opacity-75 mix-blend-multiply dark:opacity-50 dark:mix-blend-normal"
                />

                {/* MAP OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06120c]/95 via-transparent to-transparent" />

                {/* ISSUE MARKERS */}
                <div className="absolute left-[22%] top-[32%]">
                  <div className="relative">
                    <span className="absolute -inset-3 animate-ping rounded-full bg-red-400/30" />
                    <span className="relative flex h-4 w-4 rounded-full border-2 border-white bg-red-500 shadow-lg" />
                  </div>
                </div>

                <div className="absolute left-[63%] top-[43%]">
                  <span className="flex h-4 w-4 rounded-full border-2 border-white bg-orange-400 shadow-lg" />
                </div>

                <div className="absolute left-[74%] top-[68%]">
                  <span className="flex h-4 w-4 rounded-full border-2 border-white bg-yellow-400 shadow-lg" />
                </div>

                <div className="absolute left-[40%] top-[70%]">
                  <div className="relative">
                    <span className="absolute -inset-3 animate-ping rounded-full bg-red-400/20" />
                    <span className="relative flex h-4 w-4 rounded-full border-2 border-white bg-red-500 shadow-lg" />
                  </div>
                </div>

                {/* FLOATING CARD */}
                <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/15 bg-[#08120d]/85 p-5 text-white shadow-2xl backdrop-blur-xl sm:left-auto sm:w-[310px]">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider text-white/50">
                        Emerging issue
                      </div>

                      <div className="mt-1 text-lg font-bold">
                        Drainage blockage
                      </div>
                    </div>

                    <div className="rounded-full bg-red-500/15 px-2.5 py-1 text-xs font-bold text-red-300">
                      HIGH
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm text-white/60">
                    <span>24 reports</span>
                    <span className="text-emerald-300">↑ 180%</span>
                  </div>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[88%] rounded-full bg-emerald-400" />
                  </div>

                  <div className="mt-3 text-xs text-white/45">
                    AI priority score: 88/100
                  </div>
                </div>
              </div>

              {/* SMALL FLOATING STAT */}
              <div
                className={
                  darkMode
                    ? "absolute -bottom-5 -left-4 rounded-2xl border border-white/10 bg-[#13231b]/95 p-4 shadow-xl backdrop-blur-xl sm:-left-7"
                    : "absolute -bottom-5 -left-4 rounded-2xl border border-black/5 bg-white/95 p-4 shadow-xl backdrop-blur-xl sm:-left-7"
                }
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <CheckCircle2 size={21} />
                  </div>

                  <div>
                    <div className="text-lg font-black">1,055</div>
                    <div className="text-xs opacity-50">issues resolved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section
          id="impact"
          className={
            darkMode
              ? "border-y border-white/10 bg-white/[0.02]"
              : "border-y border-black/5 bg-white"
          }
        >
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-12 md:grid-cols-4 lg:px-8">
            <Stat number="1,284" label="Issues reported" icon={<MapPin />} />
            <Stat number="1,055" label="Issues resolved" icon={<CheckCircle2 />} />
            <Stat number="326" label="Currently active" icon={<Zap />} />
            <Stat number="4.8k" label="Community members" icon={<Users />} />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#21a366]">
              How FLOW works
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              From scattered reports to action.
            </h2>

            <p className="mt-5 text-lg leading-8 opacity-60">
              FLOW uses AI to understand what people are reporting, connect
              duplicate incidents, identify emerging problems, and help
              authorities prioritize their response.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <FeatureCard
              number="01"
              icon={<MapPin />}
              title="People report"
              description="Citizens can report a problem using text, images, location, or voice — in a way that works for them."
            />

            <FeatureCard
              number="02"
              icon={<Sparkles />}
              title="FLOW understands"
              description="AI identifies the issue, extracts useful evidence, detects similar reports, and builds a clearer picture."
            />

            <FeatureCard
              number="03"
              icon={<Zap />}
              title="Authorities act"
              description="Administrators get a prioritized command center to investigate, assign, track, and resolve incidents."
            />
          </div>
        </section>

        {/* ACCESSIBILITY */}
        <section
          id="accessibility"
          className={
            darkMode
              ? "border-y border-white/10 bg-[#0d1b15]"
              : "border-y border-black/5 bg-[#edf7f0]"
          }
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#21a366]">
                <Eye size={17} />
                Accessibility first
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Civic technology should work for everyone.
              </h2>

              <p className="mt-4 leading-7 opacity-60">
                FLOW is designed with keyboard navigation, screen-reader
                support, high contrast, reduced motion, readable typography,
                voice reporting, and multilingual experiences in mind.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                "Keyboard",
                "Screen reader",
                "Voice",
                "High contrast",
              ].map((item) => (
                <div
                  key={item}
                  className={
                    darkMode
                      ? "rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-sm font-semibold"
                      : "rounded-2xl border border-black/5 bg-white px-5 py-4 text-center text-sm font-semibold shadow-sm"
                  }
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#123d2a] px-6 py-16 text-center text-white shadow-2xl shadow-emerald-950/20 sm:px-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Sparkles />
            </div>

            <h2 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl">
              Your city speaks.
              <br />
              <span className="text-emerald-300">FLOW listens.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-white/60">
              One report can start a change. Thousands of reports can reveal
              what a community needs next.
            </p>

            <button className="mt-8 rounded-full bg-white px-7 py-3.5 font-bold text-[#123d2a] transition hover:-translate-y-1">
              Report an issue
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className={
          darkMode
            ? "border-t border-white/10 px-5 py-8 text-white/40"
            : "border-t border-black/5 px-5 py-8 text-black/40"
        }
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm sm:flex-row lg:px-8">
          <div>© 2026 FLOW Civic Intelligence</div>
          <div>Built for communities. Designed for everyone.</div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ number, label, icon }) {
  return (
    <div className="border-r border-black/5 px-5 py-4 first:pl-0 last:border-0 dark:border-white/10">
      <div className="mb-3 text-[#21a366]">{icon}</div>
      <div className="text-3xl font-black tracking-tight">{number}</div>
      <div className="mt-1 text-sm opacity-50">{label}</div>
    </div>
  );
}

function FeatureCard({ number, icon, title, description }) {
  return (
    <div className="group rounded-[1.75rem] border border-black/5 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03]">
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#21a366] dark:bg-emerald-400/10">
          {icon}
        </div>

        <span className="text-sm font-black text-black/20 dark:text-white/20">
          {number}
        </span>
      </div>

      <h3 className="mt-8 text-xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 opacity-55">{description}</p>

      <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#21a366]">
        Learn more
        <ArrowRight
          size={16}
          className="transition group-hover:translate-x-1"
        />
      </div>
    </div>
  );
}

export default Landing;