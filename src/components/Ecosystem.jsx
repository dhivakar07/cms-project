function Ecosystem() {
  const data = [
    "Opal",
    "Dune",
    "Oasis",
    "Asterisk",
    "Northline",
    "Meridian",
    "Kepler",
    "Vesta",
  ];
  const list = [
    "FORM BUILDER",
    "FORM API",
    "FAQ API",
    "CONTENT API",
    "MULTI-TENANT",
    "API SECURITY",
    "RATE LIMITING",
    "ENTRIES DASHBOARD",
  ];

  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 40s linear infinite;
        }
      `}</style>
      <section className="bg-black py-16 overflow-hidden border-y border-white/10">
        <div className="flex flex-wrap gap-x-10 gap-y-4 items-center justify-center text-neutral-500 font-semibold text-[18px] px-6">
          {data.map((item) => {
            return <p key={item}>{item}</p>;
          })}
        </div>
        <div className="relative mt-10 w-full overflow-hidden">
          <div className="marquee-track flex w-max-7xl whitespace-nowrap">
            {[...list, ...list].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center text-gray-300 font- text-[14px] tracking-widest px-6"
              >
                {item}
                <span className="ml-6 text-neutral-700">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Ecosystem;
