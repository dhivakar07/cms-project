import {
  MonitorSmartphone,
  Atom,
  Smartphone,
  Wrench,
  Globe,
} from "lucide-react";

function Frontends() {
  const frontends = [
    {
      title: "Marketing Website",
      description: "Dynamic pages, services, testimonials and FAQs.",
      icon: MonitorSmartphone,
    },
    {
      title: "React Application",
      description: "Fetch structured content directly from your API.",
      icon: Atom,
    },
    {
      title: "Mobile Application",
      description: "Use the same content layer across mobile experiences.",
      icon: Smartphone,
    },
    {
      title: "Internal Tools",
      description: "Connect your custom applications to the CMS.",
      icon: Wrench,
    },
    {
      title: "Multiple Websites",
      description: "Reuse forms and content across different properties.",
      icon: Globe,
    },
  ];

  return (
    <section className="w-full bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
          <div className="translate-y-0 opacity-100 delay-[0ms]">          
        <h2 className="mb-20 max-w-4xl  font-extrabold 
        text-[clamp(2.25rem,5vw,4.5rem)] leading-[1] tracking-tight text-white">
          One source of truth. Every{" "}
          <span className="font-serif font-normal italic tracking-normal">
            digital experience.
          </span>
        </h2>
         </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {frontends.map((frontend) => {
            const Icon = frontend.icon;

            return (
              <div
                key={frontend.title}
                className="group relative flex min-h-[330px] 
                flex-col justify-between overflow-hidden rounded-3xl border
                 border-white/20 bg-black p-7 transition-all duration-500
                  hover:border-white/20 hover:bg-white/[0.02]">
                <Icon
                  size={32}
                  strokeWidth={1.5}
                  className="text-white/60 transition-all duration-300
                   group-hover:text-white" />

                <div>
                  <h3 className="mb-4 text-xl font-semibold tracking-tight text-white">
                    {frontend.title}
                  </h3>

                  <p className="max-w-[260px] text-base leading-7 text-white/50">
                    {frontend.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
</div>

         </section>
  );
}

export default Frontends;