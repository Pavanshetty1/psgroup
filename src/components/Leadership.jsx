import "./Leadership.css";
import founder from "../assets/direct.png";

const leaders = [
  {
    name: "B S Prashanth Shetty",
    role: "Founder",
    image: founder,
  },
];

function Leadership() {
  return (
    <section className="leadership-section">
      <div className="leadership-header" data-aos="fade-up">
        <span>LEADERSHIP</span>
        <h2>Guided by Vision. Driven by Excellence.</h2>
        <p>
          Our leadership team brings together experience, responsibility and
          forward-thinking vision across every business sector.
        </p>
      </div>

      {/* <div className="leadership-grid">
        {leaders.map((leader) => (
          <div className="leader-card" data-aos="fade-right" key={leader.name}>
            <img src={leader.image} alt={leader.name} />

            <div className="leader-info">
              <h3>{leader.name}</h3>
              <p>{leader.role}</p>
            </div>
          </div>
        ))}
      </div> */}
      <div className="leadership-grid">
        <div className="leader-card" data-aos="fade-right">
          <img src={founder} alt="B S Prashanth Shetty" />

          <div className="leader-info">
            <h3>B S Prashanth Shetty</h3>
            <p>Founder</p>
          </div>
        </div>

        <div
          className="leader-message"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <span>FOUNDER'S MESSAGE</span>

          <h3>
            "Success is built on trust, commitment and the courage to create
            opportunities where others see challenges."
          </h3>

          {/* <p>
      PS Group was founded with a vision to build businesses that create
      meaningful value for customers, employees and communities. What began
      as a single initiative has evolved into a diversified group driven by
      innovation, integrity and long-term growth.
    </p> */}

          {/* <p>
      As we continue to expand across industries, our commitment remains the
      same — delivering excellence, fostering strong relationships and
      creating sustainable impact for future generations.
    </p> */}

          <div className="leader-sign">
            <h4>B S Prashanth Shetty</h4>
            <p>Founder, PS Group</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
