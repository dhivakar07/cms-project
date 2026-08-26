import { motion } from "framer-motion";
import { Globe, Code2, Smartphone, Shield } from "lucide-react";

function OneAPI() {
  const endpoints = [
    { icon: Globe, label: "Website" },
    { icon: Code2, label: "React App" },
    { icon: Smartphone, label: "Mobile App" },
    { icon: Shield, label: "Admin Panel" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <section className="overflow-hidden bg-black px-6 py-10 md:py-12">
      <div className="mx-auto w-full max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl text-[30px] font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          One API.{" "}
          <span className="font-serif font-normal italic">
            Every experience.
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 max-w-3xl text-lg leading-relaxed text-neutral-400 md:text-[21px]"
        >
          Your forms, FAQs and content shouldn't be locked inside one frontend.
          Manage them in one dashboard and let any website, app or admin panel
          read and write to the same source of truth.
        </motion.p>
        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {endpoints.map((ep) => {
              const Icon = ep.icon;
              return (
                <motion.div
                  key={ep.label}
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(255,255,255,0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="group flex h-[210px] cursor-default flex-col justify-between rounded-xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon
                      className="h-5 w-5 text-neutral-400 transition-colors duration-300 group-hover:text-white"
                      strokeWidth={1.5}
                    />
                  </motion.div>
                  <div>
                    <p className="mb-1 font-mono text-[10px] tracking-widest text-neutral-500">
                      CONSUMES
                    </p>
                    <p className="text-[15px] font-semibold text-white">
                      {ep.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 120,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="self-center overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="ml-2 font-mono text-xs text-neutral-500">
                request.http
              </span>
            </div>
            <div className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
              <p>
                <span className="text-green-400">GET</span>{" "}
                <span className="text-neutral-300">
                  /api/forms/contact-form
                </span>
              </p>
              <p className="text-neutral-500">
                Authorization: Bearer{" "}
                <span className="text-neutral-300">sk_live_••••</span>
              </p>
              <p className="mt-4 text-neutral-500">{"{"}</p>
              <p className="pl-4">
                <span className="text-sky-400">"name"</span>
                <span className="text-neutral-500">: </span>
                <span className="text-amber-300">"Contact Form"</span>
                <span className="text-neutral-500">,</span>
              </p>
              <p className="pl-4">
                <span className="text-sky-400">"fields"</span>
                <span className="text-neutral-500">: [</span>
              </p>
              <p className="pl-8 text-neutral-500">
                {"{ "}
                <span className="text-sky-400">"name"</span>
                <span className="text-neutral-500">: </span>
                <span className="text-amber-300">"email"</span>
                <span className="text-neutral-500">, </span>
                <span className="text-sky-400">"type"</span>
                <span className="text-neutral-500">: </span>
                <span className="text-amber-300">"email"</span>
                <span className="text-neutral-500">, </span>
                <span className="text-sky-400">"required"</span>
                <span className="text-neutral-500">: </span>
                <span className="text-purple-400">true</span>
                {" }"},
              </p>
              <p className="pl-8 text-neutral-500">
                {"{ "}
                <span className="text-sky-400">"name"</span>
                <span className="text-neutral-500">: </span>
                <span className="text-amber-300">"message"</span>
                <span className="text-neutral-500">, </span>
                <span className="text-sky-400">"type"</span>
                <span className="text-neutral-500">: </span>
                <span className="text-amber-300">"textarea"</span>
                <span className="text-neutral-500">, </span>
                <span className="text-sky-400">"required"</span>
                <span className="text-neutral-500">: </span>
                <span className="text-purple-400">true</span>
                {" }"}
              </p>
              <p className="pl-4 text-neutral-500">],</p>
              <p className="pl-4">
                <span className="text-sky-400">"tenant"</span>
                <span className="text-neutral-500">: </span>
                <span className="text-amber-300">"acme"</span>
              </p>
              <p className="text-neutral-500">{"}"}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OneAPI;
