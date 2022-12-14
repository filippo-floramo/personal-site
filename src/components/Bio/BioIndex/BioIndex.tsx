import React from "react";
import BioContent from "../BioContent/BioContent";
import Arrow from "../../Arrow/Arrow";
import { motion, Variants } from "framer-motion";
import propic from "../../../img/propic-border.png";



export default function BioIndex(): JSX.Element {

   const imageVariants: Variants = {

      exit: {
         opacity: 0,
         transition: {
            delay: 0.5,
            duration: 0.9
         }
      }
   }

   return (
      <>
         <section className="about">
            <motion.div variants={imageVariants} exit="exit" className="about--propic">
               <img className="profile--pic" src={propic} alt="profile pic maria" />
            </motion.div>
            <BioContent />
            <Arrow route="/Skills" />
         </section>
      </>
   )
}