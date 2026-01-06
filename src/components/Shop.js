import './Shop.css'
import Navbar from './Navbar';
// import { Link } from "react-router-dom";
function Shop(){
    return(
      <main>
      <Navbar></Navbar>
      <h1>Product</h1>
        <div className="Menu-cards">
        {cards.map((item, index) => (
          <div className="team-card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="Menu-card-body">
              <h4>{item.title}</h4>
              <button>BUY NOW</button>
            </div>
          </div>
        ))}
      </div>
      </main>
    )
}
export default Shop
const cards = [
  {
    img: "https://www.starbucksathome.com/sites/default/files/2021-01/SBUX_Website_Premium_Can_LongShadow_DarkRoast_0.png",
    title: "Starbucks® Dark Roast",
    price: "$30"
  },
  {
    img: "https://www.starbucksathome.com/sites/default/files/2025-01/SBK_PDP_NDG_ICED%20AMERICANO_HERO%20BANNER_ASSET_PRODUCT%20FRONT_1842X1542px.png",
    title: "Starbucks® Iced Caffé Americano",
    price:"$35"
  },
  {
    img: "https://www.starbucksathome.com/sites/default/files/styles/pdp_gallery_large/public/2021-08/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png?h=07cea122&itok=AjwlEbYT",
    title: "Starbucks® Pike Place® Coffee",
    price:"$45"
  },
  {
    img: "https://www.starbucksathome.com/sites/default/files/styles/pdp_gallery_large/public/2025-01/SBK_PDP_VERTUO_PIKE%20PLACE_HERO%20BANNER_ASSET_PRODUCT%20FRONT_1842X1542px.png?h=07cea122&itok=O70mXok_",
    title: "Starbucks® Pike Place® Roast",
    price:"$32"
  },
  {
    img: "https://www.starbucksathome.com/sites/default/files/2021-04/SBUX_Website_Premium_Can_LongShadow_MediumRoastCan%20%281%29%20%281%29%20%281%29%20%281%29.png",
    title: "Starbucks® Dark Roasto",
    price:"$50"
  },
  {
    img: "https://www.starbucksathome.com/sites/default/files/2025-01/SBK_PDP_NDG_CAFFE%20LATTE_HERO%20BANNER_ASSET_PRODUCT%20FRONT_1842X1542px.png",
    title: "Starbucks® Coffe Latte",
    price:"$25"
  }
  
 
];
