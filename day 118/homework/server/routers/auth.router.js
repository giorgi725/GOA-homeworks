const express = require("express");
const { handleRegister, handleLogin } = require("../controllers/auth.controller");
const authRouter = express.Router();

authRouter.post('/signup', handleRegister)
authRouter.post('/login', handleLogin)

module.exports = authRouter;