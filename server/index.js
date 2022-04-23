const express = require("express");
const cors = require("cors");
const Router = () => require("./routes/routes.js");
const { logger } = require("./middleware");

const app = express();

app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(Router);

app.listen(4000, () => {
  console.log(`Example app listening at http://localhost:4000`);
});
