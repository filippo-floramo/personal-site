import  { useContext } from "react"
import Context from "../../context";
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import initials from "../../img/sigla.svg"




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
                     <span><Link to="/Skills">Skills</Link></span>
                     <span><Link to="/Contact">Contact</Link></span>
                  </>
                  :
                  <>
                     <span>
                        <Link to="/">
                           <img className="initials" src={initials} alt="" />
                        </Link>
                     </span>
                  </>
            }
            <span>{`}`}</span>
         </div>
      </nav>
   )
}