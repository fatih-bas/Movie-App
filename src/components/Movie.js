import React from "react";

const blankPoster =
  "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

const IMG_API = "https://image.tmdb.org/t/p/w500/";

const Movie = (results) => {
  return (
    <div className="movie">
      <img
        src={results.poster_path ? IMG_API + results.poster_path : blankPoster}
        alt={results.title}
      />
      <div className="movie-info">
        <h3>{results.title}</h3>
        <span className={`tag ${results.vote_average}`}>
          {results.vote_average}
        </span>
      </div>
      <div className="movie-overview">
        <h3>Overview</h3>
        <p>{results.overview}</p>
      </div>
    </div>
  );
};

export default Movie;
