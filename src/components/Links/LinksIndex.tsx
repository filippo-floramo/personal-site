import React from "react";
import github from "../../img/github.svg";
import linkedin from "../../img/linkedin.svg";



export default function LinksIndex(): JSX.Element {
   return (
      <>
         <section className="links">
            <h1 className="link--title">Still curious? <br /> We can always get in touch.</h1>
            <div className="links--container">
               <a href="https://www.google.com/" rel="noreferrer" target="_blank">
                  <img className="icons github" src={github} alt="github icon" />
               </a>
               <a href="https://www.google.com/" rel="noreferrer" target="_blank">
                  <img className="icons linkedin" src={linkedin} alt="linkedin icon" />
               </a>
               <a href="https://www.google.com/" rel="noreferrer" target="_blank">
                  <img className="icons github" src={github} alt="mail icon" />
               </a>
            </div>
         </section>
      </>
   )
}