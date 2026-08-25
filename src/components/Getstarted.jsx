import { useEffect, useRef, useState } from "react";
import getstartedBg from "../assets/getstarted-bg.jpg";
import "./Getstarted.css";

const kickerWords = ["Create.", "Manage.", "Connect.", "Deliver."];

function Getstarted() {
  const sectionRef = useRef(null);
  const [scale, setScale] = useState(1.1);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let ticking = false;

    const update = () => {
      if (media.matches) {
        setScale(1.1);
        ticking = false;
        return;
      }

      const rect = section.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)),
      );
      setScale(1.05 + progress * 0.2);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    media.addEventListener("change", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      media.removeEventListener("change", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="start"
      aria-labelledby="getstarted-heading"
      className="as-inter relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden py-32"
    >
      <div className="absolute inset-0 z-0">
        <img
          alt=""
          src={getstartedBg}
          className="h-full w-full origin-center object-cover will-change-transform"
          style={{
            transition: "transform 0.1s linear",
            transform: `scale(${scale})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <p className="gs-reveal mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {kickerWords.map((word, index) => (
            <span
              key={word}
              className="gs-sans-display gs-reveal text-[clamp(1.5rem,3vw,3rem)] leading-tight text-white"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {word}
            </span>
          ))}
        </p>

        <p
          className="gs-reveal mx-auto mb-16 max-w-xl text-lg leading-relaxed text-white/50"
          style={{ animationDelay: "300ms" }}
        >
          Your content layer for the modern web.
        </p>

        <h2
          id="getstarted-heading"
          className="gs-sans-display gs-reveal mb-12 text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-white"
          style={{ animationDelay: "400ms" }}
        >
          Your content deserves{" "}
          <em className="gs-display font-normal italic">an API.</em>
        </h2>

        <div className="gs-reveal-scale" style={{ animationDelay: "500ms" }}>
          <a href="#top" className="gs-btn-pill group">
            Start Building Free
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Getstarted;
