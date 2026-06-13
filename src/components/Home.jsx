import { useEffect, useState } from "react";
import "./Home.css";
import pestManage from "../assets/pestmanage.avif";
import itsolution from "../assets/itsolution.avif";
import incensestick from "../assets/incensestick.jfif";
import film from "../assets/film.avif";
import health from "../assets/health.avif";
import enterprise from "../assets/enterprise.jfif";
import interior from "../assets/interior.jfif";
import pest from "../assets/pest1.webp";

const slides = [
  {
    title: "Protecting Homes & Businesses",
    image: pest,
    company: "Bestserve Pest Management Pvt Ltd",
  },
  {
    title: "Powering Digital Transformation",
    image: itsolution,
    company: "Jesta Infotech",
  },
  {
    title: "Care Beyond Treatment",
    image: health,
    company: "Jesta Healthcare",
  },
  {
    title: "Designing Spaces That Inspire",
    image: interior,
    company: "Atelier Progetto",
  },
  {
    title: "Bringing Stories to Life",
    image: film,
    company: "Adhvi Creations",
  },
  {
    title: "Creating Businesses That Shape Tomorrow",
    image: enterprise,
    company: "Samradhi Enterprises",
  },
  // {
  //   title: "INCENSE STICK",
  //   image: incensestick,
  // },
];

//];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="home">
      <section className="home-hero">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`hero-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="ps-title">PS GROUP</h1>

          <h1 className="hero-title">
            <span key={slides[current].title} className="changing-text">
              {slides[current].title}
            </span>
          </h1>
          <h3>{slides[current].company}</h3>
        </div>
      </section>
    </main>
  );
}

export default Home;
