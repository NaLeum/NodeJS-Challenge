import express from "express";
import request from "request";

const app = express();

app.get("/", (req, res) => {
  let {
    query: { url }
  } = req;
  if (!url) {
    return res.send("home");
  } else {
    const http = "http://";
    if (url.indexOf(http) === -1) {
      url = http + url;
    }
    request(url, (error, response, body) => {
      if (response && response.statusCode <= 445) {
        return res.send("UP!");
      } else if (error || response.statusCode > 445) {
        return res.send("DOWN!");
      }
    });
  }
});

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
