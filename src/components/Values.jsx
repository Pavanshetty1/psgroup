import "./Values.css";
import { FaHandshake, FaLightbulb, FaAward, FaUsers } from "react-icons/fa";

const values = [
  {
    icon: <FaHandshake />,
    title: "Integrity",
    description:
      "We conduct our business with honesty, transparency, and accountability.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    description:
      "We embrace new ideas and technologies to drive sustainable growth.",
  },
  {
    icon: <FaAward />,
    title: "Excellence",
    description: "We strive for the highest standards in everything we do.",
  },
  {
    icon: <FaUsers />,
    title: "Customer Focus",
    description:
      "Our customers remain at the center of every decision and action.",
  },
];

function Values() {
  return (
    <section className="values-section" >
      <div className="values-header" data-aos="fade-up">
        <span>OUR VALUES</span>
        <h2>The Principles That Guide Us</h2>
      </div>

      <div className="values-grid">
        {values.map((value, index) => (
          <div
            className="value-card"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            key={index}
          >
            <div className="value-icon">{value.icon}</div>

            <h3>{value.title}</h3>

            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Values;
