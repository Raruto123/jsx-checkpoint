import "./Photo.css"
import Image from "/Users/aliounsane/Desktop/GoMyCode/ReactProject/jsxcheckpoint/src/IMG_4401.jpg"

export const Photo = () => {
    return(
        <div className="photo">
            <img src={Image} alt="Beau Gosse" width={300} height={300}></img>
        </div>
    )
}; 