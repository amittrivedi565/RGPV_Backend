const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require("body-parser")


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/public", express.static("public"));
app.set("view engine", "ejs");


app.get("*", (req, res) => {
    res.status(404).render("../public/views/404");
  });

  
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server Connected : http://localhost:${PORT}`)
})