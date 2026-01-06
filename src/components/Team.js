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
    img: "https://tinted-trabue-9zp.zipwp.dev/wp-content/uploads/2023/09/team-skip-05.jpg",
    title: "Mission Impossible",
    text: "A thrilling spy action movie full of adventure and twist."
  },
  {
    img: "https://tinted-trabue-9zp.zipwp.dev/wp-content/uploads/2023/09/team-skip-06.jpg",
    title: "Batman Returns",
    text: "Gotham's dark knight rises to protect the city once again."
  },
  {
    img: "https://tinted-trabue-9zp.zipwp.dev/wp-content/uploads/2023/09/team-skip-04.jpg",
    title: "Frozen II",
    text: "Elsa and Anna go on another magical journey."
  },
  {
    img: "https://tinted-trabue-9zp.zipwp.dev/wp-content/uploads/2023/09/team-skip-03.jpg",
    title: "Avengers: Endgame",
    text: "The final battle to save the universe begins."
  },
  {
    img: "https://tinted-trabue-9zp.zipwp.dev/wp-content/uploads/2023/09/team-skip-02.jpg",
    title: "Mission Impossible",
    text: "A thrilling spy action movie full of adventure and twist."
  },
  {
    img: "https://tinted-trabue-9zp.zipwp.dev/wp-content/uploads/2023/09/team-skip-01.jpg",
    title: "Batman Returns",
    text: "Gotham's dark knight rises to protect the city once again."
  }
  
 
];
