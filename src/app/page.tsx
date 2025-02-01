import AdminDashboard from "./components/AdminDashboard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen gap-1 bg-gray-50 font-geist">
      {/* Header Section */}
      <header className="w-full py-4 bg-gray-800 text-white text-center text-3xl font-bold shadow-md">
        Track
      </header>

      {/* Admin Dashboard */}
      <div className="w-full">
        <AdminDashboard />
      </div>
    </div>
  );
}
