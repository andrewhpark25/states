const router = require("express").Router();

const States = require("./states-model.js");

router.get("/", (req, res) => {
	States.getStates()
		.then((states) => {
			res.status(200).json({ states });
		})
		.catch((err) => res.send(err));
});

module.exports = router;
