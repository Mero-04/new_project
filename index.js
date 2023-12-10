const express = require("express")
const app = express();
const PORT = 80;

let ejs = require('ejs');

app.set('view engine', 'ejs')

app.use(express.static("public"))


app.get("/", (req, res) => {
    res.render("index", {
        title: "dashboard"
    })
})
app.get("/menu", (req, res) => {
    res.render("menu",{
        title: "menu"
    })
})
app.get("/service", (req, res) => {
    res.render("service", {
        title:"service"
    })
})
app.get("/blog", (req, res) => {
    res.render("blog", {
        title:"blog"
    })
})
app.get("/about", (req, res) => {
    res.render("about", {
        title:"about"
    })
})
app.get("/contact", (req, res) => {
    res.render("contact", {
        title:"contact"
    })
})





app.listen(PORT, () => {
    console.log(`Server listening ${PORT}`)
})