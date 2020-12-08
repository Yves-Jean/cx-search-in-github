const express = require("express");
const PORT = process.argv[2] || 3001;
const bodyParser = require("body-parser");
const userService = require("./services/user.service");
const fetch = require("node-fetch");

let cors = require("cors");
const app = express();
let jsonParser = bodyParser.json();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome on the search-in-github API!");
});

app.get("/users/:username", (req, res) => {
  const username = req.params.username;

  userService
    .getUser(username)
    .then((results) => {
      if (results.length === 0) {
        fetch(`https://api.github.com/users/${username}`)
          .then((data) => {
            return data.json();
          })
          .then((user) => {
            if (user.message === "Not Found") {
              res.status(500).json([
                {
                  error: true,
                  message: "This user does not exist!",
                },
              ]);
            } else {
              userService.getUserById(user.id).then((result) => {
                if (result.length === 0) {
                  return userService
                    .insertUser(user)
                    .then((added) => {
                      res.json([user]);
                    })
                    .catch((err) => {
                      res.status(500).json({
                        error: true,
                        data: {
                          message: err.message,
                        },
                      });
                    });
                } else {
                  res.json(result);
                }
              });
            }
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
