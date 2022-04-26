const express = require("express");
const cors = require("cors");
const { logger } = require("./middleware");

const app = express();

app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRoute = require("./routes/index");
const authRoute = require("./routes/authentication");

app.use(indexRoute.router);
app.use(authRoute.router);

app.listen(4000, () => {
  console.log(`Example app listening at http://localhost:4000`);
});
