import Navbar from "./Navbar";
import "./Team.css";

function Team() {
  return (
    <div className="team-page">
      <Navbar />

      <div className="team-header">
        <h1>Meet Our Passionate Team</h1>
        <h3>
          Get to know the talented individuals behind CodeVista’s culinary creations
          and exceptional service,<br></br> dedicated to providing an unforgettable dining
          experience for every guest.
        </h3>
      </div>

      <div className="team-cards">
        {cards.map((item, index) => (
          <div className="team-card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="team-card-body">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;

/* DATA */
const cards = [
  {
    img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Mission Impossible",
    text: "A thrilling spy action movie full of adventure and twist."
  },
  {
    img: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoZWZ8ZW58MHx8MHx8fDA%3D",
    title: "Batman Returns",
    text: "Gotham's dark knight rises to protect the city once again."
  },
  {
    img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Frozen II",
    text: "Elsa and Anna go on another magical journey."
  },
  {
    img: "https://images.unsplash.com/photo-1654922207993-2952fec328ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoZWZ8ZW58MHx8MHx8fDA%3D",
    title: "Avengers: Endgame",
    text: "The final battle to save the universe begins."
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Mission Impossible",
    text: "A thrilling spy action movie full of adventure and twist."
  },
  {
    img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Batman Returns",
    text: "Gotham's dark knight rises to protect the city once again."
  }
  
 
];
