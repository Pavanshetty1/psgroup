import "./BusinessesPage.css";
import pestLogo from "../assets/pest-logo.webp";
import itLogo from "../assets/pest-logo.webp";
import healthcareLogo from "../assets/pest-logo.webp";
import atelierLogo from "../assets/111.png";
import constructionLogo from "../assets/pest-logo.webp";
import filmLogo from "../assets/pest-logo.webp";
import bestservebusi from "../assets/bestservebusi.jfif";
import ittech from "../assets/ittech.jfif";
import movie from "../assets/movie.avif";
import jesta from "../assets/jesta.jfif";
import atelier from "../assets/atelier.avif";
import psventure from "../assets/psventure.avif";
// import videoabout from "../assets/businew.gif";
import videoabout from "../assets/businessnew3.webm";

import adhvi from "../assets/adhvi.webp";
import enterprise from "../assets/enterprise.jfif";
import jestaone from "../assets/jestanew1.png";
import fmcg from "../assets/fmcg.jfif";

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
    learnmore: "https://jestahealthcare.com/",
    hash: "healthcare",
    image: jesta,
    description:
      "Committed to enhancing healthcare outcomes through quality-driven services, trusted medical solutions and a patient-centric approach focused on accessibility, reliability and long-term well-being.",
  },
  {
    logo: atelierLogo,
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
    logo: "",
    title: "PS Ventures",
    category: "Distribution & Trading",
    learnmore: "#",
    hash: "enterprise",
    image: psventure,
    description:
      "PS Ventures is dedicated to building and promoting innovative business ventures through strategic investments, creative advertising, and growth-driven solutions that empower brands and businesses to thrive.",
  },
  {
    logo: "",
    title: "Samruddhi Enterprises - FMCG",
    category: "Consumer Goods",
    learnmore: "#",
    hash: "fmcg",
    image: fmcg,
    description:
      "Delivering trusted consumer products through efficient distribution networks, ensuring retailers and businesses have reliable access to quality essentials that support everyday living and customer satisfaction.",
  },
  {
    logo: "",
    title: "Jesta Infotech",
    category: "IT Solutions",
    learnmore: "https://www.google.com/",
    hash: "it-solutions",
    image: ittech,
    description:
      "Empowering businesses with innovative technology solutions, including software development, ERP, CRM, web platforms and digital transformation services designed to improve efficiency and accelerate growth.",
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
        {/* <img src={videoabout} alt="About Background" className="about-gif" /> */}
        <video className="about-gif" autoPlay muted loop playsInline>
          <source src={videoabout} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="about-detailss-overlay"></div>

        <div className="business-overlay"></div>

        <div className="business-hero-content" data-aos="fade-up">
          <h1>Driving Progress Through Innovation</h1>
          <p>
            From Pest Management to Healthcare, Interior and Film Production ,
            Enterprise , FMCG and IT Solutions.
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
