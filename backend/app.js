const express = require("express");
require("dotenv").config();
const toffee_routes = require("./routes/toffee");
const sequelize = require("./util/database");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.use(toffee_routes);

sequelize.sync().then((_) => {
  app.listen(3000);
});
