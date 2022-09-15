import React from "react";
import BioContent from "./BioContent";
import { Link } from "react-router-dom";



export default function BioIndex(): JSX.Element {


   return (
      <>
         <section className="about">
            <div className="about--propic">
               maria
            </div>
            <BioContent />
            <div className="arrow">
              <Link to="/Skills">popoopo</Link>
            </div>
         </section>
      </>
   )
}