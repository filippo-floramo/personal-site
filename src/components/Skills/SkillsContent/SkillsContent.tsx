import { WindupChildren, Pace, Pause } from "windups";



export default function SkillsContent(): JSX.Element {

   const textData: string[] = [
      "Html",
      "Css",
      "Javascript",
      "Typescript",
      "React",
   ]

   const textElements: JSX.Element[] = textData.map((item => {
      return (
         <>
            &emsp;&emsp;  {`<`}<span className="element">{item} </span>{`/>`}
            <br />
         </>
      )
   }))

   return (
      <>
         <div className="skills--content">
            <WindupChildren>
               <Pace ms={50}>
                  <p className="skills--text">
                     <span></span>
                     <Pause ms={1500} />
                     <span className="purple">export default</span> <span className="blue">function</span> <span className="yellow">Skills</span><span className="more-yellow">{`()`}</span> {`{`}
                     <br />
                     &emsp; <span className="purple">return</span> {`(`}
                     <br />
                     &emsp; <span>{`<>`}</span>
                     <br />
                     {textElements}
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