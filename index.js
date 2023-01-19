const express = require("express");
const app = express();
const cors = require("cors");

const { WEB_PORT = 10000, ORIGIN = "http://localhost:3000" } = process.env;

app.use(
  cors({
    origin: ORIGIN,
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Web is online OLÁ");
});
app.listen(WEB_PORT, () => {
  console.log(`Web on ${WEB_PORT} is online`);
});
