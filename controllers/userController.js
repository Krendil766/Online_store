const ApiError = require("../error/apiError");

class UserController {
  async registration(req, res) {}

  async login(req, res) {}

  async check(req, res, next) {
    const query = req.query;
    if (!query.id) {
      return next(ApiError.badRequest("Не задан пароль"));
    }
    res.json(console.log(query.id));
  }
}

module.exports = new UserController();
