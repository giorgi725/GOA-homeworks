const express = require("express")
const router = express.Router();

router.post("/login", (req, res) => {
    res.send("User logged in"); 
});

router.post("/register", (req, res) => {
    res.send("User registered");
}); 

module.exports = router;