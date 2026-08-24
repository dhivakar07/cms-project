import { useEffect, useRef, useState } from "react";
import { FileText, Zap, HelpCircle, Copy, Lock, Terminal } from "lucide-react";
import { motion } from "framer-motion";

function Features() {
  const features = [
    {
      icon: FileText,
      title: "Form API",
      description:
        "POST submissions straight from any frontend into your CMS with spam filtering built in.",
    },
    {
      icon: Zap,
      title: "Dynamic Content",
      description:
        "Localised, scheduled and personalised entries served from a single source of truth.",
    },
    {
      icon: HelpCircle,
      title: "FAQ Management",
      description:
        "Group, order and publish FAQ sets that stay in sync across every surface.",
    },
    {
      icon: Copy,
      title: "Multi-Tenant",
      description:
        "Isolated spaces per brand, client or environment under one account.",
    },
    {
      icon: Lock,
      title: "Security",
      description:
        "Scoped API tokens, audit logs, SSO and encryption at rest by default.",
    },
    {
      icon: Terminal,
      title: "Developer DX",
      description:
        "Typed SDKs, local preview tokens and webhooks that fire on every publish.",
    },
  ];

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const container = containerRef.current;
      if (!section || !track || !container) return;
      const rect = section.getBoundingClientRect();
      const maxScroll = section.offsetHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / maxScroll, 0), 1);
      const maxTranslate = track.scrollWidth - container.clientWidth;
      setTranslateX(-progress * Math.max(maxTranslate, 0));
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[230vh] bg-black">
      <div className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Everything the content
            <br />
            <span className="font-serif font-normal italic">layer</span> needs.
          </motion.h2>
        </div>
        <div
          ref={containerRef}
          className="mt-14 w-full overflow-hidden md:mt-16"
        >
          <div
            ref={trackRef}
            className="flex w-max gap-6 pr-6 md:pr-16"
            style={{
              transform: `translate3d(${translateX}px, 0, 0)`,
              transition: "transform 0.05s linear",
            }}
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group w-[300px] shrink-0 rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.05] sm:w-[350px] lg:w-[390px]"
                >
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.08]">
                    <Icon
                      className="h-5 w-5 text-neutral-300 transition-transform duration-500 group-hover:scale-110 group-hover:text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-neutral-400">
                    {feature.description}
                  </p>
                  <div className="mt-8 h-px w-0 bg-white/40 transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
