import "./Insights.css";
import { useNavigate } from "react-router-dom";
// import blog1 from "../assets/blog1.jpg";
// import blog2 from "../assets/blog2.jpg";
// import blog3 from "../assets/blog3.jpg";

const insights = [
  {
    slug: "building-businesses-through-vision",
    image:
      "https://media.istockphoto.com/id/2193065392/photo/young-business-professionals-collaborating-in-a-modern-meeting-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y_bBV3QOniNMQ2WGLu0FwymTEqs_4Yiw6v0mWfFPYiY=",
    category: "Leadership",
    title: "Building Businesses Through Vision and Purpose",
    desc: "How long-term thinking, trust and strong leadership create sustainable growth across diverse industries.",
  },

  {
    slug: "creating-value-through-diversified-enterprises",
    image:
      "https://media.istockphoto.com/id/875053476/photo/couple-and-financial-advisor.jpg?s=612x612&w=0&k=20&c=FiGMYOQ0Q0eVucNOv4uDgnVtY7_aShfSZ73kcy1jd-8=",
    category: "Innovation",
    title: "Creating Value Through Diversified Enterprises",
    desc: "Exploring opportunities across sectors while maintaining excellence, responsibility and customer trust.",
  },

  {
    slug: "future-of-modern-business-groups",
    image:
      "https://plus.unsplash.com/premium_photo-1672797996622-d2a8d87f13b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    category: "Growth",
    title: "The Future of Modern Business Groups",
    desc: "Understanding how collaboration, innovation and people-focused values drive long-term success.",
  },
];

function Insights() {
  const navigate = useNavigate();
  return (
    <section className="insights-section">
      <div className="insights-header" data-aos="fade-up">
        <span>INSIGHTS</span>
        <h2>Perspectives & Stories</h2>
        <p>
          Thoughts, ideas and stories that reflect our journey, values and
          vision for the future.
        </p>
      </div>

      <div className="insights-wrapper">
        {insights.map((item, index) => (
          <div
            className={`insight-row ${index % 2 !== 0 ? "reverse" : ""}`}
            key={item.title}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="insight-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="insight-content">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <button
                type="button"
                onClick={() => navigate(`/insights/${item.slug}`)}
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Insights;
