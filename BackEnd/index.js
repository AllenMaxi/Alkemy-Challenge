const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const axios = require("axios");

const host = "http://challenge-react.alkemy.org/";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"));

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const token = await axios.post(host, {
      email,
      password,
    });
    res.send(token.data.token);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/search", async (req, res) => {
  const heroName = req.query.hero;
  try {
    const heroeEncontrado = await axios.get(
      `https://superheroapi.com/api/10223518841870546/search/${heroName}`
    );

    res.send(heroeEncontrado.data);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/hero/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const hero = await axios.get(
      `https://superheroapi.com/api/10223518841870546/${id}`
    );
    res.send(hero.data);
  } catch (error) {
    res.send(error.message);
  }
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
