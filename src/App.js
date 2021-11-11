import { useState } from "react";
import "./App.css";
import Movies from "./Api/Api.json";
import logo from "./Assets/images/logo.png";

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [page, setPage] = useState("movies");

  const addToWishlist = (movie) => {
    setWishlist([...wishlist, { ...movie }]);
  };

  const removeFromWL = (movieToRemove) => {
    setWishlist(wishlist.filter((movie) => movie !== movieToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderMovies = () => (
    <>
      <header>
        <div className="img-heder">
          <img className="img-logo" src={logo} alt="Image logo" />
        </div>
        <nav className="nav">
          <div className="nav-links">
            <ul>
              <li>
                <a onClick={() => navigateTo("movies")} className="active">
                  Home
                </a>
              </li>
              <li>
                <a onClick={() => navigateTo("wishlist")}>
                  Wishlist ({wishlist.length})
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="title">
          <h1 className="display-title judul">Top Movies</h1>
        </div>
        {Movies.map((movie, idx) => (
          <div className="card" key={idx}>
            <div className="img-card">
              <img
                className="img-card"
                src={movie.image}
                width="200px"
                alt={"Movies image " + idx}
              />
            </div>
            <div className="content-card">
              <h1>{movie.title}</h1>
              <p>{movie.desc}</p>
            </div>
            <div className="btn-group">
              <a
                onClick={() => addToWishlist(movie)}
                className="btn btn-success mt-2"
              >
                Add to Wishlist
              </a>
              <a
                href={movie.link}
                className="btn btn-info mt-2 text-decoration-none"
                target="_blank"
              >
                Detail Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  const renderWishlist = () => (
    <>
      <header>
        <div className="img-heder">
          <img className="img-logo" src={logo} />
        </div>
        <nav className="nav">
          <div className="nav-links">
            <ul>
              <li>
                <a onClick={() => navigateTo("movies")}>Home</a>
              </li>
              <li>
                <a onClick={() => navigateTo("wishlist")} className="active">
                  Wishlist ({wishlist.length})
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="container">
        <div className="title">
          <h1 className="display-title judul">Whislist</h1>
        </div>
        {wishlist.map((movie, idx) => (
          <div className="card" key={idx}>
            <div className="img-card">
              <img className="img-card" src={movie.image} width="200px" />
            </div>
            <div className="content-card">
              <h1>{movie.title}</h1>
              <p>{movie.desc}</p>
            </div>
            <div className="btn-group">
              <a className="btn btn-danger" onClick={() => removeFromWL(movie)}>
                Remove
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="App">
      {page === "movies" && renderMovies()}
      {page === "wishlist" && renderWishlist()}
    </div>
  );
}

export default App;
