/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

// Add your magic here!
export const home = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.render("home", { pageTitle: "Home", movies });
  } catch (error) {
    res.render("home", { pageTitle: "Home", movies: [] });
  }
};

export const movieDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const movie = await Movie.findById(id);
    res.render("detail", { pageTitle: movie.title, movie });
  } catch (error) {
    res.render("404", { pageTitle: "Movie not found" });
  }
};

export const createMovie = async (req, res) => {
  if (req.method === "GET") {
    return res.render("create", { pageTitle: "Create" });
  } else if (req.method === "POST") {
    const {
      body: { title, year, rating, synopsis, genres }
    } = req;
    const newMovie = await Movie.create({
      title,
      year,
      rating,
      synopsis,
      genres: genres.split(",")
    });
    return res.redirect(`/${newMovie.id}`);
  }
};

export const editMovie = async (req, res) => {
  if (req.method === "GET") {
    const {
      params: { id }
    } = req;
    try {
      const movie = await Movie.findById(id);
      res.render("edit", {
        pageTitle: `Editing ${movie.title}`,
        movie,
        genres: movie.genres.toString()
      });
    } catch (error) {
      res.render("404", { pageTitle: "Movie not found" });
    }
  } else if (req.method === "POST") {
    const {
      params: { id },
      body: { title, year, rating, synopsis, genres }
    } = req;
    try {
      await Movie.findOneAndUpdate(
        { _id: id },
        { title, year, rating, synopsis, genres: genres.split(",") }
      );
      res.redirect(`/${id}`);
    } catch (error) {
      res.render("404", { pageTitle: "Movie can't update" });
    }
  }
};

export const deleteMovie = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Movie.findOneAndRemove({ _id: id });
    res.redirect("/");
  } catch (error) {
    res.render("404", { pageTitle: "Movie can't delete" });
  }
};

export const search = async (req, res) => {
  const {
    query: { year, rating }
  } = req;
  let movies = [];
  if (year) {
    try {
      movies = await Movie.find({
        year: { $gte: year }
      });
      res.render("search", {
        pageTitle: `Filtering by year: ${year}`,
        movies
      });
    } catch (error) {
      console.log(error);
    }
  }
  if (rating) {
    try {
      movies = await Movie.find({
        rating: { $gte: rating }
      });
      res.render("search", {
        pageTitle: `Filtering by rating: ${rating}`,
        movies
      });
    } catch (error) {
      console.log(error);
    }
  }
};
