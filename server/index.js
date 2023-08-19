const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("bubbles server is running");
});

app.get("/chat", (req, res) => {
  res.send({ user: "hello" });
});

app.listen(port, console.log(`bubbles server running on port ${port}`));
