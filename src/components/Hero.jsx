import heroBg from "../assets/hero-bg.png";
function Hero() {
  return (
    <>
      <section
        className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-cover bg-center bg-no-repeat px-6 pt-32 pb-16 text-center md:pt-24"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 index-z-0 bg-black/20" />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-[11px] font-medium tracking-[0.2em] text-neutral-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            HEADLESS CMS &times; API PLATFORM
          </div>
          <h1 className="text-[52px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[64px] md:text-[76px] lg:text-[94px]">
            Create once.
            <br />
            Publish{" "}
            <span className="font-serif font-normal italic tracking-normal">
              everywhere.
            </span>
          </h1>
          <p className="mt-8 w-full max-w-2xl text-base font-semibold leading-relaxed text-neutral-400 sm:text-lg md:text-xl">
            The flexible CMS and API layer for modern websites, apps and digital
            products. Build content and forms in one place, deliver them to
            every frontend.
          </p>
          <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-black transition-transform hover:scale-[1.02]">
              Start Building Free
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </button>
            <button className="rounded-full border border-white/20 bg-white/[0.04] px-7 py-4 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/[0.08]">
              Explore the API
            </button>
          </div>
        </div>
        <div className="relative z-10 mx-auto mt-auto flex w-full max-w-7xl items-center justify-between px-2 pt-10 text-[11px] tracking-[0.15em] text-neutral-500">
          <div className="flex items-center gap-3">
            <span aria-hidden>&darr;</span>
            <span>SCROLL</span>
            <span className="hidden h-px w-40 bg-neutral-700 sm:block" />
          </div>
          <span className="hidden sm:block">API-FIRST &middot; NO SETUP</span>
        </div>
      </section>
    </>
  );
}
export default Hero;
