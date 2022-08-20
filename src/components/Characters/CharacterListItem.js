/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
const CharacterListItem=({character})=>{
    return(
        <div className="allGames">
        <div className="allGames-info">
          <img src={character.imageUrl} />
          <h6>{character.category}</h6>
          <h2>{character.title}</h2>
          <Link to={`/characters/${character._id}`} className="details-button">
            Details
          </Link>
        </div>
      </div> 
    );
};
export default CharacterListItem;