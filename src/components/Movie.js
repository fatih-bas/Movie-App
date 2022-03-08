import React from 'react';

const setVoteClass = (vote) => {
  if(vote >= 8) {
    return "green";
  } else if (vote >=6){
    return "orange";
  } else {
    return "red"
  }
}

const Movie = (results) => {
  const IMG_API = "https://image.tmdb.org/t/p/w500/";
  return (

      <div className="movie">
        <img 
          src={
            results.poster_path
            ? IMG_API + results.poster_path
            : "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          } 
          alt={results.title}/>
        <div className="movie-info">
          <h3>{results.title}</h3>
          <span 
            className={`tag ${setVoteClass(results.vote_average)}`}>{results.vote_average}</span>
        </div>
        <div className="movie-overview">
        <h3>Overview</h3>
          <p>{results.overview}</p>
        </div>
          
  
      </div>
        
    
    
  )
};

export default Movie;
