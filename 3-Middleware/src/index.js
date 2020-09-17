import express from "express";

const app = express();
// Make 4 routes: "/" , "/about-us" , "/contact" and "/protected"

// Each route should render a string with the name of
// the page, i.e: "/about-us" -> About Us.
// Make one middleware for all the routes, that
//  middleware should console.log the message "I'm a middleware"
//  on every request to any route.
// Make a middleware that won't allow me to go to "/protected",
// if I try to go to "/protected" I should be redirected back to "/"

const handleHome = (req, res) => {
  res.send("Home");
};
const handleAbout = (req, res) => {
  res.send("About Us");
};
const handleContact = (req, res) => {
  res.send("Contact");
};
const handleProtect = (req, res) => {
  res.send("Protected");
};

const consoleMiddleware = (req, res, next) => {
  console.log("I'm a Middleware");
  next();
};

const protectRedict = (req, res, next) => {
  res.redirect("/");
};

app.use(consoleMiddleware);

app.get("/", handleHome);
app.get("/about-us", handleAbout);
app.get("/contact", handleContact);
app.get("/protected", protectRedict, handleProtect);
// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
