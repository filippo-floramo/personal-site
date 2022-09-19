
import arrow from "../../img/arrow.svg";
import { Link } from "react-router-dom";

interface props {
   route: string
}

export default function Arrow({ route }: props) {
   return (
      <div className="arrow--container">
         <Link to={route}>
            <img className="arrow" src={arrow} alt="arrow" />
         </Link>
      </div>
   )
}