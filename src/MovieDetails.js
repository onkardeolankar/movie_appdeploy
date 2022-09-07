import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { INITIAL_MOVIE_LIST } from "./App";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export function MovieDetails({ movieList }) {
	const { id } = useParams();
	const navigate = useNavigate();
	const movie = INITIAL_MOVIE_LIST[id];
	console.log(movie.name);
	return (
		<div>
			<h1>Details of - {movie.name}</h1>
			<iframe
				width="100%"
				height="570"
				src={movie.trailer}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
			<div className="movie-detail-container">
				<div className="movie-specs">
					<h2 className="movie-name">{movie.name}</h2>
					<p className="movie-rating">⭐{movie.rating}</p>
				</div>
			</div>
			<p className="movie-summary">{movie.summary}</p>
			<Button
				onClick={() => navigate(-1)}
				variant="contained"
				startIcon={<ArrowBackIosIcon />}
			>
				Back
			</Button>
		</div>
	);
}
