const express = require("express")
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))

// morgan - aris express is midleware 
// consolshi gamoaq statusebi (404, 200, 201)
// methodebi (get , post da sxva)

// middelware - შუამავალი ფუნქცია ყველაფერი რაც გაეშვება მოთხოვნის შემოსვლიდან პასუხის დაბრუნებამდე
function logrequest() {
    console.log("request received")
    next()
}
app.use(logrequest)

app.get("/", (req,res) => {
    console.log("request ")
    res.send("Main Data")
})

app.get("/info", (req,res, next) => {
    console.log("information page")
})

app.get("/info/:id", (req,res) => {
    res.send(`information ${req.params.id}`)
})

function checkadmin (req, res ,next) {
    if (req.query.user === "gio") {
        res.admin = true 
        next()
    } else { 
        res.send("not authorised")
    }
}

app.listen(3000, () => console.log("server is runnig"))





// SPECIFIC(EXCLUDED) MIDDLEWAre romelsac 4 parametri gadaecema

app.use("/", (req,res,next, error) => {
    console.log(error)
})