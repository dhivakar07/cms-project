import { useRef } from "react";
import {
  Megaphone,
  Code2,
  Briefcase,
  Building2,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import "./Getstarted.css";

const personas = [
  {
    icon: Megaphone,
    title: "Marketing Teams",
    description:
      "Create and update forms, FAQs and content from the dashboard — no engineering queue.",
  },
  {
    icon: Code2,
    title: "Developers",
    description:
      "GET content and POST form entries through the same REST APIs.",
  },
  {
    icon: Briefcase,
    title: "Agencies",
    description:
      "Reuse the same forms and content APIs across multiple websites.",
  },
  {
    icon: Building2,
    title: "SaaS Companies",
    description:
      "Give each customer isolated forms, entries, FAQs and content.",
  },
  {
    icon: Smartphone,
    title: "Mobile Teams",
    description:
      "Use the same APIs for iOS, Android and cross-platform apps.",
  },
  {
    icon: TrendingUp,
    title: "Growing Businesses",
    description:
      "Run multiple tenants on one platform without mixing data.",
  },
];

function PersonaCard({ icon: Icon, title, description }) {
  const cardRef = useRef(null);

  const handleMove = (event) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMove}
      className="persona-card group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6"
    >
      <div
        className="persona-card-spot pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div className="relative">
        <Icon
          className="mb-4 h-5 w-5 text-white transition-transform duration-300 ease-out group-hover:scale-110 sm:mb-5"
          strokeWidth={1.5}
          aria-hidden
        />
        <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
        <p className="text-[15px] leading-relaxed text-white/50">
          {description}
        </p>
      </div>
    </article>
  );
}

function Personas() {
  return (
    <section
      id="product"
      aria-labelledby="personas-heading"
      className="as-inter bg-black px-6 py-16 text-white md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2
          id="personas-heading"
          className="max-w-5xl text-[30px] font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Built for{" "}
          <span className="as-serif font-normal italic tracking-normal">
            modern digital products.
          </span>
        </h2>

        <ul className="mt-10 grid list-none gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {personas.map((persona) => (
            <li key={persona.title}>
              <PersonaCard {...persona} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Personas;
