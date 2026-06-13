import "./BusinessesPage.css";
import pestLogo from "../assets/pest-logo.webp";
import itLogo from "../assets/pest-logo.webp";
import healthcareLogo from "../assets/pest-logo.webp";
import constructionLogo from "../assets/pest-logo.webp";
import filmLogo from "../assets/pest-logo.webp";
import bestservebusi from "../assets/bestservebusi.jfif";
import ittech from "../assets/ittech.jfif";
import movie from "../assets/movie.avif";
import jesta from "../assets/jesta.jfif";
import atelier from "../assets/atelier.avif";
import videoabout from "../assets/about.gif";
import adhvi from "../assets/adhvi.webp";
import enterprise from "../assets/enterprise.jfif";
import jestaone from "../assets/jestatwo.jfif";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const businessGroups = [
  {
    logo: pestLogo,
    title: "BestServe Pest Management",
    category: "Pest Management",
    hash: "pest-management",
    learnmore: "https://www.bestserve.in/",
    image: bestservebusi,
    description:
      "Delivering professional pest management solutions that protect homes, businesses and industrial facilities through safe, effective and environmentally responsible treatments, ensuring healthier and pest-free environments. ",
  },

  {
    logo: jestaone,
    title: "Jesta Healthcare",
    category: "Healthcare",
    learnmore: "https://www.google.com/",
    hash: "healthcare",
    image: jesta,
    description:
      "Committed to enhancing healthcare outcomes through quality-driven services, trusted medical solutions and a patient-centric approach focused on accessibility, reliability and long-term well-being.",
  },
  {
    logo: "https://atelierprogetto.com/logo/atelier-mark.svg",
    title: "Atelier",
    category: "Interior",
    learnmore: "https://atelierprogetto.com/",
    hash: "interior",
    image: atelier,
    description:
      "Creating inspiring interior spaces through thoughtful design, premium craftsmanship and functional planning, delivering environments that combine aesthetics, comfort and lasting value.",
  },
  {
    logo: adhvi,
    title: "Adhvi Creations",
    category: "Film Production",
    learnmore: "https://www.adhvicreations.com/",
    hash: "film-production",
    image: movie,
    description:
      "Bringing stories and ideas to life through creative film production, visual storytelling and media solutions that engage audiences, strengthen brands and deliver meaningful experiences.",
  },
  {
    logo: "https://www.psgindia.co.in/wp-content/uploads/2025/04/jesta-info.webp",
    title: "Jesta Infotech",
    category: "IT Solutions",
    learnmore: "https://www.google.com/",
    hash: "it-solutions",
    image: ittech,
    description:
      "Empowering businesses with innovative technology solutions, including software development, ERP, CRM, web platforms and digital transformation services designed to improve efficiency and accelerate growth.",
  },
  {
    logo: "",
    title: "Samruddhi Enterprises",
    category: "Distribution & Trading",
    learnmore: "#",
    hash: "enterprise",
    image: enterprise,
    description:
      "Samruddhi Enterprises is a trusted dealer and distributor of leading consumer products across the Udupi region, ensuring efficient supply, reliable distribution networks and quality service to retailers, businesses and customers.",
  },
  // {
  //   logo: "incenseLogo",
  //   title: "Incense Products",
  //   category: "Manufacturing",
  //   learnmore: "#",
  //   hash: "incense-products",
  //   image: movie,
  //   description:
  //     "Engaged in the manufacturing and distribution of premium incense products, delivering quality fragrances crafted to enhance homes, workplaces and spiritual spaces with tradition and excellence.",
  // },
];

function BusinessesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location]);
  return (
    <main className="business-page">
      <section className="business-hero">
        <img src={videoabout} alt="About Background" className="about-gif" />
        <div className="about-details-overlay"></div>

        <div className="business-overlay"></div>

        <div className="business-hero-content" data-aos="fade-up">
          <h1>Driving Progress Through Innovation</h1>
          <p>
            From Pest Management to IT Solutions, Healthcare, Interior and Film
            Production.
          </p>
        </div>
      </section>

      <section className="business-list-section">
        {businessGroups.map((business, index) => (
          <div
            id={business.hash}
            className={`business-showcase ${index % 2 !== 0 ? "reverse" : ""}`}
            key={business.title}
          >
            <div className="business-showcase-image">
              <img src={business.image} alt={business.title} />
            </div>

            <div className="business-showcase-content" data-aos="fade-up">
              {business.logo && (
                <img src={business.logo} alt={business.title} />
              )}

              <h2>{business.title}</h2>
              <p>{business.description}</p>

              <button onClick={() => window.open(business.learnmore, "_blank")}>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default BusinessesPage;
