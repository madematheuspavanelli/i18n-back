const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3333;

app.use(bodyParser.json());
app.use(cors());

let title = "Default Title";
let language = "Default Language";

app.get("/dashboard", (req, res) => {
  res.json({ title, language });
});

app.put("/dashboard", (req, res) => {
  const { title: newTitle, language: newLanguage } = req.body;

  if (Boolean(newTitle)) {
    title = newTitle;
  } else {
    title = "home.fields.title.default";
  }

  if (Boolean(newLanguage)) {
    language = newLanguage;
  } else {
    language = "$t('home.fields.language.default')";
  }

  res.json({ title, language });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
