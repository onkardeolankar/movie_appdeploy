import React, { useState } from "react";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// function MovieList() {
//   const movieList = INITIAL_MOVIE_LIST;
//   return (
//   )
// }

export function Movie({ movie, id }) {
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const [show, setShow] = useState(true);

  const paraStyles = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();

  return (
    <Card className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <CardContent>
        <div className="movie-specs">
          <h2 className="movie-name">
            {movie.name}
            <Button onClick={() => navigate("/movies/" + id)}>
              <InfoIcon />
            </Button>
            <IconButton variant="contained" onClick={() => setShow(!show)}>
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h2>
          <p style={styles} className="movie-rating">
            ⭐{movie.rating}
          </p>
        </div>

        {/* <p style={paraStyles} className="movie-summary">{movie.summary}</p> */}
        {/* conditional rendering */}
        {show ? (
          <p style={paraStyles} className="movie-summary">
            {movie.summary}
          </p>
        ) : (
          ""
        )}
        <Counter />
      </CardContent>
    </Card>
  );
}
