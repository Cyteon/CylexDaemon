const api_router = require("./api/index");

const app = require("express");
const router = app.Router();

router.get("/", (req, res) => {
  res.send("OK");
});

router.use("/api", api_router);

module.exports = router;
