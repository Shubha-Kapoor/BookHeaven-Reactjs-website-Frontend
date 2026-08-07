import "./SearchBar.css";

function SearchBar() {
  return (
    <section className="search-section">

      <h2>Find Your Next Read 📖</h2>

      <p>
        Search books by title, author, or category.
      </p>

      <div className="search-container">

        <input
          type="text"
          placeholder="🔍 Search books..."
          className="search-input"
        />

        <button className="search-btn">
          Search
        </button>
      </div>
    </section>
  );
}

export default SearchBar;