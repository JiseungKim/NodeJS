/*
    사용자 모듈 - app.js에서 불러들이는 함수 필요
*/
var express = require("express");
var router = express.Router();

/* GET home page */
router.get("/", function (req, res, nest) {
  res.render("login", { title: "Login" });
});

module.exports = router;
