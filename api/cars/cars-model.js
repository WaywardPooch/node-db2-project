const db = require("./../../data/db-config");

const getAll = async () => {
  const result = await db("cars");
  return result;
};

const getById = async (id) => {
  const result = await db("cars").where({ id });
  return result;
};

const create = async (car) => {
  const result = await db("cars").insert(car);
  return result;
};

module.exports = {
  getAll,
  getById,
  create,
};
