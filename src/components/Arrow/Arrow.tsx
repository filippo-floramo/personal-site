import arrow from "../../img/arrow.svg";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion"
import { useContext } from "react";
import Context from "../../context";
import { UseIsMobile } from "../../utils/utils";

interface props {
   route: string
}



export default function Arrow({ route }: props) {

   const Ctx = useContext(Context);

   if (!Ctx) return <div>No context yet</div>;

   const { isOpen } = Ctx;

   const isMobile = UseIsMobile();


   const arrowVariants: Variants = isMobile ?
      {
         initial: { rotate: 90},
         animate: isOpen ? {
            y: 305,
         }
            : {}
      }
      : {}




   return (
      <motion.div variants={arrowVariants} initial="initial" animate="animate" className="arrow--container">
         <Link to={route}>
            <img className="arrow" src={arrow} alt="arrow" />
         </Link>
      </motion.div>
   )
}