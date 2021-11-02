const Car = require("./cars-model");
const vinValidator = require("vin-validator");

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
  const { vin, make, model, mileage } = req.body;
  if (typeof vin === "undefined") {
    next({
      status: 400,
      message: "vin is missing",
    });
  } else if (typeof make === "undefined") {
    next({
      status: 400,
      message: "make is missing",
    });
  } else if (typeof model === "undefined") {
    next({
      status: 400,
      message: "model is missing",
    });
  } else if (typeof mileage === "undefined") {
    next({
      status: 400,
      message: "mileage is missing",
    });
  } else {
    next();
  }
};

const checkVinNumberValid = async (req, res, next) => {
  const { vin } = req.body;
  const valid = vinValidator.validate(vin);
  if (!valid) {
    next({
      status: 400,
      message: `vin ${vin} is invalid`,
    });
  } else {
    next();
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  const { vin } = req.body;
  const carWithVin = await Car.getByVin(vin);
  if (carWithVin) {
    next({
      status: 400,
      message: `vin ${vin} already exists`,
    });
  } else {
    next();
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
