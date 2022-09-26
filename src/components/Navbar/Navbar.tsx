import { useContext } from "react"
import Context from "../../context";
import { Link } from "react-router-dom"
import { motion, Variants } from "framer-motion"
import initials from "../../img/sigla.svg"




export default function Navbar(): JSX.Element {

   const Ctx = useContext(Context);

   if (!Ctx) return <div>No context yet</div>;

   const { isHome } = Ctx;

   const curlyLeftVariants: Variants = {
      hidden: { x: 0 },
      animate: isHome ?
         {}
         :
         {
            x: [0, 90, 60],
            transition: { duration: 2 }
         }
   }

   const curlyRightVariants: Variants = {
      hidden: { x: 0 },
      animate: isHome ?
         {}
         :
         {
            x: [0, -90, -60],
            transition: { duration: 2 }
         }
   }

   const initialsVariants: Variants = {
      hidden: { opacity: 0 },
      animate: {
         opacity: 1,
         transition: {
            delay: 1.33,
            duration: 0.5
         }
      }

   }

   return (
      <nav className="nav">
         <div className="nav--container">
            <motion.span
               variants={curlyLeftVariants}
               initial="hidden"
               animate="animate"

            >{`{`}</motion.span>
            {
               isHome ?
                  <>
                     <span><Link to="/About">About</Link></span>
                     <span><Link to="/Skills">Skills</Link></span>
                     <span><Link to="/Contact">Contact</Link></span>
                  </>
                  :
                  <>
                     <motion.span variants={initialsVariants} initial="hidden" animate="animate">
                        <Link to="/">
                           <img className="initials" src={initials} alt="" />
                        </Link>
                     </motion.span>
                  </>
            }
            <motion.span
               variants={curlyRightVariants}
               initial="hidden"
               animate="animate"
            >{`}`}</motion.span>
         </div>
      </nav>
   )
}