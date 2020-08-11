/*
  Homepage를 서버로부터 응답에서 불러와서
  rendering(화면에 뿌려주기)를 한다
  - index 즉 index.ejs 파일을 불러오라고 하며
    데이터로는 json 형태로 넘기고 있다
*/
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" }); // {key: value}
});

module.exports = router;
