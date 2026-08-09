import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  CheckCircle2,
  FileImage,
  Loader2,
  MapPin,
  Mic,
  Sparkles,
  Upload,
  X,
} from "lucide-react";

function ReportIssue() {
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    "Roads",
    "Drainage",
    "Lighting",
    "Waste",
    "Water",
    "Safety",
    "Environment",
    "Other",
  ];

  const handleImage = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage({
      file,
      preview: URL.createObjectURL(file),
    });
  };

  const analyzeIssue = () => {
    if (!description.trim()) return;

    setAnalyzing(true);

    // Hackathon MVP AI simulation.
    // Replace with OpenAI call when backend AI endpoint is ready.
    setTimeout(() => {
      const text = description.toLowerCase();

      let detectedCategory = category || "Other";
      let severity = 6;
      let summary = "Community infrastructure issue detected.";
      let hazards = ["Community inconvenience"];

      if (
        text.includes("pothole") ||
        text.includes("road") ||
        text.includes("street")
      ) {
        detectedCategory = "Roads";
        severity = 8;
        summary = "Possible road damage requiring inspection.";
        hazards = ["Vehicle safety", "Pedestrian safety"];
      } else if (
        text.includes("water") ||
        text.includes("drain") ||
        text.includes("flood")
      ) {
        detectedCategory = "Drainage";
        severity = 9;
        summary = "Possible drainage or water accumulation issue.";
        hazards = ["Pedestrian safety", "Vehicle safety", "Public health"];
      } else if (
        text.includes("light") ||
        text.includes("lamp") ||
        text.includes("dark")
      ) {
        detectedCategory = "Lighting";
        severity = 7;
        summary = "Possible streetlight or public lighting failure.";
        hazards = ["Visibility", "Pedestrian safety"];
      } else if (
        text.includes("garbage") ||
        text.includes("waste") ||
        text.includes("trash")
      ) {
        detectedCategory = "Waste";
        severity = 6;
        summary = "Possible waste management issue.";
        hazards = ["Public health", "Environmental impact"];
      }

      setAnalysis({
        category: detectedCategory,
        severity,
        confidence: 91,
        summary,
        hazards,
      });

      setAnalyzing(false);
    }, 1200);
  };

  const submitReport = () => {
    const user = JSON.parse(
      localStorage.getItem("flowUser") || "{}"
    );

    const report = {
      id: Date.now(),
      title:
        analysis?.summary ||
        description.slice(0, 60),
      description,
      category: analysis?.category || category || "Other",
      severity: analysis?.severity || 5,
      confidence: analysis?.confidence || 80,
      location: location || "Location not specified",
      image: image?.preview || null,
      status: "Reported",
      user: user.name || "Community Member",
      createdAt: new Date().toISOString(),
    };

    const existingReports = JSON.parse(
      localStorage.getItem("flowReports") || "[]"
    );

    localStorage.setItem(
      "flowReports",
      JSON.stringify([report, ...existingReports])
    );

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f8f6] px-5">
        <div className="w-full max-w-lg rounded-[2rem] bg-white p-10 text-center shadow-xl">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-[#21a366]">
            <CheckCircle2 size={42} />
          </div>

          <h1 className="mt-7 text-3xl font-black">
            Report submitted 🎉
          </h1>

          <p className="mx-auto mt-4 max-w-md leading-7 text-black/50">
            FLOW has received your report. Your information will help the
            community understand what needs attention.
          </p>

          <div className="mt-7 rounded-2xl bg-[#f3f8f4] p-5 text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-[#21a366]">
              FLOW analysis
            </div>

            <div className="mt-2 font-bold">
              {analysis?.category}
            </div>

            <div className="mt-1 text-sm text-black/50">
              Severity: {analysis?.severity}/10 • Confidence:{" "}
              {analysis?.confidence}%
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex-1 rounded-2xl bg-[#123d2a] py-3.5 font-bold text-white"
            >
              Back to dashboard
            </button>

            <button
              onClick={() => window.location.reload()}
              className="flex-1 rounded-2xl border border-black/10 py-3.5 font-bold"
            >
              Report another
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f8f6] text-[#14201b]">

      {/* HEADER */}
      <header className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">

          <Link
            to="/dashboard"
            className="flex items-center gap-2 text-sm font-semibold text-black/60"
          >
            <ArrowLeft size={17} />
            Dashboard
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#123d2a] font-black text-white">
              F
            </div>

            <span className="font-black">FLOW</span>
          </div>

        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-10 lg:py-14">

        {/* TITLE */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-[#21a366]">
            <MapPin size={25} />
          </div>

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#21a366]">
            Community report
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            What did you notice?
          </h1>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-black/50">
            Tell FLOW what's happening. You can add a photo and location to
            help us understand the problem better.
          </p>
        </div>

        {/* FORM */}
        <div className="mt-10 space-y-6">

          {/* DESCRIPTION */}
          <section className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm sm:p-8">

            <label
              htmlFor="description"
              className="text-lg font-black"
            >
              Describe the problem
            </label>

            <p className="mt-1 text-sm text-black/40">
              Be as specific as you can.
            </p>

            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="For example: There is a large pothole near the school entrance..."
              rows={5}
              className="mt-5 w-full resize-none rounded-2xl border border-black/10 bg-[#fafcfb] p-4 leading-7 outline-none transition placeholder:text-black/30 focus:border-[#21a366] focus:ring-4 focus:ring-emerald-500/10"
            />

            <div className="mt-3 flex justify-end">
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl bg-black/[0.03] px-3 py-2 text-xs font-bold text-black/50"
              >
                <Mic size={15} />
                Describe by voice
              </button>
            </div>

          </section>

          {/* CATEGORY */}
          <section className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm sm:p-8">

            <h2 className="text-lg font-black">
              What kind of issue is it?
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-2xl border px-3 py-4 text-sm font-semibold transition ${
                    category === item
                      ? "border-[#21a366] bg-emerald-50 text-[#168653]"
                      : "border-black/5 bg-[#fafcfb] hover:border-emerald-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

          </section>

          {/* IMAGE */}
          <section className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm sm:p-8">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-[#21a366]">
                <Camera size={20} />
              </div>

              <div>
                <h2 className="font-black">Add evidence</h2>
                <p className="text-sm text-black/40">
                  A photo helps FLOW understand the problem.
                </p>
              </div>
            </div>

            {!image ? (
              <label className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-black/10 bg-[#fafcfb] px-5 py-10 text-center transition hover:border-emerald-300 hover:bg-emerald-50/30">

                <Upload size={25} className="text-[#21a366]" />

                <div className="mt-3 font-bold">
                  Upload a photo
                </div>

                <div className="mt-1 text-xs text-black/40">
                  JPG, PNG up to 10MB
                </div>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="hidden"
                />
              </label>
            ) : (
              <div className="relative mt-5 overflow-hidden rounded-2xl">
                <img
                  src={image.preview}
                  alt="Uploaded evidence"
                  className="max-h-80 w-full object-cover"
                />

                <button
                  onClick={() => setImage(null)}
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white"
                  aria-label="Remove image"
                >
                  <X size={17} />
                </button>
              </div>
            )}

          </section>

          {/* LOCATION */}
          <section className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm sm:p-8">

            <h2 className="font-black">
              Where is it?
            </h2>

            <div className="mt-4 flex gap-3">
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter a street, area or landmark"
                className="min-w-0 flex-1 rounded-2xl border border-black/10 bg-[#fafcfb] px-4 py-3.5 outline-none focus:border-[#21a366] focus:ring-4 focus:ring-emerald-500/10"
              />

              <button
                type="button"
                onClick={() => setLocation("My current location")}
                className="flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 font-bold text-[#168653]"
              >
                <MapPin size={17} />
                <span className="hidden sm:inline">Use my location</span>
              </button>
            </div>

          </section>

          {/* AI ANALYSIS */}
          {analysis && (
  <section className="rounded-[2rem] border border-emerald-200 bg-[#f0faf3] p-6 shadow-sm sm:p-8">

    {/* HEADER */}
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#123d2a] text-white">
        <Sparkles size={20} />
      </div>

      <div>
        <div className="font-black">
          FLOW AI analysis
        </div>

        <div className="text-xs text-black/40">
          Intelligent civic issue triage
        </div>
      </div>
    </div>

    {/* AI METRICS */}
    <div className="mt-6 grid gap-3 sm:grid-cols-3">

      <div className="rounded-2xl bg-white p-4">
        <div className="text-xs font-medium text-black/40">
          Detected category
        </div>

        <div className="mt-1 text-lg font-black">
          {analysis.category || "Other"}
        </div>
      </div>

      <div className="rounded-2xl bg-white p-4">
        <div className="text-xs font-medium text-black/40">
          Severity
        </div>

        <div
          className={`mt-1 text-lg font-black ${
            Number(analysis.severity) >= 8
              ? "text-red-600"
              : Number(analysis.severity) >= 6
              ? "text-orange-600"
              : "text-emerald-600"
          }`}
        >
          {analysis.severity || 5}/10
        </div>
      </div>

      <div className="rounded-2xl bg-white p-4">
        <div className="text-xs font-medium text-black/40">
          AI confidence
        </div>

        <div className="mt-1 text-lg font-black text-[#168653]">
          {analysis.confidence || 80}%
        </div>
      </div>

    </div>

    {/* SEVERITY BAR */}
    <div className="mt-4 rounded-2xl bg-white p-4">

      <div className="flex items-center justify-between text-xs">
        <span className="font-bold text-black/50">
          Priority assessment
        </span>

        <span className="font-black">
          {analysis.severity || 5}/10
        </span>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/5">
        <div
          className={`h-full rounded-full ${
            Number(analysis.severity) >= 8
              ? "bg-red-500"
              : Number(analysis.severity) >= 6
              ? "bg-orange-400"
              : "bg-emerald-500"
          }`}
          style={{
            width: `${Math.min(
              Number(analysis.severity || 5) * 10,
              100
            )}%`,
          }}
        />
      </div>

    </div>

    {/* SUMMARY */}
    <div className="mt-4 rounded-2xl bg-white p-5">

      <div className="text-xs font-bold uppercase tracking-wider text-black/40">
        What FLOW understood
      </div>

      <p className="mt-2 text-sm leading-7 text-black/70">
        {analysis.summary ||
          "FLOW identified a civic issue that requires further review."}
      </p>

    </div>

    {/* HAZARDS */}
    <div className="mt-4 rounded-2xl bg-white p-5">

      <div className="text-xs font-bold uppercase tracking-wider text-black/40">
        Potential risks
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {(analysis.hazards || ["Requires manual review"]).map(
          (hazard, index) => (
            <span
              key={index}
              className="rounded-full bg-red-50 px-3 py-2 text-xs font-bold text-red-700"
            >
              ⚠ {hazard}
            </span>
          )
        )}
      </div>

    </div>

    {/* RECOMMENDED ACTION */}
    <div className="mt-4 rounded-2xl bg-[#123d2a] p-5 text-white">

      <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
        Recommended action
      </div>

      <p className="mt-2 text-sm leading-7 text-white/80">
        {analysis.recommendedAction ||
          "Forward this report for administrative review and verification."}
      </p>

    </div>

  </section>
)}

          {/* ACTION */}
          {!analysis ? (
            <button
              onClick={analyzeIssue}
              disabled={!description.trim() || analyzing}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#123d2a] py-4 font-bold text-white shadow-xl shadow-emerald-950/15 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {analyzing ? (
                <>
                  <Loader2 size={19} className="animate-spin" />
                  FLOW is analyzing...
                </>
              ) : (
                <>
                  <Sparkles size={19} />
                  Analyze with FLOW AI
                </>
              )}
            </button>
          ) : (
            <button
              onClick={submitReport}
              className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#123d2a] py-4 font-bold text-white shadow-xl shadow-emerald-950/15 transition hover:-translate-y-0.5"
            >
              Submit report
              <ArrowRight
                size={19}
                className="transition group-hover:translate-x-1"
              />
            </button>
          )}

        </div>
      </main>
    </div>
  );
}

export default ReportIssue;