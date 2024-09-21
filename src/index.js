const router = require("./routes/index");
const cors = require("cors");
const express = require("express");
const app = express();

let data = require("../config.json");

app.use(express.json());
app.use(
  cors({
    origin: data.panelUrl,
  }),
);

app.listen(data.port, () => {
  console.log("Listening on port " + data.port.toString());
});

app.use("/", router);
