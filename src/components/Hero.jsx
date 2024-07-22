import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ChathuProfile.jpeg";
import { delay, motion } from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay  },
    },
});

const Hero = () => {
  return (
        <div className="border-bborder-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                  <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl text-neutral-300 font-thin tracking-tight lg:mt-16 
                    lg:text-8xl">

                    Chathuni Karunarathne
                  </motion.h1> 
                  <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                    bg-clip-text text-3xl tracking-tight text-transparent">

                    Front-End-Developer
                  </motion.span>
                  <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light text-neutral-400 tracking-tighter">
                    {HERO_CONTENT}
                  </motion.p>
                </div>
              </div>
            <div className="w-full  lg:w-1/2 tg:p-8">
            <div className="flex justify-center lg:w-1/2  ">
              <motion.img
              initial={{ x: 100, opacity: 0}}
              animate={{ x: 0, opacity: 1}}
              transition={{ duration: 1, delay: 1.2}}
              src={profilePic} 
              alt="Chathuni Karunarathne" />

            </div>
            </div>
            </div>
        </div>
         );
};
export default Hero;

