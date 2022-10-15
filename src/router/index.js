const { Router } = require("express");
const router = Router();

router.get("/teams", (req, res) => res.send("OK"));

module.exports = router;
