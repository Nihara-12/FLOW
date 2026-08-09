import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await api.post("/auth/login", formData);

      const { token, user } = response.data;

      localStorage.setItem("flowToken", token);
      localStorage.setItem("flowUser", JSON.stringify(user));

      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);

      setError(
        error.response?.data?.message ||
          error.message ||
          "Unable to sign in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f8f6] text-[#14201b]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-12">

        <Link
          to="/"
          className="flex w-fit items-center gap-2 text-sm font-semibold opacity-60 hover:opacity-100"
        >
          ← Back to FLOW
        </Link>

        <div className="mx-auto grid w-full max-w-5xl flex-1 items-center gap-16 py-10 lg:grid-cols-[1fr_0.85fr]">

          {/* LEFT */}
          <div className="hidden lg:block">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#123d2a] text-xl font-black text-white">
              F
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-[#21a366]">
              Welcome back
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight">
              Your city is
              <span className="block text-[#21a366]">
                listening.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-black/50">
              Sign in to report problems, follow community issues and help
              make your surroundings better.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-black/50">
              <ShieldCheck size={20} className="text-[#21a366]" />
              Your account is protected with secure authentication.
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-xl shadow-black/5 sm:p-9">

            <div className="lg:hidden">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#123d2a] font-black text-white">
                F
              </div>
            </div>

            <h2 className="text-3xl font-black">
              Sign in
            </h2>

            <p className="mt-2 text-sm text-black/50">
              Continue to your FLOW account.
            </p>

            <form onSubmit={handleLogin} className="mt-7 space-y-5">

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
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
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-2xl border border-black/10 bg-[#fafcfb] py-3.5 pl-11 pr-4 outline-none focus:border-[#21a366] focus:ring-4 focus:ring-emerald-500/10"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label
                  htmlFor="password"
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
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Your password"
                    autoComplete="current-password"
                    required
                    className="w-full rounded-2xl border border-black/10 bg-[#fafcfb] py-3.5 pl-11 pr-12 outline-none focus:border-[#21a366] focus:ring-4 focus:ring-emerald-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-black/35"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
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

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#123d2a] py-4 font-bold text-white shadow-xl shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-[#0d3020] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign in"}

                {!loading && (
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                )}
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-black/50">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-bold text-[#168653] hover:underline"
              >
                Create one
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

export default Login;