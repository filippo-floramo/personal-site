import { createContext, useState } from "react";



 interface Contx {
   lol: string;
   setLol: React.Dispatch<React.SetStateAction<string>>
}

const Context = createContext<Contx | null>(null);


export function ContextProvider({ children }: any) {

   const [lol, setLol] = useState<string>("Cialo")


   const lollo: Contx = {
      lol,
      setLol
   }

   return (
      <Context.Provider value={lollo}>
         {children}
      </Context.Provider>
   )
}


export default Context;