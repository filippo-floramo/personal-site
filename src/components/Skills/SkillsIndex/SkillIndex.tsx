import React from "react";
import { motion, Variants } from "framer-motion";
import SkillsContent from "../SkillsContent/SkillsContent";
import Arrow from "../../Arrow/Arrow";
import SkillsPortfolio from "../SkillsPortfolio";





export default function SkillIndex(): JSX.Element {

   const skillsVariants: Variants = {
      exit: {
         opacity: 0,
         transition: {
            duration: 1.3
         }
      }
   }

   return (
      <>
         <section className="skills">

            <motion.h1 variants={skillsVariants} exit="exit" className="skills--descr">
               Skills are like coding, always under development.
            </motion.h1>

            <motion.div variants={skillsVariants} exit="exit" className="skills--container">

               <SkillsContent />
               <SkillsPortfolio />

            </motion.div>
            <Arrow route="/Contact" />
         </section>
      </>
   )

}