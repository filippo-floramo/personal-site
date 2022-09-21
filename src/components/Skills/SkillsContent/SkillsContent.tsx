import { WindupChildren, Pace, Pause } from "windups";



export default function SkillsContent(): JSX.Element {

   return (
      <>
         <div className="skills--content">
            <WindupChildren>
               <Pace ms={50}>
                  <p className="skills--text">
                     <span></span>
                     <Pause ms={1500} />
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
                     &emsp;&emsp; {`<Typescript />`}
                     <br />
                     &emsp;&emsp; {`<React />`}
                     <br />
                     &emsp; {`</>`}
                     <br />
                     &emsp;{`)`}
                     <br />
                     {`}`}
                  </p>
               </Pace>
            </WindupChildren>
         </div>
      </>
   )
}