import AdminHeader from "../components/AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black text-white">
      <AdminHeader />
      {children}
    </main>
  );
}