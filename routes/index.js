const router = require("express").Router();
const adminRoutes = require("./admin.routes");
const openRoutes = require("./open.routes");
const viewRoutes = require("./view.routes");

/* Randering Pages */
router.get("/", viewRoutes);

/* Admin Routes (require auth) */
router.use("/api/close", adminRoutes);

/* Common or Open Routes (anyone can access) */
router.use("/api/open", openRoutes);

module.exports = router;
