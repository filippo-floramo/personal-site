import { createContext, useState, useEffect, useContext } from "react";
import { BrowserRouterProps, useLocation } from "react-router-dom";



interface Contx {
   isHome: boolean;
   setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<Contx | null>(null);


export function ContextProvider({ children }: BrowserRouterProps) {

   const [isHome, setIsHome] = useState<boolean>(localStorage.getItem('home-page') === 'true');
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const pageLocation = useLocation();

   useEffect(() => {
      localStorage.setItem("home-page", String(isHome));
   }, [isHome]);


   useEffect(() => {
      if (pageLocation.pathname !== "/") { setIsHome(false) }
      else { setIsHome(true) }
   }, [pageLocation])

   useEffect(() => {
      if (pageLocation.pathname !== "/About") { setIsOpen(false); }
   }, [pageLocation])


   const Values: Contx = {
      isHome,
      setIsHome,
      isOpen,
      setIsOpen
   }

   return (
      <Context.Provider value={Values}>
         {children}
      </Context.Provider>
   )
}

export const useContextProvider = (): Contx => {
   const context = useContext(Context)
   if (context === null) {
     throw new Error(`"useContextProvider" must be used under <ContextProvider>`)
   }
   return context
 }


export default Context;