import React from "react";



export default function SkillsContent(): JSX.Element {


   // const content: (String | JSX.Element)[]= [
   //    "export default function Skills() {", 
   //    <br/>, 
   //    "}",
   //    "come mi diverto"
   // ];

   return (
      <>
         <div className="skills--content">
            <p>
               export default function Skills{`()`} {`{`}
               <br />
               &emsp; return {`(`}
               <br />
               &emsp; {`<>`}
               <br />
               &emsp;&emsp; <span>{`<Html />`}</span>
               <br />
               &emsp;&emsp; {`<Css />`}
               <br />
               &emsp;&emsp; {`<Js />`}
               <br />
               &emsp;&emsp; {`<React />`}
               <br />
               &emsp;&emsp; {`<AdobeIllustrator />`}
               <br />
               &emsp; {`</>`}
               <br />
               &emsp;{`)`}
               <br />
               {`}`}
            </p>
         </div>
      </>
   )
}