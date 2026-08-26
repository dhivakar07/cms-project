import { useEffect, useState } from "react";

function Header() {
  const navLinks = [
    { lable: "Product", href: "#product" },
    { lable: "Features", href: "#features" },
    { lable: "API", href: "#api" },
    { lable: "Developers", href: "#developers" },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-black/60 backdrop-blur-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-6">
        <span className="text-xl font-semibold tracking-tight text-white">
          Aperture
        </span>
        <nav className="hidden items-center gap-10 text-[15px] text-neutral-300 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.lable}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.lable}
            </a>
          ))}
        </nav>
        <button className="hidden rounded-full bg-white px-6 py-3 text-[15px] font-medium text-black transition-transform hover:scale-[1.03] md:block">
          Start Building
        </button>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative flex h-8 w-8 items-center justify-center md:hidden"
        >
          <span
            className={`absolute h-[1.5px] w-6 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-[1.5px] w-6 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-[1.5px] w-6 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((item) => (
            <a
              key={item.lable}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-[15px] text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.lable}
            </a>
          ))}
          <button className="mt-3 w-full rounded-full bg-white px-6 py-3 text-[15px] font-medium text-black transition-transform hover:scale-[1.02]">
            Start Building
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
