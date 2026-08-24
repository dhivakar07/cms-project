import getstartedBg from "../assets/getstarted-bg.jpg";
import "./Getstarted.css";

const kickerWords = ["Create.", "Manage.", "Connect.", "Deliver."];

function Getstarted() {
  return (
    <section
      id="start"
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden py-32"
    >
      <div className="absolute inset-0 z-0">
        <img
          alt="Abstract"
          src={getstartedBg}
          className="h-full w-full object-cover"
          style={{
            transform: "scale(1.1) translateY(20px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <div className="gs-reveal mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {kickerWords.map((word, index) => (
            <span
              key={word}
              className="gs-sans-display gs-reveal text-[clamp(1.5rem,3vw,3rem)] leading-tight text-white"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {word}
            </span>
          ))}
        </div>

        <p
          className="gs-reveal mx-auto mb-16 max-w-xl text-lg text-white/60 md:text-xl"
          style={{ animationDelay: "300ms" }}
        >
          Your content layer for the modern web.
        </p>

        <h2
          className="gs-sans-display gs-reveal mb-12 text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-white"
          style={{ animationDelay: "400ms" }}
        >
          Your content deserves{" "}
          <em className="gs-display whitespace-nowrap font-normal italic">
            an API.
          </em>
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
