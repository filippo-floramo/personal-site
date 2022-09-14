import React, { useContext } from "react";
import Context from "../../context";
import Name from "./HeroName";





export default function Hero(): JSX.Element {

   const lollino = useContext(Context);

   if (!lollino) return <div>No context yet</div>;

   // const { lol } = lollino; whits template to use Context







   return (
      <div className="hero">
         <div className="hero--content">
            <h1 className="hero--content--text">Hi, I'm </h1>
            <Name />
            <h1 className="hero--content--text">An aspiring web developer</h1>
         </div>
      </div>
   )
}