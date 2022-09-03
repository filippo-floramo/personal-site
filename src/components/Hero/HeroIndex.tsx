import React from "react";
import Name from "./Name";




export default function Hero(): JSX.Element {

   return (
      <div className="hero">
         <div className="hero--content">
            <h1 className="hero--content--text">Hi, I'm </h1>
            <Name />
            <h1 className="hero--content--text">An aspriring web developer </h1>
         </div>
      </div>
   )
}