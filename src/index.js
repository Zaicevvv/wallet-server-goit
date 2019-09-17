const express = require("express");
const app = express();
const cors = require('cors');
const logger = require('morgan');
const allCosts = require("./db/costs/all-costs.json")
const config = require('./config');
const mongoose = require('mongoose')

mongoose.connect(config.mongodb_URI, {
  useFindAndModify: false,
  useNewUrlParser: true,
}, (error) => {
  if (error) console.log(error)
  console.log('DB connected... 😄');
})


const PORT = config.PORT;

const routes = require('./routes');
const apiRoutes = require('./routes/apiRoutes/apiRoutes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors('*'));
app.use(logger('dev'));

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server success started on ${PORT} port`);
});
// ghj
// app.get("/", (req, res) => {
//   res.send("Hello World +++");
// });

// app.get("/costs", (req, res) => {
//   res.status(200).json(allCosts);
// });

// app.get("/costs/:id", (req, res) => {
//   const result = { products: allCosts.find(cost => cost.id === Number(req.params.id)) }
//   res.status(200).json(result)
// });

// app.get("/costs", (req, res) => {
//   const category = req.query.category;

//   if (category) {
//     const result = { products: allCosts.filter(cost => cost.categories.join().includes(category)) }
//     res.status(200).json(result)
//   } else {
//     res.status(400).json("Need category in parameter")
//   }

// });

// app.post()

// app.use((req, res, next) => {
//   let err = new Error("not found");
//   err.status = 404;
//   next(err);
// });

// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.send("error");
// });

// app.listen(PORT, () => {
//   console.log("server is running on port: " + PORT);
// });
