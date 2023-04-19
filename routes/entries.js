const express = require("express");
const entryRoutes = express.Router();
const { v4: uuidv4 } = require("uuid");
const entryController = require("../controllers/entryController");
uuidv4();

// GET All Entries
entryRoutes.get("/all", entryController.getAllEntries);

// This section will pull a single entry, using the company name paramter.
entryRoutes.get("/getOne/:companyName", entryController.getOneEntry);

//add a new entry
entryRoutes.post("/create-one", entryController.createOneEntry);

//update an existing entry
entryRoutes.post("/update-one", entryController.updateOneEntry);

// This section will help you delete an entry.
entryRoutes.delete("/deleteOne/:companyName", entryController.deleteOneEntry);

// This section will help you retrieve multiple records and sort them.
entryRoutes.get('/getManyStatic', entryController.getManyEntries)

module.exports = entryRoutes;
