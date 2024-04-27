import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 2000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => { res.render("index.ejs") });

app.post("/submit", (req, res) => {
  let a = req.body["fName"] + req.body["lName"]
  console.log(a);
  res.render("index.ejs", { count: a.length })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
