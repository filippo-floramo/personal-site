import { useContext } from "react"
import Context from "../../context";
import { Link, useNavigate } from "react-router-dom"
import { motion, Variants } from "framer-motion"
import initials from "../../img/sigla.svg"





export default function Navbar(): JSX.Element {

   const navigate = useNavigate();


   const Ctx = useContext(Context);

   if (!Ctx) return <div>No context yet</div>;

   const { isHome } = Ctx;


   const curlyLeftVariants: Variants = {
      hidden: { x: 0 },
      animate: isHome ? {} :
         {
            x: [0, 90, 60],
            transition: { duration: 2 }
         }
   }

   const curlyRightVariants: Variants = {
      hidden: { x: 0 },
      animate: isHome ? {} :
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
      },
      hover: {
         cursor: "pointer"
      }
   }

   return (
      <nav className="nav">
         <div className="nav--container">
            <motion.span
               className="curly"

               variants={curlyLeftVariants}
               initial="hidden"
               animate="animate"
            >
               {`{`}
            </motion.span>
            {
               isHome ?
                  <>
                     <Link className="nav--link" to="/About">About</Link>
                     <Link className="nav--link" to="/Skills">Skills</Link>
                     <Link className="nav--link" to="/Contact">Contact</Link>
                  </>
                  :
                  <>
                     <motion.span
                        onClick={() => navigate("/")}
                        variants={initialsVariants}
                        initial="hidden"
                        animate="animate"
                        whileHover="hover"
                     >
                        <img className="initials" src={initials} alt="initials" />
                     </motion.span>
                  </>
            }
            <motion.span
               className="curly"

               variants={curlyRightVariants}
               initial="hidden"
               animate="animate"
            >
               {`}`}
            </motion.span>
         </div>
      </nav>
   )
}