import { motion, Variants } from "framer-motion";
import { UseIsMobile, UseIsDesktop } from "../../../utils/utils";
import { useContextProvider } from "../../../context";


export default function BioContent() {



   const { isOpen, setIsOpen } = useContextProvider();

   const isMobile = UseIsMobile();
   const isDesktop = UseIsDesktop();


   const mainVariants: Variants = isDesktop ?
      {
         animate: isOpen ?
            {
               x: -270,
               transition: {
                  duration: 0.5
               }
            } : {},
      } : {}


   const secondaryVariants = isMobile ?
      {
         animate: isOpen ?
            {
               y: 305,
               transition: { duration: 0.5 }
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
               transition: { duration: 0.5 }
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
            transition: { duration: 1 }
         }
         :
         { opacity: 0 }
   }

   const containerVariants: Variants = {

      hidden: { opacity: 0 },

      animate: {
         opacity: 1,
         transition: {
            delay: 0.8,
            duration: 0.4,
            ease: "easeOut"
         }
      },

      exit: {
         scale: 0,
         transition: {
            duration: 1.8,
            ease: "anticipate"
         }
      }
   }

   return (
      <motion.div
         className="about--container"

         variants={containerVariants}
         initial="hidden"
         animate="animate"
         exit="exit"
      >

         <motion.div
            className="about--container--content primary"
            onClick={() => { setIsOpen(prevState => !prevState) }}

            variants={mainVariants}
            animate="animate"
         >
            <p>
               Yup, that's me, a curious guy who fell in love with coding while studying SEO on the platform <a onClick={(e) => e.stopPropagation()} href="https://www.start2impact.it/" rel="noreferrer" target="_blank" className="s2i">Start2impact</a>.
               Everytime I write some lines of code, I get excited about the fact of creating something from scratch and see it come to life in front of the screen.
               <br />
               With that in mind, I decided to shift my field of study and fully jump into this world of strings and functions.
            </p>
         </motion.div>

         <motion.div
            className="about--container--content secondary"
            onClick={() => setIsOpen(prevState => !prevState)}

            variants={secondaryVariants}
            animate="animate"
         >

            <motion.div
               className="text--container"


               variants={textVariants}
               animate="animate"
            >
               <h3> React to Act. </h3>

               <h4>This is the principle I kept in mind during my most important milestones:</h4>

               <ul>
                  <li>
                     On March 2021 I graduate with a bachelor's degree in Business Management at the University of Messina.
                  </li>
                  <li>
                     On April 2021 I join Start2impact's community, choosing the Digital Marketing path.
                  </li>
                  <li>
                     On January 2022 I switch to web development, it was love at first sight. Now I aim to fulfill my will of becoming a  <strong>Web Developer</strong> .
                  </li>
               </ul>
            </motion.div>
         </motion.div>
      </motion.div>
   )
}