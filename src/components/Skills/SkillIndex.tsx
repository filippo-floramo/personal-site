import React from "react"
import { Link } from "react-router-dom"
import SkillsContent from "./SkillsContent"



export default function SkillIndex(): JSX.Element {

   return (
      <>
         <section className="skills">
            <h1>Some inspiring TExt right here</h1>
            <div className="skills--container">

               <SkillsContent />
               <div className="skills--github">
                  glutei
               </div>
               
            </div>
         </section>

         <div className="skills--arrow">
            <Link to='/Contact'>lol</Link>
         </div>

      </>
   )

}