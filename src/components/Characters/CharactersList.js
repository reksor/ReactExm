/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import CharacterListItem from "./CharacterListItem";


const CharactersList=({characters})=>{
    return(
         <section id="catalog-page">
      <h1>All Games</h1> 
    {characters.length > 0
      ? characters.map(x => <CharacterListItem key={x._id} character={x}/>)
      : <h3 className="no-articles">No articles yet</h3>
    }
    </section>
    )
}
export default CharactersList;