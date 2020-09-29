import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) =>
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};

export const getAdd = (req, res) => {
  res.render("addMovie", { pageTitle: "Add Movie" });
};
export const postAdd = (req, res) => {
  const {
    body: { title, synopsis, genres }
  } = req;
  const array = genres.split(",");
  console.log(array);
  addMovie({ title, synopsis, genres: array });
  res.redirect("/");
};
/*
Write the controller or controllers you need to render the form
and to handle the submission
*/
