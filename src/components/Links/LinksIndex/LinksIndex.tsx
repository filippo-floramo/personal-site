import React from "react";
import { refs } from "../../../interfaces";
import LinksIcon from "../LinksIcon/LinksIcon";
import github from "../../../img/github.svg";
import linkedin from "../../../img/linkedin.svg";
import mail from "../../../img/mail.svg";



export default function LinksIndex(): JSX.Element {



   const iconsData: refs[] = [
      {
         icon: mail,
         href: "mailto:filifloramo@gmail.com",
         alt: "mail icon",
         class: "icons mail",
      },
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
            <p className="links--title">Well, that's it for this site. </p>
            <p className="links--title"> Wait, still curious? <br /> <em>Let's get in touch!</em> </p>
            <div className="links--container">
               {icons}
            </div>
         </section>
      </>
   )
}