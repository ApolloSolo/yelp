require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes"));

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("Listening on port: " + PORT)
})