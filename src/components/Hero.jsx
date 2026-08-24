import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg.png";

function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
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

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-black px-6 pt-32 pb-16 text-center md:pt-24">
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />
      <div className="absolute inset-0 z-[1] bg-black/20" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center"
      >
        <motion.div
          variants={itemVariants}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-[11px] font-medium tracking-[0.2em] text-neutral-300 backdrop-blur-sm"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.4,
              type: "spring",
              stiffness: 200,
            }}
            className="h-1.5 w-1.5 rounded-full bg-white"
          />
          HEADLESS CMS &times; API PLATFORM
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="text-[52px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[64px] md:text-[76px] lg:text-[94px]"
        >
          Create once.
          <br />
          Publish{" "}
          <span className="font-serif font-normal italic tracking-normal">
            everywhere.
          </span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-8 w-full max-w-2xl text-base font-semibold leading-relaxed text-neutral-400 sm:text-lg md:text-xl"
        >
          The flexible CMS and API layer for modern websites, apps and digital
          products. Build content and forms in one place, deliver them to every
          frontend.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
        >
          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-black"
          >
            Start Building Free
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.03,
              backgroundColor: "rgba(255,255,255,0.08)",
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="rounded-full border border-white/20 bg-white/[0.04] px-7 py-4 text-[15px] font-semibold text-white backdrop-blur-sm"
          >
            Explore the API
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.1,
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative z-10 mx-auto mt-auto flex w-full max-w-7xl items-center justify-between px-2 pt-10 text-[11px] tracking-[0.15em] text-neutral-500"
      >
        <div className="flex items-center gap-3">
          <motion.span
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden
          >
            &darr;
          </motion.span>

          <span>SCROLL</span>

          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{
              delay: 1.3,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="hidden h-px bg-neutral-700 sm:block"
          />
        </div>
        <span className="hidden sm:block">API-FIRST &middot; NO SETUP</span>
      </motion.div>
    </section>
  );
}

export default Hero;
