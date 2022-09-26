import React from "react";
import { refs } from "../../../interfaces";
import { motion, Variants } from "framer-motion";


export default function LinksIcon(props: refs): JSX.Element {

   const iconVariants: Variants = {
      hidden: { scale: 0 },
      show: {
         scale: 1,
         transition: {
            duration: 0.5
         }
      },

      hover: {
         scale: 1.1,
         transition: {
            ease: "easeOut",
            duration: 0.3
         }
      }
   }


   return (
      <motion.a
         variants={iconVariants}
         initial="hidden"
         animate="show"
         whileHover="hover"

         href={props.href}
         rel="noreferrer"
         target="_blank"
      >
         <img className={props.class} src={props.icon} alt={props.alt} />
      </motion.a>
   )
}