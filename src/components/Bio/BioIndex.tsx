import React from "react";
import BioContent from "./BioContent";
import { Link } from "react-router-dom";
import Arrow from "../utils/Arrow";



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