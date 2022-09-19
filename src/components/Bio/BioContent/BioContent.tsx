import React, { useState } from "react";
import { motion } from "framer-motion";
import { UseIsMobile, UseIsDesktop } from "../../../utils/utils";



export default function BioContent() {

   const [isOpen, setIsOpen] = useState<boolean>(false); /* level up to Context */

   const isMobile = UseIsMobile();
   const isDesktop = UseIsDesktop();


   const mainVariants: any = isDesktop ?
      {
         animate: isOpen ?
            {
               x: -270,
               transition: {
                  duration: 0.5
               }
            } : undefined,
      } : undefined


   const secondaryVariants = isMobile ?
      {
         animate: isOpen ?
            {
               y: 305,
               transition: {
                  duration: 0.5
               }
            }
            :
            {
               y: [0, 20, 22, 0],

               transition: {
                  repeat: Infinity,
                  duration: 2,
               }
            }
      }
      :
      {
         animate: isOpen ?
            {
               x: 270,
               transition: {
                  duration: 0.5
               }
            }
            :
            {
               x: [0, 20, 22, 0],

               transition: {
                  repeat: Infinity,
                  duration: 2,
               }
            }
      }

   const textVariants = {
      animate: isOpen ?
         {
            opacity: 1,
            transition: {
               duration: 1
            }
         }
         :
         {
            opacity: 0
         }
   }

   return (
      <div className="about--container">
         <motion.div
            className="about--container--content main"
            onClick={() => setIsOpen(prevState => !prevState)}

            variants={mainVariants}
            animate="animate"
         >
            <p>
               Yup, that's me, a curious guy who fell in love with coding while studying Digital Marketing on the platform Start2impact.
               Everytime I write some lines of code, I get excited about the fact of creating something from scratch and see it come to life in front of the screen.
               <br />
               With that in mind, I decided to shift my field of study and fully jump into this world of strings and functions.
            </p>
         </motion.div>

         <motion.div
            className="about--container--content secondary"

            variants={secondaryVariants}
            animate="animate"
         >

            <motion.div
               className="text--container"

               variants={textVariants}
               animate="animate"
            >
               <h3> Plan -&gt; Do -&gt; Check -&gt; Act. </h3>

               <h4>This the principle i followed when pursuing my most important milestones:</h4>

               <ul>
                  <li>On March 2021 I graduate with a bachelor's degree in Business Management at the University of Messina.
                  </li>
                  <li>On April 2021 I join <a href="https://www.start2impact.it/" rel="noreferrer" target="_blank" className="s2i">Start2impact</a>'s community, choosing the Digital Marketing path.
                  </li>
                  <li>On January 2022 I switch to web development while studying SEO on the <a href="https://www.start2impact.it" rel="noreferrer" target="_blank" className="s2i">S2i</a> platform. It was love at first sight, and I didn't get back since.
                  </li>
               </ul>
            </motion.div>
         </motion.div>
      </div>
   )
}