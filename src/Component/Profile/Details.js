import "./Details.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faF } from "@fortawesome/free-solid-svg-icons";
import { faT } from "@fortawesome/free-solid-svg-icons";
import { faI } from "@fortawesome/free-solid-svg-icons";




export const Details = () => {
    return(
        <div className="details">
            <span className="firstd">Details</span><br></br>
            <span className="boldspan">Name : <p className="pd">Hassib</p></span>
            <span className="boldspan">Age : <p className="pd">21 ans</p></span>
            <span className="boldspan">Residence : <p className="pd">Abidjan, la Côte d'Ivoire, Terre</p></span>
            <div className="icons">
                <FontAwesomeIcon icon={faF} />
                <FontAwesomeIcon icon={faT} />
                <FontAwesomeIcon icon={faI} />
            </div>
        </div>
    )
}; 