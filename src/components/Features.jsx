import { useEffect, useRef, useState } from "react";
import { FileText, Zap, HelpCircle, Copy, Lock, Terminal } from "lucide-react";
import { motion } from "framer-motion";

function Features() {
  const features = [
    {
      icon: FileText,
      title: "Form Builder",
      description:
        "Create custom forms from the dashboard — add, edit or remove fields, set field types, and mark each one required or optional.",
    },
    {
      icon: Zap,
      title: "Dynamic Content",
      description:
        "Manage hero sections, services and testimonials from the CMS. Update the content and it's live on the frontend — no code changes.",
    },
    {
      icon: HelpCircle,
      title: "FAQ Management",
      description:
        "Add, edit, delete, reorder and enable or disable FAQs, then serve the full set through a single API.",
    },
    {
      icon: Copy,
      title: "Multi-Tenant",
      description:
        "Every company gets its own forms, entries, FAQs and content. Tenants are isolated — no account can see another's data.",
    },
    {
      icon: Lock,
      title: "API Security",
      description:
        "Authentication, API keys, access permissions, tenant validation and rate limiting protect every request by default.",
    },
    {
      icon: Terminal,
      title: "Entries Dashboard",
      description:
        "Every submission lands in your dashboard — search, filter, open individual entries, update status, or export the results.",
    },
  ];

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const [translateX, setTranslateX] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(900);

  useEffect(() => {
    let ticking = false;
    const updateLayout = () => {
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container) return;
      const maxTranslate = Math.max(
        track.scrollWidth - container.clientWidth,
        0,
      );
      const animationHeight =
        window.innerWidth < 768
          ? Math.max(maxTranslate + 150, window.innerHeight)
          : Math.max(maxTranslate + window.innerHeight * 0.6, 900);
      setSectionHeight(animationHeight);
    };
    const handleScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        const container = containerRef.current;
        if (!section || !track || !container) {
          ticking = false;
          return;
        }
        const rect = section.getBoundingClientRect();
        const maxScroll = section.offsetHeight - window.innerHeight;
        if (maxScroll <= 0) {
          ticking = false;
          return;
        }
        const scrolled = -rect.top;
        const progress = Math.min(Math.max(scrolled / maxScroll, 0), 1);
        const maxTranslate = Math.max(
          track.scrollWidth - container.clientWidth,
          0,
        );
        setTranslateX(-progress * maxTranslate);
        ticking = false;
      });
      ticking = true;
    };
    const handleResize = () => {
      updateLayout();
      handleScroll();
    };
    updateLayout();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    window.addEventListener("resize", handleResize);
    const timeout = setTimeout(() => {
      updateLayout();
      handleScroll();
    }, 300);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative z-20 bg-black"
      style={{ height: `${sectionHeight}px` }}
    >
      <div
        className=" sticky top-16 flex h-[calc(100vh-4rem)] flex-col justify-center overflow-hidden
         py-8 sm:py-14 md:top-0 md:h-screen md:justify-center md:py-20"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className=" max-w-5xl text-[30px] font-black leading-[1.02] tracking-tight text-white sm:text-5xl md:text-7xl "
          >
            Everything the content
            <br />
            <span className="font-serif font-normal italic">layer</span> needs.
          </motion.h2>
        </div>
        <div
          ref={containerRef}
          className=" mt-10 w-full overflow-visible sm:mt-12 md:mt-16 "
        >
          <div
            ref={trackRef}
            className=" flex w-max gap-4 px-5 sm:gap-5 sm:px-6 md:gap-6 md:px-6 md:pr-16 will-change-transform"
            style={{
              transform: `translate3d(${translateX}px, 0, 0)`,
              transition: "transform 0.06s linear",
            }}
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className=" group z-20 w-[285px] shrink-0 rounded-2xl border border-white/10 bg-white/[0.025]
                    p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.05]
                    sm:w-[340px] sm:p-6 md:w-[390px] "
                >
                  <div
                    className="mb-6 flex h-11  w-11 items-center justify-center rounded-lg border border-white/10
                      bg-white/[0.03] transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.08] md:mb-8 "
                  >
                    <Icon
                      className=" h-5 w-5 text-neutral-300 transition-transform duration-500 group-hover:scale-110 group-hover:text-white "
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-neutral-400 sm:text-[15px]">
                    {feature.description}
                  </p>
                  <div className=" mt-7 h-px w-0 bg-white/40   transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-6 px-5 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 sm:mt-10 sm:px-6">
          Scroll to explore
        </p>
      </div>
    </section>
  );
}
export default Features;
