import teams from "../assets/teams.png";
function Teams() {
  return (
    <>
      <section className="px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div
            className="relative overflow-hidden rounded-2xl border
           border-white/5 aspect-[4/5] lg:aspect-[5/6]"
          >
            <img
              alt="Product team working together"
              className="w-full h-full object-cover grayscale-0 
               transition-all duration-1000 hover:scale-105"
              src={teams}
            />
            <div
              className="absolute bottom-6 left-6 mono text-[10px] 
            uppercase tracking-widest text-white/60"
            >
              Team · Aperture Studio
            </div>
          </div>
          <div>
            <div
              className="inline-block border border-white/15 
            rounded-full px-4 py-1.5 mb-6"
            >
              <span
                className="mono text-[10px] uppercase tracking-[0.25em]
               text-white/70"
              >
                TEAMS
              </span>
            </div>
            <h2
              className="text-[30px] font-extrabold leading-[1.05] tracking-tight 
            md:text-[clamp(2.25rem,5vw,4.5rem)] mb-8"
            >
              Editors ship.
              <br />
              Developers{" "}
              <span className="font-serif font-normal italic tracking-normal">
                stay in control.
              </span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-md">
              Marketing edits copy in the dashboard while engineers own the
              schema, tokens and webhooks. Everyone works on the same content,
              nobody blocks anybody.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#demo"
                className="group inline-flex items-center justify-center
   rounded-full border border-white/10 bg-white
    px-6 py-3 text-sm font-semibold text-black shadow-lg 
    transition-all duration-300 
    hover:-translate-y-1 hover:bg-gray-100 hover:shadow-xl"
              >
                Book A Demo
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full 
  border border-white/30 text-white px-6 py-3 text-sm font-semibold text-gray-900
   transition-all duration-300 hover:-translate-y-1 hover:border-gray-900
    hover:bg-gray-900 hover:text-white"
              >
                See Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Teams;
