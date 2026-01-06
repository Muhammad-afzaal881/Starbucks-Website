import './Menu.css'
import Navbar from './Navbar';
// import { Link } from "react-router-dom";
function Menu(){
    return(
      <main>
      <Navbar></Navbar>
      <h1>Cold Drinks</h1>
        <div className="Menu-cards">
        {cards.map((item, index) => (
          <div className="team-card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="Menu-card-body">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
              <h3>{item.price}</h3>
            </div>
          </div>
        ))}
      </div>
      </main>
    )
}
export default Menu
const cards = [
  {
    img: "https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/117775.webp",
    title: "Signature Irish Matcha",
    text: "Non-alcoholic Bailey’s Irish Cream flavoured milk, topped with a vibrant and refreshing matcha foam with a sprinkle of Mocha powder.",
    price: "$30"
  },
  {
    img: "https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/117762.webp",
    title: "Signature Irish Latte",
    text: "Starbucks Signature latte paired with non alcoholic Bailey’s Irish Cream flavour topped with a sprinkle of mocha powder",
    price:"$35"
  },
  {
    img: "https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/117579.webp",
    title: "Apple Grapefruit Refresher",
    text: "A vibrant fusion of crisp apple and tangy grapefruit flavours. This Starbucks Refresher delivers a bright, fruity burst that’s as uplifting as it is refreshing.",
    price:"$45"
  },
  {
    img: "https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/117583.webp",
    title: "Cola Float Cold Brew",
    text: "A playful twist on classic indulgence — Signature Starbucks cold brew meets the nostalgic fizz of cola, topped with a creamy scoop of vanilla ice cream.",
    price:"$32"
  },
  {
    img: "https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/117772.webp",
    title: "Signature Irish Frappuccino",
    text: "Smooth espresso with hint of non alcoholic Bailey’s Irish Cream flavour , and garnished with whipped topping and mocha powder dust.",
    price:"$50"
  },
  {
    img: "https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/117272.webp",
    title: "Chocolate Foam Cold Brew",
    text: "Starbucks Signature Cold Brew topped with a delicious chocolate foam to elevate your cold brew experience",
    price:"$25"
  }
  
 
];
