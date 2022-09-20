import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";



interface Contx {
   isHome: boolean;
   setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<Contx | null>(null);


export function ContextProvider({ children }: any) {

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
      if (pageLocation.pathname !== "/About") { setIsOpen(false); console.log("lol") }
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


export default Context;