const express = require("express");
const router = express.Router();

const students = [ 
    { id: 1, name: "Giorgi" }, 
    { id: 2, name: "Nika" }, 
    { id: 3, name: "Luka" } 
]; 

router.get("/students", (req, res) => { 
    res.json(students);
}); 

router.get("/students/:id", (req, res) => { 
    console.log(req.params.id);
    res.send(`Student ID: ${req.params.id}`); 
}); 

router.delete("/students/:id", (req, res) => { 
    console.log(req.params.id); 
    res.send(`Student with ID ${req.params.id} deleted`); 
}); 

module.exports = router;