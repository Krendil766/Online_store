const { Brand } = require("../models/models");
const ApiError = require("../error/apiError");

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }
  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands)
  }
  async del(req, res, next) {
    const { name } = req.body
    const brand = await Brand.findOne({
      where: { name }
    })
    if (!brand) {
      next(ApiError.badRequest('Нет такого товара'))
    }
    return res.send(brand)
  }
}

module.exports = new BrandController();
