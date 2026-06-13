import "./TeamMoments.css";

import moment1 from "../assets/ing5.webp";
import moment2 from "../assets/two2.webp";
import moment3 from "../assets/three.webp";
import moment4 from "../assets/four.webp";
import moment5 from "../assets/one.webp";

function TeamMoments() {
  const moments = [
    {
      image: moment1,
      title: "Office Inauguration",
      text: "Celebrating new beginnings and milestones across our group journey.",
    },
    {
      image: moment2,
      title: "Festival Celebrations",
      text: "Moments of joy, unity and tradition shared together as one team.",
    },
    {
      image: moment3,
      title: "Pooja Ceremonies",
      text: "Honouring values, culture and positivity in every new step forward.",
    },
    {
      image: moment4,
      title: "Team Gatherings",
      text: "Building stronger bonds through shared achievements and togetherness.",
    },
  ];

  return (
    <section className="team-moments">
      <div className="moments-heading">
        <span>Life at PS Group</span>
        <h2>Team Moments</h2>
        <p>
          From inaugurations and festivals to pooja ceremonies and team
          gatherings, every moment reflects our culture, unity and growth.
        </p>
      </div>

      <div className="moments-grid">
        {moments.map((item, index) => (
          <div className="moment-card" key={index}>
            <div className="moment-img">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="moment-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamMoments;
