const db = require("../data/db-config.js");

module.exports = {
	getStates,
};

function getStates() {
	return db("states");
}
