const { Type } = require("../models/models");
const ApiError = require("../error/apiError");

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name }); //создает элементы
    return res.json(type);
  }
  async getAll(req, res) {
    const types = await Type.findAll(); //найти все элементы на сервере
    return res.json(types)
  }
}

module.exports = new TypeController();
