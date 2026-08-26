import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import "./Getstarted.css";

const faqs = [
  {
    question: "What is the platform?",
    answer:
      "A SaaS CMS where you create forms, FAQs and content in the dashboard, then deliver them through APIs to any website, app or admin panel.",
  },
  {
    question: "How does the API work?",
    answer:
      "GET returns forms, FAQs and content. POST sends form entries back into the CMS. Authenticate with an API key — the same REST APIs work from any client.",
  },
  {
    question: "Can I use it with React?",
    answer:
      "Yes. Fetch the same REST endpoints from React, Next.js or any JavaScript app to render content and submit entries.",
  },
  {
    question: "Can I use it with mobile apps?",
    answer:
      "Yes. Forms and content are not tied to one website. The same APIs power websites, React apps, mobile apps and admin tools.",
  },
  {
    question: "Is there a free tier?",
    answer:
      "Yes. Start building free, then scale into paid plans as your traffic, tenants and team grow.",
  },
];

function FAQS() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-heading"
      className="as-inter relative overflow-hidden bg-black px-6 py-16 text-white md:py-24"
    >
      <div
        className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-4xl">
        <header>
          <h2
            id="faqs-heading"
            className="text-[30px] md:text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight"
          >
            FAQs that stay{" "}
            <span className="as-serif font-normal italic tracking-normal">
              in sync.
            </span>
          </h2>
          <p className="mb-16 mt-5 text-lg leading-relaxed text-white/50">
            Add, edit and reorder them in the dashboard. Every website and app
            reads them from{" "}
            <code className="mx-0.5 rounded-md bg-white/10 px-2 py-0.5 font-mono text-[13px] text-white/70">
              GET /api/faqs
            </code>
            .
          </p>
        </header>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <article
                key={faq.question}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                  >
                    <span className="text-[15px] font-semibold text-white md:text-base">
                      {faq.question}
                    </span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70"
                      aria-hidden
                    >
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" strokeWidth={2} />
                      ) : (
                        <Plus className="h-3.5 w-3.5" strokeWidth={2} />
                      )}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5 text-left md:px-6"
                >
                  <p className="text-[15px] leading-relaxed text-white/50">
                    {faq.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQS;
