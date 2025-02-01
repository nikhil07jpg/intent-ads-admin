import AdminDashboard from "./components/AdminDashboard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 sm:p-12 gap-12 bg-gray-50 font-geist">
      <AdminDashboard />
    </div>
  );
}
