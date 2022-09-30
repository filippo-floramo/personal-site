import arrow from "../../img/arrow.svg";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion"
import { useContextProvider } from "../../context";
import { UseIsMobile } from "../../utils/utils";

interface props {
   route: string
}



export default function Arrow({ route }: props) {



   const { isOpen } = useContextProvider();

   const isMobile = UseIsMobile();


   const arrowVariants: Variants = isMobile ?
      {
         animate: isOpen ? {
            y: 305,
         } : {}
      } : {}




   return (
      <motion.div variants={arrowVariants} animate="animate" className="arrow--container">
         <Link to={route}>
            <img className="arrow" src={arrow} alt="arrow" />
         </Link>
      </motion.div>
   )
}