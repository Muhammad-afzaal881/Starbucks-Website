import './Navbar.css'
// import About from './About';
import { Link } from "react-router-dom";
function Navbar() {
  return(
    <main>
        <div className="navbar">
            <h1>CodeFlex</h1>
             <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
             <Link className="nav-link active" aria-current="page" to="/About">About</Link>
           <Link className="nav-link active" aria-current="page" to="/Menu">Menu</Link>
           <Link className="nav-link active" aria-current="page" to="/Team">Team</Link>
            <Link className="nav-link active" aria-current="page" to="/Shop">Shop</Link>
            <Link className="nav-link active" aria-current="page" to="/Contact">Contact</Link>
            <Link className="nav-link active" aria-current="page" to="/Contact"><button>BOOK YOUR TABLE</button></Link>
        </div>
    </main>
  )
    
}
export default Navbar 
