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

          <h3>Our Vision</h3>

          <p>
            To become a trusted and diversified group recognised for excellence,
            innovation, and sustainable growth across industries.
          </p>
        </div>

        <div className="vision-card" data-aos="fade-up" data-aos-delay="200">
          <div className="vision-icon">
            <FaRocket />
          </div>

          <h3>Our Mission</h3>

          <p>
            To deliver quality-driven solutions, build long-term partnerships,
            and create meaningful value for customers, businesses, and
            communities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
