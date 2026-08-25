import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FileStack,
  Database,
  FolderTree,
  CircleHelp,
  Server,
  Settings,
} from "lucide-react";

const navItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Forms", icon: FileStack },
  { label: "Entries", icon: Database },
  { label: "Content", icon: FolderTree },
  { label: "FAQs", icon: CircleHelp },
  { label: "APIs", icon: Server },
  { label: "Settings", icon: Settings },
];

const stats = [
  { label: "Forms", value: "24" },
  { label: "API Requests", value: "128K" },
  { label: "Entries", value: "8,420" },
  { label: "Published Content", value: "156" },
];

const chartBars = [62, 40, 55, 30, 70, 45, 58, 38, 66, 48, 35];

const recentEntries = [
  { name: "Contact form", time: "2m" },
  { name: "Newsletter", time: "14m" },
  { name: "Demo request", time: "1h" },
];

const endpoints = [
  { method: "GET", path: "/api/content/services" },
  { method: "GET", path: "/api/faqs" },
  { method: "POST", path: "/api/forms/contact" },
];

const methodColors = {
  GET: "text-emerald-400",
  POST: "text-sky-400",
};

function Dashboard() {
  return (
    <>
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="translate-y-0 opacity-100 transition-all duration-700 delay-0">
            <h2
              className="mb-20 max-w-4xl text-[30px]  md:text-[clamp(2.25rem,5vw,4.5rem)] 
          font-extrabold leading-[1] tracking-tight"
            >
              One dashboard for the whole{" "}
              <span className="font-serif font-normal italic tracking-normal">
                content layer.
              </span>
            </h2>
          </div>

          {/* content */}
          <div
            className="border border-white/10 rounded-2xl overflow-hidden
           bg-[#0a0a0a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]"
          >
            {/* top */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>

              <span className="ml-3 font-mono text-xs text-white/50">
                app.aperture.dev
              </span>
            </div>

            {/* bottom */}
            <div className="grid md:grid-cols-[220px_1fr]">
              {/* sidebar */}
              <aside className="border-r border-white/10 p-4 space-y-1 hidden md:block">
                <nav className="space-y-1">
                  {navItems.map(({ label, icon: Icon, active }) => (
                    <a
                      key={label}
                      href="#"
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg
                         text-sm transition ${
                           active
                             ? "bg-white/10 text-white"
                             : "text-white/50 hover:text-white hover:bg-white/5"
                         }`}
                    >
                      <Icon size={16} strokeWidth={2} />
                      {label}
                    </a>
                  ))}
                </nav>
              </aside>

              {/* main */}
              <main className="p-6">
                {/* stat cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="border border-white/10 rounded-xl p-5 bg-white/[0.02]"
                    >
                      <p className="text-2xl font-bold tracking-tight mb-1">
                        {s.value}
                      </p>
                      <p className="text-xs text-white/40">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* API requests chart */}
                <div
                  className="border border-white/10 rounded-xl p-5
                 bg-white/[0.02] mb-4"
                >
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-sm font-semibold">API Requests</h3>
                    <span className="font-mono text-xs text-white/40">
                      Last 30 days
                    </span>
                  </div>

                  <div className="flex items-end gap-2 h-24">
                    {chartBars.map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded bg-white/20"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: i * 0.08,
                          ease: "easeOut",
                        }}
                      ></motion.div>
                    ))}
                  </div>
                </div>

                {/* bottom row */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* recent entries */}
                  <div
                    className="border border-white/10 rounded-xl p-5
                   bg-white/[0.02]"
                  >
                    <h3 className="text-sm font-semibold mb-4">
                      Recent entries
                    </h3>
                    <ul className="space-y-3">
                      {recentEntries.map((entry) => (
                        <li
                          key={entry.name}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-white/90">{entry.name}</span>
                          <span className="font-mono text-xs text-white/40">
                            {entry.time}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* endpoints */}
                  <div className="border border-white/10 rounded-xl p-5 bg-white/[0.02]">
                    <h3 className="text-sm font-semibold mb-4">Endpoints</h3>
                    <ul className="space-y-3 font-mono text-xs">
                      {endpoints.map((ep) => (
                        <li key={ep.path} className="flex items-center gap-2">
                          <span
                            className={`font-semibold ${methodColors[ep.method]}`}
                          >
                            {ep.method}
                          </span>
                          <span className="text-white/70">{ep.path}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Dashboard;