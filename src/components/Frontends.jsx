import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MonitorSmartphone,
  Atom,
  Smartphone,
  Wrench,
  Globe,
  X,
} from "lucide-react";

function Frontends() {
  const [selected, setSelected] = useState(null);

  const frontends = [
    {
      title: "Marketing Website",
      description: "Dynamic pages, services, testimonials and FAQs.",
      icon: MonitorSmartphone,
      details:      
        "Build and manage marketing pages with dynamic sections, service listings, customer testimonials, and FAQs — all powered by the same content layer, no rebuild needed for updates.",
    },
    {
      title: "React Application",
      description: "Fetch structured content directly from your API.",
      icon: Atom,
      details:
        "Query structured, typed content directly from your API and render it however you like inside your React app — full control over components, full flexibility over data shape.",
    },
    {
      title: "Mobile Application",
      description: "Use the same content layer across mobile experiences.",
      icon: Smartphone,
      details:
        "Share a single content layer across iOS and Android apps. Update once, reflect everywhere — no duplicate content management across platforms.",
    },
    {
      title: "Internal Tools",
      description: "Connect your custom applications to the CMS.",
      icon: Wrench,
      details:
        "Hook up internal dashboards, admin panels, and custom tools directly to your CMS so teams always work off the same source of truth.",
    },
    {
      title: "Multiple Websites",
      description: "Reuse forms and content across different properties.",
      icon: Globe,
      details:
        "Reuse forms, components, and content blocks across multiple websites or brands, keeping everything consistent while saving hours of duplicate work.",
    },
  ];

  return (
    <section className="w-full bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="mb-20 max-w-4xl text-[30px] font-extrabold 
          md:text-[clamp(2.25rem,5vw,4.5rem)] leading-[1] tracking-tight text-white"
          >
            One source of truth. Every{" "}
            <span className="font-serif font-normal italic tracking-normal">
              digital experience.
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {frontends.map((frontend, i) => {
            const Icon = frontend.icon;

            return (
              <motion.div
                key={frontend.title}
                onClick={() => setSelected(frontend)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  borderColor: "rgba(255,255,255,0.4)",
                  backgroundColor: "rgba(255,255,255,0.04)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex min-h-[330px] cursor-pointer
                flex-col gap-10 overflow-hidden rounded-3xl border
                border-white/20 bg-black p-7"
              >
                {/* glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="pointer-events-none absolute -top-20 -right-20 h-40 w-40
                  rounded-full bg-white/10 blur-3xl"
                />

                <motion.div
                  whileHover={{ y: -4, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Icon
                    size={32}
                    strokeWidth={1.5}
                    className="text-white/60 transition-colors duration-300
                    group-hover:text-white"
                  />
                </motion.div>

                <div>
                  <h3 className="mb-4 text-xl font-semibold tracking-tight text-white">
                    {frontend.title}
                  </h3>

                  <p
                    className="max-w-[260px] text-base leading-7 text-white/50
                    transition-colors duration-300 group-hover:text-white/70"
                  >
                    {frontend.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Popup / Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center
            bg-black/70 backdrop-blur-sm px-6"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="relative w-full max-w-lg rounded-3xl border border-white/20
              bg-black p-8 shadow-2xl"
            >
              <motion.button
                onClick={() => setSelected(null)}
                whileHover={{ rotate: 90, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="absolute right-5 top-5 text-white/50 hover:text-white"
              >
                <X size={22} />
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <selected.icon
                  size={40}
                  strokeWidth={1.5}
                  className="mb-6 text-white"
                />

                <h3 className="mb-4 text-2xl font-semibold tracking-tight text-white">
                  {selected.title}
                </h3>

                <p className="text-base leading-7 text-white/60">
                  {selected.details}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Frontends;