import Link from "next/link";

const memberRoutes = [
  { name: "Home", href: "/member" },
  { name: "Workout", href: "/member/workout" },
  { name: "Progress", href: "/member/progress" },
  { name: "Profile", href: "/member/profile" },
];

const adminRoutes = [
  { name: "Dashboard", href: "/admin" },
  { name: "Members", href: "/admin/members" },
  { name: "Add Member", href: "/admin/members/new" },
  { name: "Workouts", href: "/admin/workouts" },
];

export default function DevHub() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-md space-y-6">
        {/* Header */}
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            REY STUDIOS
          </p>

          <h1 className="mt-2 text-4xl font-black">Developer Hub</h1>

          <p className="mt-3 text-zinc-400">
            Internal testing page for Project 001.
          </p>
        </div>

        {/* Marketing */}
        <Section title="Marketing">
          <RouteCard name="Landing Page" href="/" />
        </Section>

        {/* Member */}
        <Section title="Member App">
          {memberRoutes.map((route) => (
            <RouteCard key={route.href} {...route} />
          ))}
        </Section>

        {/* Admin */}
        <Section title="Admin CRM">
          {adminRoutes.map((route) => (
            <RouteCard key={route.href} {...route} />
          ))}
        </Section>

        {/* Version */}
        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-zinc-500">Project</p>
              <h3 className="font-bold">Project 001</h3>
            </div>

            <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400">
              DEV
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-zinc-500">Version</p>
              <p className="font-medium">v0.1</p>
            </div>

            <div>
              <p className="text-zinc-500">Sprint</p>
              <p className="font-medium">3</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-2">
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
        {title}
      </h2>

      <div className="space-y-2">{children}</div>
    </section>
  );
}

function RouteCard({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 transition-all duration-200 hover:border-white/20 hover:bg-zinc-900"
    >
      <div>
        <p className="font-medium leading-none">{name}</p>
        <p className="mt-1 text-xs text-zinc-500">{href}</p>
      </div>

      <span className="text-zinc-500">→</span>
    </Link>
  );
}