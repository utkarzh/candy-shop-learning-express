const express = require("express");
const route = express.Router();
const toffee = require("../controllers/toffee");

route.post("/", toffee.postToffee); //create
route.get("/", toffee.getToffees); //read
route.patch("/:id", toffee.reduceCount); //update
route.delete("/:id", toffee.deleteToffee); //delete
module.exports = route;
