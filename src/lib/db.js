const { QuickDB } = require("quick.db");

const db = new QuickDB({ filePath: "../../skill.issue" });

const servers = db.table("servers");
const info = db.table("info");

module.exports = { db, servers, info };
