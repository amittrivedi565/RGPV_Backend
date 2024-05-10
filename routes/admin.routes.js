const router = require("express").Router();
const { signin } = require("../controllers/auth.controller");

/* Admin Login Route */
router.post("/login", signin.validator, signin.controller);

/* Course Routes */
router.post("/course", (req, res) => res.send(""));
router.put("/course/:id", (req, res) => res.send(""));
router.delete("/course/:id", (req, res) => res.send(""));

/* Branch Routes */
router.post("/branch", (req, res) => res.send(""));
router.put("/branch/:id", (req, res) => res.send(""));
router.delete("/branch/:id", (req, res) => res.send(""));

/* Semester Routes */
router.post("/sem", (req, res) => res.send(""));
router.put("/sem/:id", (req, res) => res.send(""));
router.delete("/sem/:id", (req, res) => res.send(""));

/* Subject Routes */
router.post("/subject", (req, res) => res.send(""));
router.put("/subject/:id", (req, res) => res.send(""));
router.delete("/subject/:id", (req, res) => res.send(""));

/* Unit Routes */
router.post("/unit", (req, res) => res.send(""));
router.put("/unit/:id", (req, res) => res.send(""));
router.delete("/unit/:id", (req, res) => res.send(""));

module.exports = router;
