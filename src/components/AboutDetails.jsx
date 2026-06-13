import "./AboutDetails.css";
import Leadership from "./Leadership";
import Values from "./Values";
import VisionMission from "./VisionMission";
import videoabout from "../assets/about.gif";
import who from "../assets/group5.webp";

function AboutDetails() {
  return (
    <main className="about-details-page">
      <section className="about-details-hero">
        <img src={videoabout} alt="About Background" className="about-gif" />
        <div className="about-details-overlay"></div>

        <div className="about-details-content" data-aos="fade-up">
          <h1>Building Excellence Across Industries</h1>
          <p>
            Delivering excellence across Pest Management, IT Solutions,
            Healthcare, Interior and Film Production.
          </p>
        </div>
      </section>

      <section className="who-section">
        <div className="who-container">
          <div className="who-content">
            <span>WHO WE ARE</span>
            <h2>A diversified group with a unified vision</h2>

            <p>
              PS Group brings together multiple business verticals under one
              strong vision — to deliver reliable services, meaningful solutions
              and long-term value across industries.
            </p>

            <p>
              With businesses spanning Pest Management, IT Solutions,
              Healthcare, Construction and Film Production, the group is built
              on trust, professionalism, innovation and customer commitment.
            </p>
          </div>

          <div className="who-image">
            <img src={who} alt="PS Group Office" />
          </div>
        </div>
      </section>
      <VisionMission />
      <Values />
      <Leadership />
    </main>
  );
}

export default AboutDetails;
