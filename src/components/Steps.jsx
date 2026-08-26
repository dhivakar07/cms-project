function Steps() {
  const steps = [
    {
      number: "01",
      title: "Choose",
      description: "Choose what you want to build.",
    },
    {
      number: "02",
      title: "Create",
      description: "Build and manage your content.",
    },
    {
      number: "03",
      title: "Connect",
      description: "Expose your content through APIs.",
    },
    {
      number: "04",
      title: "Publish",
      description: "Make your latest content available everywhere.",
    },
  ];

  return (
    <section className="bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="translate-y-0 opacity-100 transition-all duration-700 delay-0">
          <h2
            className="mb-20 max-w-4xl text-[30px] font-extrabold 
          md:text-[clamp(2.25rem,5vw,4.5rem)] leading-[1] tracking-tight"
          >
            From idea to{" "}
            <span className="font-serif font-normal italic tracking-normal">
              published content
            </span>{" "}
            in minutes.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          {/* Connecting line */}
          <div
            className="absolute left-[12%] right-[12%] top-8 z-0 hidden
           h-px bg-gradient-to-r from-transparent via-white/20 to-transparent md:block"
          />

          {steps.map((step) => (
            <div key={step.number} className="relative z-10">
              {/* Number */}
              <div
                className="mb-6 flex h-16 w-16 items-center justify-center
               rounded-full border border-white/15 bg-black text-white/80"
              >
                {step.number}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-xl font-semibold text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="max-w-[220px] text-justify text-sm  leading-relaxed text-white/50">
                {step.description}
              </p>
              
            </div>
          ))}
        </div>
        <p className="text-white/50 text-center mt-16 max-w-2xl mx-auto">
          No complicated backend work for every new content update.
        </p>
      </div>
    </section>
  );
}

export default Steps;