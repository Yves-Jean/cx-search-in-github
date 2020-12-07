const express = require("express");
const PORT = process.argv[2] || 3001;
const bodyParser = require("body-parser");
const userProvider = require("./services/user.service");
const fetch = require("node-fetch");

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
  const username = req.params.username;
  userProvider
    .getUser(username)
    .then((results) => {
      if (results.length === 0) {
        fetch(`https://api.github.com/users/${username}`)
          .then((data) => {
            return data.json();
          })
          .then((user) => {
            return userProvider
              .insertUser(user)
              .then((added) => {
                res.json(user);
              })
              .catch((err) => {
                res.status(500).json({
                  error: true,
                  data: {
                    message: err.message,
                  },
                });
              });
          })
          .catch(function (err) {
            console.log(err);
            res.status(500).json({
              error: true,
              data: {
                message: err.message,
              },
            });
          });
      } else {
        res.json(results);
      }
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
