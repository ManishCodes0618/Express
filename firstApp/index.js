const express = require("express");
const app = express();
//.use(): this method tells us if someone went on that server or the port.
// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST!");
//   res.send(`<h1>HELLO, THIS IS YOUR RESPONSE.</h1>`);
// });
//.listen(): this method starts a server on a specific port and waits for requests to that port.
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
});

app.get("/search", (req, res) => {
  console.log(req.query);
  res.send(`<h1>Search Results for: ${req.query.q}</h1>`);
});

app.get("/cats", (req, res) => {
  res.send("MEOW, now ima run this through nodemon part 2");
});

app.get("/", (req, res) => {
  res.send("HOME PAGE using nodemon");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF");
});

//THIS IS LIKE CATCH BLOCK. ADD THIS IN THE VERY ENDING. IF ANY OF THE PATH MENTIONED IS NOT FOUND, THEN THIS WILL BE EXECUTED.
app.get("/{*path}", (req, res, next) => {
  res.send("I DON'T KNOW THAT PATH!");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
