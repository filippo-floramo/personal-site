import React from "react"
import { motion } from "framer-motion";



const pathVariants = {
   hidden: {
      pathLength: 0,
   },
   visible: {
      pathLength: 1,
      transition: {
         duration: 2
      }
   }

}



export default function Name(): JSX.Element {

   return (
      <svg className="name"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.93 155.69">
         <motion.path variants={pathVariants} initial="hidden" animate="visible" className="stroke-1" d="M2,52.71a40.45,40.45,0,0,0,14-7.89,23,23,0,0,0,7.24-11.15c2.73-10.47-4-21.9-11-29.21C9.51,1.59,5.93.53,6.1,5.19,6.22,8.25,7.85,11.44,9.38,14c4.25,7.13,11,12.13,18.5,15.38a91.14,91.14,0,0,0,19.24,5.38c18.3,3.44,38.65,6.28,57.08,2.41,4.68-1,9.38-2.55,13-5.68,2-1.71,3.65-4.25,3.07-6.8s-3.18-4.08-5.69-4.77a25.07,25.07,0,0,0-12.23.15C80.11,25.21,65.79,45.17,55.92,64.29a404.69,404.69,0,0,0-17.23,37.23C32,118.59,25.62,135,25.73,153.69" />
         <motion.path variants={pathVariants} initial="hidden" animate="visible" className="stroke-2" d="M27.66,89.29c9-4.44,17.73-8.07,28-6.21" />
         <motion.line variants={pathVariants} initial="hidden" animate="visible" className="stroke-1" x1="60.37" y1="93.31" x2="64.81" y2="85.73" />
         <motion.path variants={pathVariants} initial="hidden" animate="visible" className="stroke-1" d="M99.65,57.14s-37.1,26.6-24.5,43.17c4.94,6.15,14.13-2,12.94-7" />
         <motion.line variants={pathVariants} initial="hidden" animate="visible" className="stroke-1" x1="93.52" y1="96.29" x2="97.82" y2="89.52" />
         <motion.path variants={pathVariants} initial="hidden" animate="visible" className="stroke-1" d="M103.94,91l-8.56,28.88a109.62,109.62,0,0,1,7.79-18.58C106,95.87,109.26,88.6,115.32,86a6.25,6.25,0,0,1,5.44,0,6.64,6.64,0,0,1,3,5,6.15,6.15,0,0,1-1.45,5.29c-1.93,1.87-4.84,1.52-7.27,1.17" />
         <motion.path variants={pathVariants} initial="hidden" animate="visible" className="stroke-1" d="M124.1,94.22l-8.57,28.88a109.9,109.9,0,0,1,7.8-18.57c2.82-5.47,6.09-12.75,12.14-15.31a6.28,6.28,0,0,1,5.44.06,6.63,6.63,0,0,1,3,5,6.2,6.2,0,0,1-1.45,5.3c-1.94,1.86-4.85,1.51-7.27,1.17" />
         <motion.path variants={pathVariants} initial="hidden" animate="visible" className="stroke-1" d="M160.93,94.78c0,10.44-12.16,10-14.06,2.44s8.18-15.49,12-6.81" />
         <circle className="stroke-3" cx="67.16" cy="80.86" r="2.35" />
         <circle className="stroke-3" cx="100.83" cy="84.23" r="2.35" />
      </svg>
   )
}