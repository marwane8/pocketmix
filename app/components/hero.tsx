import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import hero1 from "../assets/hero_1.jpg";
import hero2 from "../assets/hero_3.jpg";
import hero3 from "../assets/hero_2.jpg";
import { classNames } from "~/utils/js.util";
import { Link } from "@remix-run/react";

export default function Hero() {
  const images = [hero1, hero2, hero3];
  const words = ["Radiant", "Elegant", "Timeless"];

  const [stage, setStage] = useState(0);
  const STAGE_TIME = 10; // seconds for each slide
  const SWITCH_TIME = 1; // seconds for transition slide

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
      <div className="h-screen-svh relative overflow-hidden">
        <div className="h-4/5 bg-black absolute z-10 w-screen bg-opacity-35">
          <div className="text-neutral text-[2.3em] md:text-6xl md:py-10 2xl:text-7xl text-left h-1/6  flex">
            <div className="m-auto w-screen px-5">
              <h1 className="  m-auto font-semibold">Capture Life&apos;s </h1>
              <div className="relative w-fit flex">
                <AnimatePresence>
                  <motion.h1
                    variants={slideVariant}
                    key={images[stage]}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: SWITCH_TIME }}
                    className={classNames(
                      "absolute font-gwendy font-extrabold text-6xl md:text-7xl 2xl:translate-y-2",
                      stage == 0 && " text-[#D39470] translate-x-1",
                      stage == 1 && " text-primary translate-x-5",
                      stage == 2 && " text-[#fd92d7] translate-x-3"
                    )}
                  >
                    {words[stage]}
                  </motion.h1>
                </AnimatePresence>
                <h1 className="text-right m-auto font-semibold flex translate-y-2">
                  <p className="opacity-0 w-[200px] md:w-[240px] bg-primary">
                    {words[stage]}
                  </p>
                  Moments
                </h1>
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            variants={slideVariant}
            key={images[stage]}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{ backgroundImage: `url(${images[stage]})` }}
            transition={{ duration: SWITCH_TIME }}
            className={classNames(
              "absolute overflow-visible h-4/5 bg-cover bg-no-repeat",
              stage == 0 && hero1ImgCSS,
              stage == 1 && hero2ImgCSS,
              stage == 2 && hero3ImgCSS
            )}
          />
        </AnimatePresence>
        <div className="flex flex-col h-full bg-accent">
          <div className="h-4/5" />
          <div className="h-1/5 flex items-center">
            <div className="md:m-auto mx-5">
              <p className="text-xl md:text-3xl max-w-screen-lg m-auto text-center">
                <span className=" font-extrabold">
                  Full-Service Photography Studio
                </span>{" "}
                in Astoria, New York. Including intimate portraits, candid
                lifestyle shoots, and event coverage.
              </p>
              <div className="translate-y-4">
                <Link to={"/contact"}>
                  <div className="cta-btn m-auto w-fit md:text-xl">
                    BOOK AN APPOINTMENT
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const hero1ImgCSS =
  "-translate-x-[230px] w-[1000px] md:w-screen md:translate-x-0 lg:bg-center";
const hero2ImgCSS = "w-screen bg-center 2xl:bg-top";
const hero3ImgCSS =
  "-translate-x-56 w-[1000px] md:w-screen md:translate-x-0 lg:bg-center";
