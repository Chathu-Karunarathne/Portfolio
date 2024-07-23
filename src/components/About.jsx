import aboutImg from"../assets/ChathuProfile2.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-neutral-300 text-4xl">About
            <span className="text-neutral-500">Me</span>
      </h2>
    <div className="flex flex-wrap overflow-hidden">
        <motion.div
         whileInView={{ opacity: 1, x: 0}}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration: 0.5}}
              className="w-full rounded-md lg:w-1/2 lg:p-8 ">

          <div className=" justify-center w-full tg:p-8  flex lg:justify-center items-center lg:w-1/2">
            <img className="rounded-2xl hover:cursor-pointer brightness-75 object-cover overflow-hidden shadow-inner" src={aboutImg} alt="about"/>
          </div>
        </motion.div>  
        <motion.div
         whileInView={{ opacity: 1, x: 0}}
         initial={{ opacity: 0, x: 100}}
         transition={{ duration: 0.5}}
         className="w-full lg:w-1/2">
             <div className="flex justify-center  text-neutral-400 lg:justify-start">
              <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
             </div>
        </motion.div>    
    </div>
    </div>
  );
}


export default About;
