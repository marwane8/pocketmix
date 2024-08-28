import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import hero1 from "../assets/hero_1.jpg";
import hero2 from "../assets/hero_3.jpg";
import hero3 from "../assets/hero_2.jpg";
import { classNames } from "~/utils/js.util";

export default function Hero() {
  const images = [hero1, hero2, hero3];
  const words = ["Radiant", "Mystical", "Aspirational"];

  const [stage, setStage] = useState(0);
  const STAGE_TIME = 20; // seconds for each slide

  function nextStage() {
    let newStage = stage + 1;
    if (newStage >= images.length) {
      newStage = 0;
    }
    setStage(newStage);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextStage();
    }, STAGE_TIME * 1000); //rotate very 10seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  });

  const slideVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <div className="bg-black relative max-w-screen-2xl m-auto">
        <div className="absolute h-full z-20 w-full flex flex-col justify-around px-10 py-0 ">
          <motion.h1
            animate={{
              color: ["#e7e5e4", "#e7e5e4", "#0c0a09", "#0c0a09"],
            }}
            transition={{
              times: [0, 0.66, 0.7, 1],
              duration: STAGE_TIME * 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="z-20 w-full font-semibold text-4xl md:text-6xl text-white"
          >
            Capture Life&apos;s
          </motion.h1>

          <div className="z-20 w-full text-xl text-right h-2/5 relative">
            <AnimatePresence>
              <motion.h1
                variants={slideVariant}
                key={images[stage]}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 3 }}
                className={classNames(
                  "absolute w-full",
                  stage == 0 &&
                    "text-amber-400 font-spectral text-5xl md:translate-y-4 md:-translate-x-16 lg:-translate-x-32 md:text-6xl lg:text-7xl font-semibold",
                  stage == 1 &&
                    "text-rose-600 text-left font-gwendy text-6xl translate-y-7  md:text-7xl lg:text-8xl font-extrabold bottom-0 md:px-9",
                  stage == 2 &&
                    "text-fuchsia-400 font-josefin text-4xl  md:text-7xl lg:text-7xl font-extrabold md:px-9"
                )}
              >
                {words[stage]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.h1
            animate={{
              color: ["#e7e5e4", "#e7e5e4", "#0c0a09", "#0c0a09"],
            }}
            transition={{
              times: [0, 0.66, 0.7, 1],
              duration: STAGE_TIME * 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="z-20 w-full font-semibold text-4xl md:text-6xl text-white text-right"
          >
            Moments
          </motion.h1>
        </div>
        <AnimatePresence>
          <motion.img
            variants={slideVariant}
            key={images[stage]}
            src={images[stage]}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 3 }}
            className="absolute w-screen"
          />
        </AnimatePresence>
        <img src={hero1} alt="" className="opacity-0 w-full" />
      </div>
    </>
  );
}
