import {
  Bell,
  CheckCircle2,
  ChevronRight,
  Clock3,
  MapPin,
  Menu,
  Plus,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import AccessibilityPanel from "../../components/AccessibilityPanel";

const issues = [
  {
    id: 1,
    title: "Road damage near school",
    category: "Roads",
    status: "In Progress",
    priority: "High",
    location: "Anna Nagar",
    reports: 17,
  },
  {
    id: 2,
    title: "Streetlight not working",
    category: "Lighting",
    status: "Under Review",
    priority: "Medium",
    location: "Block C",
    reports: 8,
  },
  {
    id: 3,
    title: "Drainage blockage",
    category: "Drainage",
    status: "Resolved",
    priority: "High",
    location: "Market Road",
    reports: 24,
  },
];

function CitizenDashboard() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const user = JSON.parse(
    localStorage.getItem("flowUser") || "{}"
  );

  return (
    <div className="min-h-screen bg-[#f5f8f6] text-[#14201b]">

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#123d2a] font-black text-white">
              F
            </div>

            <div>
              <div className="font-black">
                FLOW
              </div>

              <div className="text-[9px] uppercase tracking-[0.2em] text-black/40">
                Civic Intelligence
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-6 md:flex">

            <Link
              to="/dashboard"
              className="text-sm font-bold text-[#168653]"
            >
              Dashboard
            </Link>

            <Link
              to="/report"
              className="text-sm font-medium text-black/55 transition hover:text-black"
            >
              Report issue
            </Link>

            {/* NOTIFICATIONS */}
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.03]"
              aria-label="Notifications"
            >
              <Bell size={18} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            {/* USER */}
            <div className="flex items-center gap-3 border-l border-black/10 pl-5">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dcefe3] font-bold text-[#168653]">
                {(user.name || "U")
                  .charAt(0)
                  .toUpperCase()}
              </div>

              <div>
                <div className="text-sm font-bold">
                  {user.name || "Community Member"}
                </div>

                <div className="text-xs text-black/40">
                  Citizen
                </div>
              </div>

            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="border-t border-black/5 bg-white p-5 md:hidden">

            <div className="flex flex-col gap-4">

              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="font-semibold"
              >
                Dashboard
              </Link>

              <Link
                to="/report"
                onClick={() => setMenuOpen(false)}
                className="font-semibold"
              >
                Report issue
              </Link>

              <button
                type="button"
                className="text-left font-semibold"
              >
                Notifications
              </button>

            </div>

          </div>
        )}
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">

        {/* GREETING */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#21a366]">
              Your community
            </p>

            <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
              Good afternoon,{" "}
              {user.name?.split(" ")[0] || "there"} 👋
            </h1>

            <p className="mt-3 max-w-xl text-black/50">
              Here's what's happening around you.
              Together, small reports become meaningful
              change.
            </p>

          </div>

          <button
            type="button"
            onClick={() => navigate("/report")}
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#123d2a] px-6 py-3.5 font-bold text-white shadow-xl shadow-emerald-950/15 transition hover:-translate-y-1"
          >
            <Plus size={19} />
            Report an issue
          </button>

        </div>

        {/* STAT CARDS */}
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            icon={<MapPin />}
            value="3"
            label="Your reports"
            detail="This month"
          />

          <StatCard
            icon={<Clock3 />}
            value="1"
            label="Under review"
            detail="Being investigated"
          />

          <StatCard
            icon={<CheckCircle2 />}
            value="7"
            label="Resolved nearby"
            detail="This month"
          />

          <StatCard
            icon={<TrendingUp />}
            value="24"
            label="Community reports"
            detail="Near you"
          />

        </div>

        {/* CONTENT GRID */}
        <div className="mt-7 grid gap-6 lg:grid-cols-[1.45fr_0.75fr]">

          {/* MAP */}
          <section className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm">

            <div className="flex items-center justify-between border-b border-black/5 px-6 py-5">

              <div>
                <h2 className="font-black">
                  Issues near you
                </h2>

                <p className="mt-1 text-xs text-black/40">
                  Live community reports
                </p>
              </div>

              <button
                type="button"
                className="flex items-center gap-1 text-sm font-bold text-[#168653]"
              >
                View map
                <ChevronRight size={16} />
              </button>

            </div>

            {/* MAP AREA */}
            <div className="relative h-[420px] overflow-hidden bg-[#dce9df]">

              <img
                src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=80"
                alt="Aerial city view representing the community issue map"
                className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-multiply"
              />

              {/* MAP GRID */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(#123d2a 1px, transparent 1px), linear-gradient(90deg, #123d2a 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />

              {/* ISSUE MARKERS */}
              <Marker
                top="25%"
                left="27%"
                type="red"
              />

              <Marker
                top="42%"
                left="62%"
                type="orange"
              />

              <Marker
                top="65%"
                left="42%"
                type="yellow"
              />

              <Marker
                top="72%"
                left="76%"
                type="red"
              />

              {/* USER LOCATION */}
              <div className="absolute left-[50%] top-[50%]">

                <div className="absolute -inset-5 animate-ping rounded-full bg-blue-400/20" />

                <div className="relative flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-blue-500 text-white shadow-xl">
                  <MapPin
                    size={18}
                    fill="currentColor"
                  />
                </div>

              </div>

              {/* LEGEND */}
              <div className="absolute bottom-5 left-5 rounded-2xl border border-white/40 bg-white/90 p-4 shadow-xl backdrop-blur">

                <div className="text-xs font-bold text-black/50">
                  PRIORITY
                </div>

                <div className="mt-2 flex flex-wrap gap-4 text-xs font-medium">

                  <span className="flex items-center gap-1.5">
                    <i className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    High
                  </span>

                  <span className="flex items-center gap-1.5">
                    <i className="h-2.5 w-2.5 rounded-full bg-orange-400" />
                    Medium
                  </span>

                  <span className="flex items-center gap-1.5">
                    <i className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    Low
                  </span>

                </div>
              </div>

            </div>
          </section>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">

            {/* AI CARD */}
            <section className="rounded-[2rem] bg-[#123d2a] p-6 text-white shadow-xl shadow-emerald-950/15">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <Sparkles size={20} />
                </div>

                <div>
                  <div className="font-black">
                    FLOW intelligence
                  </div>

                  <div className="text-xs text-white/45">
                    What's changing nearby
                  </div>
                </div>

              </div>

              <div className="mt-6 rounded-2xl bg-white/10 p-4">

                <div className="flex items-center justify-between">

                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Emerging issue
                  </span>

                  <TrendingUp
                    size={16}
                    className="text-emerald-300"
                  />

                </div>

                <h3 className="mt-2 font-bold">
                  Drainage complaints are rising
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  Reports around Market Road increased
                  180% this week.
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-300">
                  24 community reports
                  <ChevronRight size={14} />
                </div>

              </div>

            </section>

            {/* MY REPORTS */}
            <section className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <h2 className="font-black">
                  Your reports
                </h2>

                <Link
                  to="/report"
                  className="text-xs font-bold text-[#168653]"
                >
                  New report
                </Link>

              </div>

              <div className="mt-5 space-y-3">

                {issues.slice(0, 3).map((issue) => (
                  <div
                    key={issue.id}
                    className="rounded-2xl border border-black/5 p-4 transition hover:border-emerald-200 hover:bg-emerald-50/30"
                  >

                    <div className="flex items-start justify-between gap-3">

                      <div>

                        <div className="text-sm font-bold">
                          {issue.title}
                        </div>

                        <div className="mt-1 flex items-center gap-1 text-xs text-black/40">
                          <MapPin size={12} />
                          {issue.location}
                        </div>

                      </div>

                      <StatusBadge
                        status={issue.status}
                      />

                    </div>

                  </div>
                ))}

              </div>

            </section>

          </div>
        </div>

        {/* COMMUNITY IMPACT */}
        <section className="mt-7 rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>

              <div className="flex items-center gap-2">

                <ShieldAlert
                  size={19}
                  className="text-[#21a366]"
                />

                <h2 className="font-black">
                  Your community impact
                </h2>

              </div>

              <p className="mt-2 text-sm text-black/45">
                Your reports help FLOW identify problems
                before they grow.
              </p>

            </div>

            <div className="text-sm font-bold text-[#168653]">
              3 reports • 2 resolved
            </div>

          </div>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-black/5">

            <div className="h-full w-[72%] rounded-full bg-[#21a366]" />

          </div>

        </section>

      </main>

      {/* ACCESSIBILITY CONTROLS */}
      <AccessibilityPanel />

    </div>
  );
}

/* ================================
   STAT CARD
================================ */

function StatCard({
  icon,
  value,
  label,
  detail,
}) {
  return (
    <div className="rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-sm">

      <div className="flex items-center justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#21a366]">
          {icon}
        </div>

      </div>

      <div className="mt-5 text-3xl font-black">
        {value}
      </div>

      <div className="mt-1 text-sm font-bold">
        {label}
      </div>

      <div className="mt-1 text-xs text-black/40">
        {detail}
      </div>

    </div>
  );
}

/* ================================
   MAP MARKER
================================ */

function Marker({
  top,
  left,
  type,
}) {
  const colors = {
    red: "bg-red-500",
    orange: "bg-orange-400",
    yellow: "bg-yellow-400",
  };

  return (
    <div
      className="absolute"
      style={{
        top,
        left,
      }}
    >
      <div className="relative">

        <div
          className={`absolute -inset-3 animate-ping rounded-full opacity-20 ${colors[type]}`}
        />

        <div
          className={`relative h-5 w-5 rounded-full border-2 border-white shadow-lg ${colors[type]}`}
        />

      </div>
    </div>
  );
}

/* ================================
   STATUS BADGE
================================ */

function StatusBadge({
  status,
}) {
  const styles = {
    "In Progress":
      "bg-blue-50 text-blue-700",

    "Under Review":
      "bg-orange-50 text-orange-700",

    Resolved:
      "bg-emerald-50 text-emerald-700",
  };

  return (
    <span
      className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-bold ${
        styles[status] ||
        "bg-black/5 text-black/50"
      }`}
    >
      {status}
    </span>
  );
}

export default CitizenDashboard;