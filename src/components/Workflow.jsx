import { motion } from "framer-motion";
import { Layers, SlidersHorizontal, Zap } from "lucide-react";

function Workflow() {
  const cards = [
    {
      number: "01",
      icon: Layers,
      title: "Create",
      description:
        "Model hero sections, services, FAQs and forms with a visual schema builder — no migrations, no developer queue.",
    },
    {
      number: "02",
      icon: SlidersHorizontal,
      title: "Manage",
      description:
        "Draft, review, version and publish everything from one dashboard with full history and role-based access.",
    },
    {
      number: "03",
      icon: Zap,
      title: "Deliver",
      description:
        "Every entry is instantly available over REST and GraphQL, cached at the edge, ready for any frontend.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="bg-black px-6 py-10 md:py-12">
      <div className="mx-auto w-full max-w-7xl">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl text-[30px] font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Build without waiting
          <br />
          on <span className="font-serif font-normal italic">developers.</span>
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid overflow-hidden rounded-2xl border border-white/10 md:mt-16 md:grid-cols-3"
        >
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.number}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  backgroundColor: "rgba(255,255,255,0.035)",
                }}
                transition={{
                  duration: 0.3,
                }}
                className={`group relative min-h-[150px] cursor-default p-7 md:min-h-[180px] md:p-8 ${
                  i !== cards.length - 1
                    ? "border-b border-white/10 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="mb-12 flex items-center justify-between">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="font-mono text-sm tracking-wider text-neutral-500"
                  >
                    {card.number}
                  </motion.span>
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.15,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon
                      className="h-5 w-5 text-neutral-500 transition-colors duration-300 group-hover:text-white"
                      strokeWidth={1.5}
                    />
                  </motion.div>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="max-w-sm text-[15px] leading-relaxed text-neutral-400">
                  {card.description}
                </p>
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 h-px bg-white/40"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Workflow;
