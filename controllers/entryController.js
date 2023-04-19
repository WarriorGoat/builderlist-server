const Entry = require("../models/Entries");

//Request and display all entries
const getAllEntries = async (req, res) => {
  try {
    const allEntries = await Entry.find({});
    res.json({
      success: true,
      entries: allEntries,
    });
  } catch (e) {
    console.log(`Error Point 1` + e);
  }
}

//Create a new entry
 const createOneEntry = async (req, res, next) => {
  try {

    const newEntry = {
      company: req.body.company,
      author: req.body.author,
      contactFirstName: req.body.contactFirstName,
      contactLastName: req.body.contactLastName,
      contactEmail: req.body.contactEmail,
      companyAddress: {
      streetNum: req.body.streetNum,
      streetName: req.body.streetName,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode
      },
      companyWebSite: req.body.companyWebsite,
      licenseInfo: {
      licenseState: req.body.licenseState,
      licenseNum: req.body.licenseNum,
      licenseClass: req.body.licenseClass
      },
      workTypes: {
      type0: req.body.workType0,
      type1: req.body.workType1,
      type2: req.body.workType2,
      type3: req.body.workType3,
      type4: req.body.workType4,
      type5: req.body.workType5,
      type6: req.body.workType6,
      type7: req.body.workType7,
      type8: req.body.workType8,
      type9: req.body.workType9,
      },
      active: false,
      freeEstimates: false

    }

    console.log(newEntry)

    const createOne = await Entry.create(newEntry)

    
    

    //pass fields to new Entry model
    // const newEntry = new Entry({
    //   company,
    //   author,
    //   contactFirstName,
    //   contactLastName,
    //   contactEmail,
    //     streetNum,
    //     streetName,
    //     city,
    //     state,
    //     zipCode,
    //   companyWebSite,
    //     licenseState,
    //     licenseNum,
    //     licenseClass,
    //     type0,
    //     type1,
    //     type2,
    //     type3,
    //     type4,
    //     type5,
    //     type6,
    //     type7,
    //     type8,
    //     type9,
    //   active,
    //   freeEstimates
    // });

    //save our new entry to the database
    // const savedData = await newEntry.save();

    //return the successful request to the user
    res.json({
      success: true,
      entry: createOne,
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

// This section will update a single record, using the a dynamic id paramter.
async function updateOneEntry(req, res, next) {
}
// This section will pull a multiple records, using a location paramter.
async function getManyEntries(req, res, next) {
  // try {
  //   const oneEntry = Entry.findOne({ id: req.params.id });
  //   res.json({ entry: oneEntry });
  // } catch (error) {
  //   res.status(500).send(error);
  // }
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
  getAllEntries,
  createOneEntry,
  updateOneEntry,
  getOneEntry,
  getManyEntries,
  deleteOneEntry
};
