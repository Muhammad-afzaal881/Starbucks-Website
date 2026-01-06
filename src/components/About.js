import logo from './star.jpeg'
import Navbar from './Navbar'
import './About.css'
import { Link } from "react-router-dom";
function About(){
    return(
    <main>
        <Navbar></Navbar>
        <div className='first'>
            <div className="text"  ></div>
        <div className="title"><h1>OUR STORY</h1></div>
        <div className="story"><h3>At CodeVista, we blend global culinary traditions and locally sourced<br></br> 
        ingredients, creating an unforgettable dining experience in the heart of<br></br> downtown. Join
         us as we celebrate food, community, and creativity with every dish.</h3></div>
         <img src={logo}></img>
        </div>
        <div className='second'>
            <img src={logo}/>
            <div className="text">
            <div className="title"><h1>OUR mission</h1></div>
            <h3>Founded in 2021, CodeVista has quickly established itself as a 
            culinary hotspot in downtown.<br></br> Our menu features an innovative fusion 
            of world flavors, crafted by our talented chefs committed to quality<br></br> and creativity.
           We strive to provide exceptional service and an inviting atmosphere,
            ensuring that every visit to CodeVista is memorable, whether it’s a casual dinner 
            or a special celebration.</h3>
            </div>
        </div>
        <div className='third'>
            <div className='left'>
            <h1>Discover<br></br> CodeVista’s Unique<br></br> Dining Experience</h1>
            <h3>At CodeVista, we strive to provide a vibrant atmosphere,<br></br> exceptional service, and a 
            diverse menu crafted from locally sourced<br></br> ingredients, making every meal memorable for our guests.</h3>
           </div> <div className='right'>
                    <img src={logo}></img>
                    <img src={logo}></img>
                </div>
        </div>
        <div className='fourth'>
            <h1>Expertise in Culinary<br></br> Innovation and Service<br></br> Excellence</h1>
            <h3>Our talented chefs combine global influences with local flavors, ensuring each dish
                 embodies creativity and<br></br> passion, while our staff delivers unparalleled
                  hospitality tailored to every guest.</h3>
        <img src={logo}></img>
        </div>
        <div>
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
export default About