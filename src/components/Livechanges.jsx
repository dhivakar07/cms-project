function Livechanges() {
  return (
    <>
      <section className="px-6 py-16 bg-black text-white">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="translate-y-0 opacity-100 delay-[0ms]">
            <h2
              className="mb-10 max-w-4xl text-[30px] font-extrabold 
             md:text-[clamp(2.25rem,5vw,4.5rem)] leading-[1] tracking-tight text-white"
            >
              Change your content.{" "}
              <span className="font-serif font-normal italic tracking-normal">
                keep your code.
              </span>
            </h2>

           

            <p className="mb-10 max-w-3xl text-justify  text-lg leading-relaxed  text-white/60 md:text-[21px]">
              Your team can modify content, FAQs, and form configurations from the dashboard.
              Applications retrieve the latest version through the API, keeping your frontend
              code separate from your content.
            </p>

          </div>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[2fr_auto_2fr]">
            {/* left */}
            <div className="border border-white/10 rounded-2xl p-8 mb-8">
              <p className="mono text-[10px] uppercase tracking-widest text-white/60 mb-6 ">
                cms dashboard
              </p>
              <p className="mono text-white/50 text-xs mb-6">Hero Title</p>

              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-xl font-semibold text-white">
                  Build Faster Experiences
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
                <span className="font-mono text-xs text-emerald-400">
                  Published Live
                </span>
              </div>
            </div>

            {/* middle */}

            <div
              className="hidden font-mono text-[10px] uppercase 
          tracking-widest text-white/40 lg:block text-center"
            >
              CMS → API → Frontend
            </div>

            <div
              className="font-mono text-[10px] uppercase tracking-widest
           text-white/40 lg:hidden text-center"
            >
              Sync
            </div>

            {/* right */}

            <div className="border border-white/10 rounded-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-white/20"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-white/20"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-white/20"></div>

                <span className="ml-3 font-mono text-xs text-white/40">
                  website.com
                </span>
              </div>

              <div className="p-8">
                <p className="font-sans font-bold text-3xl leading-tight mb-4">
                  Build Faster Experience
                </p>

                <p className="text-white/40 text-sm">
                  Updated live, no redeploy
                </p>
              </div>
            </div>
          </div>

          <p className="text-white/50 text-center mt-16 max-w-2xl mx-auto">
            No frontend deployment required for everyday content changes.
          </p>
        </div>
      </section>
    </>
  );
}
export default Livechanges;
