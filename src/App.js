import React, {useEffect, useState} from 'react';
import './App.css';
import Movie from "./components/Movie";
import SearchButton from "./components/Button"
 

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3c517892331a735aa3dae9ab8db39faa&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=3c517892331a735aa3dae9ab8db39faa&query=";


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(FEATURED_API)
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      
      setSearchTerm("");
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    getMovies(SEARCH_API + searchTerm)
  } 

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }
 
  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input 
            type="search" 
            className="search" 
            placeholder='Search...'
            value={searchTerm} 
            onChange={handleOnChange}
          />
         
        </form>
        <SearchButton handleClick={handleClick}/> 
      </header>
   
      <div className="movie-container">
        
        {
          movies.length > 0 && movies.map(movie => 
          <Movie  key={movie.id} {...movie}/>)
        } 
      </div>
    </>
  );
}

export default App;