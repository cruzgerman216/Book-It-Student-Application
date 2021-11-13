// import express Package
const express = require("express");

// initialize express
const app = express();

// server static build files from the 'dist' directory
app.use(express.static("./dist/BookIt"));

// route incoming server requests to the correct files
app.get("/*", (req, res)=>{
    res.sendFile("index.html", {root: "dist/BookIt"})
})

// start the app on the default heroku part
app.listen(process.env.Port || 8080);