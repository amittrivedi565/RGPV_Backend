const config = require("./config/config");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');
const { errors } = require("celebrate");

const PORT = config.PORT || 3000;
const HOST = config.HOST;

// CORS + BODY_PARSE
const corsOptions = {
    origin: [], // Add Client URL
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// parse application/json
app.use(bodyParser.json({ limit: '50mb' }));

// Set Static Folder
app.use("/public", express.static(path.join(__dirname, '/public')));

// Set the template engine as pug
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use("/", require("./routes"));

// Handle celebrate error
app.use(errors());

app.use("*", (req, res) => {
    res.status(404).render("../views/404");
});

app.listen(PORT, () => {
    console.log(`Server Connected : http://${HOST}:${PORT}`);
});
