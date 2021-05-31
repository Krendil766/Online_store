const ApiError = require("../error/apiError");

module.exports = function (err, req, res, next) {
  if (err in ApiError) {
    return res.sttus(err.status).json({
      message: err.message,
    });
  }
  return res.status(500).json({
    message: "Непредвиденная ошибка",
  });
};
