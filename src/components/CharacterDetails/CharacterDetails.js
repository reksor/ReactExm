/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetails=({
    characters,
    addComment,
    })=>{
    const {characterId} = useParams();
    const [comment, setComment] = useState({
        username: '',
        comment: '',
    });

    const [error, setError]=useState({
        username:'',
        comment:'',
    });

    const character=characters.find(x=>x._id == characterId)

    const addCommentHandler=(e)=>{
        e.preventDefault();
        const result=`${comment.username}: ${comment.comment}`;

        addComment(characterId, result);
    }

    const onChange=(e)=>{
        setComment(state=>({
            ...state,
            [e.target.name]:e.target.value
        }))
    }

    const validateUsername=(e)=>{
        const username= e.target.value;
        if(username.length < 4 || username.length > 15){
            setError(state=>({
                ...state,
                username:'Username must be longer than 4 characters and shorter than 15'
            }))
        }
    }

    return(
        <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={character.imageUrl} />
          <h1>{character.title}</h1>
          <span className="levels">{character.maxLevel}</span>
          <p className="type">{character.category}</p>
        </div>
        <p className="text">
         {character.summary}
        </p>
        {/* Bonus ( for Guests and Users ) */}
        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {/* list all comments for current game (If any) */}
            {character.comments?.map(x=>
                <li className="comment">
                    <p>{x}</p>
                </li>
            )}
          </ul>

          {!character.comments &&
          <p className="no-comment">No comments.</p>}
          {/* Display paragraph: If there are no games in the database */}
          
        </div>
        {/* Edit/Delete buttons ( Only for creator of this game )  */}
        <div className="buttons">
          <a href="#" className="button">
            Edit
          </a>
          <a href="#" className="button">
            Delete
          </a>
        </div>
      </div>
      {/* Bonus
      Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={addCommentHandler}>
            <input 
            type="text"
            name="username"
            placeholder="John Doe"
            onChange={onChange}
            onBlur={validateUsername}
            value={comment.username}/>

            {error.username&&
            <div style={{color: "red"}}>{error.username}</div>}

          <textarea
            name="comment"
            placeholder="Comment......"
            onChange={onChange}
            value={comment.comment}
          />
          <input
            className="btn submit"
            type="submit"
            value="Add Comment"
          />
        </form>
      </article>
    </section>
    )
}
export default CharacterDetails;