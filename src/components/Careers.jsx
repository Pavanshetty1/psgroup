import "./Careers.css";
import careersVideo from "../assets/careers.mp4";

function Careers() {
  const roles = [
    {
      title: "Business Development Executive",
      department: "Sales & Growth",
      location: "Bengaluru",
      type: "Full Time",
    },
    {
      title: "Sales Executive",
      department: "Business Development",
      location: "Bengaluru",
      type: "Full Time",
    },
    {
      title: "Frontend Developer",
      department: "IT Solutions",
      location: "Bengaluru",
      type: "Full Time",
    },
    {
      title: "Operations Coordinator",
      department: "Operations",
      location: "Bengaluru  ",
      type: "Full Time",
    },
    {
      title: "Customer Support Executive",
      department: "Support",
      location: "Bengaluru",
      type: "Full Time",
    },
    {
      title: "Accounts Executive",
      department: "Finance",
      location: "Bengaluru",
      type: "Full Time",
    },
  ];
  return (
    <main className="careers-page">
      <section className="careers-hero">
        <video className="careers-hero-video" autoPlay muted loop playsInline>
          <source src={careersVideo} type="video/mp4" />
        </video>

        <div className="careers-overlay"></div>

        <div className="careers-content" data-aos="fade-up">
          {/* <span>CAREERS AT PS GROUP</span> */}

          <h1>Build Your Future With Us</h1>

          <p>
            Join a growing group of businesses where innovation, collaboration
            and continuous learning create opportunities to build meaningful
            careers across multiple industries.
          </p>
        </div>
      </section>

      <section className="careers-intro">
        <span>WHY JOIN US</span>

        <h2>Work With Purpose, Grow With Possibilities</h2>

        <p>
          At PS Group, we believe our people are our greatest strength. We
          provide opportunities to learn, collaborate and contribute across
          diverse businesses including Pest Management, Healthcare, Interiors,
          Film Production , Enterprises , FMCG and IT Solutions.
        </p>
      </section>

      <section className="career-contact">
        <section className="open-roles">
          <div className="open-roles-head">
            <span>OPEN ROLES</span>
            <h2>Current Opportunities</h2>
            <p>
              Explore opportunities across PS Group and take the next step in
              your professional journey.
            </p>
          </div>

          <div className="roles-list">
            {roles.map((role, index) => (
              <div className="role-row" key={role.title} data-aos="fade-up">
                <div className="role-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="role-main">
                  <h3>{role.title}</h3>
                  <p>{role.department}</p>
                </div>

                <div className="role-meta">
                  <span>{role.location}</span>
                  <span>{role.type}</span>
                </div>

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=info@psgindia.co.in.com&su=Application for ${encodeURIComponent(
                    role.title,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="role-apply"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
        </section>
        <div className="career-contact-card">
          <span>CAREER OPPORTUNITIES</span>

          <h2>Join Our Talent Network</h2>

          <p>
            We are always interested in connecting with passionate, talented and
            driven professionals who want to grow with PS Group and contribute
            to our journey across industries.
          </p>

          <p className="career-mail-label">Send your resume to:</p>

          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=careers@psgroup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="career-mail"
          >
            info@psgindia.co.in
          </a>
        </div>
      </section>
    </main>
  );
}

export default Careers;
