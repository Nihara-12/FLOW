import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CitizenDashboard from "./pages/citizen/CitizenDashboard";
import ReportIssue from "./pages/citizen/ReportIssue";
import AdminDashboard from "./pages/admin/AdminDashboard";

function Placeholder({ title }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7faf8]">
      <h1 className="text-3xl font-black">{title}</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={<CitizenDashboard />}
        />

        <Route
  path="/report"
  element={<ReportIssue />}
/>

        <Route
  path="/admin"
  element={<AdminDashboard />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;