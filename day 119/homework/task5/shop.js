const express = require("express"); 
const router = express.Router(); 

const items = [ 
    { id: 1, name: "Laptop" }, 
    { id: 2, name: "Phone" }, 
    { id: 3, name: "Mouse" } 
];

router.get("/shop/items", (req, res) => { 
    res.json(items); 
}); 

router.post("/shop/items", (req, res) => { 
    res.send("New item added"); 
}); 

router.put("/shop/items/:id", (req, res) => { 
    res.send(`Item with ID ${req.params.id} updated`); 
}); 

module.exports = router;