import "./Businesses.css";
import { useNavigate } from "react-router-dom";
import pestManage from "../assets/pestmanage.avif";
import itsolution from "../assets/itsolution.avif";
import film from "../assets/film.avif";
import health from "../assets/health.avif";
import enterprise from "../assets/enterprise.webp";
import interior from "../assets/interior.webp";
import pest from "../assets/pest1.webp";
import fmcg from "../assets/fmcg.webp";
import psventure from "../assets/psventure.avif";

// const businesses = [
//   {
//     title: "Pest Management",
//     hash: "pest-management",
//     image: pestManage,
//   },
//   {
//     title: "IT Solutions",
//     hash: "it-solutions",
//     image: itsolution,
//   },
//   {
//     title: "Healthcare",
//     hash: "healthcare",
//     image: health,
//   },
//   {
//     title: "Interior",
//     hash: "interior",
//     image: interior,
//   },
//   {
//     title: "Film Production",
//     hash: "film-production",
//     image: film,
//   },

//   // {
//   //   title: "Incense Sticks",
//   //   hash: "Manufacture",
//   //   image: incensestick,
//   // },
// ];
const businesses = [
  {
    title: "Pest Management",
    hash: "pest-management",
    image: pest,
    description: "Safe and reliable pest control solutions.",
  },

  {
    title: "Healthcare",
    hash: "healthcare",
    image: health,
    description: "Quality healthcare services built on trust and care.",
  },
  {
    title: "Interior",
    hash: "interior",
    image: interior,
    description: "Premium interior spaces with thoughtful design.",
  },
  {
    title: "Film Production",
    hash: "film-production",
    image: film,
    description: "Creative production and visual storytelling.",
  },
  {
    title: "Enterprise",
    hash: "enterprise",
    image: psventure,
    description: "A diversified enterprise focused on impact and Growth.",
  },
  {
    title: "FMCG",
    hash: "fmcg",
    image: fmcg,
    description: "Delivering quality products for everyday life",
  },
  {
    title: "IT Solutions",
    hash: "it-solutions",
    image: itsolution,
    description: "Digital platforms, ERP, CRM and software services.",
  },
];
function Businesses() {
  const navigate = useNavigate();

  return (
    <section className="business-section" id="businesses" data-aos="fade-up">
      <div className="business-header">
        <span>OUR BUSINESSES</span>
        <h2>Diverse Industries. One Vision.</h2>
        <p>
          PS Group operates across multiple sectors, delivering reliable
          services, creative solutions, and long-term value.
        </p>
      </div>

      <div className="business-grid" data-aos="fade-left">
        {businesses.map((item) => (
          <div
            className="business-card"
            key={item.title}
            onClick={() => navigate(`/businesses#${item.hash}`)}
          >
            <img src={item.image} alt={item.title} />
            {/* 
            <div className="business-overlay">
              <h3>{item.title}</h3>
              <p onClick={() => navigate(`/businesses#${item.hash}`)}>
                Explore →
              </p>
            </div> */}
            <div className="business-overlay">
              {/* <span className="business-no">
                0{businesses.indexOf(item) + 1}
              </span> */}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button>Explore →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Businesses;
