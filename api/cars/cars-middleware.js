const Car = require("./cars-model");

const checkCarId = async (req, res, next) => {
  const { id } = req.params;
  const car = await Car.getById(id);
  if (typeof car === "undefined") {
    next({
      status: 404,
      message: `car with id ${id} is not found`,
    });
  } else {
    next();
  }
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
