import {
  Fingerprint,
  ShieldCheck,
  KeyRound,
  Building2,
  Gauge,
  Lock,
} from "lucide-react";
import "./Getstarted.css";

const layers = [
  { number: "01", title: "Authentication", icon: Fingerprint },
  { number: "02", title: "Authorization", icon: ShieldCheck },
  { number: "03", title: "API Keys", icon: KeyRound },
  { number: "04", title: "Tenant Validation", icon: Building2 },
  { number: "05", title: "Rate Limiting", icon: Gauge },
];

function Security() {
  return (
    <section
      id="security"
      aria-labelledby="security-heading"
      className="as-inter relative overflow-hidden bg-black px-6 py-16 text-white md:py-24"
    >
      <div
        className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <header>
          <p className="mb-5 inline-flex rounded-md border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
            Secure API
          </p>
          <h2
            id="security-heading"
            className="max-w-4xl text-[30px] font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            Secure from CMS
            <br />
            <span className="as-serif font-normal italic tracking-normal">
              to API.
            </span>
          </h2>
        </header>

        <ul className="-mx-4 mt-10 flex list-none gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-5">
          {layers.map((layer) => {
            const Icon = layer.icon;
            return (
              <li
                key={layer.number}
                className="min-w-[220px] snap-start sm:min-w-0"
              >
                <article className="flex min-h-[180px] flex-col justify-between rounded-xl border border-white/10 bg-black p-5 sm:min-h-[200px]">
                  <Icon
                    className="h-5 w-5 text-white"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <div>
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                      Layer {layer.number}
                    </p>
                    <h3 className="text-[15px] font-semibold text-white">
                      {layer.title}
                    </h3>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 flex flex-wrap items-center justify-center gap-2 text-center text-[13px] leading-relaxed text-white/50 sm:mt-12">
          <Lock
            className="h-3.5 w-3.5 shrink-0"
            strokeWidth={1.75}
            aria-hidden
          />
          <span>SOC 2 aligned • SSO • Encryption at rest</span>
        </p>
      </div>
    </section>
  );
}

export default Security;
