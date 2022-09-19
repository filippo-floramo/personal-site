import React from "react";
import BioContent from "../BioContent/BioContent";
import Arrow from "../../Arrow/Arrow";



export default function BioIndex(): JSX.Element {


   return (
      <>
         <section className="about">
            <div className="about--propic">
               maria
            </div>
            <BioContent />
            <Arrow route="/Skills" />
         </section>
      </>
   )
}