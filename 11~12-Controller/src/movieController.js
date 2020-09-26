import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });
};
export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  const detail = getMovieById(id);
  if (!detail) {
    res.render("404", { pageTitle: "Error Page" });
  }
  return res.render("detail", { detail, pageTitle: detail.title });
};

export const filterMovie = (req, res) => {
  const {
    query: { year, rating }
  } = req;
  if (year) {
    const movies = getMovieByMinimumYear(year);
    return res.render("movies", {
      pageTitle: `Searching by year: ${year}`,
      searchingBy: "year",
      searchingTerm: year,
      movies
    });
  }
  if (rating) {
    const movies = getMovieByMinimumRating(rating);
    return res.render("movies", {
      pageTitle: `Searching by rating: ${rating}`,
      movies
    });
  }
  res.render("404", { pageTitle: "Movie not found" });
};
