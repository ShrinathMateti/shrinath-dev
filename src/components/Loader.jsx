import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 12;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          finishLoading();
        }, 500);
      }

      setProgress(Math.floor(value));
    }, 120);

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] bg-[#020617] flex items-center justify-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[300px] h-[300px] bg-blue-500/10 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Dot */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
        />

        {/* Name */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight text-white"
        >
          Shrinath Mateti
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.4 }}
          className="mt-2 text-sm tracking-[0.25em] uppercase text-slate-500"
        >
          Portfolio
        </motion.p>

        {/* Progress */}
        <div className="mt-8 w-52">
          <div className="flex justify-between text-xs text-slate-500 mb-2">
            <span>Loading</span>
            <span>{progress}%</span>
          </div>

          <div className="h-[2px] bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                ease: "easeOut",
              }}
              className="h-full bg-gradient-to-r from-green-400 to-blue-500"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;