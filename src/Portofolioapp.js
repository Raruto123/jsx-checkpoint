import "./Portofolioapp.css"
// get our fontawesome imports
// import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Sujet} from "./Component/Profile/Subject";
import {Photo} from "./Component/Profile/Photo";
import {Propos} from "./Component/Profile/Aboutme";
import { Details } from "./Component/Profile/Details";


// create our App
const Portofolio = () => {
    return(
        <div className="container">
            <Sujet/>
            <div className="colonne">
                <div className="flexp"><Propos></Propos></div>
                <div className="flexph"><Photo></Photo></div>
                <div className="flexd"><Details></Details></div>
            </div>
        </div>
    )
}; 
export default Portofolio



