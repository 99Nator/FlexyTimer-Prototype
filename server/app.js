require("dotenv").config();

const express = require("express");

const path = require("path");

const app = express();

// tel Express where the static files are located
app.use(express.static(path.join(__dirname, "..", "client")));


const PORT = process.env.PORT;


app.get("/about", (req, res) => {
    res.send("About FleyTimer");
})

app.get("/contact", (req, res) => {
    res.send("Contact FlexyTimer");
})

app.get("/help", (req,res) => {
    res.send("Help FlexyTimer");
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    });




