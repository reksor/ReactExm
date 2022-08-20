/* eslint-disable jsx-a11y/anchor-is-valid */
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
            <a href="#" className="btn details-btn">
              Details
            </a>
          </div>
        </div>
    )
}
export default LatestCharacter;