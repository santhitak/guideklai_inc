const express = require("express");
const cors = require("cors");
const { logger } = require("./middleware");
require("dotenv").config();

const app = express();

app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRoute = require("./routes/index");
const authRoute = require("./routes/authentication");
const articleRoute = require("./routes/article");
app.use(indexRoute.router);
app.use(authRoute.router);
app.use(articleRoute.router);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:4000`);
});
