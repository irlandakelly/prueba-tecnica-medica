// import controller
const controller = {}
// import model
var Customers = require('../models/Customers');


// retrieve all database records
controller.list = async (req, res) => {
  try {
    const response = await Customers.findAll()
      .then(function (data) {
        const res = { success: true, message: "Load successful", data: data }
        return res;
      })
      .catch(error => {
        const res = { success: false, error: error }
        return res;
      })

    return res.json(response);

  } catch (e) {
    console.log("Error controller.list");
    console.log(e)
  }
}

// create new database record
controller.create = async (req, res) => {
  
  try {
    const {name, email, address, phone } = req.body
    const response = await Customers.create({
      name,
      email, 
      address,
      phone
    })
      .then(function (data) {
        const res = { success: true, message: "Created succesfully", data: data }
        return res;
      })
      .catch(error => {
        const res = { success: false, error: error }
        return res;
      })

    res.json(response)

  } catch (e) {
    console.log(e)
  }
}

// update existing database record by id
controller.update = async (req, res) => {
  try {
    const {name, email, address, phone } = req.body
    const { id } = req.params;
    const response = await Customers.update({
      name,
      email, 
      address,
      phone
    }, {
      where: {
        id: id
      }
    })
      .then(function (data) {
        const res = { success: true, message: "Updated succesfully", data: data }
        return res;
      })
      .catch(error => {
        const res = { success: false, error: error }
        return res;
      })

    res.json(response);

  } catch (e) {
    console.log(e)
  }
}

// retieve single database record by id
controller.get = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Customers.findAll({
      where: {
        id: id
      }
    })
      .then(function (data) {
        const res = { success: true, data: data }
        return res;
      })
      .catch(error => {
        const res = { success: false, error: error }
        return res;
      })
    res.json(response);
  } catch (e) {
    console.log(e)
  }
}

// delete single database record by id
controller.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Customers.destroy({
      where: {
        id: id
      }
    })
      .then(function (data) {
        const res = { success: true, data: data, message: "Deleted successfully" }
        return res;
      })
      .catch(error => {
        const res = { success: false, error: error }
        return res;
      });
      res.json(response)
  } catch (e) {
    console.log(e)
  }
}

module.exports = controller;
