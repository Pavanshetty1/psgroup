import "./Glance.css";
import sector from "../assets/sector.avif";
import clients from "../assets/clients.jfif";
import years from "../assets/years.avif";
import projects from "../assets/projects.jfif";

const stats = [
  {
    number: "5+",
    label: "Business Sectors",
    image: sector,
  },
  {
    number: "100+",
    label: "Projects Delivered",
    image: projects,
  },
  {
    number: "1000+",
    label: "Satisfied Clients",
    image: clients,
  },
  {
    number: "14+",
    label: "Years of Excellence",
    image: years,
  },
];

function Glance() {
  return (
    <section className="glance-section" id="glance" data-aos="fade-right">
      <div className="glance-header">
        <span>GROUP AT A GLANCE</span>
        <h2>Building Growth Across Industries</h2>
        <p>
          A diversified group committed to quality, innovation, and long-term
          value creation across multiple business sectors.
        </p>
      </div>

      <div className="glance-grid">
        {stats.map((item, index) => (
          <div className="glance-card" key={index}>
            <img src={item.image} alt={item.label} />

            <div className="glance-overlay"></div>

            <div className="glance-content">
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Glance;
