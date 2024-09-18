const { info } = require("./lib/db");
const express = require("express");
const app = express();

let data = require("../config.json");

console.log(data.port);
console.log(info);
