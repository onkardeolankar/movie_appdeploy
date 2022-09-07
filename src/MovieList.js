import React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import { Movie } from "./Movie";

export function MovieList({ movieList, setMovieList }) {
  return (
    <div>
      <div className="movie-list-container">
        {movieList.map((mv, index) => (
          <Movie movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}
