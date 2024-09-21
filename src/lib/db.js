const { QuickDB } = require("quick.db");

const db = new QuickDB({ filePath: "./db.sqlite" });

const info = db.table("info");
const servers = db.table("servers");

module.exports = { db, servers, info };
