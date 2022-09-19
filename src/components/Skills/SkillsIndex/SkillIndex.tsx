import React from "react";
import SkillsContent from "../SkillsContent/SkillsContent";
import Arrow from "../../Arrow/Arrow";
import SkillsPortfolio from "../SkillsPortfolio";




export default function SkillIndex(): JSX.Element {

   return (
      <>
         <section className="skills">

            <h1 className="skills--descr">
               Skills are like coding, always under development.
            </h1>

            <div className="skills--container">

               <SkillsContent />
               <SkillsPortfolio />

            </div>
            <Arrow route="/Contact" />
         </section>
      </>
   )

}