const Entry = require("../models/Entrys");

//Request and display all blogs
async function getAllEntrys(req, res) {
  //query blogs
  try {
    const allEntrys = Entry.find({});
    res.json({
      success: true,
      blogs: allEntrys,
    });
  } catch (e) {
    console.log(`Error Point 1` + e);
  }
}

//Create a new blog
async function createOneEntry(req, res, next) {
  try {
    //parse out fields from POST request
    const title = req.body.title;
    const text = req.body.text;
    const author = req.body.author;
    const categories = req.body.category;
    const year = req.body.year;

    //pass fields to new Entry model
    const newEntry = new Entry({
      title,
      text,
      author,
      categories,
      year,
    });

    //save our new entry to the database
    const savedData = await newEntry.save();

    //return the successful request to the user
    res.json({
      success: true,
      blogs: savedData,
    });
  } catch (e) {
    console.log(typeof e);
    console.log(e);
    res.json({
      error: e.toString(),
    });
  }
}

// This section will pull a single record, using the a dynamic id paramter.
async function getOneEntry(req, res, next) {
  try {
    const oneEntry = Entry.findOne({ id: req.params.id });
    res.json({ entry: oneEntry });
  } catch (error) {
    res.status(500).send(error);
  }
}

// This section will pull a single record, using the a dynamic id paramter.
async function deleteOneEntry(req, res, next) {
  try {
    const oneEntry = Entry.findOneAndRemove({ id: req.params.id });
    res.json({ message: "Removed", entry: oneEntry });
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getAllEntrys,
  createOneEntry,
  getOneEntry,
  deleteOneEntry
};
