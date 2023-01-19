// import dotenv
require('dotenv').config()
console.log(process.env)
// import controller
const controller = {}
// import model
var Customers = require('../models/Customers');



controller.index = (req, res) => {
  const data = {
    name: "John Smith",
    age: 20,
    city: "London"
  }

  res.json(data);
};

//

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
