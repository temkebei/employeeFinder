const express = require('express');
// const router = ecpress.Router();
const employeeslist = require('../data/employees')
// const router = express.Router();

// router.get('/api/employee',function(req,res))
module.exports = function (app) {
    //  to get all employees
    app.get("/api/employees", function (req, res) {
        res.json(employeesList);
    })

    // The app.post request handles when a user submits a form and 
    // thus submits data to the surver
    app.post('/api/employees', function (req, res) {
    res.json(employeeslist[req.params.index]);     
    });
};

// router.get('/api/employees',function(req,res){
//     res.json(req.body);
// });
// module.exports = router;

