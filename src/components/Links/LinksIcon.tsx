import React from "react";
import { refs } from "../../interfaces";


export default function LinksIcon(props: refs): JSX.Element {
   return (
      <a href={props.href} rel="noreferrer" target="_blank">
         <img className={props.class} src={props.icon} alt={props.alt} />
      </a>
   )
}