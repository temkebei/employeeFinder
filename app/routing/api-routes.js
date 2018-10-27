const path = require ('path');
const express = require('express');
// const router = ecpress.Router();
const employeesList = require('../data/employees.js')

// router.get('/api/employee',function(req,res))
module.exports = function (app) {
    //  to get all employees
    app.get("/api/employees", function (req, res) {
        console.log("Get", employeesList)
        res.json(employeesList);

    })

    // The app.post request handles when a user submits a form and thus
    // submits data to the surver
    app.post('/api/employees', function (req, res) {
        console.log(req.body);
        //this mathematic look through all employeeList to randomly pick the match 
        let randomUser = Math.floor(Math.random() * employeesList.length)
        res.json(employeesList[randomUser]);
    });
};
