const config = require("./config/config");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');

const PORT = config.PORT || 3000;
const HOST = config.HOST;

// parse application/json
app.use(bodyParser.json({ limit: '50mb' }));

// CORS + BODY_PARSE
const corsOptions = {
    origin: [], // Add Client URL
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Set Static Folder
app.use("/public", express.static(path.join(__dirname, '/public')));

// Set the template engine as pug
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

app.use("/", require("./routes/notes.routes"));

app.get("*", (req, res) => {
    res.status(404).render("../views/404");
});

app.listen(PORT, () => {
    console.log(`Server Connected : http://${HOST}:${PORT}`);
});
