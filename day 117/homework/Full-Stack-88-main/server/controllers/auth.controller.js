const { readData, writeData } = require("../util/file");
const path = require('path');


const file_url = path.join(__dirname, "../Database/accounts.json");

const handleRegister = (req, res) => {
    const {username, email, password} = req.body;

    if (!username || !email || !password) {
        res.status(400).json({message: "All the info is required"})
    }

    const account = {
        id: Date.now(),
        username,
        email,
        password
    }
    
    const existingAccounts = readData(file_url)

    const alreadyExists = existingAccounts.find((acc) => acc.email === account.email || acc.username === account.username)

    if(alreadyExists) {
        return res.status(400).json({message: "Email or username is already in use"})
    }

    writeData(account, file_url)
    res.status(200).json({
        id: Date.now(),
        username,
        email
    })
}

const handleLogin = (req, res) => {
    const {username, password} = req.body;

    if(!username || !password) {
        return res.status(400).json({message: "All credentinals are required"})
    }

    const allAccounts = readData(file_url);

    const exists = allAccounts.find((acc) => acc.username === username && acc.password === password)

    if(!exists) {
        return res.status(404).json({message: "Credentials are incorrect, please try again"})
    }

    return res.status(200).json({
        id: exists.id,
        username: exists.username,
        email: exists.email
    })
}

module.exports = { handleRegister, handleLogin}