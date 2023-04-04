const express = require("express");
const entryRoutes = express.Router();
const { v4: uuidv4 } = require("uuid");
const entryController = require("../controllers/entryController");
uuidv4();

// GET All Blog Posts
entryRoutes.get("/all", entryController.getAllEntrys);

// This section will pull a single record, using the a dynamic id paramter.
entryRoutes.get("/getOne/:id", entryController.getOneEntry);

//add a new post
entryRoutes.post("/create-one", entryController.createOneEntry);

// This section will help you delete a record.
entryRoutes.delete("/deleteOne/:id", entryController.deleteOneEntry);

// This section will help you retrieve multiple records and sort them.
// blogRoutes.route('/getManyStatic').

module.exports = entryRoutes;
