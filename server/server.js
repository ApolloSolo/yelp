require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes"));

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log("Listening on port: " + PORT)
})