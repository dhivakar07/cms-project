import "./Footer.css";
import "./Getstarted.css";

const columns = [
  {
    title: "Product",
    links: ["Features", "Forms", "Content", "FAQs", "APIs"],
  },
  {
    title: "Developers",
    links: ["Documentation", "API Reference", "Guides", "Examples"],
  },
  {
    title: "Solutions",
    links: ["Websites", "SaaS", "Mobile", "Agencies"],
  },
  {
    title: "Company",
    links: ["About", "Pricing", "Contact"],
  },
];

function ApertureMark() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-5 w-5 shrink-0 text-white"
      aria-hidden="true"
    >
      <g fill="currentColor">
        <path d="M16.85 1.7a14.3 14.3 0 0 1 13.45 13.45H16.85V1.7Z" />
        <path d="M30.3 16.85A14.3 14.3 0 0 1 16.85 30.3V16.85H30.3Z" />
        <path d="M15.15 30.3A14.3 14.3 0 0 1 1.7 16.85h13.45V30.3Z" />
        <path d="M1.7 15.15A14.3 14.3 0 0 1 15.15 1.7v13.45H1.7Z" />
      </g>
    </svg>
  );
}

function Footer() {
  return (
    <footer
      className="as-inter w-full border-t border-white/8 bg-black"
    >
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-14 md:px-10 md:pt-20 md:pb-16">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[260px]">
            <a href="#" className="inline-flex items-center gap-2.5 text-white">
              <ApertureMark />
              <span className="text-[16px] font-semibold tracking-tight">
                Aperture
              </span>
            </a>
            <p className="mt-5 text-[13px] leading-relaxed text-white/50">
              Create forms, FAQs and content from one dashboard, then deliver
              them through APIs to any website or app.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-10 sm:grid-cols-4 sm:gap-x-[72px]">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[13px] font-semibold tracking-tight text-white">
                  {column.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-[9px]">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[13px] leading-snug text-white/50 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-[11px] text-white/50 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p>© 2026 Aperture. All rights reserved.</p>
          <div className="flex items-center gap-8 text-[10px] tracking-[0.22em]">
            <a href="#" className="transition-colors hover:text-white">
              PRIVACY
            </a>
            <a href="#" className="transition-colors hover:text-white">
              TERMS
            </a>
            <a href="#" className="transition-colors hover:text-white">
              SECURITY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
