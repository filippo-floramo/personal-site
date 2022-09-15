import React from "react"
import { Link } from "react-router-dom"



export default function SkillIndex(): JSX.Element {

   return (
      <>
         <section className="skills">
            <h1>Some inspiring TExt right here</h1>
            <div className="skills--container">
               <div className="skills--content">
                  potenziamento
               </div>
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