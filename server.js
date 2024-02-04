console.log("Web serverni boshlash")
const express = require("express")
const http = require("http")

const app = express()

// 1: Kirish kodlari. The app.use() function is used to mount the specified middleware function(s) at the path that is being specified. It is mostly used to set up middleware for your application.
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended: true})) //HTMLdan traditional request yuborsak, express serverimiz qabul qilib oladi

// 2: Session codes
// 3: Views
app.set("views", "views")
app.set("view engine ejs")

// 4: Routers
app.get("/", function(req, res) {
    res.send("<h1>Hello world! Welcome to Reja Project!</h1>")
})

const server = http.createServer(app)
let PORT = 3000
server.listen(PORT, function() {
    console.log(`The server is running on port: ${PORT}`)
})
