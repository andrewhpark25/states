const express = require("express");
const server = express();
const statesRouter = require("../states/states-router.js");

const helmet = require("helmet");
const cors = require("cors");

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/states", statesRouter);

server.get("/", (req, res) => {
	res.status(200).json({ message: "the API is up" });
});

module.exports = server;
