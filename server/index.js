const express = require("express");
const cors = require("cors");
const { logger } = require("./middleware");
require("dotenv").config();

const app = express();

app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("uploads"));

const indexRoute = require("./routes/index");
const authRoute = require("./routes/authentication");
const articleRoute = require("./routes/article");
const userRoute = require("./routes/user");
const commentRoute = require("./routes/comment");
const uploadRoute = require("./routes/upload");

app.use(indexRoute.router);
app.use(authRoute.router);
app.use(articleRoute.router);
app.use(userRoute.router);
app.use(commentRoute.router);
app.use(uploadRoute.router);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:4000`);
});
