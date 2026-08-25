import { CircleCheck, Code2 } from "lucide-react";

function Control() {
  const teamsFeatures = [
    "Create content",
    "Manage pages",
    "Update FAQs",
    "Manage forms",
    "Review entries",
  ];

  const developerFeatures = [
    "REST APIs",
    "API keys",
    "Permissions",
    "Authentication",
    "Tenant validation",
    "Rate limiting",
  ];

  return (
    <section id="developers" className="bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="translate-y-0 opacity-100 transition-all duration-700 delay-0">
          <h2
            className="mb-20 max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)] 
          font-extrabold leading-[1] tracking-tight"
          >
            Give your team control.{" "}
            <span className="font-serif font-normal italic tracking-normal">
              Give developers the API.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {/* For Teams */}
          <div className="h-full rounded-2xl border border-white/10 p-8">
            <div className="mb-8 flex items-center gap-3">
              {/* icon */}
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg
               border border-white/10 bg-white/5"
              >
                <CircleCheck
                  size={18}
                  strokeWidth={2}
                  className="text-white/80"
                />
              </div>
              {/* content */}

              <div className="flex flex-col">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                  For teams
                </p>

                <p className="font-extrabold text-white">Editors & Marketing</p>
              </div>
            </div>

            <ul className="space-y-3">
              {teamsFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-white/70"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* For Developers */}
          <div className="h-full rounded-2xl border border-white/10 p-8">
            <div className="mb-8 flex items-center gap-3">
              {/* icon */}
              <div
                className="flex h-10 w-10 items-center justify-center 
              rounded-lg border border-white/10 bg-white/5"
              >
                <Code2 size={18} strokeWidth={2} className="text-white/80" />
              </div>

              {/* content */}
              <div className="flex flex-col">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                  For developers
                </p>
                <p className="font-extrabold text-white">Engineers & Ops</p>
              </div>
            </div>

            <ul className="space-y-3">
              {developerFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-white/70"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Control;
