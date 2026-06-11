import "./About.css";
import who1 from "../assets/one.JPG";
import who2 from "../assets/two.JPG";
import who3 from "../assets/three.JPG";
import who4 from "../assets/four.JPG";
import who5 from "../assets/five.JPG";

import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  return (
    <section className="about-section" data-aos="fade-up">
      <div className="about-container">
        <div className="about-content ">
          <span className="about-label">ABOUT PS GROUP</span>

          <h2>
            Building Excellence Across
            <br />
            Multiple Industries
          </h2>

          <p>
            PS Group is a diversified business group delivering excellence
            across Pest Management, IT Solutions, Healthcare, Construction, and
            Film Production.
          </p>

          <p>
            With a commitment to quality, innovation, and long-term value, we
            bring together expertise from multiple sectors to create sustainable
            growth and meaningful impact.
          </p>

          <button onClick={() => navigate("/businesses")}>
            Explore Our Businesses
          </button>
        </div>

        <div className="about-image">
          <div className="about-collage">
            {[who1, who2, who3, who4, who5].map((img, index) => (
              <div
                className="collage-img"
                key={index}
                style={{ animationDelay: `${index * 2}s` }}
              >
                <img src={img} alt={`PS Group ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
