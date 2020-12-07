const express = require("express");
const PORT = process.argv[2] || 3001;
const bodyParser = require("body-parser");
const userProvider = require("./services/user.service");

let cors = require("cors");
const app = express();
let jsonParser = bodyParser.json();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome on the search-in-github API!");
});

// Get all pokemons and project abstarct information {name, numero, numero}
app.get("/users/:username", (req, res) => {
  userProvider
    .getUser(req.params.username)
    .then((results) => {
      res.json(results);
    })
    .catch(function (err) {
      res.status(500).json({
        error: true,
        message: err.message,
      });
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
