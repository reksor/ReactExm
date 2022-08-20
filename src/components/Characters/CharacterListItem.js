/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
const CharacterListItem=({character})=>{
    return(
        <div className="allGames">
        <div className="allGames-info">
          <img src={character.imageUrl} />
          <h6>{character.category}</h6>
          <h2>{character.title}</h2>
          <a href="#" className="details-button">
            Details
          </a>
        </div>
      </div> 
    );
};
export default CharacterListItem;