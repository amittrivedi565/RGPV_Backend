const config = require("./config/config");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require('cors');
const path = require('path');

const PORT = config.PORT || 3000;
const HOST = config.HOST;

// parse application/json
app.use(bodyparser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
// CORS + BODY_PARSE
const corsOptions = {
    origin: [], // Add Client URL
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Set Static Folder
app.use("/public", express.static(path.join(__dirname, '/public')));

// Set the template engine as ejs
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

app.use("/api", require("./routes/notes.routes"));

app.use("/api", require("./routes/admin.routes"));

app.get("*", (req, res) => {
    res.status(404).render("../views/404");
});

app.listen(PORT, () => {
    console.log(`Server Connected : http://${HOST}:${PORT}`);
});
