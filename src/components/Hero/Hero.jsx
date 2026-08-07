import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Welcome to <span>Book Haven</span>
        </h1>

        <p>
          Discover thousands of books from every genre.
          Explore, read, and organize your personal library
          with a beautiful and easy-to-use interface.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Explore Books
          </button>

          <button className="secondary-btn">
            Add New Book
          </button>

        </div>

      </div>

      <div className="hero-image">

        <div className="book-circle">

          📚

        </div>

      </div>

    </section>
  );
}

export default Hero;