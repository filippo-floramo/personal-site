import React from "react";
import { refs } from "../../../interfaces";
import LinksIcon from "../LinksIcon/LinksIcon";
import github from "../../../img/github.svg";
import linkedin from "../../../img/linkedin.svg";



export default function LinksIndex(): JSX.Element {



   const iconsData: refs[] = [
      {
         icon: github,
         href: "https://github.com/filippo-floramo?tab=repositories",
         alt: "github icon",
         class: "icons github",
      },
      {
         icon: linkedin,
         href: "https://www.linkedin.com/in/filippo-floramo-296154214/",
         alt: "linkedin icon",
         class: "icons linkedin",
      },
      {
         icon: github,
         href: "google.com",
         alt: "mail icon",
         class: "icons mail",
      },
   ]

   const icons: JSX.Element[] = iconsData.map((icon) => {
      return (
         <LinksIcon
            key={icon.href}
            icon={icon.icon}
            href={icon.href}
            alt={icon.alt}
            class={icon.class}
         />
      )
   })

   return (
      <>
         <section className="links">
            <h1 className="link--title">Well, that's it for this site. <br /> Still Curious? <br /> Let's get in touch!</h1>
            <div  className="links--container">
               {icons}
            </div>
         </section>
      </>
   )
}