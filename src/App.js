import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const API_KEY = "3c517892331a735aa3dae9ab8db39faa";
const FEATURED_API = `https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1}`;
const SEARCH_API = `https://api.themoviedb.org/4/search/movie?&api_key=${API_KEY}&query=`;
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.page);
        setMovies(data.results);
      });
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            type="search"
            className="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
      </div>
    </>
  );
}

export default App;
