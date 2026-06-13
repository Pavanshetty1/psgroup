import "./VisionMission.css";
import { FaBullseye, FaRocket } from "react-icons/fa";

function VisionMission() {
  return (
    <section className="vision-section">
      <div className="vision-header" data-aos="fade-up">
        <span>OUR PURPOSE</span>
        <h2>Vision & Mission</h2>
      </div>

      <div className="vision-grid">
        <div className="vision-card" data-aos="fade-up" data-aos-delay="100">
          <div className="vision-icon">
            <FaBullseye />
          </div>

          <h3>
            To become a trusted and <strong>diversified group </strong>
            recognised for excellence, innovation, and sustainable growth across
            industries.
          </h3>
          <p>Our Vision</p>
        </div>

        <div className="vision-card" data-aos="fade-up" data-aos-delay="200">
          <div className="vision-icon">
            <FaRocket />
          </div>

          <h3>
            {" "}
            To deliver <strong> quality-driven solutions,</strong> build
            long-term partnerships, and create meaningful value for customers,
            businesses, and communities.
          </h3>

          <p>Our Mission</p>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
