import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  User,
} from "lucide-react";
import { useState } from "react";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    language: "English",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/auth/register", formData);

      const { token, user } = response.data;

      localStorage.setItem("flowToken", token);
      localStorage.setItem("flowUser", JSON.stringify(user));

      navigate("/dashboard");
   } catch (error) {
  console.error("Registration error:", error);

  setError(
    error.response?.data?.message ||
      error.message ||
      "Unable to create your account. Please try again."
  );
} finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f8f6] text-[#14201b]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-12">

        {/* TOP */}
        <Link
          to="/"
          className="flex w-fit items-center gap-2 text-sm font-semibold opacity-60 transition hover:opacity-100"
        >
          <ArrowLeft size={17} />
          Back to FLOW
        </Link>

        <div className="mx-auto grid w-full max-w-5xl flex-1 items-center gap-16 py-10 lg:grid-cols-[0.85fr_1fr]">

          {/* LEFT INFO */}
          <div className="hidden lg:block">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#123d2a] text-xl font-black text-white">
              F
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#21a366]">
              Join the community
            </p>

            <h1 className="mt-4 text-5xl font-black leading-[1] tracking-tight">
              Help your city
              <span className="block text-[#21a366]">
                see what matters.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-black/50">
              Create your FLOW account and turn things you notice into
              actionable community reports.
            </p>

            <div className="mt-9 space-y-4">
              {[
                "Report problems around you",
                "Track issues from report to resolution",
                "Help identify emerging problems",
                "Choose accessibility preferences",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-[#168653]">
                    <Check size={15} />
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* REGISTER FORM */}
          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-xl shadow-black/5 sm:p-9">

            <div className="lg:hidden">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#123d2a] font-black text-white">
                F
              </div>
            </div>

            <h2 className="text-3xl font-black tracking-tight">
              Create your account
            </h2>

            <p className="mt-2 text-sm text-black/50">
              Join FLOW as a community member.
            </p>

            <form
              onSubmit={handleRegister}
              className="mt-7 space-y-4"
            >

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Full name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30"
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    className="w-full rounded-2xl border border-black/10 bg-[#fafcfb] py-3.5 pl-11 pr-4 outline-none transition focus:border-[#21a366] focus:ring-4 focus:ring-emerald-500/10"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="register-email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30"
                  />

                  <input
                    id="register-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="w-full rounded-2xl border border-black/10 bg-[#fafcfb] py-3.5 pl-11 pr-4 outline-none transition focus:border-[#21a366] focus:ring-4 focus:ring-emerald-500/10"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label
                  htmlFor="register-password"
                  className="mb-2 block text-sm font-semibold"
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30"
                  />

                  <input
                    id="register-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    className="w-full rounded-2xl border border-black/10 bg-[#fafcfb] py-3.5 pl-11 pr-12 outline-none transition focus:border-[#21a366] focus:ring-4 focus:ring-emerald-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-black/35"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                <p className="mt-2 text-xs text-black/40">
                  Use at least 6 characters.
                </p>
              </div>

              {/* LANGUAGE */}
              <div>
                <label
                  htmlFor="language"
                  className="mb-2 block text-sm font-semibold"
                >
                  Preferred language
                </label>

                <select
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-black/10 bg-[#fafcfb] px-4 py-3.5 outline-none focus:border-[#21a366] focus:ring-4 focus:ring-emerald-500/10"
                >
                  <option value="English">English</option>
                  <option value="Tamil">Tamil</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>

              {/* ACCOUNT TYPE */}
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Account type
                </div>

                <div className="mt-1 font-semibold text-[#14201b]">
                  Community Member
                </div>

                <div className="mt-1 text-xs leading-5 text-black/50">
                  Your account lets you report and track community issues.
                </div>
              </div>

              {/* ERROR */}
              {error && (
                <div
                  role="alert"
                  className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                >
                  {error}
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#123d2a] py-4 font-bold text-white shadow-xl shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-[#0d3020] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating account..." : "Create account"}

                {!loading && (
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                )}
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-black/50">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-[#168653] hover:underline"
              >
                Sign in
              </Link>
            </p>

          </div>
        </div>

        <div className="pb-4 text-center text-xs text-black/30">
          FLOW • Civic intelligence for everyone
        </div>

      </div>
    </div>
  );
}

export default Register;