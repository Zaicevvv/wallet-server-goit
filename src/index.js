const express = require("express");
const allCosts = require("./db/costs/all-costs.json")

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World +++");
});

app.get("/costs", (req, res) => {
  res.status(200).json(allCosts);
});

app.get("/costs/:id", (req, res) => {
  const result = { products: allCosts.find(cost => cost.id === Number(req.params.id)) }
  res.status(200).json(result)
});

app.get("/costs", (req, res) => {
  const category = req.query.category;

  if (category) {
    const result = { products: allCosts.filter(cost => cost.categories.join().includes(category)) }
    res.status(200).json(result)
  } else {
    res.status(400).json("Need category in parameter")
  }

});

app.use((req, res, next) => {
  let err = new Error("not found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send("error");
});

app.listen(PORT, () => {
  console.log("server is running on port: " + PORT);
});
