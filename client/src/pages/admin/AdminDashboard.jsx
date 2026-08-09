import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Filter,
  LogOut,
  MapPin,
  Search,
  Shield,
  TrendingUp,
  Users,
  XCircle,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [reports, setReports] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedReports = JSON.parse(
      localStorage.getItem("flowReports") || "[]"
    );

    setReports(storedReports);
  }, []);

  const updateStatus = (id, status) => {
    const updated = reports.map((report) =>
      report.id === id
        ? {
            ...report,
            status,
          }
        : report
    );

    setReports(updated);
    localStorage.setItem("flowReports", JSON.stringify(updated));
  };

  const filteredReports = useMemo(() => {
    return reports.filter((report) => {
      const matchesFilter =
        filter === "All" || report.status === filter;

      const searchText = search.toLowerCase();

      const matchesSearch =
        report.title?.toLowerCase().includes(searchText) ||
        report.description?.toLowerCase().includes(searchText) ||
        report.category?.toLowerCase().includes(searchText) ||
        report.location?.toLowerCase().includes(searchText);

      return matchesFilter && matchesSearch;
    });
  }, [reports, filter, search]);

  const criticalCount = reports.filter(
    (report) => report.severity >= 8
  ).length;

  const resolvedCount = reports.filter(
    (report) => report.status === "Resolved"
  ).length;

  const activeCount = reports.filter(
    (report) => report.status !== "Resolved"
  ).length;

  return (
    <div className="min-h-screen bg-[#f4f7f5] text-[#14201b]">

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#123d2a] text-white">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 lg:px-8">

          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 font-black">
              F
            </div>

            <div>
              <div className="font-black">FLOW</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                Admin Command Center
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-4 sm:flex">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
              System operational
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <Shield size={17} />
            </div>
          </div>

        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-[1500px] px-5 py-7 lg:px-8 lg:py-10">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#21a366]">
              Operations
            </p>

            <h1 className="mt-2 text-4xl font-black tracking-tight">
              City Command Center
            </h1>

            <p className="mt-2 max-w-2xl text-black/45">
              Monitor community reports, prioritize urgent problems and
              coordinate responses from one place.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-[#21a366]">
              <Users size={18} />
            </div>

            <div>
              <div className="text-xs text-black/40">
                Community reports
              </div>

              <div className="font-black">
                {reports.length} total
              </div>
            </div>
          </div>

        </div>

        {/* KPI CARDS */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <Kpi
            icon={<AlertTriangle />}
            value={criticalCount}
            label="Critical issues"
            detail="AI severity ≥ 8"
            danger
          />

          <Kpi
            icon={<Clock3 />}
            value={activeCount}
            label="Needs attention"
            detail="Active reports"
          />

          <Kpi
            icon={<CheckCircle2 />}
            value={resolvedCount}
            label="Resolved"
            detail="Community issues"
          />

          <Kpi
            icon={<TrendingUp />}
            value="87%"
            label="Response health"
            detail="This week"
          />

        </div>

        {/* ANALYTICS STRIP */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

          {/* ACTIVITY */}
          <section className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-black">
                  Community activity
                </h2>

                <p className="mt-1 text-xs text-black/40">
                  Report volume and response trends
                </p>
              </div>

              <BarChart3 size={20} className="text-[#21a366]" />
            </div>

            <div className="mt-7 flex h-40 items-end gap-3">

              {[35, 48, 42, 65, 58, 82, 70, 94, 76, 88, 63, 91].map(
                (height, index) => (
                  <div
                    key={index}
                    className="group flex h-full flex-1 items-end"
                  >
                    <div
                      style={{ height: `${height}%` }}
                      className="w-full rounded-t-xl bg-[#dcefe3] transition group-hover:bg-[#21a366]"
                    />
                  </div>
                )
              )}

            </div>

            <div className="mt-3 flex justify-between text-[10px] text-black/30">
              <span>12 days ago</span>
              <span>Today</span>
            </div>

          </section>

          {/* AI INSIGHT */}
          <section className="rounded-[2rem] bg-[#123d2a] p-6 text-white">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                <TrendingUp size={20} />
              </div>

              <div>
                <div className="font-black">
                  FLOW AI insight
                </div>

                <div className="text-xs text-white/40">
                  Emerging patterns
                </div>
              </div>
            </div>

            <h3 className="mt-6 text-2xl font-black">
              Infrastructure demand is rising.
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/50">
              Recent reports indicate several infrastructure-related issues
              clustering around the same areas.
            </p>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-white/10 p-4">
              <span className="text-sm font-bold">
                Priority monitoring
              </span>

              <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-bold text-emerald-300">
                Active
              </span>
            </div>

          </section>

        </div>

        {/* REPORT MANAGEMENT */}
        <section className="mt-6 overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm">

          {/* HEADER */}
          <div className="border-b border-black/5 p-6">

            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">

              <div>
                <h2 className="text-xl font-black">
                  Issue management
                </h2>

                <p className="mt-1 text-sm text-black/40">
                  Review, prioritize and resolve community reports.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">

                {/* SEARCH */}
                <div className="relative">
                  <Search
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30"
                  />

                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search reports..."
                    className="w-full rounded-xl border border-black/10 bg-[#fafcfb] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#21a366] sm:w-60"
                  />
                </div>

                {/* FILTER */}
                <div className="flex items-center gap-2 rounded-xl border border-black/10 bg-[#fafcfb] px-3">
                  <Filter size={15} className="text-black/40" />

                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="bg-transparent py-2.5 text-sm font-medium outline-none"
                  >
                    <option>All</option>
                    <option>Reported</option>
                    <option>Under Review</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                  </select>
                </div>

              </div>

            </div>

          </div>

          {/* REPORTS */}
          {filteredReports.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="divide-y divide-black/5">

              {filteredReports.map((report) => (
                <ReportRow
                  key={report.id}
                  report={report}
                  updateStatus={updateStatus}
                />
              ))}

            </div>
          )}

        </section>

      </main>
    </div>
  );
}

function Kpi({
  icon,
  value,
  label,
  detail,
  danger,
}) {
  return (
    <div className="rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-sm">

      <div className="flex items-center justify-between">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
            danger
              ? "bg-red-50 text-red-600"
              : "bg-emerald-50 text-[#21a366]"
          }`}
        >
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

function ReportRow({
  report,
  updateStatus,
}) {
  return (
    <div className="p-6 transition hover:bg-[#fafcfb]">

      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

        {/* ISSUE */}
        <div className="flex min-w-0 gap-4">

          <div
            className={`mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
              report.severity >= 8
                ? "bg-red-50 text-red-600"
                : report.severity >= 6
                ? "bg-orange-50 text-orange-600"
                : "bg-emerald-50 text-[#21a366]"
            }`}
          >
            {report.severity >= 8 ? (
              <AlertTriangle size={21} />
            ) : (
              <MapPin size={21} />
            )}
          </div>

          <div className="min-w-0">

            <div className="flex flex-wrap items-center gap-2">

              <h3 className="font-black">
                {report.title}
              </h3>

              <SeverityBadge severity={report.severity} />

            </div>

            <p className="mt-1 line-clamp-2 max-w-2xl text-sm text-black/45">
              {report.description}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-black/40">

              <span className="flex items-center gap-1">
                <MapPin size={13} />
                {report.location}
              </span>

              <span>•</span>

              <span>
                {report.category}
              </span>

              <span>•</span>

              <span>
                Reported by {report.user}
              </span>

            </div>

          </div>

        </div>

        {/* ACTIONS */}
        <div className="flex shrink-0 flex-wrap items-center gap-2">

          <StatusBadge status={report.status} />

          {report.status !== "Resolved" && (
            <>

              {report.status === "Reported" && (
                <button
                  onClick={() =>
                    updateStatus(report.id, "Under Review")
                  }
                  className="rounded-xl border border-black/10 px-3 py-2 text-xs font-bold transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  Review
                </button>
              )}

              {report.status === "Under Review" && (
                <button
                  onClick={() =>
                    updateStatus(report.id, "In Progress")
                  }
                  className="rounded-xl border border-black/10 px-3 py-2 text-xs font-bold transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  Start work
                </button>
              )}

              {report.status === "In Progress" && (
                <button
                  onClick={() =>
                    updateStatus(report.id, "Resolved")
                  }
                  className="rounded-xl bg-[#123d2a] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#0d3020]"
                >
                  Resolve
                </button>
              )}

            </>
          )}

          <button
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 hover:bg-black/[0.03]"
            title="View issue"
          >
            <ChevronRight size={16} />
          </button>

        </div>

      </div>

    </div>
  );
}

function SeverityBadge({ severity }) {
  let style = "bg-emerald-50 text-emerald-700";

  if (severity >= 8) {
    style = "bg-red-50 text-red-700";
  } else if (severity >= 6) {
    style = "bg-orange-50 text-orange-700";
  }

  return (
    <span className={`rounded-full px-2.5 py-1 text-[10px] font-black ${style}`}>
      AI {severity}/10
    </span>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Reported: "bg-gray-100 text-gray-700",
    "Under Review": "bg-orange-50 text-orange-700",
    "In Progress": "bg-blue-50 text-blue-700",
    Resolved: "bg-emerald-50 text-emerald-700",
  };

  return (
    <span
      className={`whitespace-nowrap rounded-full px-3 py-1.5 text-[10px] font-bold ${
        styles[status] || "bg-black/5 text-black/50"
      }`}
    >
      {status}
    </span>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 text-center">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-[#21a366]">
        <CheckCircle2 size={28} />
      </div>

      <h3 className="mt-5 text-lg font-black">
        No reports found
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-black/40">
        New community reports will appear here automatically.
      </p>

    </div>
  );
}

export default AdminDashboard;