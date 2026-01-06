import logos from './star.jpeg'
import { Link } from "react-router-dom";
import './Navbar'
import './Home.css'
import image from './images.jpg'
import imag from './images (1).jpg'
import Navbar from './Navbar'
function Home(){
    return(
        <main>
           <Navbar></Navbar>
           <br></br>
            <div className="top">
                <h1>Taste the World</h1>
                <h3>Discover an exceptional dining experience at CodeVista,
                     where innovative global cuisine meets locally sourced <br></br>
                     ingredients in a stylish downtown setting.</h3>
            <Link className="nav-link active" aria-current="page" to="/Contact"><button>BOOK YOUR TABLE</button></Link>
            <Link className="nav-link active" aria-current="page" to="/Menu"><button>VIEW MENU</button></Link>
            <br></br>
                     <img src={logos}></img>
            </div>
            <div className='center'>
                <div className='left'>
                    <h1>Our Culinary<br></br> Journey</h1>
                    <h3>Founded in 2021, CodeVista emerged from a passion for<br></br>
                     culinary innovation and a commitment to using fresh, local ingredients for unique, 
                     flavorful dishes.</h3>
                <Link className="nav-link active" aria-current="page" to="/Contact"><button>BOOK YOUR TABLE</button></Link>
                </div>
                <div className='right'>
                    <img src={imag}></img>
                    <img src={image}></img>
                </div>
            </div>
            <div className='slast'>
               <h1>Experience<br></br> Culinary<br></br> Innovation<br></br> at CodeVista</h1>
               <div className='rights'>
               <h3>Join us for a memorable dining experience with globally<br></br> inspired dishes crafted from local ingredients.</h3>
               <Link className="nav-link active" aria-current="page" to="/Contact"><button>BOOK YOUR TABLE</button></Link>
               </div>
               <div className='last'>
               <h1>Book Your Table Today</h1>
               <h3>Don’t miss out on a unique dining experience. Reserve your spot now and indulge in our<br></br> delicious flavors!</h3>
               <Link className="nav-link active" aria-current="page" to="/Contact"><button>BOOK YOUR TABLE</button></Link>
               </div>
               <h3>Copyright © 2026 CodeVista</h3>
            </div>
            </main>
    )
}
export default Home