import { ArrowRight } from "lucide-react";
import "./Getstarted.css";

function Api() {
  return (
    <section
      id="api"
      aria-labelledby="api-heading"
      className="as-inter bg-black px-6 py-16 text-white md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2
          id="api-heading"
          className="max-w-5xl text-[30px] font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Simple enough for teams.{" "}
          <span className="as-serif font-normal italic tracking-normal">
            Powerful enough for developers.
          </span>
        </h2>

        <div className="mt-10 grid items-start gap-8 sm:mt-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-6 inline-flex max-w-full items-center gap-2.5 overflow-x-auto rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[12px] sm:text-[13px]">
              <span className="rounded-[4px] bg-lime-300 px-1.5 py-0.5 text-[11px] font-bold leading-none text-black">
                GET
              </span>
              <span className="whitespace-nowrap text-white/80">
                /api/content/services
              </span>
            </p>

            <p className="mb-8 max-w-md text-lg leading-relaxed text-white/50">
              Typed SDKs, clean REST and GraphQL endpoints. Ship your
              integration in minutes, not sprints.
            </p>

            <a
              href="#docs"
              className="inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap text-[15px] font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
            >
              Read the Documentation
              <ArrowRight
                className="h-4 w-4 shrink-0"
                strokeWidth={1.75}
                aria-hidden
              />
            </a>
          </div>

          <figure className="min-w-0 overflow-hidden rounded-xl border border-white/10 bg-[#111]">
            <div className="relative flex items-center border-b border-white/10 px-4 py-3">
              <div className="flex gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-600" />
              </div>
              <figcaption className="pointer-events-none absolute inset-x-0 text-center font-mono text-[11px] text-neutral-500">
                response.json
              </figcaption>
            </div>
            <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-[1.7] text-white sm:p-6 sm:text-[13px]">
              <code>
                {"{"}
                {"\n  "}
                <span className="text-sky-400">&quot;data&quot;</span>
                <span className="text-neutral-500">: </span>
                {"["}
                {"\n    "}
                {"{ "}
                <span className="text-sky-400">&quot;id&quot;</span>
                <span className="text-neutral-500">: </span>
                <span className="text-amber-300">&quot;svc_01&quot;</span>
                <span className="text-neutral-500">, </span>
                <span className="text-sky-400">&quot;title&quot;</span>
                <span className="text-neutral-500">: </span>
                <span className="text-amber-300">
                  &quot;Brand Strategy&quot;
                </span>
                {" }"}
                <span className="text-neutral-500">,</span>
                {"\n    "}
                {"{ "}
                <span className="text-sky-400">&quot;id&quot;</span>
                <span className="text-neutral-500">: </span>
                <span className="text-amber-300">&quot;svc_02&quot;</span>
                <span className="text-neutral-500">, </span>
                <span className="text-sky-400">&quot;title&quot;</span>
                <span className="text-neutral-500">: </span>
                <span className="text-amber-300">
                  &quot;Design Systems&quot;
                </span>
                {" }"}
                <span className="text-neutral-500">,</span>
                {"\n    "}
                {"{ "}
                <span className="text-sky-400">&quot;id&quot;</span>
                <span className="text-neutral-500">: </span>
                <span className="text-amber-300">&quot;svc_03&quot;</span>
                <span className="text-neutral-500">, </span>
                <span className="text-sky-400">&quot;title&quot;</span>
                <span className="text-neutral-500">: </span>
                <span className="text-amber-300">
                  &quot;Content Platform&quot;
                </span>
                {" }"}
                {"\n  "}
                {"]"}
                <span className="text-neutral-500">,</span>
                {"\n  "}
                <span className="text-sky-400">&quot;meta&quot;</span>
                <span className="text-neutral-500">: </span>
                {"{ "}
                <span className="text-sky-400">&quot;total&quot;</span>
                <span className="text-neutral-500">: </span>
                <span className="text-violet-400">3</span>
                {" }"}
                {"\n"}
                {"}"}
              </code>
            </pre>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Api;
