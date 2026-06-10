import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchPage.css";

function SearchPage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const isSearchEmpty = query.trim() === "";

  const searchData = [
    { title: "Home", category: "Page", path: "/" },
    { title: "Our Story", category: "About", path: "/about" },
    { title: "About PS Group", category: "About", path: "/about" },
    { title: "Businesses", category: "Page", path: "/businesses" },
    {
      title: "Healthcare Solutions",
      category: "Business",
      path: "/businesses#healthcare",
    },
    {
      title: "IT Solutions",
      category: "Business",
      path: "/businesses#it-solutions",
    },
    {
      title: "Pest Management",
      category: "Business",
      path: "/businesses#pest-management",
    },
    {
      title: "Interior Solutions",
      category: "Business",
      path: "/businesses#interior",
    },
    {
      title: "Film Production",
      category: "Business",
      path: "/businesses#film-production",
    },
    { title: "Careers", category: "Page", path: "/careers" },
    {
      title: "Client",
      category: "Section",
      action: () => {
        navigate("/");
        setTimeout(() => {
          document.getElementById("client")?.scrollIntoView({
            behavior: "smooth",
          });
        }, 100);
      },
    },
    {
      title: "Contact",
      category: "Section",
      action: () => {
        navigate("/");
        setTimeout(() => {
          document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
          });
        }, 100);
      },
    },
  ];

  const filteredResults = searchData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (isSearchEmpty) return;
    if (filteredResults.length > 0) {
      navigate(filteredResults[0].path);
    }
  };

  const handleClear = () => {
    setQuery("");
  };
  const handleResultClick = (item) => {
    if (item.action) {
      item.action();
    } else {
      navigate(item.path);
    }
  };

  return (
    <main className="search-page">
      <section className="search-hero">
        <h1>Search</h1>
      </section>

      <form
        className="search-control"
        onSubmit={handleSearch}
        disabled={isSearchEmpty}
      >
        <input
          type="text"
          placeholder="Search careers, clients, healthcare..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />

        <button type="submit">Search</button>
        <button
          type="button"
          className="clear-btn"
          onClick={handleClear}
          disabled={isSearchEmpty}
        >
          Clear
        </button>
      </form>

      <section className="search-results">
        <h2>Search Results</h2>

        <p>
          {query.trim() === ""
            ? `${searchData.length} Results`
            : `${filteredResults.length} Results`}
        </p>

        {filteredResults.length === 0 && query.trim() !== "" ? (
          <div className="no-results">
            No results found. Try searching for careers, healthcare, clients or
            contact.
          </div>
        ) : (
          <div className="result-list">
            {(query.trim() === "" ? searchData : filteredResults).map(
              (item) => (
                <div
                  className="result-card"
                  key={item.title}
                  onClick={() => handleResultClick(item)}
                >
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>Explore {item.title} in PS Group</p>
                </div>
              ),
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default SearchPage;
