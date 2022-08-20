/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
const Header=()=>{
    return(
        <header>
        <h1>
          <Link className="home" to="/">
            Home
          </Link>
        </h1>
        <nav>
          <Link to="/characters">Characters</Link>
          {/* Logged-in users */}
          <div id="user">
            <Link to="/create">Create Character</Link>
            <Link to="/logout">Logout</Link>
          </div>
          {/* Guest users */}
          <div id="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
      </header>
    )
}
export default Header;