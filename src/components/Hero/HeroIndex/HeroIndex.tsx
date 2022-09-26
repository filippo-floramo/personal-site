import React from "react";
import Name from "../HeroName/HeroName";
import { motion, Variants } from "framer-motion";




export default function Hero(): JSX.Element {

   const textVariants: Variants = {
      hidden: { opacity: 1 },
      exit: {
         opacity: 0,
         transition: {
            delay: 0.3,
            duration: 0.9
         }
      },

   }

   return (
      <div className="hero">
         <div className="hero--content">
            <motion.p
               className="hero--content--text"

               variants={textVariants}
               initial="hidden"
               exit="exit"
            >
               Hi, I'm
            </motion.p>
            <Name />
            <motion.p
               className="hero--content--text"

               variants={textVariants}
               initial="hidden"
               exit="exit"
            >
               An aspiring web developer
            </motion.p>
         </div>
      </div>
   )
}