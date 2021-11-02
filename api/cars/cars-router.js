const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("Reached /api/cars!");
  res.status(200).json({ message: "Reached /api/cars!" });
});

module.exports = router;
