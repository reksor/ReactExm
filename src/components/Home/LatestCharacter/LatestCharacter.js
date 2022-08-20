/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

const LatestCharacter=({
    character
})=>{
    return (
        <div className="character">
          <div className="image-wrap">
            <img src={character.imageUrl} alt="Character"/>
          </div>
          <h3>{character.title}</h3>
          <div className="rating">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
          <div className="data-buttons">
            <Link to={`/characters/${character._id}`} className="btn details-btn">
              Details
            </Link>
          </div>
        </div>
    )
}
export default LatestCharacter;