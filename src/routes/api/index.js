const app = require("express");
const api_router = app.Router();
const setup = require("./setup");

api_router.get("/", (req, res) => {
  res.send("OK");
});

api_router.put("/setup", setup);

module.exports = api_router;
