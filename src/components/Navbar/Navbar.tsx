import React, { useContext } from "react"
import Context from "../../context";
import { Link } from "react-router-dom"
import { motion } from "framer-motion"




export default function Navbar(): JSX.Element {

   const Ctx = useContext(Context);

   if (!Ctx) return <div>No context yet</div>;

   const { isHome } = Ctx;



   return (
      <nav className="nav">
         <div className="nav--container">
            <motion.span initial={{ x: 0 }} animate={{ x: [0, 50, 20], transition: { duration: 2 } }}>{`{`}</motion.span>
            {
               isHome ?
                  <>
                     <span><Link to="/About">About</Link></span>
                     <span><Link  to="/">Skills</Link></span>
                     <span><Link  to="/">Contact</Link></span>
                  </>
                  :
                  <>
                     <span><Link to="/">About</Link></span>
                  </>
            }
            <span>{`}`}</span>
         </div>
      </nav>
   )
}