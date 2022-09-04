import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"




export default function Navbar(): JSX.Element {


   return (
      <nav className="nav">
         <div className="nav--container">
            <motion.span initial={{ x: 0 }} animate={{ x: [0, 50, 20], transition: { duration: 2 } }}>{`{`}</motion.span>
            <span><Link to="/">About</Link></span>
            <span><Link to="/">Skills</Link></span>
            <span><Link to="/">Contact</Link></span>
            <span>{`}`}</span>

         </div>
      </nav>
   )
}