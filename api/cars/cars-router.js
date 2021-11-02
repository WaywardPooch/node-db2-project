const router = require("express").Router();
const Car = require("./cars-model");
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require("./cars-middleware");

router.get("/", async (req, res, next) => {
  try {
    const cars = await Car.getAll();
    res.status(200).json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkCarId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await Car.getById(id);
    res.status(200).json(car);
  } catch (err) {
    next(err);
  }
});

router.post("/", checkCarPayload, async (req, res, next) => {
  try {
    const newCar = await Car.create(req.body);
    res.status(201).json(newCar);
  } catch (err) {
    next(err);
  }
});

// Error Handler
// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
