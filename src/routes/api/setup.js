const { info } = require("../../lib/db");
const config = require("../../../config.json");

async function setup(req, res) {
  const isSetup = await info.get("setup");

  if (isSetup) {
    return res.status(400).json({ error: "Node has already been set up" });
  }

  const { adminKey, location, name } = req.body;

  const origin = req.headers.origin;

  if (!origin) {
    return res.status(400).json({ error: "Missing origin" });
  }

  if (!adminKey || !location || !name) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  await info.set("adminKey", adminKey);
  await info.set("location", location);
  await info.set("name", name);
  await info.set("setup", true);

  return res.status(200).json({ message: "Setup complete" });
}

module.exports = setup;
