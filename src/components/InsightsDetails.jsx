import { useNavigate, useParams } from "react-router-dom";
import { insights } from "../data/InsightData";
import "./InsightsDetails.css";

function InsightsDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const article = insights.find((item) => item.slug === slug);

  if (!article) {
    return (
      <section className="article-not-found">
        <h2>Article not found</h2>
        <button onClick={() => navigate("/insights")}>Back to Insights</button>
      </section>
    );
  }

  return (
    <main className="article-page">
      <section
        className="article-hero"
        style={{ backgroundImage: `url(${article.image})` }}
      >
        <div className="article-overlay"></div>

        <div className="article-hero-content" data-aos="fade-up">
          {/* <span>{article.category}</span> */}
          <h1>{article.title}</h1>
          {/* <p>Published by PS Group</p> */}
        </div>
      </section>

      <section className="article-body">
        {/* <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <p className="article-intro">{article.desc}</p> */}

        <div className="article-highlights">
          {article.highlights.map((item, index) => (
            <div key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="article-inline-image">
          <img src={article.articleImage} alt={article.title} />
        </div>

        <div className="article-short-content">
          {article.content.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        <div className="article-quote">“{article.quote}”</div>
      </section>
    </main>
  );
}

export default InsightsDetails;